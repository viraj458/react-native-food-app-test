export default {
    name: 'featured',
    title: 'Featured menu category',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Featured category name',
        type: 'string',
        validation: (Rule)=>Rule.required()
      },
      {
        name: 'short_description',
        title: 'Short Description',
        type: 'string',
        validation: (Rule)=>Rule.required()
      },
      {
        name: 'restaurants',
        title: 'Restaurents',
        type: 'array',
        of:[{type:'reference', to: [{type: 'restaurant'}]}]
      }
    ]
  }
  