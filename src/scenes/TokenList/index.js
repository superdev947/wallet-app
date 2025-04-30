import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { Container, Content, Icon } from 'native-base'
import normalize from 'react-native-normalize'
import { Images, LAYOUT, Styles } from '../../constants'
import { Footers } from '../../components'
import { SlideAreaChart } from '@connectedcars/react-native-slide-charts'
import * as Haptics from 'expo-haptics'

const data = [
    { Icon: Images.Bitcoin, symbol: 'Bitcoin (BTC)', volume: '0.8934 BTC', gain: 5.24, price: 8452.98 },
    { Icon: Images.Ethereum, symbol: 'Ethereum (ETH)', volume: '8.0175 ETH', gain: 1.45, price: 8452.98 },
    { Icon: Images.Monero, symbol: 'Monero (XMR)', volume: '8.0175 XMR', gain: 1.45, price: 1378.45 },
    { Icon: Images.Litecoin, symbol: 'Litecoin (LTC)', volume: '24.82 LTC', gain: -0.91, price: 8452.98 },
    { Icon: Images.Stellar, symbol: 'Steller (XLM)', volume: '8.0175 ETH', gain: 1.45, price: 8452.98 },
]
const date = ['Day', 'Week', 'Month', 'Year', 'All']

const TokenListScreen = ({ navigation }) => {
    const [active, setActive] = useState('Week')
    return (
        <Container style={[S.BKBlack]}>
            <Content contentContainerStyle={[S.PV20]}>
                <View style={[S.ROW, S.Jbetween, S.Acenter, S.PH20]}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon type="Feather" name="chevron-left" style={[S.CLWarning, S.F24]} />
                    </TouchableOpacity>
                    <Text style={[S.F20, S.CLW, S.FW700]}> Token Overview </Text>
                    <Icon type="Feather" name="align-right" style={[S.CLWarning, S.F24]} />
                </View>
                <Text style={[S.F30, S.CLW, S.FW700, S.MV5, S.Tcenter]}> $4,409.98 </Text>
                <View style={[S.Acenter, S.MV20]}>
                    <SlideAreaChart
                        scrollable
                        selectionChangedCallback={() => Haptics.selectionAsync()}
                        style={[{ backgroundColor: 'transparent' }]}
                        shouldCancelWhenOutside={false}
                        data={[
                            { x: 1, y: Math.floor(Math.random(1) * 100) },
                            { x: 2, y: Math.floor(Math.random(1) * 100) },
                            { x: 3, y: Math.floor(Math.random(1) * 100) },
                            { x: 4, y: Math.floor(Math.random(1) * 100) },
                            { x: 5, y: Math.floor(Math.random(1) * 100) },
                            { x: 6, y: Math.floor(Math.random(1) * 100) },
                            { x: 7, y: Math.floor(Math.random(1) * 100) },
                            { x: 8, y: Math.floor(Math.random(1) * 100) },
                            { x: 9, y: Math.floor(Math.random(1) * 100) },
                        ]}
                        chartLineColor={'#fff'}
                        animated={false}
                        width={LAYOUT.window.width - normalize(20)}
                        yAxisProps={{
                            verticalLineWidth: 0,
                            horizontalLineWidth: 0,
                            numberOfTicks: 1,
                            hideMarkers: true,
                            rotateAxisLabel: true,
                        }}
                        toolTipProps={{
                            textStyles: [S.CLW, S.FW700, S.F16],
                            backgroundColor: '#687279',
                            toolTipTextRenderers: [
                                ({ scaleY, y, x }) => ({
                                    text: `$${scaleY.invert(y).toFixed(1).toString()}`,
                                }),
                            ],
                        }}
                    />
                    <View style={[S.ROW, S.Jbetween, S.Acenter, S.W100P, S.PH20, S.MT5]}>
                        {date.map((item, key) => (
                            <TouchableOpacity
                                key={key}
                                onPress={() => setActive(item)}
                                style={[S.BorderRadius5, S.Acenter, S.PH10, S.PV5, item == active && S.BKGrey1]}
                            >
                                <Text style={[S.F14, S.FW700, item == active ? S.CLW : S.CLGrey1]}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <View style={[S.PH20]}>
                    <Text style={[S.F18, S.CLW, S.FW700, S.MB10]}>Token List</Text>
                    {
                        data.map((item, key) => (
                            <TouchableOpacity key={key} style={[S.PH20, S.PV15, S.MB5, S.BKBase, S.BorderRadius5, S.ROW, S.Jbetween]} onPress={() => navigation.push('TokenDetail', item)}>
                                <View style={[S.ROW, S.Acenter]}>
                                    <Image source={item.Icon} style={[S.IconLg]} resizeMode='contain' />
                                    <View style={[S.ML10]}>
                                        <Text style={[S.F17, S.CLW, S.FW400]}> {item.symbol} </Text>
                                        <Text style={[S.F15, S.CLW, S.FW400]}> {item.volume} </Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={[S.F16, S.CLW, S.FW400]}> $ {item.price} </Text>
                                    {
                                        item.gain > 0 ? (
                                            <Text style={[S.F14, S.CLPrimary, S.FW700, S.MT10]}>
                                                +{item.gain}({Math.floor(Math.abs(item.gain))}%)
                                            </Text>
                                        ) : (
                                            <Text style={[S.F14, S.CLDanger, S.FW700, S.MT10]}>
                                                {item.gain}({Math.floor(Math.abs(item.gain))}%)
                                            </Text>
                                        )
                                    }
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                    <TouchableOpacity style={[S.MT10]}>
                        <Text style={[S.Tcenter, S.F16, S.CLWarning, S.FW400]}>See All Tokens</Text>
                    </TouchableOpacity>
                </View>
                <View style={[S.MT20]}>
                    <Text style={[S.PH20, S.F18, S.CLW, S.FW700, S.MB10]}> Top Gainers & Losers </Text>
                    <View style={[S.PL20]}>
                        <Content horizontal showsHorizontalScrollIndicator={false}>
                            <View style={[S.BorderRadius10, S.BKBase, S.MR20, { width: normalize(150), overflow: 'hidden' }]}>
                                <View style={[S.PV20, S.PH10]}>
                                    <View style={[S.ROW, S.Acenter, S.ML10]}>
                                        <Image source={Images.Bitcoin} style={[S.IconLg]} resizeMode='contain' />
                                        <Text style={[S.F16, S.CLW, S.FW700]}> Bitcoin </Text>
                                    </View>
                                    <View style={[S.ROW, S.Acenter]}>
                                        <Text style={[S.F24, S.CLW, S.FW700]}> 128.76 </Text>
                                        <Text style={[S.F16, S.CLW, S.FW700]}> BTC </Text>
                                    </View>
                                    <Text style={[S.F14, S.CLPrimary, S.FW700, S.ML10]}> +18.33 (18%) </Text>
                                </View>
                                <View style={[S.Acenter, { width: normalize(150), overflow: 'hidden' }]}>
                                    <SlideAreaChart
                                        style={[{ backgroundColor: 'transparent' }]}
                                        axisWidth={0}
                                        axisHeight={0}
                                        data={[
                                            { x: 1, y: Math.floor(Math.random(1) * 100) },
                                            { x: 2, y: Math.floor(Math.random(1) * 100) },
                                            { x: 3, y: Math.floor(Math.random(1) * 100) },
                                            { x: 4, y: Math.floor(Math.random(1) * 100) },
                                            { x: 5, y: Math.floor(Math.random(1) * 100) },
                                            { x: 6, y: Math.floor(Math.random(1) * 100) },
                                            { x: 7, y: Math.floor(Math.random(1) * 100) },
                                            { x: 8, y: Math.floor(Math.random(1) * 100) },
                                            { x: 9, y: Math.floor(Math.random(1) * 100) },
                                        ]}
                                        scrollable={false}
                                        animated={false}
                                        alwaysShowIndicator={false}
                                        chartLineColor={'rgb(34, 161, 235)'}
                                        fillColor='rgba(34, 161, 235, 0.6)'
                                        width={normalize(170)}
                                        height={normalize(80)}
                                        yAxisProps={{
                                            verticalLineWidth: 0,
                                            horizontalLineWidth: 0,
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={[S.BorderRadius10, S.BKBase, S.MR20, { width: normalize(150), overflow: 'hidden' }]}>
                                <View style={[S.PH10, S.PV20]}>
                                    <View style={[S.ROW, S.Acenter, S.ML10]}>
                                        <Image source={Images.Monero} style={[S.IconLg]} resizeMode='contain' />
                                        <Text style={[S.F16, S.CLW, S.FW700]}> Monero </Text>
                                    </View>
                                    <View style={[S.ROW, S.Acenter]}>
                                        <Text style={[S.F24, S.CLW, S.FW700]}> 128.76 </Text>
                                        <Text style={[S.F16, S.CLW, S.FW700]}> BTC </Text>
                                    </View>
                                    <Text style={[S.F14, S.CLDanger, S.ML10, S.FW700]}> +18.33 (18%) </Text>
                                </View>
                                <View style={[S.Acenter, { width: normalize(150), overflow: 'hidden' }]}>
                                    <SlideAreaChart
                                        style={[{ backgroundColor: 'transparent' }]}
                                        axisWidth={0}
                                        axisHeight={0}
                                        data={[
                                            { x: 1, y: Math.floor(Math.random(1) * 100) },
                                            { x: 2, y: Math.floor(Math.random(1) * 100) },
                                            { x: 3, y: Math.floor(Math.random(1) * 100) },
                                            { x: 4, y: Math.floor(Math.random(1) * 100) },
                                            { x: 5, y: Math.floor(Math.random(1) * 100) },
                                            { x: 6, y: Math.floor(Math.random(1) * 100) },
                                            { x: 7, y: Math.floor(Math.random(1) * 100) },
                                            { x: 8, y: Math.floor(Math.random(1) * 100) },
                                            { x: 9, y: Math.floor(Math.random(1) * 100) },
                                        ]}
                                        animated={false}
                                        scrollable={false}
                                        alwaysShowIndicator={false}
                                        chartLineColor={'rgb(255, 90, 117)'}
                                        fillColor='rgba(255, 90, 117, 0.6)'
                                        width={normalize(170)}
                                        height={normalize(80)}
                                        yAxisProps={{
                                            verticalLineWidth: 0,
                                            horizontalLineWidth: 0,
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={[S.BorderRadius10, S.BKBase, S.MR20, { width: normalize(150), overflow: 'hidden' }]}>
                                <View style={[S.PH10, S.PV20]}>
                                    <View style={[S.ROW, S.Acenter, S.ML10]}>
                                        <Image source={Images.Ethereum} style={[S.IconLg]} resizeMode='contain' />
                                        <Text style={[S.F16, S.CLW, S.FW700]}> Ethereum </Text>
                                    </View>
                                    <View style={[S.ROW, S.Acenter]}>
                                        <Text style={[S.F24, S.CLW, S.FW700]}> 128.76 </Text>
                                        <Text style={[S.F16, S.CLW, S.FW700]}> BTC </Text>
                                    </View>
                                    <Text style={[S.F14, S.CLDanger, S.ML10, S.FW700]}> +18.33 (18%) </Text>
                                </View>
                                <View style={[S.Acenter, { width: normalize(150), overflow: 'hidden' }]}>
                                    <SlideAreaChart
                                        style={[{ backgroundColor: 'transparent' }]}
                                        axisWidth={0}
                                        axisHeight={0}
                                        data={[
                                            { x: 1, y: Math.floor(Math.random(1) * 100) },
                                            { x: 2, y: Math.floor(Math.random(1) * 100) },
                                            { x: 3, y: Math.floor(Math.random(1) * 100) },
                                            { x: 4, y: Math.floor(Math.random(1) * 100) },
                                            { x: 5, y: Math.floor(Math.random(1) * 100) },
                                            { x: 6, y: Math.floor(Math.random(1) * 100) },
                                            { x: 7, y: Math.floor(Math.random(1) * 100) },
                                            { x: 8, y: Math.floor(Math.random(1) * 100) },
                                            { x: 9, y: Math.floor(Math.random(1) * 100) },
                                        ]}
                                        animated={false}
                                        scrollable={false}
                                        alwaysShowIndicator={false}
                                        chartLineColor={'rgb(129, 70, 235)'}
                                        fillColor='rgba(129, 70, 235, 0.6)'
                                        width={normalize(170)}
                                        height={normalize(80)}
                                        yAxisProps={{
                                            verticalLineWidth: 0,
                                            horizontalLineWidth: 0,
                                        }}
                                    />
                                </View>
                            </View>
                        </Content>
                    </View>
                </View>
            </Content>
            <Footers navigation={navigation} />
        </Container>
    )
}

export default TokenListScreen

const S = StyleSheet.create({
    ...Styles,
})

