import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
     title: "MT 15",
     img: "assets/images/mt15.jpg",
     icon: "fitness-outline",
     description:"Diseñada con todo el ADN de la gama MT,la MT-15 es una motocicleta de diseño avanzado,aceleración agresiva y diseño ágil. Además,cuenta con tecnología avanzada te mantieneconectado con tu lado oscuro a través de la aplicación Y-Connect."
    },

    {
     title: "MT 03",
     img: "assets/images/mt03.png",
     icon: "fitness-outline",
     description:"Diseñada con todo el ADN de la gama MT,la MT-03 es una motocicleta de diseño avanzado,aceleración agresiva y diseño ágil. Además,cuenta con tecnología avanzada te mantieneconectado con tu lado oscuro a través de la aplicación Y-Connect."
    },

    {
     title: "MT 07",
     img: "assets/images/mt07.jpg",
     icon: "fitness-outline",
     description:"Diseñada con todo el ADN de la gama MT,la MT-07 es una motocicleta de diseño avanzado,aceleración agresiva y diseño ágil. Además,cuenta con tecnología avanzada te mantieneconectado con tu lado oscuro a través de la aplicación Y-Connect."
    },

    {
     title: "MT 09",
     img: "assets/images/mt09.jpg",
     icon: "fitness-outline",
     description:"Diseñada con todo el ADN de la gama MT,la MT-09 es una motocicleta de diseño avanzado,aceleración agresiva y diseño ágil. Además,cuenta con tecnología avanzada te mantieneconectado con tu lado oscuro a través de la aplicación Y-Connect."
    },

    {
     title: "MT 10",
     img: "assets/images/mt10.jpg",
     icon: "fitness-outline",
     description:"Diseñada con todo el ADN de la gama MT,la MT-10 es una motocicleta de diseño avanzado,aceleración agresiva y diseño ágil. Además,cuenta con tecnología avanzada te mantieneconectado con tu lado oscuro a través de la aplicación Y-Connect."
    }

   ]

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }
  
  close() {
   this.storage.set("introShow", true); 
   this.router.navigateByUrl("/menu/home");
  }
}
