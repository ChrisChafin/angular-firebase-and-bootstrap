// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBBsO0JRaI0rw3x2qHz3WZrB5muQBZerw8",
    authDomain: "angular-firebase-and-bootstrap.firebaseapp.com",
    databaseURL: "https://angular-firebase-and-bootstrap.firebaseio.com",
    projectId: "angular-firebase-and-bootstrap",
    storageBucket: "angular-firebase-and-bootstrap.appspot.com",
    messagingSenderId: "439965902957"
  }
};
