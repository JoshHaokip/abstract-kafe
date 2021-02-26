import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
  } from '../actions'


  // This is to control the toggle of the navbar and the sidebar
  const products_reducer = (state, action) => {
        
    if (action.type === SIDEBAR_OPEN) {
        return { ...state, isSidebarOpen: true }
    } 

    if (action.type === SIDEBAR_CLOSE) {
        return { ...state, isSidebarOpen: false }
      }

        return state
  }

  export default products_reducer