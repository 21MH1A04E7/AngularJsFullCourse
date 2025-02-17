import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FeaturedBrandsComponent } from './container/featured-brands/featured-brands.component';
import { SetBackgroundDirective } from './CustomDirectives/SetBackground.directive';
import { HighlightDirective } from './CustomDirectives/highlight.directive';
import { AppHoverDirective } from './CustomDirectives/app-hover.directive';
import { DisableProductsDirective } from './CustomDirectives/disable-products.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    MainMenuComponent,
    TopMenuComponent,
    ContainerComponent,
    SearchComponent,
    ProductListComponent,
    FilterComponent,
    ProductDetailComponent,
    ProductComponent,
    FeaturedBrandsComponent,
    SetBackgroundDirective,
    HighlightDirective,
    AppHoverDirective,
    DisableProductsDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
