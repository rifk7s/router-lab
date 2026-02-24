import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { counterStyles } from "../styles/countersStyle";

export default function CounterScreen() {
  const router = useRouter();
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={counterStyles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={counterStyles.backButton}>← Back</Text>
      </TouchableOpacity>

      <Text style={counterStyles.count}>{count}</Text>

      <View style={counterStyles.buttonRow}>
        <CustomButton title="Increase" onPress={() => setCount(count + 1)} />
        <CustomButton
          title="Reset"
          onPress={() => setCount(0)}
          variant="danger"
        />
      </View>
    </SafeAreaView>
  );
}
