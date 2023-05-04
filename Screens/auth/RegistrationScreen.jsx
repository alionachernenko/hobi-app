import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { KeyboardWrapper } from "../../components/KeyboardWrapper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authSignUpUser } from "../../redux/auth/authOperations";

const initialState = {
  username: "",
  email: "",
  password: "",
};

export const RegistrationScreen = () => {
  const [formState, setFormState] = useState(initialState);
  const [showPassword, setShowPassword] = useState(true);
  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log(formState);
    dispatch(authSignUpUser(formState));
  };

  return (
    <KeyboardWrapper>
      <ScrollView>
        <View style={styles.screen}>
          <Text style={styles.title}>Join the community</Text>
          <View style={styles.inputs}>
            <TextInput
              placeholder="username"
              style={styles.input}
              onChangeText={(text) =>
                setFormState((prev) => ({ ...prev, username: text }))
              }
              value={formState.username}
              autoComplete="off"
            />
            <TextInput
              placeholder="e-mail"
              style={styles.input}
              onChangeText={(text) =>
                setFormState((prev) => ({ ...prev, email: text }))
              }
              value={formState.email}
              autoComplete="off"
            />
            <View style={{ position: "relative", justifyContent: "center" }}>
              <TextInput
                placeholder="password"
                secureTextEntry={showPassword}
                style={styles.input}
                onChangeText={(text) =>
                  setFormState((prev) => ({ ...prev, password: text }))
                }
                value={formState.password}
                autoComplete="off"
              />
              <TouchableOpacity
                style={styles.showPassword}
                onPress={() => setShowPassword((prev) => !prev)}
              >
                <MaterialCommunityIcons
                  name="eye-circle"
                  size={24}
                  color="grey"
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={onSubmit}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardWrapper>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontFamily: "Poppins-SB",
    fontSize: 50,
    marginBottom: "10%",
    color: "#383838",
    textShadowColor: "#B7A8FF",
  },
  inputs: {
    gap: 20,
    marginBottom: 20,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#B7A8FF",
    borderRadius: 100,
    fontSize: 20,
    fontFamily: "Poppins-SB",
    color: "#383838",
  },
  buttonText: {
    fontFamily: "Poppins-SB",
    fontSize: 20,
    color: "#fff",
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#B7A8FF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
  },
  showPassword: {
    position: "absolute",
    right: 20,
    alignSelf: "flex-end",
    marginVertical: "auto",
  },
});
