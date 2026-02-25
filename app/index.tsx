import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../styles/colors";

const menuItems = [
  { label: "Counter Screen", route: "/counter" },
  { label: "Profile Screen", route: "/profile" },
  { label: "Vertical List", route: "/vertical" },
  { label: "Horizontal List", route: "/horizontal" },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {menuItems.map((item) => (
        <TouchableOpacity
          key={item.route}
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => router.push(item.route as any)}
        >
          <Text style={styles.buttonText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 16,
  },
  button: {
    backgroundColor: colors.test,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    minWidth: 220,
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
});
