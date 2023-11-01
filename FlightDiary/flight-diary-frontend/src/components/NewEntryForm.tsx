import { useState } from "react";
import { DiaryEntry, Visibility, Weather } from "../types";
import { createNewEntry } from "../services/entryService";

interface NewEntryFormProps {
    appendEntry: (entry: DiaryEntry) => void
}

const NewEntryForm = (props: NewEntryFormProps) => {

    const [errorMessage, setErrorMessage] = useState(''); 

    const [date, setDate] = useState('');
    const [weather, setWeather] = useState('');
    const [visibility, setVisibility] = useState('');
    const [comment, setComment] = useState('');
    
    const addNewEntry = (event: React.SyntheticEvent) => {
        event.preventDefault();

        const newEntryObj = {
            date,
            weather: weather as Weather,
            visibility: visibility as Visibility,
            comment
        }

        createNewEntry(newEntryObj)
            .then(data => {
                if(data instanceof Object) {
                    props.appendEntry(data);
                    setDate('');
                    setWeather('');
                    setVisibility('');
                    setComment('');
                    setErrorMessage('');
                } else {
                    setErrorMessage(data);
                }
            });
        
    }

    return (
        <div>
            <h2>Add New Diary Entry</h2>
            {errorMessage && <p style={{color:"red"}}>{errorMessage}</p>}
            <form onSubmit={addNewEntry}>
                <p>Date: <input value={date} onChange={e => setDate(e.target.value)} /></p>
                <p>Weather: <input value={weather} onChange={e => setWeather(e.target.value)} /></p>
                <p>Visibility: <input value={visibility} onChange={e => setVisibility(e.target.value)} /></p>
                <p>Comment: <input value={comment} onChange={e => setComment(e.target.value)} /></p>
                
                <button type="submit">Add New Diary Entry</button>
            </form>
        </div>
    );
}

export default NewEntryForm;