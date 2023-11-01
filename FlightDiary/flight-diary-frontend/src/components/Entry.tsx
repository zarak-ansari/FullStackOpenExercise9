import { DiaryEntry } from "../types";

interface EntryProps {
    entry: DiaryEntry;
}

const Entry = (props: EntryProps) => {

    const entry = props.entry;
    return (
        <div>
          <p><strong>{entry.date}</strong></p>
          <p>Visibility: {entry.visibility}</p>
          <p>Weather: {entry.weather}</p>
        </div>
    );
}

export default Entry;