import styled from 'styled-components'

import Button from './button'

const ButtonGroupStyle = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    row-gap: 15px;

    margin-bottom: 15px;
`

const ButtonGroup = () => {
    return (
        <ButtonGroupStyle>
            <Button text="15:00"/>
            <Button text="25:00"/>
            <Button text="30:00"/>
            <Button text="45:00"/>
            <Button text="50:00"/>
        </ButtonGroupStyle>
    )
}

export default ButtonGroup