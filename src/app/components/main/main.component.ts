import { Component } from '@angular/core';
import {DialogComponent} from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { IProduct } from '../../../core/product';
import { arrfifthBlockProducts, arrOneSecondBlockProducts, arrTwoSecondBlockProducts } from '../../../core/constants';

@Component({
  selector: 'main-comp',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  isProductBlockVisible: boolean = false;
  arrfifthBlockProducts = arrfifthBlockProducts;
  arrOneSecondBlockProducts = arrOneSecondBlockProducts;
  arrTwoSecondBlockProducts = arrTwoSecondBlockProducts;
  
  constructor(public dialog: MatDialog) {}

  openDialog(product: IProduct){
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        product
      }
    });
  }
  openDialogForm() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        isVisibleForm: true
      }
    });
  }
  changeVisible() {
    this.isProductBlockVisible = !this.isProductBlockVisible;
  }
}
