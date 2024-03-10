import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { WorkoutContext, MetricContext } from './components/WorkoutContext';
import { useState } from 'react';
import { Style, Theme } from './Styles/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import AddWorkoutScreen from './components/AddWorkoutScreen';


const Tab = createBottomTabNavigator();

export default function App() {

  const [workouts, setWorkouts] = useState([
    {workoutType: 'Cycling', workoutDuration: 200, workoutDistance: 100, workoutDate: '2024-10-02'},
    {workoutType: 'Running', workoutDuration: 300, workoutDistance: 42, workoutDate: '2024-12-02'},
    {workoutType: 'Cycling', workoutDuration: 360, workoutDistance: 150, workoutDate: '2024-16-02'},]);
  const [metric, setMetric] = useState('km');

  return (
    <PaperProvider theme={Theme}>
      <WorkoutContext.Provider value={{workouts, setWorkouts}}>
      <MetricContext.Provider value={{metric, setMetric}}>
        <NavigationContainer>
          <Tab.Navigator
          sceneContainerStyle={{backgroundColor: 'transparent'}}
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'AddWorkout') {
                iconName = focused ? 'plus-box' : 'plus-box-outline';
                color = focused ? '#D8EDFF' : '#E790C2';  
              } else if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
                color = focused ? '#D8EDFF' : '#E790C2';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'cog' : 'cog-outline';
                color = focused ? '#D8EDFF' : '#E790C2';
              }
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
          })
          }
          >
            <Tab.Screen name="AddWorkout" component={AddWorkoutScreen} 
              options={Style.optionsTabBarHeader}/>
            <Tab.Screen name="Home" component={HomeScreen} 
              options={Style.optionsTabBarHeader}/>
            <Tab.Screen name="Settings" component={SettingsScreen} 
              options={Style.optionsTabBarHeader}/>
          </Tab.Navigator>
        </NavigationContainer>
      </MetricContext.Provider>
      </WorkoutContext.Provider>
    </PaperProvider>
    
  );
}






