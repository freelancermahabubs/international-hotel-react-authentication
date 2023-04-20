import React, { createContext, useEffect } from "react";
export const AuthContext = createContext(null);

import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";
const auth = getAuth(app);

const googleAuthProvider = new GoogleAuthProvider();
const gitHubAuthProvider = new GithubAuthProvider();
const twitterAuthProvider = new TwitterAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const sinIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const sinInWithGoogle = () => {
    return signInWithPopup(auth, googleAuthProvider);
  };

  const sinInWithGitHub = () => {
    return signInWithPopup(auth, gitHubAuthProvider);
  };
  const sinInWithTwitter = () => {
    return signInWithPopup(auth, twitterAuthProvider);
  };
  const sinInWithFacebook = () => {
    return signInWithPopup(auth, facebookAuthProvider);
  };
  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth State Change", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    sinIn,
    sinInWithGoogle,
    sinInWithGitHub,
    sinInWithTwitter,
    sinInWithFacebook,
    createUser,
    logOut,
    loading,
    forgetPassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
