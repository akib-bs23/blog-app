import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostInterface } from './core/models/post-model';
import { PostService } from './core/services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'blog application';
  posts$!: Observable<PostInterface[]>;

  constructor(private postApi: PostService) {}

  ngOnInit(): void {
    this.postApi.getPosts().pipe((res) => {
      return (this.posts$ = res);
    });
  }
}
