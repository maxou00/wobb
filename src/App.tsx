import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Routes } from './routes';
import { AuthLayout } from './auth/AuthLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CssVariables } from "./css-variables";
import { RouteProtector } from "./auth/RouteProtector";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { Initializer } from "./components/Initializer";
import BaseLanding from "./landing/pages/BaseLanding";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#012FB7",
      dark: "#080C4E"
    },
    text: {
      primary: '#333333',
      secondary: '#484848',
      hint: '#646464',
      disabled: '#848484'
    }
  },
  typography: {
    fontFamily: 'Poppins',
  }
})

appTheme.shadows[1] = `1px 1px 2px ${CssVariables.colorGrayV1}`;
appTheme.shadows[2] = `1px 1px 4px ${CssVariables.colorGrayV1}`

function App() {
  return (
    <Provider store={store}>
      <Initializer>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route path={Routes.Home}>
                <RouteProtector>
                  <Home />
                </RouteProtector>
            </Route>
            <Route path={Routes.Auth}>
              <AuthLayout />
            </Route>
            <Route path={Routes.Base}>
              <BaseLanding/>
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
      </Initializer>
    </Provider>
  );
}

export default App;
