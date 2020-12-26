import callBuilder from '../util/apiConnection'

export const getBands = () => {
  const route = '/bands'
  const prefix = 'GET_BANDS'
  return callBuilder(route, prefix)
}

const reducer = (state = { data: [], pending: false, error: false }, action) => {
  switch (action.type) {
    case 'GET_BANDS_ATTEMPT':
      return {
        ...state,
        pending: true,
        error: false,
      }
    case 'GET_BANDS_FAILURE':
      return {
        ...state,
        pending: false,
        error: true,
      }
    case 'GET_BANDS_SUCCESS':
      return {
        data: action.response,
        pending: false,
        error: false,
      }
    default:
      return state
  }
}

export default reducer
