import express from 'express';
import patientService from '../services/patientService';
import toNewPatientEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getNonSensitiveEntries());
});

router.get('/:id', (req, res) => {
  const patientEntries = patientService.getNonSensitiveEntries();

  try {
    const foundPatient = patientEntries.find((entry) => {
      return entry.id === req.params.id;
    });
    res.json(foundPatient);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post('/', (req, res) => {
  try {
    const newPatientData = toNewPatientEntry(req.body);
    const newPatient = patientService.addPatient(newPatientData);
    res.json(newPatient);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default router;
