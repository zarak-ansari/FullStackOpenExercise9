import axios from "axios";
import { useEffect, useState } from "react";
import { DiaryEntry } from "./types";
import Entry from "./components/Entry";

function App() {

  const [entries, setEntries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    axios.get<DiaryEntry[]>("http://localhost:3000/api/diaries/")
      .then(response => setEntries(response.data));
  }, [])
  
  return (
    <ul>
      {entries.map(entry => <Entry entry={entry}/>)}
    </ul>
  )
}

export default App
