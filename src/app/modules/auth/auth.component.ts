import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostInterface } from 'src/app/core/models/post-model';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-layout',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
