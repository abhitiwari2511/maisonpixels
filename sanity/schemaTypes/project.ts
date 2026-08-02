export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'description', title: 'Description', type: 'text', rows: 3 },
    { name: 'url', title: 'Project URL', type: 'url' },
  ],
}