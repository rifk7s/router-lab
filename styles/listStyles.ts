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
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
  },
  imageVertical: {
    width: "100%",
    height: 180,
  },
  cardTextVertical: {
    padding: 12,
    fontSize: 16,
    color: colors.text,
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
