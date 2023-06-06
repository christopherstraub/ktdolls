import type { TinaField } from "tinacms";
export function about_pageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Page Title",
    },
    {
      type: "string",
      name: "first_heading",
      nameOverride: "first-heading",
      label: "First Heading",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "first_body",
      nameOverride: "first-body",
      label: "First Paragraph",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "first_img",
      nameOverride: "first-img",
      label: "First Image",
    },
    {
      type: "string",
      name: "first_img_alt",
      nameOverride: "first-img-alt",
      label: "First Image Alternative Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "second_heading",
      nameOverride: "second-heading",
      label: "Second Heading",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "second_body",
      nameOverride: "second-body",
      label: "Second Paragraph",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "second_img",
      nameOverride: "second-img",
      label: "Second Image",
    },
    {
      type: "string",
      name: "second_img_alt",
      nameOverride: "second-img-alt",
      label: "Second Image Alternative Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "queens_and_kings_title",
      nameOverride: "queens-and-kings-title",
      label: "Queens and Kings Title",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "queens",
      label: "Queens",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name",
        },
        {
          type: "image",
          name: "img",
          label: "Image",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "object",
      name: "kings",
      label: "Kings",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name",
        },
        {
          type: "image",
          name: "img",
          label: "Image",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "string",
      name: "ragdoll_history_title",
      nameOverride: "ragdoll-history-title",
      label: "Ragdoll History Title",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "ragdoll_history_body",
      nameOverride: "ragdoll-history-body",
      label: "Ragdoll History Paragraph",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "ragdoll_history_img",
      nameOverride: "ragdoll-history-img",
      label: "Ragdoll History Image",
    },
    {
      type: "string",
      name: "ragdoll_history_img_alt",
      nameOverride: "ragdoll-history-img-alt",
      label: "Ragdoll History Image Alternative Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "mink_ragdoll_title",
      nameOverride: "mink-ragdoll-title",
      label: "Mink Ragdoll Title",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "mink_ragdoll_body",
      nameOverride: "mink-ragdoll-body",
      label: "Mink Ragdoll Paragraph",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "mink_ragdoll_gallery",
      nameOverride: "mink-ragdoll-gallery",
      label: "Mink Ragdoll Photos",
      list: true,
      fields: [
        {
          type: "image",
          name: "path",
          label: "Image",
        },
        {
          type: "string",
          name: "caption",
          label: "Caption",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ] as TinaField[];
}
export function fur_ever_homes_pageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Page Title",
    },
    {
      type: "string",
      name: "page_body",
      nameOverride: "page-body",
      label: "Page Body",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "gallery",
      label: "Photos",
      list: true,
      fields: [
        {
          type: "image",
          name: "path",
          label: "Image",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "subtitle",
          label: "Subtitle",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ] as TinaField[];
}
export function home_pageFields() {
  return [
    {
      type: "string",
      name: "heading",
      label: "Heading",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "subheading",
      label: "Subheading",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "hero_section_img_grid",
      nameOverride: "hero-section-img-grid",
      label: "Hero Section Image Grid",
      fields: [
        {
          type: "image",
          name: "img_1",
          nameOverride: "img-1",
          label: "Image 1",
        },
        {
          type: "string",
          name: "img_1_alt",
          nameOverride: "img-1-alt",
          label: "Image 1 Alternative Text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "img_2",
          nameOverride: "img-2",
          label: "Image 2",
        },
        {
          type: "string",
          name: "img_2_alt",
          nameOverride: "img-2-alt",
          label: "Image 2 Alternative Text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "img_3",
          nameOverride: "img-3",
          label: "Image 3",
        },
        {
          type: "string",
          name: "img_3_alt",
          nameOverride: "img-3-alt",
          label: "Image 3 Alternative Text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "img_4",
          nameOverride: "img-4",
          label: "Image 4",
        },
        {
          type: "string",
          name: "img_4_alt",
          nameOverride: "img-4-alt",
          label: "Image 4 Alternative Text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "img_5",
          nameOverride: "img-5",
          label: "Image 5",
        },
        {
          type: "string",
          name: "img_5_alt",
          nameOverride: "img-5-alt",
          label: "Image 5 Alternative Text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "img_6",
          nameOverride: "img-6",
          label: "Image 6",
        },
        {
          type: "string",
          name: "img_6_alt",
          nameOverride: "img-6-alt",
          label: "Image 6 Alternative Text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "img_7",
          nameOverride: "img-7",
          label: "Image 7",
        },
        {
          type: "string",
          name: "img_7_alt",
          nameOverride: "img-7-alt",
          label: "Image 7 Alternative Text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "img_8",
          nameOverride: "img-8",
          label: "Image 8",
        },
        {
          type: "string",
          name: "img_8_alt",
          nameOverride: "img-8-alt",
          label: "Image 8 Alternative Text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "img_9",
          nameOverride: "img-9",
          label: "Image 9",
        },
        {
          type: "string",
          name: "img_9_alt",
          nameOverride: "img-9-alt",
          label: "Image 9 Alternative Text",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "string",
      name: "available_kittens_title",
      nameOverride: "available-kittens-title",
      label: "Available Kittens Title",
    },
    {
      type: "object",
      name: "available_kittens_text_img_pair",
      nameOverride: "available-kittens-text-img-pair",
      label: "Expecting Litter Text and Image Pairs",
      list: true,
      fields: [
        {
          type: "string",
          name: "text",
          label: "Text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "img",
          label: "Image",
        },
      ],
    },
    {
      type: "object",
      name: "available_kittens_gallery",
      nameOverride: "available-kittens-gallery",
      label: "Litter Gallery",
      list: true,
      fields: [
        {
          type: "string",
          name: "litter_title",
          nameOverride: "litter-title",
          label: "Litter Title",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "object",
          name: "available_kittens",
          nameOverride: "available-kittens",
          label: "Kittens",
          list: true,
          fields: [
            {
              type: "string",
              name: "name",
              label: "Name",
            },
            {
              type: "boolean",
              name: "reserved",
              label: "Reserved?",
            },
            {
              type: "string",
              name: "description",
              label: "Description",
              ui: {
                component: "textarea",
              },
            },
            {
              type: "number",
              name: "cost",
              label: "Cost",
            },
            {
              type: "image",
              name: "img",
              label: "Image",
            },
          ],
        },
      ],
    },
    {
      type: "string",
      name: "available_adults_title",
      nameOverride: "available-adults-title",
      label: "Available Adults Title",
    },
    {
      type: "object",
      name: "available_adults",
      nameOverride: "available-adults",
      label: "Adults",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name",
        },
        {
          type: "boolean",
          name: "reserved",
          label: "Reserved?",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "number",
          name: "cost",
          label: "Cost",
        },
        {
          type: "image",
          name: "img",
          label: "Image",
        },
      ],
    },
    {
      type: "string",
      name: "kitten_deposit_title",
      nameOverride: "kitten-deposit-title",
      label: "Kitten Deposit Title",
    },
    {
      type: "number",
      name: "deposit",
      label: "Kitten Deposit Cost",
    },
    {
      type: "boolean",
      name: "allow_deposits",
      nameOverride: "allow-deposits",
      label: "Allow Deposits?",
    },
    {
      type: "string",
      name: "shipping_title",
      nameOverride: "shipping-title",
      label: "Shipping Title",
    },
    {
      type: "string",
      name: "shipping_body",
      nameOverride: "shipping-body",
      label: "Shipping Paragraph",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "gallery_title",
      nameOverride: "gallery-title",
      label: "Photo Gallery Title",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "gallery",
      label: "Photos",
      list: true,
      fields: [
        {
          type: "image",
          name: "path",
          label: "Image",
        },
        {
          type: "string",
          name: "caption",
          label: "Caption",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ] as TinaField[];
}
export function past_litters_pageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Page Title",
    },
    {
      type: "object",
      name: "litters",
      label: "Litters",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "object",
          name: "gallery",
          label: "Photos",
          list: true,
          fields: [
            {
              type: "image",
              name: "image",
              label: "Image",
            },
            {
              type: "string",
              name: "description",
              label: "Description",
              ui: {
                component: "textarea",
              },
            },
          ],
        },
      ],
    },
  ] as TinaField[];
}
export function settingsFields() {
  return [
    {
      type: "string",
      name: "email",
      label: "Email",
    },
    {
      type: "string",
      name: "phone",
      label: "Contact Number",
    },
    {
      type: "image",
      name: "logo",
      label: "Logo",
    },
    {
      type: "string",
      name: "title",
      label: "Site Title",
    },
    {
      type: "string",
      name: "subtitle",
      label: "Site Subtitle",
    },
    {
      type: "string",
      name: "description",
      label: "Site Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "social",
      label: "Social Media Links",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "url",
          label: "Link",
        },
      ],
    },
    {
      type: "string",
      name: "url",
      label: "Site URL",
    },
  ] as TinaField[];
}
export function themeFields() {
  return [
    {
      type: "object",
      name: "colors",
      label: "Colors",
      fields: [
        {
          type: "string",
          name: "primary",
          label: "Primary",
          ui: {
            component: "color",
          },
        },
        {
          type: "string",
          name: "secondary",
          label: "Secondary",
          ui: {
            component: "color",
          },
        },
        {
          type: "string",
          name: "dark",
          label: "Body Text",
          ui: {
            component: "color",
          },
        },
        {
          type: "string",
          name: "dark_accent",
          nameOverride: "dark-accent",
          label: "Image Caption Text",
          ui: {
            component: "color",
          },
        },
        {
          type: "string",
          name: "navbar_bg",
          nameOverride: "navbar-bg",
          label: "Navigation Menu Background",
          ui: {
            component: "color",
          },
        },
      ],
    },
    {
      type: "object",
      name: "fonts",
      label: "Fonts",
      fields: [
        {
          type: "string",
          name: "primary",
          label: "Primary",
        },
        {
          type: "string",
          name: "logo",
          label: "Logo",
        },
      ],
    },
  ] as TinaField[];
}
