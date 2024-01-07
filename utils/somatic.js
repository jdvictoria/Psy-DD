export const somaticSymptoms = [
  // Somatic Symptom Disorder
  {
    label:
      'One or more Somatic Symptom that are distressing which disrupt daily life',
    value: 0,
  },
  // Criteria B: At least one symptom
  {
    label:
      '•Disproportionate thought about the seriousness of one symptom \n•Persistent thought about the seriousness of one symptom',
    value: 1,
  },
  {label: 'Persistent / High Anxiety about health', value: 2},
  {
    label: 'Excessive time / Excessive energy devoted to health concerns',
    value: 3,
  },

  // "Criteria C : tate of being symptomatic is persistent (typically more than 6 months).
  {
    label:
      'Although any one somatic symptom may not be continuously present, the state of being symptomatic is persistent (More than 6 Months)',
    value: 4,
  },

  // Illness Anxiety Disorder
  // Brief illness anxiety disorder: Duration of symptoms is less than 6 months.
  // Criteria A
  {label: 'Preoccupation with having or acquiring a serious illness', value: 5},

  // Criteria B
  {
    label:
      'Somatic symptoms are not present or, if present, are only mild in intensity. If another medical condition is present or there is a high risk for developing a medical condition',
    value: 6,
  },

  // Criteria C
  {
    label:
      '•High level of anxiety about health \n•Easily alarmed about personal health issues',
    value: 7,
  },

  // Illness anxiety disorder without excessive health-related behaviors or maladaptive avoidance:
  // Criterion D for illness anxiety disorder is not met.
  // Criteria D
  {
    label:
      '•Performs Excessive health related behavior \n•Repeatedly checks his body for sign of illness \n•Avoids doctor appointments and hospitals',
    value: 8,
  },

  // Criteria E
  {
    label:
      'Illness preoccupation has been present for at least 6 months, but the specific illness that is feared may change over that period of time',
    value: 9,
  },

  // Criteria F
  {
    label:
      'The illness-related preoccupation is not better explained by another mental disorder',
    value: 10,
  },

  // Conversion Disorder
  // Criteria A
  {
    label:
      'One or more symptoms of altered voluntary motor or sensory function',
    value: 11,
  },

  // Criteria B
  {
    label:
      'Clinical findings provide evidence of incompatibility between the symptom and recognized neurological or medical conditions',
    value: 12,
  },

  // Criteria C
  {
    label:
      'The symptom or deficit is not better explained by another medical or mental disorder',
    value: 13,
  },

  // Criteria D
  {label: 'Clinically significant distress', value: 14},
  {
    label:
      '•Impairment in social \n•Impairment in occupational \n•Impairment in other functioning',
    value: 15,
  },

  // Psychological Factors Affecting Other Medical Conditions
  // Criteria A
  {
    label:
      'A medical symptom or condition (other than a mental disorder) is present',
    value: 16,
  },

  // Criteria B (1 symptom)
  {
    label:
      '•Psychological factor have influenced the course of medical condition \n•Behavioral Factor have influenced the course of medical condition',
    value: 17,
  },
  {
    label:
      '•Psychological factor interfere with the treatment of medical condition \n•Behavioral factor interfere with the treatment of medical condition',
    value: 18,
  },
  {
    label:
      '•Psychological factor established health risk \n•Behavioral factor established health risk',
    value: 19,
  },
  {
    label:
      '•Psychological factor influence the underlying pathophysiology \n•Behavioral factor influence the underlying pathophysiology \n•Psychological factor influence the Precipitating or exacerbating symptoms \n•Behavioral factor influence the Precipitating or exacerbating symptoms',
    value: 20,
  },

  // Criteria C
  {
    label:
      'The psychological and behavioral factors in Criterion B are not better explained by another mental disorder',
    value: 21,
  },

  // Factitious Disorder
  // Criteria A
  {
    label:
      '•Falsification of physical symptom \n•Falsification of Psychological symptom \n•Falsification of Disease \n•Falsification of injury',
    value: 22,
  },

  // Criteria B
  {
    label:
      '•Presents himself as ill to others \n•Presents himself as impaired to others \n•Presents himself as injuredto others',
    value: 23,
  },

  // Criteria C
  {
    label:
      'The deceptive behavior is evident even in the absence of obvious external rewards',
    value: 24,
  },

  // Criteria D
  {
    label:
      'The behavior is not better explained by another mental disorder, such as delusional disorder or another psychotic disorder',
    value: 25,
  },

  {
    label: 'Criterion D for illness anxiety disorder is not met',
    value: 26,
  },

  // Pseudocyesis
  {
    label:
      'A false belief of being pregnant that is associated with objective signs and reported symptoms of pregnancy',
    value: 27,
  },
];

const mainDisorderA = numbers => {
  return numbers.includes(0);
};

const optionalDisorderA = numbers => {
  const criteriaB = [1, 2, 3];
  const matchingCriteriaB = criteriaB.filter(value => numbers.includes(value));
  return matchingCriteriaB.length >= 1 || numbers.includes(4);
};

const mainDisorderB = numbers => {
  return numbers.includes(5);
};

const optionalDisorderB = numbers => {
  return (
    numbers.includes(6) ||
    numbers.includes(7) ||
    numbers.includes(8) ||
    numbers.includes(9) ||
    numbers.includes(10)
  );
};

const mainDisorderC = numbers => {
  return numbers.includes(11);
};

const optionalDisorderC = numbers => {
  const criteriaD = [14, 15];
  const matchingCriteriaD = criteriaD.filter(value => numbers.includes(value));
  return (
    numbers.includes(12) ||
    numbers.includes(13) ||
    matchingCriteriaD.length >= 2
  );
};

const mainDisorderD = numbers => {
  const criteriaA = [17, 18, 19, 20];
  const matchingCriteriaA = criteriaA.filter(value => numbers.includes(value));
  return matchingCriteriaA.length >= 1;
};

const optionalDisorderD = numbers => {
  return numbers.includes(16) || numbers.includes(21);
};

const mainDisorderE = numbers => {
  return numbers.includes(22);
};

const optionalDisorderE = numbers => {
  return numbers.includes(23) || numbers.includes(24) || numbers.includes(25);
};

const mainDisorderF = numbers => {
  return numbers.includes(26);
};

const mainDisorderG = numbers => {
  return numbers.includes(27);
};

export const somaticDiagnosis = numbers => {
  if (mainDisorderA(numbers) || optionalDisorderA(numbers)) {
    return 'Somatic Symptom Disorder';
  } else if (mainDisorderB(numbers) || optionalDisorderB(numbers)) {
    return 'Illness Anxiety Disorder';
  } else if (mainDisorderC(numbers) || optionalDisorderC(numbers)) {
    return 'Conversion Disorder';
  } else if (mainDisorderD(numbers) || optionalDisorderD(numbers)) {
    return 'Psychological Factors Affecting Other Medical Conditions';
  } else if (mainDisorderE(numbers) || optionalDisorderE(numbers)) {
    return 'Factitious Disorder';
  } else if (mainDisorderF(numbers)) {
    return 'Maladaptive Avoidance';
  } else if (mainDisorderG(numbers)) {
    return 'Pseudocyesis';
  } else if (numbers.length > 1) {
    return 'Other Specified / Unspecified Somatic Symptom and Related Disorder';
  } else {
    return '';
  }
};

export const disorderDurationA = [
  {label: 'Less than 6 months', value: 0},
  {label: 'Greater or Equal to 6 months', value: 1},
];

export const disorderDurationB = [
  {
    label: 'One event of falsification of illness and/or induction of injury',
    value: 2,
  },
  {
    label:
      'Two or more events of falsification of illness and/or induction of injury',
    value: 3,
  },
];

export const disorderSpecificationA = [
  {label: 'With weakness or paralysis', value: 2},
  {label: 'With abnormal movement (Tremor)', value: 3},
  {label: 'With abnormal movement (Dystonia)', value: 4},
  {label: 'With abnormal movement (Myoclonus)', value: 5},
  {label: 'With abnormal movement (Gait)', value: 6},
  {label: 'With speech symptom (Dysphonia)', value: 7},
  {label: 'With speech symptom (Slurred Speech)', value: 8},
  {label: 'With Attach Seizure', value: 9},
  {label: 'With Anesthesia or Sensory Loss', value: 10},
  {label: 'With special sensory symptom (Visual)', value: 11},
  {label: 'With special sensory symptom (Olfactory)', value: 12},
  {label: 'With special sensory symptom (Hearing Disturbance)', value: 13},
  {label: 'With Mixed Symptoms', value: 14},
];

export const disorderSpecificationB = [
  {
    label: 'Inflicted to himself / herself',
    value: 15,
  },
  {label: 'Inflicted to other', value: 16},
];

export const disorderSeverityA = [
  {
    label:
      'Increases medical risk (e.g., inconsistent adherence with antihypertension treatment)',
    value: 0,
  },
  {label: 'Aggravates underlying medical condition', value: 1},
  {
    label: 'Results in medical hospitalization or emergency room visit',
    value: 2,
  },
  {
    label:
      '•Results in severe, life-threatening risk \n•Ignoring heart attack symptoms',
    value: 3,
  },
];
