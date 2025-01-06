import EclipseLeft from "../../../public/svgs/ellipse-left.svg";
import EclipseRight from "../../../public/svgs/ellipse-right.svg";
import { Envelope, LinkedinLogo, WhatsappLogo } from "phosphor-react";
const Contact = () => {
  return (
    <>
      <div className="bg-shade-4 font-althetics flex items-center justify-center">
        <div className="bg-[#121212] rounded-15 relative flex items-center justify-center px-25 w-600 h-350 border-0.5 border-[#B3B3B3]">
          <img className="absolute top-0 left-0" src={EclipseLeft} alt="" />
          <div>
            <h1 className="text-35 text-center mb-18 text-shade-2">
              Let's Talk
            </h1>
            <p className="text-18 text-shade-2">
              Interested in working together or have a question? Feel free to
              reach out. I'm here to help you turn your ideas into amazing
              digital realities. Looking forward to hearing from you soon!
            </p>
            <div className="mt-18 flex items-center justify-center gap-5">
              <p className="text-shade-2 py-0.5 px-10 rounded-6 border-0.5 border-shade-2 inline-block">
                <Envelope className="inline-block mr-8" size={30} />
                orebayopelumi@gmail.com
              </p>
              <p>
                <LinkedinLogo className="text-shade-2" size={30} />
              </p>
              <p>
                <WhatsappLogo className="text-shade-2" size={30} />
              </p>
            </div>
          </div>
          <img
            src={EclipseRight}
            className="absolute right-0 bottom-0"
            alt=""
          />
        </div>
      </div>
      <span className="text-shade-2 font-althetics py-25 bg-shade-4 text-center block">
        &copy;{new Date().getFullYear()} peecodes
      </span>
    </>
  );
};

export default Contact;
