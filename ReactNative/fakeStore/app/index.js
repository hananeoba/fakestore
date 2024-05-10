import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link, router } from "expo-router";
import { AuthProvider } from "../src/context/authContext";

export default function Page({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Welcome to fakeStore</Text>
        <Pressable onPress={() => {
            navigation.navigate("login");
          }}>
          <Text style={{
            fontSize: 36,
            color: "#ffbf69",
          }}>Login</Text>
        </Pressable>
        <Text style={styles.subtitle}>or</Text>
        <Pressable
          onPress={() => {
            navigation.navigate("signup");
          }}
          style={styles.button}
        >
          <Text style={{
            fontSize: 36,
            color: "#ffbf69",
          }}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
