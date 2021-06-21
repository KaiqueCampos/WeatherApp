import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import { Ionicons } from '@expo/vector-icons'

export function ClimateInformation() {
    return (
        <LinearGradient
            style={styles.container}
            colors={['#1ed6ff', '#97c1ff']}
        >
            <Text style={styles.data}> 28/06/2021</Text>
            <Text style={styles.city}> São Paulo</Text>

            <Ionicons
                name='cloud'
                color='#fff'
                size={150}
            />

            <Text style={styles.climate}>30°</Text>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: '55%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    data: {
        color: '#fff',
        fontSize: 17,
    },

    city: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },

    climate: {
        color: '#fff',
        fontSize: 80,  
        fontWeight: 'bold',
    },

})