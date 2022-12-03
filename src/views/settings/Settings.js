import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import PrefHandler from '../../data/local/PrefHandler';
import PrivacyPolicy from '../privacypolicy/PrivacyPolicy'
import Modal from 'react-native-modal';


export default function Settings({ navigation }) {
    const countries = ['עברית', 'English'];
    const [privacyScreen, setPrivacyScreen] = useState(false)

    const prefHandler = new PrefHandler()

    // ----- Logout Function --------//
    const LogoutFunc = () => {
        prefHandler.deleteSession((onResult) => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Signup' }],
            })
        })
    }


    const createTwoButtonAlert = () =>
        Alert.alert(
            "התנתק",
            "האם אתה בטוח?",
            [
                {
                    text: "לְבַטֵל",
                    onPress: () => { },
                    style: "cancel"
                },
                { text: "בסדר", onPress: () => LogoutFunc() }
            ]
        );

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>

            <Modal isVisible={ privacyScreen }>
                <View style={{ flex: 1 }}>
                    <PrivacyPolicy onPress={() => { setPrivacyScreen(false) }} />
                </View>
            </Modal>
            
            <Text style={{ textAlign: 'center', color: '#000', fontFamily: "OpenSans-Bold", fontSize: 18, marginTop: 20 }}>תפריט</Text>

            <View style={{
                marginTop: 50,
                marginRight: 20
            }}>
                <Text style={{ color: '#000', fontSize: 16, }}>שפת האפליקציה</Text>
                <Text style={{ color: '#000', fontFamily: "OpenSans-Medium", marginLeft: 150, fontSize: 14, backgroundColor: '#F2F3F7', padding: 16, borderRadius: 5, marginTop: 10 }}>עברית</Text>

                {/* <SelectDropdown
                    data={countries}
                    
                    buttonStyle={{
                        width: 205,
                        borderRadius: 5,
                        marginTop: 5,
                        marginRight: 17,
                        alignSelf: 'flex-end',
                    }}
                    buttonTextStyle={{
                        fontSize: 14,
                        textAlign: 'right',
                        marginRight: 20,
                        color: 'grey',
                    }}
                    defaultButtonText={'עברית'}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                        return item;
                    }}
                /> */}
            </View>

            <View style={{ marginTop: 33 }}>
                <View
                    style={{
                        borderBottomColor: '#EAECF0',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        marginHorizontal: 20
                    }}
                />

                <TouchableOpacity onPress={() => { navigation.navigate('Profile') }}>
                    <Text style={{ marginRight: 20, color: '#000', fontFamily: "OpenSans-Medium", fontSize: 16, marginTop: 18 }}>פרופיל משתמש</Text>
                </TouchableOpacity>
            </View>

            <View
                style={{
                    borderBottomColor: '#EAECF0',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginHorizontal: 20,
                    marginTop: 23
                }}
            />

            <TouchableOpacity onPress={() => { createTwoButtonAlert() }}>
                <Text style={{ marginRight: 20, color: '#000', fontFamily: "OpenSans-Medium", fontSize: 16, marginTop: 18 }}>התנתקות</Text>
            </TouchableOpacity>

            <View
                style={{
                    borderBottomColor: '#EAECF0',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginHorizontal: 20,
                    marginTop: 23,
                    flex: 1
                }}
            />
            <Text style={{ textAlign: 'center', color: '#000', fontFamily: "OpenSans-Medium", fontSize: 16, marginTop: 18 }}>גרסא 0.1</Text>
            <TouchableOpacity onPress={()=>setPrivacyScreen(true)}>
                <Text style={{ textAlign: 'center', color: '#000', fontFamily: "OpenSans-Bold", fontSize: 16, marginTop: 18, marginBottom: 30 }}>תנאי השימוש</Text>
            </TouchableOpacity>
        </View>
    )
}