import React from 'react';
import {View, Text} from 'react-native';

export default function DetailScreen(props) {
  const {data} = props.route.params;
  return (
    <View>
      <Text> {JSON.stringify(data)} </Text>
    </View>
  );
}
