import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { authSlice } from './authSlice'

export const authSignInUser =
  ({ email, password }) =>
  async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
export const authSignUpUser =
  ({ email, password, username }) =>
  async (dispatch) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log(username);
      const user = auth.currentUser;
      console.log("user", user);

      await updateProfile(user, {
        displayName: username,
      });

      const { uid, displayName } = await auth.currentUser;
      console.log(uid, displayName);
      dispatch(
        authSlice.actions.updateUserProfile({
          userId: uid,
          username: displayName,
        })
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
export const authSignOutUser = () => async (dispatch) => {
  try {
    await signOut(auth);

    dispatch(authSlice.actions.authSignOut());
  } catch (error) {
    console.log(error);
  }
};

export const authStateChangeUser = () => async (dispatch) => {
  try {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          authSlice.actions.updateUserProfile({
            userId: user.uid,
            login: user.displayName,
          })
        );
        dispatch(authSlice.actions.authStateChange({ stateChange: true }));
      }
    });
  } catch (error) {
    console.log(error);
  }
};
