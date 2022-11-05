import { View, Text, Image, StyleSheet } from "react-native"
import { useRoute, RouteProp } from '@react-navigation/native'

type ParamList = {
    User: {
        user: User
    };
};

type User = {
    picture: Picture;
    name: UserName;
    gender: string;
    email: string;
}

type UserName = {
    first: string;
    last: string;
}

type Picture = {
    thumbnail: string;
}

export default function UserDetail() {
    
    const { params } = useRoute<RouteProp<ParamList, 'User'>>();
    
    return (
        <View 
            style={styles.detailContainer}
        >
            <Image style={ styles.photo } source={{ uri : params.user.picture.thumbnail }} />
            <View style={ styles.nameContainer }>
                <Text style={ styles.firstname }>{ params.user.name.first }</Text>
                <Text style={ styles.lastname }>{ params.user.name.last }</Text>
            </View>
            <View style={ styles.genderContainer } >
                <Text style={ styles.containerText } > Sexe </Text>
                <Text style={ styles.containerUserInfo } >{ params.user.gender }</Text>
            </View>
            <View style={ styles.emailContainer } >
                <Text style={ styles.containerText } > Email </Text>
                <Text style={ styles.containerUserInfo } >{ params.user.email }</Text>
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
    detailContainer : {
        height: '100%',
        width: '100%',
        alignItems: 'center', 
        paddingVertical: '5%'
    },
    photo: {
        width: 100,
        height: 100,
        borderRadius: '50%',
        marginVertical: 15
    },
    nameContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    firstname: {
        marginRight: 10,
        fontSize: 25,
    },
    lastname: {
        fontSize: 25,
    },
    genderContainer: {
        width: '95%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 8
    },
    emailContainer: {
        width: '95%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 8
    },
    containerText: {
        color: 'black',
        fontSize: 15
    },
    containerUserInfo: {
        color: '#007AFF',
        fontSize: 20,
        paddingTop: 8
    }
})