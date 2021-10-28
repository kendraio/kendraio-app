# Firebase Functions Development

Notes on working on firebase functions locally.

## Local dev folders

Working on functions can be made easier by creating some folders for managing local settings and data.
These folders can be created in the project root and added to .gitignore to keep them out of the repo.

.local
Local datasets for the emulators

.auth
A location for access keys

## Local database sync

Effectively working with the Firebase realtime database will probably require a local clone.

### Exporting the database

One way to set up a local copy of the firestore is to use this import-export tool to take a snapshot.

<https://github.com/jloosli/node-firestore-import-export>

**Example commandline:**
firestore-export --accountCredentials ..\.auth\kendraio-project-firebase-adminsdk-6smpz-540f18cdf2.json --backupFile ..\.local\firestore.json

### Local database import

Once a the main database has been exported, it can be imported by starting up the firebase emulators, setting the FIRESTORE_EMULATOR_HOST environment variable and then importing.

export FIRESTORE_EMULATOR_HOST="localhost:8080"
firestore-import --backupFile /backups/myDatabase.json