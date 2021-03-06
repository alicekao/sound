import React from 'react';
import { NavItem } from 'react-bootstrap';

// Link compositional component receives calculated props from NavLink container
const NavLink = ({active, onClick, children}) => {
  return (
    <NavItem
      active={active}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      } }>
      {children}
    </NavItem>
  );
};

export default NavLink;