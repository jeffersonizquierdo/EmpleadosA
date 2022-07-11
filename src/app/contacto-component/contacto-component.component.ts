import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto-component',
  templateUrl: './contacto-component.component.html',
  styleUrls: ['./contacto-component.component.css']
})
export class ContactoComponentComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  volverHome(){

    this.route.navigate([''])

  }

}
