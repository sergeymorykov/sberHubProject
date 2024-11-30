import React from 'react';
import { Link } from 'react-router-dom';
import { getNavigationsValue } from '@brojs/cli';

const navigations: Array<{ name: string; href: string }> = [
  {
    name: 'Регистрация',
    href: getNavigationsValue('sberhubproject.signup')
  }
];

const Header = (): React.ReactElement => {
  return (
    <header>
      <ul>
        {navigations.map((item) => {
          return (
            <li key={item.name}>
              <Link to={item.href}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
