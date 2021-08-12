import styled from 'styled-components'
const StyledCount = styled.div`
  color: white;
  padding: 1.5rem 1rem;
  position: relative;
  border-bottom: 1px solid rgb(238, 238, 238);
  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    right: 0;
    width: 160px;
    height: 26px;
    background-image: linear-gradient(to left, rgb(244, 50, 38), transparent);
  }
  &::before {
    content: '';
    position: absolute;
    top: 4px;
    left: 0;
    width: 160px;
    height: 16px;
    background-image: linear-gradient(to right, rgb(244, 50, 38), transparent);
  }
  h1 {
    line-height: .8;
    font-size: 180%;
    margin-bottom: .5rem;
    color: rgb(9, 165, 111);
  }
  p {
    color: #333;
  }
  span {
    color: rgb(235, 177, 20);
    font-weight: 600;
  }
`
const Count = () => {
return (
<StyledCount>
  <h1>Make this <br /> order count</h1>
  <p>Sign into your <span>CLUB BAJA REWARDS</span> to earn points & use rewards</p>
</StyledCount>
)
}
export default Count