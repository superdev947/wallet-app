/**
 * auth reducer
 */
import produce from 'immer'

const initialState = {
  user: null,
}

export default function reducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'SET_USERINFO':
        draft.user = action.payload.user
        return
    }
  })
}
