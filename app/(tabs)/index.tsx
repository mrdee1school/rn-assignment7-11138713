import { router } from "expo-router";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Item from "@/components/Item";

export default function HomeScreen() {
  const checkout = () => {
    router.push("/checkout");
  };

  return (
    <SafeAreaView>
      <View className="flex-row justify-between px-5">
        <View>
          <Image source={require("@/assets/images/Menu.png")} />
        </View>
        <View>
          <Image source={require("@/assets/images/Logo.png")} />
        </View>
        <View className="flex-row items-center">
          <View className="pr-2">
            <Image source={require("@/assets/images/Search.png")} />
          </View>
          <TouchableOpacity onPress={checkout} className="pl-2">
            <Image source={require("@/assets/images/shoppingBag.png")} />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-row justify-between px-5 pt-8 pb-4">
        <View>
          <Text className="text-4xl">Our Story</Text>
        </View>
        <View className="flex-row">
          <View className="bg-gray-300 rounded-full p-4 mr-2">
            <Image source={require("@/assets/images/Listview.png")} />
          </View>
          <View className="bg-gray-300 rounded-full p-4 ml-2">
            <Image source={require("@/assets/images/Filter.png")} />
          </View>
        </View>
      </View>

      <Item />
    </SafeAreaView>
  );
}
