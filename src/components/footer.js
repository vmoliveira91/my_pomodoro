import styled from 'styled-components'

const LinkStyle = styled.a`
    text-decoration: none;
    color: #F8AFA6;
`

const FooterStyle = styled.footer`
    font-size: 12px;
    text-align: center;
    color: #FADCD9;
`

const Footer = () => {
    return (
        <FooterStyle>
            Coded by 
            <LinkStyle href="https://github.com/vmoliveira91"> @vmoliveira91</LinkStyle>
        </FooterStyle>
    )
}

export default Footer