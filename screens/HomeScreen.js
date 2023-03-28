import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import { ChevronDownIcon, UserIcon, ServerIcon } from "react-native-heroicons/outline";
import Categories from '../components/categories'
import FeaturedRows from '../components/FeaturedRows';
import SanityClient from '../sanity'
import 'react-native-url-polyfill/auto'

const HomeScreen = () => {
    const navigation = useNavigation();
    const [featiuredCategories, setFeaturedCategories] = useState([])

    useEffect(() => {
        SanityClient.fetch(`
        *[_type == "featured"] {
            ...,
            resturants[]-> {
                ...,
                dishes[] ->
            }
        }
        `).then(data => setFeaturedCategories(data))

    }, [])

    // console.log(featiuredCategories)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])

    return (
        <SafeAreaView className="bg-white pt-6 mt-3 mb-10 pb-20">

            {/* first searach here  */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2 px-1">
                <Image
                    source={{
                        uri: "https://links.papareact.com/wru"
                    }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />

                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">
                        Deliver Now
                    </Text>

                    {/* the location part of the app  */}
                    <Text className="font-bold text-black text-xl">
                        Current location

                        <ChevronDownIcon color="#00CC88" size={20} />
                    </Text>
                </View>

                <UserIcon size={35} color="#00CC88" />
            </View>

            {/* search two here  */}


            <View className="flex-row items-center space-2 pb-2 mx-4 px-1">
                <View className="flex-row flex-1 space-x-2 bg-white">
                    <ServerIcon color="gray" size={35} className="" />
                    <TextInput
                        placeholder='Resturants and Cuisines'
                        keyboardType='default'
                        className="pr-2 rounded-md"
                    />
                </View>

                <ChevronDownIcon color="#00CC88" />
            </View>

            {/* last scrol search here  */}
            <ScrollView className="bg-gray-100 pb-36 mb-10">
                    {/* categroes */}
                    <Categories />

                    {/* featured rows  */}
                    {featiuredCategories?.map(category => (
                        <FeaturedRows
                            key={category._id}
                            id={category._id}
                            title={category.name}
                            description={category.short_description}
                        />
                        ))
                    }
                </ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen

