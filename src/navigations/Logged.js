import { createAppContainer } from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../scenes/Home'
import TokenListScreen from '../scenes/TokenList'
import TokenDetailScreen from '../scenes/TokenDetail'
import WalletCreateScreen from '../scenes/WalletCreate'
import WalletEditScreen from '../scenes/WalletEdit'
import SettingsScreen from '../scenes/Settings'
import ReceivedScreen from '../scenes/Received'

/**
 * Home Navigator
 */
const Navigator = createStackNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: { headerShown: false },
		},
		TokenList: {
			screen: TokenListScreen,
			navigationOptions: { headerShown: false },
		},
		TokenDetail: {
			screen: TokenDetailScreen,
			navigationOptions: { headerShown: false },
		},
		WalletCreate: {
			screen: WalletCreateScreen,
			navigationOptions: { headerShown: false },
		},
		WalletEdit: {
			screen: WalletEditScreen,
			navigationOptions: { headerShown: false },
		},
		Settings: {
			screen: SettingsScreen,
			navigationOptions: { headerShown: false },
		},
		Received: {
			screen: ReceivedScreen,
			navigationOptions: { headerShown: false },
		},
	},
	{
		initialRouteName: 'Home',
	}
)

export default createAppContainer(Navigator)