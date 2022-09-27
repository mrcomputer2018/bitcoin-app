import React, { useState } from "react";
import { TextInput, View, Text, Button, TouchableOpacity  } from "react-native";
import ResultImc from "../ResultImc";
import styles from "./style";

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
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu IMC é igual:");
            setTextButton("Calcular novamente");
            return;
        }

        setImc(null);
        setTextButton("Calcular");
        setMessageImc("Preencha o peso e a altra!!!");
    }

    return (
        <View style={ styles.formContext }>
            <View style={ styles.Form }>
                <Text style={ styles.FormLabel }>Altura</Text>
                <TextInput  style={ styles.FormInput }
                    onChangeText={ setHeight }
                    value={ height }
                    placeholder="ex. 1.75"
                    keyboardType="numeric">
                </TextInput>
                <Text style={ styles.FormLabel }>Peso</Text>
                <TextInput style={ styles.FormInput }
                    onChangeText={ setWeight }
                    value={ weight } 
                    placeholder="ex. 75.0"
                    keyboardType="numeric">
                </TextInput>
                <TouchableOpacity style={ styles.ButtonCaculator }
                    onPress={() => { validationImc()} }>
                    <Text style={ styles.TextButtonCaculator } >
                        { textButton }
                    </Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={ messageImc } resultImc={ imc }/>
        </View>
    );

}