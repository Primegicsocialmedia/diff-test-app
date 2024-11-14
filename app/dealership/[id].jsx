import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import Animated, { FadeIn, FadeInRight } from 'react-native-reanimated';

const featuredCars = [
  {
    id: 1,
    name: "Mercedes-Benz C-Class",
    price: "$45,900",
    year: 2021,
    mileage: "15,000 mi",
    image: require("../../assets/car1.png"), // Replace with actual car image
  },
  // Add more cars...
];

export default function DealershipDetails() {
  const { id } = useLocalSearchParams();
  
  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header with back button */}
      <View className="relative">
        <Image 
          source={require("../../assets/dealer-header.png")} // Replace with actual image
          className="w-full h-64"
        />
        <Pressable 
          onPress={() => router.back()}
          className="absolute top-12 left-4 bg-black/20 p-2 rounded-full"
        >
          <Text className="text-white">←</Text>
        </Pressable>
      </View>

      {/* Dealership Info */}
      <Animated.View 
        entering={FadeIn}
        className="px-4 py-6 bg-white -mt-6 rounded-t-3xl"
      >
        <View className="flex-row justify-between items-center">
          <Text className="text-2xl font-bold text-gray-800">
            Premium Auto Gallery
          </Text>
          <View className="bg-blue-100 px-3 py-1 rounded-full">
            <Text className="text-blue-600 font-semibold">Verified</Text>
          </View>
        </View>

        {/* Stats */}
        <View className="flex-row justify-between mt-6 bg-gray-50 p-4 rounded-xl">
          <View className="items-center">
            <Text className="text-2xl font-bold text-gray-800">45</Text>
            <Text className="text-gray-500">Cars</Text>
          </View>
          <View className="items-center">
            <Text className="text-2xl font-bold text-gray-800">4.8</Text>
            <Text className="text-gray-500">Rating</Text>
          </View>
          <View className="items-center">
            <Text className="text-2xl font-bold text-gray-800">12</Text>
            <Text className="text-gray-500">Years</Text>
          </View>
        </View>

        {/* Contact Info */}
        <View className="mt-6">
          <Text className="text-lg font-semibold text-gray-800 mb-3">
            Contact Information
          </Text>
          <View className="space-y-2">
            <Text className="text-gray-600">📞 (555) 123-4567</Text>
            <Text className="text-gray-600">📧 contact@premiumauto.com</Text>
            <Text className="text-gray-600">📍 123 Auto Drive, New York</Text>
          </View>
        </View>

        {/* Featured Vehicles */}
        <View className="mt-6">
          <Text className="text-lg font-semibold text-gray-800 mb-3">
            Featured Vehicles
          </Text>
          {featuredCars.map((car, index) => (
            <Animated.View
              key={car.id}
              entering={FadeInRight.delay(index * 200)}
              className="bg-gray-50 rounded-xl p-4 mb-3"
            >
              <View className="flex-row">
                <Image 
                  source={car.image}
                  className="w-24 h-24 rounded-lg"
                />
                <View className="ml-4 flex-1">
                  <Text className="font-semibold text-gray-800">{car.name}</Text>
                  <Text className="text-blue-600 font-bold mt-1">{car.price}</Text>
                  <View className="flex-row mt-2">
                    <Text className="text-gray-500 text-sm">{car.year}</Text>
                    <Text className="text-gray-500 text-sm ml-4">{car.mileage}</Text>
                  </View>
                </View>
              </View>
            </Animated.View>
          ))}
        </View>

        {/* Contact Button */}
        <Pressable className="bg-blue-600 rounded-xl py-4 mt-6">
          <Text className="text-white text-center font-semibold">
            Contact Dealer
          </Text>
        </Pressable>
      </Animated.View>
    </ScrollView>
  );
}