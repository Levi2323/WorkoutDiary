import { useContext, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Card, Text } from "react-native-paper";
import { WorkoutContext} from './WorkoutContext';
import { MetricContext } from './WorkoutContext';
import { Style } from '../Styles/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export default function HomeScreen({}) {

    const { workouts, setWorkouts } = useContext(WorkoutContext);
    const { metric, setMetric } = useContext(MetricContext);
    const [ sumRun, setsumRun ] = useState();
    const [ sumCycle, setsumCycle ] = useState();
    const [ sumSwim, setsumSwim ] = useState();

    function sumWorkouts() {
        let run = 0;
        let cycle = 0;
        let swim = 0;
        for (let i = 0; i < workouts.length; i++) {
            if (workouts[i].workoutType === "Running") {
                if (metric === "mi") {
                    run += parseFloat(workouts[i].workoutDistance) * 0.621371;
                }
                else {
                    run += parseFloat(workouts[i].workoutDistance);
                }
            }
            else if (workouts[i].workoutType === "Cycling") {
                if (metric === "mi") {
                    cycle += parseFloat(workouts[i].workoutDistance) * 0.621371;
                }
                else {
                    cycle += parseFloat(workouts[i].workoutDistance);
                }
            }
            else if (workouts[i].workoutType === "Swimming") {
                if (metric === "mi") {
                    swim += parseFloat(workouts[i].workoutDistance) * 0.621371;
                }
                else {
                    swim += parseFloat(workouts[i].workoutDistance);
            }
        }
        setsumRun(run.toFixed(2));
        setsumCycle(cycle.toFixed(2));
        setsumSwim(swim.toFixed(2));
    }
    }

    return (
        useEffect(() => {
            sumWorkouts();
        }, [workouts, metric]),

        <View style={Style.backgroundColor}>
            <View style= {Style.totals}>
                <View style= {Style.sumView}>
                    <MaterialCommunityIcons name="run-fast" size={24} color="black" />
                    <Text>  {sumRun} {metric}</Text>
                </View>
                <View style= {Style.sumView}>
                    <MaterialCommunityIcons name="bike" size={24} color="black" />
                    <Text>  {sumCycle} {metric}</Text>
                </View>
                <View
                    style= {Style.sumView}>
                    <MaterialCommunityIcons name="swim" size={24} color="black" />
                    <Text>  {sumSwim} {metric}</Text>
                </View>
            </View>

            <FlatList
                data = {workouts}
                renderItem={({item}) => <Item item={item}/>}
            />
        </View>
        
    );
}

function Item({ item }) {

    const { metric, setMetric } = useContext(MetricContext);

    function chooseIcon(workoutType) {
        if (workoutType === "Running") {
            return "run-fast";
        }
        else if (workoutType === "Cycling") {
            return "bike";
        }
        else if (workoutType === "Swimming") {
            return "swim";
        }
    }

    function checkMetricDistance(distance) {
        if (metric === "mi") {
            return (distance * 0.621371).toFixed(2);
        }
        else {
            return distance;
        }
    }

    return (
    <View style={Style.backgroundColor}>
        <Card style= {Style.card} >
            <Card.Title 
                title={item.workoutType + ' on ' + item.workoutDate} 
                style={Style.cardText}
                left={() => <MaterialCommunityIcons name={chooseIcon(item.workoutType)} size={24} color="#1B2533" />}/>
            <Card.Content>
                <Text style={Style.cardText}> Distance:                 {checkMetricDistance(item.workoutDistance)} {metric}</Text>
                <Text style={Style.cardText}> Duration:                 {item.workoutDuration} min</Text>
                <Text style={Style.cardText}> Average Speed:     {(checkMetricDistance(item.workoutDistance) / (item.workoutDuration / 60)).toFixed(2)} {metric}/h</Text>
            </Card.Content>
        </Card>
    </View>
    );
}