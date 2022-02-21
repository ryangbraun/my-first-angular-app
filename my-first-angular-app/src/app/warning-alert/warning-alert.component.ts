import { Component } from "@angular/core";

@Component({
    template: `<p>This is a warning, you are in danger</p>`,
    selector:'app-warning-alert',
    styles: [
        `  
        p {
            padding: 20px;
            background-color: mistyrose;
            border: 1px solid red;
        }
        `
    ]
})
export class WarningAlertComponent {

}