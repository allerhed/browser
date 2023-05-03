# history

1. npm install @capacitor/browser

2. npx cap sync

3. 

4. ionic capacitor add ios

5. ionic capacitor run ios



# alternative

1. npm install cordova-plugin-inappbrowser

2. npm install @awesome-cordova-plugins/in-app-browser

3. ionic build

4. ionic cap sync

5. main.ts

import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

providers: InAppBrowser

6. home.page.scss - clear content

7. home.page.html - clear ion-content

8. home.page.ts

import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

openInAppBrowser() {  

    const browser = this.iab.create('https://balstadojoif.zoezi.se/',
                                    '_blank',
                                    {
                                      location: 'no',
                                      toolbar: 'no',
                                      }
                                      );
      };

constructor(private iab: InAppBrowser) {
    this.openInAppBrowser();
  }      

9. capacitor.config.jason

"ios": {
    "contentInset": "always"
  }

10. ionic capacitor add ios, android (change app name+ app bundel first)

11. ionic cap run ios -l --external

12.



# documentation
https://danielsogl.gitbook.io/awesome-cordova-plugins/in-app-browser-1
https://github.com/apache/cordova-plugin-inappbrowser

# not working
11. npm install @capacitor/status-bar

12. npx cap sync

# splashscreen

1. npm install -g cordova-res

2. cordova-res ios --skip-config --copy (+ android)

3. npm install @capacitor/splash-screen

4. capacitor.config.ts

plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      launchFadeOutDuration: 3000,
      backgroundColor: "#262626",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#cc5500",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true,
    },
  },

  5. 



