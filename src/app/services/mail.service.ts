import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';


const templateParams = {
  from_name: 'Ruchir',
  to_name: 'Enquiry team',
  message: 'Check this out!',
  reply_to: 'ruchirsachdeva@yahoo.com'
};


@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor() {
    emailjs.init('user_j1poPFQiQL7NeK76EVAuH');
  }

  send(templateParams) {
    emailjs.send('ruchir-gmail', 'template_y5dkc0b', templateParams)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
  }
}
