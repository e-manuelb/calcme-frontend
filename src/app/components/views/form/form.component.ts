import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from './form.model';
import emailMask from 'text-mask-addons/dist/emailMask';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  emailMask = emailMask;
  example = new FormGroup({
    telefone: new FormControl(''),
  });

  usuario: Usuario = {
    nome: '',
    email: '',
    telefone: '',
  };

  constructor(private service: UsuarioService) {}

  ngOnInit() {}

  create(): void {
    this.service.create(this.usuario).subscribe(
      () => {
        this.service.message('Usuário criado com sucesso!');
        location.reload();
      },
      (err) => {
        this.service.message(err.message);
      }
    );
  }

  cancel(): void {
    location.reload();
  }
}
