import { defineConfig } from 'sanity';
import {structureTool} from 'sanity/structure'
const config = defineConfig({

    projectId: "bxzgfanz",

    dataset: "production",

    title: "My Personal Website",

    apiVersion: "2024-24-1",

    basePath: "/admin",

    plugins: [structureTool()]

})

export default config