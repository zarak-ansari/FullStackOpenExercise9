import { useEffect, useState } from "react";
import { DiaryEntry } from "./types";
import EntriesList from "./components/EntriesList";
import { getAllEntries } from "./services/entryService";
import NewEntryForm from "./components/NewEntryForm";

function App() {

  const [entries, setEntries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    getAllEntries().then(data => setEntries(data));
  }, [])
  
  const appendEntry = (entry: DiaryEntry) => setEntries(entries.concat(entry));

  return (
    <div>
      <NewEntryForm appendEntry={appendEntry} />
      <EntriesList entries={entries}/>
    </div>
  );
}

export default App
