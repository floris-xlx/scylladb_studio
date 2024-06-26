'use client'

import React from 'react';
import { Element } from 'react-scroll';

const PricingCards = () => {

    return (

      <Element name="pricing">
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

  <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-300">Pakketten</h2>
    <p className="mt-1 text-gray-400">Pakketten die zijn afgestemd op iedereen.</p>
  </div>



  <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center ">

    <div className="flex flex-col border border-gray-200 text-center rounded-xl p-14  bg-white">
      <h4 className="font-medium text-lg text-gray-800 ">Bootcamp 3 maanden</h4>
      <span className="mt-5 font-bold text-5xl text-gray-800 ">
        <span className="font-bold text-2xl -mr-2 pr-3">€</span>
        45<span className="text-sm text-gray-500">/eenmalig</span>
      </span>
      <p className="mt-2 text-sm text-gray-500">Bootcamps</p>
      <ul className="mt-7 space-y-2.5 text-sm">
        <li className="flex space-x-2">
          <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span className="text-gray-800 ">
          3 Maanden bootcamp
          </span>
        </li>

        <li className="flex space-x-2">
          <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span className="text-gray-800 ">
          Voedingbegeleiding
          </span>
        </li>

        <li className="flex space-x-2">
          <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span className="text-gray-800 ">
          Trainingsschema
          </span>
        </li>
      </ul>

      <a className="mt-5 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 " href="https://buy.stripe.com/14k5msc400Rv7baaEP" target="_blank">
        Bestel nu
      </a>
    </div>


    <div className="flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-14  bg-white">
      <p className="mb-3"><span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs uppercase font-semibold bg-blue-100 text-blue-800 ">Meest gekozen</span></p>
      <h4 className="font-medium text-lg text-gray-800 ">Bootcamp 6 maanden </h4>
      <span className="mt-5 font-bold text-5xl text-gray-800 ">
        <span className="font-bold text-2xl -mr-2 pr-3">€</span>
        90<span className="text-sm text-gray-500">/eenmalig</span>
      </span>
      <p className="mt-2 text-sm text-gray-500">Bootcamps</p>

      <ul className="mt-7 space-y-2.5 text-sm">
        <li className="flex space-x-2">
          <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span className="text-gray-800 ">
            6 Maanden bootcamp
          </span>
        </li>

        <li className="flex space-x-2">
          <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span className="text-gray-800 ">
          Trainingsbegeleiding
          </span>
        </li>

        <li className="flex space-x-2">
          <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span className="text-gray-800 ">
            Inclusief intake
          </span>
        </li>

      </ul>

      <a className="mt-5 inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" href="https://buy.stripe.com/eVa7uA6JGeIlfHG001" target="_blank">
        Bestel nu
      </a>
    </div>


    <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700 bg-white">
      <h4 className="font-medium text-lg text-gray-800 ">Eagle pakket</h4>
      <span className="mt-5 font-bold text-5xl text-gray-800 ">
        <span className="font-bold text-2xl -mr-2 pr-3">€</span>
        110<span className="text-sm text-gray-500">/maand</span>
      </span>
      <p className="mt-2 text-sm text-gray-500">Online Coaching</p>

      <ul className="mt-7 space-y-2.5 text-sm">
      <li className="flex space-x-2">
          <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span className="text-gray-800 ">
          6 maanden online coaching
          </span>
        </li>

        <li className="flex space-x-2">
          <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span className="text-gray-800 ">
           Voedingbegeleiding
          </span>
        </li>

        <li className="flex space-x-2">
          <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span className="text-gray-800 ">
          Trainingsschema
          </span>
        </li>

        <li className="flex space-x-2">
          <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span className="text-gray-800 ">
          Wekelijke check-ups
          </span>
        </li>

        <li className="flex space-x-2">
          <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span className="text-gray-800 ">
            24/7 contact
          </span>
        </li>
      </ul>

      <a className="mt-5 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 " href="https://buy.stripe.com/9AQ9CI7NK6bP8fe5kr" target="_blank">
        Bestel nu
      </a>
    </div>


    <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700 bg-white">
      <h4 className="font-medium text-lg text-gray-800 ">Premium pakket</h4>
      <span className="mt-5 font-bold text-5xl text-gray-800 ">
        <span className="font-bold text-2xl -mr-2 pr-3">€</span>
        120<span className="text-sm text-gray-500">/maand</span>
      </span>
      <p className="mt-2 text-sm text-gray-500">Online Coaching</p>

      <ul className="mt-7 space-y-2.5 text-sm">
      <li className="flex space-x-2">
          <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span className="text-gray-800 ">
          3 maanden online coaching
          </span>
        </li>

        <li className="flex space-x-2">
          <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span className="text-gray-800 ">
          Voedingbegeleiding
          </span>
        </li>

        <li className="flex space-x-2">
          <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span className="text-gray-800 ">
          Trainingsschema
          </span>
        </li>

        <li className="flex space-x-2">
          <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span className="text-gray-800 ">
          Wekelijke check-ups
          </span>
        </li>

        <li className="flex space-x-2">
          <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span className="text-gray-800 ">
            24/7 contact
          </span>
        </li>
      </ul>

      <a className="mt-5 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 " href="https://buy.stripe.com/aEUeX27NKeIldzybIO">
        Bestel nu
      </a>
    </div>
      </div>






</div>

</Element>
    )

}

export default PricingCards;