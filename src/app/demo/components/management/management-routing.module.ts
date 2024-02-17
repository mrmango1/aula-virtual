import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'grades', loadChildren: () => import('./professor/professor.module').then(m => m.ProfessorModule) },
        { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
        { path: 'subject', loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class ManagementRoutingModule { }
