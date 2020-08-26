import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  constructor(private activeteRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeteRoute.paramMap.subscribe(paramMap => {
      alert(paramMap.get("id"));
    });

  }
}