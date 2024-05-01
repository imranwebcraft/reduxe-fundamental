import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/features/counter/counterSlice";

const Counter = () => {
	const value = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div className="w-full flex flex-col justify-center items-center mt-16 border-b-2">
			<h1 className=" text-5xl font-bold mb-2">{value}</h1>
			<div className=" flex gap-12 pb-5">
				<button
					onClick={() => dispatch(increment())}
					className="bg-purple-500 px-3 py-2 text-white rounded"
				>
					Increment
				</button>
				<button
					onClick={() => dispatch(decrement())}
					className="bg-rose-500 px-3 py-2 text-white rounded"
				>
					Decrement
				</button>
			</div>
		</div>
	);
};

export default Counter;
