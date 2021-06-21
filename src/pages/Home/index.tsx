import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

// Components
import { Menu } from '../../components/Menu/menu'
import { ClimateInformation } from '../../components/ClimateInformation/climateInformation'
import { Conditions } from '../../components/Conditions/conditions'

export function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Menu />
            <ClimateInformation />
            <Conditions />

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
})