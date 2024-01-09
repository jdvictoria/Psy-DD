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
    severe = '(G47.411) ';
  } else if (severity === 8) {
    severe = '(G47.419) ';
  } else if (severity === 9) {
    severe = '(G47.421) ';
  } else if (severity === 10) {
    severe = '(G47.429) ';
  } else if (severity === 11) {
    severe = '(G47.31) ';
  } else if (severity === 12) {
    severe = '(R06.3) ';
  } else if (severity === 13) {
    severe = '(G47.37) ';
  } else if (severity === 14) {
    severe = '(G47.34) ';
  } else if (severity === 15) {
    severe = '(G47.35) ';
  } else if (severity === 16) {
    severe = '(G47.36) ';
  } else if (severity === 17) {
    severe = '(G47.21) ';
  } else if (severity === 18) {
    severe = '(G47.22) ';
  } else if (severity === 19) {
    severe = '(G47.23) ';
  } else if (severity === 20) {
    severe = '(G47.24) ';
  } else if (severity === 21) {
    severe = '(G47.26) ';
  } else if (severity === 22) {
    severe = '(G47.20) ';
  } else if (severity === 23) {
    severe = '(F51.3) ';
  } else if (severity === 24) {
    severe = '(F51.4) ';
  } else {
    severe = '';
  }

  if (duration === 0) {
    time = 'Acute ';
  } else if (duration === 1) {
    time = 'Persistent ';
  } else if (duration === 2) {
    time = 'Mild ';
  } else if (duration === 3) {
    time = 'Moderate ';
  } else if (duration === 4) {
    time = 'Severe ';
  } else if (duration === 5) {
    time = 'Extreme ';
  } else if (duration === 6) {
    time = 'Single ';
  } else if (duration === 7) {
    time = 'Recurrent ';
  } else if (duration === 8) {
    time = 'Episodic ';
  } else if (duration === 9) {
    time = 'Subacute ';
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
  } else if (specification === 4) {
    specs = ' (With medical condition)';
  } else if (specification === 5) {
    specs = ' (With mental disorder)';
  } else if (specification === 6) {
    specs = ' (With another sleep disorder)';
  } else if (specification === 7) {
    specs = ' (NT1)';
  } else if (specification === 8) {
    specs = ' (NT2)';
  } else if (specification === 9) {
    specs = ' (Familial)';
  } else if (specification === 10) {
    specs = ' (Overlapping with non-24-hour sleep-wake type)';
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
