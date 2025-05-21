import {defineField, defineType} from 'sanity'

export const titleType = defineType({
  name: 'title',
  title: 'Title',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
