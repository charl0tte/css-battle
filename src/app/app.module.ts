import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BoxceptionComponent } from './boxception/boxception.component';
import { SimplySquareComponent } from './simply-square/simply-square.component';
import { HorizonComponent } from './horizon/horizon.component';
import { CubeComponent } from './cube/cube.component';
import { TunnelComponent } from './tunnel/tunnel.component';
import { TotallyTriangleComponent } from './totally-triangle/totally-triangle.component';
import { WebMakerLogoComponent } from './web-maker-logo/web-maker-logo.component';
import { TesseractComponent } from './tesseract/tesseract.component';
import { PandaComponent } from './panda/panda.component';
import { CatPawComponent } from './cat-paw/cat-paw.component';
import { SunsetComponent } from './sunset/sunset.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxceptionComponent,
    SimplySquareComponent,
    HorizonComponent,
    CubeComponent,
    TunnelComponent,
    TotallyTriangleComponent,
    WebMakerLogoComponent,
    TesseractComponent,
    PandaComponent,
    CatPawComponent,
    SunsetComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
