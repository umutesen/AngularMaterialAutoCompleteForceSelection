import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Project } from './project';
import { RequireMatch as RequireMatch } from './requireMatch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  projects: Project[];

  constructor() {
    this.projects = [
      new Project("Web Development"),
      new Project("UX"),
      new Project("SEO")
    ];
  }

  ngOnInit() {
    this.form = new FormGroup({
      project: new FormControl('', [Validators.required, RequireMatch]),
    });
  }

  displayWith(obj?: any): string | undefined {
    return obj ? obj.name : undefined;
  }
}


