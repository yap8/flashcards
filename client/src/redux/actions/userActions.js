import { STORE_TOKEN, REMOVE_TOKEN } from "./types"

export const storeToken = (token) => {
  localStorage.setItem('authToken', token)

  return {
    type: STORE_TOKEN,
    payload: token
  }
}

export const removeToken = () => {
  localStorage.removeItem('authToken')

  return {
    type: REMOVE_TOKEN
  }
}
