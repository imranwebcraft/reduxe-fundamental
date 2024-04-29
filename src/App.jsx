import { useState } from "react";
import Counter from "./components/Counter";
import Stats from "./components/Stats";

const App = () => {
	const [counters, setCounters] = useState([
		{
			id: 1,
			value: 0,
		},
		{
			id: 2,
			value: 0,
		},
	]);

	const handleIncrement = (counterId) => {
		// increment the counter
		// const findCounter = counters.map((counter) =>
		// 	counter.id === counterId
		// 		? { ...counter, value: counter.value + 1 }
		// 		: counter
		// );
		// setCounters(findCounter);

		const newCounters = [...counters];
		const findIndex = newCounters.findIndex(
			(counter) => counter.id === counterId
		); // 0
		newCounters[findIndex].value++;

		setCounters(newCounters);
	};
	const handleDecrement = (counterId) => {
		// decrement the counter
		const findCounter = counters.map((counter) =>
			counter.id === counterId
				? { ...counter, value: counter.value - 1 }
				: { ...counter }
		);
		setCounters(findCounter);
	};

	const totalCount = counters.reduce(
		(result, currentValue) => result + currentValue.value,
		0
	);

	return (
		<div>
			<Counter
				id={1}
				count={counters[0].value}
				handleIncrement={handleIncrement}
				handleDecrement={handleDecrement}
			/>
			<Counter
				id={2}
				count={counters[1].value}
				handleIncrement={handleIncrement}
				handleDecrement={handleDecrement}
			/>
			<Stats totalCount={totalCount} />
		</div>
	);
};

export default App;
