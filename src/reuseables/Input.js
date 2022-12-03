import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({
  bgStyle,
  onChange,
  icon,
  title,
  title2,
  keyboardType,
  secureTextEntry,
  val,
  edit,
  txtStyle,
  multiline, 
  onEndEditing
}) => {
  const [value, setValue] = useState('');

  return (
    <View style={{
      marginHorizontal: 20,
    }}>
      <Text style={{ color: '#000', fontSize: 16 }}>{title}</Text>
      <View
        style={{
          backgroundColor: 'rgba(229, 228, 226, 0.6)',
          borderRadius: 2,
          flexDirection: 'row',
          alignItems: 'center',
          ...bgStyle,
          marginTop: 5
        }}>
        <TextInput
          style={{ flex: 1, fontSize: 15, color: '#000', marginLeft: 15, ...txtStyle, }}
          secureTextEntry={secureTextEntry}
          value={val}
          multiline={multiline}
          placeholder={title2}
          placeholderTextColor={'#BDBCBC'}
          editable={edit}
          keyboardType={keyboardType}
          onEndEditing={onEndEditing}
          onChangeText={txt => handleonTextChange(txt)}
        />

        <View style={{ marginRight: 15 }}>{icon}</View>
      </View>
    </View>
  );

  function handleonTextChange(txt) {
    setValue(txt);
    onChange && onChange(txt);
  }
};

export default Input
