import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../styles/colors";

type Props = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "danger";
};

export default function CustomButton({
  title,
  onPress,
  variant = "primary",
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, variant === "danger" && styles.danger]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 10,
    alignItems: "center",
  },
  danger: {
    backgroundColor: colors.danger,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
});
