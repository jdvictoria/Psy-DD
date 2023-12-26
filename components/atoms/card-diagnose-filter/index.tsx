import React from 'react-native';

import {DiagnoseResultCard} from '../../../styles/form-container';

import DropdownComponent from "../dropdown-diagnose";

// @ts-ignore
function CardDiagnoseFilter({isDarkMode, setFilter}) {
    return (
        <DiagnoseResultCard
            style={{backgroundColor: isDarkMode ? '#1A2230' : '#FFFFFF', height: 80, paddingBottom: 5}}>
            <DropdownComponent isDarkMode={isDarkMode} label={'Category'} />
        </DiagnoseResultCard>
    )
}

export default CardDiagnoseFilter;
