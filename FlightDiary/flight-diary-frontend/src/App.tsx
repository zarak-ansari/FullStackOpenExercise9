import { useEffect, useState } from "react";
import { DiaryEntry } from "./types";
import EntriesList from "./components/EntriesList";
import { getAllEntries } from "./services/entryService";

function App() {

  const [entries, setEntries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    getAllEntries().then(data => setEntries(data));
  }, [])
  
  return (
    <EntriesList entries={entries}/>
  );
}

export default App
