import React from 'react';

const Footer = () => {
    return (
        <div className="border border-top border-top-gray-300">
            <footer className="bg-gray-50">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="flex justify-center text-teal-600 sm:justify-start">
                            <img src="https://cdn.discordapp.com/attachments/1147006753968496771/1169664584546783332/sdfsdfsdf.png?ex=65563a08&is=6543c508&hm=ffb64dc4e31e9e209a5f8b7aceda6c23ec4d2031fd62a0d437fc37a04f39ffbd&" className="h-28 w-auto" alt="Workflow"></img>
                        </div>

                        <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                            Copyright &copy; {new Date().getFullYear()}, Froste Kicks All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;