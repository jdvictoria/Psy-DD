export const dissociativeSymptoms = [
  // Common
  {
    label:
      'Clinically significant distress or impairment in social, occupational, or other important areas of functioning',
    value: 2,
  },

  // Dissociative Amnesia
  // Criteria A
  {
    label: 'Inability to recall important autobiographical information',
    value: 1,
  },

  // Criteria B
  // value 2

  // Criteria C
  {
    label:
      'Not attributable to the physiological effects of a substance or a neurological or other medical condition',
    value: 3,
  },

  // Criteria D
  {
    label:
      'Not better explained by dissociative identity disorder, posttraumatic stress disorder, acute stress disorder, somatic symptom disorder, or major or mild neurocognitive disorder',
    value: 4,
  },

  // Depersonalization/Derealization Disorder
  // Criteria A
  {
    label: 'Experiences of unreality, detachment, or being an outside observer',
    value: 5,
  },
  {
    label:
      'Experiences of unreality or detachment with respect to surroundings',
    value: 6,
  },

  // Criteria B
  {
    label: 'Reality testing remains intact',
    value: 7,
  },

  // Criteria C
  // value 2

  // Criteria D
  {
    label:
      'Not attributable to the physiological effects of a substance or another medical condition',
    value: 8,
  },

  // Criteria E
  {
    label:
      'Not better explained by another mental disorder, such as schizophrenia, panic disorder, major depressive disorder, acute stress disorder, posttraumatic stress disorder, or another dissociative disorder',
    value: 9,
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
  return (
    numbers.includes(6) ||
    numbers.includes(7) ||
    numbers.includes(2) ||
    numbers.includes(8) ||
    numbers.includes(9)
  );
};

export const dissociativeDiagnosis = numbers => {
  if (mainDisorderA(numbers) || optionalDisorderA(numbers)) {
    return 'Dissociative Amnesia';
  } else if (mainDisorderB(numbers) || optionalDisorderB(numbers)) {
    return 'Depersonalization / Derealization Disorder ';
  } else {
    return 'Other Specified / Unspecified Dissociatve Symptom and Related Disorder';
  }
};
