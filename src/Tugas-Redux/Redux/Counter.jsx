import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementWithCheckAction,
  increment,
} from "../App/features/counter/actions";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className='mt-3'>
      <button
        onClick={() => dispatch(increment(1))}
        className='btn btn-primary px-5'
      >
        +
      </button>
      <span className='mx-3 fw-bold'>{count}</span>
      <button
        onClick={() => dispatch(decrementWithCheckAction(1))}
        className='btn btn-danger px-5'
      >
        -
      </button>
    </div>
  );
};

export default Counter;
