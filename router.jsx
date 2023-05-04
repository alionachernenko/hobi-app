import { createStackNavigator } from "@react-navigation/stack";
import { RegistrationScreen } from "./Screens/auth/RegistrationScreen";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "./Screens/auth/LoginScreen";
import { Home } from "./Screens/main/Home";
import { MainScreen } from "./Screens/auth/MainScreen";
import { StyleSheet, View } from "react-native";

const AuthStack = createStackNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth)
    return (
      <View style={{ ...styles.container }}>
        <AuthStack.Navigator>
          <AuthStack.Screen
            name="Main"
            component={MainScreen}
            options={{ headerShown: false }}
          />
          <AuthStack.Screen
            name="Sign Up"
            component={RegistrationScreen}
            options={{
              headerTitleStyle: {
                fontFamily: "Poppins-SB",
              },
            }}
          />
          <AuthStack.Screen
            name="Log In"
            component={LoginScreen}
            options={{
              headerTitleStyle: {
                fontFamily: "Poppins-SB",
              },
            }}
          />
        </AuthStack.Navigator>
      </View>
    );
  else return <Home />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
