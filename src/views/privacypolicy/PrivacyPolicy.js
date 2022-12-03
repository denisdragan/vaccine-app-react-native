import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

const PrivacyPolicy = ({onPress}) => {
    return (
        <View style={styles.container}>
            <View style={{ borderWidth: 2, flex: 1, margin: 20, borderRadius: 5 }}>

                <TouchableOpacity style={{alignSelf:'flex-end',marginTop:20,marginRight:20}} onPress={onPress}>
                    <Feather name={'x'} size={30} color={'#000'} />
                </TouchableOpacity>

                <Text style={{ color: '#000', fontFamily: "OpenSans-Bold", fontSize: 18, marginRight: 20 ,marginTop:20}}>תנאי שימוש</Text>

                <Text style={{ textAlign: 'center', marginHorizontal: 20, color: '#000', fontFamily: "OpenSans-Medium", fontSize: 16, marginTop: 9 }}>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.
                    הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.
                    קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.9,
        zIndex: 9999,
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        elevation: 20
    },
    image: {
        width: 80,
        height: 80,
    },
});

export default PrivacyPolicy;
