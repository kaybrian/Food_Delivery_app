import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectResturant } from '../features/ResturantSlice';
import { removeFromBasket, selectBasketItems,selectTotal } from '../features/basketSlice';
import { XCircleIcon } from "react-native-heroicons/outline";
import { urlFor } from '../sanity';

const BasketScreen = () => {
  const navigation = useNavigation();
  const resturant = useSelector(selectResturant)
  const items = useSelector(selectBasketItems)
  const dispatch = useDispatch();
  const [groupedItemsinBasket, setgroupedItemsinBasket] = useState([])
  const basketTotal = useSelector(selectTotal)
  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results
    }, {});
    setgroupedItemsinBasket(groupedItems);
  }, [items]);


  // console.log(items)
  console.log(resturant);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CC88] bg-white shadow-xs">

          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">{resturant.title}</Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-1 right-1"
          >
            <XCircleIcon color="#00CC88" height={30} width={35} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: "https://media.istockphoto.com/id/1159992039/photo/cozy-restaurant-for-gathering-with-friends.jpg?s=612x612&w=0&k=20&c=FTnWMb2J9lI7M6Q06xlCDBwDq291PbNeU_YwcnzH9f0="
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 50-75 Mins </Text>
          <TouchableOpacity>
            <Text className="text-[#00CC88]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {
            Object.entries(groupedItemsinBasket).map(([key, item]) => (
              <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                <Text className="text-[#00CC88]">{item.length} x </Text>
                <Image
                  source={{
                    uri: urlFor(item[0]?.image).url()
                  }}
                  className="h-12 w-12 rounded-full"
                />
                <Text className="flex-1">{item[0]?.name}</Text>

                <Text className="text-gray-600">RWF {item[0]?.price}</Text>

                <TouchableOpacity>
                  <Text
                    className="text-[#00CC88] text-xs"
                    onPress={() => { dispatch(removeFromBasket({ id: key })) }}
                  >Remove </Text>
                </TouchableOpacity>
              </View>
            ))
          }

        </ScrollView>

        <View>
          <View className="flex-row justify-between p-5 bg-white mt-5 space-x-4">
            <Text className="text-gray-400">SubTotal</Text>
            <Text className="text-gray-400">{basketTotal}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen
