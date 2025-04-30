let navigator
export const setNavigator = (nav) => {
  /**
   * navigate setting
   */
  navigator = nav
}


export const navigate = (e, params = {}) => {
  /**
   * navigate use
   */
  if (navigator) {
    navigator.push(e, params)
  }
}

export { navigator }