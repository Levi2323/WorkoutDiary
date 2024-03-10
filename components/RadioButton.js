import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Style } from "../Styles/styles";

export default function RadioButton({ options, onPress}) {

    const [value, setValue] = useState(null);

    function handlePress(option){
        setValue(option);
        onPress(option);
    }

    return (
        <>
        {
            options.map((item) => (
                <View key={item.value} style={Style.radioButtonContainer}>
                    <Text style={Style.radioLabel}>{item.label}</Text>
                    <Pressable 
                        style={Style.circle}
                        onPress={() => handlePress(item.value)}
                    >
                        {value === item.value && <View style={Style.checkedCircle} />}
                    </Pressable>
                </View>
            ))
        
        }
        </>
            )
    }