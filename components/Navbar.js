import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import colors from '../utils/colors'
import Image from 'next/image'

const NavbarContainer = styled.nav`
  width: 100%;
  height: 10vh;
  background: ${colors.navy};
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
`
const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
`
const BrandLinkItem = styled.h1`
  display: flex;
  flex-direction: row;
  color: ${colors.offWhite};
  margin: 10px 10px;
  padding: 10px;

  &:hover {
    cursor: pointer;
    text-shadow: 0.6px 0 0;
  }
`
const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;

  &:hover {
    background: ${colors.mediumBlue};
    border-radius: 5px;
  }
`

const LinkItem = styled.h1`
  color: ${colors.offWhite};
  margin: 10px 10px;
  padding: 10px;

  &:hover {
    cursor: pointer;
    text-shadow: 0.6px 0 0;
  }
`

const UserIcon = styled.image`
  height: 20px;
  width: 20px;
`
const NavigationSearchContainer = styled('div')`
  display: flex;
  margin: 15px;
  align-items: center;
  background-color: ${colors.gray};
  border-radius: 4px;

  width: 300px;
`

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLinks>
        <LinksContainer>
          <Link href='/'>
            <BrandLinkItem>Just Bike It!</BrandLinkItem>
          </Link>
        </LinksContainer>
        <LinksContainer>
          <Link href='/'>
            <LinkItem>City Bikes</LinkItem>
          </Link>
        </LinksContainer>
        <LinksContainer>
          <Link href='/cycling'>
            <LinkItem>Cycling</LinkItem>
          </Link>
        </LinksContainer>
        <LinksContainer>
          <Link href='/buy-a-pass'>
            <LinkItem>Buy a Pass</LinkItem>
          </Link>
        </LinksContainer>
      </NavLinks>
      <NavLinks>
        <NavigationSearchContainer placeholder='Search' />
        <LinksContainer>
          <Link href='/profile'>
            <LinkItem>Login</LinkItem>
          </Link>
        </LinksContainer>
      </NavLinks>
    </NavbarContainer>
  )
}

export default Navbar
