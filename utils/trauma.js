export const traumaSymptoms = [
  // Reactive Attachment Disorder
  // Criteria A (Both)
  {label: 'Rarely or minimally seeks comfort when distressed', value: 0},
  {label: 'Rarely or minimally responds to comfort when distressed', value: 1},

  // Criteria B (Atleast 1)
  {label: 'Minimal social / emotional response to others', value: 2},
  {label: 'Limited positive effect', value: 3},
  {label: '•Unexplained irritability \n•Sadness \n•Fearfulness', value: 4},

  // Criteria C (Atleast 1)
  {
    label:
      '•Social Neglect \n•Lack of stimulation / affection / basic emotional needs for comfort',
    value: 5,
  },
  {label: 'Repeated changes of caregiver', value: 6},
  {label: 'Unusual setting (Foster Cares)', value: 7},

  // Criteria D =  The care in Criterion C is presumed to be responsible for the disturbed behavior in Criterion A (
  {
    label:
      ' The care in Criterion C is presumed to be responsible for the disturbed behavior in Criterion A',
    value: 8,
  },

  // Criteria E
  {label: 'The Criteria is not met for Autism Spectrum Disorder', value: 9},

  // Criteria F
  {label: 'Disturbance is evident before age 5 years old', value: 10},

  // Criteria G
  {label: 'Has a developmental age of 9 months', value: 11},

  // Disinhibited Social Engagement Disorder
  // Criteria A (two of the following)
  {label: 'Unrestraint approach / interaction to unfamiliar adults', value: 12},
  {label: 'Familiar verbal / physical behavior', value: 13},
  {
    label:
      'Absent checking back with caregivers after venturing away, even in unfamiliar setting',
    value: 14,
  },
  {
    label: 'Willingness to go with unfamiliar adults with no hesitation ',
    value: 15,
  },

  // Criteria B
  {
    label:
      '•The behavior in Criterian A not limited to impulsivity \n•Include Socially Disinhibited Behavior ',
    value: 16,
  },

  // Criteria C (Atleast 1)
  {
    label:
      '•Social Neglect \n•Lack of stimulation / affection / basic emotional needs for comfort',
    value: 17,
  },
  // {label: 'Repeated changes of caregiver', value: 17},
  // {label: 'Unusual Setting (Foster Care)', value: 18},

  // Criteria D (Same as 1st disorder)

  // Posttraumatic Stress Disorder
  // Criteria A (one or more)
  {label: 'Direct experience of traumatic events', value: 18},
  {label: 'Witnessing in person the event ', value: 19},
  {
    label:
      '•The traumatic event occured to a family member / close friend \n•Actual or threathened death of family / friends \n•The event is violent / accidental',
    value: 20,
  },
  {label: 'Extreme exposure to details of traumatic events', value: 21},

  // Criteria B (one or more)
  {
    label:
      'Recurrent / Involuntary / Intrusive Distressing memories of the traumatic event',
    value: 22,
  },
  {
    label: 'Recurrent distressing dreams related to the traumatic event',
    value: 23,
  },
  {label: 'Flashbacks', value: 24},
  {label: 'Intense / Prolonged distress', value: 25},
  {
    label: 'Physiological reaction to cues that symbolize the traumatic event',
    value: 26,
  },

  // Criteria C (one or both symptoms)
  {
    label:
      'Avoidance to distressing memories / thoughts / feelings / closely associated with the traumatic event',
    value: 27,
  },
  {
    label:
      'Avoiding external reminders / people / places / conversations / activities / objects / situations',
    value: 28,
  },

  // Criteria D (?)
  {
    label:
      '•Inability to remember important aspect of the traumatic event \n•Disscoacitive amnesia',
    value: 29,
  },
  {label: 'Exegerated beliefs about oneself', value: 30},
  {label: 'Blames himself / herself', value: 31},
  {
    label:
      'Persistant negative emotional state / fear / horror / anger / guilt / shame',
    value: 32,
  },
  {
    label: 'Diministhed interest / participation in significant activities ',
    value: 33,
  },
  {label: 'Feeling of detachment / estrangement to others', value: 34},
  {
    label: 'Inability to experience happiness / satisfaction / loving feelings',
    value: 35,
  },

  // Critera E (2 or more)
  {
    label:
      '•Irritable Behavior \n•Angry Outburst \n•Physical agression to people / objects',
    value: 36,
  },
  {label: '•Recklesness \n•Self-Destructive Behavior', value: 37},
  {label: 'Hypervigilance', value: 38},
  {label: 'Exaggerated Startle Response', value: 39},
  {label: 'Concentration Problems', value: 40},
  {
    label:
      '•Sleep Disturbance \n•Difficulty falling / staying asleep \n•Restless sleep',
    value: 41,
  },

  // Criteria F (Disturbance for Criteria B, C, D, and E is more than 1 month)

  // Criteria G
  {label: 'Causes Clinically Significant Distress', value: 42},
  {label: 'Impairment in social and other functioning', value: 43},

  // Criteria H
  {
    label:
      'The disturbance is not attributable to a susbtance or medical condition',
    value: 44,
  },

  // Posttraumatic Stress Disorder in Children 6 Years and Younger
  // Criteria A: One or more Symptoms
  {label: 'Directly experiencing the traumatic event', value: 45},
  {
    label:
      '•Witnessing in person \n•Learning that the traumatic event happened to the parent or caregiver',
    value: 46,
  },

  // Criteria B: one or more symptom
  {
    label:
      'Recurrent / Involuntary / Intrusive Distressing / Play Reenactment of the traumatic Event',
    value: 47,
  },
  {label: 'Recurrent Distressing Dreams', value: 48},
  {label: 'Flashbacks', value: 49},
  {
    label:
      'Intense Psychological Distress to cues that symbolize the traumatic event',
    value: 50,
  },
  {
    label: 'Physiological Reactions when reminded of the traumatic event',
    value: 51,
  },

  // Criteria C: One or more symptoms
  {
    label:
      'Avoidance to activities / places that reminds the traumatic event \n•Avoidance to physical reminders of the traumatic event',
    value: 52,
  },
  {
    label:
      'Avoidance to people / conversations / interpersonal situations about the traumatic event',
    value: 53,
  },
  {label: '•Fear \n•Guilt \n•Sadness \n•Shame \n•Confusion', value: 55},
  {
    label: 'Diminishes Interest to activities \n•Constriction of play',
    value: 54,
  },
  {label: 'Socially Withdrawn Behavior', value: 55},
  {label: 'Socially Withdrawn Behavior', value: 56},

  // Criteria D: Two or more symptoms
  {
    label:
      '•Irritable Behavior \n•Angry Outburst \n•Physical agression to people / objects',
    value: 57,
  },
  {label: 'Hypervigilance', value: 58},
  {label: 'Exaggerated Startle Response', value: 59},
  {label: 'Concentration Problems', value: 60},
  {
    label:
      '•Sleep Disturbance \n•Difficulty falling / staying asleep \n•Restless sleep',
    value: 61,
  },

  // Criteria E
  {label: 'The duration of the disturbance is more than 1 month', value: 62},

  // Criteria F
  {
    label:
      'The disturbance causes clinically significant distress or impairment in relationships with parents, siblings, peers, or other caregivers or with school behavior',
    value: 63,
  },
  // Criteria G
  {
    label:
      'The disturbance is not attributable to a susbtance or medical condition',
    value: 64,
  },

  // Acute Stress Disorder
  // Criteria A: one or more symptoms
  {label: 'Directly experiencing the traumatic Event', value: 65},
  {label: 'Witnessing in person', value: 66},
  {
    label:
      'Learning that the event(s) occurred to a close family member or close friend. \n•Exterme expsoure to aversive details of the traumatic event',
    value: 67,
  },

  // Criteria B: 9 or more symptoms
  // Duration 3 days to 1 month
  {
    label:
      'Recurrent / Involuntary / Intru999sive Distressing memories of the traumatic event',
    value: 68,
  },
  {
    label: 'Recurrent distressing dreams related to the traumatic event',
    value: 69,
  },
  {label: 'Intense / Prolonged distress', value: 69},
  {
    label: 'Inability to experience happiness / satisfaction / loving feelings',
    value: 70,
  },
  {
    label:
      '•Dissociative \n•Seeing oneself from another perspective \n•Being in a Daze \n•Time slowing',
    value: 71,
  },
  {
    label:
      'Inability to remember important aspect of the traumatic event \n•Disscoacitive amnesia',
    value: 72,
  },
  {
    label:
      'Avoidance to distressing memories / thoughts / feelings / closely associated with the traumatic event',
    value: 73,
  },
  {
    label:
      'Avoiding external reminders / people / places / conversations / activities / objects / situations',
    value: 74,
  },
  {
    label:
      '•Sleep Disturbance \n•Difficulty falling / staying asleep \n•Restless sleep',
    value: 75,
  },
  {
    label:
      '•Irritable Behavior \n•Angry Outburst \n•Physical agression to people / objects',
    value: 76,
  },
  {label: 'Hypervigilance', value: 77},
  {label: 'Concentration Problems', value: 78},
  {label: 'Exaggerated Startle Response', value: 79},

  // Criteria C
  {
    label:
      'Duration of the disturbance (symptoms in Criterion B) is 3 days to 1 month after trauma exposure',
    value: 80,
  },
  // Criteria D
  {
    label:
      'The disturbance causes clinically significant distress or impairment in relationships with parents, siblings, peers, or other caregivers or with school behavior',
    value: 81,
  },
  // Criteria E
  {
    label:
      'The disturbance is not attributable to a susbtance or medical condition',
    value: 82,
  },

  // Adjustment Disorder
  // Occuring 3 months Onset
  // Criteria A
  {
    label:
      'The development of emotional or behavioral symptoms in response to an identifiable stressor',
    value: 83,
  },

  // Criteria B
  {
    label:
      'Marked Distress that is out of proportion to the intensity of stressor',
    value: 84,
  },
  {
    label:
      'Impairment in Social Functioning / Occupational Functioning / Other areas of Functioning',
    value: 85,
  },

  // Criteria C
  {
    label:
      'The stress related disturbance does not meet the criteria for another mental disorder or preexisting mental disorder',
    value: 86,
  },

  // Criteria D
  {
    label:
      'The symptoms do not represent normal bereavement and are not better explained by prolonged grief disorder',
    value: 87,
  },

  // Criteria E
  {
    label:
      'Once the stressor or its consequences have terminated, the symptoms do not persist for more than an additional 6 months',
    value: 88,
  },

  // Prolonged Grief Disorder
  // Criteria A
  {
    label:
      'The death, at least 12 months ago, of a person who was close to the bereaved individual (for children and adolescents, at least 6 months ago)',
    value: 89,
  },

  // Criteria B: Symptoms occured nearly everyday
  {label: 'Intensed yearning / longing for the deceased person', value: 84},
  {
    label: 'Preoccupied with thoughts / memories of the deceased person',
    value: 90,
  },
  // Frequency: Everyday

  // Criteria C: 3 or more symptoms
  // Atleast a month
  // Frequency: Everyday
  {label: 'Identity Disruption', value: 86},
  {label: 'Sense of Disbelief about the death', value: 87},
  {label: 'Avoidance of reminders that the person is dead', value: 88},
  {
    label: '•Intense emotional pain \n•Anger \n•Bitterness \n•Sorrow',
    value: 91,
  },
  {
    label:
      'Problem engaging with friends / pursuing interest / planning of the future',
    value: 92,
  },
  {label: 'Emotional numbness', value: 93},

  // Criteria D
  {
    label:
      'The duration and severity of the bereavement reaction clearly exceed expected social, cultural, or religious norms for the individual’s culture and context',
    value: 94,
  },

  // Criteria E
  {
    label:
      'Not better explained by another mental disorder, such as major depressive disorder or posttraumatic stress disorder, and are not attributable to the physiological effects of a substance or another medical condition.',
    value: 95,
  },

  // "Other Specified Trauma- and StressorRelated Disorder
  // "
  // 	This category applies to presentations in which symptoms characteristic of a trauma- and stressor-related disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any of the disorders in the trauma- and stressorrelated disorders diagnostic class.
  // Unspecified Trauma- and Stressor-Related Disorder
  // 	This category applies to presentations in which symptoms characteristic of a trauma- and stressor-related disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any of the disorders in the trauma- and stressor-related disorders diagnostic class.
];
