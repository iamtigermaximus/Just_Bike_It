import React, { useState } from 'react'
import Link from 'next/link'

import styled from 'styled-components'
import colors from '../utils/colors'
import { FaBars, FaUser, FaTimes } from 'react-icons/fa'

const NavbarContainer = styled.nav`
  width: 100%;
  height: 10vh;
  background: ${colors.navy};
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
`

const NavbarLinks = styled.div`
  display: flex;
  flex-direction: column;
`
const BrandLinkItem = styled.h1`
  display: flex;
  flex-direction: row;
  color: ${colors.offWhite};
  margin: 10px 10px;
  padding: 10px;
  font-size: 20px;

  &:hover {
    cursor: pointer;
    text-shadow: 0.6px 0 0;
  }
`

const LinkItemContainer = styled.div`
 display: flex;
 justify-content: center
 align-items:center
 margin:20px;
 
 &:hover {
  background: ${colors.mediumBlue};
  border-radius: 5px;

}
`
const LinkItem = styled.h1`
  color: ${colors.offWhite};
  margin: 10px 10px;
  padding: 10px;
  width: 100%;

  &:hover {
    cursor: pointer;
    text-shadow: 0.6px 0 0;
  }
`
const BrandContainer = styled.div`
  display: flex;
  flex-direction: row;
  white-space: nowrap;

  &:hover {
    background: ${colors.mediumBlue};
    border-radius: 5px;
  }
`

// const NavigationSearchContainer = styled('div')`
//   display: flex;
//   margin: 15px;
//   align-items: center;
//   background-color: ${colors.gray};
//   border-radius: 4px;
//   width: 300px;
// `

const MobileNavigation = styled.div`
  display: flex;
`

const UserLink = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  padding-top: 7px;
  color: ${colors.offWhite};
  font-size: 25px;
`

const BurgerMenu = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 10px;
  padding: 5px;
  color: ${colors.offWhite};
  font-size: 30px;
`

const MobileMenuContainer = styled.ul`
  position: absolute;
  display: flex;
  justify-content: center;
  left: 0;
  top: 10vh;
  width: 100%;
  height: 100vh;
  background: ${colors.navy};
  transform: translateX(0%);
  transition: transform 0.3s ease-out;

  &.active {
    transform: translateX(-100%);
    transition: transform 0.3s ease-in;
  }
`

const Navbar = () => {
  const [click, setClick] = useState(true)
  const categoryMenu = () => setClick(!click)

  return (
    <NavbarContainer>
      <BrandContainer>
        <Link href='/'>
          <BrandLinkItem>Just Bike It!</BrandLinkItem>
        </Link>
      </BrandContainer>
      <MobileNavigation>
        <UserLink>
          <Link href='/profile'>
            <FaUser />
          </Link>
        </UserLink>
        <BurgerMenu onClick={categoryMenu}>
          {click ? <FaBars /> : <FaTimes />}
        </BurgerMenu>
      </MobileNavigation>
      <MobileMenuContainer
        className={click ? 'category active' : 'category'}
        onClick={categoryMenu}
      >
        <NavbarLinks>
          <LinkItemContainer>
            <Link href='/'>
              <LinkItem>City Bikes</LinkItem>
            </Link>
          </LinkItemContainer>
          <LinkItemContainer>
            <Link href='/cycling'>
              <LinkItem>Cycling</LinkItem>
            </Link>
          </LinkItemContainer>
          <LinkItemContainer>
            <Link href='/buy-a-pass'>
              <LinkItem>Buy a Pass</LinkItem>
            </Link>
          </LinkItemContainer>
        </NavbarLinks>
      </MobileMenuContainer>
    </NavbarContainer>
  )
}

export default Navbar
