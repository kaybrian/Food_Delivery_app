import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { selectTotal, selectBasketItems } from '../features/basketSlice';
import { TouchableOpacity } from 'react-native';

const BasketICon = () => {
    const items = useSelector(selectBasketItems)
    const navigation = useNavigation();
    const basketTotal = useSelector(selectTotal)

    if (items.length === 0 ) return null;

    return (
        <View className="absolute bottom-10 w-full z-50">
            <TouchableOpacity onPress={() => navigation.navigate("Basket")} className="mx-5 p-4 rounded-lg flex-row items-center space-x-2 bg-[#00CC88]">
                <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
                    {items.length}
                </Text>

                <Text className="flex-1 text-white text-lg font-extrabold text-center">
                    View Basket
                </Text>

                <Text>
                RWF {basketTotal}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketICon
