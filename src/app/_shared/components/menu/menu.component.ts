import { MenuItem } from 'src/app/_models/classes/common';

export const MENUITEMS: MenuItem[] = [
  {
    label: 'assets',
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
    path: '/import',
    label:  'import',
    icon: 'import_export',

    children: [
      {
        label: 'Test API',
        icon: 'import_export',
        path: 'example/test-api',
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
    path: '/example/view-imported-data',
    label: 'database',
    icon: 'storage'
  }
];

