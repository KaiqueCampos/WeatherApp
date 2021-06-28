import * as Location from 'expo-location'
import React, { useEffect, useState } from 'react'
import { FlatList, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { ClimateInformation } from '../../components/ClimateInformation/climateInformation'
import { Conditions } from '../../components/Conditions/conditions'
import { ForecastItems } from '../../components/ForecastItems/forecastItems'
import { Menu } from '../../components/Menu/menu'
import api, { key } from '../../services/api'


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
    const [dayOrNight, setDayOrNight] = useState('')


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

            // Condition day or night
            setDayOrNight(response.data.results.currently)

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

    if (loading) {
        return (
            <View style={styles.container}>
                <Text style={{
                    fontSize: 17,
                    fontStyle: 'italic'
                }}>Carregando dados...</Text>
            </View>
        )
    }

    return (
        <SafeAreaView>
            <ImageBackground
                source={
                    dayOrNight === 'dia'
                        ? require('../../../assets/sunny.jpg')
                        : require('../../../assets/night.jpg')
                }
                resizeMode='cover'
                style={styles.container}
            >
                <Menu />

                <ClimateInformation
                    background={backgroundTime}
                    icon={weatherIcon}
                    weather={weather}
                />

                <FlatList
                    horizontal={true}
                    contentContainerStyle={{ paddingBottom: '5%' }}
                    style={styles.list}
                    data={weather?.forecast}
                    keyExtractor={item => item.date}
                    renderItem={({ item }) => <ForecastItems data={item} />}
                />

                <Conditions weather={weather} />

            </ImageBackground>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    list: {
        marginTop: 10,
        marginLeft: 10,
    },
})