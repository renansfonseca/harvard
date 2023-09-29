import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioApiService } from '../shared/usuario-api.service';

@Component({
  selector: 'app-cadusuario2',
  templateUrl: './cadusuario2.component.html',
  styleUrls: ['./cadusuario2.component.css'],
})
export class Cadusuario2Component implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  usuarioData: any = {};

  constructor(
    public restApi: UsuarioApiService, 
    public actRoute: ActivatedRoute  ,  
    public router: Router)
     {}


  ngOnInit() {
if (this.id > 0)
{
    this.restApi.getUsuario(this.id).subscribe((data: {}) => {
      this.usuarioData = data;
    })
  }
}
  addUsuario(dataUsuario: any) { this.restApi.createUsuario(this.usuarioData).subscribe((data: {}) => {
  this.router.navigate(['/listausuarios']);
  });
  }

  // Atualiza dados do Paciente
  updateUsuario() {
      this.restApi.updateUsuario(this.id, this.usuarioData).subscribe(data => {
        this.router.navigate(['/listausuarios'])
      })
  }



  hasUnitNumber = false;

  onSubmit(): void {
    alert('Thanks!');
  }
}
