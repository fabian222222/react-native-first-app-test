import HomeStackScreens from "./Stacks/HomeStackScreens";
import AccountStackScreens from "./Stacks/AccountStackScreens";
import UsersStack from "./Stacks/UsersStackScreens";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabBarNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen 
                name="HomeStack" component={HomeStackScreens} 
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="home" size={24} color="black" />
                    )
                }}     
            />
            <Tab.Screen 
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="user" size={24} color='black' />
                    )
                }} 
                name="AccountStack" component={AccountStackScreens} 
            />
            <Tab.Screen 
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="users" size={24} color="black" />
                    )
                }} 
                name="UsersStack" 
                component={UsersStack} 
            />
        </Tab.Navigator>
    );
}