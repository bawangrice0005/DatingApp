import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxGalleryThumbnailsComponent } from '@kolkov/ngx-gallery';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
   model: any = {};


  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    
  }

  login() {

    if(this.model.username == null || this.model.password == null || this.model.username.trim() == "" || this.model.password.trim() == "")
    {
      this.toastr.error("Invalid Credentials");
      return;
    }

    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/members');
    })
  }

  logout() {
    this.accountService.logout();
    this.model.password = null;
    this.router.navigateByUrl('/');
  }

}
