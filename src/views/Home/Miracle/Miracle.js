import styled from 'styled-components'
const StyledMiracle = styled.div`
  padding: 1rem;
  padding-bottom: 1.75rem;
  border-bottom: 1px solid rgb(238, 238, 238);
  h2 {
    font-weight: 500;
  }
  >div:first-of-type {
    margin-top: .75rem;
    a {
      color: black;
      text-decoration: none;
      font-weight: 500;
      border-bottom: 2px solid black;
      margin-right: .75em;
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
  <p>
    Open 10am to 8pm
  </p>
</StyledMiracle>
)
}
export default Miracle