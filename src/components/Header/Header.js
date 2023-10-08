import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Saledddd</NavLink>
          <NavLink href="/new">New&nbsp;Releasesdddddd</NavLink>
          <NavLink href="/men">Menddddddd</NavLink>
          <NavLink href="/women">Womendddddd</NavLink>
          <NavLink href="/kids">Kidsddddddddd</NavLink>
          <NavLink href="/collections">Collectionsdddddddd</NavLink>
        </Nav>
        <MobileNav>
          <Icon id='shopping-bag' color='black' size='24px' />
          <Icon id='search' color='black' size='24px'/>
          <Icon id='menu' color='black' size='24px' onClick={() => setShowMobileMenu(true)}/>
        </MobileNav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-x: auto;
  overflow-y: hidden;

  @media ${QUERIES.tabletAndDown} {
    border-top: 4px solid var(--color-gray-900);
    overflow-y: hidden;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(8px, 2.5vw, 48px);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;
  
const MobileNav = styled.nav`
  display: none;
  flex-grow: 1;
  
  & * {
    cursor: pointer;
  }
  
  @media ${QUERIES.tabletAndDown} {
    display: flex;
    gap: 24px;
    justify-content: flex-end;
  }
`;

const Side = styled.div`
  flex: 0 1 0;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
