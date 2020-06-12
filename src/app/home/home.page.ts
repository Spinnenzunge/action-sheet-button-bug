import {Component} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    public form = [
        {icon: 'boat-outline', val: 'Boat', isChecked: true},
        {icon: 'bug-outline', val: 'Bug', isChecked: false},
        {icon: 'car-outline', val: 'Car', isChecked: false}
    ];

    constructor(private actionSheetController: ActionSheetController) {
    }

    itemClickHandler(): void {
        console.log('item clicked');
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
