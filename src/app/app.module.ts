import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GolComponent } from "./gol/gol.component";
import { NumToArrayPipe } from "./pipes/num-to-array.pipe";
import { FormsModule } from "@angular/forms";

@NgModule({
	declarations: [AppComponent, GolComponent, NumToArrayPipe],
	imports: [BrowserModule, AppRoutingModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
