import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
}

export default (reducers) => {
  const persistedReducer = persistReducer(persistConfig, reducers)
  return persistedReducer
}
