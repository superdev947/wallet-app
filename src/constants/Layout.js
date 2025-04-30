import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
/**
 * Global variable
 */
export const LAYOUT = {
	window: { width, height },
}