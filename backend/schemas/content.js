export default {
    name: 'content',
    title: 'Content',
    type: 'document',
    fields: [
      {
        name: 'paragraph',
        title: 'Paragraph',
        type: 'string',
      },
      {
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  };