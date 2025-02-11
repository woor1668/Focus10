// src/components/Navbar.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  color: #fff;
  padding: 10px 20px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
`;

const NavItem = styled.li`
  a {
    color: #fff;
    text-decoration: none;
  }
`;

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Nav>
      <NavList>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/mypage">My Page</Link>
        </NavItem>
        <NavItem>
          <button
            onClick={handleLogout}
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
          >
            Logout
          </button>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
