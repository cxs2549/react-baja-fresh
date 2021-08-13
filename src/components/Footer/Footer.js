import styled from 'styled-components'
import { FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi'

const StyledFooter = styled.footer`
	background-color: black;
	color: white;
	padding: 2rem 1rem;
	padding-bottom: 1rem;
	ul {
		list-style-type: none;
		@media (min-width: 1280px) {
			max-width: 60%;
		}
		&:first-of-type {
			width: 100%;
			display: grid;
			grid-template-columns: 1fr 1fr;
			justify-content: center;
			align-items: center;
			font-size: 130%;
			font-weight: bold;
			@media (min-width: 768px) {
				grid-template-columns: repeat(3, 1fr);
			}

			li {
				margin-bottom: .25rem;
			}
		}
		&:last-of-type {
			margin: 1.5rem 0;
			display: grid;
			grid-template-columns: 1fr 1fr;
			@media (min-width: 768px) {
				grid-template-columns: repeat(3, 1fr);
			}
			li {
				margin-bottom: .5rem;
			}
		}
		li {
			white-space: nowrap;
			text-transform: capitalize;
			/* margin-bottom: 1rem; */
			cursor: pointer;
			&:hover {
				color: var(--brandRed);
			}
		}
	}
	p {
		font-size: 94%;
	}
	#socials {
		display: flex;
		gap: 2rem;
		margin: 1.5rem 0;
		svg:hover {
			&:hover {
				color: var(--brandGreen);
			}
		}
	}
`

const Footer = () => {
	const links = [
		'about us',
		'club baja',
		'catering',
		'careers',
		'press',
		'gift cards',
		'own a franchise'
	]
	const links2 = [ 'terms of use', 'privacy', 'accessibility', 'sitemap' ]
	return (
		<StyledFooter>
			<div id="wrapper" className="globalWidth">
				<ul>{links.map((link, i) => <li key={i}>{link}</li>)}</ul>
				<ul>{links2.map((link, i) => <li key={i}>{link}</li>)}</ul>
				<p>
					&copy; 2021 Super Vision Design for MTY Franchising USA, Inc. <br /> All Rights
					Reserved.
				</p>
				<div id="socials">
					<div className="circle">
						<FiTwitter />
					</div>
					<div className="circle">
						<FiFacebook />
					</div>
					<div className="circle">
						<FiInstagram />
					</div>
				</div>
			</div>
		</StyledFooter>
	)
}

export default Footer
