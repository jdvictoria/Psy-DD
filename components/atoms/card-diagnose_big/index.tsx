import React, {useState} from 'react';

import {DiagnoseSymptomCard, StyledRow, StyledTouchableRow} from '../../../styles/form-container';
import {contentText, StyledText16} from "../../../styles/form-text";

import DropdownComponent from '../dropdown-diagnose';

import {traumaSymptoms} from '../../../utils/trauma';

const dummyData = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
];

// @ts-ignore
function CardDiagnoseBig({isDarkMode, filter, bigCardCount}) {
    const contentStyle = contentText(isDarkMode);

    const [additionalCardCount, setAdditionalCardCount] = useState(1);

    let symptomData: { label: string; value: string; }[] | { label: string; value: number; }[];
    let durationData: { label: string; value: string; }[] | { label: string; value: number; }[];
    let severityData: { label: string; value: string; }[] | { label: string; value: number; }[];
    let drugData: { label: string; value: string; }[] | { label: string; value: number; }[];
    let distressData: { label: string; value: string; }[] | { label: string; value: number; }[];

    if (filter === 'a') {
        symptomData = traumaSymptoms;
        durationData = dummyData;
        severityData = dummyData;
        drugData = dummyData;
        distressData = dummyData;
    } else {
        symptomData = dummyData;
        durationData = dummyData;
        severityData = dummyData;
        drugData = dummyData;
        distressData = dummyData;
    }

    const handleAddSymptomPress = () => {
        setAdditionalCardCount((prevCount) => prevCount + 1);
    };

    const renderCards = () => {
        const additionalCards = [];
        for (let i = 0; i < additionalCardCount; i++) {
            additionalCards.push(
                <DiagnoseSymptomCard
                    key={`additionalCard-${i}`}
                    style={{
                        backgroundColor: isDarkMode ? '#1A2230' : '#FFFFFF',
                        marginTop: 10,
                    }}
                >
                    <StyledRow>
                        <DropdownComponent isDarkMode={isDarkMode} data={symptomData} label={'Symptom/s'} value={null} setValue={null} />
                    </StyledRow>
                    <StyledRow>
                        <DropdownComponent isDarkMode={isDarkMode} data={durationData} label={'Duration'} value={null} setValue={null} />
                        <DropdownComponent isDarkMode={isDarkMode} data={severityData} label={'Severity'} value={null} setValue={null} />
                    </StyledRow>
                    <StyledRow>
                        <DropdownComponent isDarkMode={isDarkMode} data={drugData} label={'Drug Influenced?'} value={null} setValue={null} />
                        <DropdownComponent isDarkMode={isDarkMode} data={distressData} label={'Causes Distress?'} value={null} setValue={null} />
                    </StyledRow>
                </DiagnoseSymptomCard>
            );
        }
        return additionalCards;
    };

  return (
    <>
        <StyledRow style={{justifyContent: 'flex-start', width: '90%'}}>
            <StyledText16 style={[contentStyle.bold]}>Criteria {bigCardCount.toUpperCase()}</StyledText16>
        </StyledRow>
        {renderCards()}
        <StyledTouchableRow style={{width: '90%', marginTop: 5, marginBottom: 10}} onPress={handleAddSymptomPress}>
            <StyledText16 style={[contentStyle.bold, {color: "#959595"}]}>Add Symptom</StyledText16>
        </StyledTouchableRow>
    </>
  );
}

export default CardDiagnoseBig;
