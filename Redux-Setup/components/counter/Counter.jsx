import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCount } from "../../actions/counts";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const { count } = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(changeCount(counter));
  };
  useEffect(() => {
    console.log("Hello world!");
  }, [dispatch]);

  return (
    <Fragment>
      <div className="counter">
        <form onSubmit={handleClick}>
          <p>{count}</p>
          <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </form>
      </div>
    </Fragment>
  );
};

export default Counter;
