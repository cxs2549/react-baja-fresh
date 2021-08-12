import styled from 'styled-components'
import Count from "./Count/Count"
import Menu from "./Menu/Menu"
import Miracle from "./Miracle/Miracle"
import Start from "./Start/Start"

const StyledHome = styled.div`
 
  
`

const Home = () => {
  
  return (
    <StyledHome>
      <Start />
      <Miracle />
      <Count />
      <Menu />
    </StyledHome>
  )
}

export default Home
