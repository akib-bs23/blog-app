import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostInterface } from 'src/app/core/models/post-model';
import { PostService } from 'src/app/core/services/post.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts$!: Observable<PostInterface[]>;

  constructor(private postService: PostService, private http: HttpClient) {}

  ngOnInit(): void {
    this.posts$ = this.http.get<PostInterface[]>(environment.baseUrl + 'users');
  }
}
