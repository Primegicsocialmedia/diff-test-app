import { View, Text, ScrollView, Pressable, Image, RefreshControl, Alert, TextInput } from "react-native";
import { router } from "expo-router";
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

// ImageUploader Component
const ImageUploader = ({ images, setImages }) => {
  const pickImage = async () => {
    try {
      // Request permissions
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Sorry, we need camera roll permissions to upload images.');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        quality: 0.8,
        aspect: [16, 9],
        allowsEditing: true,
      });

      if (!result.canceled) {
        setImages([...images, ...result.assets]);
      }
    } catch (error) {
      Alert.alert('Error uploading image', error.message);
    }
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <View className="mb-4">
      <Text className="text-gray-700 font-semibold mb-2">Vehicle Images</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        className="flex-row"
      >
        <Pressable
          onPress={pickImage}
          className="w-24 h-24 bg-gray-100 rounded-xl items-center justify-center mr-2 border-2 border-dashed border-gray-300"
        >
          <Ionicons name="camera" size={24} color="#666" />
          <Text className="text-gray-500 text-xs mt-1">Add Photo</Text>
        </Pressable>

        {images.map((image, index) => (
          <View key={index} className="mr-2 relative">
            <Image
              source={{ uri: image.uri }}
              className="w-24 h-24 rounded-xl"
            />
            <Pressable
              onPress={() => removeImage(index)}
              className="absolute top-1 right-1 bg-black/50 rounded-full p-1"
            >
              <Ionicons name="close" size={16} color="white" />
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

// Vehicle Form Component
const VehicleForm = ({ formData, setFormData, images, onSubmit }) => {
  return (
    <View className="bg-white rounded-xl p-4 mb-4 shadow-sm">
      <Text className="text-lg font-bold mb-4">Add Vehicle Details</Text>
      
      {/* Title Input */}
      <View className="mb-4">
        <Text className="text-gray-700 mb-1">Vehicle Title</Text>
        <TextInput
          className="bg-gray-50 p-3 rounded-lg"
          placeholder="e.g., 2019 BMW 3 Series"
          value={formData.title}
          onChangeText={(text) => setFormData({...formData, title: text})}
        />
      </View>

      {/* Price and Year */}
      <View className="flex-row mb-4 space-x-4">
        <View className="flex-1">
          <Text className="text-gray-700 mb-1">Price</Text>
          <TextInput
            className="bg-gray-50 p-3 rounded-lg"
            placeholder="$"
            keyboardType="numeric"
            value={formData.price}
            onChangeText={(text) => setFormData({...formData, price: text})}
          />
        </View>
        <View className="flex-1">
          <Text className="text-gray-700 mb-1">Year</Text>
          <TextInput
            className="bg-gray-50 p-3 rounded-lg"
            placeholder="YYYY"
            keyboardType="numeric"
            value={formData.year}
            onChangeText={(text) => setFormData({...formData, year: text})}
          />
        </View>
      </View>

      {/* Make and Model */}
      <View className="flex-row mb-4 space-x-4">
        <View className="flex-1">
          <Text className="text-gray-700 mb-1">Make</Text>
          <TextInput
            className="bg-gray-50 p-3 rounded-lg"
            placeholder="Make"
            value={formData.make}
            onChangeText={(text) => setFormData({...formData, make: text})}
          />
        </View>
        <View className="flex-1">
          <Text className="text-gray-700 mb-1">Model</Text>
          <TextInput
            className="bg-gray-50 p-3 rounded-lg"
            placeholder="Model"
            value={formData.model}
            onChangeText={(text) => setFormData({...formData, model: text})}
          />
        </View>
      </View>

      {/* Submit Button */}
      <Pressable
        onPress={onSubmit}
        className="bg-blue-600 py-3 rounded-lg mt-4"
      >
        <Text className="text-white text-center font-semibold">
          Post Vehicle
        </Text>
      </Pressable>
    </View>
  );
};

// Sample car listings data
const carListings = [
  {
    id: 1,
    title: "2019 BMW 3 Series 330i M Sport",
    price: "32,900",
    location: "New York, NY",
    mileage: "25,000",
    images: [
      "https://example.com/car1.jpg", // Replace with actual image URLs
    ],
    seller: "John Doe",
    posted: "2 days ago",
    specs: {
      year: 2019,
      make: "BMW",
      model: "3 Series",
      transmission: "Automatic",
      fuelType: "Gasoline",
    }
  },
  {
    id: 2,
    title: "2020 Mercedes-Benz C300 AMG Line",
    price: "41,500",
    location: "Los Angeles, CA",
    mileage: "18,500",
    images: [
      "https://example.com/car2.jpg",
    ],
    seller: "Jane Smith",
    posted: "1 day ago",
    specs: {
      year: 2020,
      make: "Mercedes-Benz",
      model: "C-Class",
      transmission: "Automatic",
      fuelType: "Gasoline",
    }
  },
  // Add more listings as needed
];

// Car Listing Card Component
const CarListingCard = ({ car }) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(400)}
      className="bg-white rounded-xl shadow-sm mb-4 overflow-hidden"
    >
      <Pressable
        onPress={() => router.push(`/car/${car.id}`)}
        className="active:opacity-90"
      >
        {/* Image Section */}
        <View className="relative">
          <Image
            source={{ uri: car.images[0] }}
            className="w-full h-48"
            resizeMode="cover"
          />
          <View className="absolute top-2 right-2 bg-black/50 px-2 py-1 rounded-full">
            <Text className="text-white text-xs font-semibold">
              {car.specs.year}
            </Text>
          </View>
        </View>

        {/* Content Section */}
        <View className="p-4">
          {/* Title and Price */}
          <View className="flex-row justify-between items-start mb-2">
            <View className="flex-1 mr-4">
              <Text className="text-lg font-bold text-gray-800">
                {car.title}
              </Text>
            </View>
            <Text className="text-lg font-bold text-blue-600">
              ${car.price}
            </Text>
          </View>

          {/* Specs */}
          <View className="flex-row flex-wrap mb-3">
            <View className="flex-row items-center mr-4 mb-2">
              <Ionicons name="speedometer-outline" size={16} color="#666" />
              <Text className="text-gray-600 ml-1">
                {car.mileage} mi
              </Text>
            </View>
            <View className="flex-row items-center mr-4 mb-2">
              <Ionicons name="location-outline" size={16} color="#666" />
              <Text className="text-gray-600 ml-1">
                {car.location}
              </Text>
            </View>
            <View className="flex-row items-center mr-4 mb-2">
              <Ionicons name="hardware-chip-outline" size={16} color="#666" />
              <Text className="text-gray-600 ml-1">
                {car.specs.transmission}
              </Text>
            </View>
            <View className="flex-row items-center mb-2">
              <Ionicons name="water-outline" size={16} color="#666" />
              <Text className="text-gray-600 ml-1">
                {car.specs.fuelType}
              </Text>
            </View>
          </View>

          {/* Seller Info and Posted Date */}
          <View className="flex-row justify-between items-center pt-3 border-t border-gray-100">
            <View className="flex-row items-center">
              <View className="w-8 h-8 bg-gray-200 rounded-full items-center justify-center">
                <Text className="text-gray-600 font-semibold">
                  {car.seller.charAt(0)}
                </Text>
              </View>
              <Text className="text-gray-600 ml-2">{car.seller}</Text>
            </View>
            <View className="flex-row items-center">
              <Ionicons name="time-outline" size={14} color="#666" />
              <Text className="text-gray-500 text-sm ml-1">{car.posted}</Text>
            </View>
          </View>

          {/* Quick Action Buttons */}
          <View className="flex-row mt-3 space-x-2">
            <Pressable className="flex-1 flex-row items-center justify-center bg-gray-100 py-2 rounded-lg">
              <Ionicons name="call-outline" size={16} color="#666" />
              <Text className="text-gray-600 ml-2">Call</Text>
            </Pressable>
            <Pressable className="flex-1 flex-row items-center justify-center bg-gray-100 py-2 rounded-lg">
              <Ionicons name="mail-outline" size={16} color="#666" />
              <Text className="text-gray-600 ml-2">Message</Text>
            </Pressable>
            <Pressable className="flex-row items-center justify-center bg-gray-100 w-10 rounded-lg">
              <Ionicons name="heart-outline" size={16} color="#666" />
            </Pressable>
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default function BrowsePage() {
  const [refreshing, setRefreshing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    year: '',
    make: '',
    model: '',
  });

  const handleSubmit = () => {
    // Validate form
    if (!formData.title || !formData.price || !images.length) {
      Alert.alert('Missing Information', 'Please fill in all required fields and add at least one image.');
      return;
    }

    // Here you would typically upload images and form data to your backend
    console.log('Form Data:', formData);
    console.log('Images:', images);

    // Reset form
    setFormData({
      title: '',
      price: '',
      year: '',
      make: '',
      model: '',
    });
    setImages([]);
    setShowForm(false);

    // Show success message
    Alert.alert('Success', 'Vehicle posted successfully!');
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white pt-12 pb-4 px-4 shadow-sm">
        <View className="flex-row justify-between items-center">
          <Text className="text-2xl font-bold text-gray-800">
            Browse Cars
          </Text>
          <Pressable
            onPress={() => setShowForm(!showForm)}
            className="bg-blue-600 px-4 py-2 rounded-full"
          >
            <Text className="text-white font-semibold">
              {showForm ? 'Cancel' : 'Add Vehicle'}
            </Text>
          </Pressable>
        </View>
      </View>

      <ScrollView
        className="flex-1"
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              setTimeout(() => setRefreshing(false), 1000);
            }}
          />
        }
      >
        <View className="p-4">
          {/* Add Vehicle Form */}
          {showForm && (
            <Animated.View
              entering={FadeInDown}
              className="mb-4"
            >
              <ImageUploader images={images} setImages={setImages} />
              <VehicleForm
                formData={formData}
                setFormData={setFormData}
                images={images}
                onSubmit={handleSubmit}
              />
            </Animated.View>
          )}

          {/* Filters */}
          <View className="flex-row mb-4 space-x-2">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Pressable className="bg-blue-600 px-4 py-2 rounded-full">
                <Text className="text-white">All</Text>
              </Pressable>
              <Pressable className="bg-gray-200 px-4 py-2 rounded-full ml-2">
                <Text className="text-gray-700">Newest</Text>
              </Pressable>
              <Pressable className="bg-gray-200 px-4 py-2 rounded-full ml-2">
                <Text className="text-gray-700">Price: Low to High</Text>
              </Pressable>
              <Pressable className="bg-gray-200 px-4 py-2 rounded-full ml-2">
                <Text className="text-gray-700">Price: High to Low</Text>
              </Pressable>
            </ScrollView>
          </View>

          {/* Listings */}
          {carListings.map((car) => (
            <CarListingCard key={car.id} car={car} />
          ))}

          {/* Empty State */}
          {carListings.length === 0 && (
            <View className="items-center justify-center py-8">
              <Ionicons name="car-outline" size={48} color="#666" />
              <Text className="text-gray-600 mt-4 text-center">
                No vehicles listed yet.
              </Text>
              <Text className="text-gray-500 text-center">
                Be the first to post a vehicle!
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}