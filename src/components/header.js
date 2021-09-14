import styled from 'styled-components'

import logo from '../images/tomato.png'

const HeaderStyle = styled.header`
    font-size: 32px;
    color: #F8AFA6;
    text-align: center;
    margin-bottom: 15px;
`

const ImgStyle = styled.img`
    width: 32px;
    height: 32px;

    padding-left: 10px;
`

const Header = () => {
    return (
        <>
            <HeaderStyle>
                My Pomodoro
                <ImgStyle src={logo} alt="MyPomodoro Logo" />
            </HeaderStyle>
        </>
    )
}

export default Header