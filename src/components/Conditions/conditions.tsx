import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

type Forecast = {
    condition: string,
    date: string,
    description: string,
    max: number,
    min: number,
    weekday: string,
}

type WeatherProps = {
    cid: string,
    city: string,
    city_name: string,
    condition_code: number,
    condition_slug: string,
    currently: string,
    date: string,
    description: string,
    forecast: Forecast[],
    humidity: number,
    img_id: number,
    sunrise: string,
    sunset: string,
    temp: number,
    time: string,
    wind_speedy: string,
}

type ConditionsProps = {
    weather: WeatherProps | undefined,
} 


export function Conditions(props: ConditionsProps) {

    return (
        <View style={styles.container}>
            <View style={styles.conditions}>
                <Feather
                    name='wind'
                    size={23}
                    color='#fff'
                />
                <Text style={styles.informationFont}>{props?.weather?.wind_speedy}</Text>
            </View>

            <View style={styles.conditions}>
                <MaterialCommunityIcons
                    name='weather-sunset-up'
                    size={23}
                    color='#fff'
                />
                <Text style={styles.informationFont}>{props?.weather?.sunrise}</Text>
            </View>

            <View style={styles.conditions}>
                <MaterialCommunityIcons
                    name='weather-sunset-down'
                    size={23}
                    color='#fff'
                />
                <Text style={styles.informationFont}>{props?.weather?.sunset}</Text>
            </View>

            <View style={styles.conditions}>
                <Feather
                    name='droplet'
                    size={23}
                    color='#fff'
                />
                <Text style={styles.informationFont}>{props?.weather?.humidity}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginBottom: '5%',
        padding: 10,
        flexDirection: 'row',
        width: '95%',
        justifyContent: 'space-around',
        borderRadius: 8,
    },

    conditions: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    informationFont: {
        color: '#fff',
        marginTop: 10
    }
})