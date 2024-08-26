import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { structureTool } from 'sanity/structure'

import { structure } from './sanity/structure' // Ensure this path is correct
import { schema } from './sanity/schemaTypes'

const projectId = '5p1rt5s3'; // Your actual project ID
const dataset = 'production'; // Your actual dataset name
const apiVersion = '2023-01-01'; // Your actual API version

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
