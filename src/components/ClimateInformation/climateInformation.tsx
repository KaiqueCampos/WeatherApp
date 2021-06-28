import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import { dateFormat } from '../../utils/dateFormat';

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
    sunset: string,
    temp: number,
    time: string,
    wind_speedy: string,
};
 
type Props = {
    background: BackgroundTimeProps,
    icon: IconProps,
    weather: WeatherProps | undefined,
}

export function ClimateInformation(props: Props) {

   const currentDateFormated = dateFormat(props?.weather?.date)

    return (
        <View
            style={styles.container}
        >
            <Text style={styles.city}> {props?.weather?.city} </Text>
            <Text style={styles.data}> {currentDateFormated} </Text>

            <Ionicons
                name={props?.icon?.name}
                color='#fff'
                size={150}
                style={{marginTop: 5}}
            />

            <Text style={styles.climate}>{props?.weather?.temp}°c</Text>

            <Text style={styles.city}>--------------</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: '25%',
        width: '95%',
        height: '55%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    city: {
        color: '#fff',
        fontSize: 45,
        fontWeight: 'bold',
    },

    data: {
        color: '#fff',
        fontSize: 17,
    },

    climate: {
        color: '#fff',
        fontSize: 80,
        fontWeight: 'bold',
    },

})