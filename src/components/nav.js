import React, { Component } from 'react';
import Login from './login';
import Register from './register';
import LogOut from './logout';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Nav extends Component {
  state = {
    login: false,
    register: false,
    logout: false
  };

  componentDidMount() {
    let token = localStorage.getItem('token');
    if (token && token !== 'undefined') {
      fetch(this.props.url + '/api/v1/trytoken', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      })
        .then(response => response.json())
        .then(json =>
          this.props.logIn({
            token: json.token,
            username: json.user_details.username,
            userid: json.user_details.id,
            display_value: json.user_details.username,
            logged_in: true
          })
        );
    }
  }

  toggle = state => {
    if (this.state[state]) {
      this.setState(
        {
          ...this.state,
          [state]: false
        },
        () => console.log(state, this.state)
      );
    } else {
      this.setState(
        {
          ...this.state,
          [state]: true
        },
        () => console.log(state, this.state)
      );
    }
  };

  showLoginNav = () => {
    if (this.props.auth.logged_in) {
      return (
        <ul>
          <li>Hi, {this.props.auth.username}</li>
          <li key="log-out" onClick={() => this.toggle('logout')}>
            Log Out
          </li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li key="login" onClick={() => this.toggle('login')}>
            Login
          </li>
          <li key="register" onClick={() => this.toggle('register')}>
            Register
          </li>
        </ul>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <Login show={this.state.login} toggle={this.toggle} />
        <Register show={this.state.register} toggle={this.toggle} />
        <LogOut show={this.state.logout} toggle={this.toggle} />
        <nav>
          <ul>
            <li>
              <Link to="/">Fridge Freud</Link>
            </li>
            {this.showLoginNav()}
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

function msp(state) {
  return {
    url: state.url,
    auth: state.auth
  };
}

function mdp(dispatch) {
  return {
    logIn: state => {
      dispatch({ type: 'LOG_IN', payload: state });
    }
  };
}

export default connect(
  msp,
  mdp
)(Nav);
