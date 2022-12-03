import AsyncStorage from '@react-native-async-storage/async-storage';

const SESSION_USERDATA = "@Session:UserData"
const SESSION_ONETIME = "@Session:OneTime"

export default class PrefHandler {

    async createSession(sData, onCompleted, onError) {
        try {
            await AsyncStorage.setItem(SESSION_USERDATA, JSON.stringify(sData))
            onCompleted(true)
        } catch (error) {
            console.log(error.message)
            onCompleted(false)
        }
    }

    async getSession(onResult) {
        var result = { userInfo: null, }
        try {
            const info = await AsyncStorage.getItem(SESSION_USERDATA)

            if (info) {
                result.userInfo = JSON.parse(info)
            }

            onResult(result)
        } catch (error) {
            console.log(error.message)
            onResult(result)
        }
    }

    async oneShowOnly(sData, onCompleted, onError) {
        try {
            await AsyncStorage.setItem(SESSION_ONETIME, JSON.stringify(sData))
            onCompleted(true)
        } catch (error) {
            console.log(error.message)
            onCompleted(false)
        }
    }

    async getoneShowOnly(onResult) {
        var result = { oneTime: null, }
        try {
            const info = await AsyncStorage.getItem(SESSION_ONETIME)

            if (info) {
                result.oneTime = JSON.parse(info)
            }

            onResult(result)
        } catch (error) {
            console.log(error.message)
            onResult(result)
        }
    }


    async deleteSession(onResult) {
        await AsyncStorage.multiRemove([SESSION_USERDATA,SESSION_ONETIME])
        onResult()
    }

}