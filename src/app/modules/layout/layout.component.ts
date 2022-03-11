import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostInterface } from 'src/app/core/models/post-model';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  posts$!: Observable<PostInterface[]>;

  constructor(private postApi: PostService) {}

  ngOnInit(): void {
    this.postApi.getPosts().pipe((res) => {
      return (this.posts$ = res);
    });
  }
}
