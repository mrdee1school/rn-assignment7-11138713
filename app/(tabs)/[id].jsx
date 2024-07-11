import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";

const Details = () => {
  const { id } = useLocalSearchParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const URL = "https://fakestoreapi.com/products";
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      });
  };

  const product = products.find((p) => p.id == id);

  const Home = () => {
    router.push("/home");
  };

  const checkout = () => {
    router.push("/checkout");
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="flex-row justify-between px-5 pb-4">
        <View>
          <Image source={require("@/assets/images/Menu.png")} />
        </View>
        <TouchableOpacity onPress={Home}>
          <Image source={require("@/assets/images/Logo.png")} />
        </TouchableOpacity>
        <View className="flex-row items-center">
          <View className="pr-2">
            <Image source={require("@/assets/images/Search.png")} />
          </View>
          <TouchableOpacity onPress={checkout} className="pl-2">
            <Image source={require("@/assets/images/shoppingBag.png")} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View className="flex items-center justify-center pt-2">
          <Image
            source={{ uri: product.image }}
            className="w-96 h-96"
            resizeMode="contain"
          />
        </View>

        <View className="flex-row items-center justify-between px-4 py-3">
          <View className="w-48">
            <Text className="text-2xl" numberOfLines={1} ellipsizeMode="tail">
              {product.title}
            </Text>
          </View>
          <View>
            <Image source={require("@/assets/images/Export.png")} />
          </View>
        </View>

        <View className="px-4">
          <Text className="w-96" numberOfLines={2} ellipsizeMode="tail">
            {product.description}
          </Text>
          <Text className="text-orange-700/80 text-3xl font-medium pt-2">
            ${product.price}
          </Text>
        </View>

        <View className="px-4 py-5">
          <Text className="uppercase font-medium pb-3 text-lg">Materials</Text>
          <Text className="text-base">
            We work with monitoring programmes to ensure compliance with safety,
            health and quality standards for our products.
          </Text>
        </View>

        <View className="px-4 pt-4 gap-y-4">
          <View className="flex-row space-x-4">
            <Image
              source={require("@/assets/images/Do Not Bleach.png")}
              className="w-9 h-9"
            />
            <Text className="text-lg pt-1">Do not use bleach</Text>
          </View>
          <View className="flex-row space-x-4">
            <Image
              source={require("@/assets/images/Do Not Tumble Dry.png")}
              className="w-9 h-9"
            />
            <Text className="text-lg pt-1">Do not tumble dry</Text>
          </View>
          <View className="flex-row space-x-4">
            <Image
              source={require("@/assets/images/Do Not Wash.png")}
              className="w-9 h-9"
            />
            <Text className="text-lg pt-1">
              Dry clean with tetrachloroethylene
            </Text>
          </View>
          <View className="flex-row space-x-4">
            <Image
              source={require("@/assets/images/Iron Low Temperature.png")}
              className="w-9 h-9"
            />
            <Text className="text-lg pt-1">
              Iron at a maximum of 110oC/230oF
            </Text>
          </View>
        </View>

        <View className="border border-gray-300 mr-12 ml-4 mt-8" />

        <View className="items-center flex-row justify-between px-4 pt-6">
          <View className="flex-row items-center">
            <Image source={require("@/assets/images/Shipping.png")} />
            <Text className="text-xl font-semibold pl-2">
              Free Flat Rate Shipping
            </Text>
          </View>
          <View>
            <Image
              source={require("@/assets/images/Up.png")}
              className="w-6 h-10"
              resizeMode="contain"
            />
          </View>
        </View>
        <View className="pl-12">
          <Text className="text-lg font-medium">
            Estimated to be delivered on
          </Text>
          <Text className="text-lg font-medium">09/11/2021 - 12/11/2021.</Text>
        </View>
      </ScrollView>

      <View className="bg-black items-center flex-row justify-between space-x-3 h-20 px-4">
        <View className="flex-row items-center">
          <Image
            tintColor="white"
            source={require("@/assets/images/Plus.png")}
          />
          <Text className="text-white text-lg uppercase pl-2">
            Add to Basket
          </Text>
        </View>
        <View>
          <Image
            tintColor="white"
            source={require("@/assets/images/Heart.png")}
            className="w-6 h-10"
            resizeMode="contain"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;
