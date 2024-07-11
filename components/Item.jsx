import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";

const Item = () => {
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

  const addToCart = async () => {
    try {
      for (const [key, value] of Object.entries(products)) {
        const valueString = JSON.stringify(value);
        await AsyncStorage.setItem(key, valueString);
        console.log(key, valueString);
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const renderItem = ({ item: product }) => (
    <Link href={`/${product.id}`} asChild>
      <TouchableOpacity className="flex-1 p-2">
        <View className="relative">
          <Image
            source={{ uri: product.image }}
            className="w-full h-[30vh]"
            resizeMode="cover"
          />
          <TouchableOpacity
            onPress={addToCart}
            className="absolute top-60 right-1"
          >
            <Image
              source={require("@/assets/images/addCircle.png")}
              className="w-8 h-8"
            />
          </TouchableOpacity>
        </View>
        <Text className="text-base font-semibold uppercase" numberOfLines={1}>
          {product.title}
        </Text>
        <Text className="text-sm" numberOfLines={3}>
          {product.description}
        </Text>
        <Text className="font-semibold text-orange-700 text-base">
          ${product.price}
        </Text>
      </TouchableOpacity>
    </Link>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(product) => product.id.toString()}
      numColumns={2}
      contentContainerStyle="p-4"
    />
  );
};

export default Item;
