import React, { Suspense } from "react";
import routes from "./routers/index"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as alltype from "./types/index";
import Navbar from "./component/elements/Navbar";
import "./style/AllStyle.css";
import { createTheme, ThemeProvider } from '@mui/material';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const theme = createTheme({
  typography: {
    fontFamily: [
      'Chilanka',
      'cursive',
    ].join(','),
  },});
function App() {
  return (
   <>
   <ThemeProvider theme={theme}>
    <Router>
    <ToastContainer
position="bottom-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
       <Navbar/>
          <Routes>
            {routes
              .filter((route:any) => !route.showMenu)
              .map((router: alltype.RouteType, keys: any) => {
                const { path, component: Component } = router;
                return (
                  <React.Fragment key={keys} >
                    <Route
                      path={path}
                      element={
                        <Suspense fallback={"Page loaded"}>
                          <Component />
                        </Suspense>
                      }
                    />
                  </React.Fragment>
                );
              })}
          </Routes>
        </Router>
    </ThemeProvider>
   </>
  );
}

export default App;
