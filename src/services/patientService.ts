import patientsData from '../../data/patients.json';
import { Patient } from '../types';

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

export default {
  getNonSensitiveEntries,
};
