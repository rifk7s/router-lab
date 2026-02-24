import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View>
      <Text>Home Menu</Text>

      <TouchableOpacity onPress={() => router.push("/counter")}>
        <Text>Go to Counter</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/profile")}>
        <Text>Go to Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/vertical")}>
        <Text>Go to Vertical List</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/horizontal")}>
        <Text>Go to Horizontal List</Text>
      </TouchableOpacity>
    </View>
  );
}
