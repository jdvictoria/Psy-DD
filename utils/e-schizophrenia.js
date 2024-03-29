export const schizophreniaSymptoms = [
  // Common Symptom
  {label: 'Delusion', value: 0},
  {label: 'Hallucination', value: 1},
  {label: 'Disorganized Speech', value: 2},
  {label: '•Grossly Disorganized \n•Catatonic Behavior', value: 3},

  {label: 'Delusion (1 Month)', value: 5},
  {label: 'Hallucination (1 Month)', value: 6},
  {label: 'Disorganized Speech (1 Month)', value: 7},
  {
    label: '•Grossly Disorganized \n•Catatonic Behavior \n•(1 Month)',
    value: 8,
  },
  {
    label:
      '•Negative Symptoms \n•Diminished emotional expression \n•Avolition \n•(1 Month)',
    value: 9,
  },
  {
    label:
      'Schizoaffective disorder and depressive or bipolar disorder with psychotic features have been ruled out because either 1) no major depressive or manic episodes have occurred concurrently with the active-phase symptoms, or 2) if mood episodes have occurred during active-phase symptoms, they have been present for a minority of the total duration of the active and residual periods of the illness',
    value: 10,
  },

  // Schizotypal (Personality) Disorder
  // Criteria A
  {label: 'Ideas of reference', value: 11},
  {
    label:
      '•Odd beliefs that is inconsistent with subcultural norms \n•Magical Thinking',
    value: 12,
  },
  {label: 'Unusual perceptual experiences', value: 13},
  {label: 'Odd thinking and speech', value: 14},
  {label: '•Suspiciousness \n•Paranoid ideation', value: 15},
  {label: '•Inappropriate affect \n•Constricted affect', value: 16},
  {label: 'Behavior or appearance is odd / eccentric / peculiar', value: 17},
  {
    label:
      'Lack of close friends or confidants other than first-degree relatives',
    value: 18,
  },
  {
    label:
      'Excessive social anxiety that does not diminish with familiarity and tends to be associated with paranoid fears rather than negative judgments about self',
    value: 19,
  },

  // Criteria B
  {
    label:
      'Does not occur exclusively during the course of schizophrenia, a bipolar disorder or depressive disorder with psychotic features, another psychotic disorder, or autism spectrum disorder',
    value: 20,
  },

  // Delusional Disorder
  // Criteria A
  {
    label: 'The presence of one (or more) delusions (1 Month or Longer)',
    value: 21,
  },

  // Criteria B
  {label: 'Criterion A for schizophrenia has never been met', value: 22},

  // Criteria C
  {
    label:
      'Apart from the impact of the delusion(s) or its ramifications, functioning is not markedly impaired, and behavior is not obviously bizarre or odd',
    value: 23,
  },

  // Criteria D
  {label: 'If manic or major depressive episodes have occurred', value: 24},

  // Criteria E
  {
    label:
      'The disturbance is not attributable to the physiological effects of a substance or another medical condition and is not better explained by another mental disorder',
    value: 25,
  },

  // Brief Psychotic Disorder
  // "Criteria A (One or more symptom of the following.At least one of these must be (1), (2), or (3)

  // Criteria B
  {
    label:
      'Duration of an episode of the disturbance is at least 1 day but less than 1 month, with eventual full return to premorbid level of functioning',
    value: 26,
  },

  // Criteria C
  {
    label:
      'The disturbance is not better explained by major depressive or bipolar disorder with psychotic features or another psychotic disorder such as schizophrenia or catatonia, and is not attributable to the physiological effects of a substance',
    value: 27,
  },

  // Schizophreniform Disorder
  // "Criteria A (Two or more symptom of the following.At least one of these must be (1), (2), or (3)
  // 1 month
  // Common 16
  // Common 17
  // Common 18
  // Common 19
  // Common 26

  // Criteria B
  {
    label:
      'An episode of the disorder lasts at least 1 month but less than 6 months. When the diagnosis must be made without waiting for recovery, it should be qualified as “provisional"',
    value: 28,
  },

  // Criteria C
  // Common 10

  // Criteria D
  // Common 25

  // Schizophrenia
  // Criteria A
  // 1 month
  // Common 16
  // Common 17
  // Common 18
  // Common 19
  // Common 26

  // Criteria B
  {
    label:
      'For a significant portion of the time since the onset of the disturbance, level of functioning in one or more major areas, such as work, interpersonal relations, or self-care, is markedly below the level achieved prior to the onset',
    value: 30,
  },

  // Criteria C
  {
    label:
      'Continuous signs of the disturbance persist for at least 6 months. This 6-month period must include at least 1 month of symptoms (or less if successfully treated) that meet Criterion A and may include periods of prodromal or residual symptoms',
    value: 31,
  },

  // Criteria D
  // Common 10

  // Criteria E
  // Common 25

  // Criteria F
  {
    label:
      'If there is a history of autism spectrum disorder or a communication disorder of childhood onset, the additional diagnosis of schizophrenia is made only if prominent delusions or hallucinations, in addition to the other required symptoms of schizophrenia, are also present for at least 1 month (or less if successfully treated)',
    value: 32,
  },

  // "Schizoaffective Disorder
  // Criteria A
  {
    label:
      'An uninterrupted period of illness during which there is a major mood episode (major depressive or manic) concurrent with Criterion A of schizophrenia',
    value: 33,
  },

  // Criteria B
  {
    label:
      'Delusions or hallucinations for 2 or more weeks in the absence of a major mood episode (depressive or manic) during the lifetime duration of the illness',
    value: 34,
  },

  // Criteria C
  {
    label:
      'Symptoms that meet criteria for a major mood episode are present for the majority of the total duration of the active and residual portions of the illness',
    value: 35,
  },

  // Criteria D
  {
    label:
      'The disturbance is not attributable to the effects of a substance (e.g., a drug of abuse, a medication) or another medical condition',
    value: 36,
  },

  // Substance/Medication-Induced Psychotic Disorder
  // "during or soon after substance intoxication or withdrawal or after exposure to or withdrawal from a medication
  // Criteria A. Presence of one or both of the following symptoms:
  {
    label:
      'Delusion (During or soon after substance intoxication or withdrawal or after exposure to or withdrawal from a medication)',
    value: 37,
  },
  {
    label:
      'Hallucination ((During or soon after substance intoxication or withdrawal or after exposure to or withdrawal from a medication)',
    value: 38,
  },

  // Criteria B
  {
    label:
      'The symptoms in Criterion A developed during or soon after substance intoxication or withdrawal or after exposure to or withdrawal from a medication',
    value: 39,
  },
  {
    label:
      'The involved substance/medication is capable of producing the symptoms in Criterion A',
    value: 40,
  },

  // Criteria C
  {
    label:
      'The disturbance is not better explained by a psychotic disorder that is not substance/medication-induced',
    value: 41,
  },

  // Criteria D
  {
    label:
      'The disturbance does not occur exclusively during the course of a delirium',
    value: 42,
  },

  // Criteria E
  {
    label:
      'The disturbance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning',
    value: 43,
  },

  // Psychotic Disorder Due to Another Medical Condition
  // Criteria A
  {label: 'Prominent hallucinations or delusions', value: 44},

  // Criteria B
  {
    label:
      'There is evidence from the history, physical examination, or laboratory findings that the disturbance is the direct pathophysiological consequence of another medical condition',
    value: 45,
  },

  // Criteria C
  {
    label: 'The disturbance is not better explained by another mental disorder',
    value: 46,
  },

  // Criteria D
  // Common 42

  // Criteria E
  // Common 43

  // Catatonia Associated With Another Mental Disorder
  // Criteria A
  {
    label: '•Stupor \n•No psychomotor activity \n•Not relating to environment',
    value: 47,
  },
  {label: 'Catalepsy', value: 48},
  {label: 'Waxy flexibility', value: 49},
  {label: 'Mutism', value: 50},
  {label: 'Negativism', value: 51},
  {label: 'Posturing', value: 52},
  {label: 'Mannerism', value: 53},
  {label: 'Stereotypy', value: 54},
  {label: 'Agitation', value: 55},
  {label: 'Grimacing', value: 56},
  {label: '•Echolalia \n•Mimicking anothers speech', value: 57},
  {label: 'Echopraxia', value: 58},

  // Catatonic Disorder Due to Another Medical Condition
  // Criteria A - Same as Above

  // Criteria B
  // Common 45

  // Criteria C
  // Common 46

  // Criteria D
  // Common 42

  // Criteria E
  // Common 43
];

const mainDisorderA = numbers => {
  const criteriaValues = [11, 12, 13, 14, 15, 16, 17, 18, 19];
  const matchingCriteria = criteriaValues.filter(value =>
    numbers.includes(value),
  );
  return matchingCriteria.length >= 9;
};

const optionalDisorderA = numbers => {
  return numbers.includes(20);
};

const mainDisorderB = numbers => {
  return numbers.includes(21);
};

const optionalDisorderB = numbers => {
  return (
    numbers.includes(22) ||
    numbers.includes(23) ||
    numbers.includes(24) ||
    numbers.includes(25)
  );
};

const mainDisorderC = numbers => {
  const criteriaValues = [0, 1, 2, 3];
  const matchingCriteria = criteriaValues.filter(value =>
    numbers.includes(value),
  );
  return matchingCriteria.length >= 1;
};

const optionalDisorderC = numbers => {
  return numbers.includes(26) || numbers.includes(27);
};

const mainDisorderD = numbers => {
  const criteriaValues = [5, 6, 7, 8, 9];
  const matchingCriteria = criteriaValues.filter(value =>
    numbers.includes(value),
  );
  return matchingCriteria.length >= 2;
};

const optionalDisorderD = numbers => {
  return numbers.includes(28) || numbers.includes(10) || numbers.includes(25);
};

const mainDisorderE = numbers => {
  const criteriaValues = [5, 6, 7, 8, 9];
  const matchingCriteria = criteriaValues.filter(value =>
    numbers.includes(value),
  );
  return matchingCriteria.length >= 2;
};

const optionalDisorderE = numbers => {
  return (
    numbers.includes(30) ||
    numbers.includes(31) ||
    numbers.includes(10) ||
    numbers.includes(25) ||
    numbers.includes(32)
  );
};

const mainDisorderF = numbers => {
  return numbers.includes(33);
};

const optionalDisorderF = numbers => {
  return numbers.includes(34) || numbers.includes(35) || numbers.includes(36);
};

const mainDisorderG = numbers => {
  return (
    (numbers.includes(37) || numbers.includes(38)) &&
    (numbers.includes(39) || numbers.includes(40))
  );
};

const optionalDisorderG = numbers => {
  return numbers.includes(41) || numbers.includes(42) || numbers.includes(43);
};

const mainDisorderH = numbers => {
  return numbers.includes(44) && numbers.includes(45) && numbers.includes(46);
};

const optionalDisorderH = numbers => {
  return numbers.includes(42) || numbers.includes(43);
};

const mainDisorderI = numbers => {
  const criteriaValues = [47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58];
  const matchingCriteria = criteriaValues.filter(value =>
    numbers.includes(value),
  );
  return matchingCriteria.length >= 3;
};

const optionalDisorderI = numbers => {
  return numbers.includes(42) || numbers.includes(43) || numbers.includes(46);
};

export const schizophreniaDiagnosis = numbers => {
  if (
    mainDisorderA(numbers) ||
    (mainDisorderA(numbers) && optionalDisorderA(numbers))
  ) {
    return 'Schizotypal (Personality) Disorder';
  } else if (
    mainDisorderB(numbers) ||
    (mainDisorderB(numbers) && optionalDisorderB(numbers))
  ) {
    return 'Delusional Disorder';
  } else if (
    mainDisorderC(numbers) ||
    (mainDisorderC(numbers) && optionalDisorderC(numbers))
  ) {
    return 'Brief Psychotic Disorder';
  } else if (
    mainDisorderD(numbers) ||
    (mainDisorderD(numbers) && optionalDisorderD(numbers))
  ) {
    return 'Schizophreniform Disorder';
  } else if (
    mainDisorderE(numbers) ||
    (mainDisorderE(numbers) && optionalDisorderE(numbers))
  ) {
    return 'Schizophrenia';
  } else if (
    mainDisorderF(numbers) ||
    (mainDisorderF(numbers) && optionalDisorderF(numbers))
  ) {
    return 'Schizoaffective Disorder';
  } else if (
    mainDisorderG(numbers) ||
    (mainDisorderG(numbers) && optionalDisorderG(numbers))
  ) {
    return 'Substance/Medication-Induced Psychotic Disorder';
  } else if (
    (mainDisorderH(numbers) && numbers.includes(45)) ||
    (mainDisorderH(numbers) &&
      numbers.includes(45) &&
      optionalDisorderH(numbers))
  ) {
    return 'Psychotic Disorder Due to Another Medical Condition';
  } else if (
    mainDisorderI(numbers) ||
    (mainDisorderI(numbers) && optionalDisorderI(numbers))
  ) {
    return 'Catatonic Disorder Due to Another Medical Condition';
  } else if (mainDisorderI(numbers)) {
    return 'Catatonia Associated With Another Mental Disorder';
  } else {
    return 'Unspecified Schizophrenia Spectrum and Other Psychotic Disorder';
  }
};

export const delusionalDuration = [
  {
    label:
      'First manifestation of the disorder meeting the defining diagnostic symptom and time criteria. An acute episode is a time period in which the symptom criteria are fulfilled',
    value: 14,
  },
  {
    label:
      'Partial remission is a time period during which an improvement after a previous episode is maintained and in which the defining criteria of the disorder are only partially fulfilled',
    value: 15,
  },
  {
    label:
      'Full remission is a period of time after a previous episode during which no disorder-specific symptoms are present',
    value: 16,
  },
  {
    label: 'Multiple episodes, currently in acute episode',
    value: 17,
  },
  {
    label: 'Multiple episodes, currently in partial remission',
    value: 18,
  },
  {
    label: 'Multiple episodes, currently in full remission',
    value: 19,
  },
  {
    label:
      'Symptoms fulfilling the diagnostic symptom criteria of the disorder are remaining for the majority of the illness course, with subthreshold symptom',
    value: 20,
  },
  {
    label:
      'Refer to the criteria for catatonia associated with another mental disorder',
    value: 21,
  },
];

export const delusionalSpecification = [
  {
    label:
      'Delusions are deemed bizarre if they are clearly implausible, not understandable, and not derived from ordinary life experiences',
    value: 19,
  },
];

export const delusionalSeverity = [
  {
    label:
      'This subtype applies when the central theme of the delusion is that another person is in love with the individual',
    value: 66,
  },
  {
    label:
      'This subtype applies when the central theme of the delusion is the conviction of having some great (but unrecognized) talent or insight or having made some important discovery',
    value: 67,
  },
  {
    label:
      'This subtype applies when the central theme of the individual’s delusion is that his or her spouse or lover is unfaithful',
    value: 68,
  },
  {
    label:
      'The delusion involves the individual’s belief that he or she is being conspired against, cheated, spied on, followed, poisoned or drugged, maliciously maligned, harassed, or obstructed in the pursuit of long-term goals',
    value: 69,
  },
  {
    label:
      'This subtype applies when the central theme of the delusion involves bodily functions or sensations',
    value: 70,
  },
  {
    label: 'This subtype applies when no one delusional theme predominates',
    value: 71,
  },
  {
    label:
      'This subtype applies when the dominant delusional belief cannot be clearly determined or is not described in the specific types',
    value: 72,
  },
];

export const psychoticSpecification = [
  {
    label:
      'If symptoms occur in response to events that, singly or together, would be markedly stressful to almost anyone in similar circumstances in the individual’s culture',
    value: 20,
  },
  {
    label:
      'If symptoms do not occur in response to events that, singly or together, would be markedly stressful to almost anyone in similar circumstances in the individual’s culture',
    value: 21,
  },
  {
    label: 'If onset is during pregnancy or within 4 weeks postpartum',
    value: 22,
  },
  {
    label:
      'Refer to the criteria for catatonia associated with another mental disorder',
    value: 23,
  },
];

export const schizophreniformSpecification = [
  {
    label:
      'This specifier requires the presence of at least two of the following features: onset of prominent psychotic symptoms within 4 weeks of the first noticeable change in usual behavior or functioning; confusion or perplexity; good premorbid social and occupational functioning; and absence of blunted or flat affect',
    value: 24,
  },
  {
    label:
      'This specifier is applied if two or more of the above features have not been present',
    value: 25,
  },
  {
    label:
      'Refer to the criteria for catatonia associated with another mental disorder',
    value: 23,
  },
];

export const schizophreniaDuration = [
  {
    label:
      'First manifestation of the disorder meeting the defining diagnostic symptom and time criteria. An acute episode is a time period in which the symptom criteria are fulfilled',
    value: 14,
  },
  {
    label:
      'Partial remission is a time period during which an improvement after a previous episode is maintained and in which the defining criteria of the disorder are only partially fulfilled',
    value: 15,
  },
  {
    label:
      'Full remission is a period of time after a previous episode during which no disorder-specific symptoms are present',
    value: 16,
  },
  {
    label: 'Multiple episodes, currently in acute episode',
    value: 17,
  },
  {
    label: 'Multiple episodes, currently in partial remission',
    value: 18,
  },
  {
    label: 'Multiple episodes, currently in full remission',
    value: 19,
  },
  {
    label:
      'Symptoms fulfilling the diagnostic symptom criteria of the disorder are remaining for the majority of the illness course, with subthreshold symptom',
    value: 20,
  },
  {
    label:
      'Refer to the criteria for catatonia associated with another mental disorder',
    value: 21,
  },
];

export const schizophreniaSpecification = [
  {
    label:
      'Refer to the criteria for catatonia associated with another mental disorder',
    value: 23,
  },
];

export const schizoaffectiveSeverity = [
  {
    label:
      'This subtype applies if a manic episode is part of the presentation. Major depressive episodes may also occur',
    value: 73,
  },
  {
    label:
      'This subtype applies if only major depressive episodes are part of the presentation',
    value: 74,
  },
];

export const schizoaffectiveDuration = [
  {
    label:
      'First manifestation of the disorder meeting the defining diagnostic symptom and time criteria. An acute episode is a time period in which the symptom criteria are fulfilled',
    value: 14,
  },
  {
    label:
      'Partial remission is a time period during which an improvement after a previous episode is maintained and in which the defining criteria of the disorder are only partially fulfilled',
    value: 15,
  },
  {
    label:
      'Full remission is a period of time after a previous episode during which no disorder-specific symptoms are present',
    value: 16,
  },
  {
    label: 'Multiple episodes, currently in acute episode',
    value: 17,
  },
  {
    label: 'Multiple episodes, currently in partial remission',
    value: 18,
  },
  {
    label: 'Multiple episodes, currently in full remission',
    value: 19,
  },
  {
    label:
      'Symptoms fulfilling the diagnostic symptom criteria of the disorder are remaining for the majority of the illness course, with subthreshold symptom',
    value: 20,
  },
  {
    label:
      'Refer to the criteria for catatonia associated with another mental disorder',
    value: 21,
  },
];

export const schizoaffectiveSpecification = [
  {
    label:
      'Refer to the criteria for catatonia associated with another mental disorder',
    value: 23,
  },
];

export const substancePsychoticSpecification = [
  {
    label:
      'If criteria are met for intoxication with the substance and the symptoms develop during intoxication',
    value: 16,
  },
  {
    label:
      'If criteria are met for withdrawal from the substance and the symptoms develop during, or shortly after, withdrawal',
    value: 17,
  },
  {
    label:
      'If symptoms developed at initiation of medication, with a change in use of medication, or during withdrawal of medication',
    value: 18,
  },
];

export const psychoticDueToAnotherSeverity = [
  {
    label: 'If delusions are the predominant symptom',
    value: 75,
  },
  {
    label: 'If hallucinations are the predominant symptom',
    value: 76,
  },
];

export const otherSchizophreniaSpecification = [
  {
    label: 'Occurring in the absence of any other features',
    value: 26,
  },
  {
    label:
      'This includes persistent delusions with periods of overlapping mood episodes that are present for a substantial portion of the delusional disturbance (such that the criterion stipulating only brief mood disturbance in delusional disorder is not met)',
    value: 27,
  },
  {
    label:
      'This syndrome is characterized by psychotic-like symptoms that are below a threshold for full psychosis (e.g., the symptoms are less severe and more transient, and insight is relatively maintained)',
    value: 28,
  },
];
