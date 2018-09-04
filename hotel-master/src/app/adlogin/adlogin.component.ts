import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrls: ['./adlogin.component.css']
})
export class AdloginComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit() {
  }

  onsubmit() {
    this.router.navigate(['booking']);
  }

}
