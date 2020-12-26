import callBuilder from '../util/apiConnection'

export const getAlbums = () => {
  const route = '/albums'
  const prefix = 'GET_ALBUMS'
  return callBuilder(route, prefix)
}

const reducer = (state = { data: [], pending: false, error: false }, action) => {
  switch (action.type) {
    case 'GET_ALBUMS_ATTEMPT':
      return {
        ...state,
        pending: true,
        error: false,
      }
    case 'GET_ALBUMS_FAILURE':
      return {
        ...state,
        pending: false,
        error: true,
      }
    case 'GET_ALBUMS_SUCCESS':
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
