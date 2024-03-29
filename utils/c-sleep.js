export const sleepSymptoms = [
  // Common
  {
    label:
      'The sleep disturbance causes clinically significant distress or impairment in social, occupational, and other important areas of functioning',
    value: 3,
  },

  // Insomia Disorder
  // Criteria A: One or more symptom
  {
    label:
      '•Difficulty initiating sleep \n•In children, this may manifest as difficulty initiating sleep without caregiver intervention',
    value: 0,
  },
  {
    label:
      '•Difficulty maintaining sleep \n•Frequent awakenings \n•Problems returning to sleep after awakening\tIn children, this may manifest as difficulty returning to sleep without caregiver intervention',
    value: 1,
  },
  {
    label: 'Early-morning awakening with inability to return to sleep',
    value: 2,
  },

  // Criteria B
  // Common 3

  // Criteria C
  {label: 'The sleep difficulty occurs at least 3 nights per week', value: 4},

  // Criteria D
  {label: 'The sleep difficulty is present for at least 3 months', value: 5},

  // Criteria E
  {
    label: 'The sleep difficulty occurs despite adequate opportunity for sleep',
    value: 6,
  },

  // Criteria F
  {
    label:
      'The insomnia is not better explained by and does not occur exclusively during the course of another sleep-wake disorder',
    value: 7,
  },

  // Criteria G
  {
    label:
      'Coexisting mental disorders and medical conditions do not adequately explain the predominant complaint of insomnia',
    value: 8,
  },

  // Hypersomnolence Disorder
  // Criteria A (at least one symptom)
  {
    label:
      '•Recurrent periods of sleep \n•Lapses into sleep within the same day \n•(3 Times a Week in 3 Months)',
    value: 10,
  },
  {
    label:
      '•Prolonged main sleep more than 9 hours \n•Unrefreshing sleep \n•(3 Times a Week for 3 Months)',
    value: 11,
  },
  {
    label: 'Difficulty being fully awake \n•(3 Times a Week in 3 Months)',
    value: 12,
  },

  // Criteria B
  {
    label:
      'The Hypersomnolence occurs at least three times per week, for at least 3 months',
    value: 13,
  },

  // Criteria C
  {
    label:
      'The Hypersomnolence is accompanied by significant distress or impairment in cognitive, social, occupational, or other important areas of functioning',
    value: 14,
  },

  // Criteria D
  {
    label:
      'The Hypersomnolence is not better explained by and does not occur exclusively during the course of another sleep disorder',
    value: 15,
  },

  // Criteria E
  {
    label:
      'The Hypersomnolence is not attributable to the physiological effects of a substance',
    value: 16,
  },

  // Criteria F
  {
    label: 'Mental and Medical Disorder doesnt explain the Hypersomnolence',
    value: 17,
  },

  // Narcolepsy
  // Criteria A
  // 3 months
  // Three times per week
  {
    label:
      '•Recurrent periods of irrepressible need to sleep \n•Lapsing into sleep \n•Napping occuring within the same day \n•(3 Times a Week & Over the past 3 months)',
    value: 18,
  },

  // Criteria B ( at l.east one of the following
  // Few times per month
  {
    label:
      '•Episodes of Cataplexy (Few times per Month) \n•Brief episodes of sudden bilateral loss of muscle tone (Few times per Month) \n•Spontaneous grimaces or jaw-opening episodes with tongue thrusting or a global hypotonia (6 months of onset)',
    value: 19,
  },
  {label: 'Hypocretin deficiency', value: 20},
  {
    label:
      '•Nocturnal sleep \n•Polysomnography showing rapid eye movement (15 minutes) \n•Two or more sleep-onset REM periods',
    value: 21,
  },

  // Obstructive Sleep Apnea Hypopnea
  // Criteria A: Either 1 or 2
  // per hour of sleep
  {
    label:
      '•Evidence by polysomnography of at least five obstructive apneas \n•Nocturnal breathing disturbances \n•Snoring \n•Snorting \n•Gasping \n•Pause of breathing durring sleep \n•Daytime sleepiness \n•Fatigue \n•Unrefreshing sleep \n•(Per hour of sleep)',
    value: 23,
  },
  {
    label:
      '•Evidence by polysomnography of 15 or more obstructive apneas \n•Hypopneas per hour of sleep regardless of accompanying symptoms',
    value: 24,
  },

  // Central Sleep Apnea
  // Criteria A
  // per hour
  {
    label: 'Evidence by polysomnography of five or more central apneas',
    value: 25,
  },

  // Criteria B
  {
    label:
      'The disorder is not better explained by another current sleep disorder',
    value: 26,
  },

  // Sleep-Related Hypoventilation
  // Criteria A
  {
    label:
      'Polysomnograpy demonstrates episodes of decreased respiration associated with elevated CO2 levels',
    value: 27,
  },

  // Criteria B
  {
    label:
      'The disturbance is not better explained by another current sleep disorder',
    value: 28,
  },

  // Circadian Rhythm Sleep-Wake Disorders
  // Criteria A
  {
    label:
      'A persistent or recurrent pattern of sleep disruption that is primarily due to an alteration of the circadian system or to a misalignment between the endogenous circadian rhythm and the sleep-wake schedule required by an individual’s physical environment or social or professional schedule',
    value: 29,
  },

  // Criteria B
  {
    label:
      'The sleep disruption leads to excessive sleepiness or insomnia, or both',
    value: 30,
  },

  // Criteria C
  // Common 3
  // "Non–Rapid Eye Movement Sleep Arousal Disorders
  // Criteria A
  {label: 'Sleepwalking', value: 32},
  {label: 'Sleep terrors', value: 33},

  // Criteria B
  {
    label:
      'No or little (e.g., only a single visual scene) dream imagery is recalled',
    value: 34,
  },

  // Criteria C
  {label: 'Amnesia for the episodes is present', value: 35},

  // Criteria D

  // Criteria E
  {
    label:
      'The disturbance is not attributable to the physiological effects of a substance',
    value: 37,
  },

  // Criteria F
  {
    label:
      'Coexisting mental disorders and medical conditions do notexplain the episodes of sleepwalking or sleep terrors',
    value: 38,
  },

  // Nightmare Disorder
  // Criteria A
  {
    label:
      'Repeated occurrences of extended, extremely dysphoric, and well-remembered dreams that usually involve efforts to avoid threats to survival, security, or physical integrity and that generally occur during the second half of the major sleep episode',
    value: 39,
  },

  // Criteria B
  {
    label:
      'On awakening from the dysphoric dreams, the individual rapidly becomes oriented and alert',
    value: 40,
  },

  // Criteria C
  {label: 'Sleep Disturbance cause clinically significant distress', value: 41},

  // Criteria D
  {
    label:
      'The nightmare symptoms are not attributable to the physiological effects of a substance',
    value: 43,
  },

  // Criteria E
  {
    label:
      'Coexisting mental disorders and medical conditions do not adequately explain the predominant complaint of dysphoric dreams',
    value: 44,
  },

  // Rapid Eye Movement Sleep Behavior Disorder
  // Criteria A
  {
    label:
      'Repeated episodes of arousal during sleep associated with vocalization and/or complex motor behaviors',
    value: 45,
  },

  // Criteria B
  {
    label:
      'The behavior arises during REM seep which occur more than 90 minutes onset',
    value: 46,
  },

  // Criteria C
  {
    label:
      'Upon awakening from these episodes, the individual is completely awake, alert, and not confused or disoriented',
    value: 47,
  },

  // Criteria D
  {label: 'REM sleep without atonia on polysomnographic recording', value: 48},
  {
    label:
      'A history suggestive of REM sleep behavior disorder and an established synucleinopathy diagnosis',
    value: 49,
  },

  // Criteria E
  {label: 'The behaviors cause clinically significant distress', value: 50},

  // Criteria F
  {
    label:
      'The disturbance is not attributable to the physiological effects of a substance',
    value: 52,
  },

  // Criteria G
  {
    label:
      'Coexisting mental disorders and medical conditions do not explain the episodes',
    value: 53,
  },

  // Restless Legs Syndrome
  // Criteria A (3 Symptoms)
  // Persisted at least 3 months
  // 3 times per week
  {
    label:
      'Urge to move the legs begins or worsens during periods of rest or inactivity (3 Times a Week & Persisted At Least 3 months)',
    value: 54,
  },
  {
    label:
      'Urge to move the legs is partially or totally relieved by movement (3 Times a Week & Persisted At Least 3 months)',
    value: 55,
  },
  {
    label:
      'Urge to move the legs is worse in the evening or at night than during the day, or occurs only in the evening or at night (3 Times a Week & Persisted At Least 3 months)',
    value: 56,
  },

  // Criteria B
  {
    label:
      'The symptoms in Criterion A occur at least three times per week and have persisted for at least 3 months',
    value: 57,
  },

  // Criteria C
  {
    label:
      'Symptoms in Criterion A are accompanied by significant distress or impairment in social, occupational, educational, academic, behavioral, or other important areas of functioning',
    value: 58,
  },

  // Criteria D
  {
    label:
      'The symptoms in Criterion A are not attributable to another mental disorder or medical condition',
    value: 59,
  },

  // Criteria E
  {
    label:
      'The symptoms are not attributable to the physiological effects of a drug of abuse or medication',
    value: 60,
  },

  // Substance/Medication-Induced Sleep Disorder
  // Criteria A
  {label: 'A prominent and severe disturbance in sleep', value: 61},

  // Criteria B
  {
    label:
      'Developed during or soon after substance intoxication or withdrawal or after exposure to or withdrawal from a medication',
    value: 62,
  },
  {
    label:
      'The involved substance/medication is capable of producing the symptoms in Criterion A',
    value: 63,
  },

  // Criteria C
  {
    label:
      'Disturbance is not better explained by a sleep disorder that is not substance/medication-induced',
    value: 64,
  },

  // Criteria D
  {
    label:
      'Disturbance does not occur exclusively during the course of a delirium',
    value: 65,
  },

  // Criteria E
  {
    label:
      'Clinically significant distress or impairment in social, occupational, or other important areas of functioning',
    value: 66,
  },
];

const mainDisorderA = numbers => {
  const criteriaA = [0, 1, 2];
  const matchingCriteriaA = criteriaA.filter(value => numbers.includes(value));
  return matchingCriteriaA.length >= 1;
};

const optionalDisorderA = numbers => {
  return (
    numbers.includes(3) ||
    numbers.includes(4) ||
    numbers.includes(5) ||
    numbers.includes(6) ||
    numbers.includes(7)
  );
};

const mainDisorderB = numbers => {
  const criteriaA = [10, 11, 12];
  const matchingCriteriaA = criteriaA.filter(value => numbers.includes(value));
  return matchingCriteriaA.length >= 1;
};

const optionalDisorderB = numbers => {
  return (
    numbers.includes(13) ||
    numbers.includes(14) ||
    numbers.includes(15) ||
    numbers.includes(16) ||
    numbers.includes(17)
  );
};

const mainDisorderC = numbers => {
  return numbers.includes(18);
};

const optionalDisorderC = numbers => {
  const criteriaB = [19, 20, 21];
  const matchingCriteriaB = criteriaB.filter(value => numbers.includes(value));
  return matchingCriteriaB.length >= 1;
};

const mainDisorderD = numbers => {
  return numbers.includes(23) || numbers.includes(24);
};

const mainDisorderE = numbers => {
  return numbers.includes(25);
};

const optionalDisorderE = numbers => {
  return numbers.includes(26);
};

const mainDisorderF = numbers => {
  return numbers.includes(27);
};

const optionalDisorderF = numbers => {
  return numbers.includes(28);
};

const mainDisorderG = numbers => {
  return numbers.includes(29);
};

const optionalDisorderG = numbers => {
  return numbers.includes(30) || numbers.includes(3);
};

const mainDisorderH = numbers => {
  return numbers.includes(32) || numbers.includes(33);
};

const optionalDisorderH = numbers => {
  return (
    numbers.includes(34) ||
    numbers.includes(35) ||
    numbers.includes(3) ||
    numbers.includes(37) ||
    numbers.includes(37) ||
    numbers.includes(38)
  );
};

const mainDisorderI = numbers => {
  return numbers.includes(39);
};

const optionalDisorderI = numbers => {
  return (
    numbers.includes(40) ||
    (numbers.includes(41) && numbers.includes(3)) ||
    numbers.includes(43) ||
    numbers.includes(44)
  );
};

const mainDisorderJ = numbers => {
  return numbers.includes(45);
};

const optionalDisorderJ = numbers => {
  return (
    numbers.includes(46) ||
    numbers.includes(47) ||
    (numbers.includes(48) && numbers.includes(49)) ||
    (numbers.includes(50) && numbers.includes(3)) ||
    numbers.includes(52) ||
    numbers.includes(53)
  );
};

const mainDisorderK = numbers => {
  const criteriaA = [54, 55, 56];
  const matchingCriteriaA = criteriaA.filter(value => numbers.includes(value));
  return matchingCriteriaA.length >= 3;
};

const optionalDisorderK = numbers => {
  return (
    numbers.includes(57) ||
    numbers.includes(58) ||
    numbers.includes(59) ||
    numbers.includes(60)
  );
};

const mainDisorderL = numbers => {
  return numbers.includes(61);
};

const optionalDisorderL = numbers => {
  return (
    numbers.includes(62) ||
    numbers.includes(63) ||
    numbers.includes(64) ||
    numbers.includes(65) ||
    numbers.includes(66)
  );
};

export const sleepDiagnosis = numbers => {
  if (
    mainDisorderA(numbers) ||
    (mainDisorderA(numbers) && optionalDisorderA(numbers))
  ) {
    return 'Insomnia Disorder';
  } else if (
    mainDisorderB(numbers) ||
    (mainDisorderB(numbers) && optionalDisorderB(numbers))
  ) {
    return 'Hypersomnolence Disorder';
  } else if (mainDisorderC(numbers) && optionalDisorderC(numbers)) {
    return 'Narcolepsy';
  } else if (mainDisorderD(numbers)) {
    return 'Obstructive Sleep Apnea Hypoapnea';
  } else if (
    mainDisorderE(numbers) ||
    (mainDisorderE(numbers) && optionalDisorderE(numbers))
  ) {
    return 'Central Sleep Apnea';
  } else if (
    mainDisorderF(numbers) ||
    (mainDisorderF(numbers) && optionalDisorderF(numbers))
  ) {
    return 'Sleep-Related Hypoventilation';
  } else if (
    mainDisorderG(numbers) ||
    (mainDisorderG(numbers) && optionalDisorderG(numbers))
  ) {
    return 'Circadian Rhythm Sleep-Wake Disorder';
  } else if (
    mainDisorderH(numbers) ||
    (mainDisorderH(numbers) && optionalDisorderH(numbers))
  ) {
    return 'Non–Rapid Eye Movement Sleep Arousal Disorder';
  } else if (
    mainDisorderI(numbers) ||
    (mainDisorderI(numbers) && optionalDisorderI(numbers))
  ) {
    return 'Nightmare Disorder';
  } else if (
    mainDisorderJ(numbers) ||
    (mainDisorderJ(numbers) && optionalDisorderJ(numbers))
  ) {
    return 'Rapid Eye Movement Sleep Behavior Disorder';
  } else if (
    mainDisorderK(numbers) ||
    (mainDisorderK(numbers) && optionalDisorderK(numbers))
  ) {
    return 'Restless Legs Syndrome';
  } else if (
    mainDisorderL(numbers) ||
    (mainDisorderL(numbers) && optionalDisorderL(numbers))
  ) {
    return 'Substance/Medication-Induced Sleep Disorder';
  } else {
    return 'Other Specified / Unspecified Sleep Symptom and Related Disorder';
  }
};

export const insomniaDuration = [
  {label: 'Symptoms last at least 1 month but less than 3 months', value: 8},
  {label: 'Symptoms last 3 months or longer', value: 1},
  {label: 'Two (or more) episodes within the space of 1 year', value: 7},
];

export const insomniaSpecification = [
  {
    label: 'With medical condition',
    value: 4,
  },
  {label: 'With mental disorder', value: 5},
];

export const hyperSeverity = [
  {
    label: 'Difficulty maintaining daytime alertness 1–2 days/week',
    value: 4,
  },
  {label: 'Difficulty maintaining daytime alertness 3–4 days/week', value: 5},
  {label: 'Difficulty maintaining daytime alertness 5–7 days/week', value: 6},
];

export const hyperDuration = [
  {label: 'Duration of less than 1 month', value: 0},
  {label: 'Duration of 1–3 months', value: 9},
  {label: 'Duration of more than 3 months', value: 1},
];

export const hyperSpecification = [
  {
    label: 'With medical condition',
    value: 4,
  },
  {label: 'With mental disorder', value: 5},
  {label: 'With another sleep disorder', value: 6},
];

export const narcoSeverity = [
  {
    label:
      '•Narcolepsy with cataplexy or hypocretin deficiency (Type 1) \n•Criterion B1 (Episodes of Cataplexy) or Criterion B2 (Low CSF Hypocretin-1 levels) is met',
    value: 7,
  },
  {
    label:
      '•Narcolepsy without Cataplexy and either without Hypocretin deficiency or Hypocretin unmeasured (Type 2) \n•Criterion B3 (Positive Polysomnography/multiple sleep latency test) is met, but Criterion B1 is not met (i.e., no Cataplexy is present) and Criterion B2 is not met (i.e., CSF Gypocretin-1 levels are not low or have not been measured)',
    value: 8,
  },
  {
    label:
      '•Narcolepsy with cataplexy or hypocretin deficiency due to a medical condition',
    value: 9,
  },
  {
    label:
      '•Narcolepsy without cataplexy and without hypocretin deficiency due to a medical condition',
    value: 10,
  },
];

export const narcoDuration = [
  {
    label: '•Sleep disturbance if present, is mild. \n•If present, is mild.',
    value: 2,
  },
  {
    label:
      '•Need for multiple naps daily \n•Sleep may be moderately disturbed \n•Cataplexy, when present, occurs daily or every few days.\n',
    value: 3,
  },
  {
    label:
      '•Nearly constant sleepiness and, often \n•Highly disturbed nocturnal sleep \n•Excessive body movement and vivid dreams',
    value: 4,
  },
];

export const narcoSpecification = [
  {
    label:
      '(NT1) is most often based on the presence of recurrent sleepiness and cataplexy',
    value: 7,
  },
  {
    label:
      'Based on sleepiness and positive multiple sleep latency test (MSLT) findings, only to be reassigned to a diagnosis of NT1 following emergence of cataplexy',
    value: 8,
  },
];

export const obsDuration = [
  {
    label: 'Apnea hypopnea index is less than 15',
    value: 2,
  },
  {
    label: 'Apnea hypopnea index is 15–30',
    value: 3,
  },
  {
    label: 'Apnea hypopnea index is greater than 30',
    value: 4,
  },
];

export const centralSeverity = [
  {
    label:
      '•Idiopathic central sleep apnea \n•Characterized by repeated episodes of apneas and hypopneas during sleep caused by variability in respiratory effort but without evidence of airway obstruction',
    value: 11,
  },
  {
    label:
      '•Cheyne-Stokes breathing \n•A pattern of periodic crescendo-decrescendo variation in tidal volume that results in central apneas and hypopneas at a frequency of at least five events per hour, accompanied by frequent arousal',
    value: 12,
  },
  {
    label:
      '•Central sleep apnea comorbid with opioid use \n•The pathogenesis of this subtype is attributed to the effects of opioids on the respiratory rhythm generators in the medulla as well as the differential effects on hypoxic versus hypercapnic respiratory drive',
    value: 13,
  },
];

export const hypoSeverity = [
  {
    label:
      '•Idiopathic hypoventilation \n•This subtype is not attributable to any readily identified condition',
    value: 14,
  },
  {
    label:
      '•Congenital central alveolar hypoventilation \n•This subtype is a rare congenital disorder in which the individual typically presents in the perinatal period with shallow breathing, or cyanosis and apnea during sleep',
    value: 15,
  },
  {
    label:
      '•Comorbid sleep-related hypoventilation \n•This subtype occurs as a consequence of a medical condition, such as a pulmonary disorder \n•Occurs with obesity',
    value: 16,
  },
];

export const circaSeverity = [
  {
    label:
      '•Delayed sleep phase type \n•A pattern of delayed sleep onset and awakening times, with an inability to fall asleep and awaken at a desired or conventionally acceptable earlier time',
    value: 17,
  },
  {
    label:
      '•Advanced sleep phase type \n•A pattern of advanced sleep onset and awakening times, with an inability to remain awake or asleep until the desired or conventionally acceptable later sleep or wake times',
    value: 18,
  },
  {
    label:
      '•Irregular sleep-wake type \n•A temporally disorganized sleep-wake pattern, such that the timing of sleep and wake periods is variable throughout the 24-hour period',
    value: 19,
  },
  {
    label:
      '•Non-24-hour sleep-wake type \n•A pattern of sleep wake cycles that is not synchronized to the 24-hour environment, with a consistent daily drift of sleep and wake times',
    value: 20,
  },
  {
    label:
      '•Shift work type \n•Insomnia during the major sleep period and/or excessive sleepiness during the major awake period associated with a shift work schedule',
    value: 21,
  },
  {
    label: '•Unspecified type',
    value: 22,
  },
];

export const circaDuration = [
  {
    label: 'Symptoms last at least 1 month but less than 3 months',
    value: 8,
  },
  {
    label: 'Symptoms last 3 months or longer',
    value: 1,
  },
  {
    label: 'Two or more episodes occur within the space of 1 year',
    value: 7,
  },
];

export const circaSpecification = [
  {
    label: 'A family history of delayed sleep phase is present',
    value: 9,
  },
  {
    label:
      'Delayed sleep phase type may overlap with another circadian rhythm sleep-wake disorder, non-24-hour sleep-wake type',
    value: 10,
  },
];

export const eyeSeverity = [
  {
    label:
      '•Sleepwalking type \n•With sleep-related eating \n•With sleep-related sexual behavior (Sexsomnia)',
    value: 23,
  },
  {
    label: 'Sleep terror type',
    value: 24,
  },
];

export const nightmareSeverity = [
  {
    label: 'Less than one episode per week on average',
    value: 4,
  },
  {
    label: 'One or more episodes per week but less than nightly',
    value: 5,
  },
  {
    label: 'Episodes Nightly',
    value: 6,
  },
];

export const nightmareDuration = [
  {
    label: 'Duration of period of nightmares is 1 month or less',
    value: 0,
  },
  {
    label:
      'Duration of period of nightmares is greater than 1 month but less than 6 months',
    value: 9,
  },
  {
    label: 'Duration of period of nightmares is 6 months or greater',
    value: 1,
  },
];

export const nightmareSpecification = [
  {
    label: 'During Sleep Onset',
    value: 11,
  },
  {
    label: 'With Mental Disorder',
    value: 5,
  },
  {
    label: 'With Medical Condition',
    value: 4,
  },
  {
    label: 'With Another Sleep Disorder',
    value: 6,
  },
];

export const substanceSleepSeverity = [
  {
    label: 'With mild use disorder (Alcohol)',
    value: 25,
  },
  {
    label: 'With moderate or severe use disorder (Alcohol)',
    value: 26,
  },
  {
    label: 'Without use disorder (Alcohol)',
    value: 27,
  },
  {
    label: 'Without use disorder (Caffeine)',
    value: 28,
  },
  {
    label: 'With mild use disorder (Cannabis)',
    value: 29,
  },
  {
    label: 'With moderate or severe use disorder (Cannabis)',
    value: 30,
  },
  {
    label: 'Without use disorder (Cannabis)',
    value: 31,
  },
  {
    label: 'With mild use disorder (Opioid)',
    value: 32,
  },
  {
    label: 'With moderate or severe use disorder (Opioid)',
    value: 33,
  },
  {
    label: 'Without use disorder (Opioid)',
    value: 34,
  },
  {
    label: 'With mild use disorder (Sedative, Hypnotic, or Anxiolytic)',
    value: 35,
  },
  {
    label:
      'With moderate or severe use disorder (Sedative, Hypnotic, or Anxiolytic)',
    value: 36,
  },
  {
    label: 'Without use disorder (Sedative, Hypnotic, or Anxiolytic)',
    value: 37,
  },
  {
    label:
      'With mild use disorder (Amphetamine-type substance (or other stimulant))',
    value: 38,
  },
  {
    label:
      'With moderate or severe use disorder (Amphetamine-type substance (or other stimulant))',
    value: 39,
  },
  {
    label:
      'Without use disorder (Amphetamine-type substance (or other stimulant))',
    value: 40,
  },
  {
    label: 'With mild use disorder (Cocaine)',
    value: 41,
  },
  {
    label: 'With moderate or severe use disorder (Cocaine)',
    value: 42,
  },
  {
    label: 'Without use disorder (Cocaine)',
    value: 43,
  },
  {
    label: 'With moderate or severe use disorder (Tobacco)',
    value: 44,
  },
  {
    label: 'With mild use disorder (Other (or unknown) substance)',
    value: 45,
  },
  {
    label:
      'With moderate or severe use disorder (Other (or unknown) substance)',
    value: 46,
  },
  {
    label: 'Without use disorder (Other (or unknown) substance)',
    value: 47,
  },
];

export const substanceSleepSpecification = [
  {
    label:
      'Characterized by difficulty falling asleep or maintaining sleep, frequent nocturnal awakenings, or nonrestorative sleep',
    value: 12,
  },
  {
    label:
      'Characterized by predominant complaint of excessive sleepiness/fatigue during waking hours or, less commonly, a long sleep period',
    value: 13,
  },
  {
    label: 'Characterized by abnormal behavioral events during sleep',
    value: 14,
  },
  {
    label:
      'Characterized by a substance/medication induced sleep problem characterized by multiple types of sleep symptoms, but no symptom clearly predominates',
    value: 15,
  },
  {
    label:
      'If criteria are met for intoxication with the substance and the symptoms develop during the intoxication',
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
