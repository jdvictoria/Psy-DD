export const substanceSymptoms = [
    // Alcohol Use Disorder
    // 12 month period
    {label: 'Alcohol is often taken in larger amounts', value: 1},
    {label: 'Persistent desire or unsuccessful efforts to cut down or control alcohol use', value: 2},
    {label: 'A great deal of time is spent in activities necessary to obtain alcohol, use alcohol, or recover from its effects' +, value: 3},
    {label: 'Craving, or a strong desire or urge to use alcohol', value: 4},
    {label: 'Recurrent alcohol use resulting in a failure to fulfill major role obligations at work, school, or home', value: 5},
    {label: '"Continued alcohol use, value: 6},
    {label: 'Important social, occupational, or recreational activities are given up or reduced because of alcohol use', value: 7},
    {label: 'Recurrent alcohol use in situations in which it is physically hazardous', value: 8},
    {label: 'Alcohol use is continued despite knowledge of having a persistent or recurrent physical or psychological problemAlcohol use is continued despite knowledge of having a persistent or recurrent physical or psychological problem', value: 9},
    {label: 'Need for markedly increased amounts of alcohol to achieve intoxication or desired effect. | Diminished effect with continued use of the same amount of alcohol', value: 10},
    {label: 'Withdrawal', value: 11},

    // Alcohol Intoxication
    // Criteria A
    {label: 'Recent ingestion of alcohol', value: 12},

    // Criteria B
    {label: 'Clinically significant problematic behavioral or psychological changes developed shortly after alcohol ingestion | Inappropriate sexual or aggressive behavior | Mood lability | Impaired judgment', value: 13},

    // Criteria C (one or more symptoms)
    // during and after
    {label: 'Slurred speech', value: 14},
    {label: 'Incoordination', value: 15},
    {label: 'Unsteady gait', value: 16},
    {label: 'Nystagmus', value: 17},
    {label: 'Impairment in attention or memory', value: 18},
    {label: 'Stupor | Coma', value: 19},

    // Criteria D: "The signs or symptoms are not attributable to another medical condition and are not better explained by another mental disorder, including intoxication with another substance.

    // Alcohol Withdrawal
    // Criteria A
    {label: 'Cessation of (or reduction in) alcohol use that has been heavy and prolonged', value: 20},

    // Criteria B (two or more symptoms)
    // several hours to few days
    {label: 'Autonomic Hyperactivity', value: 21},
    {label: 'Increased hand tremor', value: 22},
    {label: 'Insomia', value: 23},
    {label: 'Nausea / vomiting', value: 24},
    {label: 'Transient visual, tactile, or auditory hallucinations or illusions', value: 25},
    {label: 'Psychomotor agitation', value: 26},
    {label: 'Anxiety', value: 27},
    {label: 'Generalized tonic-clonic seizures', value: 28},

    // Criteria C: "The signs or symptoms in Criterion B cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.
    // Criteria D: The signs or symptoms are not attributable to another medical condition and are not better explained by another mental disorder, including intoxication or withdrawal from another substance.

    // Unspecified Alcohol-Related Disorder: "Alcohol-related disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any specific alcohol-related disorder or any of the disorders in the substance-related and addictive disorders diagnostic class.

    // Caffeine Intoxication
    // Critera  A
    {label: 'Recent consumption of caffeine', value: 29},

    // Criteria B (Five or more symptoms)
    {label: 'Restlessness', value: 30},
    {label: 'Nervousness', value: 31},
    {label: 'Excitement', value: 32},
    {label: 'Insomia', value: 33},
    {label: 'Flushed Face', value: 34},
    {label: 'Diuresis', value: 35},
    {label: 'Gastrointestinal disturbance', value: 36},
    {label: 'Muscle Twitching', value: 37},
    {label: 'Rambling flow of thought and speech', value: 38},
    {label: 'Tachycardia or cardiac arrhythmia', value: 39},
    {label: 'Periods of inexhaustibility', value: 40},
    {label: 'Psychomotor agitation', value: 41},

    // Criteria C : The signs or symptoms in Criterion B cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.
    // Criteria D: The signs or symptoms are not attributable to another medical condition and are not better explained by another mental disorder, including intoxication with another substance.

    // Caffeine Withdrawal
    // Criteria A
    {label: 'Prolonged daily use of caffeine', value: 42},

    // Critera B
    // 24 hours after caffeine ingestion
    {label: 'Headache', value: 43},
    {label: 'Marked fatigue or drowsiness', value: 44},
    {label: 'Dysphoric mood, depressed mood, or irritability', value: 45},
    {label: 'Difficulty concentrating', value: 46},
    {label: 'Flu-like symptoms', value: 47},

    // Criteria C: The signs or symptoms in Criterion B cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.
    // Criteria D: The signs or symptoms are not associated with the physiological effects of another medical condition

    // Unspecified Caffeine-Related Disorder
    // caffeine-related disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any specific caffeine-related disorder or any of the disorders in the substance-related and addictive disorders diagnostic class.

    // Cannabis Use Disorder
    // Criteria A ( Two symptoms)
    {label: 'Cannabis is often taken in larger amounts or over a longer period than was intended', value: 48},
    {label: 'There is a persistent desire or unsuccessful efforts to cut down or control cannabis use', value: 49},
    {label: 'A great deal of time is spent in activities necessary to obtain cannabis, use cannabis, or recover from its effects', value: 50},
    {label: 'Craving, or a strong desire or urge to use cannabis', value: 51},
    {label: 'Recurrent cannabis use resulting in a failure to fulfill major role obligations at work, school, or home', value: 52},
    {label: 'Continued cannabis use despite having persistent or recurrent social or interpersonal problems caused or exacerbated by the effects of cannabis', value: 53},
    {label: 'Important social, occupational, or recreational activities are given up or reduced because of cannabis use', value: 54},
    {label: 'Recurrent cannabis use in situations in which it is physically hazardous', value: 55},
    {label: 'Cannabis use is continued despite knowledge of having a persistent or recurrent physical or psychological problem that is likely to have been caused or exacerbated by cannabis', value: 56},
    {label: 'A need for markedly increased amounts of cannabis to achieve intoxication or desired effect | Markedly diminished effect with continued use of the same amount of cannabis', value: 57},
    {label: 'The characteristic withdrawal syndrome for cannabis | Cannabis is taken to relieve or avoid withdrawal symptoms', value: 58},

    // Cannabis Intoxication
    // Criteria A:
    {label: 'Recent use of cannabis', value: 59},

    // Critera B
    {label: 'Clinically significant problematic behavioral or psychological changes developed shortly after cannabis use', value: 60},

    // Criteria C
    // Developed 2 hours after use
    {label: 'Conjunctival Injection', value: 60},
    {label: 'Increased Appetite', value: 61},
    {label: 'Dry MouthDry Mouth', value: 62},
    {label: 'Tachycardia ', value: 63},

    // Criteria D
    // The signs or symptoms are not attributable to another medical condition and are not better explained by another mental disorder, including intoxication with another substance.
    {label: 'Nystagmus', value: 64},

    // Cannabis Withdrawal
    // Criteria A
    {label: 'Cessation of cannabis use that has been heavy and prolonged (i.e., usually daily or almost daily use over a period of at least a few months)', value: 65},

    // Criteria B (three or more symptom)
    {label: 'Irritability | Anger | Agression', value: 66},
    {label: 'Nervousness | Anxiety', value: 67},
    {label: 'Sleep Difficulty', value: 68},
    {label: 'Decreased Appetite or weight loss', value: 69},
    {label: 'Restlesness', value: 70},
    {label: 'Depressed Mood', value: 71},
    {label: 'At least one of the following physical symptoms causing significant discomfort: abdominal pain, shakiness/tremors, sweating, fever, chills, or headache.\n', value: 72},

    // Unspecified Cannabis-Related Disorder
    // "This category applies to presentations in which symptoms characteristic of a cannabis-related disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any specific cannabis related disorder or any of the disorders in the substance-related and addictive disorders diagnostic class.

    // Phencyclidine Use Disorder
    // Criteria A (Two symptoms)
    // 12 month period
    {label: 'Phencyclidine is often taken in larger amounts or over a longer period than was intended', value: 73},
    {label: 'There is a persistent desire or unsuccessful efforts to cut down or control phencyclidine use', value: 74},
    {label: 'A great deal of time is spent in activities necessary to obtain phencyclidine, use the phencyclidine, or recover from its effects', value: 75},
    {label: 'Craving, or a strong desire or urge to use phencyclidine', value: 76},
    {label: 'Recurrent phencyclidine use resulting in a failure to fulfill major role obligations at work, school, or home', value: 77},
    {label: 'Continued phencyclidine use despite having persistent or recurrent social or interpersonal problems caused or exacerbated by the effects of the phencyclidine', value: 78},
    {label: 'Important social, occupational, or recreational activities are given up or reduced because of phencyclidine use', value: 79},
    {label: 'Recurrent phencyclidine use in situations in which it is physically hazardous (e.g., driving an automobile or operating a machine when impaired by a phencyclidine)', value: 80},
    {label: 'Phencyclidine use is continued despite knowledge of having a persistent or recurrent physical or psychological problem that is likely to have been caused or exacerbated by the phencyclidine', value: 81},
    {label: 'A need for markedly increased amounts of the phencyclidine to achieve intoxication or desired effect | "A markedly diminished effect with continued use of the same amount of the phencyclidine', value: 82},

    // Other Hallucinogen Intoxication
    // Criteria A
    {label: 'Recent use of a hallucinogen (other than phencyclidine)', value: 83},

    // Criteria B
    {label: 'Clinically significant problematic behavioral or psychological changes', value: 84},

    // Criteria C
    {label: 'Perceptual changes occ that developed during haluccinogen use.urring in a state of full wakefulness and alertness', value: 85},

    // Criteria D
    {label: 'Pupillary dilation', value: 86},
    {label: 'Tachycardia', value: 87},
    {label: 'Sweating', value: 88},
    {label: 'Palpitation', value: 89},
    {label: 'Blurring of vision', value: 90},
    {label: 'Tremors', value: 91},
    {label: 'Incoordination', value: 92},

    // Unspecified Phencyclidine-Related Disorder:
    // This category applies to presentations in which symptoms characteristic of a phencyclidine-related disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any specific phencyclidine-related disorder or any of the disorders in the substance-related and addictive disorders diagnostic class.

    // Unspecified Hallucinogen-Related Disorder
    // This category applies to presentations in which symptoms characteristic of a hallucinogen-related disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any specific hallucinogen-related disorder or any of the disorders in the substance-related and addictive disorders diagnostic class.

    // Inhalant Use Disorder
    // Criteria A (two or more symptoms)
    {label: 'The inhalant substance is often taken in larger amounts or over a longer period than was intended', value: 93},
    {label: 'There is a persistent desire or unsuccessful efforts to cut down or control use of the inhalant substance', value: 94},
    {label: 'A great deal of time is spent in activities necessary to obtain the inhalant substance, use it, or recover from its effects', value: 95},
    {label: 'Craving, or a strong desire or urge to use the inhalant substance', value: 96},
    {label: 'Recurrent use of the inhalant substance resulting in a failure to fulfill major role obligations at work, school, or home', value: 97},
    {label: 'Continued use of the inhalant substance despite having persistent or recurrent social or interpersonal problems caused or exacerbated by the effects of its use', value: 98},
    {label: 'Important social, occupational, or recreational activities are given up or reduced because of use of the inhalant substance', value: 99},
    {label: 'Recurrent use of the inhalant substance in situations in which it is physically hazardous', value: 100},
    {label: 'Use of the inhalant substance is continued despite knowledge of having a persistent or recurrent physical or psychological problem that is likely to have been caused or exacerbated by the substance', value: 101},
    {label: 'A need for markedly increased amounts of the inhalant substance to achieve intoxication or desired effect | A markedly diminished effect with continued use of the same amount of the inhalant substance', value: 102},

    // Inhalant Intoxication
    // Criteria A
    {label: 'Recent intended or unintended short-term, high-dose exposure to inhalant substances, including volatile hydrocarbons such as toluene or gasoline', value: 103},

    // Criteria B
    {label: 'Clinically significant problematic behavioral or psychological changes (e.g., belligerence, assaultiveness, apathy, impaired judgment) that developed during, or shortly after, exposure to inhalants', value: 104},

    // Criteria C (two or more symptom)
    // Developed During Inhalant Use
    {label: 'Dizziness', value: 105},
    {label: 'Nystagmus', value: 106},
    {label: 'Incoordination', value: 107},
    {label: 'Slurred Speech', value: 108},
    {label: 'Unsteady Gait', value: 109},
    {label: 'Lethargy', value: 110},
    {label: 'Depressed Reflexes', value: 111},
    {label: 'Psychomotor retardation', value: 112},
    {label: 'Tremor', value: 113},
    {label: 'Generalized muscle weakness', value: 114},
    {label: 'Blurred Vision or Diplopia', value: 115},
    {label: 'Stupor | Coma', value: 116},
    {label: 'Euphoria', value: 117},

    // Criteria D
    {label: 'The signs or symptoms are not attributable to another medical condition and are not better explained by another mental disorder, including intoxication with another substance', value: 118},

    // Unspecified Inhalant-Related Disorder: This category applies to presentations in which symptoms characteristic of an inhalant-related disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any specific inhalant-related disorder or any of the disorders in the substance-related and addictive disorders diagnostic class.

    // Opioid Use Disorder
    // Criteria A (two or more symptoms)
    {label: 'Opioids are often taken in larger amounts or over a longer period than was intended', value: 119},
    {label: 'There is a persistent desire or unsuccessful efforts to cut down or control opioid use', value: 120},
    {label: 'A great deal of time is spent in activities necessary to obtain the opioid, use the opioid, or recover from its effects', value: 121},
    {label: 'Craving, or a strong desire or urge to use opioids', value: 122},
    {label: 'Recurrent opioid use resulting in a failure to fulfill major role obligations at work, school, or home', value: 123},
    {label: 'Continued opioid use despite having persistent or recurrent social or interpersonal problems caused or exacerbated by the effects of opioids', value: 124},
    {label: 'Recurrent opioid use in situations in which it is physically hazardous', value: 125},
    {label: 'Continued opioid use despite knowledge of having a persistent or recurrent physical or psychological problem', value: 126},
    {label: 'A need for markedly increased amounts of opioids to achieve intoxication or desired effect | A markedly diminished effect with continued use of the same amount of an opioid', value: 127},

    // Opioid Intoxication
    // Criteria A
    {label: 'Recent use of an opioid', value: 128},

    // Critera B
    {label: 'Clinically significant problematic behavioral or psychological changes (e.g., initial euphoria followed by apathy, dysphoria, psychomotor agitation or retardation, impaired judgment) that developed during, or shortly after, opioid use', value: 129},

    // Criteria C (One or more symptoms')
    {label: 'Drowsiness', value: 130},
    {label: 'Slurred Speech', value: 131},
    {label: 'Impairment in attention or memory', value: 132},

    // Criteria D
    {label: 'The signs or symptoms are not attributable to another medical condition and are not better explained by another mental disorder, including intoxication with another substance', value: 133},

    // Opioid Withdrawal
    // Criteria A
    {label: 'Cessation of (or reduction in) opioid use that has been heavy and prolonged', value: 134},
    {label: 'Administration of an opioid antagonist after a period of opioid use', value: 135},

    // Criteria B
    // within minutes to several days after adminiter of opiod
    {label: 'Dysphoric Mood', value: 136},
    {label: 'Nausea | Vomiting', value: 137},
    {label: 'Muscle aches', value: 138},
    {label: 'Lacrimation', value: 139},
    {label: 'Puppilary Dilation', value: 140},
    {label: 'Diarrhea', value: 141},
    {label: 'Yawning', value: 142},
    {label: 'Fever', value: 143},
    {label: 'Insomia', value: 144},

    // Criteria C
    {label: 'The signs or symptoms in Criterion B cause clinically significant distress or impairment in social, occupational, or other important areas of functioning', value: 145},

    // Criteria D
    {label: 'The signs or symptoms are not attributable to another medical condition and are not better explained by another mental disorder, including intoxication or withdrawal from another substance', value: 146},

    // Unspecified Opioid-Related Disorder
    // This category applies to presentations in which symptoms characteristic of an opioid-related disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any specific opioid-related disorder or any of the disorders in the substance-related and addictive disorders diagnostic class.

    // Sedative, Hypnotic, or Anxiolytic Use Disorder
    // Criteria A
    // within 12 month period
    {label: 'Sedatives, hypnotics, or anxiolytics are often taken in larger amounts or over a longer period than was intended', value: 147},
    {label: 'There is a persistent desire or unsuccessful efforts to cut down or control sedative, hypnotic, or anxiolytic use', value: 148},
    {label: 'A great deal of time is spent in activities necessary to obtain the sedative, hypnotic, or anxiolytic; use the sedative, hypnotic, or anxiolytic; or recover from its effects', value: 149},
    {label: 'Craving, or a strong desire or urge to use the sedative, hypnotic, or anxiolytic', value: 150},
    {label: 'Continued sedative, hypnotic, or anxiolytic use despite having persistent or recurrent social or interpersonal problems', value: 151},
    {label: 'Important social, occupational, or recreational activities are given up or reduced because of sedative, hypnotic, or anxiolytic use', value: 152},
    {label: 'Recurrent sedative, hypnotic, or anxiolytic use in situations in which it is physically hazardous', value: 153},
    {label: 'Sedative, hypnotic, or anxiolytic use is continued despite knowledge of having a persistent or recurrent physical or psychological problem', value: 154},
    {label: 'Need for markedly increased amounts of the sedative, hypnotic, or anxiolytic to achieve intoxication or desired effect', value: 155},
    {label: 'Markedly diminished effect with continued use of the same amount of the sedative, hypnotic, or anxiolytic', value: 156},
    {label: 'Withdrawal syndrome for sedatives, hypnotics, or anxiolytics | Sedatives, hypnotics, or anxiolytics are taken to relieve or avoid withdrawal symptoms', value: 157},

    // Sedative, Hypnotic, or Anxiolytic Intoxication
    // Criteria A
    {label: 'Recent use of a sedative, hypnotic, or anxiolytic', value: 158},

    // Criteria B
    {label: 'Clinically significant maladaptive behavioral or psychological changes that developed during, or shortly after, sedative, hypnotic, or anxiolytic use', value: 159},

    // Criteria C (one or more symptoms)
    // "during or after sedative, hypnotic, or anxiolytic use:
    {label: 'Slurred Speech', value: 160},
    {label: 'Incoordination', value: 161},
    {label: 'Unsteady gait', value: 162},
    {label: 'Nystagmus', value: 163},
    {label: 'Impairment in cognition', value: 164},
    {label: 'Stupor | Coma', value: 165},

    // Criteria D
    {label: 'The signs or symptoms are not attributable to another medical condition and are not better explained by another mental disorder, including intoxication with another substance', value: 166},

    // Sedative, Hypnotic, or Anxiolytic Withdrawal
    // Criteria A
    {label: 'Cessation of (or reduction in) sedative, hypnotic, or anxiolytic use that has been prolonged', value: 167},

    // Criteria B
    // Several hours to few days after reduction of sedative, hypnotic, or anxiolytic use described
    {label: 'Autonomic Hyperactivity', value: 168},
    {label: 'Hand Tremor', value: 169},
    {label: 'Insomia', value: 170},
    {label: 'Nausea | Vomiting', value: 171},
    {label: 'Transient Visual', value: 172},
    {label: 'Psychomotor agitation', value: 173},
    {label: 'Anxiety', value: 174},
    {label: 'Grand Mal Seizures', value: 175},

    // Criteria C
    {label: 'The signs or symptoms in Criterion B cause clinically significant distress or impairment in social, occupational, or other important areas of functioning', value: 176},

    // Criteria D
    {label: 'The signs or symptoms are not attributable to another medical condition and are not better explained by another mental disorder, including intoxication or withdrawal from another substance', value: 177},

    // Unspecified Sedative-, Hypnotic-, or Anxiolytic-Related Disorder
    // This category applies to presentations in which symptoms characteristic of a sedative-, hypnotic-, or anxiolytic-related disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any specific sedative-, hypnotic-, or anxiolytic-related disorder or any of the disorders in the substance-related and addictive disorders diagnostic class.

    // Stimulant Use Disorder
    // within 12 month period
    {label: 'The stimulant is often taken in larger amounts or over a longer period than was intended', value: 178},
    {label: 'There is a persistent desire or unsuccessful efforts to cut down or control stimulant use', value: 179},
    {label: 'A great deal of time is spent in activities necessary to obtain the stimulant, use the stimulant, or recover from its effects', value: 180},
    {label: 'Craving, or a strong desire or urge to use the stimulant', value: 181},
    {label: 'Recurrent stimulant use resulting in a failure to fulfill major role obligations at work, school, or home', value: 182},
    {label: 'Continued stimulant use despite having persistent or recurrent social or interpersonal problems caused or exacerbated by the effects of the stimulant', value: 183},
    {label: 'Important social, occupational, or recreational activities are given up or reduced because of stimulant use.\n', value: 184},
    {label: 'Recurrent stimulant use in situations in which it is physically hazardous', value: 185},
    {label: 'Stimulant use is continued despite knowledge of having a persistent or recurrent physical or psychological problem that is likely to have been caused or exacerbated by the stimulant', value: 186},
    {label: 'A need for markedly increased amounts of the stimulant to achieve intoxication or desired effect | A markedly diminished effect with continued use of the same amount of the stimulant', value: 187},
    {label: 'The characteristic withdrawal syndrome for stimulant | The stimulant  (or a closely related substance) are taken to relieve or avoid withdrawal symptoms', value: 188},

    // Stimulant Intoxication
    // Criteria A
    {label: 'Recent use of an amphetamine-type substance, cocaine, or other stimulant', value: 189},

    // Critera B
    {label: 'Clinically significant problematic behavioral or psychological changes', value: 190},

    // Criteria C (Two or more symptom)
    // Developed during stimulant use
    {label: 'Tachycardia', value: 191},
    {label: 'Puppilary Dilation', value: 192},
    {label: 'Elevated or lowered blood pressure', value: 193},
    {label: 'Perspiration or chill', value: 194},
    {label: 'Nausea | Vomiting', value: 195},
    {label: 'Evidence of weight loss', value: 196},
    {label: 'Psychomotor agitation', value: 197},
    {label: 'Muscular weakness | Respiratory depression | Chest pain | Cardiac arrhytmias', value: 198},

    // Criteria D
    // The signs or symptoms are not attributable to another medical condition and are not better explained by another mental disorder, including intoxication with another substance.

    // Stimulant Withdrawal
    // Criteria A
    {label: 'Cessation of (or reduction in) prolonged amphetamine-type substance, cocaine, or other stimulant use', value: 199},

    // Criteria B (Two or more symptoms)
    // few hours to several days
    {label: 'Fatigue', value: 200},
    {label: 'Unpleasant vivid dreams', value: 201},
    {label: 'Insomia | Hypersomia', value: 202},
    {label: 'Increased Appetite', value: 203},
    {label: 'Psychomotor retardation', value: 204},

    // Criteria C
    {label: 'The signs or symptoms in Criterion B cause clinically significant distress or impairment in social, occupational, or other important areas of functioning', value: 205},

    // Criteria D
    {label: 'The signs or symptoms are not attributable to another medical condition and are not better explained by another mental disorder, including intoxication or withdrawal from another substance', value: 206},

    // "Unspecified Stimulant-Related Disorder
    // This category applies to presentations in which symptoms characteristic of a stimulant-related disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any specific stimulant-related disorder or any of the disorders in the substance-related and addictive disorders diagnostic class.

    // Tobacco Use Disorder
    // within 12 months
    {label: 'Tobacco is often taken in larger amounts or over a longer period than was intended', value: 207},
    {label: 'There is a persistent desire or unsuccessful efforts to cut down or control tobacco use', value: 208},
    {label: 'A great deal of time is spent in activities necessary to obtain or use tobacco', value: 209},
    {label: 'Craving, or a strong desire or urge to use tobacco', value: 210},
    {label: 'Recurrent tobacco use resulting in a failure to fulfill major role obligations at work, school, or home (e.g., interference with work)', value: 211},
    {label: 'Continued tobacco use despite having persistent or recurrent social or interpersonal problems caused or exacerbated by the effects of tobacco', value: 212},
    {label: 'Important social, occupational, or recreational activities are given up or reduced because of tobacco use', value: 213},
    {label: 'Recurrent tobacco use', value: 214},
    {label: 'Tobacco use is continued despite knowledge of having a persistent or recurrent physical or psychological problem', value: 215},
    {label: 'A need for markedly increased amounts of tobacco to achieve the desired effect | A markedly diminished effect with continued use of the same amount of tobacco', value: 216},
    {label: 'The characteristic withdrawal syndrome for tobacco | Tobacco  is taken to relieve or avoid withdrawal symptoms', value: 217},

    // Tobacco Withdrawal
    // Criteria A
    {label: 'Daily use of tobacco for at least several weeks', value: 218},

    // Criteria B (TWO OR MORE SYMPTOMS
    {label: 'Irritability | Frustration | Anger', value: 219},
    {label: 'Difficulty Concentrating', value: 220},
    {label: 'Increased Appetite', value: 221},
    {label: 'Restlesness', value: 222},
    {label: 'Depressed mood', value: 223},
    {label: 'Insomia', value: 224},

    // Criteria C
    {label: 'The signs or symptoms in Criterion B cause clinically significant distress or impairment in social, occupational, or other important areas of functioning', value: 225},

    // Criteria D
    {label: 'The signs or symptoms are not attributed to another medical condition and are not better explained by another mental disorder, including intoxication or withdrawal from another substance', value: 226},

    // "Unspecified Tobacco-Related Disorder
    // This category applies to presentations in which symptoms characteristic of a tobacco-related disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any specific tobacco-related disorder or any of the disorders in the substance-related and addictive disorders diagnostic class

    // "Other (or Unknown) Substance Use Disorder
    // Criteria A
    {label: 'The substance is often taken in larger amounts or over a longer period than was intended', value: 227},
    {label: 'There is a persistent desire or unsuccessful efforts to cut down or control use of the substance', value: 228},
    {label: 'A great deal of time is spent in activities necessary to obtain the substance, use the substance, or recover from its effects', value: 229},
    {label: 'Craving, or a strong desire or urge to use the substance', value: 230},
    {label: 'Recurrent use of the substance resulting in a failure to fulfill major role obligations at work, school, or home', value: 231},
    {label: 'Continued use of the substance despite having persistent or recurrent social or interpersonal problems caused or exacerbated by the effects of its use', value: 232},
    {label: 'Important social, occupational, or recreational activities are given up or reduced because of use of the substance', value: 233},
    {label: 'Recurrent use of the substance in situations in which it is physically hazardous', value: 234},
    {label: 'Use of the substance is continued despite knowledge of having a persistent or recurrent physical or psychological problem that is likely to have been caused or exacerbated by the substance', value: 235},
    {label: 'A need for markedly increased amounts of the substance to achieve intoxication or desired effect | A markedly diminished effect with continued use of the same amount of the substance', value: 236},
    {label: 'The characteristic withdrawal syndrome for other substance withdrawal) | The substance (or a closely related substance) is taken to relieve or avoid withdrawal symptoms', value: 237},

    // Other (or Unknown) Substance Withdrawal
    // Criteria A
    {label: 'Cessation of (or reduction in) use of a substance that has been heavy and prolonged', value: 238},

    // Criteria B
    {label: 'The development of a substance-specific syndrome shortly after the cessation of (or reduction in) substance use', value: 239},

    // Criteria C
    {label: 'The substance-specific syndrome causes clinically significant distress or impairment in social, occupational, or other important areas of functioning', value: 240},

    // Criteria D
    {label: 'The symptoms are not attributable to another medical condition and are not better explained by another mental disorder, including withdrawal from another substance', value: 241},

    // Criteria E
    {label: 'The substance involved cannot be classified under any of the other substance categories (alcohol; caffeine; cannabis; opioids; sedatives, hypnotics, or anxiolytics; stimulants; or tobacco) or is unknown', value: 242},

    // Unspecified Other (or Unknown) Substance– Related Disorder
    // This category applies to presentations in which symptoms characteristic of an other (or unknown) substance–related disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any specific other (or unknown) substance–related disorder or any of the disorders in the substance-related disorders diagnostic class.

    // Gambling Disorder
    // Criteria A (Four or more symptoms)
    // 12 month period
    {label: 'Needs to gamble with increasing amounts of money in order to achieve the desired excitement', value: 243},
    {label: 'Is restless or irritable when attempting to cut down or stop gambling', value: 244},
    {label: 'Has made repeated unsuccessful efforts to control, cut back, or stop gambling', value: 245},
    {label: 'Is often preoccupied with gambling', value: 246},
    {label: 'Often gambles when feeling distressed', value: 247},
    {label: 'After losing money gambling, often returns another day to get even', value: 248},
    {label: 'Lies to conceal the extent of involvement with gambling', value: 249},
    {label: 'Has jeopardized or lost a significant relationship, job, or educational or career opportunity because of gambling', value: 250},
    {label: 'Relies on others to provide money to relieve desperate financial situations caused by gambling', value: 251c},
]
