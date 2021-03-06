import {List} from 'immutable'
import PlatformEmitterDAO from '../../dao/PlatformEmitterDAO'

export const LH_STORY_LIST = 'lhStory/LIST'

const initialState = {
  list: new List()
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LH_STORY_LIST:
      return {
        ...state,
        list: action.list
      }
    default:
      return state
  }
}

const listStory = () => (dispatch) => {
  PlatformEmitterDAO.watchTransfer((error, result) => {
    if (!error) {
      console.log('LH STORY', result)
    }
  }, 1)

  let list = new List()
  list = list.set(0, 'Abc')
  list = list.set(1, 'Xyz')
  dispatch({type: LH_STORY_LIST, list})
}

export {
  listStory
}

export default reducer
