import "./App.css";
import Auth from "./pages/Auth";
import UserProfile from "./pages/UserProfile";
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Chat from "./pages/Chat";

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={
            user ? (
              <div className="App">
                <div className="blur" style={{ top: "10%", right: "10rem" }}></div>
                <div
                  className="blur"
                  style={{ top: "36%", left: "9rem" }}
                ></div>
                <Home />
              </div>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/chat"
          element={
            user ? (
              <div className="App">
                <div className="blur" style={{ top: "10%", right: "10rem" }}></div>
                <div
                  className="blur"
                  style={{ top: "36%", left: "9rem" }}
                ></div>
                <Chat />
              </div>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/user/:id"
          element={
            user ? (
              <div className="App">
                <div className="blur" style={{ top: "10%", right: "10rem" }}></div>
                <div
                  className="blur"
                  style={{ top: "36%", left: "9rem" }}
                ></div>
                <UserProfile />
              </div>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route path="/" element={user ? <Navigate to="/home" /> : <Auth />} />
      </Routes>
      {/* <Auth /> */}
    </>
  );
}

export default App;
