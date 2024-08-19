import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CancelButton from '@/Components/cancelButton';
import CustomButton from '@/Components/CustomButton';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import FingerImage from '@/assets/images/FingerImage.png';

export default function Page() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = () => {
        let valid = true;

        // Reset errors
        setPhoneNumberError('');
        setPasswordError('');

        // Validate phone number
        if (phoneNumber.trim() === '') {
            setPhoneNumberError('Phone number is required.');
            valid = false;
        } else if (phoneNumber.trim().length <= 10) {
            setPhoneNumberError('Phone number should be more than 11 digits.');
            valid = false;
        }

        // Validate password
        if (password.trim() === '') {
            setPasswordError('Password is required.');
            valid = false;
        }

        // If valid, navigate to HomePage
        if (valid) {
            router.push('./HomePage');
        }
    };

    return (
        <SafeAreaView>
            <View>
                <CancelButton title="Cancel" />
                <View style={styles.containerTwo}>
                    <Text style={styles.titleOne}>Login to your account</Text>
                    <Text style={styles.titleTwo}>We are glad to have you, kindly enter your login details.</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Phone Number*</Text>
                    <TextInput
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        keyboardType="phone-pad"
                        style={[styles.input, phoneNumberError ? styles.inputError : null]}
                    />
                    {phoneNumberError ? <Text style={styles.errorText}>{phoneNumberError}</Text> : null}
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Your Password</Text>
                    <View style={[styles.passwordContainer, passwordError ? styles.inputError : null]}>
                        <TextInput
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                            style={[{ flex: 1 }]}
                        />
                        <TouchableOpacity onPress={togglePasswordVisibility}>
                            <Ionicons
                                name={showPassword ? 'eye' : 'eye-off'}
                                size={24}
                                color="gray"
                                style={styles.eyeIcon}
                            />
                        </TouchableOpacity>
                    </View>
                    {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
                </View>
                <View style={styles.containerButton}>
                    <CustomButton
                        onPress={handleLogin}
                        title="Login"
                        containerStyles={{ width: 370, height: 40 }}
                    />
                </View>
                <View style={styles.dontContainer}>
                    <Text style={styles.donttext}>Don’t have an account? Sign up</Text>
                </View>
                <View style={styles.ForgotContainer}>
                    <Text style={styles.Forgottext}>Forgot Password?</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={FingerImage} style={styles.image} />
                </View>
                <View style={styles.versionContainer}>
                    <Text style={styles.versionText}>v1.1.1</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerTwo: {
        marginTop: 30,
    },
    titleOne: {
        fontSize: 25,
        fontWeight: '700',
        marginLeft: 20,
        color: '#208220',
    },
    titleTwo: {
        marginTop: 20,
        marginLeft: 17,
        fontSize: 15,
        width: 250,
        color: '#666666',
    },
    inputContainer: {
        marginTop: 20,
        marginLeft: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: '700',
        color: '#666',
        marginBottom: 0,
        position: 'absolute',
        marginLeft: 10,
        marginTop: -10,
        zIndex: 10,
        backgroundColor: '#FEFEFE'
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        width: 340,
        height: 50,
        marginBottom: 10,
    },
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 13,
        marginLeft: 10,
        marginTop: 5,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        width: 340,
        height: 50,
    },
    eyeIcon: {
        marginLeft: 10,
    },
    containerButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 49,
    },
    dontContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
    },
    ForgotContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    donttext: {
        color: '#208220',
        fontWeight: '700',
        fontSize: 15,
    },
    Forgottext: {
        color: '#666666',
        fontWeight: '500',
        fontSize: 15,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35
    },
    image: {
        width: 55,
        height: 60,
    },
    versionContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    versionText: {
        color: '#666666',
        fontWeight: '500',
        fontSize: 15,
    }
});
