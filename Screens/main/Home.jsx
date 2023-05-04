import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationScreen } from "./NavigationScreen";

const Tabs = createBottomTabNavigator();

export const Home = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Navigation"
        component={NavigationScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
};
