import styled from 'styled-components'
const StyledMiracle = styled.div`
	padding: 1rem;
	padding-bottom: 1.75rem;
	border-bottom: 1px solid rgb(238, 238, 238);
	background-color: white;
	@media (min-width: 768px) {
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
	}
	h2 {
		font-weight: 500;
	}
	> div:first-of-type {
		margin-top: .75rem;
		a {
			color: inherit;
			text-decoration: none;
			font-weight: 500;
			border-bottom: 2px solid #333333c5;
			margin-right: 1em;
			&:first-of-type:hover {
				color: var(--brandGreen);
			}
			&:last-of-type:hover {
				color: var(--brandRed);
			}
		}
	}
	p {
		margin-top: 2rem;
		font-size: 92%;
	}
`
const Miracle = () => {
	return (
		<StyledMiracle>
			<h2>Miracle Mile</h2>
			<div>
				<a href="/">View Map</a>
				<a href="/">Store information</a>
			</div>
			<p>Open 10am to 8pm</p>
		</StyledMiracle>
	)
}
export default Miracle
