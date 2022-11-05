import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactsScreen from '../../Screens/UsersStack/ContactsScreen';
import ContactDetailScreen from '../../Screens/UsersStack/ContactDetailScreen';

const HomeStack = createNativeStackNavigator();

export default function UsersStack() {
    return (
        <HomeStack.Navigator >
            <HomeStack.Screen name="Contacts" component={ ContactsScreen } />
            <HomeStack.Screen name="ContactDetail" component={ ContactDetailScreen } />
        </HomeStack.Navigator>
    );
}