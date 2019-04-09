import { MenuItem } from 'src/app/_models/classes/common';

export const MENUITEMS: MenuItem[] = [
  {
    path: '/dashboard',
    label: 'Dashboard',
    icon: 'dashboard',
    children: [
      {
        label: 'Test API',
        icon: 'contacts', 
        path: 'test-api',
      },
    ]
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
        label: 'Files',
        icon: 'library_music', 
        path: 'assets/files',
      },
      {
        label: 'Works',
        icon: 'library_music', 
        path: 'assets/works',
      }
    ]
  },


  {
    path: '/claims',
    label: 'Claims',
    icon: 'attach_money'
  },
  {
    path: '/tasks',
    label: 'Tasks',
    icon: 'alarm_on'
  },
  {
    path: '/reports',
    label: 'Reports',
    icon: 'assignment'
  },
  {
    label: 'Contacts',
    icon: 'contacts',   
    path: '/contacts',
    children: [
      {
        label: 'People',
        icon: 'people', 
        path: 'contacts/people',
      },
      {
        label: 'Organisations',
        icon: 'business', 
        path: 'contacts/organisations',
      }
    ]
  },
  {
    path: '/import',
    label: 'Import',
    icon: 'import_export'
  },
  {
    path: '/upload',
    label: 'Upload',
    icon: 'cloud_upload'
  },
  // {
  //   path: '/diagram',
  //   label: 'Processes',
  //   icon: 'bubble_chart'
  // },
  {
    path: '/adapters',
    label: 'Adapters',
    icon: 'extension'
  },
  {
    path: '/settings',
    label: 'Settings',
    icon: 'settings'
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
  }
];






