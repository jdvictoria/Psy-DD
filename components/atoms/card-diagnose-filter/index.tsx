import React from 'react-native';

import {DiagnoseResultCard} from '../../../styles/form-container';

// @ts-ignore
import DropdownComponent from '../dropdown-diagnose';

import {categData} from '../../../utils/categories';

// @ts-ignore
function CardDiagnoseFilter({isDarkMode, setFilter}) {
  return (
    <DiagnoseResultCard
      style={{
        backgroundColor: isDarkMode ? '#1A2230' : '#FFFFFF',
        height: 80,
        paddingBottom: 7.5,
      }}>
      <DropdownComponent
        isDarkMode={isDarkMode}
        data={categData}
        label={'Category'}
        value={null}
        setValue={setFilter}
      />
    </DiagnoseResultCard>
  );
}

export default CardDiagnoseFilter;
