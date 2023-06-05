import {Collection, defineConfig} from "tinacms";
import type { Template } from 'tinacms'

const richTextBlock: Template = {
  name: 'richText',
  label: 'Rich text',
  fields: [
    {
      type: 'rich-text',
      label: 'Body',
      name: 'body',
      required: true,
    },
  ],
}

const mediaBlock: Template = {
  name: 'media',
  label: 'Media',
  fields: [
    {
      type: 'image',
      label: 'File',
      name: 'file',
      required: true,
    },
  ],
}

const codeBlock: Template = {
  name: 'code',
  label: 'Code',
  fields: [
    {
      type: 'string',
      label: 'Content',
      name: 'content',
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'string',
      label: 'Language',
      name: 'lang',
    },
  ],
}

const article: Collection = {
  name: "article",
  label: "Articles",
  path: "content/articles",
  format: 'json',
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      required: true,
    },
    {
      type: "datetime",
      name: "publishedAt",
      label: "Published at",
    },
    {
      type: 'object',
      list: true,
      name: 'blocks',
      label: 'Blocks',
      templates: [richTextBlock, mediaBlock, codeBlock],
    },
  ],
}

const header: Collection = {
  name: "header",
  label: "Header",
  path: "content/header",
  format: 'json',
  ui: {
    allowedActions: {
      delete: false,
      create: false,
    }
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
      required: true,
    },
  ],
}

const about: Collection = {
  name: "about",
  label: "About",
  path: "content/about",
  format: 'json',
  ui: {
    allowedActions: {
      delete: false,
      create: false,
    }
  },
  fields: [
    {
      type: 'object',
      list: true,
      name: 'blocks',
      label: 'Blocks',
      templates: [richTextBlock, mediaBlock, codeBlock],
    },
  ],
}

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch: branch,
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_CLIENT_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "tina",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      article,
      header,
      about,
    ],
  },
});
