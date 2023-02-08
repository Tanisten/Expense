import { createPortal } from "react-dom";
import styled from "styled-components";

export const Backdrop = ({ onClose }) => {
  return (
    <>
      {createPortal(
        <StyledBackdrop onClick={onClose} />,
        document.getElementById("backdropmodal")
      )}
    </>
  );
};

const Modal = ({ onClose, children }) => {
  return (
    <>
      {" "}
      {createPortal(
        <>
          <Backdrop onClose={onClose} />
          <Card>{children}</Card>
        </>,
        document.getElementById("modal")
      )}
    </>
  );
};
export default Modal;

const Card = styled.div`
  background-color: aqua;
  padding: 30px;
  border-radius: 10px;
  min-width: 200px;
  box-sizing: border-box;
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

const StyledBackdrop = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.7;
  z-index: 3;
`;
