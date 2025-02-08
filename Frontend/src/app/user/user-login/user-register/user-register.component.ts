import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';

import { AlertyfyService } from 'src/app/services/alertyfy.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup;
  userSubmitted: boolean;
  user: User ;  // Ensure it's an array
 

  constructor(private fb: FormBuilder,
              private userService:UserServiceService,
              private alertify: AlertyfyService ) { }

  ngOnInit() {
    // this.registrationForm = new FormGroup({
    //   userName : new FormControl(null, Validators.required),
    //   email : new FormControl(null,[Validators.required, Validators.email]),
    //   password : new FormControl(null,[Validators.minLength(8),Validators.required]),
    //   confirmPassword: new FormControl(null,Validators.required),
    //   mobile : new FormControl(null,[Validators.required, Validators.maxLength(10)])
    // }, this.passwordMatchingValidator);

    this.createregistrationFrom();

    // this.registrationForm.controls['userName'].setValue('userName')
  }
  
  createregistrationFrom(){
    this.registrationForm = this.fb.group ({
      userName : [null,Validators.required],
      email : [null,[Validators.required, Validators.email]],
      password : [null,[Validators.minLength(8),Validators.required]],
      confirmPassword: [null,Validators.required],
      mobile :[null,[Validators.required, Validators.maxLength(10)]]
    },{validators:this.passwordMatchingValidator});
   }


  passwordMatchingValidator(fg:FormGroup): Validators{
    return fg.get('password').value == fg.get('confirmPassword').value ? null :
    {notmatched:true} 
  }

  
  onSubmit(){
    console.log(this.registrationForm.value);
    this.userSubmitted = true;
    
    if(this.registrationForm.valid)
    {
    //this.user = Object.assign(this.user, this.registrationForm.value);
    this.userService.addUser(this.userData());
    this.registrationForm.reset();
    this.userSubmitted = false;
    this.alertify.success('Congrats, you are successfully registered');
    } 
    else{
      this.alertify.error('Kaindly provide the required fileds');
    }

  }
  userData():User {
    return this.user={
    username:this.username.value,
    email: this.email.value,
    password: this.password.value,
    mobile: this.mobile.value
    }
  }

  // decler the method
  get username(){
    return this.registrationForm .get('userName') as FormControl;
  }
  get email(){
    return this.registrationForm .get('email') as FormControl;
  }
  get password(){
    return this.registrationForm .get('password') as FormControl;
  }
  get confirmPassword(){
    return this.registrationForm .get('confirmPassword') as FormControl;
  }
  get mobile(){
    return this.registrationForm .get('mobile') as FormControl;
  }
  
}


