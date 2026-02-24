import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { listStyles } from "../styles/listStyles";

const items = [
  { id: 1, title: "Beach", image: "https://picsum.photos/200/200?1" },
  { id: 2, title: "Mountain", image: "https://picsum.photos/200/200?2" },
  { id: 3, title: "City", image: "https://picsum.photos/200/200?3" },
  { id: 4, title: "Forest", image: "https://picsum.photos/200/200?4" },
  { id: 5, title: "Desert", image: "https://picsum.photos/200/200?5" },
  { id: 6, title: "Ocean", image: "https://picsum.photos/200/200?6" },
  { id: 7, title: "Waterfall", image: "https://picsum.photos/200/200?7" },
  { id: 8, title: "Countryside", image: "https://picsum.photos/200/200?8" },
];

export default function VerticalScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={listStyles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={listStyles.backButton}>← Back</Text>
      </TouchableOpacity>

      <Text style={listStyles.title}>Vertical Gallery</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {items.map((item) => (
          <View key={item.id} style={listStyles.card}>
            <Image
              source={{ uri: item.image }}
              style={listStyles.imageVertical}
            />
            <Text style={listStyles.cardTextVertical}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
