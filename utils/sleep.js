export const sleepSymptoms = [
    // Insomia Disorder
    // Criteria A: One or more symptom
    {label: 'Difficulty initiating sleep | In children, this may manifest as difficulty initiating sleep without caregiver intervention', value: 1},
    {label: 'Difficulty maintaining sleep | Frequent awakenings | Problems returning to sleep after awakening\tIn children, this may manifest as difficulty returning to sleep without caregiver intervention', value: 2},
    {label: 'Early-morning awakening with inability to return to sleep', value: 3},

    // Criteria B
    {label: 'Causes Clinically Significant Distress | Impairement in social / occupational / educational / academic / behavioral / other functioning', value: 4},

    // Criteria C
    {label: 'The sleep difficulty occurs at least 3 nights per week', value: 5},

    // Criteria D
    {label: 'The sleep difficulty is present for at least 3 months', value: 6},

    // Criteria E
    {label: 'The sleep difficulty occurs despite adequate opportunity for sleep', value: 7},

    // Criteria F
    {label: 'The insomnia is not better explained by and does not occur exclusively during the course of another sleep-wake disorder', value: 8},

    // Criteria G
    {label: 'Coexisting mental disorders and medical conditions do not adequately explain the predominant complaint of insomnia', value: 9},

    // Hypersomnolence Disorder
    // Criteria A (at least one symptom)
    // Three times a week for 3 months
    {label: 'Recurrent periods of sleep | Lapses into sleep within the same day ', value: 10},
    {label: 'Prolonged main sleep more than 9 hours | Unrefreshing sleep', value: 11},
    {label: 'Difficulty being fully awake', value: 12},

    // Criteria B
    {label: 'The hypersomnolence occurs at least three times per week, for at least 3 months', value: 13},

    // Criteria C
    {label: 'The hypersomnolence is accompanied by significant distress or impairment in cognitive, social, occupational, or other important areas of functioning', value: 14},

    // Criteria D
    {label: 'The hypersomnolence is not better explained by and does not occur exclusively during the course of another sleep disorder', value: 15},

    // Criteria E
    {label: 'The hypersomnolence is not attributable to the physiological effects of a substance', value: 16},

    // Criteria F
    {label: 'Mental and Medical Disorder doesnt explain the hypersomnelence', value: 17},

    // Narcolepsy
    // Criteria A
    // 3 months
    // Three times per week
    {label: 'Recurrent periods of irrepressible need to sleep | Lapsing into sleep | Napping occuring within the same day', value: 18},

    // Criteria B ( at l.east one of the following
    // Few times per month
    {label: 'Episodes of Cataplexy | Brief episodes of sudden bilateral loss of muscle tone | Spontaneous grimaces or jaw-opening episodes with tongue thrusting or a global hypotonia,', value: 19},
    {label: 'Hypocretin deficiency', value: 21},
    {label: 'Nocturnal sleep | Polysomnography showing rapid eye movement | Two or more sleep-onset REM periods', value: 22},

    // Obstructive Sleep Apnea Hypopnea
    // Criteria A: Either 1 or 2
    // per hour of sleep
    {label: 'Evidence by polysomnography of at least five obstructive apneas | Nocturnal breathing disturbances | Snoring | Snorting | Gasping | Pause of breathing durring sleep | Daytime sleepiness | Fatigue | Unrefreshing sleep', value: 23},
    {label: 'Evidence by polysomnography of 15 or more obstructive apneas | Hypopneas per hour of sleep regardless of accompanying symptoms', value: 24},

    // Central Sleep Apnea
    // Criteria A
    // per hour
    {label: 'Evidence by polysomnography of five or more central apneas', value: 25},

    // Criteria B
    {label: 'The disorder is not better explained by another current sleep disorder', value: 26},

    // Sleep-Related Hypoventilation
    // Criteria A
    {label: 'Polysomnograpy demonstrates episodes of decreased respiration associated with elevated CO2 levels', value: 27},

    // Criteria B
    {label: 'The disturbance is not better explained by another current sleep disorder', value: 28},

    // Circadian Rhythm Sleep-Wake Disorders
    // Criteria A
    {label: 'A persistent or recurrent pattern of sleep disruption that is primarily due to an alteration of the circadian system or to a misalignment between the endogenous circadian rhythm and the sleep-wake schedule required by an individual’s physical environment or social or professional schedule', value: 29},

    // Criteria B
    {label: 'The sleep disruption leads to excessive sleepiness or insomnia, or both', value: 30},

    // Criteria C
    {label: 'The sleep disturbance causes clinically significant distress or impairment in social, occupational, and other important areas of functioning', value: 31},

    // "Non–Rapid Eye Movement Sleep Arousal Disorders
    // Criteria A
    {label: 'Sleepwalking', value: 32},
    {label: 'Sleep terrors', value: 33},

    // Criteria B
    {label: 'No or little (e.g., only a single visual scene) dream imagery is recalled', value: 34},

    // Criteria C
    {label: 'Amnesia for the episodes is present', value: 35},

    // Criteria D
    {label: 'clinically significant distress or impairment in social, occupational, or other important areas of functioning', value: 36},

    // Criteria E
    {label: 'The disturbance is not attributable to the physiological effects of a substance', value: 37},

    // Criteria F
    {label: 'Coexisting mental disorders and medical conditions do notexplain the episodes of sleepwalking or sleep terrors', value: 38},

    // Nightmare Disorder
    // Criteria A
    {label: 'Repeated occurrences of extended, extremely dysphoric, and well-remembered dreams that usually involve efforts to avoid threats to survival, security, or physical integrity and that generally occur during the second half of the major sleep episode', value: 39},

    // Criteria B
    {label: 'On awakening from the dysphoric dreams, the individual rapidly becomes oriented and alert', value: 40},

    // Criteria C
    {label: 'Sleep Disturbance cause clinically significant distress', value: 41},
    {label: 'Impairment in social, occupational, or other important areas of functioning', value: 42},

    // Criteria D
    {label: 'The nightmare symptoms are not attributable to the physiological effects of a substance', value: 43},

    // Criteria E
    {label: 'Coexisting mental disorders and medical conditions do not adequately explain the predominant complaint of dysphoric dreams', value: 44},

    // Rapid Eye Movement Sleep Behavior Disorder
    // Criteria A
    {label: 'Repeated episodes of arousal during sleep associated with vocalization and/or complex motor behaviors', value: 45},

    // Criteria B
    {label: 'the behavior arises during REM seep which occur more than 90 minutes onset', value: 46},

    // Criteria C
    {label: 'Upon awakening from these episodes, the individual is completely awake, alert, and not confused or disoriented', value: 47},

    // Criteria D
    {label: 'REM sleep without atonia on polysomnographic recording', value: 48},
    {label: 'A history suggestive of REM sleep behavior disorder and an established synucleinopathy diagnosis', value: 49},

    // Criteria E
    {label: 'The behaviors cause clinically significant distress', value: 50},
    {label: 'Impairment in social, occupational, or other important areas of functioning', value: 51},

    // Criteria F
    {label: 'The disturbance is not attributable to the physiological effects of a substance', value: 52},

    // Criteria G
    {label: 'Coexisting mental disorders and medical conditions do not explain the episodes', value: 53},

    // Restless Legs Syndrome
    // Criteria A (3 Symptoms)
    // Persisted at least 3 months
    // 3 times per week
    {label: 'Urge to move the legs begins or worsens during periods of rest or inactivity', value: 54},
    {label: 'Urge to move the legs is partially or totally relieved by movement.', value: 55},
    {label: 'Urge to move the legs is worse in the evening or at night than during the day, or occurs only in the evening or at night', value: 56},

    // Criteria B
    {label: 'The symptoms in Criterion A occur at least three times per week and have persisted for at least 3 months', value: 57},

    // Criteria C
    {label: 'Symptoms in Criterion A are accompanied by significant distress or impairment in social, occupational, educational, academic, behavioral, or other important areas of functioning', value: 58},

    // Criteria D
    {label: 'The symptoms in Criterion A are not attributable to another mental disorder or medical condition', value: 59},

    // Criteria E
    {label: 'The symptoms are not attributable to the physiological effects of a drug of abuse or medication', value: 60},

    // Substance/Medication-Induced Sleep Disorder
    // Criteria A
    {label: 'A prominent and severe disturbance in sleep', value: 61},

    // Criteria B
    {label: 'Developed during or soon after substance intoxication or withdrawal or after exposure to or withdrawal from a medication', value: 62},
    {label: 'The involved substance/medication is capable of producing the symptoms in Criterion A', value: 63},

    // Criteria C
    {label: 'Disturbance is not better explained by a sleep disorder that is not substance/medication-induced', value: 64},

    // Criteria D
    {label: 'Disturbance does not occur exclusively during the course of a delirium', value: 65},

    // Criteria E
    {label: 'Clinically significant distress or impairment in social, occupational, or other important areas of functioning', value: 66},
]
