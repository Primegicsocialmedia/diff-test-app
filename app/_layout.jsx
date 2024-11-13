import { View, Text } from "react-native";
import { Slot, Stack } from "expo-router";
import "../global.css";

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
    </Stack>
  );
};
export default RootLayout;
