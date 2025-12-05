import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // 'success', 'error', or ''
  const formRef = useRef();

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Replace these with your EmailJS service details
      await emailjs.sendForm(
        'your_service_id',
        'your_template_id', 
        formRef.current,
        'your_public_key'
      );
      setSubmitStatus('success');
      setFormData({ name: '', contactNumber: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  return (
    <section id="contact">
      <style jsx>{`
        .arch_contact_us_duplicate * {
          font-family: Nunito, sans-serif;
        }

        .arch_contact_us_duplicate .icon-block svg {
          width: 100%;
          height: 100%;
        }

        .arch_contact_us_duplicate .icon-block {
          width: 30px;
          height: 30px;
        }

        .arch_contact_us_duplicate .text-blk {
          margin-top: 0px;
          margin-right: 0px;
          margin-bottom: 0px;
          margin-left: 0px;
          padding-top: 0px;
          padding-right: 0px;
          padding-bottom: 0px;
          padding-left: 0px;
          line-height: 25px;
        }

        .arch_contact_us_duplicate .responsive-container-block {
          min-height: 75px;
          height: fit-content;
          width: 100%;
          padding-top: 0px;
          padding-right: 0px;
          padding-bottom: 0px;
          padding-left: 0px;
          display: flex;
          flex-wrap: wrap;
          margin-top: 0px;
          margin-right: auto;
          margin-bottom: 0px;
          margin-left: auto;
          justify-content: flex-start;
        }

        .arch_contact_us_duplicate .responsive-cell-block {
          min-height: 75px;
        }

        .arch_contact_us_duplicate .responsive-container-block.big-container {
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding-top: 0px;
          padding-right: 50px;
          padding-bottom: 0px;
          padding-left: 50px;
          background-color: #000000;
        }

        .arch_contact_us_duplicate .responsive-container-block.container {
          max-width: 1100px;
          justify-content: space-evenly;
        }

        .arch_contact_us_duplicate .text-blk.section-head {
          font-size: clamp(3rem, 8vw, 6rem);
          line-height: 1.1;
          margin-top: 0px;
          margin-right: 0px;
          margin-bottom: 24px;
          margin-left: 0px;
          font-weight: 700;
          background: linear-gradient(to right, #00bf8f, #1cd8d2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-align: left;
        }

        .arch_contact_us_duplicate .text-blk.section-subhead {
          font-size: 18px;
          line-height: 1.6;
          color: #e5e5e5;
          font-weight: 400;
          max-width: 90%;
        }

        .arch_contact_us_duplicate .input {
          width: 100%;
          margin-top: 0px;
          margin-right: 0px;
          margin-bottom: 15px;
          margin-left: 0px;
          height: 54px;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          border-bottom-left-radius: 5px;
          border: 2px solid #333333;
          padding-top: 1px;
          padding-right: 16px;
          padding-bottom: 1px;
          padding-left: 16px;
          font-size: 16px;
          background-color: #1a1a1a;
          color: white;
        }

        .arch_contact_us_duplicate .input::placeholder {
          color: #888888;
        }

        .arch_contact_us_duplicate .textinput {
          width: 100%;
          height: 125px;
          margin-top: 0px;
          margin-right: 0px;
          margin-bottom: 27px;
          margin-left: 0px;
          border: 2px solid #333333;
          font-size: 16px;
          padding-top: 16px;
          padding-right: 16px;
          padding-bottom: 16px;
          padding-left: 16px;
          background-color: #1a1a1a;
          color: white;
          border-radius: 5px;
          resize: vertical;
        }

        .arch_contact_us_duplicate .textinput::placeholder {
          color: #888888;
        }

        .arch_contact_us_duplicate .button {
          height: 50px;
          min-width: 240px;
          font-size: 16px;
          color: white;
          border: none;
          margin-top: 0px;
          margin-right: 0px;
          margin-bottom: 60px;
          margin-left: 0px;
          background: #333333;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .arch_contact_us_duplicate .button:hover {
          transform: translateY(-2px);
          background: linear-gradient(to right, #00bf8f, #1cd8d2);
          box-shadow: 0 4px 15px rgba(0, 191, 143, 0.3);
        }

        .arch_contact_us_duplicate .form-wrapper {
          border-bottom-width: 4px;
          border-bottom-style: solid;
          border-bottom-color: #333333;
          margin-top: 0px;
          margin-right: 0px;
          margin-bottom: 60px;
          margin-left: 0px;
        }

        .arch_contact_us_duplicate .social-media-icon-container {
          display: flex;
          max-width: 400px;
          justify-content: space-evenly;
        }

        .arch_contact_us_duplicate .input-element {
          background-color: #1a1a1a;
        }

        .arch_contact_us_duplicate .icon-block.social-icon {
          fill: #cccccc;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .arch_contact_us_duplicate .icon-block.social-icon:hover {
          fill: #ffffff;
          transform: translateY(-2px);
        }

        .wk-desk-1 { width: 8.333333%; }
        .wk-desk-2 { width: 16.666667%; }
        .wk-desk-3 { width: 25%; }
        .wk-desk-4 { width: 33.333333%; }
        .wk-desk-5 { width: 41.666667%; }
        .wk-desk-6 { width: 50%; }
        .wk-desk-7 { width: 58.333333%; }
        .wk-desk-8 { width: 66.666667%; }
        .wk-desk-9 { width: 75%; }
        .wk-desk-10 { width: 83.333333%; }
        .wk-desk-11 { width: 91.666667%; }
        .wk-desk-12 { width: 100%; }

        @media (max-width: 1024px) {
          .arch_contact_us_duplicate .text-blk.section-head {
            font-size: 55px;
            line-height: 60px;
          }

          .arch_contact_us_duplicate .responsive-container-block.container {
            justify-content: space-between;
          }

          .wk-ipadp-1 { width: 8.333333%; }
          .wk-ipadp-2 { width: 16.666667%; }
          .wk-ipadp-3 { width: 25%; }
          .wk-ipadp-4 { width: 33.333333%; }
          .wk-ipadp-5 { width: 41.666667%; }
          .wk-ipadp-6 { width: 50%; }
          .wk-ipadp-7 { width: 58.333333%; }
          .wk-ipadp-8 { width: 66.666667%; }
          .wk-ipadp-9 { width: 75%; }
          .wk-ipadp-10 { width: 83.333333%; }
          .wk-ipadp-11 { width: 91.666667%; }
          .wk-ipadp-12 { width: 100%; }
        }

        @media (max-width: 768px) {
          .arch_contact_us_duplicate .responsive-cell-block.wk-tab-12.wk-mobile-12.wk-ipadp-6.wk-desk-5 {
            margin-top: 0px;
            margin-right: 0px;
            margin-bottom: 80px;
            margin-left: 0px;
          }

          .arch_contact_us_duplicate .responsive-cell-block.wk-mobile-12.wk-ipadp-6.wk-desk-5.wk-tab-10 {
            margin-top: 0px;
            margin-right: 0px;
            margin-bottom: 80px;
            margin-left: 0px;
            text-align: center;
          }

          .arch_contact_us_duplicate .input {
            height: 45px;
          }

          .arch_contact_us_duplicate .responsive-container-block.container {
            justify-content: space-evenly;
            margin-top: 80px;
            margin-right: 0px;
            margin-bottom: 80px;
            margin-left: 0px;
          }

          .arch_contact_us_duplicate .responsive-cell-block.wk-mobile-12.wk-desk-5.wk-tab-10.wk-ipadp-5 {
            margin-top: 0px;
            margin-right: 0px;
            margin-bottom: 80px;
            margin-left: 0px;
          }

          .wk-tab-1 { width: 8.333333%; }
          .wk-tab-2 { width: 16.666667%; }
          .wk-tab-3 { width: 25%; }
          .wk-tab-4 { width: 33.333333%; }
          .wk-tab-5 { width: 41.666667%; }
          .wk-tab-6 { width: 50%; }
          .wk-tab-7 { width: 58.333333%; }
          .wk-tab-8 { width: 66.666667%; }
          .wk-tab-9 { width: 75%; }
          .wk-tab-10 { width: 83.333333%; }
          .wk-tab-11 { width: 91.666667%; }
          .wk-tab-12 { width: 100%; }
        }

        @media (max-width: 500px) {
          .arch_contact_us_duplicate .text-blk.section-head {
            font-size: 40px;
            line-height: 45px;
          }

          .arch_contact_us_duplicate .responsive-container-block.big-container {
            padding-top: 0px;
            padding-right: 20px;
            padding-bottom: 0px;
            padding-left: 20px;
          }

          .arch_contact_us_duplicate .input {
            height: 40px;
          }

          .arch_contact_us_duplicate .responsive-cell-block.wk-tab-12.wk-mobile-12.wk-ipadp-6.wk-desk-5 {
            margin-top: 0px;
            margin-right: 0px;
            margin-bottom: 80px;
            margin-left: 0px;
          }

          .arch_contact_us_duplicate .responsive-cell-block.wk-mobile-12.wk-ipadp-6.wk-desk-5.wk-tab-10 {
            text-align: left;
            padding-top: 0px;
            padding-right: 20px;
            padding-bottom: 0px;
            padding-left: 20px;
          }

          .arch_contact_us_duplicate .responsive-container-block.big-container {
            padding-top: 0px;
            padding-right: 30px;
            padding-bottom: 0px;
            padding-left: 30px;
          }

          .arch_contact_us_duplicate .responsive-cell-block.wk-mobile-12.wk-desk-5.wk-tab-10.wk-ipadp-5 {
            padding-top: 0px;
            padding-right: 20px;
            padding-bottom: 0px;
            padding-left: 20px;
          }

          .arch_contact_us_duplicate .button {
            width: 100%;
          }

          .arch_contact_us_duplicate .button {
            margin-top: 0px;
            margin-right: 0px;
            margin-bottom: 40px;
            margin-left: 0px;
            height: 50px;
          }

          .arch_contact_us_duplicate .form-wrapper {
            margin-top: 0px;
            margin-right: 0px;
            margin-bottom: 40px;
            margin-left: 0px;
          }

          .arch_contact_us_duplicate .icon-block {
            width: 25px;
            height: 25px;
          }

          .wk-mobile-1 { width: 8.333333%; }
          .wk-mobile-2 { width: 16.666667%; }
          .wk-mobile-3 { width: 25%; }
          .wk-mobile-4 { width: 33.333333%; }
          .wk-mobile-5 { width: 41.666667%; }
          .wk-mobile-6 { width: 50%; }
          .wk-mobile-7 { width: 58.333333%; }
          .wk-mobile-8 { width: 66.666667%; }
          .wk-mobile-9 { width: 75%; }
          .wk-mobile-10 { width: 83.333333%; }
          .wk-mobile-11 { width: 91.666667%; }
          .wk-mobile-12 { width: 100%; }
        }
      `}</style>

      <div className="arch_contact_us_duplicate">
        <div className="responsive-container-block big-container">
          <div className="responsive-container-block container">
            <div className="responsive-cell-block wk-mobile-12 wk-desk-5 wk-tab-10 wk-ipadp-5" id="ih6s">
              <p className="text-blk section-head">
                Get in touch
              </p>
              <p className="text-blk section-subhead">
I enjoy building meaningful projects and working with people who share the same passion for technology. Have something in mind or want to connect? I’d love to hear from you.              </p>
            </div>
            <div className="responsive-cell-block wk-ipadp-6 wk-mobile-12 wk-desk-5 wk-tab-9" id="i6df">
              <form ref={formRef} onSubmit={handleSubmit} className="form-wrapper">
                <input 
                  className="input input-element" 
                  name="name" 
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input 
                  className="input input-element" 
                  name="contactNumber" 
                  placeholder="Contact Number"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                />
                <input 
                  className="input input-element" 
                  name="email" 
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <textarea 
                  className="textinput input-element" 
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <button 
                  className="button"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </form>
              <div className="social-media-icon-container">
                <a href="https://github.com/SithumW" target="_blank" rel="noopener noreferrer" className="icon-block social-icon">
                  <svg height="37.7" viewBox="0 0 37.7 37.7" width="37.701" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.85,0C8.44,0,0,8.44,0,18.85c0,8.33,5.4,15.4,12.9,17.9c0.94,0.17,1.28-0.41,1.28-0.91c0-0.45-0.02-1.94-0.02-3.53c-5.24,1.14-6.35-2.22-6.35-2.22c-0.86-2.18-2.1-2.76-2.1-2.76c-1.71-1.17,0.13-1.15,0.13-1.15c1.89,0.13,2.88,1.94,2.88,1.94c1.68,2.88,4.41,2.05,5.49,1.57c0.17-1.22,0.66-2.05,1.2-2.52c-4.18-0.48-8.58-2.09-8.58-9.31c0-2.06,0.73-3.74,1.94-5.06c-0.19-0.48-0.84-2.4,0.18-5c0,0,1.58-0.51,5.18,1.93c1.5-0.42,3.11-0.63,4.71-0.64c1.6,0.01,3.21,0.22,4.71,0.64c3.6-2.44,5.18-1.93,5.18-1.93c1.02,2.6,0.37,4.52,0.18,5c1.21,1.32,1.94,3,1.94,5.06c0,7.24-4.41,8.83-8.61,9.29c0.68,0.58,1.28,1.73,1.28,3.49c0,2.52-0.02,4.55-0.02,5.17c0,0.5,0.34,1.09,1.29,0.91C32.49,34.24,37.7,27.18,37.7,18.85C37.7,8.44,29.26,0,18.85,0z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=2kqh6bh" target="_blank" rel="noopener noreferrer" className="icon-block social-icon">
                  <svg height="37.7" viewBox="0 0 37.701 37.7" width="37.701" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.587,11.078A13.839,13.839,0,0,0,36.711,6.5a9.238,9.238,0,0,0-2.174-3.339A9.241,9.241,0,0,0,31.2.989,13.837,13.837,0,0,0,26.622.114C24.612.022,23.969,0,18.85,0s-5.762.022-7.772.113A13.841,13.841,0,0,0,6.5.99,9.239,9.239,0,0,0,3.164,3.164,9.24,9.24,0,0,0,.989,6.5a13.838,13.838,0,0,0-.875,4.576C.022,13.088,0,13.73,0,18.85s.022,5.762.114,7.772A13.835,13.835,0,0,0,.99,31.2a9.237,9.237,0,0,0,2.174,3.339A9.236,9.236,0,0,0,6.5,36.71a13.832,13.832,0,0,0,4.576.876c2.011.092,2.653.113,7.772.113s5.762-.022,7.772-.113A13.834,13.834,0,0,0,31.2,36.71,9.637,9.637,0,0,0,36.711,31.2a13.834,13.834,0,0,0,.876-4.576c.091-2.011.113-2.653.113-7.772s-.022-5.761-.113-7.772ZM34.194,26.467a10.429,10.429,0,0,1-.649,3.5,6.242,6.242,0,0,1-3.578,3.578,10.43,10.43,0,0,1-3.5.649c-1.987.091-2.584.11-7.617.11s-5.63-.019-7.617-.11a10.433,10.433,0,0,1-3.5-.649,5.842,5.842,0,0,1-2.167-1.41,5.839,5.839,0,0,1-1.41-2.167,10.429,10.429,0,0,1-.649-3.5c-.091-1.988-.11-2.584-.11-7.617s.019-5.629.11-7.617a10.437,10.437,0,0,1,.649-3.5,5.844,5.844,0,0,1,1.41-2.168,5.836,5.836,0,0,1,2.168-1.41,10.428,10.428,0,0,1,3.5-.649c1.988-.091,2.584-.11,7.617-.11h0c5.033,0,5.63.019,7.617.11a10.431,10.431,0,0,1,3.5.649,5.845,5.845,0,0,1,2.167,1.41,5.836,5.836,0,0,1,1.41,2.168,10.42,10.42,0,0,1,.649,3.5c.091,1.988.11,2.584.11,7.617S34.285,24.479,34.194,26.467Zm0,0" transform="translate(0 0)">
                    </path>
                    <path d="M134.219,124.539a9.68,9.68,0,1,0,9.68,9.68A9.68,9.68,0,0,0,134.219,124.539Zm0,15.963a6.283,6.283,0,1,1,6.284-6.284A6.283,6.283,0,0,1,134.219,140.5Zm0,0" transform="translate(-115.369 -115.369)">
                    </path>
                    <path d="M366.454,90.888a2.262,2.262,0,1,1-2.262-2.262A2.262,2.262,0,0,1,366.454,90.888Zm0,0" transform="translate(-335.279 -82.1)">
                    </path>
                  </svg>
                </a>
                <a href="https://www.facebook.com/share/17eBemHD1o/" target="_blank" rel="noopener noreferrer" className="icon-block social-icon">
                  <svg height="37.7" viewBox="0 0 37.701 37.7" width="37.701" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.178,0H5.523A5.529,5.529,0,0,0,0,5.522V32.178A5.529,5.529,0,0,0,5.523,37.7H16.641V24.372H12.223V17.746h4.418V13.254a6.634,6.634,0,0,1,6.627-6.627h6.7v6.627h-6.7v4.492h6.7l-1.1,6.627h-5.6V37.7h8.91A5.529,5.529,0,0,0,37.7,32.178V5.522A5.529,5.529,0,0,0,32.178,0Zm0,0">
                    </path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/sithum-weerasinghe-309629197" target="_blank" rel="noopener noreferrer" className="icon-block social-icon">
                  <svg height="37.649" viewBox="0 0 39.398 37.649" width="39.398" xmlns="http://www.w3.org/2000/svg">
                    <path d="M66.466,47.05V61.618H58.02V48.026c0-3.413-1.219-5.743-4.278-5.743a4.62,4.62,0,0,0-4.332,3.088,5.781,5.781,0,0,0-.28,2.058V61.617H40.684s.113-23.02,0-25.4h8.447v3.6c-.017.028-.041.056-.056.083h.056v-.083a8.386,8.386,0,0,1,7.612-4.2c5.557,0,9.723,3.631,9.723,11.432ZM31.848,23.969c-2.889,0-4.78,1.9-4.78,4.388a4.374,4.374,0,0,0,4.669,4.39h.055c2.946,0,4.778-1.951,4.778-4.39a4.388,4.388,0,0,0-4.722-4.388ZM27.57,61.618h8.444v-25.4H27.57Z" transform="translate(-27.068 -23.969)">
                    </path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
