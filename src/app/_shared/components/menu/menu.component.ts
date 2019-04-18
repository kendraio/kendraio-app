import { MenuItem } from 'src/app/_models/classes/common';

export const MENUITEMS: MenuItem[] = [
  {
    path: '/dashboard',
    label: {'de': 'Instrumententafel' , 'fr': '', 'en-US': 'dashboard' },
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
    label: {'de': 'Vermögenswerte' , 'fr': '', 'en-US': 'assets'},
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
        label: {'de': 'Dateien' , 'fr': '', 'en-US': 'files.title'},
        icon: 'library_music', 
        path: 'assets/files',
      },
      {
        label: {'de': 'Arbeitet' , 'fr': '', 'en-US': 'works.title'},
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
        {        
          path: 'channels/spotify',
          label: {'de': 'Spotify' , 'fr': '', 'en-US': 'Spotify'},
          icon: 'attach_money'
        },
      
  ]
},


  {
    path: '/claims',
    label: {'de': 'Ansprüche' , 'fr': '', 'en-US': 'claims'},
    icon: 'attach_money'
  },
  {
    path: '/tasks',
    label: {'de': 'Aufgaben' , 'fr': '', 'en-US': 'tasks'},
    icon: 'alarm_on'
  },
  {
    path: '/reports',
    label: {'de': 'Berichte' , 'fr': '', 'en-US': 'reports.title'},
    icon: 'assignment'
  },
  {
    label: {'de': 'Kontakte' , 'fr': '', 'en-US': 'contacts.title'},
    icon: 'contacts',   
    path: '/contacts',
    children: [
      {
        label: {'de': 'Menschen' , 'fr': '', 'en-US': 'contacts.people'},
        icon: 'people', 
        path: 'contacts/people',
      },
      {
        label: {'de': 'Organisationen' , 'fr': '', 'en-US': 'contacts.organisations'},
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
    label: {'de': 'Hochladen' , 'fr': '', 'en-US': 'upload.title'},
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
    label: {'de': 'die Einstellungen' , 'fr': '', 'en-US': 'settings'},
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






