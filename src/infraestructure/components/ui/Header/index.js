import React from 'react'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AuthContext } from '../../../../domain/store/auth';
import { authLogout } from '../../../../domain/store/auth/action';
import { styles } from './style';

const Header = () => {

    const { authStore, dispatchAuth } = React.useContext(AuthContext)


    return (
        <View style={styles.container}>
            <View style={styles.containerUser}>
                <FontAwesome name="user-circle-o" size={24} color="white" />
                <Text style={styles.nameUser} >{authStore.user.fullName}</Text>
            </View>
            <Ionicons name="log-out-outline" size={24} color="white" style={{ marginTop: 18 }} onPress={() => authLogout(dispatchAuth)} />
        </View>
    )
}

export default Header
