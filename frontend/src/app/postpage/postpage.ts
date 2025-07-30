import { Component } from '@angular/core';
import { Navbar } from "../tool_components/navbar/navbar";
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-postpage',
  imports: [Navbar, ReactiveFormsModule],
  templateUrl: './postpage.html',
  styleUrl: './postpage.css'
})
export class Postpage {

  recipeForm = new FormGroup({
    title: new FormControl(''),
    ingredient: new FormControl(''),
    recipe: new FormControl('')
  })

}
