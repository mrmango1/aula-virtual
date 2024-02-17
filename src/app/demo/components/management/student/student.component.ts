import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/api/product';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Calificacion, Curso } from 'src/app/demo/api/manage';
import { DataSharingService } from 'src/app/demo/service/shareData.service';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/demo/service/subject.service';

@Component({
    templateUrl: './student.component.html',
    providers: [MessageService],
})
export class StudentComponent implements OnInit {
    productDialog: boolean = false;

    deleteProductDialog: boolean = false;

    deleteProductsDialog: boolean = false;

    products: Product[] = [];

    product: Product = {};

    curso: Curso = {};

    selectedProducts: Product[] = [];

    submitted: boolean = false;

    cols: any[] = [];

    statuses: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    constructor(
        private studentService: SubjectService,
        private shareService: DataSharingService,
        private router: Router
    ) {}

    ngOnInit() {
        this.curso = this.shareService.getCurrentCurso();
        this.studentService
            .getStudents(this.curso)
            .then((data) => (this.products = data));

        this.cols = [
            { field: 'product', header: 'Product' },
            { field: 'price', header: 'Price' },
            { field: 'category', header: 'Category' },
            { field: 'rating', header: 'Reviews' },
            { field: 'inventoryStatus', header: 'Status' },
        ];

    }

    onNext(calificacion: Calificacion) {
        this.shareService.setCurrentCursoEstudent(calificacion);
        this.router.navigate(['/management/grades']);
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal(
            (event.target as HTMLInputElement).value,
            'contains'
        );
    }
}
