import styled from "styled-components"

const Modal = ({onClose, children})=>{

    return (
        <>
        <Backdrop onClick={onClose}/>
        <Card>
            {children}
        </Card>
        </>
        
    )
}
export default Modal

const Card = styled.div`
background-color: aqua;
padding: 30px;
 border-radius: 10px;
min-width:200px;
box-sizing: border-box;
position: absolute;
top: 50vh;
left: 50vw;
transform: translate(-50%, -50%);

`

const Backdrop = styled.div`
position: absolute;
width: 100vw;
height: 100vh;
top: 0;
left: 0;
background-color: black;
opacity: 0.7;

`