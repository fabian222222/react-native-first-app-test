import { useEffect, useState } from 'react'
import { SafeAreaView, View, FlatList, Button, Text, RefreshControl, StyleSheet } from "react-native"

import { User } from '../../Interface/UserInterface'

import UserBlock from '../../Components/User/UserBlock'

export default function UserScreen() {

    const [users, setUsers] = useState<User[]>([])
    const [refreshing, setRefreshing] = useState<boolean>(false)
    const [nbrOfUser, setNbrOfUser] = useState<number>(5)

    const urlUsers = `https://randomuser.me/api/?results=${nbrOfUser}`
    const urlUser = 'https://randomuser.me/api/'

    const fetchUsers = async (urlUsed: string, isNewUser: boolean) => {
        const fetchUsers = await fetch(urlUsed)
        const response = await fetchUsers.json()
        const user = response.results as User[]

        user && isNewUser === false ? setUsers(user) : setUsers([...users, ...user])
    }

    const onRefresh = () => {
        setRefreshing(true)
        
        setTimeout( async () => {
            setUsers([])
            setRefreshing(false)
            fetchUsers(urlUsers, false)
        }, 500);
    }

    useEffect(() => {
        fetchUsers(urlUsers, false)
    }, [])

    if (users.length === 0) {
        return (
            <SafeAreaView style={ styles.usersContainer }>
                <Text>Aucun utilisateur n'a été chargé</Text>    
                <Button 
                    onPress={() => {
                        fetchUsers(urlUser, true)
                        setNbrOfUser(nbrOfUser + 1)
                    }}
                    title='Add user'
                />
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={ styles.usersContainer }>
            <Text style={ styles.contactsInformation } >You have { nbrOfUser } contact(s)</Text>
            <FlatList
                style={styles.users}
                data={users}
                renderItem={( { item } ) => (
                    <View>
                        <UserBlock user={item} />
                    </View>
                )}
                keyExtractor={(item) => item.name.first}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />

            <Button 
                onPress={() => {
                    fetchUsers(urlUser, true)
                    setNbrOfUser(nbrOfUser + 1)
                }}
                title='Add user'
            />

            <Button 
                onPress={() => {
                    setUsers([])
                    setNbrOfUser(0)
                }}
                title='Remove all user'
                color='#C7372F'
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    usersContainer : {
        width: '100%',
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    users: {
        width: '100%',
        paddingHorizontal: 15
    },
    contactsInformation: {
        paddingTop: 20,
        paddingBottom: 10,
    }
})