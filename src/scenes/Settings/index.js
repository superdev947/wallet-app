import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { Container, Content, Icon } from 'native-base'
import normalize from 'react-native-normalize'
import { Images, Styles } from '../../constants'
import { Footers } from '../../components'

const WalletCreateScreen = ({ navigation }) => {
    return (
        <Container style={[S.BKBlack]}>
            <Content contentContainerStyle={[S.PH20]} showsVerticalScrollIndicator={false}>
                <View style={[S.ROW, S.Jbetween, S.PV30]}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon type="Feather" name="chevron-left" style={[S.CLWarning, S.F24]} />
                    </TouchableOpacity>
                    <View style={[S.Acenter]}>
                        <Image source={Images.Profile} style={{ width: normalize(70), height: normalize(70) }} resizeMode='contain' />
                        <Text style={[S.F16, S.CLW, S.FW400]}> John Doe </Text>
                    </View>
                    <View style={{ width: normalize(24) }} />
                </View>
                <TouchableOpacity style={[S.PH20, S.PV15, S.BKBase, S.BorderRadius5, S.ROW, S.Jbetween, S.MT20]}>
                    <Text style={[S.F17, S.CLW, S.FW400]}> Personal Information </Text>
                    <Icon type="Feather" name="chevron-right" style={[S.CLW, S.F24]} />
                </TouchableOpacity>
                <TouchableOpacity style={[S.PH20, S.PV15, S.MT10, S.BKBase, S.BorderRadius5, S.ROW, S.Jbetween]}>
                    <Text style={[S.F17, S.CLW, S.FW400]}> Bank Account </Text>
                    <Icon type="Feather" name="chevron-right" style={[S.CLW, S.F24]} />
                </TouchableOpacity>
                <Text style={[S.MT25, S.MB10, S.F17, S.CLW, S.FW400]}> Settings </Text>
                <TouchableOpacity style={[S.PH20, S.PV15, S.BKBase, S.BorderRadius5, S.ROW, S.Jbetween]}>
                    <Text style={[S.F17, S.CLW, S.FW400]}> Default Currency </Text>
                    <View style={[S.ROW, S.Acenter]}>
                        <Text style={[S.F15, S.CLGrey8, S.FW400]}> Dollar (USD) </Text>
                        <Icon type="Feather" name="chevron-right" style={[S.CLW, S.F24]} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[S.PH20, S.PV15, S.MT10, S.BKBase, S.BorderRadius5, S.ROW, S.Jbetween]}>
                    <Text style={[S.F17, S.CLW, S.FW400]}> Security </Text>
                    <Icon type="Feather" name="chevron-right" style={[S.CLW, S.F24]} />
                </TouchableOpacity>
                <TouchableOpacity style={[S.PH20, S.PV15, S.MT10, S.BKBase, S.BorderRadius5, S.ROW, S.Jbetween]}>
                    <Text style={[S.F17, S.CLW, S.FW400]}> Help & Support </Text>
                    <Icon type="Feather" name="chevron-right" style={[S.CLW, S.F24]} />
                </TouchableOpacity>
                <TouchableOpacity style={[S.PH20, S.PV15, S.MT10, S.BKBase, S.BorderRadius5, S.ROW, S.Jbetween]}>
                    <Text style={[S.F17, S.CLW, S.FW400]}> Legally </Text>
                    <Icon type="Feather" name="chevron-right" style={[S.CLW, S.F24]} />
                </TouchableOpacity>
            </Content>
            <Footers navigation={navigation} />
        </Container>
    )
}

export default WalletCreateScreen

const S = StyleSheet.create({
    ...Styles,
})

