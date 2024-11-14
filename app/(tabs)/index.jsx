import { Link } from "expo-router";
import { Text, View, Image, ScrollView, Pressable } from "react-native";
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';

const FeaturedCars = [
  {
    id: 1,
    name: "Toyota Camry 2019",
    price: "$15,900",
    image: require("../../assets/background-image.png"), // Replace with actual car image
  },
  // ... add more cars
];

export default function Page() {
  return (
    <ScrollView className="flex-1 bg-white">
      {/* Hero Section */}
      <Animated.View 
        entering={FadeInDown.duration(1000)}
        className="h-[300px] bg-gray-900 relative"
      >
        <Image 
          source={require("../../assets/background-image.png")} // Replace with hero image
          className="w-full h-full opacity-60"
        />
        <View className="absolute inset-0 justify-center px-6">
          <Text className="text-white text-4xl font-bold">
            Find Your Perfect Car
          </Text>
          <Text className="text-gray-300 text-lg mt-2">
            Browse through our certified pre-owned vehicles
          </Text>
        </View>
      </Animated.View>

      {/* Search Section */}
      <View className="px-4 py-6 bg-white rounded-t-3xl -mt-6">
        <Pressable className="bg-gray-100 p-4 rounded-xl flex-row items-center">
          <Text className="text-gray-500">Search for your dream car...</Text>
        </Pressable>
      </View>

      {/* Featured Cars */}
      <View className="px-4 py-2">
        <Text className="text-2xl font-bold text-gray-800 mb-4">
          Featured Cars
        </Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          className="space-x-4"
        >
          {FeaturedCars.map((car, index) => (
            <Animated.View 
              key={car.id}
              entering={FadeInRight.delay(index * 200)}
              className="w-[280px] bg-white rounded-xl shadow-md"
            >
              <Image 
                source={car.image}
                className="w-full h-[180px] rounded-t-xl"
              />
              <View className="p-4">
                <Text className="text-lg font-semibold text-gray-800">
                  {car.name}
                </Text>
                <Text className="text-blue-600 font-bold text-lg mt-1">
                  {car.price}
                </Text>
              </View>
            </Animated.View>
          ))}
        </ScrollView>
      </View>

      {/* Categories */}
      <View className="px-4 py-6">
        <Text className="text-2xl font-bold text-gray-800 mb-4">
          Browse by Category
        </Text>
        <View className="flex-row flex-wrap justify-between">
          {['SUV', 'Sedan', 'Sports', 'Luxury'].map((category, index) => (
            <Animated.View 
              key={category}
              entering={FadeInDown.delay(index * 100)}
              className="w-[48%] bg-gray-100 rounded-xl p-4 mb-4"
            >
              <Text className="text-lg font-semibold text-gray-800">
                {category}
              </Text>
            </Animated.View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}