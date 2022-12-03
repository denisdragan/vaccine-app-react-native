import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Input from '../../reuseables/Input'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import PrefHandler from '../../data/local/PrefHandler';
import Helper from '../../utils/Helper'
import { useFocusEffect } from '@react-navigation/native'
import Button from '../../reuseables/Button'

export default function Profile({ navigation }) {
    const [hivCheck, setHivCheck] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')

    // ------- Validation States -------------//
    const [emailVal, setEmailVal] = useState(false)
    const [nameVal, setNameVal] = useState(false)
    const [ageVal, setAgeVal] = useState(false)
    const [hivVal, setHivVal] = useState(false)


    const prefHandler = new PrefHandler()
    const helper = new Helper()

    useEffect(() => {
        prefHandler.getSession((userInfo) => {
            setName(userInfo.userInfo?.name)
            setEmail(userInfo.userInfo?.email)
            setAge(userInfo.userInfo?.age)
            setHivCheck(userInfo.userInfo?.hivCheck)
        })
    }, [])

    // useFocusEffect(
    //     React.useCallback(() => {
    //         prefHandler.getSession((userInfo) => {
    //             setName(userInfo.userInfo?.name)
    //             setEmail(userInfo.userInfo?.email)
    //             setAge(userInfo.userInfo?.age)
    //             setHivCheck(userInfo.userInfo?.hivCheck)
    //         })
    //     })
    // );

    const DATA = [
        {
            id: 1,
            title: 'שפעת',
            color: '#EBA9C1',
            decs1: 'המצאות בקרבת חולי שפעת.',
            decs2: 'מנה אחת כל שנה.',
            decs3: 'פעיל למשך שנה ויש לחדש כל שנה.',
            decs4: 'הזנים המבוססים על החיסון משתנים כל שנה.',
            note: '',
            dose1: false,
            dose2: false,
            dose3: false,
            doseEnable1: true,
            doseEnable2: false,
            doseEnable3: false
        },
        {
            id: 2,
            title: '(חצבת, אדמת, חזרת) MMR',
            color: '#EBA9C1',
            decs1: 'מאוד מדבק, דרך חלקיקי אויר במקום שהיית החולה ואף מעט לאחר יציאתו מאיזור ההדבקה.',
            decs2: '2 מנות במהלך החיים.',
            decs3: 'ילידי 57-69 אינם מחוסנים בשגרה, ילידי 70-77 מחוסנים בחיסון אחד בלבד. ילידי 78 והלאה מחוסנים בחיסון מלא על פי תוכנית החיסונים.',
            decs4: 'מומלץ בעיקר לנוסעים לחו״ל ובכל מקרה להיוועץ ברופא המשפחה.',
            note: '',
            dose1: false,
            dose2: false,
            dose3: false,
            doseEnable1: true,
            doseEnable2: true,
            doseEnable3: false
        },
        {
            id: 3,
            title: 'צהבת B',
            color: '#EBA9C1',
            decs1: 'מגע מיני לא מוגן, דם.',
            decs2: '3 מנות. 0, 1, 6 חודשים.',
            decs3: 'פעיל לפחות 20 שנה. ילידי שנת 1992 והלאה חוסנו כחלק מחיסוני הילדות. ניתן לבדוק נוגדנים בבדיקת דם בקופת החולים.',
            decs4: 'רלוונטי מאוד לאנשים הנוטלים PREP. יש לוודא חיסוניות לפני התחלת הטיפול.',
            note: '',
            dose1: false,
            dose2: false,
            dose3: false,
            doseEnable1: true,
            doseEnable2: true,
            doseEnable3: true
        },
        {
            id: 4,
            title: 'צהבת A',
            color: '#EBA9C1',
            decs1: 'רימינג, אוכל ומים הנגועים בוירוס.',
            decs2: '2 מנות בהפרש של חצי שנה לפחות.',
            decs3: 'פעיל לפחות 30 שנה. ילידי שנת 1998 והלאה חוסנו כחלק מחיסוני הילדות. ניתן לבדוק בדיקת נוגדים בקופות החולים.',
            decs4: 'שכיחות התפרצויות סביב אירועי גאווה.',
            note: '',
            dose1: false,
            dose2: false,
            dose3: false,
            doseEnable1: true,
            doseEnable2: true,
            doseEnable3: false
        },
        {
            id: 5,
            title: 'דלקת ריאות פנאומוקוקלית וסיבוכיה',
            color: '#376BA5',
            // decs1: 'המצאות ממושכת וקרובה בסביבת אנשים הנושאים את החיידק בגרונם.',
            // decs2: 'למדוכאי חיסון או מעל גיל 65 - 2 סוגי חיסון,.PPSV23 וחודשיים לאחר מכן PCV13',
            // decs3: 'פעיל ל5 שנים לפחות - PPSV23 PCV13 - חיסון אחד לכל החיים',
            // decs4: 'מתחת לגיל 65 מיועד לקבוצות סיכון מיוחדות בלבד - יש להיוועץ ברופא המטפל.',
            decs1: 'המצאות ממושכת וקרובה בסביבת אנשים \nהנושאים את החיידק בגרונם.',
            decs2: 'למדוכאי חיסון או מעל גיל 65 - 2 סוגי חיסון\nPCV13 וחודשיים לאחר מכן PPSV23.',
            decs3: 'פעיל ל5 שנים לפחות',
            decs4: 'מתחת לגיל 65 מיועד לקבוצות סיכון\nמיוחדות בלבד - יש להיוועץ ברופא המטפל.',
            decs31: ' - PPSV23',
            decs32: 'PCV13 - חיסון אחד לכל החיים',
            note: '',
            dose1: false,
            dose2: false,
            dose3: false,
            doseEnable1: true,
            doseEnable2: true,
            doseEnable3: false,
            decs3Enable: true
        },
        {
            id: 6,
            title: 'דלקת קרום המח מנינגוקוקלית B',
            color: '#376BA5',
            decs1: 'המצאות ממושכת וקרובה בסביבת אנשים הנושאים את החיידק בגרונם.',
            decs2: '2 מנות בהפרש של חודש.',
            decs3: 'פעיל ל-5 שנים.',
            decs4: 'הזן הנפוץ ביותר בישראל וברוב מדינות המערב. מחלה עם אחוזי תמותה גבוהים. עלולות להיות  התפרצויות בעיקר באנשים השוהים במקומות סגורים (מסיבות וכ׳ו).',
            note: '',
            dose1: false,
            dose2: false,
            dose3: false,
            doseEnable1: true,
            doseEnable2: true,
            doseEnable3: false
        },
        {
            id: 7,
            title: 'דלקת קרום המח מנינגוקוקלית ACWY',
            color: '#376BA5',
            decs1: 'המצאות ממושכת וקרובה בסביבת אנשים הנושאים את החיידק בגרונם.',
            decs2: 'קבוצות סיכון מיוחדות - 2 מנות בהפרש של חודש. ללא גורמי סיכון - מנה אחת בלבד.',
            decs3: 'פעיל ל-5 שנים. חלק משגרת החיסונים לחיילים מתגייסים.',
            decs4: 'מחלה נדירה אך מאוד מסוכנת.',
            note: '',
            dose1: false,
            dose2: false,
            dose3: false,
            doseEnable1: true,
            doseEnable2: true,
            doseEnable3: false
        },
        {
            id: 8,
            title: 'HPV פפילומה',
            color: '#009E69',
            decs1: 'מגע עורי, בעיקר במגע מיני. קונדום אינו מספק הגנה מלאה מפני הדבקה.',
            decs2: '3 מנות על פני חצי שנה.',
            decs3: 'ניתן כסדרה אחת פעם אחת בחיים. כיום ניתן לכל הבנים והבנות בכיתה ח׳.',
            decs4: 'החיסון מיועד למניעת יבלות באברי המין וכן סרטן פי הטבעת, סרטן הפין וסרטן הפה והלוע. ככל  שמבוצע מוקדם יותר כך יעילותו גוברת (הסיכוי לחשיפה קודמת נמוך יותר).',
            note: '',
            dose1: false,
            dose2: false,
            dose3: false,
            doseEnable1: true,
            doseEnable2: true,
            doseEnable3: true
        },
    ];

    // Register User to Local ///
    const HandleLocal = () => {
        let validFlag = true;
        if (email == '') {
            setEmailVal(true)
            validFlag = false;
        } if (name == '') {
            setNameVal(true)
            validFlag = false;
        } if (age == '') {
            setAgeVal(true)
            validFlag = false;
        }

        //  if (hivCheck == false) {
        //     setHivVal(true)
        //     return;
        // }
        if (validFlag == false) return;

        const body = ({
            name: name,
            email: email,
            age: age,
            hivCheck: hivCheck,
            data: DATA,
        });

        prefHandler.createSession(body,
            (onSucess) => {
                console.log(onSucess)
                navigation.navigate('BottomNavigator')
            },
            (error) => {
                console.log(error)
                helper.showToast(error, 'red')
            }
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name='left' size={25} color={'#000'} />
                </TouchableOpacity>
                <Text style={{ flex: 1, marginRight: 40, textAlign: 'center', color: '#000', fontFamily: "OpenSans-Bold", fontSize: 18, }}>פרופיל משתמש</Text>
            </View>

            <View style={{ marginTop: 34 }}>
                <View style={{ marginTop: 13 }}>
                    <Input edit={true} title={'שם'} onChange={(txt) => { setEmail(txt) + setEmailVal(false) }} bgStyle={emailVal ? { borderWidth: 1, borderColor: 'red' } : null} val={email} />
                    {emailVal ? <Text style={{ color: '#FF4040', fontFamily: "OpenSans-Medium", fontSize: 12, marginRight: 20 }}>נא להזין שם</Text> : null}
                    {/* <Input edit={false} title={'שם'} val={email} /> */}
                </View>

                <View style={{ marginTop: 13 }}>
                    <Input title={'שם משפחה'} onChange={(txt) => { setName(txt) + setNameVal(false) }} bgStyle={nameVal ? { borderWidth: 1, borderColor: 'red' } : null} val={name} />
                    {nameVal ? <Text style={{ color: '#FF4040', fontFamily: "OpenSans-Medium", fontSize: 12, marginRight: 20 }}>נא להזין שם משפחה</Text> : null}
                </View>

                <View style={{ marginTop: 13 }}>
                    <Input title={'גיל'} onChange={(txt) => { setAge(txt) + setAgeVal(false) }}
                        keyboardType={'number-pad'}
                        bgStyle={ageVal ? {
                            borderWidth: 1, borderColor: 'red', width: 85,
                            alignSelf: 'flex-end'
                        } : {
                            width: 85,
                            alignSelf: 'flex-end'
                        }} val={age} />
                    {ageVal ? <Text style={{ color: '#FF4040', fontFamily: "OpenSans-Medium", fontSize: 12, marginRight: 20 }}>נא להזין גיל</Text> : null}
                </View>
            </View>

            <View style={{ alignSelf: 'flex-end', marginRight: 20, marginTop: 34, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#000', fontFamily: "OpenSans-Medium", fontSize: 16, marginRight: 10 }}>אני חי עם HIV</Text>
                <TouchableOpacity onPress={() => setHivCheck(!hivCheck) + setHivVal(false)} style={{}}>
                    <MaterialCommunityIcons name={hivCheck ? 'checkbox-marked-outline' : 'checkbox-blank-outline'} style={{}} size={32} color={hivVal ? '#FF4040' : '#000'} />
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 30 }}>
                <Button title={'שמירת שינויים'} onPress={() => { HandleLocal() }} />
            </View>
        </View>
    )
}