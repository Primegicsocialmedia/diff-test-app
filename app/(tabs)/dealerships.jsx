import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { router } from "expo-router";
import Animated, { FadeInDown } from 'react-native-reanimated';

const dealerships = [
  {
    id: 1,
    name: "Premium Auto Gallery",
    rating: 4.8,
    location: "123 Auto Drive, New York",
    cars: 45,
    image: require("../../assets/dealer1.png"),
    description: "Luxury car specialist with premium selection and exceptional service. Offering a wide range of premium vehicles.",
    verified: true,
  },
  {
    id: 2,
    name: "City Motors Hub",
    rating: 4.6,
    location: "456 Car Avenue, Boston",
    cars: 32,
    image: require("../../assets/dealer2.png"),
    description: "Family-owned dealership since 1990, specializing in quality pre-owned vehicles with warranty coverage.",
    verified: true,
  },
  {
    id: 3,
    name: "Elite Auto House",
    rating: 4.9,
    location: "789 Motor Street, Chicago",
    cars: 58,
    image: require("../../assets/dealer3.png"),
    description: "Premium dealership offering certified pre-owned luxury vehicles with comprehensive inspection reports.",
    verified: true,
  },
  {
    id: 4,
    name: "AutoMax Central",
    rating: 4.7,
    location: "321 Vehicle Road, Los Angeles",
    cars: 40,
    image: require("../../assets/dealer4.png"),
    description: "Modern dealership with diverse inventory and state-of-the-art service center.",
    verified: true,
  },
  {
    id: 5,
    name: "CarHub Express",
    rating: 4.5,
    location: "654 Auto Plaza, Miami",
    cars: 35,
    image: require("../../assets/dealer5.png"),
    description: "Quick and transparent car buying process with competitive financing options.",
    verified: true,
  },
];

export default function Dealerships() {
  return (
    <View className="flex-1 bg-gray-100">
      {/* Fixed Header */}
      <View className="bg-gray-900 pt-12 pb-6 px-4">
        <Text className="text-white text-2xl font-bold">
          Trusted Dealerships
        </Text>
        <Text className="text-gray-400 mt-2">
          Find authorized dealers in your area
        </Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView 
        className="flex-1"
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {dealerships.map((dealer, index) => (
          <Animated.View
            key={dealer.id}
            entering={FadeInDown.delay(index * 200).springify()}
            className="bg-white rounded-2xl mb-6 shadow-md overflow-hidden"
          >
            <Pressable 
              onPress={() => router.push(`/dealership/${dealer.id}`)}
              className="active:opacity-90"
            >
              <Image
                source={dealer.image}
                className="w-full h-56"
                resizeMode="cover"
              />
              
              <View className="p-5">
                {/* Dealer Name and Verified Badge */}
                <View className="flex-row justify-between items-center">
                  <Text className="text-xl font-bold text-gray-800">
                    {dealer.name}
                  </Text>
                  {dealer.verified && (
                    <View className="bg-blue-100 px-3 py-1.5 rounded-full">
                      <Text className="text-blue-600 text-xs font-semibold">
                        Verified
                      </Text>
                    </View>
                  )}
                </View>

                {/* Rating and Cars Count */}
                <View className="flex-row items-center mt-3">
                  <View className="flex-row items-center bg-gray-50 px-3 py-1.5 rounded-full">
                    <Text className="text-yellow-500">★</Text>
                    <Text className="text-gray-700 ml-1 font-medium">{dealer.rating}</Text>
                  </View>
                  <View className="bg-gray-50 px-3 py-1.5 rounded-full ml-3">
                    <Text className="text-gray-700 font-medium">{dealer.cars} cars</Text>
                  </View>
                </View>

                {/* Description */}
                <Text className="text-gray-600 mt-3 leading-5">
                  {dealer.description}
                </Text>

                {/* Location */}
                <View className="flex-row items-center mt-4 bg-gray-50 p-3 rounded-xl">
                  <View className="w-8 h-8 bg-gray-200 rounded-full items-center justify-center">
                    <Text className="text-gray-600">📍</Text>
                  </View>
                  <Text className="text-gray-600 ml-3 flex-1">
                    {dealer.location}
                  </Text>
                </View>

                {/* View Button */}
                <Pressable 
                  className="bg-blue-600 rounded-xl py-4 mt-4 active:bg-blue-700"
                  onPress={() => router.push(`/dealership/${dealer.id}`)}
                >
                  <Text className="text-white text-center font-semibold">
                    View Dealership
                  </Text>
                </Pressable>
              </View>
            </Pressable>
          </Animated.View>
        ))}
        
        {/* Bottom Padding */}
        <View className="h-4" />
      </ScrollView>
    </View>
  );
}