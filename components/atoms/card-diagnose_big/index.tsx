import React, {useState} from 'react';

import {
  DiagnoseSymptomCard,
  StyledRow,
  StyledTouchableRow,
} from '../../../styles/form-container';
import {contentText, StyledText16} from '../../../styles/form-text';

import DropdownComponent from '../dropdown-diagnose';

import {traumaSymptoms} from '../../../utils/trauma';
import {somaticSymptoms} from '../../../utils/somatic';
import {sleepSymptoms} from '../../../utils/sleep';
import {sexualSymptoms} from '../../../utils/sexual';
import {schizophreniaSymptoms} from '../../../utils/schizophrenia';
import {personalitySymptoms} from '../../../utils/personality';
import {paraphilicSymptoms} from '../../../utils/paraphilic';
import {obsessiveSymptoms} from '../../../utils/obsessive';
import {neurodevelopmentalSymptoms} from '../../../utils/neurodevelopmental';
import {substanceSymptoms} from '../../../utils/substance';

const dummyData = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
];

// @ts-ignore
function CardDiagnoseBig({isDarkMode, filter, setNumbers, bigCardCount}) {
  const contentStyle = contentText(isDarkMode);

  const [additionalCardCount, setAdditionalCardCount] = useState(1);

  let symptomData:
    | {label: string; value: string}[]
    | {label: string; value: number}[];
  let durationData:
    | {label: string; value: string}[]
    | {label: string; value: number}[];
  let severityData:
    | {label: string; value: string}[]
    | {label: string; value: number}[];
  let drugData:
    | {label: string; value: string}[]
    | {label: string; value: number}[];
  let distressData:
    | {label: string; value: string}[]
    | {label: string; value: number}[];

  switch (filter) {
    case 'a':
      symptomData = traumaSymptoms;
      break;
    case 'b':
      symptomData = somaticSymptoms;
      break;
    case 'c':
      symptomData = sleepSymptoms;
      break;
    case 'd':
      symptomData = sexualSymptoms;
      break;
    case 'e':
      symptomData = schizophreniaSymptoms;
      break;
    case 'f':
      symptomData = personalitySymptoms;
      break;
    case 'g':
      symptomData = paraphilicSymptoms;
      break;
    case 'h':
      symptomData = obsessiveSymptoms;
      break;
    case 'i':
      symptomData = neurodevelopmentalSymptoms;
      break;
    case 'j':
      symptomData = substanceSymptoms;
      break;
    default:
      break;
  }

  if (filter === 'a') {
    durationData = dummyData;
    severityData = dummyData;
    drugData = dummyData;
    distressData = dummyData;
  } else {
    durationData = dummyData;
    severityData = dummyData;
    drugData = dummyData;
    distressData = dummyData;
  }

  const handleAddSymptomPress = () => {
    setAdditionalCardCount(prevCount => prevCount + 1);
  };

  const renderCards = () => {
    const additionalCards = [];
    for (let i = 0; i < additionalCardCount; i++) {
      additionalCards.push(
        <DiagnoseSymptomCard
          key={`additionalCard-${i}`}
          style={{
            height: 85,
            backgroundColor: isDarkMode ? '#1A2230' : '#FFFFFF',
            marginTop: 5,
          }}>
          <StyledRow>
            <DropdownComponent
              isDarkMode={isDarkMode}
              data={symptomData}
              label={'Symptom/s'}
              value={null}
              setValue={selectedSymptom => {
                setNumbers(prevNumbers => {
                  // Check for duplicates before updating the state
                  if (!prevNumbers.includes(selectedSymptom)) {
                    return [...prevNumbers, selectedSymptom];
                  }
                  return prevNumbers;
                });
              }}
            />
          </StyledRow>
          <StyledRow>
            <DropdownComponent
              isDarkMode={isDarkMode}
              data={durationData}
              label={'Duration'}
              value={null}
              setValue={null}
            />
            <DropdownComponent
              isDarkMode={isDarkMode}
              data={severityData}
              label={'Severity'}
              value={null}
              setValue={null}
            />
          </StyledRow>
          <StyledRow>
            <DropdownComponent
              isDarkMode={isDarkMode}
              data={drugData}
              label={'Drug Influenced?'}
              value={null}
              setValue={null}
            />
            <DropdownComponent
              isDarkMode={isDarkMode}
              data={distressData}
              label={'Causes Distress?'}
              value={null}
              setValue={null}
            />
          </StyledRow>
        </DiagnoseSymptomCard>,
      );
    }
    return additionalCards;
  };

  return (
    <>
      <StyledRow style={{justifyContent: 'flex-start', width: '90%'}}>
        <StyledText16 style={[contentStyle.bold]}>
          Criteria {bigCardCount.toUpperCase()}
        </StyledText16>
      </StyledRow>
      {renderCards()}
      <StyledTouchableRow
        style={{width: '90%', marginTop: 5, marginBottom: 10}}
        onPress={handleAddSymptomPress}>
        <StyledText16 style={[contentStyle.bold, {color: '#959595'}]}>
          Add Symptom
        </StyledText16>
      </StyledTouchableRow>
    </>
  );
}

export default CardDiagnoseBig;
