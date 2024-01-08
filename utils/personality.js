export const personalitySymptoms = [
  // General Personality Disorder
  // Criteria A (two or more symptoms)
  {label: 'Cognition', value: 1},
  {label: 'Affectivity', value: 2},
  {label: 'Interpersonal functioning', value: 3},
  {label: 'Impulse Control', value: 4},

  // Criteria B
  {
    label:
      'The enduring pattern is inflexible and pervasive across a broad range of personal and social situations',
    value: 5,
  },

  // Criteria C
  {
    label:
      'Clinically significant distress or impairment in social, occupational, or other important areas of functioning',
    value: 6,
  },

  // Criteria D
  {
    label:
      'The pattern is stable and of long duration, and its onset can be traced back at least to adolescence or early adulthood',
    value: 7,
  },

  // Criteria E
  {
    label:
      'The enduring pattern is not better explained as a manifestation or consequence of another mental disorder',
    value: 8,
  },

  // Criteria F
  {
    label:
      'The enduring pattern is not attributable to the physiological effects of a substance',
    value: 9,
  },

  // Paranoid Personality Disorder
  // Criteria A (Four or mpre symptoms)
  {label: 'Suspects, without sufficient basis', value: 10},
  {
    label:
      'Preoccupied with unjustified doubts about the loyalty or trustworthiness of friends or associates',
    value: 11,
  },
  {
    label:
      'Reluctant to confide in others because of unwarranted fear that the information will be used maliciously against him or her',
    value: 12,
  },
  {
    label:
      'Reads hidden demeaning or threatening meanings into benign remarks or events',
    value: 13,
  },
  {label: 'Persistently bears grudges', value: 14},
  {
    label:
      'Perceives attacks on his or her character or reputation that are not apparent to others and is quick to react angrily or to counterattack',
    value: 15,
  },
  {
    label:
      'Has recurrent suspicions, without justification, regarding fidelity of spouse or sexual partner',
    value: 16,
  },

  // Criteria B
  {
    label:
      'Does not occur exclusively during the course of schizophrenia, a bipolar disorder or depressive disorder with psychotic features, or another psychotic disorder and is not attributable to the physiological effects of another medical condition',
    value: 17,
  },

  // Schizoid Personality Disorder
  // Criteria A (four or more symptoms)
  {
    label:
      'Neither desires nor enjoys close relationships, including being part of a family',
    value: 18,
  },
  {label: 'Almost always chooses solitary activities', value: 19},
  {
    label:
      'Has little, if any, interest in having sexual experiences with another person',
    value: 20,
  },
  {label: 'Takes pleasure in few, if any, activities', value: 21},
  {
    label:
      'Lacks close friends or confidants other than first-degree relatives',
    value: 22,
  },

  // Criteria B
  {
    label:
      'Does not occur exclusively during the course of schizophrenia, a bipolar disorder or depressive disorder with psychotic features, or another psychotic disorder and is not attributable to the physiological effects of another medical condition',
    value: 23,
  },

  // Schizotypal Personality Disorder
  // Criteria A (fiveor more symptoms)
  {label: 'Ideas of reference', value: 24},
  {
    label:
      '•Odd beliefs that is inconsistent with subcultural norms \n•Magical Thinking that influences behavior inconsitent with subcultural norm',
    value: 25,
  },
  {label: 'Unusual perceptual experiences', value: 26},
  {label: 'Odd thinking and speech', value: 27},
  {label: '•Suspiciousness \n•Paranoid ideation', value: 28},
  {label: '•Inappropriate affect \n•Constricted affect', value: 29},
  {label: 'Behavior or appearance is odd / eccentric / peculiar', value: 30},
  {
    label:
      'Lack of close friends or confidants other than first-degree relatives',
    value: 31,
  },
  {
    label:
      'Excessive social anxiety that does not diminish with familiarity and tends to be associated with paranoid fears rather than negative judgments about self',
    value: 32,
  },

  // Criteria B
  {
    label:
      'Does not occes, another psychotic disorder, or autism spectrum disorder.ur exclusively during the course of schizophrenia, a bipolar disorder or depressive disorder with psychotic feature',
    value: 33,
  },

  // Antisocial Personality Disorder
  // Criteria A (Five or more symptoms)
  {label: 'Efforts to avoid real or imagined abandonment', value: 34},
  {
    label:
      'Unstable and intense interpersonal relationships characterized by alternating between extremes of idealization and devaluation',
    value: 35,
  },
  {
    label:
      '•Identity disturbance \n•Markedly and persistently unstable selfimage or sense of self',
    value: 36,
  },
  {label: 'Impulsivity that are self-damaging', value: 37},
  {
    label:
      'Recurrent suicidal behavior, gestures, or threats, or selfmutilating behavior',
    value: 38,
  },
  {
    label: 'Affective instability due to a marked reactivity of mood',
    value: 39,
  },
  {label: 'Chronic feelings of emptiness', value: 40},
  {
    label: '•Inappropriate, intense anger \n•Difficulty controlling anger',
    value: 41,
  },
  {
    label:
      '•Transient, stress-related paranoid ideation \n•Dissociative symptoms (Severe)',
    value: 42,
  }, // severe

  // Histrionic Personality Disorder
  // Criteria A (Five or more symptoms)
  {
    label:
      'Uncomfortable in situations in which he or she is not the center of attention',
    value: 43,
  },
  {
    label:
      'Interaction with others is often inappropriate sexually seductive or provocative behavior',
    value: 44,
  },
  {
    label: '•Displays rapidly shifting \n•Shallow expression of emotions',
    value: 45,
  },
  {label: 'Uses physical appearance to draw attention to self', value: 46},
  {
    label:
      'Has a style of speech that is excessively impressionistic and lacking in detail',
    value: 47,
  },
  {
    label:
      '•Shows self-dramatization, theatricality \n•Exaggerated expression of emotion',
    value: 48,
  },
  {label: '•Is suggestible \n•Easily Influenced', value: 49},
  {
    label: 'Considers relationships to be more intimate than they actually are',
    value: 50,
  },

  // Narcissistic Personality Disorder
  // Criteria A (Five or more symptoms)
  {label: 'Grandiose sense of self-importance', value: 51},
  {
    label:
      'Preoccupied with fantasies of unlimited success, power, brilliance, beauty, or ideal love',
    value: 52,
  },
  {
    label:
      'Believes that he or she is “special” and unique and can only be understood by, or should associate with, other special or highstatus people (or institutions)',
    value: 53,
  },
  {label: 'Requires excessive admiration', value: 54},
  {label: 'Has a sense of entitlement', value: 55},
  {label: 'Is interpersonally exploitative', value: 56},
  {label: 'Lacks empathy', value: 57},
  {
    label:
      'Is often envious of others or believes that others are envious of him or her',
    value: 58,
  },
  {label: 'Shows arrogant, haughty behaviors or attitudes', value: 59},

  // Avoidance Personality Disorder
  // Criteria A (Four or more following)
  {
    label:
      'Avoids occupational activities that involve significant interpersonal contact because of fears of criticism, disapproval, or rejection',
    value: 60,
  },
  {
    label:
      'Unwilling to get involved with people unless certain of being liked',
    value: 61,
  },
  {
    label:
      'Shows restraint within intimate relationships because of the fear of being shamed or ridiculed',
    value: 62,
  },
  {
    label: 'Preoccupied with being criticized or rejected in social situations',
    value: 63,
  },
  {
    label:
      'Inhibited in new interpersonal situations because of feelings of inadequacy',
    value: 64,
  },
  {
    label:
      'Views self as socially inept, personally unappealing, or inferior to others',
    value: 65,
  },
  {
    label:
      'Is unusually reluctant to take personal risks or to engage in any new activities because they may prove embarrassing',
    value: 66,
  },

  // Dependent Personality Disorder
  // Criteria A (Five or more of the following)
  {
    label:
      'Difficulty making everyday decisions without an excessive amount of advice and reassurance from others',
    value: 67,
  },
  {
    label:
      'Needs others to assume responsibility for most major areas of his or her life',
    value: 68,
  },
  {
    label:
      'Has difficulty expressing disagreement with others because of fear of loss of support or approval',
    value: 69,
  },
  {
    label:
      'Has difficulty initiating projects or doing things on his or her own',
    value: 70,
  },
  {
    label:
      'Goes to excessive lengths to obtain nurturance and support from others, to the point of volunteering to do things that are unpleasant',
    value: 71,
  },
  {
    label:
      'Feels uncomfortable or helpless when alone because of exaggerated fears of being unable to care for himself or herself',
    value: 72,
  },
  {
    label:
      'Urgently seeks another relationship as a source of care and support when a close relationship ends',
    value: 73,
  },
  {
    label:
      'Unrealistically preoccupied with fears of being left to take care of himself or herself',
    value: 74,
  },

  // Obsessive-Compulsive Personality Disorder
  // Criteria A (four or more symptoms)
  {
    label:
      'Is preoccupied with details, rules, lists, order, organization, or schedules to the extent that the major point of the activity is lost',
    value: 75,
  },
  {
    label: 'Shows perfectionism that interferes with task completion',
    value: 76,
  },
  {
    label:
      'Is excessively devoted to work and productivity to the exclusion of leisure activities and friendships',
    value: 77,
  },
  {
    label:
      'Is overconscientious, scrupulous, and inflexible about matters of morality, ethics, or values',
    value: 78,
  },
  {
    label:
      'Is unable to discard worn-out or worthless objects even when they have no sentimental value',
    value: 79,
  },
  {
    label:
      'Is reluctant to delegate tasks or to work with others unless they submit to exactly his or her way of doing things',
    value: 80,
  },
  {
    label:
      'Adopts a miserly spending style toward both self and others; money is viewed as something to be hoarded for future catastrophes',
    value: 81,
  },
  {label: 'Shows rigidity and stubbornness', value: 82},

  // Personality Change Due to Another Medical Condition
  {
    label:
      'This category applies to presentations in which symptoms characteristic of a personality disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any of the disorders in the personality disorders diagnostic class',
    value: 83,
  },
  // This category applies to presentations in which symptoms characteristic of a personality disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any of the disorders in the personality disorders diagnostic class
];

const mainDisorderA = numbers => {
  const criteriaA = [1, 2, 3, 4];
  const matchingCriteriaA = criteriaA.filter(value => numbers.includes(value));
  return matchingCriteriaA.length >= 2;
};

const optionalDisorderA = numbers => {
  return (
    numbers.includes(5) ||
    numbers.includes(6) ||
    numbers.includes(7) ||
    numbers.includes(8) ||
    numbers.includes(9)
  );
};

const mainDisorderB = numbers => {
  const criteriaA = [10, 11, 12, 13, 14, 15, 16];
  const matchingCriteriaA = criteriaA.filter(value => numbers.includes(value));
  return matchingCriteriaA.length >= 4;
};

const optionalDisorderB = numbers => {
  return numbers.includes(17);
};

const mainDisorderC = numbers => {
  const criteriaA = [18, 19, 20, 21, 22];
  const matchingCriteriaA = criteriaA.filter(value => numbers.includes(value));
  return matchingCriteriaA.length >= 4;
};

const optionalDisorderC = numbers => {
  return numbers.includes(23);
};

const mainDisorderD = numbers => {
  const criteriaA = [24, 25, 26, 27, 28, 29, 30, 31, 32];
  const matchingCriteriaA = criteriaA.filter(value => numbers.includes(value));
  return matchingCriteriaA.length >= 5;
};

const optionalDisorderD = numbers => {
  return numbers.includes(33);
};

const mainDisorderE = numbers => {
  const criteriaA = [34, 35, 36, 37, 38, 39, 40, 41, 42];
  const matchingCriteriaA = criteriaA.filter(value => numbers.includes(value));
  return matchingCriteriaA.length >= 5;
};

const mainDisorderF = numbers => {
  const criteriaA = [43, 44, 45, 46, 47, 48, 49, 50];
  const matchingCriteriaA = criteriaA.filter(value => numbers.includes(value));
  return matchingCriteriaA.length >= 5;
};

const mainDisorderG = numbers => {
  const criteriaA = [51, 52, 53, 54, 55, 56, 57, 58, 59];
  const matchingCriteriaA = criteriaA.filter(value => numbers.includes(value));
  return matchingCriteriaA.length >= 5;
};

const mainDisorderH = numbers => {
  const criteriaA = [60, 61, 62, 63, 64, 65, 66];
  const matchingCriteriaA = criteriaA.filter(value => numbers.includes(value));
  return matchingCriteriaA.length >= 4;
};

const mainDisorderI = numbers => {
  const criteriaA = [67, 68, 69, 70, 71, 72, 73, 74];
  const matchingCriteriaA = criteriaA.filter(value => numbers.includes(value));
  return matchingCriteriaA.length >= 5;
};

const mainDisorderJ = numbers => {
  const criteriaA = [75, 76, 77, 78, 79, 80, 81, 82];
  const matchingCriteriaA = criteriaA.filter(value => numbers.includes(value));
  return matchingCriteriaA.length >= 4;
};

const mainDisorderK = numbers => {
  return numbers.includes(83);
};

export const personalityDiagnosis = numbers => {
  if (mainDisorderA(numbers) || optionalDisorderA(numbers)) {
    return 'General Personality Disorder';
  } else if (mainDisorderB(numbers) || optionalDisorderB(numbers)) {
    return 'Paranoid Personality Disorder';
  } else if (mainDisorderC(numbers) || optionalDisorderC(numbers)) {
    return 'Schizoid Personality Disorder';
  } else if (mainDisorderD(numbers) || optionalDisorderD(numbers)) {
    return 'Schizotypal Personality Disorder';
  } else if (mainDisorderE(numbers)) {
    return 'Antisocial Personality Disorder';
  } else if (mainDisorderF(numbers)) {
    return 'Histrionic Personality Disorder';
  } else if (mainDisorderG(numbers)) {
    return 'Narcissistic Personality Disorder';
  } else if (mainDisorderH(numbers)) {
    return 'Avoidance Personality Disorder';
  } else if (mainDisorderI(numbers)) {
    return 'Dependent Personality Disorder';
  } else if (mainDisorderJ(numbers)) {
    return 'Obsessive-Compulsive Personality Disorder';
  } else if (mainDisorderK(numbers)) {
    return 'Personality Change Due to Another Medical Condition';
  } else if (numbers.length > 1) {
    return 'Other Specified / Unspecified Personality Disorder';
  } else {
    return '';
  }
};

export const disorderSpecificationQ = [
  {
    label: 'If the predominant feature is marked apathy and indifference',
    value: 73,
  },
  {
    label: 'If the predominant feature is suspiciousness or paranoid ideation',
    value: 74,
  },
  {
    label:
      'If the presentation is not characterized by any of the above subtypes',
    value: 75,
  },
  {
    label: 'If more than one feature predominates in the clinical picture',
    value: 76,
  },
];
