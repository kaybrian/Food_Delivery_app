import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";
import SanityClient from "../sanity";
import "react-native-url-polyfill/auto";
import { urlFor } from "../sanity";


const Categories = () => {
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    SanityClient.fetch(
      `
    *[_type == "category"]
    `
    ).then((data) => {
      setCategories(data);
    });
  });
  return (
    <ScrollView
      contentContainerStyles={{
        paddingHorizontal: 20,
        paddingTop: 10,
      }}
      className="px-4"
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {Categories.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl = {urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))
      }

    </ScrollView>
  );
};

export default Categories;
