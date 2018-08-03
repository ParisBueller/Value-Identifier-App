// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyCWqAq_LcDELeqDkBplI7gTIbHGwTQWeAo",
    authDomain: "value-identifier-app.firebaseapp.com",
    databaseURL: "https://value-identifier-app.firebaseio.com",
    projectId: "value-identifier-app",
    storageBucket: "value-identifier-app.appspot.com",
    messagingSenderId: "382946259505"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
