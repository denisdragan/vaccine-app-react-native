import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Settings from '../views/settings/Settings';
import Home from '../views/home/Home';
import Entypo from 'react-native-vector-icons/Entypo'

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
    const marginPercent = '15%';
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#CE83FE',
                tabBarInactiveTintColor: '#000',
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontFamily: 'Assistant-Bold',
                },
                tabBarItemStyle: {
                    marginBottom: 10
                },
                tabBarStyle: {
                    backgroundColor: '#ffffff', height: 70,
                    paddingLeft: marginPercent,
                    paddingRight: marginPercent,
                }
            }}  >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'פנקס חיסונים',
                    // tabBarLabelStyle: {
                    //     marginLeft: marginPercent,
                    // },
                    // tabBarIconStyle: {
                    //     marginLeft: marginPercent,
                    // },
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <Image
                                style={{ width: 24, height: 28 }}

                                source={focused ? require('../assets/logos/Home.png') : require('../assets/logos/HomeUnActive.png')}
                            />
                        );
                    },
                }}
            />

            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    title: 'תפריט',
                    // tabBarLabelStyle: {
                    //     marginRight: marginPercent,
                    // },
                    // tabBarIconStyle: {
                    //     marginRight: marginPercent,
                    // },
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <Entypo name={'menu'} size={35} color={color}
                            />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
}