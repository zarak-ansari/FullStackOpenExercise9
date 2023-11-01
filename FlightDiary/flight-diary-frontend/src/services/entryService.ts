import axios from "axios";
import { DiaryEntry, NewDiaryEntry } from "../types";

const baseUrl = "http://localhost:3000/api/diaries/";

export const getAllEntries = () => {
    return axios
        .get<DiaryEntry[]>(baseUrl)
        .then(response => response.data);
}

export const createNewEntry = async (object: NewDiaryEntry) => {
    try{
        const response = await axios.post<DiaryEntry>(baseUrl, object)
        return response.data;
    } catch(error){
        if(axios.isAxiosError(error) && error.response){
            return error.response.data;
        }
    }
}