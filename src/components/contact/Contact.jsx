import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section className=" flex flex-col items-center  min-h-[80vh] border-gray-50  border shadow-2xl p-2 w-4/5 mx-52 my-16 ">
      <h1 className="text-center font-extrabold pt-12 text-blue-900 text-7xl underline">Contact us</h1>
      <div className="flex w-4/5 p-12">
      <ContactForm />
      <ContactInfo />
      </div>
    </section>
  );
};

export default Contact;