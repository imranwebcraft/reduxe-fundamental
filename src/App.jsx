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
		// WAY _ONE
		// const findCounter = counters.map((counter) =>
		// 	counter.id === counterId
		// 		? { ...counter, value: counter.value + 1 }
		// 		: counter
		// );
		// setCounters(findCounter);
		// WAY _TWO
		// const newCounters = [...counters];
		// const findIndex = newCounters.findIndex(
		// 	(counter) => counter.id === counterId
		// ); // 0
		// newCounters[findIndex].value++;
		// setCounters(newCounters);
		// WAY _THREE

		const filteredCounter = counters.map((c) => {
			if (c.id === counterId) {
				return {
					...c,
					value: c.value + 1,
				};
			} else {
				return { ...c };
			}
		});

		setCounters(filteredCounter);
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

	// const totalCount = counters.reduce(
	// 	(result, currentValue) => result + currentValue.value,
	// 	0
	// );

	const total = () => {
		return counters.reduce(
			(result, currentValue) => result + currentValue.value,
			0
		);
	};

	return (
		<div>
			{counters.map((counter) => (
				<Counter
					key={counter.id}
					id={counter.id}
					count={counter.value}
					handleIncrement={handleIncrement}
					handleDecrement={handleDecrement}
				/>
			))}
			<Stats totalCount={total()} />
		</div>
	);
};

export default App;
