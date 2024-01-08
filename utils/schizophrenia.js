export const schizophreniaSymptoms = [
  // Schizotypal (Personality) Disorder
  // Criteria A
  {label: 'Ideas of reference', value: 1},
  {
    label:
      '•Odd beliefs that is inconsistent with subcultural norms \n•Magical Thinking',
    value: 2,
  },
  {label: 'Unusual perceptual experiences', value: 3},
  {label: 'Odd thinking and speech', value: 4},
  {label: '•Suspiciousness \n•Paranoid ideation', value: 5},
  {label: '•Inappropriate affect \n•Constricted affect', value: 6},
  {label: 'Behavior or appearance is odd / eccentric / peculiar', value: 7},
  {
    label:
      'Lack of close friends or confidants other than first-degree relatives',
    value: 8,
  },
  {
    label:
      'Excessive social anxiety that does not diminish with familiarity and tends to be associated with paranoid fears rather than negative judgments about self',
    value: 9,
  },

  // Criteria B
  {
    label:
      'Does not occur exclusively during the course of schizophrenia, a bipolar disorder or depressive disorder with psychotic features, another psychotic disorder, or autism spectrum disorder',
    value: 10,
  },

  // Delusional Disorder
  // Criteria A
  {
    label: 'The presence of one (or more) delusions (1 Month or Longer)',
    value: 11,
  },

  // Criteria B
  {label: 'Criterion A for schizophrenia has never been met', value: 12},

  // Criteria C
  {
    label:
      'Apart from the impact of the delusion(s) or its ramifications, functioning is not markedly impaired, and behavior is not obviously bizarre or odd',
    value: 13,
  },

  // Criteria D
  {label: 'If manic or major depressive episodes have occurred', value: 14},

  // Criteria E
  {
    label:
      'The disturbance is not attributable to the physiological effects of a substance or another medical condition and is not better explained by another mental disorder',
    value: 15,
  },

  // Brief Psychotic Disorder
  // "Criteria A (One or more symptom of the following.At least one of these must be (1), (2), or (3)
  {label: 'Delusion', value: 16},
  {label: 'Hallucination', value: 17},
  {label: 'Disorganized Speech', value: 18},
  {label: '•Grossly Disorganized \n•Catatonic Behavior', value: 19},

  // Criteria B
  {
    label:
      'Duration of an episode of the disturbance is at least 1 day but less than 1 month, with eventual full return to premorbid level of functioning',
    value: 20,
  },

  // Criteria C
  {
    label:
      'The disturbance is not better explained by major depressive or bipolar disorder with psychotic features or another psychotic disorder such as schizophrenia or catatonia, and is not attributable to the physiological effects of a substance',
    value: 21,
  },

  // Schizophreniform Disorder
  // "Criteria A (Two or more symptom of the following.At least one of these must be (1), (2), or (3)
  // 1 month
  {label: 'Delusion', value: 22},
  {label: 'Hallucination', value: 23},
  {label: 'Disorganized Speech', value: 24},
  {label: '•Grossly Disorganized \n•Catatonic Behavior', value: 25},
  {
    label: '•Negative Symptoms \n•Diminished emotional expression \n•Avolition',
    value: 26,
  },

  // Criteria B
  {
    label:
      'An episode of the disorder lasts at least 1 month but less than 6 months. When the diagnosis must be made without waiting for recovery, it should be qualified as “provisional"',
    value: 27,
  },

  // Criteria C
  {
    label:
      'Schizoaffective disorder and depressive or bipolar disorder with psychotic features have been ruled out because either 1) no major depressive or manic episodes have occurred concurrently with the active-phase symptoms, or 2) if mood episodes have occurred during active-phase symptoms, they have been present for a minority of the total duration of the active and residual periods of the illness',
    value: 28,
  },

  // Criteria D
  {
    label:
      'The disturbance is not attributable to the physiological effects of a substance (e.g., a drug of abuse, a medication) or another medical condition',
    value: 29,
  },

  // Schizophrenia
  // Criteria A
  // 1 month
  {label: 'Delusion', value: 30},
  {label: 'Hallucination', value: 31},
  {label: 'Disorganized Speech', value: 32},
  {label: '•Grossly Disorganized \n•Catatonic Behavior', value: 33},
  {
    label: '•Negative Symptoms \n•Diminished emotional expression \n•Avolition',
    value: 34,
  },

  // Criteria B
  {
    label:
      'For a significant portion of the time since the onset of the disturbance, level of functioning in one or more major areas, such as work, interpersonal relations, or self-care, is markedly below the level achieved prior to the onset',
    value: 35,
  },

  // Criteria C
  {
    label:
      'Continuous signs of the disturbance persist for at least 6 months. This 6-month period must include at least 1 month of symptoms (or less if successfully treated) that meet Criterion A and may include periods of prodromal or residual symptoms',
    value: 36,
  },

  // Criteria D
  {
    label:
      'Schizoaffective disorder and depressive or bipolar disorder with psychotic features have been ruled out because either 1) no major depressive or manic episodes have occurred concurrently with the active-phase symptoms, or 2) if mood episodes have occurred during active-phase symptoms, they have been present for a minority of the total duration of the active and residual periods of the illness',
    value: 37,
  },

  // Criteria E
  {
    label:
      'The disturbance is not attributable to the physiological effects of a substance',
    value: 38,
  },

  // Criteria F
  {
    label:
      'If there is a history of autism spectrum disorder or a communication disorder of childhood onset, the additional diagnosis of schizophrenia is made only if prominent delusions or hallucinations, in addition to the other required symptoms of schizophrenia, are also present for at least 1 month (or less if successfully treated)',
    value: 39,
  },

  // "Schizoaffective Disorder
  // Criteria A
  {
    label:
      'An uninterrupted period of illness during which there is a major mood episode (major depressive or manic) concurrent with Criterion A of schizophrenia',
    value: 40,
  },

  // Criteria B
  {
    label:
      'Delusions or hallucinations for 2 or more weeks in the absence of a major mood episode (depressive or manic) during the lifetime duration of the illness',
    value: 41,
  },

  // Criteria C
  {
    label:
      'Symptoms that meet criteria for a major mood episode are present for the majority of the total duration of the active and residual portions of the illness',
    value: 42,
  },

  // Criteria D
  {
    label:
      'The disturbance is not attributable to the effects of a substance (e.g., a drug of abuse, a medication) or another medical condition',
    value: 43,
  },

  // Substance/Medication-Induced Psychotic Disorder
  // "during or soon after substance intoxication or withdrawal or after exposure to or withdrawal from a medication
  // Criteria A. Presence of one or both of the following symptoms:
  {label: 'Delusions', value: 44},
  {label: 'Hallucinations', value: 45},

  // Criteria B. There is evidence from the history, physical examination, or laboratory findings of both (1) and (2):
  {
    label:
      'The symptoms in Criterion A developed during or soon after substance intoxication or withdrawal or after exposure to or withdrawal from a medication',
    value: 46,
  },
  {
    label:
      'The involved substance/medication is capable of producing the symptoms in Criterion A',
    value: 47,
  },

  // Criteria C
  {
    label:
      'The disturbance is not better explained by a psychotic disorder that is not substance/medication-induced',
    value: 48,
  },

  // Criteria D
  {
    label:
      'The disturbance does not occur exclusively during the course of a delirium',
    value: 49,
  },

  // Criteria E
  {
    label:
      'The disturbance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning',
    value: 50,
  },

  // Psychotic Disorder Due to Another Medical Condition
  // Criteria A
  {label: 'Prominent hallucinations or delusions', value: 51},

  // Criteria B
  {
    label:
      'There is evidence from the history, physical examination, or laboratory findings that the disturbance is the direct pathophysiological consequence of another medical condition',
    value: 52,
  },

  // Criteria C
  {
    label: 'The disturbance is not better explained by another mental disorder',
    value: 53,
  },

  // Criteria D
  {
    label:
      'The disturbance does not occur exclusively during the course of a delirium',
    value: 54,
  },

  // Criteria E
  {
    label:
      'The disturbance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning',
    value: 55,
  },

  // Catatonia Associated With Another Mental Disorder
  // Criteria A
  {
    label: '•Stupor \n•No psychomotor activity \n•Not relating to environment',
    value: 56,
  },
  {label: 'Catalepsy', value: 57},
  {label: 'Waxy flexibility', value: 58},
  {label: 'Mutism', value: 59},
  {label: 'Negativism', value: 60},
  {label: 'Posturing', value: 61},
  {label: 'Mannerism', value: 62},
  {label: 'Stereotypy', value: 63},
  {label: 'Agitation', value: 64},
  {label: 'Grimacing', value: 65},
  {label: '•Echolalia \n•Mimicking anothers speech', value: 66},
  {label: 'Echopraxia', value: 67},

  // Catatonic Disorder Due to Another Medical Condition
  // Criteria A - Same as Above

  // Criteria B
  {
    label:
      'There is evidence from the history, physical examination, or laboratory findings that the disturbance is the direct pathophysiological consequence of another medical condition',
    value: 68,
  },

  // Criteria C
  {
    label: 'The disturbance is not better explained by another mental disorder',
    value: 69,
  },

  // Criteria D
  {
    label:
      'The disturbance does not occur exclusively during the course of a delirium',
    value: 70,
  },

  // Criteria E
  {
    label:
      'The disturbance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning',
    value: 71,
  },

  // Unspecified Schizophrenia Spectrum and Other Psychotic Disorder
  // This category applies to presentations in which symptoms characteristic of a schizophrenia spectrum and other psychotic disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any of the disorders in the schizophrenia spectrum and other psychotic disorders diagnostic class
];

const mainDisorderA = numbers => {
  const criteriaValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const matchingCriteria = criteriaValues.filter(value =>
    numbers.includes(value),
  );
  return matchingCriteria.length >= 9 || numbers.includes(10);
};

const optionalDisorderA = numbers => {
  return numbers.includes(10);
};

const mainDisorderB = numbers => {
  return numbers.includes(11);
};

const optionalDisorderB = numbers => {
  return (
    numbers.includes(12) ||
    numbers.includes(13) ||
    numbers.includes(14) ||
    numbers.includes(15)
  );
};

export const schizophreniaDiagnosis = numbers => {
  if (mainDisorderA(numbers) || optionalDisorderA(numbers)) {
    return 'Schizotypal (Personality) Disorder';
  } else if (mainDisorderB(numbers) || optionalDisorderB(numbers)) {
    return 'Delusional Disorder';
  } else {
    return 'Unspecified Schizophrenia Spectrum and Other Psychotic Disorder';
  }
};
