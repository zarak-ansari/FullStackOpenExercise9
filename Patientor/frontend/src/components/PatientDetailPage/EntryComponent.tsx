import { Typography } from "@mui/material";
import { Entry } from "../../types";

interface EntryProps {
    entry: Entry;
}

const EntryComponent = (props: EntryProps) => {
    const entry = props.entry;
    return (
        <div>
            <Typography variant="body1">Date: {entry.date}</Typography>
            <Typography variant="body1">Description: {entry.description}</Typography>
            {entry.diagnosisCodes && (
                <>
                    <Typography variant="body2">Diagnosis Codes:</Typography>
                    <ul>
                        {entry.diagnosisCodes.map(code => <li>{code}</li>)}
                    </ul>
                </>
            )}
            
        </div>    
    );
};

export default EntryComponent;