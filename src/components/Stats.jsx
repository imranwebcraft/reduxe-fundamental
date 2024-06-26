const Stats = ({ totalCount }) => {
	return (
		<div className=" text-3xl font-semibold py-12 flex justify-center items-center">
			Total Count :{" "}
			<span className="text-sky-500 ml-2 text-5xl">{totalCount}</span>
		</div>
	);
};

export default Stats;
