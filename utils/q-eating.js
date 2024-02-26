export const eatingSymptoms = [
  // Pica
  // Criteria A
  {
    label:
      'Eating of nonnutritive, nonfood substances (Persistent / Over a period of at least 1 month)',
    value: 1,
  },

  // Criteria B
  {
    label:
      'Eating of nonnutritive, nonfood substances is inappropriate to the developmental level of the individual',
    value: 2,
  },

  // Criteria C
  {
    label:
      'Eating behavior is not part of a culturally supported or socially normative practice',
    value: 3,
  },

  // Criteria D
  {
    label:
      'Eating behavior occurs in the context of another mental disorder or medical condition (including pregnancy)',
    value: 4,
  },

  // Rumination Disorder
  // Criteria A
  {
    label:
      'Regurgitation of food (Repeated / Over a period of at least 1 month)',
    value: 5,
  },

  // Criteria B
  {
    label:
      'Regurgitation is not attributable to an associated gastrointestinal or other medical condition (Repeated)',
    value: 6,
  },

  // Criteria C
  {
    label:
      'Eating disturbance does not occur exclusively during the course of anorexia nervosa, bulimia nervosa, binge-eating disorder, or avoidant/restrictive food intake disorder',
    value: 7,
  },

  // Avoidant/Restrictive Food Intake Disorder
  // Criteria A
  {
    label: 'Significant weight loss',
    value: 8,
  },
  {
    label: 'Significant nutritional deficiency',
    value: 9,
  },
  {
    label: 'Dependence on enteral feeding or oral nutritional supplements',
    value: 10,
  },
  {
    label: 'Marked interference with psychosocial functioning',
    value: 11,
  },

  // Criteria B
  {
    label:
      'Not better explained by lack of available food or by an associated culturally sanctioned practice',
    value: 12,
  },

  // Criteria C
  {
    label:
      'Does not occur exclusively during the course of anorexia nervosa or bulimia nervosa, and there is no evidence of a disturbance in the way in which one’s body weight or shape is experienced',
    value: 13,
  },

  // Criteria D
  {
    label:
      'Not attributable to a concurrent medical condition or not better explained by another mental disorder (Severe)',
    value: 14,
  },

  // Anorexia Nervosa
  // Criteria A
  {
    label:
      'Weight that is less than minimally normal or, for children and adolescents',
    value: 15,
  },

  // Criteria B
  {
    label:
      'Fear of gaining weight or of becoming fat, or persistent behavior that interferes with weight gain (Intense)',
    value: 16,
  },

  // Criteria C
  {
    label:
      'Undue influence of body weight or shape on self evaluation, or persistent lack of recognition of the seriousness of the current low body weight',
    value: 17,
  },

  // Bulimia Nervosa
  // Criteria A
  {
    label: 'Eating, in a discrete period of time (Frequent)',
    value: 18,
  },
  {
    label: 'A sense of lack of control over eating during the episode',
    value: 19,
  },

  // Criteria B
  {
    label: 'Inappropriate compensatory behaviors (Recurrent)',
    value: 20,
  },

  // Criteria C
  {
    label:
      'Binge eating and inappropriate compensatory behaviors both occur (3 Months / At least once a week)',
    value: 21,
  },

  // Criteria D
  {
    label: 'Self-evaluation is unduly influenced by body shape and weight',
    value: 22,
  },

  // Criteria E
  {
    label:
      'Disturbance does not occur exclusively during episodes of anorexia nervosa',
    value: 23,
  },

  // Binge-Eating Disorder
  // Criteria A
  // value 18
  // value 19

  // Criteria B
  {
    label: 'Eating much more rapidly than normal',
    value: 24,
  },
  {
    label: 'Eating until feeling uncomfortably full',
    value: 25,
  },
  {
    label: 'Eating large amounts of food when not feeling physically hungry',
    value: 26,
  },
  {
    label:
      'Eating alone because of feeling embarrassed by how much one is eating',
    value: 27,
  },
  {
    label:
      'Feeling disgusted with oneself, depressed, or very guilty afterward',
    value: 28,
  },

  // Criteria C
  {
    label: 'Marked distress regarding binge eating is present',
    value: 29,
  },

  // Criteria D
  {
    label: 'The binge eating occurs (3 Months / At least once a week)',
    value: 30,
  },

  // Criteria E
  {
    label:
      'Binge eating is not associated with the recurrent use of inappropriate compensatory behavior as in bulimia nervosa and does not occur exclusively during the course of bulimia nervosa or anorexia nervosa',
    value: 31,
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
  return numbers.includes(6) || numbers.includes(7);
};

export const mainDisorderC = numbers => {
  const criteriaValues = [8, 9, 10, 11];
  const matchingCriteria = criteriaValues.filter(value =>
    numbers.includes(value),
  );
  return matchingCriteria.length >= 1;
};

export const optionalDisorderC = numbers => {
  return numbers.includes(12) || numbers.includes(13) || numbers.includes(14);
};

export const mainDisorderD = numbers => {
  return numbers.includes(15) && numbers.includes(16);
};

export const optionalDisorderD = numbers => {
  return numbers.includes(17);
};

export const mainDisorderE = numbers => {
  return (
    numbers.includes(18) &&
    numbers.includes(19) &&
    numbers.includes(20) &&
    numbers.includes(21) &&
    numbers.includes(22)
  );
};

export const optionalDisorderE = numbers => {
  return numbers.includes(23);
};

export const mainDisorderF = numbers => {
  return numbers.includes(30);
};

export const optionalDisorderF = numbers => {
  return (
    numbers.includes(18) ||
    numbers.includes(19) ||
    numbers.includes(24) ||
    numbers.includes(25) ||
    numbers.includes(26) ||
    numbers.includes(27) ||
    numbers.includes(28) ||
    numbers.includes(29) ||
    numbers.includes(31)
  );
};

export const eatingDiagnosis = numbers => {
  if (
    mainDisorderA(numbers) ||
    (mainDisorderA(numbers) && optionalDisorderA(numbers))
  ) {
    return 'Pica';
  } else if (
    mainDisorderB(numbers) ||
    (mainDisorderB(numbers) && optionalDisorderB(numbers))
  ) {
    return 'Rumination Disorder';
  } else if (
    mainDisorderC(numbers) ||
    (mainDisorderC(numbers) && optionalDisorderC(numbers))
  ) {
    return 'Avoidant/Restrictive Food Intake Disorder';
  } else if (
    mainDisorderD(numbers) ||
    (mainDisorderD(numbers) && optionalDisorderD(numbers))
  ) {
    return 'Anorexia Nervosa';
  } else if (
    mainDisorderE(numbers) ||
    (mainDisorderE(numbers) && optionalDisorderE(numbers))
  ) {
    return 'Bulimia Nervosa';
  } else if (
    mainDisorderF(numbers) ||
    (mainDisorderF(numbers) && optionalDisorderF(numbers))
  ) {
    return 'Binge-Eating Disorder';
  } else {
    return 'Other Specified / Unspecified Feeding and Eating Disorder';
  }
};
