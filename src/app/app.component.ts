import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password:string='';
  passwordLength:number=0;
  includeLetters:boolean=false;
  includeNumbers:boolean=false;
  includeSymbols:boolean=false;
  onChangeLengthChange(event:Event){
    this.passwordLength=parseInt((event.target as HTMLInputElement).value);
  }
  onChangeUseLetters(){
    this.includeLetters=!this.includeLetters;
  }
  onChangeUseNumbers(){
    this.includeNumbers=!this.includeNumbers;
  }
  onChangeUseSymbols(){
    this.includeSymbols=!this.includeSymbols;
  }
  onBtnClick(){
   const numbers='1234567890';
   const letters='abcdefghijklmnopqrstuvwxyz';
   const symbols='~!@#$%^&*()';
   let validChars='';
   if(this.includeLetters){
     validChars+=letters;
   }
   if(this.includeNumbers){
     validChars+=numbers;
   }
   if(this.includeSymbols){
     validChars+=symbols;
   }
   let generatedPassword='';
   for (let i = 0; i < this.passwordLength; i++) {
     const index = Math.floor(Math.random()* validChars.length);
     generatedPassword+=validChars[index];
     
   }
   this.password=generatedPassword;
  }
}
