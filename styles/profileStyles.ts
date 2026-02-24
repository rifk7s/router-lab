import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.background,
    padding: 20,
    paddingTop: 60,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 20,
    fontSize: 16,
    color: colors.primary,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 24,
    paddingHorizontal: 20,
  },
});
