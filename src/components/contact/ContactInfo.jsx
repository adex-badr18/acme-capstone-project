import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ContactInfo = () => {
  return (
    <div className="w-full lg:w-1/2 p-6 " >
      <h2 className="text-2xl font-bold mb-4">CONTACTS</h2>
      <p className="p-4 text-xl">Ita Osun Junction 36, Ilode Street, Ile-Ife, Osun State, Nigeria.</p>
      <p className="p-4 text-xl">+2348160469636</p>
      <p className="p-4 text-xl">officialacmesoftwarelab@gmail.com</p>
      <div className="flex space-x-4 mt-4">
        <a href="https://www.linkedin.com/company/acme-software-lab/" className=" text-xl p-2 text-blue-600 hover:scale-110 transition">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.facebook.com/acmesoftwarelaboratory" className="p-2 text-xl text-blue-600 hover:scale-110 transition">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.instagram.com/acmesoftwarelab/" className="text-purple-600 p-2 text-xl hover:scale-110 transition">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://x.com/acmesoftwarelab" className="text-blue-400 text-xl p-2 hover:scale-110 transition">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
      <div className="mt-4">
        <img
          src="path-to-map-image"
          alt="map"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default ContactInfo;
