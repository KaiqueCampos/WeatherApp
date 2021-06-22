import React, { useState, useEffect } from 'react'
import { FlatList, SafeAreaView, StyleSheet } from 'react-native'
import * as Location from 'expo-location'

import { ClimateInformation } from '../../components/ClimateInformation/climateInformation'
import { Conditions } from '../../components/Conditions/conditions'
import { ForecastItems } from '../../components/ForecastItems/forecastItems'
import { Menu } from '../../components/Menu/menu'
import api, { key } from '../../services/api'
import { climateConditions } from '../../utils/climateConditions'

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

export function Home() {
    const [weather, setWeather] = useState<WeatherProps>()
    const [permissioDeniedMessage, setPermissioDeniedMessage] = useState('')
    const [loading, setLoading] = useState(true)
    const [backgroundTime, setbackgroundTime] = useState("['#1ed6ff','#97c1ff']")
    const [weatherIcon, setWeatherIcon] = useState({ name: 'cloud', color: '#fff' })

    useEffect(() => {

        (async () => {

            // Permission of location
            let { status } = await Location.requestPermissionsAsync();

            if (status !== 'granted') {
                setPermissioDeniedMessage('Permissão de acesso a localização negado!')
                setLoading(false)
                return;
            }

            // Get curretn location
            let location = await Location.getCurrentPositionAsync({})

            // Api conection and response
            const response = await api.get(`weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`)
            setWeather(response.data.results)

            // Day or Night
            setbackgroundTime(response.data.results.currently)

            // Condition Icon
            switch (response.data.results.condition_slug) {
                case 'clear_day':
                    setWeatherIcon({
                        name: 'partly-sunny',
                        color: '#FFB300'
                    })
                    break
                case 'rain':
                    setWeatherIcon({
                        name: 'rainy',
                        color: '#fff'
                    })
                    break
                case 'storm':
                    setWeatherIcon({
                        name: 'rainy',
                        color: '#fff'
                    })
                    break
            }

            setLoading(false)

        })();

    }, [])

    console.log(weather?.wind_speedy)

    return (
        <SafeAreaView style={styles.container}>
            <Menu />

            <ClimateInformation
                background={backgroundTime}
                icon={weatherIcon}
                weather={weather}
            />

            <Conditions weather={weather}/>

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