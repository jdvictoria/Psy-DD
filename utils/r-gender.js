export const genderSymptoms = [
  // Gender Dysphoria in Children
  // Criteria A
  {
    label:
      'A strong desire to be of the other gender or an insistence that one is the other gender (At least 6 months)',
    value: 1,
  },
  {
    label: 'Strong preference for cross-dressing (At least 6 months)',
    value: 2,
  },
  {
    label:
      'A strong preference for cross-gender roles in make-believe play or fantasy play (At least 6 months)',
    value: 3,
  },
  {
    label:
      'A strong preference for the toys, games, or activities stereotypically used or engaged in by the other gender (At least 6 months)',
    value: 4,
  },
  {
    label:
      'A strong preference for playmates of the other gender (At least 6 months)',
    value: 5,
  },
  {
    label:
      'Strong rejection of typically masculine/feminine toys, games, and activities (At least 6 months)',
    value: 6,
  },
  {
    label: 'A strong dislike of one’s sexual anatomy (At least 6 months)',
    value: 7,
  },
  {
    label:
      'A strong desire for the primary and/or secondary sex characteristics that match one’s experienced gender (At least 6 months)',
    value: 8,
  },

  // Criteria B
  {
    label:
      'Is associated with clinically significant distress or impairment in social, school, or other important areas of functioning',
    value: 9,
  },

  // Gender Dysphoria in Adolescents and Adults
  {
    label:
      'Marked incongruence between one’s experienced/expressed gender and primary and/or secondary sex characteristics (At least 6 months)',
    value: 10,
  },
  {
    label:
      'Strong desire to be rid of one’s primary and/or secondary sex characteristics (At least 6 months)',
    value: 11,
  },
  {
    label:
      'Strong desire for the primary and/or secondary sex characteristics of the other gender (At least 6 months)',
    value: 12,
  },
  {
    label: 'Strong desire to be of the other gender (At least 6 months)',
    value: 13,
  },
  {
    label:
      'Strong desire to be treated as the other gender (At least 6 months)',
    value: 14,
  },
  {
    label:
      'Strong conviction that one has the typical feelings and reactions of the other gender (At least 6 months)',
    value: 15,
  },

  // Criteria B
  {
    label:
      'Condition is associated with clinically significant distress or impairment in social, school, or other important areas of functioning',
    value: 16,
  },
];

export const mainDisorderA = numbers => {
  const criteriaValues = [1, 2, 3, 4, 5, 6, 7, 8];
  const matchingCriteria = criteriaValues.filter(value =>
    numbers.includes(value),
  );
  return matchingCriteria.length >= 6;
};

export const optionalDisorderA = numbers => {
  return numbers.includes(9);
};

export const mainDisorderB = numbers => {
  const criteriaValues = [10, 11, 12, 13, 14, 15];
  const matchingCriteria = criteriaValues.filter(value =>
    numbers.includes(value),
  );
  return matchingCriteria.length >= 2;
};

export const optionalDisorderB = numbers => {
  return numbers.includes(16);
};

export const dsyphoriaDiagnosis = numbers => {
  if (mainDisorderA(numbers) || optionalDisorderA(numbers)) {
    return 'Gender Dysphoria in Children';
  } else if (mainDisorderB(numbers) || optionalDisorderB(numbers)) {
    return 'Gender Dysphoria in Adolescents and Adults';
  } else {
    return 'Other Specified / Unspecified Gender Dysphoria';
  }
};
