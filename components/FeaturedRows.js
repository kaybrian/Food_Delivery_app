import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from "./ResturantCards";
import SanityClient from '../sanity'
import 'react-native-url-polyfill/auto'


const FeaturedRows = ({ id, title, description }) => {
    const [resturant, setResturant] = useState([])
    useEffect(() => {
        SanityClient.fetch(`
        *[_type == "featured" && _id == $id] {
            ...,
            resturant[]-> {
                ...,
                dishes[] ->,
                  type -> {
                  name
                  }
            }
        }[0]
        `, { id: id }
        ).then(data => {
            setResturant(data?.resturant)
        })
    }, [id])

    console.log(resturant)
    return (
        <View className="">
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="text-bold text-black text-lg">{title}</Text>
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

                {
                    resturant.map(resturant => (
                        <ResturantCard
                        key={resturant._id}
                            id={resturant._id}
                            imgUrl={resturant.image}
                            title={resturant.name}
                            rating={resturant.rating}
                            genre={resturant.type.name}
                            address={resturant.address}
                            short_description={resturant.short_description}
                            dishes={[]}
                            long={resturant.lat}
                            lat={resturant.long}
                        />
                    ))
                }


            </ScrollView>
        </View>
    );
};

export default FeaturedRows;
