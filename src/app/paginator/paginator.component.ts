import { Component, OnInit } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginationService } from '../SERVICIOS/pagination.service';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent implements OnInit {

  public pageSize: number;
  public pageIndex: number;
  constructor(
    private _paginationService: PaginationService,
  ) {
    this.pageSize = 10;
    this.pageIndex = 0;
  }
  change($e: any) {
    let page = {
      'size': $e.pageSize,
      'index': $e.pageIndex
    }
    this._paginationService.updatePages(page);
  }
  ngOnInit(): void {
    let page = {
      'size': this.pageSize,
      'index': this.pageIndex
    }

    this._paginationService.updatePages(page);
  }
}
