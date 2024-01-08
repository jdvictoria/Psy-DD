export const sexualSymptoms = [
  // Common Symptom
  // 2
  {
    label:
      'The symptoms in Criterion A have persisted for a minimum duration of approximately 6 months',
    value: 2,
  },
  // 3
  {
    label:
      'The symptoms in Criterion A cause clinically significant distress in the individual',
    value: 3,
  },
  // 4
  {
    label:
      'The sexual dysfunction is not better explained by a nonsexual mental disorder or as a consequence of severe relationship distress or other significant stressors and is not attributable to the effects of a substance/medication or another medical condition',
    value: 4,
  },

  // Delayed Ejaculation
  // Criteria A (One Symptom)
  // 6 months
  {label: 'Marked delay in ejaculation (6 months)', value: 0},
  {label: 'Marked infrequency or absence of ejaculation (6 months)', value: 1},

  // Criteria B
  // 2

  // Criteria C
  // 3

  // Criteria D
  // 4

  // Erectile Disorder
  // Criteria A (One of three symptoms must bw 75 or 100% experience
  // 6 months
  {
    label:
      'Difficulty in obtaining an erection during sexual activity (6 months)',
    value: 5,
  },
  {
    label:
      'Difficulty in maintaining an erection until the completion of sexual activity (6 months)',
    value: 6,
  },
  {label: 'Decrease in erectile rigidity (6 months)', value: 7},

  // Criteria B
  // 2

  // Criteria C
  // 3

  // Criteria D
  // 4

  // Female Orgasmic Disorder
  // Criteria A (One of three symptoms must bw 75 or 100% experience
  // 6 months
  {
    label: 'Marked delay in, marked infrequency of, or absence of orgasm',
    value: 8,
  },
  {label: 'Markedly reduced intensity of orgasmic sensations', value: 9},

  // Criteria B
  // 2

  // Criteria C
  // 3

  // Criteria D
  // 4

  // Female Sexual Interest/Arousal Disorder
  // Criteria A ( three symptoms
  {label: 'Absent/reduced interest in sexual activity', value: 10},
  {label: 'Absent/reduced sexual/erotic thoughts or fantasies', value: 11},
  {
    label:
      '•Reduced initiation of sexual activity \n•Typically unreceptive to a partner’s attempts to initiate',
    value: 12,
  },
  {
    label:
      'Reduced sexual excitement/pleasure during sexual activity in almost all or all (approximately 75%–100%) sexual encounters',
    value: 13,
  },

  // Criteria B
  // 2

  // Criteria C
  // 3

  // Criteria D
  // 4

  // Genito-Pelvic Pain/Penetration Disorder
  // Criteria A
  // 6 months
  {label: 'Vaginal penetration during intercourse', value: 14},
  {
    label: 'Pelvic pain during vaginal intercourse or penetration attempts',
    value: 15,
  },
  {
    label:
      'Anxiety about vulvovaginal or pelvic pain in anticipation of vaginal penetration',
    value: 16,
  },
  {
    label:
      'Tensed or tightening of pelvic muscle during attemp of vaginal intercourse',
    value: 17,
  },

  // Criteria B
  // 2

  // Criteria C
  // 3

  // Criteria D
  // 4

  // Male Hypoactive Sexual Desire Disorder
  // Criteria A
  {
    label:
      'Persistently or recurrently deficient (or absent) sexual/erotic thoughts or fantasies and desire for sexual activity',
    value: 18,
  },

  // Criteria B
  // 2

  // Criteria C
  // 3

  // Criteria D
  // 4

  // Premature (Early) Ejaculation
  // Criteria A
  // 6 months
  {
    label:
      'Recurrent pattern of ejaculation during sexual activitywithin approximately 1 minute following vaginal penetration and before the individual wishes it (6 months)',
    value: 19,
  },

  // Criteria B
  {
    label:
      'The symptom in Criterion A must have been present for at least 6 months and must be experienced on almost all or all (approximately 75%–100%) occasions of sexual activity',
    value: 20,
  },

  // Criteria C
  {
    label:
      'The symptom in Criterion A causes clinically significant distress in the individual',
    value: 21,
  },

  // Criteria D
  // 4

  // Substance/Medication-Induced Sexual Dysfunction
  // Criteria A
  {label: 'A clinically significant disturbance in sexual function', value: 22},

  // Criteria B
  {
    label:
      'The symptoms in Criterion A developed during or soon after substance intoxication or withdrawal or after exposure to or withdrawal from a medication',
    value: 23,
  },
  {
    label:
      'The involved substance/medication is capable of producing the symptoms in Criterion A',
    value: 24,
  },

  // Criteria C
  {
    label:
      'The disturbance is not better explained by a sexual dysfunction that is not substance/medication-induced',
    value: 25,
  },

  // Criteria D
  {
    label:
      'The disturbance does not occur exclusively during the course of a delirium',
    value: 26,
  },

  // Criteria E
  {
    label:
      'The disturbance causes clinically significant distress in the individual',
    value: 27,
  },
];

const mainDisorderA = numbers => {
  const criteriaA = [0, 1];
  const matchingCriteriaA = criteriaA.filter(value => numbers.includes(value));
  return matchingCriteriaA.length >= 1;
};

const optionalDisorderA = numbers => {
  return numbers.includes(2) || numbers.includes(3) || numbers.includes(4);
};

const mainDisorderB = numbers => {
  return (
    (numbers.includes(5) || numbers.includes(6) || numbers.includes(7)) &&
    numbers.includes(2) &&
    numbers.includes(3)
  );
};

const optionalDisorderB = numbers => {
  return numbers.includes(4);
};

const mainDisorderC = numbers => {
  const criteriaA = [8, 9];
  const matchingCriteriaA = criteriaA.filter(value => numbers.includes(value));
  return matchingCriteriaA.length >= 1;
};

const mainDisorderD = numbers => {
  const criteriaA = [10, 11, 12, 13];
  const matchingCriteriaA = criteriaA.filter(value => numbers.includes(value));
  return matchingCriteriaA.length >= 1 && numbers.includes(2);
};

const optionalDisorderD = numbers => {
  return numbers.includes(3) || numbers.includes(4);
};

const mainDisorderE = numbers => {
  const criteriaA = [14, 15, 16, 17];
  const matchingCriteriaA = criteriaA.filter(value => numbers.includes(value));
  return matchingCriteriaA.length >= 1;
};

const mainDisorderF = numbers => {
  return numbers.includes(18);
};

const mainDisorderG = numbers => {
  return numbers.includes(19);
};

const optionalDisorderG = numbers => {
  return numbers.includes(20) || numbers.includes(21) || numbers.includes(4);
};

const mainDisorderH = numbers => {
  return numbers.includes(22);
};

const optionalDisorderH = numbers => {
  return (
    (numbers.includes(23) && numbers.includes(24)) ||
    numbers.includes(25) ||
    numbers.includes(26)
  );
};

export const sexualDiagnosis = numbers => {
  if (mainDisorderA(numbers)) {
    return 'Delayed Ejaculation';
  } else if (mainDisorderB(numbers) || optionalDisorderB(numbers)) {
    return 'Erectile Disorder';
  } else if (mainDisorderC(numbers) || optionalDisorderA(numbers)) {
    return 'Female Orgasmic Disorder';
  } else if (mainDisorderD(numbers) || optionalDisorderD(numbers)) {
    return 'Arousal Disorder';
  } else if (mainDisorderE(numbers) || optionalDisorderA(numbers)) {
    return 'Penetration Disorder';
  } else if (mainDisorderF(numbers) || optionalDisorderA(numbers)) {
    return 'Male Hypoactive Sexual Desire Disorder';
  } else if (mainDisorderG(numbers) || optionalDisorderG(numbers)) {
    return 'Premature (Early) Ejaculation';
  } else if (mainDisorderH(numbers) || optionalDisorderH(numbers)) {
    return 'Substance/Medication-Induced Sexual Dysfunction';
  } else if (numbers.length > 1) {
    return 'Other Specified / Unspecified Sexual Dysfunction';
  } else {
    return '';
  }
};

export const disorderDurationH = [
  {
    label:
      'The disturbance has been present since the individual became sexually active',
    value: 18,
  },
  {
    label:
      'The disturbance began after a period of relatively normal sexual function',
    value: 19,
  },
  {
    label:
      'Not limited to certain types of stimulation, situations, or partners',
    value: 20,
  },
  {
    label:
      'Only occurs with certain types of stimulation, situations, or partners',
    value: 21,
  },
];

export const disorderDurationI = [
  {
    label: 'Occurs on 25%–50% of occasions of sexual activity',
    value: 22,
  },
  {
    label: 'Occurs on 50%–75% of occasions of sexual activity',
    value: 23,
  },
  {
    label: 'Occurs on 75% or more of occasions of sexual activity',
    value: 24,
  },
];

export const disorderSeverityG = [
  {
    label: 'Evidence of mild distress over the symptoms in Criterion A',
    value: 39,
  },
  {
    label: 'Evidence of moderate distress over the symptoms in Criterion A',
    value: 40,
  },
  {
    label:
      'Evidence of severe or extreme distress over the symptoms in Criterion A',
    value: 41,
  },
];

export const disorderSeverityI = [
  {
    label: 'With mild use disorder (Alcohol)',
    value: 42,
  },
  {
    label: 'With moderate or severe use disorder (Alcohol)',
    value: 43,
  },
  {
    label: 'Without use disorder (Alcohol)',
    value: 44,
  },
  {
    label: 'With mild use disorder (Opioid)',
    value: 45,
  },
  {
    label: 'With moderate or severe use disorder (Opioid)',
    value: 46,
  },
  {
    label: 'Without use disorder (Opioid)',
    value: 47,
  },
  {
    label: 'With mild use disorder (Sedative, Hypnotic, or Anxiolytic)',
    value: 48,
  },
  {
    label:
      'With moderate or severe use disorder (Sedative, Hypnotic, or Anxiolytic)',
    value: 49,
  },
  {
    label: 'Without use disorder (Sedative, Hypnotic, or Anxiolytic)',
    value: 50,
  },
  {
    label:
      'With mild use disorder (Amphetamine-type substance (or other stimulant))',
    value: 51,
  },
  {
    label:
      'With moderate or severe use disorder (Amphetamine-type substance (or other stimulant))',
    value: 52,
  },
  {
    label:
      'Without use disorder (Amphetamine-type substance (or other stimulant))',
    value: 53,
  },
  {
    label: 'With mild use disorder (Cocaine)',
    value: 54,
  },
  {
    label: 'With moderate or severe use disorder (Cocaine)',
    value: 55,
  },
  {
    label: 'Without use disorder (Cocaine)',
    value: 56,
  },
  {
    label: 'With mild use disorder (Other (or unknown) substance)',
    value: 57,
  },
  {
    label:
      'With moderate or severe use disorder (Other (or unknown) substance)',
    value: 58,
  },
  {
    label: 'Without use disorder (Other (or unknown) substance)',
    value: 59,
  },
];

export const disorderSpecificationL = [
  {
    label:
      'If criteria are met for intoxication with the substance and the symptoms develop during the intoxication',
    value: 53,
  },
  {
    label:
      'If criteria are met for withdrawal from the substance and the symptoms develop during, or shortly after, withdrawal',
    value: 54,
  },
  {
    label:
      'If symptoms developed at initiation of medication, with a change in use of medication, or during withdrawal of medication',
    value: 55,
  },
];
