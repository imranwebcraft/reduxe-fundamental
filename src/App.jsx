import { useState } from "react";
import Counter from "./components/Counter";
import Stats from "./components/Stats";

const App = () => {
	const [counters, setCounters] = useState([
		{
			Id: 1,
			value: 0,
		},
		{
			Id: 2,
			value: 0,
		},
	]); // {} object

	function handleIncrement(counterID) {
		console.log(`id = ${counterID}`);
		const newCounters = counters.map((counter) =>
			counter.Id === counterID
				? { ...counter, value: counter.value + 1 }
				: counter
		);
		console.log(newCounters);

		setCounters(newCounters);
	}

	function handleDecrement(counterID) {
		const newCounters = counters.map((counter) =>
			counter.Id === counterID
				? { ...counter, value: counter.value - 1 }
				: counter
		);
		console.log(newCounters);
		setCounters(newCounters);
	}

	const totoalCount = counters.reduce(
		(result, currentValue) => result + currentValue.value,
		0
	);

	return (
		<div>
			<Counter
				Id={1}
				count={counters[0]?.value}
				onIncrement={handleIncrement}
				onDecrement={handleDecrement}
			/>
			<Counter
				Id={2}
				count={counters[1]?.value}
				onIncrement={handleIncrement}
				onDecrement={handleDecrement}
			/>
			<Stats totoalCount={totoalCount} />
		</div>
	);
};

export default App;
