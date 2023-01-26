import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCount } from "../../actions/counts";

const Counter = () => {
  const { count } = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(changeCount(count));
  };
  useEffect(() => {
    console.log("Hello world!");
  }, [dispatch]);

  return (
    <Fragment>
      <div className="counter">
        <form onSubmit={handleClick}>
          <p>{count}</p>
          <button>Increment</button>
        </form>
      </div>
    </Fragment>
  );
};

export default Counter;
