import ButtonGroup from './button-group'
import Counter from './counter'

const Main = () => {
    return (
        <main>
            <ButtonGroup />
            <Counter minutes={15} seconds={0}/>
        </main>
    )
}

export default Main