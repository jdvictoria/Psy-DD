export const eliminationSymptoms = [
  // Enuresis
  // Criteria A
  {
    label: 'Voiding of urine into bed or clothes (Repeated)',
    value: 1,
  },

  // Criteria B
  {
    label:
      'Presence of clinically significant distress or impairment in social, academic (occupational), or other important areas of functioning (At least twice a week for at least 3 consecutive months)',
    value: 2,
  },

  // Criteria C
  {
    label: 'At least 5 years of age',
    value: 3,
  },

  // Criteria D
  {
    label:
      'Not attributable to the physiological effects of a substance or another medical condition',
    value: 4,
  },

  // Encopresis
  // Criteria A
  {
    label:
      'Repeated passage of feces into inappropriate places (At least once a month / Repeated)',
    value: 5,
  },

  // Criteria B
  {
    label: 'At least 4 years of age',
    value: 6,
  },

  // Criteria C
  {
    label:
      'Not attributable to the physiological effects of a substance or another medical condition except through a mechanism involving constipation',
    value: 7,
  },

  // Criteria D
  {
    label:
      'Not attributable to the physiological effects of a substance or another medical condition',
    value: 8,
  },
];

export const mainDisorderA = numbers => {
  return numbers.includes(1);
};

export const optionalDisorderA = numbers => {
  return numbers.includes(2) || numbers.includes(3) || numbers.includes(4);
};

export const mainDisorderB = numbers => {
  return numbers.includes(5);
};

export const optionalDisorderB = numbers => {
  return numbers.includes(6) || numbers.includes(7) || numbers.includes(8);
};

export const eliminationDiagnosis = numbers => {
  if (
    mainDisorderA(numbers) ||
    (mainDisorderA(numbers) && optionalDisorderA(numbers))
  ) {
    return 'Enuresis';
  } else if (
    mainDisorderB(numbers) ||
    (mainDisorderB(numbers) && optionalDisorderB(numbers))
  ) {
    return 'Encopresis';
  } else {
    return 'Other Specified / Unspecified Elimination Symptom and Related Disorder';
  }
};
