import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemInfoComponent } from './food/item-info/item-info.component';
import { MenuComponent } from './food/menu/menu.component';
import { FoodService } from './food/food.service';
import { SearchComponent } from './food/search/search.component';
import { HttpClientModule} from '@angular/common/http';
import { BannerComponent } from './site/banner/banner.component';
import { HeaderComponent } from './site/header/header.component';
import { FooterComponent } from './site/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemInfoComponent,
    MenuComponent,
    SearchComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
