import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BorderRadiusPreviewerComponent} from "./border-radius-previewer/border-radius-previewer.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'border-radius-previewer', component: BorderRadiusPreviewerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
