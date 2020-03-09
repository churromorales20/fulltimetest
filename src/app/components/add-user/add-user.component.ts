import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { faBan} from '@fortawesome/free-solid-svg-icons';
import { faSave} from '@fortawesome/free-solid-svg-icons';

import { Router } from '@angular/router';
import { ApiService } from './../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.sass']
})
export class AddUserComponent implements OnInit {
  faBan = faBan;
  faSave = faSave;
  userForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private userAPI: ApiService,
    private router: Router,
    private ngZone: NgZone,
  ) { }

  ngOnInit() {
    this.submitUserForm();
  }
  submitUserForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      uname: ['', [Validators.required]],
      role: ['', [Validators.required]],
    })
  }
  submitStudentForm() {
    if (this.userForm.valid) {
      this.userAPI.AddUser(this.userForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl(''))
      });
    }
  }

}
