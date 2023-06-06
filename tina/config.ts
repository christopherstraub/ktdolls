import { defineConfig } from 'tinacms';
import { about_pageFields } from './templates';
import { fur_ever_homes_pageFields } from './templates';
import { home_pageFields } from './templates';
import { past_litters_pageFields } from './templates';
import { settingsFields } from './templates';
import { themeFields } from './templates';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: 'admin',
    publicFolder: './',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: './',
    },
  },
  schema: {
    collections: [
      {
        format: 'yml',
        label: 'Site Settings',
        name: 'site_settings',
        path: '/',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: '_config',
        },
        fields: [
          {
            type: 'string',
            name: 'email',
            label: 'Email',
          },
          {
            type: 'string',
            name: 'phone',
            label: 'Contact Number',
          },
          {
            type: 'image',
            name: 'logo',
            label: 'Logo',
          },
          {
            type: 'string',
            name: 'title',
            label: 'Site Title',
          },
          {
            type: 'string',
            name: 'subtitle',
            label: 'Site Subtitle',
          },
          {
            type: 'string',
            name: 'description',
            label: 'Site Description',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'object',
            name: 'social',
            label: 'Social Media Links',
            list: true,
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Title',
              },
              {
                type: 'string',
                name: 'url',
                label: 'Link',
              },
            ],
          },
          {
            type: 'string',
            name: 'url',
            label: 'Site URL',
          },
        ],
      },
      {
        format: 'yml',
        label: 'Theme',
        name: 'theme',
        path: '_data',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: 'theme',
        },
        fields: [
          {
            type: 'object',
            name: 'colors',
            label: 'Colors',
            fields: [
              {
                type: 'string',
                name: 'primary',
                label: 'Primary',
                ui: {
                  component: 'color',
                },
              },
              {
                type: 'string',
                name: 'secondary',
                label: 'Secondary',
                ui: {
                  component: 'color',
                },
              },
              {
                type: 'string',
                name: 'dark',
                label: 'Body Text',
                ui: {
                  component: 'color',
                },
              },
              {
                type: 'string',
                name: 'dark_accent',
                nameOverride: 'dark-accent',
                label: 'Image Caption Text',
                ui: {
                  component: 'color',
                },
              },
              {
                type: 'string',
                name: 'navbar_bg',
                nameOverride: 'navbar-bg',
                label: 'Navigation Menu Background',
                ui: {
                  component: 'color',
                },
              },
            ],
          },
          {
            type: 'object',
            name: 'fonts',
            label: 'Fonts',
            fields: [
              {
                type: 'string',
                name: 'primary',
                label: 'Primary',
              },
              {
                type: 'string',
                name: 'secondary',
                label: 'secondary',
              },
              {
                type: 'string',
                name: 'logo',
                label: 'Logo',
              },
            ],
          },
        ],
      },
    ],
  },
});
