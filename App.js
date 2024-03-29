import {Asset} from 'expo-asset'
import * as Font from 'expo-font'
import React, {useState} from 'react'
import {Platform, StatusBar, StyleSheet, View} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {Provider} from 'react-redux'
import store from './store'
import {AppLoading} from 'expo'
import TimeMiddleware from './components/TimeMiddleware'

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    )
  } else {
    return (
      <Provider store={store}>
        <TimeMiddleware />
      </Provider>
    )
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      // require('./assets/images/robot-dev.png'),
      // require('./assets/images/robot-prod.png')
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
    })
  ])
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error)
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true)
}
