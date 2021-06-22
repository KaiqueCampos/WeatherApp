import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import { Ionicons } from '@expo/vector-icons'

type IconProps = {
    name: string,
    color: string,
}

type BackgroundTimeProps = string

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
        sunset:string,
        temp: number,
        time: string,
        wind_speedy: string,  
}

type Props = {
    background : BackgroundTimeProps,
    icon : IconProps,
    weather: WeatherProps
}

export function ClimateInformation(props : Props) {

    return (
        <LinearGradient
            style={styles.container}
            colors={props?.background === 'dia' ? ['#1ed6ff','#97c1ff'] : ['#063741','#0f2f61']}
        >
            <Text style={styles.data}> {props?.weather?.date} </Text>
            <Text style={styles.city}> {props?.weather?.city} </Text>

            <Ionicons
                name={props?.icon?.name}
                color={props?.icon?.color}
                size={150}
            />

            <Text style={styles.climate}>{props?.weather?.temp}°</Text>

        </LinearGradient >
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