import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native"

import { User } from './../../Interface/UserInterface'

export default function UserBlock( {user} ) {
    
    const navigation = useNavigation()
    
    return (
        <TouchableOpacity 
            style={styles.userContainer}
            onPress={() => {
                navigation.navigate('ContactDetail', {
                    user: user,
                });
            }}
        >
            <Image style={ styles.photo } source={{ uri : user.picture.thumbnail }} />
            <Text style={ styles.firstname }>{ user.name.first }</Text>
            <Text style={ styles.lastname }>{ user.name.last }</Text>
        </TouchableOpacity>
      );
}

const styles = StyleSheet.create({
    photo: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    userContainer : {
        width: '100%',
        flexDirection: "row", 
        alignItems: 'center', 
        paddingVertical: 10,
        borderBottomColor: '#e3e3e3',
        borderBottomWidth: 1
    },
    firstname: {
        paddingHorizontal: 10
    },
    lastname: {
        fontWeight: 'bold',
    }
})