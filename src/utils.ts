import { NewPatient, Gender } from './types';

// type guard
const isString = (text: unknown): text is string => {
  return typeof text === 'string';
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

// parsers for each of the fields of object.
// validate the name field of the object.
const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error('Incorrect or missing name');
  }

  return name;
};

// validate the dateOfBirth field of the object.
const parseDateOfBirth = (dateOfBirth: unknown): string => {
  if (!dateOfBirth || !isString(dateOfBirth) || !isDate(dateOfBirth)) {
    throw new Error('Incorrect or missing date: ' + dateOfBirth);
  }

  return dateOfBirth;
};

// validate the ssn field of the object.
const parseSsn = (ssn: unknown): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error('Incorrect or missing ssn');
  }

  return ssn;
};

// validate the gender field of the object.
const parseGender = (gender: unknown): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error('Incorrect or missing gender: ' + gender);
  }

  return gender;
};

// validate the object's occupation field.
const parseOccupation = (occupation: unknown): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error('Incorrect or missing occupation: ' + occupation);
  }
  return occupation;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toNewPatientEntry = (object: any): NewPatient => {
  const newEntry: NewPatient = {
    name: parseName(object.name),
    dateOfBirth: parseDateOfBirth(object.dateOfBirth),
    ssn: parseSsn(object.ssn),
    gender: parseGender(object.gender),
    occupation: parseOccupation(object.occupation),
    entries: [],
  };

  return newEntry;
};

export default toNewPatientEntry;
