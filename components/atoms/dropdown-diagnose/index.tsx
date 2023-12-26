import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Dropdown} from 'react-native-element-dropdown';

import {drugData, distressData} from '../../../utils/dsmData';

const dummyData = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
];

// @ts-ignore
function DropdownComponent({isDarkMode, label}) {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(true);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text
          style={[
            styles.label,
            {
              backgroundColor: isDarkMode ? '#1A2230' : '#FFFFFF',
              color: isDarkMode ? '#FFFFFF' : '#1A2230',
            },
          ]}>
          {label}
        </Text>
      );
    }
    return null;
  };

  let data;

  if (label === 'Drug Influenced?') {
    data = distressData;
  } else if (label === 'Causes Distress?') {
    data = distressData;
  } else {
    data = dummyData;
  }

  return (
    <View
      style={[
        styles.container,
        {width: label === 'Symptom' || label === 'Category' ? '95%' : '47.5%'},
      ]}>
      {renderLabel()}
      <Dropdown
        data={data}
        value={value}
        search={label === 'Symptom' || label === 'Category'}
        maxHeight={300}
        labelField="label"
        valueField="value"
        searchPlaceholder="Search..."
        inputSearchStyle={styles.inputSearchStyle}
        placeholderStyle={[
          styles.placeholderStyle,
          {
            color: isDarkMode ? '#FFFFFF' : '#041325',
          },
        ]}
        selectedTextStyle={[
          styles.selectedTextStyle,
          {
            color: isDarkMode ? '#FFFFFF' : '#041325',
          },
        ]}
        style={[
          styles.dropdown,
          {borderColor: isDarkMode ? '#FFFFFF' : '#041325'},
        ]}
        placeholder={!isFocus ? 'Select item' : '...'}
        // iconStyle={styles.iconStyle}
        // onFocus={() => setIsFocus(true)}
        // onBlur={() => setIsFocus(false)}
        onChange={item => {
          // @ts-ignore
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
}

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 8,
    paddingLeft: 5,
    paddingRight: 5,
  },
  dropdown: {
    height: 52.5,
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 10,
    // backgroundColor: 'white',
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    top: 8,
    left: 16,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: 'white',
    fontFamily: 'Inter-Medium',
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
