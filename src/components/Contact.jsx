import emailjs from "@emailjs/browser";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message");
        }
      );
  };

  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-purple-500 dark:text-white">
          Contact
        </h2>

        <form onSubmit={sendEmail} className="max-w-xl mx-auto space-y-6">
                <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-4 border rounded-lg
            font-normal font-sans text-[15px] leading-normal
            placeholder-gray-400
            dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-4 border rounded-lg
            font-normal font-sans text-[15px] leading-normal
            placeholder-gray-400
            dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />

<textarea
  name="message"
  placeholder="Write Message Here..."
  rows="5"
  required
  className="w-full p-4 border rounded-lg
    font-normal font-sans text-[15px] leading-normal
    placeholder-gray-400
    dark:bg-gray-800 dark:text-white dark:border-gray-600"
/>



          <button
            type="submit"
            className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
