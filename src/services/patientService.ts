import { NonSensitivePatientEntry, PatientEntry } from '../types';
import patientsEntries from '../../data/patients';
import { v1 as uuid } from 'uuid';

export const getEntries = (): PatientEntry[] => {
  return patientsEntries;
};

export const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
  return patientsEntries.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

export const addEntry = (entry: Omit<PatientEntry, 'id'>): PatientEntry => {
  const newEntry = {
    id: uuid(),
    ...entry,
  };
  patientsEntries.push(newEntry);

  return newEntry;
};
