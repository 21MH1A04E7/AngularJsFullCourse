import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { TestComponent } from './test/test.component';
import { ContainerComponent } from './container/container.component';
import { ClassDirective } from './container/customDirective/class.directive';
import { StyleDirective } from './container/customDirective/style.directive';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { IfDirective } from './structural-directive/customeDirective/if.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TestComponent,
    ContainerComponent,
    ClassDirective,
    StyleDirective,
    StructuralDirectiveComponent,
    IfDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
