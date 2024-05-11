import React from "react";
import { StyleSheet, View , Pressable, Text} from "react-native";

const LoggedOutHeader = ({navigateToLogin}) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>welcome to FakeStore </Text>
        <Pressable
          onPress={navigateToLogin }
          style={styles.logoutButton}
        >
          <Text>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingTop: 10,
    paddingHorizontal: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  logoutButton: {
    padding: 10,
  },
});

export default LoggedOutHeader;
