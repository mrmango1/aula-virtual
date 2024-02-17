import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/api/product';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ProductService } from 'src/app/demo/service/product.service';
import { SubjectService } from 'src/app/demo/service/subject.service';
import { DataSharingService } from 'src/app/demo/service/shareData.service';
import { Router } from '@angular/router';
import { Calificacion } from 'src/app/demo/api/manage';

@Component({
    templateUrl: './professor.component.html',
    providers: [MessageService],
})
export class ProfessorComponent implements OnInit {
    productDialog: boolean = false;

    products: Product[] = [];

    product: Product = {};

    cursoStudent: Calificacion = {};

    submitted: boolean = false;

    cols: any[] = [];

    statuses: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    constructor(
        private studentService: SubjectService,
        private messageService: MessageService,
        private shareService: DataSharingService,
        private router: Router
    ) {}

    ngOnInit() {
        this.cursoStudent = this.shareService.getCurrentCursoEstudent();
        this.studentService
            .getGrades(this.cursoStudent)
            .then((data) => (this.products = data));

        this.cols = [
            { field: 'product', header: 'Product' },
            { field: 'price', header: 'Price' },
            { field: 'category', header: 'Category' },
            { field: 'rating', header: 'Reviews' },
            { field: 'inventoryStatus', header: 'Status' },
        ];
    }

    editProduct(product: Product) {
        this.product = { ...product };
        this.productDialog = true;
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;
        if (this.product.id) {
            // @ts-ignore
            this.studentService.setGrades(this.product).then(data=> {
                this.studentService
                .getGrades(this.cursoStudent)
                .then((data) => (this.products = data));
            })
            this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'Product Updated',
                life: 3000,
            });
        }
        this.productDialog = false;
        this.product = {};
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal(
            (event.target as HTMLInputElement).value,
            'contains'
        );
    }
}
