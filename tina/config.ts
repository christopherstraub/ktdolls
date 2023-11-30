import { defineConfig } from 'tinacms';

import { homePageFields } from './templates';
import { aboutPageFields } from './templates';
import { pastLittersPageFields } from './templates';
import { furEverHomesPageFields } from './templates';
import { siteSettingsFields } from './templates';
import { siteThemeFields } from './templates';

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
      publicFolder: './',
      mediaRoot: 'assets/img',
    },
  },
  schema: {
    collections: [
      {
        name: 'home_page',
        label: 'Home Page',
        path: '/',
        match: {
          include: 'index',
        },
        format: 'md',
        fields: homePageFields(),
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
      },
      {
        name: 'about_page',
        label: 'About Page',
        path: '_pages',
        match: {
          include: 'about',
        },
        format: 'md',
        fields: aboutPageFields(),
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
      },
      {
        name: 'past_litters_page',
        label: 'Past Litters Page',
        path: '_pages',
        match: {
          include: 'past-litters',
        },
        format: 'md',
        fields: pastLittersPageFields(),
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
      },
      {
        name: 'fur_ever_homes_page',
        label: 'Fur-ever Homes Page',
        path: '_pages',
        match: {
          include: 'fur-ever-homes',
        },
        format: 'md',
        fields: furEverHomesPageFields(),
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
      },
      {
        name: 'site_settings',
        label: 'Site Settings',
        path: '/',
        match: {
          include: '_config',
        },
        format: 'yml',
        fields: siteSettingsFields(),
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
      },
      {
        name: 'site_theme',
        label: 'Site Theme',
        path: '_data',
        match: {
          include: 'theme',
        },
        format: 'yml',
        fields: siteThemeFields(),
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
      },
    ],
  },
});
