import React, { useEffect } from "react";
import { create } from "jss";
import rtl from "jss-rtl";
import {
  StylesProvider,
  jssPreset,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Login from './Views/Login'

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const rtlTheme = createMuiTheme({ direction: "rtl" })

function AppContent() {
  useEffect(() => {
    document.body.setAttribute("dir", "rtl");
  }, [])

  return (
    <ThemeProvider theme={rtlTheme}>
      <Login/>
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
