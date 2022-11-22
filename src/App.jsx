import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { UserProvider } from "./context/UserContext";
import {FirebaseProvider} from "./context/FirebaseContext";
export default function App() {
  return(
    <UserProvider>
      <FirebaseProvider>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Login />} />
            <Route index path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </FirebaseProvider>
    </UserProvider>
  )
}



