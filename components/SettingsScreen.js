import { Text } from 'react-native-paper';
import { View } from 'react-native';
import React, { useContext } from 'react';
import { MetricContext } from './WorkoutContext';
import { Style } from '../Styles/styles';
import RadioButton from './RadioButton';

export default function SettingsScreen() {

const { metric, setMetric } = useContext(MetricContext);

const options = [
  {label: 'Kilometers', value: 'km'},
  {label: 'Miles', value: 'mi'}
];

  return (
    
    <View style={Style.settings}>
      <View style={Style.settingsView}>
        <Text style={Style.settingsText}>Choose metric system</Text>
        <RadioButton options={options} onPress={setMetric} />
      </View>
    </View>
    
  
  );
} 
   
  