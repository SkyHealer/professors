import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-openings',
  templateUrl: './openings.component.html',
  styleUrls: ['./openings.component.scss']
})
export class OpeningsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  itemResearch = [
    {
      date: 'Wed, 10 Jun 2020 15:22 PM',
      text:'Our research lies at the intersection of circuit design, machine learning, and neuroscience, and our mission is to develop new diagnostic and therapeutic devices for medication-resistant neurological disorders including epilepsy, alzheimer’s, ...',

    },
    {
      date: 'Wed, 10 Jun 2020 15:22 PM',
      text:'Our research lies at the intersection of circuit design, machine learning, and neuroscience, and our mission is to develop new diagnostic and therapeutic devices for medication-resistant neurological disorders including epilepsy, alzheimer’s, ...',

    },
    {
      date: 'Wed, 10 Jun 2020 15:22 PM',
      text:'Our research lies at the intersection of circuit design, machine learning, and neuroscience, and our mission is to develop new diagnostic and therapeutic devices for medication-resistant neurological disorders including epilepsy, alzheimer’s, ...',

    }
  ]

}
