import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { User } from '../../shared/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit{
  loginform!:FormGroup;
  isSubmitted:boolean=false;
  returnUrl!:string;
  constructor(private formbuilder : FormBuilder,private loginservice:UserService,private activatedRoute:ActivatedRoute,
    private router:Router){
   
  }
  ngOnInit(): void {
    this.loginform=this.formbuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/)

      ]]
    })
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }
  Submit(){
    this.isSubmitted=true;
   
    if(this.loginform.invalid) return;
    this.loginservice.login({email:this.fc.email.value,password:this.fc.password.value}).subscribe(()=>{
      this.router.navigateByUrl(this.returnUrl);
    });
  }

  
   get fc() {
    return this.loginform.controls ;
  }
  


}
