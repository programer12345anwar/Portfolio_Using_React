const Contact = () => {
  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-20 ">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-purple-500 dark:text-white">
          Contact
        </h2>
        <form className="max-w-xl mx-auto space-y-6 ">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600 rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600 rounded-lg"
          />
          <textarea
            placeholder="Write Message Here..."
            className="w-full p-4 border outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600 rounded-lg"
          />
          <button className="w-full px-6 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded hover:bg-purple-700 dark:hover:bg-purple-600">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
