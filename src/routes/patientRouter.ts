import express from 'express';
import { getNonSensitiveEntries, addEntry } from '../services/patientService';
import toNewPatientEntry from '../utils/toNewPatientEntry';

const router = express.Router();

router.get('/', (_req, res) => {
  const entries = getNonSensitiveEntries();
  res.json(entries);
});

router.post('/', (req, res) => {
  try {
    const newEntry = toNewPatientEntry(req.body);
    const addedEntry = addEntry(newEntry);

    res.json(addedEntry);
  } catch (error) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage = errorMessage + `Error: ${error.message}`;
    }

    res.status(400).send(errorMessage);
  }
});

export default router;
