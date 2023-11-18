import React, {Image} from 'react-native';

import {
  DiagnoseSymptomAdd,
  DiagnoseSymptomCard,
} from '../../../styles/form-container';

import {contentText, StyledText20} from '../../../styles/form-text';

// @ts-ignore
function CardDiagnoseBig({isDarkMode}) {
  const contentStyle = contentText(isDarkMode);

  return (
    <DiagnoseSymptomCard
      style={{
        backgroundColor: isDarkMode ? '#041325' : '#FFFFFF',
      }}>
      <DiagnoseSymptomAdd>
        <Image
          style={{
            width: 40,
            height: 40,
            resizeMode: 'contain',
            marginRight: 5,
          }}
          source={
            isDarkMode
              ? require('../../../assets/icons/add-icon_dark.png')
              : require('../../../assets/icons/add-icon.png')
          }
          alt={'Dark Mode'}
        />
        <StyledText20 style={contentStyle.medium}>Add Symptom</StyledText20>
      </DiagnoseSymptomAdd>
    </DiagnoseSymptomCard>
  );
}

export default CardDiagnoseBig;
