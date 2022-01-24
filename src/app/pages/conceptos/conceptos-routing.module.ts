import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateConceptosComponent } from './components/create-conceptos/create-conceptos.component';
import { TableConceptosComponent } from './components/table-conceptos/table-conceptos.component';

const routes: Routes = [  {
  path: 'lista',
  component: TableConceptosComponent,
},
{
  path: 'crear/:padre',
  component: CreateConceptosComponent,
},
{
  path: 'crear/:hijo/:padreId',
  component: CreateConceptosComponent,
},
{
  path: 'editar/:id',
  component: CreateConceptosComponent,
},
{
  path: 'ver/:id',
  component: CreateConceptosComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConceptosRoutingModule { }
