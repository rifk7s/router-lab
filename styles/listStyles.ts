import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const listStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 16,
  },
  // Vertical
  card: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 12,
    overflow: "hidden",
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
  },
  imageVertical: {
    width: 80,
    height: 80,
  },
  cardTextVertical: {
    padding: 16,
    fontSize: 16,
    color: colors.text,
    alignSelf: "center",
  },
  // Horizontal
  cardHorizontal: {
    alignItems: "center",
    alignSelf: "flex-start",
    marginRight: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
  },
  imageHorizontal: {
    width: 150,
    height: 150,
  },
  cardText: {
    padding: 8,
    fontSize: 14,
    color: colors.text,
    fontWeight: "500",
  },
});
