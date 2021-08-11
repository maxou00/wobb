import { createTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Routes } from './routes';
import { AuthLayout } from './auth/AuthLayout';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/App.scss';
import shadows from "@material-ui/core/styles/shadows";
import { CssVariables } from "./css-variables";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#012FB7",
      dark: "#080C4E"
    }
  },
  typography: {
    fontFamily: 'Poppins',
  }
})

appTheme.shadows[1] = `1px 1px 4px ${CssVariables.colorGrayV1}`

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <BrowserRouter>
        <Switch>
          <Route path={Routes.Home}>
            <Home />
          </Route>
          <Route path={Routes.Auth}>
            <AuthLayout />
          </Route>
          <Route path={Routes.Base} exact>
            <Redirect to={Routes.Login} />
          </Route>
        </Switch>
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        pauseOnFocusLoss
        pauseOnHover />
    </ThemeProvider>
  );
}

export default App;
