import { Link } from "expo-router";
import { Text, View, Image } from "react-native";


const PlaceholderImage = require("../../assets/background-image.png");

export default function Page() {
  return (
    <View className="flex-1 justify-center items-center bg-[#25292e]">
      <View className="flex-1">
        <Image source={PlaceholderImage} className="w-[320px] h-[440px] rounded-2xl" />
      </View>
      
    </View>
  );
}
