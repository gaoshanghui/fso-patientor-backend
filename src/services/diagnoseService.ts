// Service: handle data maniputation
import { DiagnoseEntry } from '../types';
import diagnosesData from '../../data/diagnoses';

export const getEntries = (): DiagnoseEntry[] => {
  return diagnosesData;
};
