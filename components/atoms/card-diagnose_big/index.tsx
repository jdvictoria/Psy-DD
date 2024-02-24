import React, {useState} from 'react';

import {
  DiagnoseSymptomCard,
  StyledRow,
  StyledTouchableRow,
} from '../../../styles/form-container';
import {contentText, StyledText16} from '../../../styles/form-text';

import DropdownSymptoms from '../dropdown-symptoms';

import {traumaSymptoms} from '../../../utils/a-trauma';
import {somaticSymptoms} from '../../../utils/b-somatic';
import {sleepSymptoms} from '../../../utils/c-sleep';
import {sexualSymptoms} from '../../../utils/d-sexual';
import {schizophreniaSymptoms} from '../../../utils/e-schizophrenia';
import {personalitySymptoms} from '../../../utils/f-personality';
import {paraphilicSymptoms} from '../../../utils/g-paraphilic';
import {obsessiveSymptoms} from '../../../utils/obsessive';
import {neurodevelopmentalSymptoms} from '../../../utils/neurodevelopmental';
import {substanceSymptoms} from '../../../utils/substance';

// @ts-ignore
function CardDiagnoseBig({isDarkMode, filter, setNumbers, bigCardCount}) {
  const contentStyle = contentText(isDarkMode);

  const [additionalCardCount, setAdditionalCardCount] = useState(1);

  let symptomData:
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
            <DropdownSymptoms
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
