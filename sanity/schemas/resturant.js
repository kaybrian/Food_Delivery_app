import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'resturant',
  title: 'Resturant',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Resturant Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "short Description of the Resturant",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Resturant",

    },
    {
      name: "lat",
      type: "number",
      title: "latidude of the Resturant"
    },
    {
      name: "long",
      type: "number",
      title: "longitude of the Resturant"
    },
    {
      name: "address",
      type: "string",
      title: "address of the Resturant",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Enter a rate from (1-5 stars)",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a number betweeb 1 and 5"),
    },
    {
      name: "type",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",      of: [{ type: "reference", to: [{ type: "dish" }] }],


    }
  ]
});
