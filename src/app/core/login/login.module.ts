import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
// import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        LoginComponent,
        ChangePasswordComponent,
        ForgotPasswordComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        LoginRoutingModule,
        NgProgressHttpModule,
        NgProgressModule.withConfig({
            color: '#292462',
            spinner: false,
            thick: true,
        }),
        // FlexLayoutModule

    ]
})
export class LoginModule { }
