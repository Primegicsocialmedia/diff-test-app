import { ScrollView, Text, View, Image } from "react-native";
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

const ValueProps = [
  {
    id: 1,
    title: "For Buyers",
    benefits: [
      "Verified sellers and vehicle history",
      "Direct communication with owners",
      "Competitive market prices",
      "Detailed vehicle inspections",
    ],
    icon: require("../../assets/buyer-icon.png"), // Replace with actual icon
  },
  {
    id: 2,
    title: "For Sellers",
    benefits: [
      "Reach thousands of potential buyers",
      "Free vehicle valuation",
      "Secure payment process",
      "Professional listing support",
    ],
    icon: require("../../assets/seller-icon.png"), // Replace with actual icon
  },
];

export default function About() {
  return (
    <ScrollView className="flex-1 bg-white">
      {/* Hero Section */}
      <Animated.View 
        entering={FadeInDown.duration(1000)}
        className="h-[250px] bg-gray-900 relative"
      >
        <Image 
          source={require("../../assets/background-image.png")} // Replace with about page hero
          className="w-full h-full opacity-50"
        />
        <View className="absolute inset-0 justify-center items-center px-6">
          <Text className="text-white text-4xl font-bold text-center">
            About CarMarket
          </Text>
          <Text className="text-gray-300 text-lg mt-2 text-center">
            Connecting Car Buyers and Sellers
          </Text>
        </View>
      </Animated.View>

      {/* Mission Statement */}
      <Animated.View 
        entering={FadeInUp.delay(200)}
        className="px-6 py-8 bg-white rounded-t-3xl -mt-6"
      >
        <Text className="text-2xl font-bold text-gray-800 mb-4">
          Our Mission
        </Text>
        <Text className="text-gray-600 leading-6">
          CarMarket is revolutionizing the way people buy and sell used cars. 
          We're committed to creating a transparent, secure, and efficient 
          marketplace that brings trust and convenience to the second-hand car market.
        </Text>
      </Animated.View>

      {/* Value Propositions */}
      <View className="px-6 py-4">
        {ValueProps.map((prop, index) => (
          <Animated.View
            key={prop.id}
            entering={FadeInUp.delay(300 + index * 200)}
            className="mb-8 bg-gray-50 rounded-2xl p-6"
          >
            <View className="flex-row items-center mb-4">
              <Image 
                source={prop.icon}
                className="w-12 h-12 mr-4"
              />
              <Text className="text-xl font-bold text-gray-800">
                {prop.title}
              </Text>
            </View>
            {prop.benefits.map((benefit, idx) => (
              <View key={idx} className="flex-row items-center mb-3">
                <View className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                <Text className="text-gray-600 flex-1">
                  {benefit}
                </Text>
              </View>
            ))}
          </Animated.View>
        ))}
      </View>

      {/* Stats Section */}
      <Animated.View 
        entering={FadeInUp.delay(700)}
        className="px-6 py-8 bg-gray-900 rounded-t-3xl"
      >
        <Text className="text-white text-2xl font-bold mb-6 text-center">
          Why Choose CarMarket?
        </Text>
        <View className="flex-row justify-between">
          <View className="items-center">
            <Text className="text-blue-400 text-2xl font-bold">10K+</Text>
            <Text className="text-gray-400 mt-1">Active Listings</Text>
          </View>
          <View className="items-center">
            <Text className="text-blue-400 text-2xl font-bold">15K+</Text>
            <Text className="text-gray-400 mt-1">Happy Users</Text>
          </View>
          <View className="items-center">
            <Text className="text-blue-400 text-2xl font-bold">98%</Text>
            <Text className="text-gray-400 mt-1">Success Rate</Text>
          </View>
        </View>
      </Animated.View>

      {/* Contact Section */}
      <View className="px-6 py-8 bg-white">
        <Text className="text-center text-gray-600">
          Have questions? Contact us at
        </Text>
        <Text className="text-center text-blue-600 font-semibold mt-1">
          support@carmarket.com
        </Text>
      </View>
    </ScrollView>
  );
}