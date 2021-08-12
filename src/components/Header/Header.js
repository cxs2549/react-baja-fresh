import { useRef, useState } from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { RiShoppingCartLine } from 'react-icons/ri'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import Menu from './Menu/Menu'
import Overlay from './Overlay/Overlay'
import useOnClickOutside from 'use-onclickoutside'
import Cart from './Cart/Cart'

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
	background-color: #fff;
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
	svg {
		&:first-child:hover {
			color: var(--brandGreen);
		}
		&:last-child:hover {
			color: var(--brandRed);
		}
	}
`

const Header = () => {
	const [ open, setOpen ] = useState(false)
	const handleOpen = () => {
		setOpen(!open)
		document.body.classList.toggle('modal-open')
	}
	const handleClose = () => {
		setOpen(!open)
		document.body.classList.remove('modal-open')
	}
	const menuRef = useRef()
	useOnClickOutside(menuRef, () => handleClose)

	const [openCart, setOpenCart] = useState(false)
	return (
		<StyledHeader>
			<div ref={menuRef}>
				<HiOutlineMenuAlt3 onClick={handleOpen} />
				<Menu open={open} close={handleClose} />
				<Overlay open={open} close={handleClose} />
			</div>

			<div id="logo">
				<img src={logo} alt="" />
			</div>

			<div>
				<RiShoppingCartLine onClick={() => setOpenCart(!openCart)} />
				<Cart open={openCart} close={() => setOpenCart(false)} />
			</div>
		</StyledHeader>
	)
}
export default Header
