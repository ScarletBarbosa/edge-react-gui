// @flow

import { StatusBar } from 'react-native'

import { scale } from '../../../../lib/scaling.js'
import THEME from '../../../../theme/variables/airbitz'
import { PLATFORM } from '../../../../theme/variables/platform.js'

const safeAreaHeight = PLATFORM.deviceHeight - StatusBar.currentHeight - PLATFORM.footerHeight

export default {
  header: {
    backgroundColor: THEME.COLORS.ACCENT_BLUE,
    height: scale(48),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: scale(12)
  },
  logoIcon: {
    width: scale(25),
    height: scale(25)
  },
  exchangeContainer: {
    paddingHorizontal: scale(20)
  },
  toggleIcon: {
    fontSize: scale(18),
    color: THEME.COLORS.GRAY_4
  },
  toggleButton: {
    backgroundColor: THEME.COLORS.PRIMARY,
    height: scale(58),
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  safeAreaView: {
    backgroundColor: 'transparent',
    height: Number.isNaN(safeAreaHeight) ? void 0 : safeAreaHeight,
    position: 'relative',
    top: StatusBar.currentHeight
  },
  container: {
    alignItems: 'stretch'
  },
  iconImage: {
    width: scale(22),
    height: scale(22)
  },

  /// ///////////////////////////////////////////////////

  userList: {
    container: {
      backgroundColor: THEME.COLORS.WHITE,
      flex: 1
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      borderStyle: 'solid',
      borderColor: THEME.COLORS.GRAY_4,
      borderBottomWidth: 0.5
    },
    textContainer: {
      flex: 1,
      paddingVertical: scale(13),
      marginLeft: scale(20)
    },
    text: {
      fontSize: scale(16)
    },
    icon: {
      padding: scale(13)
    }
  },
  underlay: {
    color: `${THEME.COLORS.PRIMARY}${THEME.ALPHA.LOW}`
  },
  debug: {
    borderColor: 'red',
    borderWidth: 1
  }
}
