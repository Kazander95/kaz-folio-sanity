import {defineField, defineType} from 'sanity'

export const summaryType = defineType({
  name: 'summary',
  title: 'Summary',
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
