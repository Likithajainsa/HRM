import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { JoiningformComponent } from './joiningform/joiningform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule, MatSidenavModule, MatCardModule, MatProgressSpinnerModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { MatDialogModule, MatInputModule, MatPaginatorModule, MatSortModule,
  MatTableModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { MatIconModule,MatButtonModule } from '@angular/material';
import { MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewsideComponent } from './newside/newside.component';
import { TableComponent } from './table/table.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { UserComponent } from './admin/pages/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JoiningformComponent,
    NewsideComponent,
   TableComponent,
   ChartsComponent,
   UserComponent
  ],
  imports: [
    BrowserModule,Ng2SmartTableModule,
    AppRoutingModule,ChartsModule,
    ReactiveFormsModule,HttpClientModule,
    FormsModule,MatCardModule,MatProgressSpinnerModule,MatFormFieldModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,MatInputModule,MatSelectModule,
    MatSidenavModule,FormsModule, ReactiveFormsModule,
    MatListModule,MatCheckboxModule,
   NgbModule,MatTabsModule,MatButtonModule,MatDialogModule, MatInputModule, MatPaginatorModule, MatSortModule,
   MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
  exports:[
    MatSidenavModule,MatTabsModule,MatToolbarModule,MatIconModule,MatButtonModule,
    MatListModule,MatMenuModule,MatDialogModule
  ]
})
export class AppModule { }
