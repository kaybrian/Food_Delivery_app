import { View, Text, TouchableOpacity, Image,Button } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from 'react-redux';
import { addtoBaseket, selectBasketItems, selectedBasketItemWithId,removeFromBasket } from '../features/basketSlice';


const Dishrow = ({ id, name, description, price, image }) => {
    const [ispressed, setIsPressed] = useState(false)
    const dispatch = useDispatch();
    const items = useSelector(state => selectedBasketItemWithId(state, id))
    // console.log(items)

    const addItemtoBasket = () => {
        dispatch(addtoBaseket({id, name, description, price, image}))
    }

    const removeItemFromBasket = () => {
        if (!items.length > 0) return;
        dispatch(removeFromBasket({id}))
    }

    return (
        <>
            <TouchableOpacity onPress={() => setIsPressed(!ispressed)} className={`bg-white border-sm p-4 border-gray-200 ${ispressed && "border-b-0"}`} >
                <View className="flex-row">
                    <View className="flex-1 or-1">
                        <Text className="text-lg mb-1 ">{name}</Text>
                        <Text className="text-gray-400">{description}</Text>
                        <Text className="text-gray-400 mt-2">
                            {price}- RWF
                        </Text>
                    </View>
                    <View>
                        <Image
                            style={{
                                borderWidth: 1,
                                borderColor: "#F3F3F4"
                            }}
                            source={{
                                uri: urlFor(image).url(),
                            }}
                            className="w-20 h-20 bg-gray-300 p-4 shadow-sm"
                        />
                    </View>
                </View>

            </TouchableOpacity>

            {
                ispressed && (
                    <View className="bg-white px-4">
                        <View className="flex-row items-center space-x-2 pb-3">
                            <TouchableOpacity onPress={removeItemFromBasket}>
                                {/* */}
                                <MinusCircleIcon disabled={items.length} size={40} color={items.length > 0 ? "#00CC88" : "gray"}  />
                            </TouchableOpacity>

                            <Text>{items.length}</Text>


                            <TouchableOpacity onPress={addItemtoBasket}>
                                {/* color={items.length > 0 ? "#00CC88" : "gray"} */}
                                <PlusCircleIcon

                                    size={40}
                                    color="#00CC88"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }

        </>
    )
}

export default Dishrow
