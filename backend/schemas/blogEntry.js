export default{
    name:'blogEntries',
    title:'Blog Entries',
    type: 'document',
    fields:[
        {
            name: 'imgUrl',
            title: 'ImageUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'subtitle',
            title:'Subtitle',
            type:'string'
        },

        {
            name:'content',
            title:'Content',
            type:'array',
            of:[{ type:'content'}]
        },
    ]
}