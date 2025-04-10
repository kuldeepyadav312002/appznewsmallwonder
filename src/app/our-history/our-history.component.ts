import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-our-history',
  templateUrl: './our-history.component.html',
  styleUrls: ['./our-history.component.scss']
})
export class OurHistoryComponent implements OnInit {

  constructor() { }
  heading: string = "Our History";
  @Input() ourHistory = [
    {
      date: '08 Sep, 2002',
      description: 'Inception of Small Wonders Kindergarten at Model Town Panipat.The first pre-school of its kind, a thought leader and a pioneer in the space.'
    },
    {
      date: '12 Feb, 2005',
      description: 'Establishment of Small Wonders Educational and Welfare Society to oversee the school and ensure the vision of our directors comes to fruition'
    },
    {
      date: '04 May, 2008',
      title: 'Authorization by the State of Haryana',
      description: 'Small Wonders Kindergarten becomes the first kindergarten authorised by the state of Haryana.'
    },
    {
      date: '2009-14',
      title: 'Best Pre-school of the Year',
      description: 'Small Wonders Kindergarten is awarded the best pre-school of the year 2009, 2011, 2013 and 2014 by various distinguished and accredited bodies.'
    },
    {
      date: '08 Sep, 2016',
      title: 'Commencement of Small Wonders World School',
      description: 'Commencement of Small Wonders World School, TDI City and provision of classes till Grade VIII.Small Wonders World school is subsequently awarded recognition from the British Council and CBSE.'
    },
    {
      date: '25 Aug, 2018',
      title: 'High School Recognition',
      description: 'Recognition for offering high school classes till Grade X Small Wonders World School is awarded best all round school of the year at National School Awards New Delhi.'
    },
    {
      date: '13 March, 2022',
      title: 'Commencement of Small Wonders World School',
      description: 'Commencement of Small Wonders Ikigai a school built on the Japanese concept of Ikigai with the ethos of purpose inspired learning Awarded best school chain of the year at International School Awards Mumbai.'
    },
    {
      date: '01 July, 2023',
      title: 'High School Recognition',
      description: 'Launch of Small Wonders Kaizen Small Wonders World School is awarded outstanding school with holistic education at Global Education Awards.'
    }
  ]


  ngOnInit(): void {
  }

}
