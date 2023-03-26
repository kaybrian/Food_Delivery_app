import { View, Text } from 'react-native'
import React, {useMemo, useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setResturant } from '../features/ResturantSlice';
import { selectBasketItems } from '../features/basketSlice';


const BasketScreen = () => {
    const navigation = useNavigation();
    const resturant = useSelector(setResturant)
    const items = useSelector(selectBasketItems)
    const dispatch = useDispatch();
    const [groupedItemsinBasket, setgroupedItemsinBasket] = useState([])

    useMemo(() => {
        const groupedItems = items.reduce((results, item) =>{
            (results[item.id] = results[item.id] || [] ).push(item)
            return results
        })
        setgroupedItemsinBasket(groupedItems);
    },[items]);

    console.log(groupedItemsinBasket);
  return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  )
}

export default BasketScreen
