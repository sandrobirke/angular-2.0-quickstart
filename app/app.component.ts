import { Component } from '@angular/core';

export class Dokument {
  id: number;
  aktenzeichen: string;
  name: string;
  files: any;
}

const DOKUMENTE: Dokument[] = [
  { id: 1, aktenzeichen: '99-2', name: 'Stadtratssitzung von 19.01.2016', files: ['Sizungsvorlage.docx', 'Antrag.pdf']},
  { id: 2, aktenzeichen: '24-8', name: 'Bauantrag Grubenstraße 12', files: ['Bauantrag.docx', 'Flurstück.pdf']},
  { id: 3, aktenzeichen: '88-0', name: 'Gemeinderatsbeschluss Nr 94-112', files: ['Beschlussvorlage.docx']},
  { id: 4, aktenzeichen: '12-0', name: 'Gemeinderatsbeschluss Nr 87-010', files: ['Beschlussvorlage.docx', 'Flyer.pdf']},
  { id: 5, aktenzeichen: '73-0', name: 'Vorlage Gemeinderatssizung vom 20.12.2014', files: ['Sizungsvorlage.docx']},
  { id: 6, aktenzeichen: '0-33', name: 'Mitgliederliste Gemeinderat Torgau', files: ['Sizungsvorlage.docx', 'Antrag.pdf']},
  { id: 7, aktenzeichen: '94-1', name: 'Stadtratssitzung von 11.03.2014', files: ['Sizungsvorlage.docx']},
  { id: 8, aktenzeichen: '46-33', name: 'Bauantrag Wiesenäcker 124a', files: ['Bauantrag.docx', 'Flurstück.pdf', 'Lage_001.jpg']},
  { id: 9, aktenzeichen: '12-0', name: 'Gemeinderatsbeschluss Nr 124-31', files: ['Sizungsvorlage.docx', 'Antrag.pdf']},
  { id: 10, aktenzeichen: '10-01', name: 'Gemeinderatsbeschluss Nr 26-09', files: ['Sizungsvorlage.docx', 'Antrag-123.pdf']},
  { id: 11, aktenzeichen: '19-24', name: 'Vorlage Gemeinderatssizung vom 01.03.1999', files: ['Sizungsvorlage.docx']},
  { id: 12, aktenzeichen: '99-0', name: 'Mitgliederliste Gemeinderat Stuttgart', files: ['Mitgliederliste.xls']}
]

@Component({
  selector: 'my-app',
  styleUrls: ['./app/app.component.css'],
  templateUrl: './app/app.component.html'
})
export class AppComponent  {

  title = 'Aktentasche';
  dokumente = DOKUMENTE;

  selectedDoc: Dokument;
  onSelect(dokument: Dokument): void{
    this.selectedDoc = dokument;
  }


}
