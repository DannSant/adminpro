import { Component, OnInit } from '@angular/core';
import {Router,ActivationEnd} from '@angular/router'
import {Title,Meta,MetaDefinition} from '@angular/platform-browser'

import {filter,map} from 'rxjs/operators'

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  titulo:string="";

  constructor(private router:Router,private title:Title,private meta:Meta) {

    this.getDataRoute().subscribe(data=>{
      this.titulo=data;
      this.title.setTitle(this.titulo);
      const metaTag:MetaDefinition = {
        name:'description',
        content:this.titulo
      }
      this.meta.updateTag(metaTag);
    })
  }

  getDataRoute(){
  return this.router.events.pipe(
      filter((evento)=>{
        return evento instanceof ActivationEnd;
      }),
      filter((evento:ActivationEnd)=>{
        return evento.snapshot.firstChild==null;
      }),
      map((evento:ActivationEnd)=>{
        return evento.snapshot.data.titulo;
      }),
    )
  }

  ngOnInit() {
  }

}
