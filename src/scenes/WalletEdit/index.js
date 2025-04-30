import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Container, Content, Icon } from 'native-base'
import { Styles } from '../../constants'
import { Footers } from '../../components'

const data = [
    { volume: '15.526 BTC', price: 22561, data: 'May 10, 2021', type: 'Withdrawn' },
    { volume: '16.554 BTC', price: 72561, data: 'May 10, 2021', type: 'Deposited' },
    { volume: '17.526 ETH', price: 52561, data: 'May 10, 2021', type: 'Sent' },
    { volume: '17.526 ETH', price: 52561, data: 'May 10, 2021', type: 'Withdrawn' },
    { volume: '47.526 NEO', price: 82561, data: 'April 30, 2021', type: 'Deposited' },
    { volume: '15.526 BTC', price: 22561, data: 'May 10, 2021', type: 'Withdrawn' },
    { volume: '16.554 BTC', price: 72561, data: 'May 10, 2021', type: 'Deposited' },
    { volume: '17.526 ETH', price: 52561, data: 'May 10, 2021', type: 'Sent' },
    { volume: '17.526 ETH', price: 52561, data: 'May 10, 2021', type: 'Withdrawn' },
    { volume: '47.526 NEO', price: 82561, data: 'April 30, 2021', type: 'Deposited' },
    { volume: '15.526 BTC', price: 22561, data: 'May 10, 2021', type: 'Withdrawn' },
    { volume: '16.554 BTC', price: 72561, data: 'May 10, 2021', type: 'Deposited' },
    { volume: '17.526 ETH', price: 52561, data: 'May 10, 2021', type: 'Sent' },
    { volume: '17.526 ETH', price: 52561, data: 'May 10, 2021', type: 'Withdrawn' },
    { volume: '47.526 NEO', price: 82561, data: 'April 30, 2021', type: 'Deposited' },
]

const WalletCreateScreen = ({ navigation }) => {
    return (
        <Container style={[S.BKBlack]}>
            <View style={[S.ROW, S.Jbetween, S.Acenter, S.P20]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon type="Feather" name="chevron-left" style={[S.CLWarning, S.F24]} />
                </TouchableOpacity>
                <Text style={[S.F20, S.CLW, S.FW700]}> All Transactions </Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon type="AntDesign" name="close" style={[S.CLWarning, S.F24]} />
                </TouchableOpacity>
            </View>
            <Content contentContainerStyle={[S.PH20]} showsVerticalScrollIndicator={false}>
                {
                    data.map((item, key) => (
                        <View key={key} style={[S.PH20, S.PV15, S.MB5, S.BKBase, S.BorderRadius5, S.ROW, S.Jbetween]}>
                            <View style={[S.ROW, S.Acenter]}>
                                {
                                    item.type === 'Withdrawn' &&
                                    <Icon type="Feather" name="arrow-left-circle" style={[S.CLDanger, S.F24, { transform: [{ rotate: '45deg' }] }]} />
                                }
                                {
                                    item.type === 'Sent' &&
                                    <Icon type="Feather" name="arrow-right-circle" style={[S.CLPrimary, S.F24, { transform: [{ rotate: '-45deg' }] }]} />
                                }
                                {
                                    item.type === 'Deposited' &&
                                    <Icon type="Feather" name="arrow-right-circle" style={[S.CLSuccess, S.F24, { transform: [{ rotate: '45deg' }] }]} />
                                }
                                <View style={[S.ML10]}>
                                    <Text style={[S.F17, S.CLW, S.FW400]}> $ {item.price} </Text>
                                    <Text style={[S.F15, S.CLW, S.FW400]}> {item.volume} </Text>
                                </View>
                            </View>
                            <View style={[S.Aend]}>
                                <Text style={[S.F16, S.CLDanger, S.FW400]}> {item.type} </Text>
                                <Text style={[S.F14, S.CLGrey, S.FW400, S.MT10]}> {item.data} </Text>
                            </View>
                        </View>
                    ))
                }
            </Content>
            <Footers navigation={navigation} />
        </Container>
    )
}

export default WalletCreateScreen

const S = StyleSheet.create({
    ...Styles,
})

