import diagnosesData from '../../data/diagnoses.json';
import { Diagnose } from '../types';

const diagnosesEntries: Array<Diagnose> = diagnosesData;

const getDiagnosesEntries = (): Array<Diagnose> => {
  return diagnosesEntries;
};

export default { getDiagnosesEntries };
