const Counter = ({ count, handleDecrement, handleIncrement, id }) => {
	return (
		<div className="w-full flex flex-col justify-center items-center mt-16 border-b-2">
			<h1 className=" text-5xl font-bold mb-2">{count}</h1>
			<div className=" flex gap-12 pb-5">
				<button
					onClick={() => handleIncrement(id)}
					className="bg-purple-500 px-3 py-2 text-white rounded"
				>
					Increment
				</button>
				<button
					onClick={() => handleDecrement(id)}
					className="bg-rose-500 px-3 py-2 text-white rounded"
				>
					Decrement
				</button>
			</div>
		</div>
	);
};

export default Counter;
