import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export function Menu() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.openDrawer()}
        >

            <Feather
                name='menu'
                size={36}
                color='#fff'
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left:20,
        top:20,
        zIndex: 9,
    }
})