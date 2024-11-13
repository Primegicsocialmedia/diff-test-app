import { View, Text } from "react-native";
import { Link, Stack } from "expo-router";

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View className="flex-1 justify-center items-center bg-[#25292e]">
        <Link href="/" className="text-2xl underline text-white pt-4">
          Go to Home Screen
        </Link>
      </View>
    </>
  );
};

export default NotFoundScreen;
