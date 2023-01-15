import "./button.css"

const Button = (props) => {
    return (
        <button className="btn" onClick={props.onClick} style={{backgroundColor:props.backgroundColor}}>{props.children}</button>
    )
}
export default Button