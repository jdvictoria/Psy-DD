import React from 'react-native';

import {
  contentText,
  StyledText16,
  StyledText20,
} from '../../../styles/form-text';

import {DiagnoseResultCard} from '../../../styles/form-container';

// @ts-ignore
function CardDiagnoseResult({
  isDarkMode,
  result,
  severity,
  duration,
  specification,
  showResult,
}) {
  const contentStyle = contentText(isDarkMode);

  let severe;
  let string;
  let code;

  if (severity === 0 || severity === 4 || severity === 7) {
    severe = 'Mild ';
  } else if (severity === 1 || severity === 5 || severity === 8) {
    severe = 'Moderate ';
  } else if (severity === 2 || severity === 6 || severity === 9) {
    severe = 'Severe ';
  } else if (severity === 3) {
    severe = 'Extreme ';
  } else {
    severe = '';
  }

  if (duration === 0) {
    string = 'Brief ';
  } else if (duration === 2) {
    string = 'Single ';
  } else if (duration === 3 || duration === 6) {
    string = 'Recurrent ';
  } else if (duration === 4) {
    string = 'Episodic ';
  } else if (duration === 7) {
    string = 'Acute ';
  } else if (duration === 8) {
    string = 'Subacute ';
  } else if (duration === 5 || duration === 9) {
    string = 'Persistent ';
  } else if (duration === 10) {
    string = '(NT1) ';
  } else if (duration === 11) {
    string = '(NT2) ';
  } else {
    string = '';
  }

  if (specification >= 2 && specification <= 8) {
    code = ' (F44.4)';
  } else if (specification === 9) {
    code = ' (F44.5)';
  } else if (specification >= 10 && specification <= 13) {
    code = ' (F44.6)';
  } else if (specification === 14) {
    code = ' (F44.7)';
  } else if (specification === 15) {
    code = ' by Self';
  } else if (specification === 16) {
    code = ' by Proxy';
  } else if (specification === 17 || specification === 19) {
    code = ' (w/ Medical Condition)';
  } else if (specification === 18 || specification === 20) {
    code = ' (w/ Mental Disorder Condition)';
  } else if (specification === 21) {
    code = ' (w/ Another Sleep Disorder)';
  } else if (specification === 22) {
    code = ' (G47.411)';
  } else if (specification === 23) {
    code = ' (G47.419)';
  } else if (specification === 24) {
    code = ' (G47.421)';
  } else if (specification === 25) {
    code = ' (G47.429)';
  } else {
    code = '';
  }

  return (
    <>
      <StyledText16 style={contentStyle.bold}>Result:</StyledText16>
      <DiagnoseResultCard
        style={{
          backgroundColor: isDarkMode ? '#1A2230' : '#FFFFFF',
          padding: 10,
        }}>
        {showResult && (
          <StyledText20 style={contentStyle.bold}>
            {severe + string + result + ' ' + code}
          </StyledText20>
        )}
      </DiagnoseResultCard>
    </>
  );
}

export default CardDiagnoseResult;
