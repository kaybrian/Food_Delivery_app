import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectResturant } from '../features/ResturantSlice'
import { XCircleIcon } from 'react-native-heroicons/solid'
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';


const Delivery = () => {
  const navigation = useNavigation();
  const resturant = useSelector(selectResturant);
  return (
    <View className="bg-[#00CC88] flex-1">
      <SafeAreaView className="z-50 ">
        <View className="flex-row mt-2 justify-between items-center p-5">
          <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>
            <XCircleIcon size={35} color="#fff" />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg"> Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-gray-400 text-lg">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={require("../assets/biker.jpg")}
              className="h-20 w-20"
            />
          </View>

          <Progress.Bar color="#00CC88" size={30} indeterminate={true} width={200} />
          <Text>
            Your order at {resturant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>


      <MapView
        initialRegion={{
          latitude: resturant.lat,
          longitude: resturant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{ latitude: resturant.lat, longitude: resturant.long }}
          title={resturant.title}
          description={resturant.short_description}
          pinColor="#00CC88"
        />
      </MapView>

      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{
            uri: "data:image/jpeg;base64,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"
          }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Kay Brian</Text>
          <Text className="text-gray-400 "> Your Rider </Text>
        </View>

        <Text className="text-[#00CC88] text-lg mr-5">Call</Text>

      </SafeAreaView>

    </View>
  )
}

export default Delivery
