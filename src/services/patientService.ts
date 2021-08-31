import patientsData from '../../data/patients.json';
import { Patient, NewPatient } from '../types';
import { v1 as uuid } from 'uuid';
import toNewPatientEntry from '../utils';

// const patientsEntries: Array<Patient> = patientsData.map((obj) => {
const patientsEntries = patientsData.map((obj) => {
  const object = toNewPatientEntry(obj) as Patient;
  object.id = obj.id;
  return object;
});

const getEntries = (): Patient[] => {
  return patientsEntries;
};

const getNonSensitiveEntries = (): Omit<Patient, 'ssn'>[] => {
  return patientsEntries.map((entry) => ({
    id: entry.id,
    name: entry.name,
    dateOfBirth: entry.dateOfBirth,
    gender: entry.gender,
    occupation: entry.occupation,
    entries: entry.entries,
  }));
};

const addPatient = (newPatientEntry: NewPatient): Patient => {
  const id = uuid();
  const newPatient = {
    ...newPatientEntry,
    id,
  };
  patientsEntries.push(newPatient);
  return newPatient;
};

export default {
  getEntries,
  getNonSensitiveEntries,
  addPatient,
};
