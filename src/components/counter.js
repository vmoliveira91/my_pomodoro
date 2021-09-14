import styled from 'styled-components'

import Number from './number'

const CounterStyle = styled.div`
    font-size: 48px;
    text-align: center;
    color: #F79489;
`

const Counter = ({ minutes, seconds}) => {
    return (
        <CounterStyle>
            <Number value={minutes}/>
            :
            <Number value={seconds}/>
        </CounterStyle>
    )
}

export default Counter