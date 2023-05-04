import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dimensions } from "react-native";

export const MainScreen = () => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("screen").width;
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>
        <Text style={{ color: "#FF5454" }}>:</Text>hobi
      </Text>
      <View style={styles.buttonsBlock}>
        <TouchableOpacity
          style={{ ...styles.button, borderColor: "#B7A8FF", borderWidth: 1 }}
          onPress={() => navigation.navigate("Log In")}
        >
          <Text style={{ ...styles.buttonText }}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: "#B7A8FF" }}
          onPress={() => navigation.navigate("Sign Up")}
        >
          <Text
            style={{
              ...styles.buttonText,
              color: "white",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>

      <Image
        style={{
          ...styles.image,
          width: (screenWidth * 80) / 100 - 20,
          height: (screenWidth * 80) / 100 - 20,
        }}
        source={require("../../assets/mainscreen-image.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontFamily: "Poppins-SB",
    fontSize: 100,
    marginTop: "20%",
    color: "#383838",
  },
  image: {
    alignSelf: "center",
    marginTop: "auto",
  },
  buttonsBlock: {
    width: "50%",
    marginLeft: "auto",
    gap: 10,
  },
  button: {
    padding: 10,
    alignItems: "center",
    borderRadius: 100,
  },
  buttonText: {
    fontFamily: "Poppins-SB",
    fontSize: 18,
  },
});
