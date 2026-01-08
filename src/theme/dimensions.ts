import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height // height without Status and Bar
const screenHeight = Dimensions.get('screen').height // height include Status and Bar
const screenWidth = Dimensions.get('screen').width;
const navbarHeight = screenHeight - height + (StatusBar.currentHeight ?? 0)

const DESIGN_WIDTH = 430;
const DESIGN_HEIGHT = 932;
const MAX_FONT_SCALING = 1;

const responsiveSize = (size: number) => {
  const scaleFactor =
    ((screenWidth + screenHeight) / (DESIGN_WIDTH + DESIGN_HEIGHT)) *
    Math.min(PixelRatio.getFontScale(), MAX_FONT_SCALING);

  return size * scaleFactor;
};


const heightHeader = 50 + (initialWindowMetrics?.insets?.top || 0)

const dimensions = {
  androidBottomNavHeight: Platform.OS === 'android' ? navbarHeight : 0,
  deviceHeight: screenHeight,
  deviceWidth: width,
  makeResponsiveSize: responsiveSize,
  getHeightHeader: heightHeader,
  getBottomSpacing: (initialWindowMetrics?.insets?.bottom || responsiveSize(16)) + responsiveSize(16),
  getTabBottomHeight: responsiveSize(80),
  p2: responsiveSize(2),
  p4: responsiveSize(4),
  p6: responsiveSize(6),
  p8: responsiveSize(8),
  p10: responsiveSize(10),
  p12: responsiveSize(12),
  p14: responsiveSize(14),
  p16: responsiveSize(16),
  p18: responsiveSize(18),
  p20: responsiveSize(20),
  p24: responsiveSize(24),
  p28: responsiveSize(28),
  p30: responsiveSize(30),
  p32: responsiveSize(32),
  p34: responsiveSize(34),
  p40: responsiveSize(40),
  p44: responsiveSize(44),
  p48: responsiveSize(48),
  p50: responsiveSize(50),
  p52: responsiveSize(52),
  p56: responsiveSize(56),
  p60: responsiveSize(60),
  p62: responsiveSize(62),
  p64: responsiveSize(64),
  p80: responsiveSize(80),
  p96: responsiveSize(96),
}

const fontSize = {
  makeResponsiveSize: responsiveSize,
  p6: responsiveSize(6),
  p8: responsiveSize(8),
  p12: responsiveSize(12),
  p14: responsiveSize(14),
  p16: responsiveSize(16),
  p20: responsiveSize(20),
  p24: responsiveSize(24),
  p32: responsiveSize(32),
  p40: responsiveSize(40),
  p42: responsiveSize(42),
  p52: responsiveSize(52),
  p72: responsiveSize(72),
  p120: responsiveSize(120),
}

export default { dimensions, fontSize, screenHeight };
