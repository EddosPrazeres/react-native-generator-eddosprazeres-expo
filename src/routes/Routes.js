import React from 'react'
import * as views from '../views'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: views.HomeScreen },
  // Insert views here
})

export default createAppContainer(AppNavigator)
