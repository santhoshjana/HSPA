import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;
  constructor(private router:Router) { }

  ngOnInit() {
    // this.addPropertyForm.controls['name'].setValue('userName')
    setTimeout(() => {
      this.addPropertyForm.controls['Name'].setValue('default value')
    }, );
  }
  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(Form: NgForm){
    console.log('Congrats, form submited')
    console.log(this.addPropertyForm);
  }

}
