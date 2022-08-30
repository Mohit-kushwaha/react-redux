import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterAction } from '../store';
const Counter = () =>
{
  const counter = useSelector(state => state.counter.counter) //set the subscription
  const dispatch = useDispatch()
  const show = useSelector(state => state.counter.showCounter)
  const incrementHandler = () =>
  {
    dispatch(counterAction.increment())
  }
  const increaseHandler = () =>
  {
    dispatch(counterAction.increase(5))
  }
  const decrementHandler = () =>
  {
    dispatch(counterAction.decrement())
  }

  const toggleCounterHandler = () =>
  {
    dispatch(counterAction.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment + 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
