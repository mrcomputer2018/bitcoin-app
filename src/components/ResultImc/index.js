import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function ResultImc (props) {
    return (
        <View  style={ styles.ResultImc }>
           <Text style={ styles.InformationImc } >{ props.messageResultImc }</Text>
           <Text style={ styles.NumberImc } >{ props.resultImc }</Text>
        </View>
    );
}