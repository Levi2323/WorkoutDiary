import { useState, useContext, useEffect } from 'react';
import { View, SafeAreaView, Pressable, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { Button, Text, SegmentedButtons, Modal, TextInput } from 'react-native-paper';
import { WorkoutContext, MetricContext } from './WorkoutContext';
import { Calendar} from 'react-native-calendars';
import { Style} from '../Styles/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export default function AddWorkoutScreen() {

    const [workoutType, setWorkoutType] = useState('');
    const [workoutDuration, setWorkoutDuration] = useState('');
    const [workoutDistance, setWorkoutDistance] = useState('');
    const [workoutDate, setWorkoutDate] = useState('');
    const [dateStatus, setDateStatus] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [distanceMiToKm, setDistanceMiToKm] = useState(0);

    const { workouts, setWorkouts } = useContext(WorkoutContext);
    const { metric, setMetric } = useContext(MetricContext);

    const distanceMetricLabel = `Workout Distance in ${metric}`;

    useEffect(() => {
        if (metric === 'mi') {
            setDistanceMiToKm((parseFloat(workoutDistance) * 1.60934).toFixed(2));
        }
        else {
            setDistanceMiToKm(parseFloat(workoutDistance));
        }
    }, [workoutDistance, metric]);

    useEffect(() => {
        workoutStatus();
    }, [workoutDate]);

    

    function addWorkout() {
        
        if (workoutType === '' || workoutType === null) {
            Alert.alert('Please select a workout type');
        }
        else if (workoutDistance === '' || isNaN(workoutDistance)) {
            Alert.alert('Please enter a workout distance');
        }
        else if (workoutDistance <= 0) {
            Alert.alert('Please enter a valid workout distance');
        }
        else if (workoutDuration === '' || isNaN(workoutDuration)) {
            Alert.alert('Please enter a workout duration');
        }
        else if (workoutDuration <= 0) {
            Alert.alert('Please enter a valid workout duration');
        }
        else if (workoutDate === '' || workoutDate === undefined || workoutDate === null) {
            Alert.alert('Please select a workout date');
        }
        else {
            const modifiedWorkouts = [...workouts, {workoutType, workoutDuration, workoutDistance: distanceMiToKm, workoutDate}];
            setWorkouts(modifiedWorkouts);
            setWorkoutDistance(parseFloat(''));
            setWorkoutDuration(parseFloat(''));
            setWorkoutDate('');
            workoutStatus();
        }
     }

    function workoutStatus() {
        
        if (workoutDate === '') {
            setDateStatus ('Select Date');
        }
        else {
            setDateStatus(workoutDate);
        }
    }

    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accsessible={false}>
        <View style={Style.backgroundColor}>
            <View style={Style.addworkoutScreenView}>
                    <SafeAreaView>
                        <SegmentedButtons
                            checkedColor='blue'
                            value={workoutType}
                            onValueChange={setWorkoutType}
                            buttons={[
                            {
                                value: 'Running',
                                label: 'Running',
                            },
                            {
                                value: 'Cycling',
                                label: 'Cycling',
                            },
                            {
                                value: 'Swimming',
                                label: 'Swimming',
                            },
                            ]}
                        />
                    </SafeAreaView>
                <TextInput
                    style= {Style.textInput}
                    mode='outlined'
                    value={workoutDistance}
                    onChangeText={setWorkoutDistance}
                    label= {distanceMetricLabel}
                    inputMode='numeric'
                    
                />
                <TextInput
                    style= {Style.textInput}
                    mode='outlined'
                    value={workoutDuration}
                    onChangeText={setWorkoutDuration}
                    label={'Workout Duration in Minutes'}
                    inputMode='numeric'
                    
                    
                />
                <Pressable onPress={() => setModalVisible(true)} style={Style.pressable}> 
                    <MaterialCommunityIcons name="calendar" size={24} color="black" />
                    <Text style={Style.cardText}>  {dateStatus}</Text> 
                </Pressable>

                <Button mode= "contained" onPress={addWorkout}> Add Workout </Button>

                <Modal
                    style={Style.modal}
                    visible={modalVisible}
                    onDismiss={() => setModalVisible(false)}
                    animationType='none'
                    >
                    <Calendar
                        onDayPress={(day) => {setWorkoutDate(day.dateString)}}
                        markedDates={{
                        [workoutDate]: {selected: true, selectedColor: 'blue'}
                        }}
                    />
                    <Button mode= "contained" onPress={() => setModalVisible(false)} style={Style.modalButton}> Select Date </Button>   
                </Modal>
            </View>
        </View>
    </TouchableWithoutFeedback>
        );

}

