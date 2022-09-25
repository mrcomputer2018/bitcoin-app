import React, { useState } from "react";
import { TextInput, View, Text, Button } from "react-native";
import ResultImc from "../ResultImc";

export default function Form () {

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha com o peso e a altura");
    const [imc, setImc] = useState(null);
    // Deixando a texto do botao dinamico
    const [textButton, setTextButton] = useState("Calcular");

    // Calculo do IMC
    function imcCalculator () {
        // TOFIXED - resultado com 2 casas decimais
        return setImc((weight/(height * height)).toFixed(2));
    }

    // Fuuncao de validacao
    function validationImc() {
        if (weight != null && height!= null) {
            // TODO : TERMINAR DE FAZER
        }
    }

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
            <ResultImc messageResultImc={ messageImc } ResultImc={ imc }/>
        </View>
    );

}