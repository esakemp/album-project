import callBuilder from '../util/apiConnection'

export const getGenreCounts = () => {
  const route = '/genrecounts'
  const prefix = 'GET_GENRES'
  return callBuilder(route, prefix)
}

const reducer = (state = { data: [], pending: false, error: false }, action) => {
  switch (action.type) {
    case 'GET_GENRES_ATTEMPT':
      return {
        ...state,
        pending: true,
        error: false,
      }
    case 'GET_GENRES_FAILURE':
      return {
        ...state,
        pending: false,
        error: true,
      }
    case 'GET_GENRES_SUCCESS':
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
