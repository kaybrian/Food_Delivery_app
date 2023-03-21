import { useNavigation } from '@react-navigation/native'
import React,{useLayoutEffect} from 'react'
import { View,Text, SafeAreaView, Image } from 'react-native'
import { ChevronDownIcon } from "react-native-heroicons/outline";


const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
           headerShown:false,
        });
        },[])

  return (
    <SafeAreaView>
        <Text className="text-red-300">
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image
                    source={{
                        uri:"https://links.papareact.com/wru"
                    }}
                    className="h-7 w-78 bg-gray-300 p-4 rounded-full"
                />
                <View className="">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
                    <Text className="font-bold text-black text-xl">
                        Current location
                        <ChevronDownIcon  color="0000CE" size={20}/>

                    </Text>
                </View>

            </View>
        </Text>
    </SafeAreaView>
  )
}

export default HomeScreen

