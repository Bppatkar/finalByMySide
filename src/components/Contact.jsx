import { useForm, ValidationError } from "@formspree/react";

const LatestDate = new Date();
const latestYear = LatestDate.getFullYear();

const Contact = () => {
  const [state, handleSubmit] = useForm("xzbnkyej");

  if (state.succeeded) {
    // console.log("Success state reached");
    return window.alert("Your Message was successfully");
  }

  return (
    <div id="contact" className="css-yr4hpo snipcss-2Zj5a">
      <div className="css-0">
        <h2 className="chakra-heading css-1w7sue5">
          Take A
          <span id="style-WOtQZ" className="style-WOtQZ">
            {" "}
            Coffee{" "}
          </span>
          And
          <span id="style-KUWKO" className="style-KUWKO">
            {" "}
            Chat{" "}
          </span>
          With Me
        </h2>
        <div className="css-hl10xa">
          <div data-aos="zoom-in" className="css-hx6e8g aos-init aos-animate">
            <img
              src="https://mohit-portfolio.vercel.app/assets/contact.f495edec.svg"
              className="chakra-image css-0"
            />
          </div>
          <div data-aos="zoom-in" className="css-s5yswh aos-init aos-animate">
            <div className="css-y8fzrk">
              <div className="css-w6jo0t">
                <a
                  className="chakra-button css-1bfmx35"
                  href="https://www.linkedin.com/in/bhanu-pratap-patkar/"
                  target="_blank"
                >
                  <span className="chakra-button__icon css-1wh2kri">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      aria-hidden="true"
                      focusable="false"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                    </svg>
                  </span>
                  LinkedIn
                </a>
                <a
                  className="chakra-button css-1xykt4f"
                  href="https://github.com/Bppatkar/"
                  target="_blank"
                >
                  <span className="chakra-button__icon css-1wh2kri">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 496 512"
                      aria-hidden="true"
                      focusable="false"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </span>
                  GitHub
                </a>
                <a
                  className="chakra-button css-1nc8fry"
                  href="mailto:bhanupratappatkar777@gmail.com"
                  target="_blank"
                >
                  <span className="chakra-button__icon css-1wh2kri">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      focusable="false"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </span>
                  Gmail
                </a>
              </div>
              <p>Fill This Form to Send a mail for me</p>
              <form
                method="POST"
                action="https://formspree.io/f/xzbnkyej"
                onSubmit={handleSubmit}
              >
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  className="chakra-input css-chjdux"
                />{" "}
                <ValidationError
                  prefix="name"
                  field="name"
                  errors={state.errors}
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="chakra-input css-chjdux"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="Number"
                  className="chakra-input css-chjdux"
                />
                <ValidationError
                  prefix="mobile"
                  field="mobile"
                  errors={state.errors}
                />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  data-gramm="false"
                  data-gramm_editor="false"
                  data-enable-grammarly="false"
                  className="chakra-textarea css-119f3le"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="chakra-button css-2fbnkm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <p className="chakra-text css-18f3of0">
        Designed and build by Bhanu Pratap, {latestYear} All rights reserved
        &#169;.
      </p>
    </div>
  );
};

export default Contact;
