import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'


const ResturantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
}) => {
    return (
        <TouchableOpacity className="bg-white mr-3 shadow-sm">
            <Image
                source={{
                    uri: urlFor(imgUrl).url(),
                }}
                resizeMode='cover'
                className="h-36 w-64 rounded-md"
            />
            <View className="px-3 pb-4">
                <Text className="font-bold text-lg pt-2">{title}</Text>

                <View className="flex-row items-center space-x-1">
                    <StarIcon color="#00CC88" opacity={0.5} size={22} />
                    <Text className="text-xs text-gray-500">
                        <Text className="text-green-500"> {rating} </Text> - {genre}
                    </Text>
                </View>

                <View className="flex-row items-center space-x-1">
                    <MapPinIcon color="gray" opacity={0.7} size={15} />
                    <Text className="text-xs text-gray-500">Nearby - {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ResturantCard
