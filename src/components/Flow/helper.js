import { FLOW_KEY } from './constants'

// If there is a flow in localStorage, return it, otherwise return an empty array
export const getInitialValues = (type) =>
  localStorage.getItem(FLOW_KEY)
    ? JSON.parse(localStorage.getItem(FLOW_KEY))?.[type] || []
    : []
