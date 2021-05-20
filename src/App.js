import React, { useEffect, useState } from "react";
import { create } from "jss";
import rtl from "jss-rtl";
import {
  StylesProvider,
  jssPreset,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Login from './Views/Login'
import Home from './Views/Home'

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const rtlTheme = createMuiTheme({ direction: "rtl" })

function AppContent() {

  const [userData, setUserData] = useState({})

  const updateUserData = (data) => {
    setUserData(data)
  }

  useEffect(() => {
    document.body.setAttribute("dir", "rtl");
  }, [])

  return (
    <ThemeProvider theme={rtlTheme}>
      {
        userData.name ? <Home userData={userData}/> : <Login updateUserData={updateUserData}/>
      }
    </ThemeProvider>
  );
}
export default function App() {
  return (
    <StylesProvider jss={jss}>
      <AppContent />
    </StylesProvider>
  );
}
