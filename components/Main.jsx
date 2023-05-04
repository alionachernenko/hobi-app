import { useRoute } from "../router";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { authStateChangeUser } from "../redux/auth/authOperations";

export const Main = () => {
  const { stateChange } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [fontsLoaded] = useFonts({
    "Poppins-SB": require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  const router = useRoute(stateChange);
  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return <NavigationContainer>{router}</NavigationContainer>;
};
