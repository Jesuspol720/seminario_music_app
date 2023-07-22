import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  showPassword: boolean = false;

  validation_messages = {
    email: [
      { type: "required", message: "El email es obligatorio" },
      { type: "pattern", message: "Debe poner un email valido" },
      { type: "maxlength", message: "Debe tener maximo 25 caracteres" },
    ],
    password: [
      { type: "required", message: "la contraseña es obligatoria" },
      { type: "minlength", message: "la contraseña debe tener minimo 6 caracteres" },
      { type: "maxlength", message: "la contraseña debe tener maximo 10 caracteres" },
    ],
    name: [
      { type: "required", message: "El campo es obligatorio" },
      { type: "minlength", message: "El campo debe tener minimo 3 caracteres" },
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController
  ) {
    this.registerForm = this.formBuilder.group(
      {
        email: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+.[a-zA-Z0-9.-]+$")
          ]
          )
        ),
        password: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(6)
            ]
          )
        ),
        name: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(3)
            ]
          )
        ),
        last_name: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(3)
            ]
          )
        )
      }
    )
   }

  ngOnInit() { }

  registerUser(userData:any){
    console.log(userData);
    this.authService.registerUser(userData).then(() => {
      this.navCtrl.navigateBack("/login");
    })
  }

  changePasswordType() {
    this.showPassword = !this.showPassword;
  }
}
