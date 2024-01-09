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
  let time;
  let specs;

  if (severity === 0) {
    severe = '(F44.4) ';
  } else if (severity === 1) {
    severe = '(F44.5) ';
  } else if (severity === 2) {
    severe = '(F44.6) ';
  } else if (severity === 3) {
    severe = '(F44.7) ';
  } else if (severity === 4) {
    severe = 'Mild ';
  } else if (severity === 5) {
    severe = 'Moderate ';
  } else if (severity === 6) {
    severe = 'Severe ';
  } else if (severity === 7) {
    severe = 'Extreme ';
  } else {
    severe = '';
  }

  if (duration === 0) {
    time = 'Acute ';
  } else if (duration === 1) {
    time = 'Persistent ';
  } else {
    time = '';
  }

  if (specification === 0) {
    specs = ' (Without psychological stressor)';
  } else if (specification === 1) {
    specs = ' (With psychological stressor)';
  } else if (specification === 2) {
    specs = ' (By self)';
  } else if (specification === 3) {
    specs = ' (By proxy)';
  } else {
    specs = '';
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
            {severe + time + result + specs}
          </StyledText20>
        )}
      </DiagnoseResultCard>
    </>
  );
}

export default CardDiagnoseResult;
