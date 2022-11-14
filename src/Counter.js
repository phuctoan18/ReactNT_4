import { useState } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { setNull, updateData } from './redux/slices/counterSlice';

// import { SafeAreaView } from 'react-native-safe-area-context';


export function Counter() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    const clearForm = () => {
        setName(() => {
            return ''
        })

        setEmail(() => {
            return ''
        })

        setPassword(() => {
            return ''
        })
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={{
                    opacity: 0.5,
                    alignSelf: 'flex-start',
                    marginBottom: '5%',
                    color: 'red',
                    fontWeight: 'bold',
                    fontSize: 22,
                }}>Information Account:</Text>
                <Text style={styles.text}>Name: {count.name}</Text>
                <Text style={styles.text}>Email: {count.email}</Text>
                <Text style={styles.text}>Password: {count.password}</Text>
                <Text style={{
                    opacity: 0.5,
                    alignSelf: 'flex-start',
                    marginBottom: '5%',
                    color: 'red',
                    fontWeight: 'bold',
                    fontSize: 22,
                }}>Form:</Text>
                <Text style={styles.text}>Your name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />
                <Text style={styles.text}>Your email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={styles.text}>Your password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.button}
                        title="Update Data"
                        onPress={() => {
                            clearForm()
                            dispatch(updateData({
                                'name': name,
                                'email': email,
                                'password': password
                            }))
                        }}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.button}
                        title="Set NULL"
                        onPress={() => {
                            clearForm()
                            dispatch(setNull())
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

