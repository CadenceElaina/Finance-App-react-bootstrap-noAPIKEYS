import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true)
  //const [watchlist, setWatchlist] = useState([])
  const changeMode = () => {
    setDarkMode(!darkMode);
    // console.log(darkMode);
    //console.log(searchText);
  };


  //custom hook
  return <AppContext.Provider value={{ darkMode, changeMode }}>
    {children}
  </AppContext.Provider>

}
export const useGlobalContext = () => {
  return useContext(AppContext)
}



export { AppContext, AppProvider }