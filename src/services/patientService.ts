import patientsData from '../../data/patients.json';
import { Patient, NewPatient } from '../types';
import { v1 as uuid } from 'uuid';

const patientsEntries: Array<Patient> = patientsData;

const getNonSensitiveEntries = (): Omit<Patient, 'ssn'>[] => {
  return patientsEntries.map((entry) => ({
    id: entry.id,
    name: entry.name,
    dateOfBirth: entry.dateOfBirth,
    gender: entry.gender,
    occupation: entry.occupation,
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
  getNonSensitiveEntries,
  addPatient,
};
