import { Dimensions, StatusBar, Platform } from 'react-native'
import { isTablet } from 'react-native-device-info'

const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window')

let isIPhoneX = false

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
  isIPhoneX =
    W_HEIGHT === 780 ||
    W_WIDTH === 780 ||
    W_HEIGHT === 812 ||
    W_WIDTH === 812 ||
    W_HEIGHT === 844 ||
    W_WIDTH === 844 ||
    W_HEIGHT === 896 ||
    W_WIDTH === 896 ||
    W_HEIGHT === 926 ||
    W_WIDTH === 926
}

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const widthPx = (widthPercent) => {
  const elemWidth = typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent)
  return (screenWidth * elemWidth) / 100
}

const heightPx = (heightPercent) => {
  const elemHeight = typeof heightPercent === 'number' ? heightPercent : parseFloat(heightPercent)
  const StatusBarH = getStatusBarHeight() ? getStatusBarHeight().toFixed(0) : 0
  return ((screenHeight - StatusBarH) * elemHeight) / 100
}

const font = (font) => {
  const fontSize = typeof font === 'number' ? font : parseFloat(font)
  return (screenWidth * fontSize) / 100
}

const getStatusBarHeight = () => {
  return Platform.select({
    ios: isIPhoneX ? 78 : 20,
    android: StatusBar.currentHeight > 24 ? 0 : StatusBar.currentHeight,
    default: 0
  })
}

const isIPhoneXSeries = () => {
  return Platform.OS === 'android' ? 0 : isIPhoneX ? 34 : 0
}

const isAndroidNouch = Platform.OS === 'android' ? StatusBar.currentHeight > 24 : false

const [shortDimension, longDimension] =
  W_WIDTH < W_HEIGHT ? [W_WIDTH, W_HEIGHT] : [W_HEIGHT, W_WIDTH]

// guideline size
const guidelineBaseWidth = 375
const guidelineBaseHeight = 812

const scale = (size) => {
    console.log("this is ",size)
    console.log("this is ",shortDimension , guidelineBaseWidth)
    console.log("this is ", W_HEIGHT, W_WIDTH )
    return (shortDimension / guidelineBaseWidth) * size
}
const verticalScale = (size) => (longDimension / guidelineBaseHeight) * size
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor

const isTab = () => {
  if (Platform.isPad) {
    return true
  }
  if (isTablet()) {
    return true
  }
  return false
}

export default {
  widthPx,
  heightPx,
  isIPhoneXSeries,
  font,
  isAndroidNouch,
  isIPhoneX,
  getStatusBarHeight,
  scale,
  verticalScale,
  moderateScale,
  isTab,
  W_HEIGHT,
  W_WIDTH
}
