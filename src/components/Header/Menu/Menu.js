import styled from 'styled-components'
import { AiOutlineClose, AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
const StyledMenu = styled.div`
	position: absolute;
	left: ${(props) => (props.open ? 0 : '-100%')};
	top: 0;
	width: 86%;
	height: 100vh;
	background-color: #fff;
	transition: left 400ms;
	box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
	z-index: 12;
	display: flex;
	flex-flow: column;
	#header {
		height: 60px;
		display: flex;
		align-items: center;
		padding: 0 1rem;
		box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
		box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 8px 0px;
	}
`
const StyledHiThere = styled.div`
	padding: 1.7rem 1rem;
	h1 {
		margin-bottom: 1.8rem;
	}
	> div {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin: 1.2rem 0;
		cursor: pointer;
		&:first-of-type:hover {
			color: var(--brandGreen);
		}
		&:last-of-type:hover {
			color: var(--brandRed);
		}
		p {
			font-size: 116%;
		}
	}
`
const StyledLinks = styled.div`
	background-color: rgb(245, 245, 245);
	flex-grow: 1;
	padding: 1.75rem 1rem;
	display: flex;
	flex-flow: column;
	justify-content: space-between;
	ul {
		list-style-type: none;
		text-transform: capitalize;
		li {
			margin-bottom: 1.5rem;
			font-weight: 500;
			border-bottom: 2px solid black;
			width: min-content;
			white-space: nowrap;
			cursor: pointer;
      &:hover {
        color: var(--brandGreen);
      }
		}
	}
	span {
		font-weight: 500;
		border-bottom: 2px solid black;
		cursor: pointer;
    &:hover {
        color: var(--brandGreen);
      }
	}
`
const Menu = ({ open, close }) => {
	const links = [
		'contact us',
		'user agreement',
		'privacy policy',
		'online-tracking opt out guide',
		'locations',
		'open source licenses'
	]
	return (
		<StyledMenu open={open}>
			<div id="header">
				<AiOutlineClose onClick={close} />
			</div>
			<StyledHiThere>
				<h1>Hi there!</h1>
				<div>
					<AiOutlineHome />
					<p>Start a New Order</p>
				</div>
				<div>
					<AiOutlineUser />
					<p>Sign In / Create Account</p>
				</div>
			</StyledHiThere>
			<StyledLinks>
				<ul>{links.map((link, i) => <li key={i}><p>{link}</p></li>)}</ul>
				<div>
					Online Ordering by <span>Olo.com</span>
				</div>
			</StyledLinks>
		</StyledMenu>
	)
}
export default Menu
