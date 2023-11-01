import { DiaryEntry } from "../types";
import Entry from "./Entry";

interface EntriesListProps {
    entries: DiaryEntry[];
}

const EntriesList = (props:EntriesListProps) => {
    const entries = props.entries;

    return(
        <div>
            <h2>Diary Entries</h2>
            {entries.map(entry => <Entry key={entry.id} entry={entry}/>)}
        </div>
    );
}

export default EntriesList;