import React from 'react-native';

import {
  contentText,
  StyledText16,
  StyledText20,
} from '../../../styles/form-text';

import {DiagnoseResultCard} from '../../../styles/form-container';

function CardDiagnoseResult({
  isDarkMode,
  result,
  severity,
  duration,
  specification,
  showResult,
}: any) {
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
  } else if (severity === 25) {
    severe = '(F10.182) ';
  } else if (severity === 26) {
    severe = '(F10.282) ';
  } else if (severity === 27) {
    severe = '(F10.982) ';
  } else if (severity === 28) {
    severe = '(F15.982) ';
  } else if (severity === 29) {
    severe = '(F12.188) ';
  } else if (severity === 30) {
    severe = '(F12.288) ';
  } else if (severity === 31) {
    severe = '(F12.988) ';
  } else if (severity === 32) {
    severe = '(F11.182) ';
  } else if (severity === 33) {
    severe = '(F11.282) ';
  } else if (severity === 34) {
    severe = '(F11.982) ';
  } else if (severity === 35) {
    severe = '(F13.182) ';
  } else if (severity === 36) {
    severe = '(F13.282) ';
  } else if (severity === 37) {
    severe = '(F13.982) ';
  } else if (severity === 38) {
    severe = '(F15.182) ';
  } else if (severity === 39) {
    severe = '(F15.282) ';
  } else if (severity === 40) {
    severe = '(F15.982) ';
  } else if (severity === 41) {
    severe = '(F14.182) ';
  } else if (severity === 42) {
    severe = '(F14.282) ';
  } else if (severity === 43) {
    severe = '(F14.982) ';
  } else if (severity === 44) {
    severe = '(F14.282) ';
  } else if (severity === 45) {
    severe = '(F19.182) ';
  } else if (severity === 46) {
    severe = '(F19.282) ';
  } else if (severity === 47) {
    severe = '(F14.982) ';
  } else if (severity === 48) {
    severe = '(F10.181) ';
  } else if (severity === 49) {
    severe = '(F10.281) ';
  } else if (severity === 50) {
    severe = '(F10.981) ';
  } else if (severity === 51) {
    severe = '(F11.181) ';
  } else if (severity === 52) {
    severe = '(F11.281) ';
  } else if (severity === 53) {
    severe = '(F11.981) ';
  } else if (severity === 54) {
    severe = '(F13.181) ';
  } else if (severity === 55) {
    severe = '(F13.281) ';
  } else if (severity === 56) {
    severe = '(F13.981) ';
  } else if (severity === 57) {
    severe = '(F15.181) ';
  } else if (severity === 58) {
    severe = '(F15.281) ';
  } else if (severity === 59) {
    severe = '(F15.981) ';
  } else if (severity === 60) {
    severe = '(F14.181) ';
  } else if (severity === 61) {
    severe = '(F14.281) ';
  } else if (severity === 62) {
    severe = '(F14.981) ';
  } else if (severity === 63) {
    severe = '(F19.181) ';
  } else if (severity === 64) {
    severe = '(F19.281) ';
  } else if (severity === 65) {
    severe = '(F19.981) ';
  } else if (severity === 66) {
    severe = '(Erotomanic type) ';
  } else if (severity === 67) {
    severe = '(Grandiose type) ';
  } else if (severity === 68) {
    severe = '(Jealous type) ';
  } else if (severity === 69) {
    severe = '(Persecutory type) ';
  } else if (severity === 70) {
    severe = '(Somatic type) ';
  } else if (severity === 71) {
    severe = '(Mixed type) ';
  } else if (severity === 72) {
    severe = '(Unspecified type) ';
  } else if (severity === 73) {
    severe = '(F25.0 Bipolar type) ';
  } else if (severity === 74) {
    severe = '(F25.1 Depressive type) ';
  } else if (severity === 75) {
    severe = '(F06.2 with delusions) ';
  } else if (severity === 76) {
    severe = '(F06.0 with hallucinations: ) ';
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
  } else if (duration === 10) {
    time = 'Lifelong ';
  } else if (duration === 11) {
    time = 'Acquired ';
  } else if (duration === 12) {
    time = 'Generalized ';
  } else if (duration === 13) {
    time = 'Situational ';
  } else if (duration === 14) {
    time = 'First episode, currently in acute episode ';
  } else if (duration === 15) {
    time = 'First episode, currently in partial remission ';
  } else if (duration === 16) {
    time = 'First episode, currently in full remission ';
  } else if (duration === 17) {
    time = 'First episode, currently in full remission ';
  } else if (duration === 18) {
    time = 'First episode, currently in full remission ';
  } else if (duration === 19) {
    time = 'First episode, currently in full remission ';
  } else if (duration === 20) {
    time = 'Continuous ';
  } else if (duration === 21) {
    time = 'Unspecified ';
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
  } else if (specification === 11) {
    specs = ' (During sleep onset)';
  } else if (specification === 12) {
    specs = ' (Insomnia Type)';
  } else if (specification === 13) {
    specs = ' (Daytime sleepiness type)';
  } else if (specification === 14) {
    specs = ' (Parasomnia type)';
  } else if (specification === 15) {
    specs = ' (Mixed type)';
  } else if (specification === 16) {
    specs = ' (With onset during intoxication)';
  } else if (specification === 17) {
    specs = ' (With onset during withdrawal)';
  } else if (specification === 18) {
    specs = ' (With onset after medication use)';
  } else if (specification === 19) {
    specs = ' (With Bizarre Content)';
  } else if (specification === 20) {
    specs = ' (With marked stressor(s))';
  } else if (specification === 21) {
    specs = ' (Without marked stressor(s))';
  } else if (specification === 22) {
    specs = ' (With peripartum onset)';
  } else if (specification === 23) {
    specs = ' (With catatonia)';
  } else if (specification === 24) {
    specs = ' (With good prognostic features)';
  } else if (specification === 25) {
    specs = ' (Without good prognostic features)';
  } else if (specification === 26) {
    specs = ' (Persistent auditory hallucinations)';
  } else if (specification === 27) {
    specs = ' (Delusions with significant overlapping mood episodes)';
  } else if (specification === 28) {
    specs = ' (Attenuated psychosis syndrome)';
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
