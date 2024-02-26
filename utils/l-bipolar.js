export const bipolarSymptoms = [
  // Bipolar I
  // Criteria A
  {
    label: 'Manic Episode',
    value: 1,
  },

  // Criteria B
  {
    label: 'Hypomanic Episode',
    value: 2,
  },

  // Criteria C
  {
    label: 'Major Depressive Episode',
    value: 3,
  },

  // Bipolar II
  // Criteria A
  // value 2

  // Criteria B
  // value 3

  // Cyclothymic Disorder
  // Criteria A
  {
    label:
      'Numerous periods with hypomanic symptoms that do not meet criteria for a hypomanic episode',
    value: 4,
  },
  {
    label:
      'Numerous periods with depressive symptoms that do not meet criteria for a major depressive episode',
    value: 5,
  },

  // Criteria B
  {
    label: 'Criterion A symptoms present for at least half the time',
    value: 6,
  },
  {
    label:
      'The individual has not been without the symptoms for more than 2 months at a time',
    value: 7,
  },

  // Criteria C
  {
    label:
      'Criteria for a major depressive, manic, or hypomanic episode have never been met',
    value: 8,
  },

  // Criteria D
  {
    label:
      'The symptoms in Criterion A are not better explained by schizoaffective disorder, schizophrenia, schizophreniform disorder, delusional disorder, or other specified or unspecified schizophrenia spectrum and other psychotic disorder',
    value: 9,
  },

  // Criteria E
  {
    label:
      'The symptoms are not attributable to the physiological effects of a substance (e.g., a drug of abuse, a medication) or another medical condition (e.g., hyperthyroidism)',
    value: 10,
  },

  // Criteria F
  {
    label:
      'The symptoms cause clinically significant distress or impairment in social, occupational, or other important areas of functioning',
    value: 11,
  },

  // Substance/Medication-Induced Bipolar and Related Disorder
  // Criteria A
  {
    label:
      'A prominent and persistent disturbance in mood characterized by abnormally elevated, expansive, or irritable mood and increased activity or energy',
    value: 12,
  },

  // Criteria B
  {
    label:
      'The symptoms in Criterion A developed during or soon after substance intoxication or withdrawal or after exposure to or withdrawal from a medication',
    value: 13,
  },
  {
    label:
      'The involved substance/medication is capable of producing the symptoms in Criterion A',
    value: 14,
  },

  // Criteria C
  {
    label: 'Symptoms preceding the onset of substance/medication use',
    value: 15,
  },
  {
    label:
      'Symptoms persisting for a substantial period after the cessation of acute withdrawal or severe intoxication',
    value: 16,
  },
  {
    label:
      'Other evidence suggesting the existence of an independent non-substance/medication-induced bipolar and related disorder',
    value: 17,
  },

  // Criteria D
  {
    label:
      'The disturbance does not occur exclusively during the course of a delirium',
    value: 18,
  },

  // Criteria E
  {
    label:
      'The disturbance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning',
    value: 19,
  },

  // Bipolar and Related Disorder Due to Another Medical Condition
  // Criteria A
  {
    label:
      'A prominent and persistent disturbance in mood characterized by abnormally elevated, expansive, or irritable mood and increased activity or energy',
    value: 20,
  },

  // Criteria B
  {
    label:
      'Evidence from the history, physical examination, or laboratory findings that the disturbance is the direct pathophysiological consequence of another medical condition',
    value: 21,
  },

  // Criteria C
  {
    label: 'The disturbance is not better explained by another mental disorder',
    value: 22,
  },

  // Criteria D
  {
    label:
      'The disturbance does not occur exclusively during the course of a delirium',
    value: 23,
  },

  // Criteria E
  {
    label:
      'The disturbance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning, necessitates hospitalization to prevent harm to self or others, or there are psychotic features',
    value: 24,
  },

  // Short-Duration Hypomanic Episodes (2–3 Days) and Major Depressive Episodes
  // Criteria A
  {
    label: 'A lifetime history of one or more major depressive episodes',
    value: 25,
  },

  // Criteria B
  {
    label:
      'Presentation has never met full criteria for a manic or hypomanic episode',
    value: 26,
  },

  // Criteria C
  {
    label:
      'Experienced two or more episodes of short-duration hypomania (2–3 days) meeting the full symptomatic criteria',
    value: 27,
  },

  // Criteria D
  {
    label:
      'Hypomanic episodes do not overlap in time with major depressive episodes',
    value: 28,
  },

  // Criteria E
  {
    label:
      'Disturbance does not meet criteria for a major depressive episode with mixed features',
    value: 29,
  },
  // Hypomanic Episodes with Insufficient Symptoms and Major Depressive Episodes
  // Criteria A
  {
    label: 'A lifetime history of one or more major depressive episodes',
    value: 30,
  },

  // Criteria B
  {
    label:
      'Presentation has never met full criteria for a manic or hypomanic episode',
    value: 31,
  },

  // Criteria C
  {
    label:
      'Experienced one or more episodes of hypomania that do not meet full symptomatic criteria',
    value: 32,
  },

  // Criteria D
  {
    label:
      'Criteria for hypomania include less than 4 consecutive days of elevated mood and one or two other symptoms (or irritable mood and two or three other symptoms)',
    value: 33,
  },

  // Criteria E
  {
    label:
      'Hypomanic episodes do not overlap in time with major depressive episodes',
    value: 34,
  },

  // Criteria F
  {
    label:
      'Disturbance does not meet criteria for a major depressive episode with mixed features',
    value: 35,
  },

  // Hypomanic Episode Without Prior Major Depressive Episode:
  // Criteria A
  {
    label: 'One or more hypomanic episodes',
    value: 36,
  },

  // Criteria B
  {
    label:
      'Presentation has never met full criteria for a major depressive episode or a manic episode',
    value: 37,
  },

  // Short-Duration Cyclothymia
  // Criteria A
  {
    label:
      'Multiple episodes of hypomanic symptoms not meeting criteria for a hypomanic episode',
    value: 38,
  },

  // Criteria B
  {
    label:
      'Multiple episodes of depressive symptoms not meeting criteria for a major depressive episode.',
    value: 39,
  },

  // Criteria C
  {
    label:
      'Hypomanic symptoms do not overlap in time with major depressive episodes',
    value: 40,
  },

  // Criteria D
  {
    label:
      'Disturbance does not meet criteria for a major depressive episode with mixed features',
    value: 41,
  },

  // Criteria E
  {
    label: 'Duration is less than 24 months',
    value: 42,
  },
];

export const mainDisorderA = numbers => {
  return numbers.includes(1);
};

export const optionalDisorderA = numbers => {
  return numbers.includes(2) || numbers.includes(3);
};

export const mainDisorderB = numbers => {
  return numbers.includes(2) && numbers.includes(3);
};

export const mainDisorderC = numbers => {
  return numbers.includes(4) && numbers.includes(5);
};

export const optionalDisorderC = numbers => {
  return (
    numbers.includes(6) ||
    numbers.includes(7) ||
    numbers.includes(8) ||
    numbers.includes(9) ||
    numbers.includes(10) ||
    numbers.includes(11)
  );
};

export const mainDisorderD = numbers => {
  return numbers.includes(12) && numbers.includes(13) && numbers.includes(14);
};

export const optionalDisorderD = numbers => {
  return (
    numbers.includes(15) ||
    numbers.includes(16) ||
    numbers.includes(17) ||
    numbers.includes(18) ||
    numbers.includes(19)
  );
};

export const mainDisorderE = numbers => {
  return numbers.includes(20) && numbers.includes(21);
};

export const optionalDisorderE = numbers => {
  return numbers.includes(22) || numbers.includes(23) || numbers.includes(24);
};

export const bipolarDiagnosis = numbers => {
  if (
    mainDisorderA(numbers) ||
    (mainDisorderA(numbers) && optionalDisorderA(numbers))
  ) {
    return 'Bipolar I Disorder';
  } else if (mainDisorderB(numbers)) {
    return 'Bipolar II Disorder';
  } else if (
    mainDisorderC(numbers) ||
    (mainDisorderC(numbers) && optionalDisorderC(numbers))
  ) {
    return 'Cyclothymic Disorder';
  } else if (
    mainDisorderD(numbers) ||
    (mainDisorderD(numbers) && optionalDisorderD(numbers))
  ) {
    return 'Substance/Medication-Induced Bipolar and Related Disorder';
  } else if (
    mainDisorderE(numbers) ||
    (mainDisorderE(numbers) && optionalDisorderE(numbers))
  ) {
    return 'Bipolar and Related Disorder Due to Another Medical Condition';
  } else {
    return 'Other Specified Bipolar and Related Disorder';
  }
};

export const bipolarrelatedSeverity = [
  {
    label: 'Full criteria are not met for a manic or hypomanic episode',
    value: 350,
  },
  {
    label:
      'Full criteria are met except Criterion D for a manic episode or except Criterion F for a hypomanic episode.',
    value: 351,
  },
  {
    label:
      'Symptoms of depression are also present but do not predominate in the clinical picture',
    value: 352,
  },
];

export const substanceBipolarSpecification = [
  {
    label:
      'If criteria are met for intoxication with the substance, and the symptoms develop during intoxication',
    value: 16,
  },
  {
    label:
      'If criteria are met for withdrawal from the substance, and the symptoms develop during or shortly after withdrawal',
    value: 17,
  },
  {
    label:
      'If symptoms developed at initiation of medication, with a change in use of medication, or during withdrawal of medication',
    value: 18,
  },
];

export const substanceBipolarSeverity = [
  {
    label: 'With mild use disorder (Alcohol)',
    value: 353,
  },
  {
    label: 'With moderate or severe use disorder (Alcohol)',
    value: 354,
  },
  {
    label: 'Without use disorder (Alcohol)',
    value: 355,
  },
  {
    label: 'With mild use disorder (Phencyclidine / Other hallucinogen)',
    value: 356,
  },
  {
    label:
      'With moderate or severe use disorder (Phencyclidine / Other hallucinogen)',
    value: 357,
  },
  {
    label: 'Without use disorder (Phencyclidine / Other hallucinogen)',
    value: 358,
  },
  {
    label: 'With mild use disorder (Sedative, hypnotic, or anxiolytic)',
    value: 359,
  },
  {
    label:
      'With moderate or severe use disorder (Sedative, hypnotic, or anxiolytic)',
    value: 360,
  },
  {
    label: 'Without use disorder (Sedative, hypnotic, or anxiolytic)',
    value: 361,
  },
  {
    label:
      'With mild use disorder (Amphetamine-type substance (or other stimulant))',
    value: 362,
  },
  {
    label:
      'With moderate or severe use disorder (Amphetamine-type substance (or other stimulant))',
    value: 363,
  },
  {
    label:
      'Without use disorder (Amphetamine-type substance (or other stimulant))',
    value: 364,
  },
  {
    label: 'With mild use disorder (Cocaine)',
    value: 365,
  },
  {
    label: 'With moderate or severe use disorder (Cocaine)',
    value: 366,
  },
  {
    label: 'Without use disorder (Cocaine)',
    value: 367,
  },
  {
    label: 'With mild use disorder (Other (or unknown) substance)',
    value: 368,
  },
  {
    label:
      'With moderate or severe use disorder (Other (or unknown) substance)',
    value: 369,
  },
  {
    label: 'Without use disorder (Other (or unknown) substance)',
    value: 370,
  },
];

export const cyclothymicSpecification = [
  {
    label: 'environment',
    value: 66,
  },
];
