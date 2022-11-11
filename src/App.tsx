import React from 'react'
import Home from './screens/Home'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { navigationRef } from './config/RootNavigation'

// Redux & Redux Sasga Importation
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

// gikuha gikan sa root folder sa atong redux
import rootReducer from './redux/root-reducers'
import rootSaga from './redux/root-sagas'

// initialize saga
const saga = createSagaMiddleware()

// initialize reducers
const reducer = (state: any, action: any) => {
  return rootReducer(state, action)
}

// initialize redux-toolkit store
const store = configureStore({
  reducer,
  middleware: [saga]
})

saga.run(rootSaga)

const Stack: any = createNativeStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar
          animated={false}
          backgroundColor="#f1ffbc"
          barStyle="dark-content"
        />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              animation: 'none'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App