import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from '@/sanity/schemaTypes'

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  title: 'Maisonpixels',
  apiVersion: '2023-05-03',
  basePath: '/studio',
  plugins: [structureTool()],  
  schema: { types: schemaTypes },
})