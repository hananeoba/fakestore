import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function UserId() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>User ID: {id}</Text>
    </View>
  );
}
