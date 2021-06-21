import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'


export function Conditions() {
    return (
        <View style={styles.container}>
            <View style={styles.conditions}>
                <Feather
                    name='wind'
                    size={23}
                    color='#1ed6ff'
                />
                <Text>7 km/h</Text>
            </View>

            <View style={styles.conditions}>
                <MaterialCommunityIcons
                    name='weather-sunset-up'
                    size={23}
                    color='#1ed6ff'
                />
                <Text>7:00 AM</Text>
            </View>

            <View style={styles.conditions}>
                <MaterialCommunityIcons
                    name='weather-sunset-down'
                    size={23}
                    color='#1ed6ff'
                />
                <Text>7:00 PM</Text>
            </View>

            <View style={styles.conditions}>
                <Feather
                    name='droplet'
                    size={23}
                    color='#1ed6ff'
                />
                <Text>65</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        padding: 10,
        backgroundColor: '#fff',

        flexDirection: 'row',
        width: '95%',
        justifyContent: 'space-around',
        borderRadius: 8,
    },

    conditions: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})