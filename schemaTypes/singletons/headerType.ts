import {defineField, defineType} from 'sanity'

export const headerType = defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    defineField({
      name: 'headerText',
      title: 'Header Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subheaderTest',
      title: 'Subheader Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
