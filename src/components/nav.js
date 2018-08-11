import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { href: '/login', label: 'Login' },
  { href: '/register', label: 'Register' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link to={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </ul>
  </nav>
);

export default Nav;
