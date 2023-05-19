import React from "react";

function Contact() {
  return (
    <div className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 text-gray-300" name="contact">
      <form className="flex flex-col max-w-[600px] w-full" action="">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-sky-600">Contact</p>
          <p className="py-4">Submit the form below or shoot me an email.</p>
        </div>
        <input className="bg-[#ccd6fd] p-2" type="text" placeholder="Name" name="name" />
        <input className="my-4 p-2 bg-[#ccd6f6]" type="text" placeholder="Email" name="email" />
        <textarea className="bg-[#ccd6fd] p-2" name="message" rows="10" placeholder="Message"></textarea>
        <button className="text-white border-2 hover:bg-sky-600 hover:border-sky-600 py-3 my-8 mx-auto flex items-center px-4">Let's Collaborate</button>
      </form>
    </div>
  );
}

export default Contact;
