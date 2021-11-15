import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  getIdToken,
} from "firebase/auth";

import InitializeFirebase from "../Firebase/InitializeFirebase";
import axios from "axios";

InitializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(null);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const LogInUsingGoogle = (history, destination) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        SaveUserDb(user.displayName, user.email, "PUT");
        history.replace(destination);
      })
      .catch((error) => {
        setError(error.message);
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  //Register by email
  const RegisterUsingEmail = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            setUser(user);
            alert("successfully added");
            setError("error.message");
            SaveUserDb(user.displayName, user.email, "POST");
            history.replace("/");
          })
          .catch((error) => { });
      })
      .catch((error) => {
        setError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  };

  //log in by email pass
  const logInUsingEmail = (email, password, history, destination) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setError("");

        history.replace(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //get current user
  useEffect(() => {
    setIsLoading(true);
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((token) =>
          localStorage.setItem("idToken", token)
        );
      } else {
        // User is signed out
      }
      setIsLoading(false);
    });
    return () => unSubscribe();
  }, [auth]);

  //check admin
  useEffect(() => {
    axios
      .get(
        `https://murmuring-stream-81479.herokuapp.com/users/${user?.email}`
      )
      .then((res) => {
        setIsAdmin(res.data?.isAdmin);
      });
  }, [user?.email]);
  //log out
  const logOutUser = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  const SaveUserDb = (name, email, method) => {
    fetch("https://murmuring-stream-81479.herokuapp.com/users", {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return {
    user,
    RegisterUsingEmail,
    logInUsingEmail,
    error,
    logOutUser,
    isLoading,
    LogInUsingGoogle,
    setError,
    isAdmin,
  };
};

export default useFirebase;
