import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { Home } from './pages/Home'
import { Search } from './pages/Search'

const Drower = createDrawerNavigator();

export function Routes(){
    return(
        <Drower.Navigator>
            <Drower.Screen 
                name='Home'
                component={Home}
                options={{
                    title:'Minha cidade'
                }}
            />

            <Drower.Screen
                name='Search'
                component={Search}
                options={{
                    title:'Procurar cidade'
                }}
            />
        </Drower.Navigator>
    )
}