const Number = ({ value }) => {
    return (
        <span>
            {value < 10 ? value.toString().padStart(2, '0') : value.toString()}
        </span>
    )
}

export default Number