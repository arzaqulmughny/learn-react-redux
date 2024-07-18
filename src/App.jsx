import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './store/reducers/counterSlice';

const App = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);

    return (
        <div className='counter'>
            <button
                type='button'
                className='counter__decrement'
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
            <h1>{counter}</h1>
            <button
                type='button'
                className='counter__increment'
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
        </div>
    );
};

export default App;
