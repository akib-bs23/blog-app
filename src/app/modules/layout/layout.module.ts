import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { LayoutRoutingModule } from './layout.routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LayoutComponent,
  ],
  imports: [RouterModule, LayoutRoutingModule],
  providers: [],
  exports: [LayoutComponent],
  bootstrap: [],
})
export class LayoutModule {}
