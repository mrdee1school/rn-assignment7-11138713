import { View, ScrollView } from "react-native";
import React from "react";
import Item from "./Item";

const ItemCard = () => {
  return (
    <ScrollView className="">
      <View className="flex-row items-center justify-around">
        <Item
          productImage={require("../../assets/images/dress1.png")}
          name="Office Wear"
          description="reversible angora cardigan"
          price="120"
        />
        <Item
          productImage={require("../../assets/images/dress2.png")}
          name="Office Wear"
          description="reversible angora cardigan"
          price="120"
        />
      </View>
      <View className="flex-row items-center justify-around">
        <Item
          productImage={require("../../assets/images/dress3.png")}
          name="Office Wear"
          description="reversible angora cardigan"
          price="120"
        />
        <Item
          productImage={require("../../assets/images/dress4.png")}
          name="Office Wear"
          description="reversible angora cardigan"
          price="120"
        />
      </View>
      <View className="flex-row items-center justify-around">
        <Item
          productImage={require("../../assets/images/dress5.png")}
          name="Office Wear"
          description="reversible angora cardigan"
          price="120"
        />
        <Item
          productImage={require("../../assets/images/dress6.png")}
          name="Office Wear"
          description="reversible angora cardigan"
          price="120"
        />
      </View>
      <View className="flex-row items-center justify-around">
        <Item
          productImage={require("../../assets/images/dress7.png")}
          name="Office Wear"
          description="reversible angora cardigan"
          price="120"
        />
        <Item
          productImage={require("../../assets/images/dress1.png")}
          name="Office Wear"
          description="reversible angora cardigan"
          price="120"
        />
      </View>
    </ScrollView>
  );
};

export default ItemCard;
