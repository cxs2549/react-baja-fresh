import styled from "styled-components";
import { FaUtensils } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import Section from "./Section/Section";
import data from "../../../data/data";

const StyledMenu = styled.div`
  padding: 0.5rem 0;
  overflow-x: hidden;
  background-color: white;
  #viewFull {
    margin-bottom: 1.5rem;
    padding: 0 0.5rem;
    > div:first-of-type {
      display: flex;
      align-items: center;
      &:hover {
        color: var(--brandRed);
      }
    }
    svg {
      margin-right: 0.35rem;
      font-size: 1rem;
    }
    span {
      font-size: 94%;
      cursor: pointer;
    }
  }
  #search {
    position: relative;
    padding: 0 0.5rem;
		width: 100%;
		@media (min-width: 640px) {
			max-width: 40%;

		}
    input[type="search"] {
      -webkit-appearance: none;
    }
    input {
      padding: 8px 12px;
      box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.1);
      font-size: 1rem;
      width: 100%;
      border: 1px solid rgb(238, 238, 238);
      border-radius: 3px;
    }
    svg {
      color: rgb(85, 85, 85);
    }
    > div {
      position: absolute;
      right: 16px;
      top: 56%;
      transform: translateY(-50%);
    }
  }
  #cats {
    margin-top: 0.75rem;
    padding: 1rem 0.5rem;
    border-bottom: 1px solid rgb(238, 238, 238);
    max-width: 100%;
    overflow-x: scroll;
    ul {
      list-style-type: none;
      display: flex;
      li {
        white-space: nowrap;
        text-transform: capitalize;
        margin-right: 0.5rem;
        font-weight: 600;
        font-size: 94%;
        padding: 0 0.75rem;
        position: relative;
        cursor: pointer;
        &:first-of-type::after {
          content: "";
          position: absolute;
          bottom: -1rem;
          left: 0;
          right: 0;
          height: 2px;
          background-color: #333333c5;
        }
        &:hover {
          color: var(--brandGreen);
        }
      }
    }
  }
`;
const Menu = () => {
  const cats = [
    "limited time offers",
    "burritos",
    "tacos",
    // 'seafood tacos',
    // 'taquitos',
    // 'baja bowls',
    // 'family meals',
    // 'local favorites'
  ];
  return (
    <StyledMenu>
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
      <Section title="limited time offers" data={data[0]} />
      <Section title="burritos" data={data[1]} />
      <Section title="tacos" data={data[2]} />
    </StyledMenu>
  );
};
export default Menu;
