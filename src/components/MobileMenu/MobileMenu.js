import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
// import VisuallyHidden from '../VisuallyHidden';
import { COLORS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <UnstyledButton>
          <CloseIcon id='close' onClick={onDismiss} />
        </UnstyledButton>
        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(96, 100, 108, 0.80);
`;

const Content = styled(DialogContent)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  max-width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 32px;

  & * {
    text-decoration: none;
  }
`;

const CloseIcon = styled(Icon)`
  position: absolute;
  top: 26px;
  right: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
  text-transform: uppercase;
  
  & a {
    color: ${COLORS.gray[900]};
    :first-of-type {
      color: ${COLORS.secondary};
    }
  }
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  text-decoration: none;
  a {
    color: ${COLORS.gray[700]};
  }
  `


export default MobileMenu;
