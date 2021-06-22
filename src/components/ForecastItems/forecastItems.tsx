import React from 'react'

import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { climateConditions } from '../../utils/climateConditions'

type ForecastItemsProps = {
    date: string,
    weekday: string,
    max: number,
    min: number,
    description: string,
    condition: string
}

type ForecastItemsData = {
    data: ForecastItemsProps
}

export function ForecastItems({ data }: ForecastItemsData) {

    let icon = climateConditions(data.condition)

    return (
        <View style={styles.container}>
            <Text style={styles.date}>{data.date}</Text>

            <Ionicons
                name={icon.name}
                color={icon.color}
                size={25}
            />

            <View style={styles.temperatureContainer}>
                <Text>{data.min}°</Text>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold'
                }}>
                    {data.max}°
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginLeft: 12,
        borderRadius: 8,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 14,
        paddingRight: 14,
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    date: {
        fontSize: 14,
    },

    temperatureContainer: {
        alignItems: 'center'
    },
})