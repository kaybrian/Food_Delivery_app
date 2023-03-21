import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import {ArrowRightIcon } from "react-native-heroicons/outline";

const FeaturedRows = ({id,title,description}) => {
  return (
    <View className="">
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="text-bold text-lg">{title}</Text>
            <ArrowRightIcon color="#00CC88"/>
        </View>
        <Text className="text-xs text-gray-500 px-4">{description}</Text>

        <ScrollView
            horizontal
            contentHorizontalStyle={{
                paddingHorizontal:15,
                showsHorizontal:15,
            }}
            showsHorizontalScrollIndicator={false}
            className="pt-4"
        >
            {/* Resturnat cards */}

        </ScrollView>
    </View>
  );
};

export default FeaturedRows;
