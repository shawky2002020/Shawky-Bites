import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IUserRegister } from '../../../interfaces/iuser-register';
import { PasswordsMatchValidator } from '../../../validators/password_match_validator';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ])
  ]
})

export class RegisterComponent implements OnInit {
  RegisterForm!: FormGroup;
  returnUrl!:string;
  isSubmitted:boolean=false;

  constructor(
    private formbuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.RegisterForm = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/
          ),
        ],
      ],
      confirmPassword: ['', Validators.required],
      address: ['', Validators.required],
    },{
      validators:PasswordsMatchValidator('password','confirmPassword')
    });
    this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl;
  }
  get fc (){
    return this.RegisterForm.controls;
  }

  submit(){
    this.isSubmitted=true;
    if(this.RegisterForm.invalid)return 

    const formval = this.RegisterForm.value;
    const user:IUserRegister={
      name:formval.name,
      email:formval.email,
      password:formval.password,
      confirmPassword:formval.confirmPassword,
      address:formval.address,
    };
    this.userService.register(user).subscribe(_=>{
      this.router.navigateByUrl(this.returnUrl);
    })
  }
}
