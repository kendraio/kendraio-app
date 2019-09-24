import { MenuItem } from 'src/app/_models/classes/common';

export const MENUITEMS: MenuItem[] = [
  {
    path: '/dashboard',
    label: 'dashboard' ,
    icon: 'dashboard',

  },
  {
    label: 'Assets',
    icon: 'favorite',
    path: '/assets',
    children: [
      {
        label: 'Releases',
        icon: 'radio',
        path: 'assets/releases',
        children: [
          {
            label: 'List',
            icon: 'list',
            path: 'assets/releases/list',
          },
          {
            label: 'Tasks',
            icon: 'list',
            path: 'assets/releases/tasks',
          }
        ]
      },
      {
        label: 'Recordings',
        icon: 'library_music',
        path: 'assets/recordings',
      },
      {
        label: 'files.title',
        icon: 'library_music',
        path: 'assets/files',
      },
      {
        label: 'works.title',
        icon: 'library_music',
        path: 'assets/works',
      }
    ]
  },

  {
    label: 'Services',
    icon: 'live_tv',
    path: '/services',
    children: [
      {
        path: '/bloomen/users',
        label: 'Bloomen',
        icon: 'brightness_5',
        children: [
          {
            label: 'Search',
            icon: 'search',
            path: 'bloomen/search'
          },
          {
            label: 'Import File',
            icon: 'file_copy',
            path: 'bloomen/importFromFile'
          },
          {
            label: 'Export',
            icon: 'cloud_download',
            path: 'bloomen/exportWorks'
          },
          {
            label: 'Import Works',
            icon: 'cloud_upload',
            path: 'bloomen/importWorks'
          },
          {
            label: 'Musical Works',
            icon: 'music_note',
            path: 'bloomen/listWorks'
          },
          {
            label: 'Users',
            icon: 'people',
            path: 'bloomen/users',

          children: [
            {
              label: 'register',
              icon: 'people',
              path: 'bloomen/register',
            }
          ]
        }
        ]
      },
      {
          path: '/services/youtube',
          label: 'YouTube',
          icon: 'attach_money'
        },
        {
          path: 'services/spotify',
          label: 'Spotify',
          icon: 'attach_money'
        },

  ]
},

  {
    path: '/claims',
    label:  'claims',
    icon: 'attach_money'
  },
  {
    path: '/tasks',
    label:  'tasks',
    icon: 'alarm_on'
  },
  {
    path: '/reports',
    label: 'reports.title',
    icon: 'assignment'
  },
  {
    label:  'contacts.title',
    icon: 'contacts',
    path: '/contacts',
    children: [
      {
        label:  'contacts.people',
        icon: 'people',
        path: 'contacts/people',
      },
      {
        label:  'contacts.organisations',
        icon: 'business',
        path: 'contacts/organisations',
      }
    ]
  },
  {
    label: 'notifications',
    icon: 'notifications',
    path: '/notifications',
  },
  {
    path: '/import',
    label:  'Import',
    icon: 'import_export',

    children: [
      {
        label: 'Test API',
        icon: 'import_export',
        path: 'test-api',
      },
      {
        label: 'Bloomen API',
        icon: 'import_export',
        path: 'bloomen-api',
      },
    ]
  },
  {
    path: '/upload',
    label: 'upload.title',
    icon: 'cloud_upload'
  },
  // {
  //   path: '/diagram',
  //   label: 'Processes',
  //   icon: 'bubble_chart'
  // },

  {
    path: '/core/settings',
    label: 'settings',
    icon: 'settings',
    children: [
      {
        path: '/adapters',
        label: 'Adapters',
        icon: 'extension'
      },
    ]
  },
  {
    path: '/docs',
    label: 'Database',
    icon: 'storage'
  },
  {
    path: '/user',
    label: 'Identities',
    icon: 'person'
  },
  {
    path: '/workflow-builder',
    label: 'Workflow builder',
    icon: 'build'
  },
  {
    path: '/form-builder',
    label: 'Form builder',
    icon: 'build'
  }
];

