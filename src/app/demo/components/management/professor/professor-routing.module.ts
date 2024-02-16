import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfessorComponent } from './professor.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ProfessorComponent }
	])],
	exports: [RouterModule]
})
export class ProfessorRoutingModule { }
