
export const getCar = state => {
  return state.vehicle
}

export const getRoute = state => {
  return state.route
}

// export const getStartDest = state => {
//   if (state.route === null) {
//     return 'Destination'
//   }
//   return state.route.legs[0].start_address
// }

export const getEndDest = state => {
  if (state.route === null) {
    return null
  }
  return state.route.legs.slice(-1)[0].end_address
}

export const getFinalValue = state => {
  return state.finalCalc
}

export const getPassengers = state => {
  return state.passengers
}
export const getGasPrice = state => {
  return state.gasPrice
}
