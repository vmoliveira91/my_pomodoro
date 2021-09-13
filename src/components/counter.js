import Number from './number'

const Counter = ({ minutes, seconds}) => {
    return (
        <h2>
            <Number value={minutes}/>
            :
            <Number value={seconds}/>
        </h2>
    )
}

export default Counter