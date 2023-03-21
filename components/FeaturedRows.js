import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from "./ResturantCards";


const FeaturedRows = ({ id, title, description }) => {
    return (
        <View className="">
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="text-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CC88" />
            </View>
            <Text className="text-xs text-gray-500 px-4">{description}</Text>

            <ScrollView
                horizontal
                contentHorizontalStyle={{
                    paddingHorizontal: 15,
                    showsHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >
                {/* Resturnat cards */}
                <ResturantCard
                    id={1234}
                    imgUrl="https://images.unsplash.com/photo-1535850452425-140ee4a8dbae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdHVyYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    title="African Hotel"
                    rating={2}
                    genre="Ugandan"
                    address="Kigali"
                    short_description="We are the best at thing called cooking"
                    dishes={[]}
                    long={20}
                    lat={23.43}
                />
                <ResturantCard
                    id={1234}
                    imgUrl="https://images.unsplash.com/photo-1535850452425-140ee4a8dbae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdHVyYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    title="African Hotel"
                    rating={2}
                    genre="Ugandan"
                    address="Kigali"
                    short_description="We are the best at thing called cooking"
                    dishes={[]}
                    long={20}
                    lat={23.43}
                />
                <ResturantCard
                    id={1234}
                    imgUrl="https://images.unsplash.com/photo-1535850452425-140ee4a8dbae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdHVyYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    title="African Hotel"
                    rating={2}
                    genre="Ugandan"
                    address="Kigali"
                    short_description="We are the best at thing called cooking"
                    dishes={[]}
                    long={20}
                    lat={23.43}
                />
                <ResturantCard
                    id={1234}
                    imgUrl="https://images.unsplash.com/photo-1535850452425-140ee4a8dbae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdHVyYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    title="African Hotel"
                    rating={2}
                    genre="Ugandan"
                    address="Kigali"
                    short_description="We are the best at thing called cooking"
                    dishes={[]}
                    long={20}
                    lat={23.43}
                />


            </ScrollView>
        </View>
    );
};

export default FeaturedRows;
