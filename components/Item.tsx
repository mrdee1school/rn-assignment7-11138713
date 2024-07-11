import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const items = {
  dress1: {
    productImage: require("@/assets/images/dress1.png"),
    name: "Office Wear",
    description: "reversible angora cardigan",
    price: 120,
  },
  dress2: {
    productImage: require("@/assets/images/dress2.png"),
    name: "Office Wear",
    description: "reversible angora cardigan",
    price: 120,
  },
  dress3: {
    productImage: require("@/assets/images/dress3.png"),
    name: "Office Wear",
    description: "reversible angora cardigan",
    price: 120,
  },
  dress4: {
    productImage: require("@/assets/images/dress4.png"),
    name: "Office Wear",
    description: "reversible angora cardigan",
    price: 120,
  },
  dress5: {
    productImage: require("@/assets/images/dress5.png"),
    name: "Office Wear",
    description: "reversible angora cardigan",
    price: 120,
  },
  dress6: {
    productImage: require("@/assets/images/dress6.png"),
    name: "Office Wear",
    description: "reversible angora cardigan",
    price: 120,
  },
  dress7: {
    productImage: require("@/assets/images/dress7.png"),
    name: "Office Wear",
    description: "reversible angora cardigan",
    price: 120,
  },
};
const Item = ({ productImage, name, price, description }: any) => {
  // const [addCartItem, setAddCartItem] = useState({});
  const addToCart = async () => {
    try {
      for (const [key, value] of Object.entries(items)) {
        const valueString = JSON.stringify(value);
        await AsyncStorage.setItem(key, valueString);
        console.log(key, valueString);
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  const getCartItem = async (key: any) => {
    try {
      addToCart()
      key = JSON.stringify(key);
      const value = await AsyncStorage.getItem(key)
      if (value !== null) return value;
      console.log(value)
    } catch (error: any) {
      Alert.alert(error.message);
    }
  }

  return (
    <View>
      <View className="py-3 px-0">
        <Image source={productImage} className="w-[190px] h-[30vh]" />
        <TouchableOpacity onPress={getCartItem} className="absolute">
          <Image
            source={require("@/assets/images/addCircle.png")}
            className="top-64 left-[160px]"
          />
        </TouchableOpacity>
      </View>
      <Text className="text-lg">{name}</Text>
      <Text className="text-base">{description}</Text>
      <Text className="font-semibold text-orange-700 text-base">${price}</Text>
    </View>
  );
};

export default Item;
