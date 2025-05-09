"use client";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/slices/counterSlice";
const Page = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <span className="fs-3 mb-3">{count}</span>
      <div className="d-flex gap-2">
        <button className="btn btn-success" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className="btn btn-danger" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Page;
