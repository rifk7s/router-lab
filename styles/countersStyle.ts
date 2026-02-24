import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const counterStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 20,
    fontSize: 16,
    color: colors.primary,
  },
  count: {
    fontSize: 72,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 40,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 16,
  },
});
