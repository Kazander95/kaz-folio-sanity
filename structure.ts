import {StructureBuilder} from 'sanity/structure'

const singletonTypes = [
  {title: 'Title', name: 'title'},
  {title: 'Header', name: 'header'},
  {title: 'Summary', name: 'summary'},
]

const singletonNames = singletonTypes.map((type) => type.name)

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Base')
    .items([
      ...singletonTypes.map((type) =>
        S.listItem()
          .title(type.title)
          .child(S.document().schemaType(type.name).documentId(type.name)),
      ),
      ...S.documentTypeListItems().filter(
        (listItem) => !singletonNames.includes(listItem.getId() ?? ''),
      ),
    ])
