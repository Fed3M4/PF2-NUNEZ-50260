import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AlumnosComponent } from "./pages/alumnos/alumnos.component";
import { NosotrosComponent } from "./pages/nosotros/nosotros.component";
import { ProfesoresComponent } from "./pages/profesores/profesores.component";
import { CursosComponent } from "./pages/cursos/cursos.component";
import { LoginComponent } from "../auth/login/login.component";
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {path: '', component: HomeComponent},
            {path: 'home', component: HomeComponent},
            {path: 'alumnos',
            loadChildren: () => import('./pages/alumnos/alumnos.module').then((m)=> m.AlumnosModule)},
            {path: 'nosotros', component: NosotrosComponent},
            {path: 'profesores', component: ProfesoresComponent},
            {path: 'cursos',
            loadChildren: () => import('./pages/cursos/cursos.module').then((m)=> m.CursosModule)},
            {path: 'login', component: LoginComponent},
            {path: 'logout', redirectTo: 'dashboard/login', pathMatch: 'full'},
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule {}