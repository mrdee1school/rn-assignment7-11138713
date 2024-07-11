import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CheckoutItem = ({ productImage, name, description, price }: any) => {
  return (
    <View className="flex-row p-5">
      <View className="">
        <Image source={productImage} className="w-[150px] h-[20vh]" resizeMode="cover" />
      </View>
      <View className="justify-center pl-3 gap-y-2">
        <Text className="text-2xl">{name}</Text>
        <Text className="text-lg">{description}</Text>
        <Text className="text-orange-700 text-xl">
          ${price}
        </Text>
        <TouchableOpacity className="left-40">
          <Image source={require("@/assets/images/remove.png")} className="w-8 h-8" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutItem;
