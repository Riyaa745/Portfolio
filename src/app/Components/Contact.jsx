import React from 'react';

export default function Contact() {
    return (
        <div id="contact" className="flex items-center py-6 ssm:py-10 justify-center">
            <div className="max-w-3xl text-center ">
                <div>
                    <h2 className="text-4xl font-bold text-white mb-2">Get In Touch</h2>
                </div>
                <p className="text-gray-300 my-4">
                    Interested in hiring me for your project or just want to say hi? You
                    can send me an email to{" "}
                    <a href="mailto:riyasainwal123@gmail.com" className="text-blue-500 hover:underline">
                        riyasainwal123@gmail.com
                    </a>
                </p>

                <p className="text-gray-300 mb-6 text-center">
                    Want to get connected? Follow me on the social channels below.
                </p>

            </div>
        </div >
    );
}
