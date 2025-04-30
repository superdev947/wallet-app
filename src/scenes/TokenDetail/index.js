import React, { Fragment, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { Button, Container, Content, Icon, Textarea } from 'native-base'
import normalize from 'react-native-normalize'
import { SlideAreaChart } from '@connectedcars/react-native-slide-charts'
import { COLOR, Images, LAYOUT, Styles } from '../../constants'
import { BottomModal, Footers } from '../../components'
import Carousel from 'react-native-snap-carousel'
import Svg, { Mask, Path } from 'react-native-svg'


const data = [
    { volume: '15.526 BTC', price: 22561, data: 'May 10, 2021' },
    { volume: '16.554 BTC', price: 72561, data: 'May 10, 2021' },
    { volume: '17.526 ETH', price: 52561, data: 'May 10, 2021' },
    { volume: '17.526 ETH', price: 52561, data: 'May 10, 2021' },
    { volume: '47.526 NEO', price: 82561, data: 'April 30, 2021' },
]
const date = ['Day', 'Week', 'Month', 'Year', 'All']
const TokenListScreen = ({ navigation }) => {
    const Detail = navigation.state.params
    const [modalSwap, setModalSwap] = useState(false)
    const [modalSend, setModalSend] = useState(false)
    const [modalQR, setModalQR] = useState(false)
    const [active, setActive] = useState('Week')

    return (
        <Container style={[S.BKBlack]}>
            <Content contentContainerStyle={[S.PV20]}>
                <View style={[S.ROW, S.Jbetween, S.Acenter, S.PH20]}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon type="Feather" name="chevron-left" style={[S.CLWarning, S.F24]} />
                    </TouchableOpacity>
                    <View style={[S.ROW]}>
                        <Image source={Detail.Icon} style={[S.IconLg]} resizeMode='contain' />
                        <Text style={[S.ML5, S.F18, S.CLW, S.FW700]}> Token Overview </Text>
                    </View>
                    <Icon type="Feather" name="align-right" style={[S.CLWarning, S.F24]} />
                </View>
                <View style={[S.Acenter]}>
                    <Text style={[S.F30, S.CLW, S.FW700, S.MV5]}> $4,409.98 </Text>
                    <Text style={[S.F15, S.CLW, S.FW400]}> {Detail.volume} </Text>
                </View>
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
                <View style={[S.ROW, S.Jaround, S.PH30]}>
                    <View style={[S.Acenter]}>
                        <TouchableOpacity style={[S.P10, S.BKBase, S.BorderRadius5, S.AScenter]} onPress={() => setModalSwap(!modalSwap)}>
                            <Icon type="MaterialIcons" name="shuffle" style={[S.CLW, S.F24]} />
                        </TouchableOpacity>
                        <Text style={[S.F14, S.MT5, S.CLW, S.FW400]}>Swap</Text>
                    </View>
                    <View style={[S.Acenter]}>
                        <TouchableOpacity style={[S.P10, S.BKBase, S.BorderRadius5, S.AScenter]} onPress={() => setModalQR(!modalQR)}>
                            <Icon type="Feather" name="arrow-left-circle" style={[S.CLW, S.F24, { transform: [{ rotate: '45deg' }] }]} />
                        </TouchableOpacity>
                        <Text style={[S.F14, S.MT5, S.CLW, S.FW400]}>Withdraw</Text>
                    </View>
                    <View style={[S.Acenter]}>
                        <TouchableOpacity style={[S.P10, S.BKBase, S.BorderRadius5, S.AScenter]} onPress={() => setModalSend(!modalSend)}>
                            <Icon type="Feather" name="arrow-right-circle" style={[S.CLW, S.F24, { transform: [{ rotate: '-45deg' }] }]} />
                        </TouchableOpacity>
                        <Text style={[S.F14, S.MT5, S.CLW, S.FW400]}>Send</Text>
                    </View>
                </View>
                <View style={[S.PH20, S.MT20]}>
                    <Text style={[S.F18, S.CLW, S.FW700, S.MB10]}>Latest transactions</Text>
                    {
                        data.map((item, key) => (
                            <View key={key} style={[S.PH20, S.PV15, S.MB5, S.BKBase, S.BorderRadius5, S.ROW, S.Jbetween]}>
                                <View style={[S.ROW, S.Acenter]}>
                                    <Icon type="Feather" name="arrow-left-circle" style={[S.CLDanger, S.F24, { transform: [{ rotate: '45deg' }] }]} />
                                    <View style={[S.ML10]}>
                                        <Text style={[S.F17, S.CLW, S.FW400]}> $ {item.price} </Text>
                                        <Text style={[S.F15, S.CLW, S.FW400]}> {item.volume} </Text>
                                    </View>
                                </View>
                                <View style={[S.Aend]}>
                                    <Text style={[S.F16, S.CLDanger, S.FW400]}> Withdrawn </Text>
                                    <Text style={[S.F14, S.CLGrey, S.FW400, S.MT10]}> {item.data} </Text>
                                </View>
                            </View>
                        ))
                    }
                    <TouchableOpacity style={[S.MT10]} onPress={() => navigation.push('WalletEdit')}>
                        <Text style={[S.Tcenter, S.F16, S.CLWarning, S.FW400]}>See All Transactions</Text>
                    </TouchableOpacity>
                </View>
            </Content>
            <BottomModal
                setModalVisible={setModalQR}
                modalVisible={modalQR}
                title={'QR Code Scan'}
                content={
                    <Fragment>
                        <Carousel
                            data={[
                                { title: 'Bitcoin', Icon: Images.Bitcoin },
                                { title: 'Ethereum', Icon: Images.Ethereum },
                                { title: 'Stellar', Icon: Images.Stellar },
                            ]}
                            renderItem={(({ item }) => (
                                <View style={[S.BKW, S.BorderRadius5, S.ROW, S.PL10, S.PR20, S.PV5, S.Jcenter]}>
                                    <Image source={item.Icon} style={[S.IconLg]} resizeMode='contain' />
                                    <Text style={[S.CLBlack, S.F16, S.ML10]}>{item.title}</Text>
                                </View>
                            ))}
                            sliderWidth={LAYOUT.window.width}
                            itemWidth={normalize(120)}
                            firstItem={1}
                        />
                        <Image source={Images.Qrcode} style={[S.AScenter, S.MT20, { width: normalize(140), height: normalize(140) }]} resizeMode='contain' />
                        <Text style={[S.MT10, S.CLW, S.F16, S.Tcenter]}>{`3M8w2knJKsr3jqMatY\niyuraxVvZAmuZ`}</Text>
                        <View style={[S.W50P, S.ROW, S.Jbetween, S.AScenter, S.Acenter, S.MV20]}>
                            <TouchableOpacity style={[S.ROW]}>
                                <Icon type="Feather" name="copy" style={[S.CLWarning, S.F24]} />
                                <Text style={[S.CLWarning, S.F16]}> Copy </Text>
                            </TouchableOpacity>
                            <View style={{ borderColor: COLOR.warning, borderWidth: StyleSheet.hairlineWidth, height: normalize(20) }} />
                            <TouchableOpacity style={[S.ROW]}>
                                <Icon type="Feather" name="share" style={[S.CLWarning, S.F24]} />
                                <Text style={[S.CLWarning, S.F16]}> Share </Text>
                            </TouchableOpacity>
                        </View>
                    </Fragment>
                }
            />
            <BottomModal
                setModalVisible={setModalSend}
                modalVisible={modalSend}
                title={'Send'}
                content={
                    <Fragment>
                        <Carousel
                            data={[
                                { title: 'Ethereum', Icon: Images.Ethereum },
                                { title: 'Bitcoin', Icon: Images.Bitcoin },
                                { title: 'Stellar', Icon: Images.Stellar },
                            ]}
                            renderItem={(({ item }) => (
                                <View style={[S.BKW, S.BorderRadius5, S.ROW, S.PL10, S.PR20, S.PV5, S.Jcenter]}>
                                    <Image source={item.Icon} style={[S.IconLg]} resizeMode='contain' />
                                    <Text style={[S.CLBlack, S.F16, S.ML10]}>{item.title}</Text>
                                </View>
                            ))}
                            sliderWidth={LAYOUT.window.width}
                            itemWidth={normalize(120)}
                            firstItem={1}
                        />
                        <View style={[S.Acenter, S.PH30]}>
                            <TextInput
                                placeholder={`0.00`}
                                keyboardType='number-pad'
                                placeholderTextColor='rgba(247, 247, 247, 0.5)'
                                style={S.numberInput}
                            />
                            <Text style={[S.CLGrey8, S.F14]}> 0.11 BTC available </Text>
                            <View style={[S.W100P, S.PV10, S.PH20, S.BKBase, S.BorderRadius5]}>
                                <TextInput
                                    placeholder={`Search`}
                                    keyboardType='default'
                                    placeholderTextColor='rgba(247, 247, 247, 0.5)'
                                    style={S.textInput1}
                                />
                                <View style={[S.ROW, S.Acenter, S.MV5]}>
                                    <Image source={Images.user1} style={S.userAvatar} />
                                    <View style={[S.ML20]}>
                                        <Text style={[S.CLW, S.F15]}>Alex McKall</Text>
                                        <Text style={[S.CLW, S.F14]}>333-222-777</Text>
                                    </View>
                                </View>
                                <View style={[S.ROW, S.Acenter, S.MV5]}>
                                    <Image source={Images.user2} style={S.userAvatar} />
                                    <View style={[S.ML20]}>
                                        <Text style={[S.CLW, S.F15]}>Alexander Jo</Text>
                                        <Text style={[S.CLW, S.F14]}>111-444-888</Text>
                                    </View>
                                </View>
                                <View style={[S.ROW, S.Acenter, S.MV5]}>
                                    <Image source={Images.user3} style={S.userAvatar} />
                                    <View style={[S.ML20]}>
                                        <Text style={[S.CLW, S.F15]}>Alexis J.</Text>
                                        <Text style={[S.CLW, S.F14]}>555-778-9632</Text>
                                    </View>
                                </View>
                            </View>
                            <Textarea
                                style={[S.BKW, S.W100P, S.MT20, S.F14, S.PV10, S.BorderRadius5]}
                                rowSpan={3}
                                placeholderTextColor='#979797'
                                placeholder='Message...'
                            />
                            <Button vertical style={[S.PH50, S.BKBase, S.AScenter, S.MV20]}>
                                <Text style={[S.F16, S.CLW, S.FW700]}> Send </Text>
                            </Button>
                        </View>
                    </Fragment>
                }
            />
            <BottomModal
                setModalVisible={setModalSwap}
                modalVisible={modalSwap}
                title={'Swap'}
                content={
                    <Fragment>
                        <Carousel
                            data={[
                                { title: 'Ethereum', Icon: Images.Ethereum },
                                { title: 'Bitcoin', Icon: Images.Bitcoin },
                                { title: 'Stellar', Icon: Images.Stellar },
                            ]}
                            renderItem={(({ item }) => (
                                <View style={[S.BKW, S.BorderRadius5, S.ROW, S.PL10, S.PR20, S.PV5, S.Jcenter]}>
                                    <Image source={item.Icon} style={[S.IconLg]} resizeMode='contain' />
                                    <Text style={[S.CLBlack, S.F16, S.ML10]}>{item.title}</Text>
                                </View>
                            ))}
                            sliderWidth={LAYOUT.window.width}
                            itemWidth={normalize(120)}
                            firstItem={1}
                        />
                        <View style={[S.Acenter]}>
                            <TextInput
                                value={String(2.4389)}
                                style={S.numberInput}
                            />
                            <Text style={[S.CLGrey8, S.F14]}> $16,532.89 </Text>
                            <TouchableOpacity style={[S.MT20]}>
                                <Svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M30 58C45.464 58 58 45.464 58 30C58 14.536 45.464 2 30 2C14.536 2 2 14.536 2 30C2 45.464 14.536 58 30 58Z" fill="#FDD456" stroke="#FEFEFE" stroke-width="3.73333" />
                                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M41.6666 26.5V28.8333C41.6666 29.5333 41.2 30 40.5 30C39.8 30 39.3333 29.5333 39.3333 28.8333V26.5C39.3333 24.5167 37.8166 23 35.8333 23H22.3L24.9833 25.6833C25.45 26.15 25.45 26.85 24.9833 27.3167C24.75 27.55 24.5166 27.6667 24.1666 27.6667C23.8166 27.6667 23.5833 27.55 23.35 27.3167L18.6833 22.65C18.625 22.5917 18.5958 22.5333 18.5666 22.475C18.5375 22.4167 18.5083 22.3583 18.45 22.3C18.3333 21.95 18.3333 21.6 18.45 21.3667C18.45 21.25 18.5666 21.1333 18.6833 21.0167L23.35 16.35C23.8166 15.8833 24.5166 15.8833 24.9833 16.35C25.45 16.8167 25.45 17.5167 24.9833 17.9833L22.3 20.6667H35.8333C39.1 20.6667 41.6666 23.2333 41.6666 26.5ZM20.6667 31.1667C20.6667 30.4667 20.2001 30 19.5001 30C18.8001 30 18.3334 30.4667 18.3334 31.1667V33.5C18.3334 36.7667 20.9001 39.3333 24.1667 39.3333H37.7001L35.0167 42.0167C34.5501 42.4833 34.5501 43.1833 35.0167 43.65C35.2501 43.8833 35.4834 44 35.8334 44C36.1834 44 36.4167 43.8833 36.6501 43.65L41.3167 38.9833C41.3751 38.925 41.4042 38.8667 41.4334 38.8083C41.4626 38.75 41.4917 38.6917 41.5501 38.6333C41.6667 38.2833 41.6667 37.9333 41.5501 37.7C41.5501 37.5833 41.4334 37.4667 41.3167 37.35L36.6501 32.6833C36.1834 32.2167 35.4834 32.2167 35.0167 32.6833C34.5501 33.15 34.5501 33.85 35.0167 34.3167L37.7001 37H24.1667C22.1834 37 20.6667 35.4833 20.6667 33.5V31.1667Z" fill={COLOR.white} />
                                    <Mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="18" y="16" width="24" height="28">
                                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M41.6666 26.5V28.8333C41.6666 29.5333 41.2 30 40.5 30C39.8 30 39.3333 29.5333 39.3333 28.8333V26.5C39.3333 24.5167 37.8166 23 35.8333 23H22.3L24.9833 25.6833C25.45 26.15 25.45 26.85 24.9833 27.3167C24.75 27.55 24.5166 27.6667 24.1666 27.6667C23.8166 27.6667 23.5833 27.55 23.35 27.3167L18.6833 22.65C18.625 22.5917 18.5958 22.5333 18.5666 22.475C18.5375 22.4167 18.5083 22.3583 18.45 22.3C18.3333 21.95 18.3333 21.6 18.45 21.3667C18.45 21.25 18.5666 21.1333 18.6833 21.0167L23.35 16.35C23.8166 15.8833 24.5166 15.8833 24.9833 16.35C25.45 16.8167 25.45 17.5167 24.9833 17.9833L22.3 20.6667H35.8333C39.1 20.6667 41.6666 23.2333 41.6666 26.5ZM20.6667 31.1667C20.6667 30.4667 20.2001 30 19.5001 30C18.8001 30 18.3334 30.4667 18.3334 31.1667V33.5C18.3334 36.7667 20.9001 39.3333 24.1667 39.3333H37.7001L35.0167 42.0167C34.5501 42.4833 34.5501 43.1833 35.0167 43.65C35.2501 43.8833 35.4834 44 35.8334 44C36.1834 44 36.4167 43.8833 36.6501 43.65L41.3167 38.9833C41.3751 38.925 41.4042 38.8667 41.4334 38.8083C41.4626 38.75 41.4917 38.6917 41.5501 38.6333C41.6667 38.2833 41.6667 37.9333 41.5501 37.7C41.5501 37.5833 41.4334 37.4667 41.3167 37.35L36.6501 32.6833C36.1834 32.2167 35.4834 32.2167 35.0167 32.6833C34.5501 33.15 34.5501 33.85 35.0167 34.3167L37.7001 37H24.1667C22.1834 37 20.6667 35.4833 20.6667 33.5V31.1667Z" fill={COLOR.white} />
                                    </Mask>
                                </Svg>
                            </TouchableOpacity>
                            <Text style={[S.CLW, S.F16, S.MV10]}> Selling </Text>
                            <Carousel
                                data={[
                                    { title: 'Ethereum', Icon: Images.Ethereum },
                                    { title: 'Bitcoin', Icon: Images.Bitcoin },
                                    { title: 'Stellar', Icon: Images.Stellar },
                                ]}
                                renderItem={(({ item }) => (
                                    <View style={[S.BKW, S.BorderRadius5, S.ROW, S.PL10, S.PR20, S.PV5, S.Jcenter]}>
                                        <Image source={item.Icon} style={[S.IconLg]} resizeMode='contain' />
                                        <Text style={[S.CLBlack, S.F16, S.ML10]}>{item.title}</Text>
                                    </View>
                                ))}
                                sliderWidth={LAYOUT.window.width}
                                itemWidth={normalize(120)}
                                firstItem={0}
                            />
                            <Text style={[S.CLGrey8, S.F14]}> 4.7845 BTC Available </Text>
                            <Text style={[S.CLW, S.F35, S.FW700]}> 42.431589  </Text>
                            <Button vertical style={[S.PH50, S.BKBase, S.AScenter, S.MV20]}>
                                <Text style={[S.F16, S.CLW, S.FW700]}> Exchange </Text>
                            </Button>
                        </View>
                    </Fragment>
                }
            />
            <Footers navigation={navigation} />
        </Container>
    )
}

export default TokenListScreen

const S = StyleSheet.create({
    ...Styles,
    textInput: {
        borderRadius: normalize(5),
        paddingHorizontal: normalize(10),
        color: COLOR.white,
        marginTop: normalize(10),
        borderColor: COLOR.white,
        borderWidth: StyleSheet.hairlineWidth,
    },
    numberInput: {
        alignSelf: 'center',
        paddingHorizontal: normalize(10),
        minWidth: normalize(150),
        marginTop: normalize(10),
        textAlign: 'center',
        color: COLOR.white,
        borderColor: COLOR.white,
        fontSize: normalize(42),
        fontWeight: 'bold',
        borderWidth: StyleSheet.hairlineWidth,
        borderStyle: 'dotted'
    },
    textInput1: {
        width: '100%',
        color: COLOR.white,
        borderColor: COLOR.white,
        fontSize: normalize(16),
        backgroundColor: 'transparent',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    userAvatar: {
        width: normalize(35),
        height: normalize(35),
        resizeMode: 'contain'
    }
})

