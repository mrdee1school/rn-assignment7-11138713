import { Image, SafeAreaView, View, TouchableOpacity } from "react-native";

import { Text } from "react-native";
import { router } from "expo-router";
import CheckoutItem from "@/components/CheckoutItem";

export default function Checkout() {
  const Home = () => {
    router.push("/index");
  };
  return (
    <SafeAreaView className="bg-[#FAFAFD] h-full">
      <View className="flex-row justify-between px-5">
        <View className="pl-6" />
        <TouchableOpacity onPress={Home}>
          <Image source={require("@/assets/images/Logo.png")} />
        </TouchableOpacity>
        <View className="flex-row items-center">
          <View className="pr-2">
            <Image source={require("@/assets/images/Search.png")} />
          </View>
        </View>
      </View>

      <View className="items-center pt-6 pb-4">
        <Text className="text-3xl font-light">Checkout</Text>
      </View>

      <CheckoutItem />

      <View className="flex-row justify-between items-center px-8 py-2">
        <Text className="text-lg font-serif">Est. Total</Text>
        <Text className="text-orange-700 text-xl">$240</Text>
      </View>
      <View className="bg-black items-center flex-row justify-center space-x-3 h-16">
        <Image
          tintColor="white"
          source={require("@/assets/images/shoppingBag.png")}
        />
        <Text className="text-white text-lg">Checkout</Text>
      </View>
    </SafeAreaView>
  );
}
