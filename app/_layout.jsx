import { View, Text, LogBox } from "react-native";
import { Slot, Stack } from "expo-router";
import "../global.css";
import { StatusBar } from "expo-status-bar";
LogBox.ignoreAllLogs(true);

const RootLayout = () => {
  return (
    <>
    <StatusBar style="light" />
    <Stack screenOptions={{}}>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen name="+not-found" />
    </Stack>
    </>
  );
};
export default RootLayout;
