import React, { useState } from "react";
import { ChatIcon } from "@heroicons/react/solid";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = { name, email, message };
    const encodedData = encode({ "form-name": "test", ...formData });

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodedData,
    })
      .then(() => {
        setSuccessMessage("Information sent");
        setTimeout(() => {
          setSuccessMessage("");
          setName("");
          setEmail("");
          setMessage("");
        }, 4000);

        // Send confirmation email to the user
        const userTemplate = `
          <p>Dear ${name},</p>
          <p>Thank you for contacting G Professional Tree Service. We have received your information and will be in touch shortly.</p>
          <p>Best regards,</p>
          <p>G Professional Tree Service Team</p>
        `;

        // Replace with your backend server endpoint for sending confirmation emails
        fetch("http://localhost:3001/send-confirmation-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ to: email, subject: "Thank you for contacting us", html: userTemplate }),
        })
          .then((response) => console.log("Confirmation email sent:", response))
          .catch((error) => console.error("Confirmation email error:", error));
      })
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex justify-center sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3226.1261445622995!2d-86.55824302352563!3d36.041627172473255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864134d30f7f8e5%3A0x21b83c25c33ace9!2sG%20Professional%20Tree%20Service!5e0!3m2!1ses-419!2sus!4v1688363024155!5m2!1ses-419!2sus"
          />
          <div
            id="info"
            className="bg-gray-900 md:relative md:flex md:flex-wrap py-6 rounded md:shadow-md md:w-full md:order-last"
          >
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                945 Lavergne Lane, <br />
                La Vergne, TN 37086
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                href="mailto:gprofessionaltreeservice77@gmail.com"
                className="text-blue-500 hover:text-blue-700"
              >
                gprofessionaltreeservice77@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <a
                href="tel:+16158945554"
                className="leading-relaxed text-blue-500 hover:text-blue-700"
              >
                (615) 894-5554
              </a>
            </div>
          </div>
        </div>
        <form
          netlify
          name="test"
          onSubmit={handleSubmit}
          className="flex justify-center flex-col border rounded-lg shadow p-4"
        >
          <div className="text-center mb-4">
            <ChatIcon className="inline-block w-12 mb-4 text-gray-800"/>
          </div>        
          <h2 className="text-black sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Us
          </h2>
          <p className="leading-relaxed mb-4 text-black">
            Contact us and receive a free and fast estimate!
          </p>
          
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-black">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-black">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-gray-800 hover:bg-gradient-to-r border-0 py-2 px-6 rounded text-lg"
          >
            Submit
          </button>
          <div className="mt-2 text-black text-center">
            Or you can send me an email at:
            <a
              href="mailto:gprofessionaltreeservice77@gmail.com"
              className="underline underline-offset-4 decoration-transparent hover:decoration-2 hover:decoration-sky-200"
            >
              gprofessionaltreeservice77@gmail.com
            </a>
          </div>
        </form>

        {successMessage && (
          <div className="fixed bottom-4 left-4 bg-green-500 text-white p-2 rounded">
            {successMessage}
          </div>
        )}
      </div>
    </section>
  );
}
