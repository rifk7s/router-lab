import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../styles/colors";

const menuItems = [
  { label: "Counter", route: "/counter", icon: "add-circle-outline" as const },
  { label: "Profile", route: "/profile", icon: "person-outline" as const },
  {
    label: "Vertical List",
    route: "/vertical",
    icon: "list-outline" as const,
  },
  {
    label: "Horizontal List",
    route: "/horizontal",
    icon: "albums-outline" as const,
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Menu</Text>
      <Text style={styles.subtitle}>Choose a screen to explore</Text>

      <View style={styles.grid}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.route}
            style={styles.card}
            activeOpacity={0.7}
            onPress={() => router.push(item.route as any)}
          >
            <Ionicons name={item.icon} size={32} color={colors.primary} />
            <Text style={styles.cardLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: colors.lightGray,
    marginBottom: 32,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
  },
  card: {
    width: "47%",
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingVertical: 28,
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
  },
  cardLabel: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
  },
});
