import { Route, Routes } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import "./assets/style.css"
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import LoginScreen from './screens/auth/LoginScreen.jsx'
import PrivateRoute from './components/PrivateRoute';
import { ResetPassword } from "./screens/auth/reset-password";
import { EnterCode } from "./screens/auth/resetCodeScurite";
import { NewPassword } from "./screens/auth/NewPassword";
import { ProfileScreen } from "./screens/ProfileScreen";
import { ToastContainer } from "react-toastify";

import NotFound from "./screens/global/NotFound";

import Offers from './screens/offer';
import Condidats from "./screens/condidat";

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme} >
        <CssBaseline />

        {/* <Sidebar/> */}

        <Routes  >

          <Route path='/login' index={true} element={<LoginScreen />} />
          <Route path='/resetPassword' element={<ResetPassword />} />
          <Route path='/enterCode' element={<EnterCode />} />
          <Route path='/newPassword' element={<NewPassword />} />
    

          <Route path='/*' element={<NotFound />} />

          <Route path='/offers' element={<Offers />} />
          <Route path='/condidats' element={<Condidats />} />
          <Route path='' element={<PrivateRoute />}>
            {/* Eleves */}
          




            <Route path='/profile' element={<ProfileScreen />} />


          </Route>

        </Routes>

        <CssBaseline />

      </ThemeProvider>

      <ToastContainer position="bottom-right" />

    </ColorModeContext.Provider>
  )
}
export default App