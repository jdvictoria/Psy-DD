export const paraphilicSymptoms = [
  // Voyeuristic Disorder
  // Criteria A
  {
    label:
      'Recurrent and intense sexual arousal from observing an unsuspecting person who is naked, in the process of disrobing, or engaging in sexual activity (6 Months)',
    value: 1,
  },

  // Criteria B
  {
    label:
      'Has acted on these sexual urges with a nonconsenting person, or the sexual urges or fantasies cause clinically significant distress or impairment in social, occupational, or other important areas of functioning',
    value: 2,
  },

  // Criteria C
  {
    label:
      'Experiencing arousal and/or acting on the urges is at least 18 years of age',
    value: 3,
  },

  // Exhibitionistic Disorder
  // Criteria A
  {
    label:
      'Recurrent and intense sexual arousal from the exposure of one’s genitals to an unsuspecting person, as manifested by fantasies, urges, or behaviors (6 Months)',
    value: 4,
  },

  // Criteria B
  {
    label:
      'Acted on these sexual urges with a nonconsenting person, or the sexual urges or fantasies cause clinically significant distress or impairment in social, occupational, or other important areas of functioning',
    value: 5,
  },

  // Frotteuristic Disorder
  // Criteria A
  {
    label:
      'Recurrent and intense sexual arousal from touching or rubbing against a nonconsenting person (6 Months)',
    value: 6,
  },

  // Criteria B
  {
    label:
      'Acted on these sexual urges with a nonconsenting person, or the sexual urges or fantasies cause clinically significant distress or impairment in social, occupational, or other important areas of functioning',
    value: 7,
  },

  // Sexual Masochism Disorder
  // Criteria A
  {
    label:
      'Recurrent and intense sexual arousal from the act of being humiliated, beaten, bound, or otherwise made to suffer, as manifested by fantasies, urges, or behaviors (6 Months / Severe)',
    value: 8,
  },

  // Criteria B
  {
    label:
      'The fantasies, sexual urges, or behaviors cause clinically significant distress or impairment in social, occupational, or other important areas of functioning',
    value: 9,
  },

  // Sexual Sadism Disorder
  // Criteria A
  {
    label:
      'Recurrent and intense sexual arousal from the physical or psychological suffering of another person, as manifested by fantasies, urges, or behaviors (6 Months)',
    value: 10,
  },

  // Criteria B
  {
    label:
      'The individual has acted on these sexual urges with a nonconsenting person, or the sexual urges or fantasies cause clinically significant distress or impairment in social, occupational, or other important areas of functioning',
    value: 11,
  },

  // Pedophilic Disorder
  // Criteria A
  {
    label:
      'Recurrent, intense sexually arousing fantasies, sexual urges, or behaviors involving sexual activity with a prepubescent child or children (6 Months)',
    value: 12,
  },

  // Criteria B
  {
    label:
      'Individual has acted on these sexual urges, or the sexual urges or fantasies cause marked distress or interpersonal difficulty',
    value: 13,
  },

  // Criteria C
  {
    label:
      'The individual is at least age 16 years and at least 5 years older than the child or children in Criterion A',
    value: 14,
  },

  // Fetishistic Disorder
  // Criteria A
  {
    label:
      'Recurrent and intense sexual arousal from either the use of nonliving objects or a highly specific focus on nongenital body part(s), as manifested by fantasies, urges, or behaviors (6 Months)',
    value: 15,
  },

  // Criteria B
  {
    label:
      'The fantasies, sexual urges, or behaviors cause clinically significant distress or impairment in social, occupational, or other important areas of functioning',
    value: 16,
  },

  // Criteria C
  {
    label:
      'The fetish objects are not limited to articles of clothing used in cross-dressing',
    value: 17,
  },

  // Transvestic Disorder
  // Criteria A
  {
    label:
      'Recurrent and intense sexual arousal from cross-dressing, as manifested by fantasies, urges, or behaviors (6 Months)',
    value: 18,
  },

  // Criteria B
  {
    label:
      'The fantasies, sexual urges, or behaviors cause clinically significant distress or impairment in social, occupational, or other important areas of functioning',
    value: 19,
  },
];

const mainDisorderA = numbers => {
  return numbers.includes(1);
};

const optionalDisorderA = numbers => {
  return numbers.includes(2) || numbers.includes(3);
};

const mainDisorderB = numbers => {
  return numbers.includes(4);
};

const optionalDisorderB = numbers => {
  return numbers.includes(5);
};

const mainDisorderC = numbers => {
  return numbers.includes(6);
};

const optionalDisorderC = numbers => {
  return numbers.includes(7);
};

const mainDisorderD = numbers => {
  return numbers.includes(8);
};

const optionalDisorderD = numbers => {
  return numbers.includes(9);
};

const mainDisorderE = numbers => {
  return numbers.includes(10);
};

const optionalDisorderE = numbers => {
  return numbers.includes(11);
};

const mainDisorderF = numbers => {
  return numbers.includes(12);
};

const optionalDisorderF = numbers => {
  return numbers.includes(13) || numbers.includes(14);
};

const mainDisorderG = numbers => {
  return numbers.includes(15);
};

const optionalDisorderG = numbers => {
  return numbers.includes(16) || numbers.includes(17);
};

const mainDisorderH = numbers => {
  return numbers.includes(18) && numbers.includes(19);
};

export const paraphilicDiagnosis = numbers => {
  if (mainDisorderA(numbers) || optionalDisorderA(numbers)) {
    return 'Voyeuristic Disorder';
  } else if (mainDisorderB(numbers) || optionalDisorderB(numbers)) {
    return 'Exhibitionistic Disorder';
  } else if (mainDisorderC(numbers) || optionalDisorderC(numbers)) {
    return 'Frotteuristic Disorder';
  } else if (mainDisorderD(numbers) || optionalDisorderD(numbers)) {
    return 'Sexual Masochism Disorder';
  } else if (mainDisorderE(numbers) || optionalDisorderE(numbers)) {
    return 'Sexual Sadism Disorder';
  } else if (mainDisorderF(numbers) || optionalDisorderF(numbers)) {
    return 'Pedophilic Disorder';
  } else if (mainDisorderG(numbers) || optionalDisorderG(numbers)) {
    return 'Fetishistic Disorder';
  } else if (mainDisorderH(numbers)) {
    return 'Transvestic Disorder';
  } else if (numbers.length > 1) {
    return 'Other Specified / Unspecified Paraphilic Disorder';
  } else {
    return '';
  }
};

export const disorderSeverityL = [
  {
    label:
      'Primarily applicable to individuals living in institutional or other settings where opportunities to engage in voyeuristic behavior are restricted',
    value: 69,
  },
  {
    label:
      'The individual has not acted on the urges with a nonconsenting person, and there has been no distress or impairment in social, occupational, or other areas of functioning, for at least 5 years while in an uncontrolled environment',
    value: 70,
  },
];

export const disorderSeverityM = [
  {
    label:
      'Living in institutional or other settings where opportunities to engage in voyeuristic behavior are restricted',
    value: 71,
  },
  {
    label:
      'The individual has not acted on the urges with a nonconsenting person, and there has been no distress or impairment in social, occupational, or other areas of functioning, for at least 5 years while in an uncontrolled environment',
    value: 72,
  },
];

export const disorderSeverityO = [
  {
    label:
      'Primarily applicable to individuals living in institutional or other settings where opportunities to engage in voyeuristic behavior are restricted',
    value: 73,
  },
  {
    label:
      'The individual has not acted on the urges with a nonconsenting person, and there has been no distress or impairment in social, occupational, or other areas of functioning, for at least 5 years while in an uncontrolled environment',
    value: 74,
  },
  {
    label:
      'If the individual engages in the practice of achieving sexual arousal related to restriction of breathing',
    value: 75,
  },
];

export const disorderSeverityP = [
  {
    label: 'Exclusive type (Attracted only to children)',
    value: 76,
  },
  {
    label: 'Nonexclusive type',
    value: 77,
  },
];

export const disorderSpecificationR = [
  {
    label: 'Sexually aroused by exposing genitals to prepubertal children',
    value: 77,
  },
  {
    label:
      'Sexually aroused by exposing genitals to physically mature individuals',
    value: 78,
  },
  {
    label:
      'Sexually aroused by exposing genitals to prepubertal children and to physically mature individuals',
    value: 79,
  },
];

export const disorderSpecificationS = [
  {
    label: 'Sexually attracted to males',
    value: 80,
  },
  {
    label: 'Sexually attracted to females',
    value: 81,
  },
  {
    label: 'Sexually attracted to both',
    value: 82,
  },
  {
    label: 'Limited to incest',
    value: 83,
  },
];

export const disorderSpecificationT = [
  {
    label: 'Body Parts',
    value: 84,
  },
  {
    label: 'Non Living Objects',
    value: 85,
  },
  {
    label: 'Other',
    value: 86,
  },
];

export const disorderSpecificationU = [
  {
    label: 'If sexually aroused by fabrics, materials, or garments',
    value: 87,
  },
  {
    label: 'If sexually aroused by thoughts or images of self as a woman',
    value: 88,
  },
];
