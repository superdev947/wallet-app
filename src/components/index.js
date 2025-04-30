import React, { useState } from "react"
import { StatusBar, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { Button, Footer, FooterTab, Header, Title, Icon } from "native-base"
import { COLOR, LAYOUT, Styles } from "../constants"
import normalize from "react-native-normalize"
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'
import { BlurView } from 'expo-blur'

export const BottomModal = ({ setModalVisible, modalVisible, content, title }) => {
  if (modalVisible) {
    return (
      <View style={S.modal}>
        <BlurView intensity={100} style={[StyleSheet.absoluteFill]} />
        <View style={S.modalCloseCover}>
          <TouchableOpacity style={S.modalCloseButton} onPress={() => setModalVisible(!modalVisible)}>
            <Icon type="AntDesign" name="close" style={[S.CLBlack, S.F24, S.P10]} />
          </TouchableOpacity>
        </View>
        <View style={[S.modalBottom]}>
          <Text style={[S.Tcenter, S.F20, S.CLW, S.FW700, S.MV20]}> {title} </Text>
          {content}
        </View>
      </View>
    )
  } else {
    return <View />
  }
}

export const Headers = ({ title = "", left = null, right = null }) => {
  return (
    <Header style={[S.BKBase, S.ROW, S.Acenter, { height: normalize(60) }]}>
      <View style={{ width: LAYOUT.window.width * 0.2 }}>
        {left}
      </View>
      <View style={{ width: LAYOUT.window.width * 0.5 }}>
        <Title style={[S.Tcenter, S.W100P]}>{title}</Title>
      </View>
      <View style={{ width: LAYOUT.window.width * 0.2 }}>
        {right}
      </View>
    </Header>
  )
}

export const Footers = ({ navigation }) => {
  const onNavigate = (e) => {
    navigation.push(e)
  }
  return (
    <Footer style={{ height: normalize(70), elevation: 20 }}>
      <FooterTab style={[S.BKBlack, S.Acenter, S.Jaround]}>
        <TouchableOpacity style={[S.Acenter]} onPress={() => onNavigate('Home')}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M18.4 11.2H15.4304C15.324 11.2 15.2224 11.2424 15.1472 11.3168L14.0264 12.4384C13.8416 12.6232 13.5312 12.5832 13.3984 12.3576C11.6216 9.324 11.8776 9.7616 11.5304 9.168C11.2656 8.716 10.6448 8.6368 10.2744 9.0072L9.8752 9.4056L9.8816 9.4168L8.2152 11.0832C8.14 11.1576 8.0384 11.2 7.932 11.2H5.6V6.4C5.6 5.9584 5.9584 5.6 6.4 5.6H17.6C18.0416 5.6 18.4 5.9584 18.4 6.4V11.2ZM18.4 17.6C18.4 18.0416 18.0416 18.4 17.6 18.4H6.4C5.9584 18.4 5.6 18.0416 5.6 17.6V12.8H8.596C8.7024 12.8 8.804 12.7576 8.8792 12.6832L10.3512 11.2104C10.536 11.0248 10.8464 11.0648 10.9792 11.2912C12.7376 14.2928 12.3872 13.692 12.8344 14.4624C13.0976 14.916 13.7192 14.9976 14.0904 14.6272L15.8088 12.9168C15.8832 12.8416 15.9848 12.8 16.0904 12.8H18.4V17.6ZM18.4 4H5.6C4.716 4 4 4.716 4 5.6V18.4C4 19.2832 4.716 20 5.6 20H18.4C19.284 20 20 19.2832 20 18.4V5.6C20 4.716 19.284 4 18.4 4Z" fill="#33747B" />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity style={[S.Acenter]} onPress={() => onNavigate('TokenList')}>
          <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <G clip-path="url(#clip0)">
              <Path d="M14.5625 5.50013H12V1.126C12 0.733255 11.8006 0.37551 11.4665 0.169013C11.1324 -0.0374534 10.7233 -0.0558906 10.372 0.119763C10.3675 0.122013 10.363 0.124326 10.3586 0.126701L1.08433 5.11794C0.415622 5.47785 0.000190735 6.17321 0.000190735 6.93261V6.93761V7.2501V14.5625C0.000190735 15.3551 0.645057 16 1.43767 16H14.5625C15.3551 16 16 15.3551 16 14.5625V6.93761C16 6.14499 15.3551 5.50013 14.5625 5.50013ZM10.8235 1.01209C10.8731 0.989283 10.9145 1.00347 10.9407 1.01969C10.9678 1.03641 11 1.06844 11 1.12603V5.50016H2.48428L10.8235 1.01209ZM15 14.5625C15 14.8037 14.8037 15 14.5625 15H1.43767C1.19642 15 1.00018 14.8037 1.00018 14.5625V7.2501V6.93761C1.00018 6.69636 1.19642 6.50011 1.43767 6.50011H14.5625C14.8037 6.50011 15 6.69636 15 6.93761V14.5625Z" fill="#33747B" />
              <Path d="M13 11.7501C12.4486 11.7501 12 11.3015 12 10.7501C12 10.1987 12.4486 9.75009 13 9.75009C13.5514 9.75009 14 10.1987 14 10.7501C14 11.3015 13.5513 11.7501 13 11.7501ZM13 10.7501C13 10.7505 13 10.7507 13 10.7507L13 10.7501Z" fill="#33747B" />
            </G>
            <Defs>
              <ClipPath id="clip0">
                <Rect width="16" height="16" fill="white" />
              </ClipPath>
            </Defs>
          </Svg>
        </TouchableOpacity>
        <View>
          <TouchableOpacity onPress={() => onNavigate('WalletCreate')}>
            <Svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <Rect width="48" height="48" rx="24" fill="#FDD456" />
              <Path d="M29.7472 25.6403C28.1325 23.6907 26.0915 22.617 24 22.617C21.9085 22.617 19.8674 23.6907 18.2528 25.6403C16.8014 27.3928 15.9349 29.6013 15.9349 31.5482C15.9349 32.494 16.224 33.2144 16.7942 33.6894C17.357 34.1584 18.1 34.317 18.929 34.317C19.811 34.317 20.7904 34.1373 21.7527 33.9608C22.5936 33.8065 23.3879 33.6608 24 33.6608C24.5284 33.6608 25.2734 33.7991 26.062 33.9455C27.905 34.2877 29.9939 34.6755 31.2006 33.6721C31.7743 33.1952 32.0651 32.4806 32.0651 31.5482C32.0652 29.6013 31.1987 27.3928 29.7472 25.6403Z" fill="white" />
              <Path d="M29.9123 15.0537C29.3215 14.1826 28.4755 13.6831 27.5912 13.6831C26.7069 13.6831 25.8609 14.1827 25.2701 15.0537C24.7274 15.8539 24.4285 16.9047 24.4285 18.0127C24.4285 19.1206 24.7274 20.1715 25.2701 20.9717C25.8609 21.8427 26.7069 22.3423 27.5912 22.3423C28.4756 22.3423 29.3215 21.8427 29.9123 20.9717C30.4551 20.1715 30.754 19.1206 30.754 18.0127C30.754 16.9047 30.4551 15.8539 29.9123 15.0537Z" fill="white" />
              <Path d="M22.7299 15.0537C22.1391 14.1826 21.2932 13.683 20.4088 13.683C19.5245 13.683 18.6785 14.1826 18.0877 15.0537C17.545 15.8539 17.2461 16.9047 17.2461 18.0127C17.2461 19.1206 17.5449 20.1714 18.0877 20.9716C18.6785 21.8427 19.5245 22.3423 20.4088 22.3423C21.2932 22.3423 22.1391 21.8427 22.7299 20.9716C23.2726 20.1714 23.5716 19.1206 23.5716 18.0127C23.5715 16.9047 23.2726 15.8538 22.7299 15.0537Z" fill="white" />
              <Path d="M35.8603 21.85C35.6221 21.0398 35.1116 20.4511 34.4228 20.1924C33.8686 19.9842 33.2429 20.0195 32.6611 20.2918C31.8593 20.667 31.204 21.4418 30.8632 22.4174C30.5847 23.2146 30.55 24.0573 30.7655 24.7903C31.0036 25.6005 31.5142 26.1892 32.2029 26.4479C32.4413 26.5374 32.6928 26.5819 32.9483 26.5819C33.2871 26.5819 33.633 26.5037 33.9647 26.3485C34.7665 25.9733 35.4218 25.1985 35.7626 24.223V24.2229C36.0411 23.4257 36.0758 22.583 35.8603 21.85Z" fill="white" />
              <Path d="M17.1369 22.4173C16.7961 21.4416 16.1407 20.6669 15.339 20.2918C14.7571 20.0195 14.1314 19.9842 13.5772 20.1923C12.8884 20.4511 12.3779 21.0398 12.1397 21.8499C11.9243 22.5829 11.959 23.4256 12.2375 24.2228V24.2229C12.5783 25.1985 13.2337 25.9732 14.0354 26.3484C14.3671 26.5036 14.713 26.5818 15.0518 26.5818C15.3073 26.5818 15.5588 26.5373 15.7972 26.4478C16.486 26.189 16.9965 25.6003 17.2347 24.7902C17.4501 24.0573 17.4153 23.2145 17.1369 22.4173Z" fill="white" />
            </Svg>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={[S.Acenter]} onPress={() => onNavigate('Received')}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M13.8488 18.1318C14.8616 16.4896 15.4504 14.6633 15.6056 12.8026H18.344C18.0264 15.3343 16.2312 17.4104 13.8488 18.1318ZM12.004 18.0045C10.852 16.4456 10.1752 14.6465 9.996 12.8026H14.0048C13.828 14.6457 13.1536 16.4448 12.004 18.0045ZM5.6552 12.8026H8.3944C8.5512 14.6641 9.1432 16.4921 10.1592 18.1342C7.7728 17.4152 5.9736 15.3375 5.6552 12.8026ZM9.8304 5.98332C8.9408 7.61027 8.4592 9.39656 8.3736 11.2013H5.6552C5.9584 8.78485 7.6096 6.78799 9.8304 5.98332ZM11.9736 5.5974C11.9808 5.58779 11.988 5.57819 11.9952 5.56858C12.0024 5.57819 12.0088 5.58779 12.016 5.5974C13.244 7.26999 13.9144 9.22041 14.0256 11.2013H9.9736C10.0824 9.22121 10.7496 7.27159 11.9736 5.5974ZM18.344 11.2013H15.6256C15.5376 9.39495 15.0528 7.60787 14.1592 5.97932C16.3856 6.78239 18.0408 8.78085 18.344 11.2013ZM12.684 4.0297C7.9536 3.62776 4 7.35887 4 12.0019C4 16.3511 7.468 19.8741 11.768 19.9966C16.3096 20.1279 20 16.476 20 12.0019C20 7.87209 16.8544 4.38599 12.684 4.0297Z" fill="#33747B" />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity style={[S.Acenter]} onPress={() => onNavigate('Settings')}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M17.25 18.4H6.75054C6.18542 18.4 5.76812 17.8424 5.98127 17.3296C6.97021 14.9584 9.29354 13.6 11.9999 13.6C14.707 13.6 17.0304 14.9584 18.0193 17.3296C18.2325 17.8424 17.8152 18.4 17.25 18.4ZM8.73333 8.79998C8.73333 7.03518 10.1992 5.59998 11.9999 5.59998C13.8014 5.59998 15.2664 7.03518 15.2664 8.79998C15.2664 10.5648 13.8014 12 11.9999 12C10.1992 12 8.73333 10.5648 8.73333 8.79998ZM19.9645 18.1088C19.3708 15.4216 17.5138 13.4384 15.0696 12.5384C16.3648 11.5168 17.1202 9.86478 16.8425 8.05598C16.5208 5.95758 14.7389 4.27838 12.5879 4.03358C9.61857 3.69518 7.10006 5.95918 7.10006 8.79998C7.10006 10.312 7.81543 11.6592 8.93096 12.5384C6.48595 13.4384 4.62973 15.4216 4.03522 18.1088C3.81963 19.0856 4.6232 20 5.64318 20H18.3566C19.3774 20 20.1809 19.0856 19.9645 18.1088Z" fill="#33747B" />
          </Svg>
        </TouchableOpacity>
      </FooterTab>
    </Footer>
  )
}


const S = StyleSheet.create({
  ...Styles,
  container: {
    position: 'absolute',
    elevation: 10,
    width: LAYOUT.window.width,
    height: LAYOUT.window.height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  icon: {
    width: normalize(23),
    height: normalize(23)
  },
  logo: {
    width: normalize(35),
    height: normalize(35)
  },
  modal: {
    width: '100%',
    height: LAYOUT.window.height - StatusBar.currentHeight - normalize(70),
    position: 'absolute',
    justifyContent: 'flex-end',
  },
  modalCloseCover: {
    alignItems: 'flex-end',
    top: normalize(25),
    zIndex: 10,
    right: -2
  },
  modalCloseButton: {
    borderRadius: normalize(50),
    borderWidth: 2,
    borderColor: COLOR.black,
    backgroundColor: COLOR.white,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  modalBottom: {
    backgroundColor: COLOR.black,
    borderTopLeftRadius: normalize(15),
    width: '100%',
  },
})

