import { auth, firebase } from './firebase';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () =>
  auth.signOut();

// Password Reset
export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);


  export const getAuth = () => {
    return firebase.auth();
  };
  
  export const githubOAuth = () => {
    return new firebase.firebase_.auth.GithubAuthProvider();
  };
  
  export const twitterOAuth = () => {
    return new firebase.firebase_.auth.TwitterAuthProvider();
  };
  
  export const facebookOAuth = () => {
    return new firebase.firebase_.auth.FacebookAuthProvider();
  };