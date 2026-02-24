import { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomBackButton from "../components/CustomBackButton";
import CustomButton from "../components/CustomButton";
import { counterStyles } from "../styles/countersStyle";

export default function CounterScreen() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={counterStyles.container}>
      <CustomBackButton />

      <View style={counterStyles.centered}>
        <Text style={counterStyles.count}>{count}</Text>

        <View style={counterStyles.buttonRow}>
          <CustomButton title="Increase" onPress={() => setCount(count + 1)} />
          <CustomButton
            title="Reset"
            onPress={() => setCount(0)}
            variant="danger"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
