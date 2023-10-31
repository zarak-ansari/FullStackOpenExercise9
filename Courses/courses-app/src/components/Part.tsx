import { CoursePart } from "../types";

interface CoursePartProp {
    part: CoursePart;
}

const Part = (props: CoursePartProp) => {
    const part = props.part;
    const nameAndExerciseCount = part.name + " - " + part.exerciseCount;

    switch(part.kind){
        case "basic":
            return(
                <>
                    <p><strong>{nameAndExerciseCount}</strong></p>
                    <p>{part.description}</p>
                </>
            )
        case "group":
            return(
                <>
                    <p><strong>{nameAndExerciseCount}</strong></p>
                    <p>Project Exercises:{part.groupProjectCount}</p>
                </>
            )
        case "background":
            return(
                <>
                    <p><strong>{nameAndExerciseCount}</strong></p>
                    <p>{part.description}</p>
                    <p>Background Material: {part.backgroundMaterial}</p>
                </>
            )
        case "special":
            return(
                <>
                    <p><strong>{nameAndExerciseCount}</strong></p>
                    <p>{part.description}</p>
                    <p>Required Skills: {part.requirements.join(", ")}</p>
                </>
            )
    }
    return (<>
        <p>{nameAndExerciseCount}</p>
    </>);
}

export default Part;