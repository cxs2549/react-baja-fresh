import styled from 'styled-components'
import { FaUtensils } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

const StyledMenu = styled.div`
    padding: .75rem .5rem;
  #viewFull {
    margin-bottom: 1.5rem;
    >div:first-of-type {
      display: flex;
      align-items: center;
    }
    svg {
      margin-right: .35rem;
      font-size: 1.2rem;
    }
    span {
      font-size: 94%;
    }

  }
  #search {
    position: relative;
    input {
      padding: 8px 12px;
      box-shadow: inset 0 1px 2px 0 rgba(0,0,0,.1);
      font-size: 1rem;
      width: 100%;
      border:1px solid rgb(238, 238, 238);
      border-radius: 3px;
    }
    svg {
      color: rgb(85, 85, 85);
    }
    >div {
      position: absolute;
      right: 8px;
      top: 56%;
      transform: translateY(-50%);
    }
  }
  #cats {
    margin-top: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid rgb(238, 238, 238);
    ul {
      list-style-type: none;
      display: flex;
      li {
        white-space: nowrap;
        text-transform: capitalize;
        margin-right: .5rem;
        font-weight: 600;
        font-size: 94%;
        padding: 0 .75rem;
        position: relative;
        &:first-of-type::after {
          content: '';
          position: absolute;
          bottom: -1rem;
          left: 0;
          right: 0;
          height: 2px;
          background-color: black;
        }
      }
    }
  }
`
const Menu = () => {
  const cats = ['limited time offers', 'burritos', 'tacos', 'seafood tacos', 'taquitos', 'baja bowls', 'family meals', 'local favorites']
return (
<StyledMenu>
  <div id="viewFull">
    <div>
      <FaUtensils />
      <span>View Full Menu</span>
    </div>
    <div>

    </div>
  </div>
  <div id="search">
    <input type="search" placeholder="Search the menu" />
    <div>
      <BiSearch />
    </div>
  </div>
  <div id="cats">
    <ul>
      {cats.map((cat, i) => (
        <li key={i}>{cat}</li>
      ))}
    </ul>
  </div>
</StyledMenu>
)
}
export default Menu