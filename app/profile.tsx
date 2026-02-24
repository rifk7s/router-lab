import { useState } from "react";
import { Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomBackButton from "../components/CustomBackButton";
import CustomButton from "../components/CustomButton";
import { profileStyles } from "../styles/profileStyles";

export default function ProfileScreen() {
  const [name, setName] = useState("John Doe");
  const [bio, setBio] = useState(
    "React Native enthusiast. Building cool stuff with Expo.",
  );
  const [edited, setEdited] = useState(false);

  const handleEdit = () => {
    if (!edited) {
      setName("Jane Doe");
      setBio("Full-stack developer. Coffee lover. Open source contributor.");
    } else {
      setName("John Doe");
      setBio("React Native enthusiast. Building cool stuff with Expo.");
    }
    setEdited(!edited);
  };

  return (
    <SafeAreaView style={profileStyles.container}>
      <CustomBackButton />

      <Image
        source={{ uri: "https://picsum.photos/200/200?random=99" }}
        style={profileStyles.avatar}
      />

      <Text style={profileStyles.name}>{name}</Text>
      <Text style={profileStyles.bio}>{bio}</Text>

      <CustomButton
        title={edited ? "Restore" : "Edit Profile"}
        onPress={handleEdit}
      />
    </SafeAreaView>
  );
}
