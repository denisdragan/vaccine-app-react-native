import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Button({title,theme,language,bgStyle,txtStyle,onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={{backgroundColor:'#CE83FE',marginHorizontal:20,padding:12,borderRadius:2,...bgStyle}}>
      <Text style={{color:'#fff',textAlign:'center',fontWeight:'OpenSans-Medium',fontSize:18,...txtStyle}}>{title}</Text>
    </TouchableOpacity>
  );
}
