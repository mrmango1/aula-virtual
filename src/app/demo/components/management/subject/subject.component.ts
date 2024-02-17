import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { Curso } from 'src/app/demo/api/manage';
import { ProductService } from 'src/app/demo/service/product.service';
import { DataSharingService } from 'src/app/demo/service/shareData.service';
import { SubjectService } from 'src/app/demo/service/subject.service';

@Component({
    templateUrl: './subject.component.html',
})
export class SubjectComponent implements OnInit {
    subjects: Curso[] = [];

    sortOptions: SelectItem[] = [];

    sortOrder: number = 0;

    sortField: string = '';

    constructor(
        private subjectService: SubjectService,
        private shareService: DataSharingService,
        private router: Router
    ) {}

    ngOnInit() {
        this.subjectService.getSubject().then((data) => (this.subjects = data));
        this.sortOptions = [
            { label: 'Orden Ascendente', value: '!nombreCurso' },
            { label: 'Orden Descendente', value: 'nombreCurso' },
        ];
    }

    onSortChange(event: any) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    onFilter(dv: DataView, event: Event) {
        dv.filter((event.target as HTMLInputElement).value);
    }

    onNext(curso: Curso) {
        this.shareService.setCurrentCurso(curso);
        this.router.navigate(['/management/student']);
    }
}
