import styled from 'styled-components'
import { FiEdit3 } from "react-icons/fi";

const StyledStart = styled.div`
padding: .75rem 1rem;
border-bottom: 1px solid rgb(238, 238, 238);
  button {
    background: none;
    border: none;
    font-size: 92%;
    display: flex;
    align-items: center;
    svg {
      font-size: 1.2rem;
      margin-left: .25em;
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
    <FiEdit3 />
  </button>
  <button>
    <div>from<span> Miracle Mile</span></div>
    <FiEdit3 />
  </button>
</StyledStart>
)
}
export default Start