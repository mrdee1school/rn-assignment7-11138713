import { View, Text, ScrollView } from "react-native";
import React from "react";
import CheckoutItem from "./CheckoutItem";

const CheckoutItemCard = () => {
  return (
    <ScrollView className="py-10">
      <CheckoutItem
        productImage={require("@/assets/images/dress1.png")}
        name="Office Wear"
        description="Office wear for your office"
        price="120"
      />
    </ScrollView>
  );
};

export default CheckoutItemCard;
