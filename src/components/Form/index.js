import React from "react";
import { TextInput, View, Text, Button } from "react-native";
import ResultImc from "../ResultImc";

export default function Form () {
    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput 
                    placeholder="ex. 1.75"
                    keyboardType="numeric">
                </TextInput>
                <Text>Peso</Text>
                <TextInput 
                    placeholder="ex. 75.0"
                    keyboardType="numeric">
                </TextInput>
                <Button title="CALCULAR IMC"/>
            </View>
            <ResultImc messageResultImc={ messageImc } ResultImc={ Imc }/>
        </View>
    );

}