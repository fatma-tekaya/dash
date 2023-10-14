import { Route, Routes } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import "./assets/style.css"
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import LoginScreen from './screens/auth/LoginScreen.jsx'
import PrivateRoute from './components/PrivateRoute';
// import { ActivationPage } from "./components/ActivationPage";
import { ResetPassword } from "./screens/auth/reset-password";
import { EnterCode } from "./screens/auth/resetCodeScurite";
import { NewPassword } from "./screens/auth/NewPassword";
import { ProfileScreen } from "./screens/ProfileScreen";
import { ToastContainer } from "react-toastify";
import NotFound from "./screens/global/NotFound";
import Offers from './screens/offer';
import Condidats from "./screens/condidat";
import Projets from "./screens/projet";
import InfoGenrale from "./screens/InfoGnerale";
import Dashboard from "./screens/dashboard";



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
          {/* <Route path='/confirm/:activationCode' element={<ActivationPage />} /> */}
          <Route path='/*' element={<NotFound />} />
          <Route path='' element={<PrivateRoute />}>
            <Route path='/dashboard' element={<Dashboard />} /> 
            
            {/* Eleves
            <Route path='/Eleves' element={<Eleves />} />
            <Route path='/DetailsEleve' element={<DetailsEleve />} />
            {/* Parents 
            <Route path='/Parents' element={<Parents />} />
            <Route path='/DetailsParent' element={<DetailsParent />} />
            {/* Enseignants 
            <Route path='/Enseignants' element={<Enseignants />} />
            <Route path='/addensg' element={<AddEnsg />} />
            <Route path='/DetailsEnsg' element={<DetailsEnsg />} />
            {/* Categorie 
            <Route path='/AddCategorie' element={<AddCategorie />} />
            <Route path='/Categories' element={<ListCategories />} />
            <Route path='/EditCategorie' element={<EditCategorie />} />

            {/* Formation 
            <Route path='/Formations' element={<ListFormation />} />
            <Route path='/EditFormations' element={<EditFormation />} />
            <Route path='/AddFormation' element={<AddFormation />} /> */}
            {/* offer */}
            <Route path='/offers' element={<Offers />} />
            {/* condidat */}
            <Route path='/condidats' element={<Condidats />} />
            {/* Info generale */}
            <Route path='/InfoGenrale' element={<InfoGenrale />} />
            {/* projet */}
            <Route path='/projets' element={<Projets />} />
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