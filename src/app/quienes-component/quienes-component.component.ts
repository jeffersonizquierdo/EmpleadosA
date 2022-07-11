import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quienes-component',
  templateUrl: './quienes-component.component.html',
  styleUrls: ['./quienes-component.component.css']
})
export class QuienesComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  volverHome(){

    this.router.navigate([''])
  }

}
