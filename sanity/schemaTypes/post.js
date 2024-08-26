// ./sanity/schemaTypes/post.js
export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'body',
            title: 'Body',
            type: 'text'
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime'
        }
    ]
}
