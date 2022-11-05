import { View, Button, Text } from "react-native"

import UserDetail from '../../Components/User/UserDetail'

export default function UsersScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <UserDetail />
        </View>
      );
}