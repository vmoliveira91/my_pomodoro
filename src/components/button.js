const Button = ({ text, handleAction }) => {
    return <button onClick={handleAction}>{text}</button>
}

export default Button