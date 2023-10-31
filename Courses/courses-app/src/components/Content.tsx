import { CoursePart } from "../types";
import Part from "./Part";

interface ContentProps {
    courseParts: CoursePart [];
}

const Content = (props: ContentProps): JSX.Element => {

    return (
        <>
            {props.courseParts.map(coursePart => <Part part={coursePart}/>)}
        </>
    )
}

export default Content;