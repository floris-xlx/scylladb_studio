'use client'

import React, {useState} from 'react';
import { Element } from 'react-scroll';

const ContactForm = () => {

    const ContactUrl = 'https://discord.com/api/webhooks/1191436308090998804/M75cGe3liVc3y6zupzvUjb-7AXtfJUbIpFzxfqsjgg46nw5JY2YpkcFNhhArLPEqBlQy'
    const [success, setSuccess] = useState(false);

    const SendDiscordMessageRequest = async (event) => {
        event.preventDefault();
        const response = await fetch(ContactUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: 'New message from contact form: \n\n' + 'Name: ' + document.getElementById('name').value + '\nEmail: ' + document.getElementById('email').value + '\nMessage: ' + document.getElementById('message').value + '\n\n'
            })
        });
        setSuccess(true);
        return response.json();

    }

    return (
        <Element name="contact">

        <section>
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-300 ">Neem contact op</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-400  sm:text-xl">Nog vragen? Stuur ons gerust een bericht en we komen zo spoeding mogelijk op u terug.</p>
      <form action="#" className="space-y-8">
          <div>
              <input
              type="name"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Naam"
              requiblue></input>
          </div>
          <div>

              <input
              type="email"
              id="email"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Email"
              requiblue></input>
          </div>
          <div className="sm:col-span-2">

              <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Bericht"></textarea>
          </div>

          {success && <p className="text-md text-gray-400 text-center">We hebben uw verzoek ontvangen!, We zullen zo spoedig mogelijk op u terug komen.</p>}

          <button className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
          onClick={(event) => SendDiscordMessageRequest(event)}>
          Versturen
          <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>

      </form>
  </div>
</section>
</Element>

        );
    }

export default ContactForm;