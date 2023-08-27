import {createContext,useContext,useEffect,useState} from 'react'
import { auth, db } from '../firebase'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'
import { setDoc,doc } from 'firebase/firestore'

const AuthContext=createContext()

export function AuthContextProvider({children}){
         const [user, setUser] = useState({})

         function signUp(email, password) {
            return createUserWithEmailAndPassword(auth, email, password);
            // setDoc(doc(db, 'users', email), {
            //     savedShows: []
            // })
            
          }

         function logIn(email,password){
            return signInWithEmailAndPassword(auth,email,password)
         }

         function logOut(){
            return signOut(auth)
         }

         useEffect(()=>{
            console.log("how many times-->");
            const unsubcribe=onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser)
            })
            return ()=> (
                unsubcribe()
            )
         })


    return (
       <AuthContext.Provider value={{signUp,user,logIn,logOut}}>
            {children}
       </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}



