import { Entry, Gender, NewPatient } from "./types";

export const toNewPatient = (object: unknown): NewPatient => {
    if(!object || typeof object !== 'object'){
        throw new Error('missing information');
    }

    if('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object && 'entries' in object){
        const newPatient: NewPatient = {
            name: parseName(object.name),
            dateOfBirth: parseDateOfBirth(object.dateOfBirth),
            ssn: parseSsn(object.ssn),
            gender: parseGender(object.gender),
            occupation: parseOccupation(object.occupation),
            entries: parseEntries(object.entries)
        };
        return newPatient;
    } else {
        throw new Error('incomplete or missing data');
    }
};

const parseName = (name: unknown): string => {
    if(!name || !isString(name)){
        throw new Error('invalid or missing name');
    }
    return name;
};

const parseDateOfBirth = (date: unknown): string => {
    if(!date || !isString(date) || !isDate(date)){
        throw new Error('missing or invalid date: '+ date);
    }
    return date;
};

const parseSsn = (ssn: unknown): string => {
    if(!ssn || !isString(ssn)) {
        throw new Error('missing or invalid ssn: ' + ssn);
    }
    return ssn;
};

const parseGender = (gender: unknown): Gender => {
    if(!gender || !isString(gender) || !isGender(gender)){
        throw new Error('invalid or missing gender: '+ gender);
    }
    return gender;
};

const parseOccupation = (occupation: unknown): string => {
    if(!occupation || !isString(occupation)){
        throw new Error('missing or invalid occupation');
    }
    return occupation;
};

const parseEntries = (entries: unknown): Entry [] => {
    if(!entries || !Array.isArray(entries)){
        throw new Error('Missing entries');
    }
    const parsedEntries = entries.map(entry => {
        if(typeof entry === 'object' && 'type' in entry && isString(entry.type)  && ['HealthCheck','Hospital','OccupationalHealthcare'].includes(String(entry.type))){
            return entry as Entry;
        } else {
            throw new Error('Entry doesn\'t have a type');
        }
    });
    return parsedEntries;
};

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const isDate = (str:string): boolean => {
    return Boolean(Date.parse(str));
};

const isGender = (str:string): str is Gender => {
    return Object.values(Gender).map(g => g.toString()).includes(str);
};
