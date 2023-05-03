import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
// custom import
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})

export class HomePage {
  constructor(private iab: InAppBrowser) {

    this.openInAppBrowser();
  }
 ionViewDidEnter() {
  StatusBar.setStyle({ style: Style.Light });
}
  

  openInAppBrowser() {  
    //admin /staff#/attendance
    //member /grupptraning
    const browser = this.iab.create('https://members.balstadojo.com/grupptraning', 
                                    '_blank',
                                    {
                                      location: 'no',
                                      toolbar: 'no',
                                      }
                                      );
      };
      

}
