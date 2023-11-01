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
                <p>Date: <input type="date" value={date} onChange={e => setDate(e.target.value)} /></p>
                <p>Weather:
                    {Object.values(Weather).map(weatherValue => {
                        return(
                        <span key={weatherValue}>
                            <input 
                                type="radio"
                                name="weather"
                                value={weatherValue}
                                id={weatherValue}
                                checked={weather === weatherValue}
                                onChange={e => setWeather(e.target.value)}
                            />
                            {weatherValue}
                        </span>)
                    })}
                </p>
                <p>Visibility: 
                    {Object.values(Visibility).map(visibilityValue => {
                        return(
                        <span key={visibilityValue}>
                            <input 
                                type="radio"
                                name="visibility"
                                value={visibilityValue}
                                id={visibilityValue}
                                checked={visibility === visibilityValue}
                                onChange={e => setVisibility(e.target.value)}
                            />
                            {visibilityValue}
                        </span>)
                    })}
                </p>
                <p>Comment: <input value={comment} onChange={e => setComment(e.target.value)} /></p>
                
                <button type="submit">Add New Diary Entry</button>
            </form>
        </div>
    );
}

export default NewEntryForm;