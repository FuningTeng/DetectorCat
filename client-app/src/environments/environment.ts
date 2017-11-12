// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCgCpKWdggcV-l9pbqn27PEXv5JdgAk8AE',
    authDomain: 'detectorcat.firebaseapp.com',
    databaseURL: 'https://detectorcat.firebaseio.com',
    projectId: 'detectorcat',
    storageBucket: 'detectorcat.appspot.com',
    messagingSenderId: '678241272183'
  }
};
