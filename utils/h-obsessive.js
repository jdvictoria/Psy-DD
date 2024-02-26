export const obsessiveSymptoms = [
  // Obsessive-Compulsive Disorder
  // Criteria A
  {
    label:
      'Recurrent and persistent thoughts, urges, or images that are experienced, at some time during the disturbance, as intrusive and unwanted, and that in most individuals cause marked anxiety or distress',
    value: 1,
  },
  {
    label:
      '•Attempts to ignore or suppress such thoughts, urges, or images, or to neutralize them with some other thought or action \n•Performing compulsion',
    value: 2,
  },
  {label: 'Repetitive behaviors', value: 3},
  {
    label:
      'The behaviors aimed at preventing or reducing anxiety or distress, or preventing some dreaded event or situation',
    value: 4,
  },

  // Criteria B
  {
    label:
      'The obsessions or compulsions are time-consuming and causes clinically significant distress or impairment in social, occupational and other functioning.',
    value: 5,
  },

  // Criteria C
  {
    label:
      'The obsessive-compulsive symptoms are not attributable to the physiological effects of a substance',
    value: 6,
  },

  // Criteria D
  {
    label:
      'The disturbance is not better explained by the symptoms of another mental disorder',
    value: 7,
  },

  // Body Dysmorphic Disorder
  // Criteria A
  {
    label:
      'Preoccupation with one or more perceived defects or flaws in physical appearance that are not observable or appear slight to others',
    value: 8,
  },

  // Criteria B
  {
    label:
      'During the course of the disorder, the individual has performed repetitive behaviors',
    value: 9,
  },

  // Criteria C
  {
    label:
      'The disturbance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning',
    value: 10,
  },

  // Criteria D
  {
    label:
      'The appearance preoccupation is not better explained by concerns with body fat or weight in an individual whose symptoms meet diagnostic criteria for an eating disorder',
    value: 11,
  },

  // Hoarding Disorder
  // Criteria A
  {
    label:
      'Difficulty discarding or parting with possessions, regardless of their actual value',
    value: 12,
  },

  // Criteria B
  {
    label:
      'This difficulty is due to a perceived need to save the items and to distress associated with discarding them',
    value: 13,
  },

  // Criteria C
  {
    label:
      'Difficulty discarding possessions results in the accumulation of possessions that congest and clutter active living areas and substantially compromises their intended use',
    value: 14,
  },

  // Criteria D
  // 10

  // Criteria E
  {
    label: 'The hoarding is not attributable to another medical condition',
    value: 16,
  },

  // Criteria F
  {
    label:
      'The hoarding is not better explained by the symptoms of another mental disorder',
    value: 17,
  },

  // Trichotillomania (Hair-Pulling Disorder)
  // Criteria A
  {
    label: 'Recurrent pulling out of one’s hair, resulting in hair loss',
    value: 18,
  },

  // Criteria B
  // 10

  // Criteria C
  {
    label:
      'The hair pulling or hair loss is not attributable to another medical condition',
    value: 20,
  },

  // Criteria D
  {
    label:
      'The hair pulling is not better explained by the symptoms of another mental disorder',
    value: 21,
  },

  // Excoriation (Skin-Picking) Disorder
  // Criteria A
  {label: 'Recurrent skin picking resulting in skin lesions', value: 22},

  // Criteria B
  {label: 'Repeated attempts to decrease or stop skin picking', value: 23},

  // Criteria C
  // 10

  // Criteria D
  {
    label:
      'The skin picking is not attributable to the physiological effects of a substance',
    value: 25,
  },

  // Criteria E
  {
    label:
      'The skin picking is not better explained by symptoms of another mental disorder',
    value: 26,
  },

  // Substance/Medication-Induce Obsessive-Compulsive and Related Disorder
  // Criteria A
  {
    label:
      'Obsessions, compulsions, skin picking, hair pulling, other body-focused repetitive behaviors, or other symptoms characteristic of the obsessive-compulsive and related disorders predominate in the clinical picture',
    value: 27,
  },

  // Criteria B
  {
    label:
      'The symptoms in Criterion A developed during or soon after substance intoxication or withdrawal or after exposure to or withdrawal from a medication',
    value: 28,
  },
  {
    label:
      'The involved substance/medication is capable of producing the symptoms in Criterion A',
    value: 29,
  },

  // Criteria C
  {
    label:
      'The disturbance is not better explained by an obsessivecompulsive and related disorder that is not substance/medication-induced',
    value: 30,
  },

  // Criteria D
  {
    label:
      'The disturbance does not occur exclusively during the course of a delirium',
    value: 31,
  },

  // Criteria E
  // 10

  // Obsessive-Compulsive and Related Disorder Due to Another Medical Condition
  // Criteria A
  // 27

  // Criteria B
  {
    label:
      'There is evidence from the history, physical examination, or laboratory findings that the disturbance is the direct pathophysiological consequence of another medical condition',
    value: 34,
  },

  // Criteria C
  {
    label:
      'The disturbance is not better explained by an obsessive compulsive and related disorder that is not substance/medication-induced',
    value: 35,
  },

  // Criteria D
  // 31

  // Criteria E
  // 10

  // Body dysmorphic–like disorder with actual flaws
  {
    label:
      'The disturbance is not better explained by an obsessive compulsive and related disorder that is not substance/medication-induced',
    value: 36,
  },

  // Body dysmorphic–like disorder without repetitive behaviors
  {
    label:
      'Presentations that meet body dysmorphic disorder except that the individual has never performed repetitive behaviors or mental acts in response to the appearance concerns',
    value: 37,
  },

  // Other body-focused repetitive behavior disorder
  {
    label:
      'Presentations involving recurrent body-focused repetitive behaviors other than hair pulling and skin picking that are accompanied by repeated attempts to decrease or stop the behaviors and that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning',
    value: 38,
  },

  // Obsessional jealousy
  {
    label:
      'Characterized by nondelusional preoccupation with a partner’s perceived infidelity. The preoccupations may lead to repetitive behaviors or mental acts in response to the infidelity concerns; they cause clinically significant distress or impairment in social, occupational, or other important areas of functioning; and they are not better explained by another mental disorder such as delusional disorder, jealous type, or paranoid personality disorder',
    value: 39,
  },

  // Olfactory reference disorder
  {
    label:
      'Persistent preoccupation with the belief that he or she emits a foul or offensive body odor that is unnoticeable or only slightly noticeable to others; in response to this preoccupation, these individuals often engage in repetitive and excessive behaviors such as repeatedly checking for body odor, excessive showering, or seeking reassurance, as well as excessive attempts to camouflage the perceived odor. These symptoms cause clinically significant distress or impairment in social, occupational, or other important areas of functioning',
    value: 40,
  },

  // Shubo-kyofu
  {
    label:
      'Similar to body dysmorphic disorder and is characterized by excessive fear of having a bodily deformity',
    value: 41,
  },

  // Koro
  {
    label:
      'Related to dhat syndrome, an episode of sudden and intense anxiety that the penis in males  will recede into the body, possibly leading to death',
    value: 42,
  },
];

const mainDisorderA = numbers => {
  return (
    numbers.includes(1) &&
    numbers.includes(2) &&
    numbers.includes(3) &&
    numbers.includes(4)
  );
};

const optionalDisorderA = numbers => {
  return numbers.includes(5) || numbers.includes(6) || numbers.includes(7);
};

const mainDisorderB = numbers => {
  return numbers.includes(8);
};

const optionalDisorderB = numbers => {
  return numbers.includes(9) || numbers.includes(10) || numbers.includes(11);
};

const mainDisorderC = numbers => {
  return numbers.includes(12);
};

const optionalDisorderC = numbers => {
  return (
    numbers.includes(13) ||
    numbers.includes(14) ||
    numbers.includes(10) ||
    numbers.includes(16) ||
    numbers.includes(17)
  );
};

const mainDisorderD = numbers => {
  return numbers.includes(18);
};

const optionalDisorderD = numbers => {
  return numbers.includes(10) || numbers.includes(20) || numbers.includes(21);
};

const mainDisorderE = numbers => {
  return numbers.includes(22);
};

const optionalDisorderE = numbers => {
  return (
    numbers.includes(23) ||
    numbers.includes(10) ||
    numbers.includes(25) ||
    numbers.includes(26)
  );
};

const mainDisorderF = numbers => {
  return numbers.includes(27) && numbers.includes(28) && numbers.includes(29);
};

const optionalDisorderF = numbers => {
  return numbers.includes(30) || numbers.includes(31) || numbers.includes(10);
};

const mainDisorderG = numbers => {
  return numbers.includes(27) && numbers.includes(34);
};

const optionalDisorderG = numbers => {
  return numbers.includes(35) || numbers.includes(31) || numbers.includes(10);
};

export const obsessiveDiagnosis = numbers => {
  if (
    mainDisorderA(numbers) ||
    (mainDisorderA(numbers) && optionalDisorderA(numbers))
  ) {
    return 'Obsessive-Compulsive Disorder';
  } else if (
    mainDisorderB(numbers) ||
    (mainDisorderB(numbers) && optionalDisorderB(numbers))
  ) {
    return 'Body Dysmorphic Disorder';
  } else if (
    mainDisorderC(numbers) ||
    (mainDisorderC(numbers) && optionalDisorderC(numbers))
  ) {
    return 'Hoarding Disorder';
  } else if (
    mainDisorderD(numbers) ||
    (mainDisorderD(numbers) && optionalDisorderD(numbers))
  ) {
    return 'Trichotillomania (Hair-Pulling Disorder)';
  } else if (
    mainDisorderE(numbers) ||
    (mainDisorderE(numbers) && optionalDisorderE(numbers))
  ) {
    return 'Excoriation (Skin-Picking) Disorder';
  } else if (
    mainDisorderF(numbers) ||
    (mainDisorderF(numbers) && optionalDisorderF(numbers))
  ) {
    return 'Substance/Medication-Induce Obsessive-Compulsive and Related Disorder';
  } else if (
    mainDisorderG(numbers) ||
    (mainDisorderG(numbers) && optionalDisorderG(numbers))
  ) {
    return 'Obsessive-Compulsive and Related Disorder Due to Another Medical Condition';
  } else if (numbers.includes(36)) {
    return 'Body dysmorphic–like disorder with actual flaws';
  } else if (numbers.includes(37)) {
    return 'Body dysmorphic–like disorder without repetitive behaviors';
  } else if (numbers.includes(38)) {
    return 'Other body-focused repetitive behavior disorder';
  } else if (numbers.includes(39)) {
    return 'Obsessional jealousy';
  } else if (numbers.includes(40)) {
    return 'Olfactory reference disorder';
  } else if (numbers.includes(41)) {
    return 'Shubo-kyofu';
  } else if (numbers.includes(42)) {
    return 'Koro';
  } else {
    return 'Unspecified Obsessive-Compulsive and Related Disorder';
  }
};

export const ocdSpecification = [
  {
    label:
      'The individual recognizes that obsessive-compulsive disorder beliefs are definitely or probably not true or that they may or may not be true',
    value: 39,
  },
  {
    label:
      'The individual thinks obsessive-compulsive disorder beliefs are probably true',
    value: 40,
  },
  {
    label:
      'The individual is completely convinced that obsessive-compulsive disorder beliefs are true',
    value: 41,
  },
  {
    label: 'The individual has a current or past history of a tic disorder',
    value: 42,
  },
];

export const dysmorphicSpecification = [
  {
    label:
      'The individual recognizes that obsessive-compulsive disorder beliefs are definitely or probably not true or that they may or may not be true',
    value: 43,
  },
  {
    label:
      'The individual recognizes that obsessive-compulsive disorder beliefs are definitely or probably not true or that they may or may not be true',
    value: 39,
  },
  {
    label:
      'The individual thinks obsessive-compulsive disorder beliefs are probably true',
    value: 40,
  },
  {
    label:
      'The individual is completely convinced that obsessive-compulsive disorder beliefs are true',
    value: 41,
  },
];

export const hoardingSpecification = [
  {
    label:
      'If difficulty discarding possessions is accompanied by excessive acquisition of items that are not needed or for which there is no available space',
    value: 44,
  },
  {
    label:
      'The individual recognizes that obsessive-compulsive disorder beliefs are definitely or probably not true or that they may or may not be true',
    value: 39,
  },
  {
    label:
      'The individual thinks obsessive-compulsive disorder beliefs are probably true',
    value: 40,
  },
  {
    label:
      'The individual is completely convinced that obsessive-compulsive disorder beliefs are true',
    value: 41,
  },
];

export const substanceObsessiveSpecification = [
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

export const ocdDueToAnotherSpecification = [
  {
    label:
      'If obsessive-compulsive disorder–like symptoms predominate in the clinical presentation',
    value: 45,
  },
  {
    label:
      'If preoccupation with perceived appearance defects or flaws predominates',
    value: 46,
  },
  {
    label: 'If hoarding predominates in the clinical presentation',
    value: 47,
  },
  {
    label: 'If hair pulling predominates in the clinical presentation',
    value: 48,
  },
  {
    label: 'If skin picking predominates in the clinical presentation',
    value: 49,
  },
];
