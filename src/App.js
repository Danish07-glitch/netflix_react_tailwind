import React,{Suspense,lazy} from "react";
import Navbar from "./components/Navbar";
import {Routes,Route} from 'react-router-dom'
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Loader from "./components/Loader";


// Pages
const Home=lazy(()=> import('./pages/Home'))
// import Home from "./pages/Home";

const Login=lazy(()=> import('./pages/Login'))
// import Login from "./pages/Login"
const SignUp=lazy(()=> import('./pages/SignUp'));
// import SignUp from "./pages/SignUp";
const Account=lazy(()=> import('./pages/Account'))
// import Account from "./pages/Account";



function App() {
  return (
    <>
      <Suspense fallback={<Loader/>}>
    <AuthContextProvider>

      
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
        }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/loader" element={<Loader/>}/>
        <Route path="/account" element={
          <ProtectedRoute>

            <Account/>
          </ProtectedRoute>
        }/>

      </Routes>
      </AuthContextProvider>
      </Suspense>
    </>
  );
}

export default App;
