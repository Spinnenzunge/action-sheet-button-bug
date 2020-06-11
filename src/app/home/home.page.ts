import {Component} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private actionSheetController: ActionSheetController) {
    }

    async presentActionSheet(): Promise<void> {
        const sheet = await this.actionSheetController.create({
            buttons: [
                {
                    text: 'Action',
                    handler: () => {
                        console.log('handler triggered');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        await sheet.present();
    }
}
