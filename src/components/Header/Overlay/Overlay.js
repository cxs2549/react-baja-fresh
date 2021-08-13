import styled from "styled-components";
const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  opacity: ${(props) => (props.open ? 1 : 0)};
  z-index: 10;
  transition: all 500ms;
`;
const Overlay = ({ open, close }) => {
  return <StyledOverlay open={open} onClick={close}></StyledOverlay>;
};
export default Overlay;
