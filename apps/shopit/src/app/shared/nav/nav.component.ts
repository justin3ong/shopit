import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoriesService, Category } from '@bluebits/products';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'shopit-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit , OnDestroy{
  categories: Category[]=[];
  endsubs$ :Subject<any>=new Subject()
  constructor(private catService: CategoriesService) { }

  ngOnInit(): void {
    this.getCategory();
  }
  ngOnDestroy(){
    this.endsubs$.next()
    this.endsubs$.complete()
  }
  getCategory(){
     this.catService.getCategories().pipe(takeUntil(this.endsubs$)).subscribe((cats) => {
      this.categories = cats;
    });
  }

}
