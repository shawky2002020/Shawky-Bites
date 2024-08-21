import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchterm!:string;
  constructor(activatedRouter:ActivatedRoute,private router:Router){ 
    // activatedRouter.params.subscribe((param)=>{
    //   if(param.searchterm)
    //     this.searchterm=param.searchterm;
    // }); 
  }
  search(term:string){
    if (term) {
      this.router.navigateByUrl('/search/'+ term);
    }
    else{
      this.router.navigateByUrl('');

    }
  }
}
