import styled from 'styled-components'
import { AiOutlineRight } from 'react-icons/ai'
import { FiEdit2 } from 'react-icons/fi'

const StyledStart = styled.div`
	padding: .75rem 1rem;
	border-bottom: 1px solid rgb(238, 238, 238);
	color: inherit;
	background-color: white;
	@media (min-width: 768px) {
		display: flex;
		gap: 1rem;
		justify-content: center;
		font-size: 110%;
	}
	button {
		background: none;
		color: inherit;
		border: none;
		font-size: 92%;
		display: flex;
		align-items: center;
		padding: 4px 0;
		cursor: pointer;
		&:first-of-type:hover {
			color: var(--brandGreen);
		}
    &:last-of-type:hover {
      span, svg {
        color: var(--brandRed);
      }
    }

		svg {
			font-size: .9rem;
			margin-left: .3em;
		}
	}
	span {
		font-weight: 600;
	}
`
const Start = () => {
	return (
		<StyledStart>
			<button>
				<div>Start a new order</div>
				<AiOutlineRight />
			</button>
			<button>
				<div>
					from<span> Miracle Mile</span>
				</div>
				<FiEdit2 />
			</button>
		</StyledStart>
	)
}
export default Start
