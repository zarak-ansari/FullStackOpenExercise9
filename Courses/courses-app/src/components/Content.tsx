interface CourseProps {
    name: string,
    exerciseCount: number
}

interface ContentProps {
    courseParts: CourseProps [];
}

const Course = (props: CourseProps): JSX.Element => <p>{props.name} {props.exerciseCount}</p>

const Content = (props: ContentProps): JSX.Element => {

    return (
        <>
            {props.courseParts.map(coursePart => <Course name={coursePart.name} exerciseCount={coursePart.exerciseCount}/>)}
        </>
    )
}

export default Content;