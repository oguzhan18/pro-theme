import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-our-stores',
  templateUrl: './our-stores.component.html',
  styleUrls: ['./our-stores.component.scss']
})
export class OurStoresComponent implements OnInit {

  isDarkMode: boolean | any;
  showFiller = false;

  constructor(
    private dialog: MatDialog
  ){
    // this.themeService.initTheme();
    // this.isDarkMode = this.themeService.isDarkMode();
  }
  ngOnInit() {
  }
  @ViewChild('secondDialog', { static: true }) secondDialog: TemplateRef<any> | any;
  openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  openDialogWithoutRef() {
    this.dialog.open(this.secondDialog);
  }


}
