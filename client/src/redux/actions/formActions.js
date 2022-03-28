import { SET_LOADING } from "./types"

export const setLoading = (value) => {
  return {
    type: SET_LOADING,
    payload: value
  }
}
