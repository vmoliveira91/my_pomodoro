import styled from 'styled-components'

const ButtonStyle = styled.button`
    background-color: #F79489;

    border: none;
    border-radius: 10px;

    box-sizing: border-box;
    padding: 10px;

    font-family: monospace;
    font-size: 28px;
    font-weight: bold;
    color: #FFFFFF;

    &:hover {
        cursor: pointer;
        
        background-color: #FADCD9;

        color: #F79489;
    }
`

const Button = ({ text, handleAction }) => {
    return <ButtonStyle onClick={handleAction}>{text}</ButtonStyle>
}

export default Button