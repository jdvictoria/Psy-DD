export const disruptiveSymptoms = [
  // Oppositional Defiant Disorder
  // Criteria A
  {
    label: 'Loses Temper (Within 6 months)',
    value: 1,
  },
  {
    label: 'Touchy or easily annoyed (Within 6 months)',
    value: 2,
  },
  {
    label: 'Angry and resentful (Within 6 months)',
    value: 3,
  },
  {
    label:
      'Argues with authority figures or, for children and adolescents, with adults (Within 6 months)',
    value: 4,
  },
  {
    label:
      'Actively defies or refuses to comply with requests from authority figures or with rules (Within 6 months)',
    value: 5,
  },
  {
    label: 'Deliberately annoys others (Within 6 months)',
    value: 6,
  },
  {
    label:
      'Blames others for his or her mistakes or misbehavior (Within 6 months)',
    value: 7,
  },
  {
    label: 'Spiteful or vindictive (Within 6 months)',
    value: 8,
  },

  // Criteria B
  {
    label: 'Disturbance in behavior is associated with distress',
    value: 9,
  },
  {
    label: 'Impacts negatively on important areas of functioning',
    value: 10,
  },

  // Criteria C
  {
    label:
      'Behaviors do not occur exclusively during the course of a psychotic, substance use, depressive, or bipolar disorder',
    value: 11,
  },
  {
    label: 'Do not meet for disruptive mood dysregulation disorder',
    value: 12,
  },

  // Intermittent Explosive Disorder
  // Criteria A
  {
    label: 'Verbal aggression or physical aggression (Within 12 months)',
    value: 13,
  },
  {
    label:
      'Damage or destruction of property and/or physical assault (Within 12 months)',
    value: 14,
  },

  // Criteria B
  {
    label: 'Improportionate aggressiveness',
    value: 15,
  },
  {
    label: 'Impacts negatively on important areas of functioning',
    value: 16,
  },

  // Criteria C
  {
    label: 'Aggressive outbursts are not premeditated',
    value: 17,
  },
  {
    label: 'Are not committed to achieve some tangible objective',
    value: 18,
  },

  // Criteria D
  {
    label:
      'Either marked distress in the individual or impairment in occupational or interpersonal functioning, or are associated with financial or legal consequences',
    value: 19,
  },

  // Criteria E
  {
    label: 'Atleast 6 years old',
    value: 20,
  },

  // Criteria F
  {
    label: 'Are not better explained by another mental disorder',
    value: 21,
  },

  // Conduct Disorder
  // Criteria A
  {
    label:
      'Bullies, threatens, or intimidates others (Within 12 months / Often)',
    value: 22,
  },
  {
    label: 'Initiates physical fights (Within 12 months / Often)',
    value: 23,
  },
  {
    label: 'Has used a weapon that can cause serious physical harm to others',
    value: 24,
  },
  {
    label: 'Has been physically cruel to people',
    value: 25,
  },
  {
    label: 'Has been physically cruel to animals',
    value: 26,
  },
  {
    label: 'Has stolen while confronting a victim',
    value: 27,
  },
  {
    label: 'Has forced someone into sexual activity',
    value: 28,
  },
  {
    label: 'Has deliberately engaged in fire setting',
    value: 29,
  },
  {
    label: 'Has deliberately destroyed others’ property',
    value: 30,
  },
  {
    label: 'Has broken into someone else’s house, building, or car',
    value: 31,
  },
  {
    label: 'Lies to obtain goods or favors or to avoid obligations (Often)',
    value: 32,
  },
  {
    label: 'Has stolen items of nontrivial value',
    value: 33,
  },
  {
    label:
      'Stays out at night despite parental prohibitions, beginning before age 13 years (Often)',
    value: 34,
  },
  {
    label:
      'Has run away from home overnight at least twice while living in the parental or parental surrogate home',
    value: 35,
  },
  {
    label: 'Without returning home once for a lengthy period',
    value: 36,
  },
  {
    label: 'Truant from school',
    value: 37,
  },

  // Criteria B
  {
    label: 'Impairment in social, academic, or occupational functioning',
    value: 38,
  },

  // Criteria C
  {
    label: '18 years or older',
    value: 39,
  },

  // Pyromania
  // Criteria A
  {
    label: 'Deliberate and purposeful fire setting (More than 1)',
    value: 40,
  },

  // Criteria B
  {
    label: 'Tension or affective arousal before the act',
    value: 41,
  },

  // Criteria C
  {
    label:
      'Fascination with, interest in, curiosity about, or attraction to fire and its situational contexts',
    value: 42,
  },

  // Criteria D
  {
    label:
      'Pleasure, gratification, or relief when setting fires or when witnessing or participating in their aftermath',
    value: 43,
  },

  // Criteria E
  {
    label:
      'Major neurocognitive disorder, intellectual developmental disorder [intellectual disability], substance intoxication',
    value: 44,
  },

  // Criteria F
  {
    label:
      'Is not better explained by conduct disorder, a manic episode, or antisocial personality disorder',
    value: 45,
  },

  // Kleptomania
  // Criteria A
  {
    label:
      'Failure to resist impulses to steal objects that are not needed for personal use or for their monetary value (Often)',
    value: 46,
  },

  // Criteria B
  {
    label:
      'Increasing sense of tension immediately before committing the theft',
    value: 47,
  },

  // Criteria C
  {
    label:
      'Pleasure, gratification, or relief at the time of committing the theft',
    value: 48,
  },

  // Criteria D
  {
    label:
      'The stealing is not committed to express anger or vengeance and is not in response to a delusion or a hallucination',
    value: 49,
  },

  // Criteria E
  {
    label:
      'Is not better explained by conduct disorder, a manic episode, or antisocial personality disorder',
    value: 50,
  },
];

export const mainDisorderA = numbers => {
  const criteriaValues = [1, 2, 3, 4, 5, 6, 7, 8];
  const matchingCriteria = criteriaValues.filter(value =>
    numbers.includes(value),
  );
  return matchingCriteria.length >= 8;
};

export const optionalDisorderA = numbers => {
  return (
    numbers.includes(9) ||
    numbers.includes(10) ||
    numbers.includes(11) ||
    numbers.includes(12)
  );
};

export const mainDisorderB = numbers => {
  const criteriaValues = [13, 14];
  const matchingCriteria = criteriaValues.filter(value =>
    numbers.includes(value),
  );

  const criteriaValues2 = [15, 16];
  const matchingCriteria2 = criteriaValues2.filter(value =>
    numbers.includes(value),
  );

  return matchingCriteria.length >= 1 && matchingCriteria2 >= 2;
};

export const optionalDisorderB = numbers => {
  return (
    numbers.includes(17) ||
    numbers.includes(18) ||
    numbers.includes(19) ||
    numbers.includes(20) ||
    numbers.includes(21)
  );
};

export const mainDisorderC = numbers => {
  const criteriaValues = [
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
  ];
  const matchingCriteria = criteriaValues.filter(value =>
    numbers.includes(value),
  );
  return matchingCriteria.length >= 3;
};

export const optionalDisorderC = numbers => {
  return numbers.includes(38) || numbers.includes(39);
};

export const mainDisorderD = numbers => {
  return numbers.includes(40);
};

export const optionalDisorderD = numbers => {
  return (
    numbers.includes(41) ||
    numbers.includes(42) ||
    numbers.includes(43) ||
    numbers.includes(44) ||
    numbers.includes(45)
  );
};

export const mainDisorderE = numbers => {
  return numbers.includes(46);
};

export const optionalDisorderE = numbers => {
  return (
    numbers.includes(47) ||
    numbers.includes(48) ||
    numbers.includes(49) ||
    numbers.includes(50)
  );
};

export const anxietyDiagnosis = numbers => {
  if (mainDisorderA(numbers) || optionalDisorderA(numbers)) {
    return 'Oppositional Defiant Disorder';
  } else if (mainDisorderB(numbers) || optionalDisorderB(numbers)) {
    return 'Intermittent Explosive Disorder';
  } else if (mainDisorderC(numbers) || optionalDisorderC(numbers)) {
    return 'Conduct Disorder';
  } else if (mainDisorderD(numbers) || optionalDisorderD(numbers)) {
    return 'Pyromania';
  } else if (mainDisorderE(numbers) || optionalDisorderE(numbers)) {
    return 'Kleptomania';
  } else {
    return 'Other Specified / Unspecified Disruptive Symptom and Related Disorder';
  }
};
