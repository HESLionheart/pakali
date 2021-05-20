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
import NavBar from './Components/navBar'
import CreateRange from "./Views/CreateRange";
import {
  useHistory,
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ScanPage from "./Views/ScanPage";

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
      <Router>
        <Switch>
          <Route exact path="/">
            <Login updateUserData={updateUserData}/>
          </Route>
          <Route path="/home">
            <Home userData={userData}/>
          </Route>
          <Route path="/create_range">
            <CreateRange/>
          </Route>
          <Route path="/scan_page" co>
            <ScanPage/>
          </Route>
        </Switch>
      </Router>
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
