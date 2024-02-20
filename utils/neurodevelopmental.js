export const neurodevelopmentalSymptoms = [
  // Common 9
  {label: 'Onset of symptoms is in the early developmental period', value: 9},
  // Common 78
  {
    label:
      'The tics may wax and wane in frequency but have persisted for more than 1 year since first tic onset',
    value: 78,
  },
  // Common 79
  {label: 'Onset is before age 18 years', value: 79},
  // Common 80
  {
    label:
      'The disturbance is not attributable to the physiological effects of a substance',
    value: 80,
  },

  // Intellectual Developmental Disorder
  // Criteria A
  {
    label:
      'Deficits in intellectual functions, such as reasoning, problem solving, planning, abstract thinking, judgment, academic learning, and learning from experience',
    value: 0,
  },

  // Criteria B
  {
    label:
      'Deficits in adaptive functioning that result in failure to meet developmental and sociocultural standards for personal independence and social responsibility',
    value: 1,
  },

  // Criteria C
  {
    label:
      'Onset of intellectual and adaptive deficits during the developmental period',
    value: 2,
  },

  // Global Developmental Delay
  {
    label:
      'This diagnosis is reserved for individuals under the age of 5 years when the clinical severity level cannot be reliably assessed during early childhood. This category is diagnosed when an individual fails to meet expected developmental milestones in several areas of intellectual functioning, and applies to individuals who are unable to undergo systematic assessments of intellectual functioning, including children who are too young to participate in standardized testing. This category requires reassessment after a period of time',
    value: 3,
  },

  // Unspecified Intellectual Developmental Disorder
  {
    label:
      'This category is reserved for individuals over the age of 5 years when assessment of the degree of intellectual developmental disorder (intellectual disability) by means of locally available procedures is rendered difficult or impossible because of associated sensory or physical impairments, as in blindness or prelingual deafness; locomotor disability; or presence of severe problem behaviors or co-occurring mental disorder. This category should only be used in exceptional circumstances and requires reassessment after a period of time',
    value: 4,
  },

  // Language Disorder
  // Criteria A
  {label: 'Reduced vocabulary', value: 5},
  {label: 'Limited sentence structure', value: 6},
  {label: 'Impairment in discourse', value: 7},

  // Criteria B
  {
    label:
      'Language abilities are substantially and quantifiably below those expected for age',
    value: 8,
  },

  // Criteria C
  // Common 9

  // Criteria D
  {
    label:
      'The difficulties are not attributable to hearing or other sensory impairment, motor dysfunction, or another medical or neurological condition and are not better explained by intellectual developmental disorder',
    value: 10,
  },

  // Speech Sound Disorder
  // Criteria A
  {
    label:
      'Persistent difficulty with speech sound production that interferes with speech intelligibility or prevents verbal communication of messages',
    value: 11,
  },

  // Criteria B
  {
    label:
      'The disturbance causes limitations in effective communication that interfere with social participation, academic achievement, or occupational performance, individually or in any combination',
    value: 12,
  },

  // Criteria C
  // Common 9

  // Criteria D
  {
    label:
      'The difficulties are not attributable to congenital or acquired conditions',
    value: 13,
  },

  // Childhood-Onset Fluency Disorder (Stuttering)
  // Criteria A
  {label: 'Sound and syllable repetitions', value: 14},
  {label: 'Sound prolongations of consonants as well as vowels', value: 15},
  {label: 'Broken words', value: 16},
  {label: 'Audible or silent blocking', value: 17},
  {label: 'Circumlocutions', value: 18},
  {label: 'Words produced with an excess of physical tension', value: 19},
  {label: 'Monosyllabic whole-word repetitions', value: 20},

  // Criteria B
  {
    label:
      'The disturbance causes anxiety about speaking or limitations in effective communication, social participation, or academic or occupational performance, individually or in any combination',
    value: 21,
  },

  // Criteria C
  // Common 9

  // Criteria D
  {
    label:
      'The disturbance is not attributable to a speech-motor or sensory deficit, dysfluency associated with neurological insult or another medical condition and is not better explained by another mental disorder',
    value: 23,
  },

  // Social (Pragmatic) Communication Disorder
  // Criteria A (all of the following symptoms
  {label: 'Deficits in using communication for social purposes', value: 24},
  {
    label:
      'Impairment of the ability to change communication to match context or the needs of the listener',
    value: 25,
  },
  {
    label: 'Difficulties following rules for conversation and storytelling',
    value: 26,
  },
  {
    label: 'Difficulties understanding what is not explicitly stated ',
    value: 27,
  },

  // Criteria B
  {
    label:
      'Deficits result in functional limitations in effective communication, social participation, social relationships, academic achievement, or occupational performance, individually or in combination',
    value: 28,
  },

  // Criteria C
  {
    label: 'The onset of the symptoms is in the early developmental period',
    value: 29,
  },

  // Criteria D
  {
    label:
      'The symptoms are not attributable to another medical or neurological condition or to low abilities in the domains of word structure and grammar, and are not better explained by autism spectrum disorder, intellectual developmental disorde, global developmental delay, or another mental disorder',
    value: 30,
  },

  // Unspecified Communication Disorder
  {
    label:
      'The unspecified communication disorder category is used in situations in which the clinician chooses not to specify the reason that the criteria are not met for communication disorder or for a specific neurodevelopmental disorder, and includes presentations in which there is insufficient information to make a more specific diagnosis',
    value: 31,
  },

  // Autism Spectrum Disorder
  // Criteria A
  {
    label:
      '•Deficits in social-emotional reciprocity \n• Abnormal social approach \n• Failure of normal back-and-forth conversation \n• Reduced sharing of interests, emotions, or affect \n• Failure to initiate or respond to social interactions.',
    value: 32,
  },
  {
    label:
      '•Deficits in nonverbal communicative behaviors used for social interaction \n• Poorly integrated verbal and nonverbal communication \n• Abnormalities in eye contact and body language \n• Deficits in understanding and use of gestures; to a total lack of facial expressions and nonverbal communication',
    value: 33,
  },
  {
    label:
      '•Deficits in developing, maintaining, and understanding relationships \n• Difficulties adjusting behavior to suit various social contexts \n• Difficulties in sharing imaginative play or in making friends; to absence of interest in peers.',
    value: 34,
  },

  // Criteria B
  {
    label:
      '•Stereotyped or repetitive motor movements, use of objects, or speech \n• Motor stereotypes \n• Lining up toys \n• Flipping objects \n• Echolalia \n• Idiosyncratic phrases',
    value: 35,
  },
  {
    label:
      '•Insistence on sameness, inflexible adherence to routines, or ritualized patterns of verbal or nonverbal behavior \n• Extreme distress at small changes \n• Difficulty with transition \n• Rigid thinking pattern \n• Greeting rituals \n• Need to take same route or eat same food every day',
    value: 36,
  },
  {
    label:
      '•Highly restricted, fixated interests that are abnormal in intensity or focus \n• Strong attachment \n• Preoccupation with unusual objects \n• Excessively circumscribed or perseverative interests',
    value: 37,
  },
  {
    label:
      '•Hyper- or hyporeactivity to sensory input or unusual interest in sensory aspects of the environment \n• Parent indifference to pain/temperature \n• Adverse response to specific sounds \n• Excessive smelling or touching of objects \n• Visual fascination with lights or movement',
    value: 38,
  },

  // Criteria C
  {
    label: 'Symptoms must be present in the early developmental period',
    value: 39,
  },

  // Criteria D
  {
    label:
      'Symptoms cause clinically significant impairment in social, occupational, or other important areas of current functioning',
    value: 40,
  },

  // Criteria E
  {
    label:
      'These disturbances are not better explained by intellectual developmental disorder (intellectual disability) or global developmental delay. Intellectual developmental disorder and autism spectrum disorder frequently co-occur; to make comorbid diagnoses of autism spectrum disorder and intellectual developmental disorder, social communication should be below that expected for general developmental level',
    value: 41,
  },

  // Attention-Deficit/Hyperactivity Disorder
  // Criteria A (6 or more symptoms)
  // Criteria 1A
  {
    label:
      'Often fails to give close attention to details or makes careless mistakes in schoolwork, at work, or during other activities',
    value: 42,
  },
  {
    label: 'Has difficulty sustaining attention in tasks or play activities ',
    value: 43,
  },
  {label: 'Often does not seem to listen when spoken to directly', value: 44},
  {
    label:
      'Often does not follow through on instructions and fails to finish schoolwork, chores, or duties in the workplace \n• Starts tasks but quickly loses focus and is easily sidetracked',
    value: 45,
  },
  {
    label:
      '•Often has difficulty organizing tasks and activities \n• Difficulty managing sequntial tasks \n• Difficulty keeping materials and belongings \n• Messy disorganized work \n• Poor time management \n• Fail to meet deadlines',
    value: 46,
  },
  {
    label:
      'Often avoids, dislikes, or is reluctant to engage in tasks that require sustained mental effort',
    value: 47,
  },
  {label: 'Often loses things necessary for tasks or activities', value: 48},
  {label: 'Is often easily distracted by extraneous stimuli ', value: 49},
  {label: 'Is often forgetful in daily activities', value: 50},
  // Criteria 2A
  // at least 6 months
  {
    label:
      'Often fidgets with or taps hands or feet or squirms in seat (At Least 6 Months)',
    value: 51,
  },
  {
    label:
      'Often leaves seat in situations when remaining seated is expected (At Least 6 Months)',
    value: 52,
  },
  {
    label:
      'Often runs about or climbs in situations where it is inappropriate (At Least 6 Months)',
    value: 53,
  },
  {
    label:
      'Often unable to play or engage in leisure activities quietly (At Least 6 Months)',
    value: 54,
  },
  {
    label:
      '(At Least 6 Months) the go,” acting as if “driven by a motor (At Least 6 Months)',
    value: 55,
  },
  {label: 'Often talks excessively (At Least 6 Months)', value: 56},
  {
    label:
      'Often blurts out an answer before a question has been completed (At Least 6 Months)',
    value: 57,
  },
  {
    label: 'Often interrupts or intrudes on others (At Least 6 Months)',
    value: 58,
  },

  // Criteria B
  {
    label:
      'Several inattentive or hyperactive-impulsive symptoms were present prior to age 12 years',
    value: 59,
  },

  // Criteria C
  {
    label:
      'There is clear evidence that the symptoms interfere with, or reduce the quality of, social, academic, or occupational functioning',
    value: 60,
  },

  // Criteria D
  {
    label:
      'The symptoms do not occur exclusively during the course of schizophrenia or another psychotic disorder and are not better explained by another mental disorder',
    value: 61,
  },

  // Other Specified Attention Deficit/Hyperactivity Disorder
  {
    label:
      'Used in situations in which the clinician chooses to communicate the specific reason that the presentation does not meet the criteria for attention-deficit/hyperactivity disorder or any specific neurodevelopmental disorder',
    value: 62,
  },

  // "Unspecified Attention-Deficit/Hyperactivity Disorder
  {
    label:
      'Used in situations in which the clinician chooses not to specify the reason that the criteria are not met for attention-deficit/hyperactivity disorder or for a specific neurodevelopmental disorder, and includes presentations in which there is insufficient information to make a more specific diagnosis',
    value: 63,
  },

  // Specific Learning Disorder
  {
    label: 'Inaccurate or slow and effortful word reading (At Least 6 Months)',
    value: 64,
  },
  {
    label:
      'Difficulty understanding the meaning of what is read (At Least 6 Months)',
    value: 65,
  },
  {label: 'Difficulties with spelling (At Least 6 Months)', value: 66},
  {
    label: 'Difficulties with written expression (At Least 6 Months)',
    value: 67,
  },
  {
    label:
      'Difficulties mastering number sense, number facts, or calculation (At Least 6 Months)',
    value: 68,
  },
  {
    label: 'Difficulties with mathematical reasoning (At Least 6 Months)',
    value: 69,
  },

  // Developmental Coordination Disorder
  // Criteria A
  {
    label:
      'The acquisition and execution of coordinated motor skills is substantially below that expected given the individual’s chronological age and opportunity for skill learning and use',
    value: 70,
  },

  // Criteria B
  {
    label:
      'The motor skills deficit in Criterion A significantly and persistently interferes with activities of daily living appropriate to chronological age and impacts academic/school productivity, prevocational and vocational activities, leisure, and play',
    value: 71,
  },

  // Criteria C
  // Common 9

  // Criteria D
  {
    label:
      'The motor skills deficits are not better explained by intellectual developmental disorder (intellectual disability) or visual impairment and are not attributable to a neurological condition affecting movement',
    value: 72,
  },

  // Stereotypic Movement Disorder
  // Criteria A
  {
    label:
      'Repetitive, seemingly driven, and apparently purposeless motor behavior',
    value: 73,
  },

  // Criteria B
  {
    label:
      'The repetitive motor behavior interferes with social, academic, or other activities and may result in self-injury',
    value: 74,
  },

  // Criteria C
  {label: 'Onset is in the early developmental period', value: 75},

  // Criteria D
  {
    label:
      'Repetitive motor behavior is not attributable to the physiological effects of a substance or neurological condition and is not better explained by another neurodevelopmental or mental disorder',
    value: 76,
  },

  // Tourette’s Disorder
  // Criteria A
  {
    label:
      'Both multiple motor and one or more vocal tics have been present at some time during the illness, although not necessarily concurrently',
    value: 77,
  },

  // Criteria B
  // Common 78

  // Criteria C
  // Common 79

  // Criteria D
  // Common 80

  // Persistent (Chronic) Motor or Vocal Tic Disorder
  // specify if motor / vocal
  // Criteria A
  {
    label:
      'Single or multiple motor or vocal tics have been present during the illness, but not both motor and vocal',
    value: 81,
  },

  // Criteria B
  // Common 78

  // Criteria C
  // Common 79

  // Criteria D
  // Common 80

  // Criteria E
  {label: 'Criteria have never been met for Tourette’s disorder', value: 82},

  // Provisional Tic Disorder
  // Criteria A
  {label: 'Single or multiple motor and/or vocal tics', value: 83},

  // Criteria B
  {
    label:
      'The tics have been present for less than 1 year since first tic onset',
    value: 84,
  },

  // Criteria C
  // Common 79

  // Criteria D
  // Common 80

  // Criteria E
  {
    label:
      'Criteria have never been met for Tourette’s disorder or persistent (chronic) motor or vocal tic disorder',
    value: 85,
  },

  // Other Specified Tic Disorder
  {
    label:
      'The other specified tic disorder category is used in situations in which the clinician chooses to communicate the specific reason that the presentation does not meet the criteria for a tic disorder or any specific neurodevelopmental disorder. This is done by recording “other specified tic disorder” followed by the specific reason',
    value: 86,
  },
];

const mainDisorderA = numbers => {
  return numbers.includes(0) && numbers.includes(1);
};

const optionalDisorderA = numbers => {
  return numbers.includes(2);
};

const mainDisorderB = numbers => {
  return numbers.includes(3);
};

const mainDisorderC = numbers => {
  return numbers.includes(4);
};

const mainDisorderD = numbers => {
  return numbers.includes(5) && numbers.includes(6) && numbers.includes(7);
};

const optionalDisorderD = numbers => {
  return numbers.includes(8) || numbers.includes(9) || numbers.includes(10);
};

const mainDisorderE = numbers => {
  return (
    numbers.includes(11) &&
    numbers.includes(12) &&
    numbers.includes(9) &&
    numbers.includes(13)
  );
};

const mainDisorderF = numbers => {
  const criteriaA = [14, 15, 16, 17, 18, 19, 20];
  const matchingCriteriaA = criteriaA.filter(value => numbers.includes(value));
  return matchingCriteriaA.length >= 1;
};

const optionalDisorderF = numbers => {
  return numbers.includes(21) || numbers.includes(9) || numbers.includes(23);
};

const mainDisorderG = numbers => {
  const criteriaA = [24, 25, 26, 27];
  const matchingCriteriaA = criteriaA.filter(value => numbers.includes(value));
  return matchingCriteriaA.length >= 4;
};

const optionalDisorderG = numbers => {
  return numbers.includes(28) || numbers.includes(29) || numbers.includes(30);
};

const mainDisorderH = numbers => {
  return numbers.includes(31);
};

const mainDisorderI = numbers => {
  const criteriaB = [35, 36, 37, 38];
  const matchingCriteriaB = criteriaB.filter(value => numbers.includes(value));
  return (
    numbers.includes(32) &&
    numbers.includes(33) &&
    numbers.includes(34) &&
    matchingCriteriaB.length >= 2
  );
};

const optionalDisorderI = numbers => {
  return numbers.includes(39) || numbers.includes(40) || numbers.includes(41);
};

const mainDisorderJ = numbers => {
  const criteriaA1 = [42, 43, 44, 45, 46, 47, 48, 49, 50];
  const matchingCriteriaA1 = criteriaA1.filter(value =>
    numbers.includes(value),
  );

  const criteriaA2 = [51, 52, 53, 54, 55, 56, 57, 58];
  const matchingCriteriaA2 = criteriaA2.filter(value =>
    numbers.includes(value),
  );

  return matchingCriteriaA1.length >= 6 || matchingCriteriaA2.length >= 6;
};

const optionalDisorderJ = numbers => {
  return numbers.includes(59) || numbers.includes(60) || numbers.includes(61);
};

const mainDisorderK = numbers => {
  return numbers.includes(62);
};

const mainDisorderL = numbers => {
  return numbers.includes(63);
};

const mainDisorderM = numbers => {
  return (
    numbers.includes(64) &&
    numbers.includes(65) &&
    numbers.includes(66) &&
    numbers.includes(67) &&
    numbers.includes(68) &&
    numbers.includes(69)
  );
};

const mainDisorderN = numbers => {
  return numbers.includes(70);
};

const optionalDisorderN = numbers => {
  return numbers.includes(71) || numbers.includes(9) || numbers.includes(72);
};

const mainDisorderO = numbers => {
  return numbers.includes(73);
};

const optionalDisorderO = numbers => {
  return numbers.includes(74) || numbers.includes(75) || numbers.includes(76);
};

const mainDisorderP = numbers => {
  return (
    numbers.includes(77) &&
    numbers.includes(78) &&
    numbers.includes(79) &&
    numbers.includes(80)
  );
};

const mainDisorderQ = numbers => {
  return numbers.includes(81) && numbers.includes(82);
};

const mainDisorderR = numbers => {
  return numbers.includes(83) && numbers.includes(85);
};

export const neuroDiagnosis = numbers => {
  if (mainDisorderA(numbers) || optionalDisorderA(numbers)) {
    return 'Intellectual Developmental Disorder';
  } else if (mainDisorderB(numbers)) {
    return 'Global Developmental Delay';
  } else if (mainDisorderC(numbers)) {
    return 'Unspecified Intellectual Developmental Disorder';
  } else if (mainDisorderD(numbers) || optionalDisorderD(numbers)) {
    return 'Language Disorder';
  } else if (mainDisorderE(numbers)) {
    return 'Speech Sound Disorder';
  } else if (mainDisorderF(numbers) || optionalDisorderF(numbers)) {
    return 'Childhood-Onset Fluency Disorder (Stuttering)';
  } else if (mainDisorderG(numbers) || optionalDisorderG(numbers)) {
    return 'Social (Pragmatic) Communication Disorder';
  } else if (mainDisorderH(numbers)) {
    return 'Unspecified Communication Disorder';
  } else if (mainDisorderI(numbers) || optionalDisorderI(numbers)) {
    return 'Autism Spectrum Disorder';
  } else if (mainDisorderJ(numbers) || optionalDisorderJ(numbers)) {
    return 'Attention-Deficit/Hyperactivity Disorder';
  } else if (mainDisorderK(numbers)) {
    return 'Other Specified Attention Deficit/Hyperactivity Disorder';
  } else if (mainDisorderL(numbers)) {
    return 'Unspecified Attention-Deficit/Hyperactivity Disorder';
  } else if (mainDisorderM(numbers)) {
    return 'Specific Learning Disorder';
  } else if (mainDisorderN(numbers) || optionalDisorderN(numbers)) {
    return 'Developmental Coordination Disorder';
  } else if (mainDisorderO(numbers) || optionalDisorderO(numbers)) {
    return 'Stereotypic Movement Disorder';
  } else if (mainDisorderP(numbers)) {
    return 'Tourette’s Disorder';
  } else if (mainDisorderQ(numbers)) {
    return 'Persistent (Chronic) Motor or Vocal Tic Disorder';
  } else if (mainDisorderR(numbers)) {
    return 'Provisional Tic Disorder';
  } else {
    return 'Unspecified Neurodevelopmental Disorder';
  }
};

export const autismSpecification = [
  {
    label: 'Requiring very substantial support',
    value: 50,
  },
  {
    label: 'Requiring substantial support',
    value: 51,
  },
  {
    label: 'Requiring support',
    value: 52,
  },
  {
    label: 'With or without accompanying intellectual impairment',
    value: 53,
  },
  {
    label: 'With or without accompanying language impairment',
    value: 54,
  },
  {
    label:
      'Associated with a known genetic or other medical condition or environmental factor',
    value: 55,
  },
  {
    label:
      'Associated with a neurodevelopmental, mental, or behavioral problem',
    value: 56,
  },
  {
    label: 'With catatonia',
    value: 23,
  },
];

export const adhdDuration = [
  {
    label:
      'If both Criterion A1 (inattention) and Criterion A2 (Hyperactivity-impulsivity) are met for the past 6 months',
    value: 24,
  },
  {
    label:
      'If Criterion A1 (inattention) is met but Criterion A2 (Hyperactivityimpulsivity) is not met for the past 6 months',
    value: 25,
  },
  {
    label:
      'If Criterion A2 (hyperactivity-impulsivity) is met and Criterion A1 (Inattention) is not met for the past 6 months',
    value: 26,
  },
  {
    label:
      '"When full criteria were previously met, fewer than the full criteria have been met for the past 6 months, and the symptoms still result in impairment in social, academic, or occupational functioning',
    value: 27,
  },
];

export const adhdSeverity = [
  {
    label:
      'Few, if any, symptoms in excess of those required to make the diagnosis are present, and symptoms result in no more than minor impairments in social or occupational functioning',
    value: 4,
  },
  {
    label:
      'Symptoms or functional impairment between “mild” and “severe” are present',
    value: 5,
  },
  {
    label:
      'Many symptoms in excess of those required to make the diagnosis, or several symptoms that are particularly severe, are present, or the symptoms result in marked impairment in social or occupational functioning',
    value: 6,
  },
];

export const specificLearningSeverity = [
  {
    label:
      'Some difficulties learning skills in one or two academic domains, but of mild enough severity that the individual may be able to compensate or function well when provided with appropriate accommodations or support services, especially during the school years',
    value: 4,
  },
  {
    label:
      'Marked difficulties learning skills in one or more academic domains, so that the individual is unlikely to become proficient without some intervals of intensive and specialized teaching during the school years. Some accommodations or supportive services at least part of the day at school, in the workplace, or at home may be needed to complete activities accurately and efficiently',
    value: 5,
  },
  {
    label:
      'Severe difficulties learning skills, affecting several academic domains, so that the individual is unlikely to learn those skills without ongoing intensive individualized and specialized teaching for most of the school years. Even with an array of appropriate accommodations or services at home, at school, or in the workplace, the individual may not be able to complete all activities efficiently',
    value: 6,
  },
];

export const specificLearningDuration = [
  {
    label:
      '•Word reading accuracy \n•Reading rate or fluency \n•Reading comprehension',
    value: 28,
  },
  {
    label:
      '•Spelling accuracy \n•Grammar and punctuation accuracy \n•Clarity or organization of written expression',
    value: 29,
  },
  {
    label:
      '•Number sense \n•Memorization of arithmetic facts \n•Accurate or fluent calculation \n•Accurate math reasoning',
    value: 30,
  },
];

export const movementSeverity = [
  {
    label: 'Symptoms are easily suppressed by sensory stimulus or distraction',
    value: 4,
  },
  {
    label:
      'Symptoms require explicit protective measures and behavioral modification',
    value: 5,
  },
  {
    label:
      'Continuous monitoring and protective measures are required to prevent serious injury',
    value: 6,
  },
];

export const movementSpecification = [
  {
    label: 'With self-injurious behavior',
    value: 57,
  },
  {
    label: 'Without self-injurious behavior',
    value: 58,
  },
  {
    label:
      'Associated with a known genetic or other medical condition, neurodevelopmental disorder, or environmental factor',
    value: 59,
  },
];

export const ticSpecification = [
  {
    label: 'With motor tics only',
    value: 60,
  },
  {
    label: 'With vocal tics only',
    value: 61,
  },
];
