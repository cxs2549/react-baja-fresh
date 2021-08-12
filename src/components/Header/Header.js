import {useRef, useState} from 'react'
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { RiShoppingCartLine } from "react-icons/ri";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Menu from "./Menu/Menu";
import Overlay from "./Overlay/Overlay";
import useOnClickOutside from 'use-onclickoutside'

const StyledHeader = styled.header`
  height: 60px;
  display: flex;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 8px 0px;
  z-index: 10;
  #logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    img {
      max-width: 176px;
    }
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef()
  useOnClickOutside(menuRef, () => setOpen(false))
  return (
    <StyledHeader>
      <div ref={menuRef}>
        <HiOutlineMenuAlt3 onClick={() => setOpen(!open)} />
        <Menu open={open} close={() => setOpen(false)} />
        <Overlay open={open} close={() => setOpen(false)} />
      </div>

      <div id="logo">
        <img src={logo} alt="" />
      </div>

      <RiShoppingCartLine />
    </StyledHeader>
  );
};
export default Header;
