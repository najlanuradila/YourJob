import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import LayoutLanding from "./Widget/layoutLanding";
import { GlobalProvider } from "./Context/GlobalContext";
import LayoutDashboard from "./Widget/layoutDashboard";
import Dashboard from "./Dashboard/dashboard";
import ListData from "./ManageData/listData";
import CreateData from "./ManageData/createData";
import Cookies from "js-cookie";
import Footer from "./Component/Footer";
import { Navigate } from "react-router-dom";
import SignUp from "./Login/signUp";
import Login from "./Login/signIn";
import Navbar from "./Component/Navbar";
import DetailJob from "./Job/detailJob";
import ChangePass from "./Login/changePassword";

const App = () => {
  const LoginRoute = (props) => {
    if (Cookies.get("token") === undefined) {
      return props.children;
    } else if (Cookies.get("token") !== undefined) {
      return <Navigate to={"/"} />;
    }
  };
  const DashboardRoute = (props) => {
    if (Cookies.get("token") === undefined) {
      return <Navigate to={"/login"} />;
    } else if (Cookies.get("token") !== undefined) {
      return props.children;
    }
  };
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route
              path="/login"
              element={
                <LoginRoute>
                  <Navbar />
                  <Login />
                  <Footer></Footer>
                </LoginRoute>
              }
            />

            <Route
              path="/register"
              element={
                <LoginRoute>
                  <LayoutLanding>
                    <SignUp />
                  </LayoutLanding>
                </LoginRoute>
              }
            />

            <Route
              path="/"
              element={
                <LayoutLanding>
                  <Home />
                </LayoutLanding>
              }
            />

            <Route
              path="/detail/:idData"
              element={
                <LayoutLanding>
                  <DetailJob />
                </LayoutLanding>
              }
            />

            <Route
              path="/dashboard"
              element={
                <DashboardRoute>
                  <LayoutDashboard>
                    <Dashboard />
                  </LayoutDashboard>
                </DashboardRoute>
              }
            />

            <Route
              path="/dashboard/listdata"
              element={
                <DashboardRoute>
                  <LayoutDashboard>
                    <ListData />
                  </LayoutDashboard>
                </DashboardRoute>
              }
            />

            <Route
              path="/dashboard/listdata/createdata"
              element={
                <DashboardRoute>
                  <LayoutDashboard>
                    <CreateData />
                  </LayoutDashboard>
                </DashboardRoute>
              }
            />

            <Route
              path="/createdata/:ID_JOBS_APPS"
              element={
                <DashboardRoute>
                  <LayoutDashboard>
                    <CreateData />
                  </LayoutDashboard>
                </DashboardRoute>
              }
            />
            <Route
              path="/dashboard/changepass"
              element={
                <DashboardRoute>
                  <LayoutDashboard>
                    <ChangePass />
                  </LayoutDashboard>
                </DashboardRoute>
              }
            />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
