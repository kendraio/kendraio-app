import { MenuItem } from 'src/app/_models/classes/common';

export const MENUITEMS: MenuItem[] = [
  {
    path: '/dashboard',
    label: {'de': 'Instrumententafel' , 'fr': '', 'en-US': 'Dashboard' },
    icon: 'dashboard',
    children: [
      {
        label: {'de': 'Prüfung' , 'fr': '', 'en-US': 'Test API'},
        icon: 'contacts', 
        path: 'test-api',
      },
    ]
  },
  {
    label: {'de': 'Vermögenswerte' , 'fr': '', 'en-US': 'Assets'},
    icon: 'favorite',   
    path: '/assets',
    children: [
      {
        label: {'de': 'Veröffentlichungen' , 'fr': '', 'en-US': 'Releases'},
        icon: 'radio', 
        path: 'assets/releases',
        children: [
          {
            label: {'de': 'Liste' , 'fr': '', 'en-US': 'List'},
            icon: 'list', 
            path: 'assets/releases/list',
          },
          {
            label: {'de': 'Aufgaben' , 'fr': '', 'en-US': 'Tasks'},
            icon: 'list', 
            path: 'assets/releases/tasks',
          }
        ]
      },
      {
        label: {'de': 'Aufnahmen' , 'fr': '', 'en-US': 'Recordings'},
        icon: 'library_music', 
        path: 'assets/recordings',
      },
      {
        label: {'de': 'Dateien' , 'fr': '', 'en-US': 'Files'},
        icon: 'library_music', 
        path: 'assets/files',
      },
      {
        label: {'de': 'Arbeitet' , 'fr': '', 'en-US': 'Works'},
        icon: 'library_music', 
        path: 'assets/works',
      }
    ]
  },

  {
    label: {'de': 'Channels' , 'fr': '', 'en-US': 'Channels'},
    icon: 'live_tv',   
    path: '/channels',
    children: [
      {        
          path: '../youtube',
          label: {'de': 'Ansprüche' , 'fr': '', 'en-US': 'YouTube'},
          icon: 'attach_money'
        },
      
  ]
},


  {
    path: '/claims',
    label: {'de': 'Ansprüche' , 'fr': '', 'en-US': 'Claims'},
    icon: 'attach_money'
  },
  {
    path: '/tasks',
    label: {'de': 'Aufgaben' , 'fr': '', 'en-US': 'Tasks'},
    icon: 'alarm_on'
  },
  {
    path: '/reports',
    label: {'de': 'Berichte' , 'fr': '', 'en-US': 'Reports'},
    icon: 'assignment'
  },
  {
    label: {'de': 'Kontakte' , 'fr': '', 'en-US': 'Contacts'},
    icon: 'contacts',   
    path: '/contacts',
    children: [
      {
        label: {'de': 'Menschen' , 'fr': '', 'en-US': 'People'},
        icon: 'people', 
        path: 'contacts/people',
      },
      {
        label: {'de': 'Organisationen' , 'fr': '', 'en-US': 'Organisations'},
        icon: 'business', 
        path: 'contacts/organisations',
      }
    ]
  },
  {
    path: '/import',
    label: {'de': 'Einführen' , 'fr': '', 'en-US': 'Import'},
    icon: 'import_export'
  },
  {
    path: '/upload',
    label: {'de': 'Hochladen' , 'fr': '', 'en-US': 'Upload'},
    icon: 'cloud_upload'
  },
  // {
  //   path: '/diagram',
  //   label: 'Processes',
  //   icon: 'bubble_chart'
  // },
  {
    path: '/adapters',
    label: {'de': 'Instrumententafel' , 'fr': '', 'en-US': 'Adapters'},
    icon: 'extension'
  },
  {
    path: '/settings',
    label: {'de': 'die Einstellungen' , 'fr': '', 'en-US': 'Settings'},
    icon: 'settings'
  },
  {
    path: '/docs',
    label: {'de': 'Datenbank' , 'fr': '', 'en-US': 'Database'},
    icon: 'storage'
  },
  {
    path: '/user',
    label: {'de': 'Identitäten' , 'fr': '', 'en-US': 'Identities'},
    icon: 'person'
  }
];






