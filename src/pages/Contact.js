import React, { useState } from "react";
import { useForm } from "react-hook-form"; // Form library to manage form state
import { FaPhoneAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa"; // For icons

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formStatus, setFormStatus] = useState(null);

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      // Simulate form submission (e.g., sending data to backend or API)
      console.log(data);
      setFormStatus("Success! We'll get back to you soon.");
    } catch (error) {
      setFormStatus("Oops! Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen pt-16 p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-xl backdrop-blur-md">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Contact Us
        </h1>

        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Please enter a valid email address"
                },
              })}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-2">Your Message</label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows="4"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>

          <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition duration-300">
            Send Message
          </button>
        </form>

        {formStatus && <p className="mt-6 text-center text-xl text-gray-700">{formStatus}</p>}
      </div>

      {/* Contact Information */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Information</h2>
        
        <div className="flex justify-center gap-8">
          <div className="flex flex-col items-center">
            <FaPhoneAlt className="text-4xl text-blue-600 mb-3" />
            <p className="text-lg text-gray-700">9664650659</p>
          </div>

          <div className="flex flex-col items-center">
            <FaEnvelope className="text-4xl text-blue-600 mb-3" />
            <p className="text-lg text-gray-700">wheretonext@gmail.com</p>
          </div>

          <div className="flex flex-col items-center">
            <FaLocationArrow className="text-4xl text-blue-600 mb-3" />
            <p className="text-lg text-gray-700">Gandhinagar, Gujarat</p>
          </div>
        </div>
      </div>

      {/* Embedded Google Map for Gandhinagar */}
      <div className="mt-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116594.68227286869!2d72.54760636534307!3d23.022505292179004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395d4ca83b3b18bf%3A0x79b8f3b799ca7a9!2sGandhinagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1609462028192!5m2!1sen!2sin"
          title="Gandhinagar Location"
          width="100%"
          height="400"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
