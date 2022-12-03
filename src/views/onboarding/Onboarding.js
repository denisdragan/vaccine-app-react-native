import { View, Text, Image } from 'react-native'
import React from 'react'
import PrefHandler from '../../data/local/PrefHandler'
//-------- resuseabls ------------------//
import Button from '../../reuseables/Button'

export default function Onboarding({ navigation }) {

    const prefHandler = new PrefHandler()

    const ShowOneTime = () => {

        const data = { check: true }
        prefHandler.oneShowOnly(data,
            (onSucess) => {
                console.log(onSucess)
                navigation.navigate('Signup')
            },
            (error) => {
                console.log(error)
            })
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Text style={{ color: '#000', textAlign: 'center', fontSize: 20, marginTop: 119, fontFamily: 'OpenSans-SemiBold', marginHorizontal: 20 }}>
                פנקס חיסונים דיגיטלי זה מיועד לגברים המקיימים יחסי מין עם גברים ומטרתו לאפשר מעקב וריכוז נוח אל מול הרופא.ה המטפל.ת אחר החיסונים הדרושים לכל מטופל.
            </Text>

            <View style={{ marginTop: 57, alignSelf: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/logos/Onboarding1.png')} style={{ height: 62, width: 121 }} />
                    <Image source={require('../../assets/logos/Onboarding2.png')} style={{ height: 54, width: 151 }} />
                </View>
                <Image source={require('../../assets/logos/Onboarding3.png')} style={{ height: 86, width: 86, alignSelf: 'center', marginTop: 23 }} />
            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 30 }}>
                <Button title={'המשך'} onPress={() => { ShowOneTime() }} />
            </View>
        </View>
    )
}