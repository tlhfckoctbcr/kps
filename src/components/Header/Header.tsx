import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  width: 100%;
  max-width: 100%;
  z-index: 99;
`;

const HeaderNav = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 150px;
  width: 100%;
`;

const HeaderNavItem = styled.div`
  flex: 1 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Header() {
  return (
    <HeaderWrapper id='header'>
      <HeaderNav>
        <HeaderNavItem>King Post Studio, LLC</HeaderNavItem>
        <HeaderNavItem>Work</HeaderNavItem>
        <HeaderNavItem>Contact</HeaderNavItem>
      </HeaderNav>
    </HeaderWrapper>
  );
}

export default Header;
