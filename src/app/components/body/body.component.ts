import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{

    mostrar = true;

    frase: any = {
        mensaje:'Solo se que nada sé',
        autor: 'Socrates'
    };

    personas: string[] = ['Maria', 'Natalia', 'Sofia'];
}