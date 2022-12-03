import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import PrefHandler from '../../data/local/PrefHandler';

export default function Splash({ navigation }) {
    const prefHandler = new PrefHandler()

    useEffect(() => {
        prefHandler.getSession((res) => {
            prefHandler.getoneShowOnly((check) => {
                console.log(check)
                setTimeout(() => {
                    {
                        res.userInfo ?
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'BottomNavigator' }],
                            })
                            :
                            navigation.reset({
                                index: 0,
                                routes: [{ name: check.oneTime ? 'Signup' :'Onboarding'  }],
                            })
                    }
                }, 3000);
            })
        })
    });
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ alignSelf: 'center' }}>
                <Image style={{ height: 126, width: 85.3 }} source={require('../../assets/logos/Splash.png')} />
            </View>
            <Text style={{ color: '#CE83FE', fontFamily: 'OpenSans-Bold', fontSize: 40, textAlign: 'center' }}>
                פנקס חיסונים
            </Text>
            <Text style={{ color: '#393D3F', fontFamily: 'OpenSans-SemiBold', fontSize: 16, textAlign: 'center', marginHorizontal: 50, marginTop: 15 }}>
                מעקב חיסונים מומלצים לגברים המקיימים יחסי מין עם גברים
            </Text>
        </View>
    )
}