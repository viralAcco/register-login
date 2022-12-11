import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  email : string = '';
  password : string = '';

  constructor(private auth :AuthService) { }

  ngOnInit(): void {
  }

  registration() {
    console.log(this.email);
    console.log(this.password);
    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.registration(this.email,this.password);
    
    this.email = '';
    this.password = '';

  }

}
