import React, { useState, useEffect, useContext, createContext } from "react";
import { useRouter } from "next/router";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  TwitterAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import firebase, { authService } from "./firebase";
import "firebase/auth";
import { createUser } from "./db";
const auth = getAuth();
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser);
      const { token, ...userWithoutToken } = user;

      createUser(user.uid, user, userWithoutToken);
      setUser(user);
      return user;
    } else {
      setUser(false);
      return false;
    }
  };

  const signinWithGoogle = async () => {
    const response = await signInWithPopup(auth, new GoogleAuthProvider());
    handleUser(response.user);
    // router.push("/dashboard");
  };

  const singinWithTwitter = async () => {
    const response = await signInWithPopup(auth, new TwitterAuthProvider());
    console.log(response);
    handleUser(response.user);
    // router.push("/dashboard");
  };

  const singinWithFacebook = async () => {
    const response = await signInWithPopup(auth, new FacebookAuthProvider());
    console.log(response);
    handleUser(response.user);
    // router.push("/dashboard");
  };

  const singinWithGithub = async () => {
    const response = await signInWithPopup(auth, new GithubAuthProvider());
    console.log(response);
    handleUser(response.user);
    // router.push("/dashboard");
  };

  const signout = async () => {
    await auth.signOut();
    handleUser(false);
    router.push("/");
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(handleUser);
    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithGoogle,
    singinWithTwitter,
    singinWithFacebook,
    singinWithGithub,
    signout,
  };
}

const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    token: user.accessToken,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  };
};

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
