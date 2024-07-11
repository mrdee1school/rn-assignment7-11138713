import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

const CheckoutItem = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const URL = "https://fakestoreapi.com/products?limit=5";
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      });
  };

  const renderCheckoutItem = ({ item: product }) => (
    <View className="flex-row flex-shrink p-3 w-screen">
      <View className="line-clamp-2">
        <Image
          source={{ uri: product.image }}
          className="w-[150px] h-[18vh]"
          resizeMode="cover"
        />
      </View>
      <View className="flex-1 pl-3 gap-y-2">
        <Text
          className="text-base font-semibold"
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {product.title}
        </Text>
        <Text
          className="text-xs flex-wrap"
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {product.description}
        </Text>
        <Text className="text-orange-700 text-xl">${product.price}</Text>
        <TouchableOpacity className="left-40">
          <Image
            source={require("@/assets/images/remove.png")}
            className="w-6 h-6"
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderCheckoutItem}
      key={(product) => product.id.toString()}
    />
  );
};

export default CheckoutItem;
