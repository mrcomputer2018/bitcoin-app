import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#fff",
        alignItems: "center",
        marginTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    Form: {
        width: "100%",
        // Ajuste automatico da altura
        height: "auto",
        marginTop: 30,
        padding: 10,
    },
    FormLabel : {
        color: "#000",
        fontSize: 18,
        paddingLeft: 20, 
    },
    FormInput : {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        fontSize: 16,
        paddingLeft: 10, 
    },
    ButtonCaculator : {
        borderRadius: 50,
        alignItems:"center",
        justifyContent:"center",
        width: "90%",
        backgroundColor:"#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
        marginBottom: 30
    },
    TextButtonCaculator : {
        fontSize: 20,
        color: "#fff",
    },
});

export default styles