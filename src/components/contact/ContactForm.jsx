
const ContactForm = () => {
  return (
    <div className="w-full lg:w-1/2 p-6">
      <h2 className="text-2xl font-bold mb-4">Leave us a message</h2>
      <form className="space-y-4 ">
        <input
          type="text"
          placeholder="Full names"
          className="w-4/5 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-4/5 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <textarea
          placeholder="Your Message"
          className="w-4/5 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="w-4/5 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:shadow-lg transition duration-150"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
