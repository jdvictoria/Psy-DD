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

  if (
    severity === 0 ||
    severity === 4 ||
    severity === 7 ||
    severity === 10 ||
    severity === 13 ||
    severity === 39 ||
    severity === 60 ||
    severity === 63 ||
    severity === 66
  ) {
    severe = 'Mild ';
  } else if (
    severity === 1 ||
    severity === 5 ||
    severity === 8 ||
    severity === 11 ||
    severity === 14 ||
    severity === 40 ||
    severity === 61 ||
    severity === 64 ||
    severity === 67
  ) {
    severe = 'Moderate ';
  } else if (
    severity === 2 ||
    severity === 6 ||
    severity === 9 ||
    severity === 12 ||
    severity === 15 ||
    severity === 41 ||
    severity === 62 ||
    severity === 65 ||
    severity === 68
  ) {
    severe = 'Severe ';
  } else if (severity === 3) {
    severe = 'Extreme ';
  } else if (severity === 16) {
    severe = '(F10.182) ';
  } else if (severity === 17) {
    severe = '(F10.282) ';
  } else if (severity === 19) {
    severe = '(F15.982) ';
  } else if (severity === 20) {
    severe = '(F12.188) ';
  } else if (severity === 21) {
    severe = '(F12.288) ';
  } else if (severity === 22) {
    severe = '(F12.988) ';
  } else if (severity === 23) {
    severe = '(F11.182) ';
  } else if (severity === 24) {
    severe = '(F11.282) ';
  } else if (severity === 25) {
    severe = '(F11.982) ';
  } else if (severity === 26) {
    severe = '(F13.182) ';
  } else if (severity === 27) {
    severe = '(F13.282) ';
  } else if (severity === 28) {
    severe = '(F13.982) ';
  } else if (severity === 29) {
    severe = '(F15.182) ';
  } else if (severity === 30) {
    severe = '(F15.282) ';
  } else if (severity === 31) {
    severe = '(F15.982) ';
  } else if (severity === 32) {
    severe = '(F14.182) ';
  } else if (severity === 33) {
    severe = '(F14.282) ';
  } else if (severity === 34) {
    severe = '(F14.982) ';
  } else if (severity === 35) {
    severe = '(F17.208) ';
  } else if (severity === 36) {
    severe = '(F19.182) ';
  } else if (severity === 37) {
    severe = '(F19.282) ';
  } else if (severity === 38) {
    severe = '(F19.982) ';
  } else if (severity === 42) {
    severe = '(F10.181) ';
  } else if (severity === 43) {
    severe = '(F10.281) ';
  } else if (severity === 44) {
    severe = '(F10.981) ';
  } else if (severity === 45) {
    severe = '(F11.181) ';
  } else if (severity === 46) {
    severe = '(F11.281) ';
  } else if (severity === 47) {
    severe = '(F11.981) ';
  } else if (severity === 48) {
    severe = '(F13.181) ';
  } else if (severity === 49) {
    severe = '(F13.281) ';
  } else if (severity === 50) {
    severe = '(F13.981) ';
  } else if (severity === 51) {
    severe = '(F15.181) ';
  } else if (severity === 52) {
    severe = '(F15.281) ';
  } else if (severity === 53) {
    severe = '(F15.981) ';
  } else if (severity === 54) {
    severe = '(F14.181) ';
  } else if (severity === 55) {
    severe = '(F14.281) ';
  } else if (severity === 56) {
    severe = '(F14.981) ';
  } else if (severity === 57) {
    severe = '(F19.181) ';
  } else if (severity === 58) {
    severe = '(F19.281) ';
  } else if (severity === 59) {
    severe = '(F19.981) ';
  } else if (severity === 69 || severity === 71 || severity === 73) {
    severe = '(In a Controlled Environment) ';
  } else if (severity === 70 || severity === 72 || severity === 74) {
    severe = '(In Full remission) ';
  } else if (severity === 75) {
    severe = '(w/ Asphyxiophilia) ';
  } else if (severity === 76) {
    severe = '(Exclusive) ';
  } else if (severity === 77) {
    severe = '(Nonexclusive) ';
  } else {
    severe = '';
  }

  if (duration === 0) {
    string = 'Brief ';
  } else if (duration === 2) {
    string = 'Single ';
  } else if (duration === 3 || duration === 6 || duration === 14) {
    string = 'Recurrent ';
  } else if (duration === 4 || duration === 12) {
    string = 'Episodic ';
  } else if (duration === 7 || duration === 15) {
    string = 'Acute ';
  } else if (duration === 8 || duration === 16) {
    string = 'Subacute ';
  } else if (duration === 18) {
    string = 'Lifelong ';
  } else if (duration === 19) {
    string = 'Acquired ';
  } else if (duration === 20) {
    string = 'Generalized ';
  } else if (duration === 21) {
    string = 'Situational ';
  } else if (duration === 22) {
    string = 'Mild ';
  } else if (duration === 23) {
    string = 'Moderate ';
  } else if (duration === 23) {
    string = 'Severe ';
  } else if (
    duration === 5 ||
    duration === 9 ||
    duration === 13 ||
    duration === 17
  ) {
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
  } else if (
    specification === 17 ||
    specification === 19 ||
    specification === 44
  ) {
    code = ' (w/ Medical Condition)';
  } else if (
    specification === 18 ||
    specification === 20 ||
    specification === 43
  ) {
    code = ' (w/ Mental Disorder Condition)';
  } else if (specification === 21 || specification === 45) {
    code = ' (w/ Another Sleep Disorder)';
  } else if (specification === 45) {
    code = ' (During Sleep Onset)';
  } else if (specification === 22) {
    code = ' (G47.411)';
  } else if (specification === 23) {
    code = ' (G47.419)';
  } else if (specification === 24) {
    code = ' (G47.421)';
  } else if (specification === 25) {
    code = ' (G47.429)';
  } else if (specification === 26) {
    code = ' (G47.31)';
  } else if (specification === 27) {
    code = ' (R06.3)';
  } else if (specification === 28) {
    code = ' (G47.37)';
  } else if (specification === 29) {
    code = ' (G47.34)';
  } else if (specification === 30) {
    code = ' (G47.35)';
  } else if (specification === 31) {
    code = ' (G47.36)';
  } else if (specification === 32) {
    code = ' (Familial)';
  } else if (specification === 33) {
    code = ' (Overlapping with non-24-hour sleep-wake type)';
  } else if (specification === 34) {
    code = ' (G47.21)';
  } else if (specification === 35) {
    code = ' (G47.22)';
  } else if (specification === 36) {
    code = ' (G47.23)';
  } else if (specification === 37) {
    code = ' (G47.24)';
  } else if (specification === 38) {
    code = ' (G47.26)';
  } else if (specification === 39) {
    code = ' (G47.20)';
  } else if (specification === 40) {
    code = ' (F51.3)';
  } else if (specification === 41) {
    code = ' (F51.4)';
  } else if (specification === 46) {
    code = ' (Insomnia type)';
  } else if (specification === 47) {
    code = ' (Daytime sleepiness type)';
  } else if (specification === 48) {
    code = ' (Parasomnia type)';
  } else if (specification === 49) {
    code = ' (Mixed type)';
  } else if (specification === 50 || specification === 53) {
    code = ' (w/ Onset During Intoxication)';
  } else if (specification === 51 || specification === 54) {
    code = ' (w/ Onset During Withdrawal)';
  } else if (specification === 52 || specification === 55) {
    code = ' (w/ Onset After Medication Use)';
  } else if (specification === 56) {
    code = ' (Requiring very substantial support)';
  } else if (specification === 57) {
    code = ' (Requiring substantial support)';
  } else if (specification === 58) {
    code = ' (Requiring support)';
  } else if (specification === 59) {
    code = ' (w/ or w/o accompanying intellectual impairment)';
  } else if (specification === 60) {
    code = ' (w/ or w/o accompanying language impairment)';
  } else if (specification === 61) {
    code =
      ' (Associated with a known genetic or other medical condition or environmental factor)';
  } else if (specification === 62) {
    code =
      ' (Associated with a neurodevelopmental, mental, or behavioral problem)';
  } else if (specification === 63) {
    code = ' (w/ catatonia)';
  } else if (specification === 64) {
    code = ' (F90.2 Combined presentation)';
  } else if (specification === 65) {
    code = ' (F90.0 Predominantly inattentive presentation)';
  } else if (specification === 66) {
    code = ' (F90.1 Predominantly hyperactive/impulsive presentation)';
  } else if (specification === 67) {
    code = ' (In partial remission)';
  } else if (specification === 68) {
    code = ' (F81.0 w/ impairment in reading)';
  } else if (specification === 69) {
    code = ' (F81.81 w/ impairment in written expression)';
  } else if (specification === 70) {
    code = ' (F81.2 w/ impairment in mathematics)';
  } else if (specification === 71) {
    code = ' (Motor tics only)';
  } else if (specification === 72) {
    code = ' (Vocal tics only)';
  } else if (specification === 73) {
    code = ' (Apathetic Type)';
  } else if (specification === 74) {
    code = ' (Paranoid type)';
  } else if (specification === 75) {
    code = ' (Other type)';
  } else if (specification === 76) {
    code = ' (Combined type)';
  } else if (specification === 77) {
    code = ' (Sexually aroused by exposing genitals to prepubertal children)';
  } else if (specification === 78) {
    code =
      ' (Sexually aroused by exposing genitals to physically mature individuals)';
  } else if (specification === 79) {
    code =
      ' (Sexually aroused by exposing genitals to prepubertal children and to physically mature individuals)';
  } else if (specification === 80) {
    code = ' (Sexually attracted to males)';
  } else if (specification === 81) {
    code = ' (Sexually attracted to females)';
  } else if (specification === 82) {
    code = ' (Sexually attracted to both)';
  } else if (specification === 83) {
    code = ' (Limited to incest)';
  } else if (specification === 84) {
    code = ' (Body Parts)';
  } else if (specification === 85) {
    code = ' (Non Living Objects)';
  } else if (specification === 86) {
    code = ' (Other)';
  } else if (specification === 87) {
    code = ' (w/ Fetishism)';
  } else if (specification === 88) {
    code = ' (w/ Autogynephilia)';
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
            {severe + string + result + code}
          </StyledText20>
        )}
      </DiagnoseResultCard>
    </>
  );
}

export default CardDiagnoseResult;
