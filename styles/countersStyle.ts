import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const counterStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
