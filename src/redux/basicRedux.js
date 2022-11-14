import { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, Button } from "react-native";
import { createStore } from "redux";





export default function BasicRedux() {
    const reducer = (state = 0, action) => {
        switch (action.type) {
            case "INCREMENT":
                return state + action.payload;
            case "DECREMENT":
                return state - action.payload;
            default:
                return state;
        }
    };
    const store = createStore(reducer);

    store.subscribe(() => {
        console.warn("current data: ", store.getState());
    });


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={{
                    opacity: 0.5,
                    alignSelf: 'center',
                    marginBottom: '5%',
                    color: 'red',
                    fontWeight: 'bold',
                    fontSize: 22,
                    textAlign: 'center'
                }}>DEFAULT DATA: {store.getState()}</Text>

                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.button}
                        title="INCREMENT"
                        onPress={() => {
                            store.dispatch({
                                type: "INCREMENT",
                                payload: 1
                            });
                        }}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.button}
                        title="DECREMENT"
                        onPress={() => {
                            return store.dispatch({
                                type: "DECREMENT",
                                payload: 1
                            });
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    marginButton: {
        marginTop: 20,
    },

    container: {
        flex: 1,
        padding: '5%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        fontSize: 16,
        width: '100%',
        padding: 10,
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        borderRadius: 5,
        borderColor: '#f4511e',
    },

    button: {
    },

    text: {
        opacity: 0.5,
        alignSelf: 'flex-start',
        marginBottom: '5%',
    },

    buttonContainer: {
        marginTop: '10%',
        width: 120,
        height: 40
    },

    input: {
        fontSize: 16,
        width: '100%',
        padding: 10,
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        borderRadius: 5,
        borderColor: '#f4511e',
    },

    button: {
    },

    text: {
        opacity: 0.5,
        alignSelf: 'flex-start',
        marginBottom: '5%',
    },
    buttonContainer: {
        marginTop: '10%',
        width: 120,
        height: 40
    }

});
