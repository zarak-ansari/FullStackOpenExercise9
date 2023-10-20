interface TotalProps {
    totalExerciseCount: number;
}

const Total = (props: TotalProps): JSX.Element => <p>Number of exercises {props.totalExerciseCount}</p>;

export default Total;