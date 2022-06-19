import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import { UseDataContext } from "./context/context";

export default function App() {
  const { auth, setAuth, checkToken, setUser, user } = UseDataContext();

  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/" end element={auth ? <HomePage /> : <SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}
