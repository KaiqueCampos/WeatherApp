import React from 'react'
import { SafeAreaView, Text, StyleSheet, FlatList } from 'react-native'

// Components
import { Menu } from '../../components/Menu/menu'
import { ClimateInformation } from '../../components/ClimateInformation/climateInformation'
import { Conditions } from '../../components/Conditions/conditions'
import { ForecastItems } from '../../components/ForecastItems/forecastItems'

const list = [
    {
        "date": "22/06",
        "weekday": "Ter",
        "max": 20,
        "min": 14,
        "description": "Chuvas esparsas",
        "condition": "rain"
    },
    {
        "date": "23/06",
        "weekday": "Qua",
        "max": 20,
        "min": 13,
        "description": "Parcialmente nublado",
        "condition": "clear_day"
    },
    {
        "date": "24/06",
        "weekday": "Qui",
        "max": 25,
        "min": 12,
        "description": "Tempo nublado",
        "condition": "cloudly_day"
    },
    {
        "date": "25/06",
        "weekday": "Sex",
        "max": 27,
        "min": 17,
        "description": "Tempo nublado",
        "condition": "clear_day"
    },
    {
        "date": "26/06",
        "weekday": "Sáb",
        "max": 28,
        "min": 16,
        "description": "Parcialmente nublado",
        "condition": "cloud"
    },
    {
        "date": "27/06",
        "weekday": "Dom",
        "max": 27,
        "min": 17,
        "description": "Tempo nublado",
        "condition": "cloudly_day"
    },
    {
        "date": "28/06",
        "weekday": "Seg",
        "max": 22,
        "min": 15,
        "description": "Tempo nublado",
        "condition": "cloudly_day"
    },
    {
        "date": "29/06",
        "weekday": "Ter",
        "max": 21,
        "min": 15,
        "description": "Chuvas esparsas",
        "condition": "rain"
    },
    {
        "date": "30/06",
        "weekday": "Qua",
        "max": 19,
        "min": 16,
        "description": "Chuvas esparsas",
        "condition": "storm"
    },
    {
        "date": "01/07",
        "weekday": "Qui",
        "max": 19,
        "min": 15,
        "description": "Chuvas esparsas",
        "condition": "rain"
    }
]

export function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Menu />
            <ClimateInformation />
            <Conditions />

            <FlatList
                horizontal={true}
                contentContainerStyle={{ paddingBottom: '5%' }}
                style={styles.list}
                data={list}
                keyExtractor={item => item.date}
                renderItem={({ item }) => <ForecastItems data={item} />}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8f0ff',
        paddingTop: '5%',
    },

    list: {
        marginTop: 10,
        marginLeft: 10,
    },
})