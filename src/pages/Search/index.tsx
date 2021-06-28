import React, { useState } from 'react'
import { ImageBackground, Keyboard, SafeAreaView, TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core';

import api, { key } from '../../services/api'
import { LinearGradient } from 'expo-linear-gradient'
import { Conditions } from '../../components/Conditions/conditions'
import { dateFormat } from '../../utils/dateFormat';

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
        const response = await api.get(`/weather?key=${key}&city_name=${searchValue}`)

        if (response.data.by === 'dafault') {
            setError('Cidade não encontrada!')
            setSearchValue('')
            Keyboard.dismiss()
            return
        }

        setCity(response.data.results)
        setSearchValue('')
        Keyboard.dismiss()
    }

    const dateFormated = dateFormat(city?.date);

    if (city) {
        return (
            <SafeAreaView>
                <ImageBackground
                    source={
                        city.currently === 'dia'
                            ? require('../../../assets/sunny.jpg')
                            : require('../../../assets/night.jpg')
                    }
                    resizeMode='cover'
                    style={styles.container}
                >
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Feather
                            name="chevron-left"
                            size={28}
                            color="#fff"
                        />

                        <Text style={{ fontSize: 22, color: '#fff' }}>Voltar</Text>
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

                    <View
                        style={styles.header}
                    >
                        <Text style={styles.cityName}>{city.city}</Text>
                        <Text style={styles.date}>{dateFormated}</Text>
                        <View>
                            <Text style={styles.temp}>{city.temp}°</Text>
                        </View>

                        <View>

                        </View>


                    </View>

                    <View style={{ position: 'absolute', bottom: '2%' }}>
                        <Conditions
                            weather={city}
                        />
                    </View>

                </ImageBackground>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView>
            <ImageBackground
                 source={require('../../../assets/search.png')
                }
                resizeMode='cover'
                style={styles.container}
            >
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Feather
                        name="chevron-left"
                        size={28}
                        color="#fff"
                    />

                    <Text style={{ fontSize: 22, color: '#fff' }}>Voltar</Text>
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
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },

    backButton: {
        marginTop: '10%',
        flexDirection: 'row',
        marginLeft: 15,
        alignSelf: 'flex-start',
        alignItems: 'center',
        marginBottom: 10,
    },

    searchBox: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '90%',
        height: 50,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#fff",
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
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },

    header: {
        marginTop: '40%',
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
        color: '#fff',
        fontSize: 45,
        fontWeight: 'bold',
    },
    temp: {
        color: '#fff',
        fontSize: 90,
        fontWeight: 'bold'
    }
})