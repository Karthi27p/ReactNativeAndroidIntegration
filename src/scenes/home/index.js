/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Switch} from 'react-native';
import {callApi} from '../../service';
import {bimonthlyConsumption} from '../../stub';

export default function HomeScreen(props) {
  const {navigation} = props;
  const [post, setPost] = useState(false);
  const [status, setStatus] = useState('');
  const [totalResults, setTotalResults] = useState('');
  const [type, setType] = useState('');
  const [cutOffLimit, setCutOffLimit] = useState('');

  const toggleSwitch = () => {
    setPost(!post);
  };

  const buttonPressed = () => {
    const data = {
      status: status,
      totalResults: totalResults,
      type: type,
      cutOffLimit: cutOffLimit,
      biMonthlyConsumption: bimonthlyConsumption,
    };
    console.log('REQUEST DATA', data);
    callApi(
      post ? data : undefined,
      post ? 'POST' : 'GET',
      'http://localhost:3000/electricitytarrifs',
    )
      .then((response) => {
        console.log('RESPONSE', JSON.stringify(response));
        navigation.navigate('Detail', {data: response});
      })
      .catch((error) => {
        console.log('ERROR', error);
        navigation.navigate('Detail', {data: error});
      });
  };

  return (
    <View style={{flex: 1, marginTop: 20, alignItems: 'center'}}>
      <Text>Electricity Tarrif Entries</Text>
      <View
        style={{
          flex: 0.1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <Text> POST CALL </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={post ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={post}
        />
      </View>
      {post && (
        <View
          style={{marginTop: 20, justifyContent: 'space-between', flex: 0.3}}>
          <TextInput
            name="status"
            value={status}
            placeholder="status"
            onChangeText={(value) => {
              setStatus(value);
            }}
          />
          <TextInput
            name="totalResults"
            value={totalResults}
            placeholder="totalResults"
            onChangeText={(value) => {
              setTotalResults(value);
            }}
          />
          <TextInput
            name="type"
            value={type}
            placeholder="type"
            onChangeText={(value) => {
              setType(value);
            }}
          />
          <TextInput
            name="cutOffLimit"
            value={cutOffLimit}
            placeholder="cutOffLimit"
            onChangeText={(value) => {
              setCutOffLimit(value);
            }}
          />
          {console.log('VALUES', status, totalResults, type, cutOffLimit)}
        </View>
      )}
      <TouchableOpacity
        onPress={buttonPressed}
        style={{
          backgroundColor: 'lightblue',
          marginTop: 40,
          width: 150,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Hit {post ? 'Post' : 'Get'} Api call</Text>
      </TouchableOpacity>
    </View>
  );
}
