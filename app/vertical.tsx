import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomBackButton from "../components/CustomBackButton";
import { listStyles } from "../styles/listStyles";

const items = [
  { id: 1, title: "Beach", image: "https://picsum.photos/600/300?1" },
  { id: 2, title: "Mountain", image: "https://picsum.photos/600/300?2" },
  { id: 3, title: "City", image: "https://picsum.photos/600/300?3" },
  { id: 4, title: "Forest", image: "https://picsum.photos/600/300?4" },
  { id: 5, title: "Desert", image: "https://picsum.photos/600/300?5" },
  { id: 6, title: "Ocean", image: "https://picsum.photos/600/300?6" },
  { id: 7, title: "Waterfall", image: "https://picsum.photos/600/300?7" },
  { id: 8, title: "Countryside", image: "https://picsum.photos/600/300?8" },
];

export default function VerticalScreen() {
  return (
    <SafeAreaView style={listStyles.container}>
      <CustomBackButton />

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
