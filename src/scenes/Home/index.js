import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { Container, Content, Icon } from 'native-base'
import normalize from 'react-native-normalize'
import { Images, Styles } from '../../constants'
import { Footers } from '../../components'
import { SlideAreaChart } from '@connectedcars/react-native-slide-charts'

const data = [
    { symbol: 'BTC/USD', volume: '15.526.223', gain: -18.33, price: 22561 },
    { symbol: 'ETH/USD', volume: '16.554.254', gain: 18.33, price: 72561 },
    { symbol: 'BNB/USD', volume: '17.526', gain: 18.33, price: 52561 },
    { symbol: 'BNB/BTC', volume: '47.526', gain: 18.33, price: 82561 },
]

const HomeScreen = ({ navigation }) => {
    return (
        <Container style={[S.BKBlack]}>
            <Content contentContainerStyle={[S.PV20]}>
                <View style={[S.PH20]}>
                    <View style={[S.W100P, S.BKBase, S.Acenter, S.P20, S.BorderRadius5]}>
                        <View style={[S.ROW, S.W100P, S.Jbetween, S.Aend]}>
                            <View style={{ width: normalize(24) }} />
                            <Text style={[S.F14, S.CLGrey, S.FW400]}> Total Portfolio Value </Text>
                            <TouchableOpacity>
                                <Icon type='SimpleLineIcons' name="refresh" style={[S.F22, S.CLWarning]} />
                            </TouchableOpacity>
                        </View>
                        <Text style={[S.F30, S.CLW, S.FW700, S.MV5]}> $4,409.98 </Text>
                        <View style={[S.ROW]}>
                            <Text style={[S.F16, S.CLWarning, S.FW700]}> + $342.87 </Text>
                            <Text style={[S.F16, S.CLW, S.FW700]}> last month </Text>
                        </View>
                    </View>
                    <View style={[S.MT20]}>
                        <Text style={[S.F18, S.CLW, S.FW700, S.MB10]}>Favorites</Text>
                        {
                            data.map((item, key) => (
                                <View key={key} style={[S.PH20, S.PV15, S.MB5, S.BKBase, S.BorderRadius5, S.ROW, S.Jbetween]}>
                                    <View style={{ width: '40%' }}>
                                        <Text style={[S.F16, S.CLW, S.FW700]}> {item.symbol} </Text>
                                        <Text style={[S.F14, S.CLGrey8, S.FW400, S.MT10]}> Vol. {item.volume} </Text>
                                    </View>
                                    <View style={{ width: '30%' }}>
                                        <Text style={[S.F16, S.CLW, S.FW400]}> {item.price} </Text>
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
                                    <View style={[S.Jcenter]}>
                                        {
                                            item.gain < 0 ?
                                                <Icon type="Feather" name="trending-down" style={[S.F30, S.CLDanger]} />
                                                :
                                                <Icon type="Feather" name="trending-up" style={[S.F30, S.CLPrimary]} />
                                        }
                                    </View>
                                </View>
                            ))
                        }
                    </View>
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

export default HomeScreen

const S = StyleSheet.create({
    ...Styles,
})

