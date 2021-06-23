import React, { useState } from 'react'
import { Keyboard, SafeAreaView, TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core';

import api, { key } from '../../services/api'
import { LinearGradient } from 'expo-linear-gradient'
import { Conditions } from '../../components/Conditions/conditions'

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

export function Search() {
    const navigation = useNavigation();
    const [searchValue, setSearchValue] = useState('');
    const [city, setCity] = useState<WeatherProps>();
    const [error, setError] = useState('');


    async function handleSearch() {
        //https://api.hgbrasil.com/weather?key=SUA-CHAVE&city_name=Campinas,SP

        const response = await api.get(`/weather?key=${key}&city_name=${searchValue}`)

        if (response.data.by === 'dafault') {
            setError('Cidade não encontrada!')
            setSearchValue('')
            Keyboard.dismiss()
            return
        }

        setCity(response.data.results)
        console.log(city)
        setSearchValue('')
        Keyboard.dismiss()
    }

    if (city) {
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Feather
                        name="chevron-left"
                        size={28}
                        color="#000"
                    />

                    <Text style={{ fontSize: 22 }}>Voltar</Text>
                </TouchableOpacity>

                <View style={styles.searchBox}>
                    <TextInput
                        value={searchValue}
                        onChangeText={(value) => setSearchValue(value)}
                        placeholder="Nome do estado"
                        style={styles.searchInput}
                    />

                    <TouchableOpacity
                        style={styles.icon}
                        onPress={handleSearch}
                    >
                        <Feather
                            name="search"
                            size={22}
                            color='#fff'
                        />
                    </TouchableOpacity>
                </View>

                <LinearGradient
                    style={styles.header}
                    colors={['#1ed6ff', '#97c1ff']}
                >
                    <Text style={styles.date}>{city.date}</Text>
                    <Text style={styles.cityName}>{city.date}</Text>
                    <View>
                        <Text style={styles.temp}>{city.temp}°</Text>
                    </View>

                    <Conditions
                        weather={city}
                    />
                </LinearGradient>

            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.navigate('Home')}
            >
                <Feather
                    name="chevron-left"
                    size={28}
                    color="#000"
                />

                <Text style={{ fontSize: 22 }}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.searchBox}>
                <TextInput
                    value={searchValue}
                    onChangeText={(value) => setSearchValue(value)}
                    placeholder="Nome do estado"
                    style={styles.searchInput}
                />

                <TouchableOpacity
                    style={styles.icon}
                    onPress={handleSearch}
                >
                    <Feather
                        name="search"
                        size={22}
                        color='#fff'
                    />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '10%',
        backgroundColor: '#e8f0ff',
    },

    backButton: {
        flexDirection: 'row',
        marginLeft: 15,
        alignSelf: 'flex-start',
        alignItems: 'center',
        marginBottom: 10,
    },

    searchBox: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ddd',
        width: '90%',
        height: 50,
        borderRadius: 8,
    },

    searchInput: {
        width: '85%',
        height: 50,
        backgroundColor: '#fff',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7
    },

    icon: {
        width: '15%',
        backgroundColor: '#1ed6ff',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },

    header: {
        marginTop: '5%',
        width: '90%',
        paddingTop: '5%',
        paddingBottom: '5%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8
    },

    date: {
        color: '#fff',
        fontSize: 16
    },

    cityName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    temp: {
         color: '#fff',
         fontSize: 90,
         fontWeight: 'bold'
    }
})