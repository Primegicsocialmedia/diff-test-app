import { View, Text } from "react-native";
import { Slot, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";


const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
            backgroundColor: "#25292e",
        },
        headerTintColor: "#fff",
        tabBarStyle: {
            backgroundColor: "#25292e",
        
        },
      
        
     }}>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          tabBarIcon: ({ color, focused}) => {
            return <Ionicons 
            name={focused ? "home-sharp" : "home-outline"} 
            color={color} 
            size={30} 
            />;
          },
        }}
      />
      <Tabs.Screen name="about" 
      options={{
         title: "About",
         tabBarIcon: ({ color, focused}) => {
            return <Ionicons 
            name={focused ? "information-circle" : "information-circle-outline"} 
            color={color} 
            size={30} 
            />;
          },
        }}
           />
      <Tabs.Screen name="+not-found" />
    </Tabs>
  );
};
export default TabsLayout;
