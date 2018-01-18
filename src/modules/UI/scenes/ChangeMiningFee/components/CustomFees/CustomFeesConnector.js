// @flow

import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import type { State } from '../../../../../ReduxTypes'
import * as Constants from '../../../../../../constants/indexConstants.js'
import CustomFees from './CustomFees.ui'
import {
  OPEN_MODAL_VALUE,
  wrap
} from '../../../WalletList/components/WalletOptions/action'

export const mapStateToProps = (state: State) => ({})

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  onPressed: () => {
    dispatch(wrap(OPEN_MODAL_VALUE(Constants.CUSTOM_FEES)))
    Actions.pop()
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomFees)
