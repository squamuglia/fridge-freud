import React from 'react';

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
        <a href="/">Home</a>
      </li>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </ul>
  </nav>
);

export default Nav;
