import styled from "styled-components";

const StyledSection = styled.div`
  margin-top: 1.5rem;
  #header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.5rem;
    > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      h1 {
        font-size: 140%;
        text-transform: capitalize;
      }
      span {
        font-size: 92%;
      }
    }
    button {
      background: none;
      border: none;
      font-weight: 500;
      border-bottom: 2px solid #333333c5;
      font-size: 94%;
      color: inherit;
    }
  }
  #cards {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    max-width: 100%;
    overflow-x: scroll;
    padding: 0.5rem;
    position: relative;
    #card {
      border: 1px solid #eaeaea;
      cursor: pointer;
      width: 50%;
      min-width: 230px;
      max-width: 230px;
      min-height: 300px;
      border-radius: 3px;
      box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 8px 0px;
      img {
        border-radius: 3px;
        max-width: 100%;
      }
      #text {
        padding: 0 0.5rem;
        padding-bottom: 0.5rem;
        h5 {
          text-transform: capitalize;
          font-size: 105%;
          margin-bottom: 0.5rem;
        }
        div {
          font-size: 94%;
          margin-bottom: 1rem;
        }
        p {
          font-size: 94%;
          line-height: 1.4;
        }
      }
    }
  }
`;

const Section = ({ data, title }) => {
  return (
    <StyledSection>
      <div id="header">
        <div>
          <h1>{title}</h1>
          <span>({data.length} items)</span>
        </div>
        <button>View All</button>
      </div>
      <div id="cards">
        {data.map((card, i) => (
          <div key={i} id="card">
            <img src={card.image} alt="" />
            <div id="text">
              <h5>{card.name}</h5>
              <div>
                {card.price && <span>${card.price} |</span>} {card.cals}{" "}
                Calories
              </div>
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </StyledSection>
  );
};

export default Section;
