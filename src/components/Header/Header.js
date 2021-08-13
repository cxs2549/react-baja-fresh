import { useRef, useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { RiShoppingCartLine } from "react-icons/ri";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import Menu from "./Menu/Menu";
import Overlay from "./Overlay/Overlay";
import useOnClickOutside from "use-onclickoutside";
import Cart from "./Cart/Cart";

const StyledHeader = styled.header`
  height: 60px;
  z-index: 10;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  #wrapper {
    padding: 0 1rem;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 8px 0px;
    background-color: #fff;
    display: flex;
    gap: 1rem;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    max-width: 1280px;
    margin: 0 auto;
    @media (min-width: 768px) {
      padding: 0 3.25rem;
    }
		@media (min-width: 1536px) {
			padding: 0 1rem;
		}

    #burger {
      @media (min-width: 768px) {
        display: none;
      }
    }
    #logo {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 9;
      img {
        max-width: 176px;
      }
    }
    > div:last-of-type {
      display: flex;
      align-items: center;
      gap: 2rem;
      > div:first-of-type {
        display: none;
        @media (min-width: 768px) {
          display: flex;
        }
        align-items: center;
        gap: 0.25rem;
        font-weight: 600;
      }
    }
    svg {
      &:first-child:hover {
        color: var(--brandGreen);
      }
      &:last-child:hover {
        color: var(--brandRed);
      }
    }
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    document.body.classList.toggle("modal-open");
  };
  const handleClose = () => {
    setOpen(false);
    document.body.classList.remove("modal-open");
  };
  const menuRef = useRef();
  useOnClickOutside(menuRef, () => handleClose);

  const [openCart, setOpenCart] = useState(false);
  const handleCartOpen = () => {
    setOpenCart(true);
    document.body.classList.toggle("modal-open");
  };
  const handleCartClose = () => {
    setOpenCart(false);
    document.body.classList.remove("modal-open");
  };
  const cartRef = useRef();
  useOnClickOutside(cartRef, handleCartClose);
  return (
    <StyledHeader>
      <div id="wrapper" className="">
        <div ref={menuRef}>
          <HiOutlineMenuAlt3 id="burger" onClick={handleOpen} />
          <Menu open={open} close={handleClose} />
          <Overlay open={open} close={handleClose} />
        </div>
        <div id="logo">
          <img src={logo} alt="" />
        </div>
        <div>
          <div>
            <AiOutlineUser />
            <span>Sign In</span>
          </div>
          <div ref={cartRef}>
            <RiShoppingCartLine onClick={handleCartOpen} />
            <Cart open={openCart} close={handleCartClose} />
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};
export default Header;
