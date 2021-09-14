import styled from 'styled-components'

import Header from './header'
import Main from './main'
import Footer from './footer'

const ContainerStyle = styled.div`
    background-color: #F9F1F0;

    box-sizing: border-box;
    border-radius: 10px;
    width: 360px;
    padding: 20px;

    font-family: monospace;
`

const Container = () => {
    return (
        <ContainerStyle>
            <Header />
            <Main />
            <Footer />
        </ContainerStyle>
    )
}

export default Container