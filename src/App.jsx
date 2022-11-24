import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { UserProvider } from "./context/UserContext";
import {FirebaseProvider} from "./context/FirebaseContext";
import Home from "./pages/Home/Home";
export default function App() {
  return(
    <UserProvider>
      <FirebaseProvider>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Login />} />
            <Route index path="/register" element={<Register />} />
            <Route index path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </FirebaseProvider>
    </UserProvider>
  )
}



