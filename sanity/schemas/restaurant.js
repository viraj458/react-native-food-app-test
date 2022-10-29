export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name:'restaurant_name',
      title:'Restaurant name',
      type:'string',
      validation:(Rule)=>Rule.required(),
    },
    {
      name:'short_description',
      title:'Short description',
      type:'string',
      validation:(Rule)=>Rule.max(200),
    },
    {
      name:'image',
      title:'Image of the restaurant',
      type:'image',
    },
    {
      name:'lat',
      title:'Latitude of the restaurant',
      type:'number',
    },
    {
      name:'long',
      title:'longitude of the restaurant',
      type:'number',
    },
    {
      name:'address',
      title:'Address of the restaurant',
      type:'string',
      validation:(Rule)=>Rule.required(),
    },
    {
      name:'rating',
      title:'Enter rating from (1 to 5)',
      type:'number',
      validation:(Rule)=>
      Rule.required()
        .min(1)
        .max(5)
        .error('Olease enter value between 1 and 5')

    },
    {
      name:'type',
      title:'Category',
      type:'reference',
      validation:(Rule)=>Rule.required(),
      to: [{type: 'category'}]
    },
    {
      name:'dishes',
      title:'Dishes',
      type:'array',
      of: [{type:'reference', to:[{type:'dish'}]}]
    },

  ]
}
