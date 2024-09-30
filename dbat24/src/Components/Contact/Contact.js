import React, { useState, useRef } from "react";
import "./Contact.css";
import { BsSend } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobtypes, setJobtypes] = useState("");
  const [message, setMessage] = useState("");

  const sendEmailInfo = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!name || !email || !jobtypes || !message) {
      toast.error("Please fill all fields before submitting.", {
        position: "top-right",
      });
      return; // Stop the form submission
    }

    emailjs
      .sendForm(
        "service_lr3oquf", // Replace with your actual service ID
        "template_qjm9xun", // Replace with your actual template ID
        form.current,
        "-ZvzcQqNepBTF3ZKZ" // Replace with your actual public key
      )
      .then(
        (result) => {
          toast.success("Your mail has been sent successfully!", {
            position: "top-right",
          });

          setName("");
          setEmail("");
          setJobtypes("");
          setMessage("");
        },
        (error) => {
          toast.error("Failed to send email. Please try again.", {
            position: "top-right",
          });
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container contact-section" id="contact">
      <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
          <div className="contact-form-image">
            <img
              src="https://media.istockphoto.com/id/1454547885/photo/mail-communication-connection-message-to-mailing-contacts-phone-global-letters-concept.jpg?s=1024x1024&w=is&k=20&c=vgff06w7ukyIBAq3w2S0poBVp3pFoLawEVM81TpFW7A="
              alt="Contact img"
            />
          </div>
        </div>
        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
          <div className="contact-form-design">
            <div className="text-center">
              <h5>Contact Me</h5>
            </div>
            <form className="contact-form-gap" ref={form} onSubmit={sendEmailInfo}>
              <div className="contact-form">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="contact-form">
                <label className="form-label">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="contact-form">
                <label className="form-label">Job Types</label>
                <select
                  className="custom-select-tag"
                  name="jobtypes"
                  value={jobtypes}
                  onChange={(e) => setJobtypes(e.target.value)}
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Student">Student</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Working Student">Working Student</option>
                </select>
              </div>
              <div className="contact-form">
                <label className="form-label">Message</label>
                <textarea
                  rows="10"
                  type="text"
                  className="form-control"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button className="button-submit" type="submit">
                <p>
                  Send <BsSend size="20" />
                </p>
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer draggable autoClose={8000} />
    </div>
  );
};

export default Contact;











// import React, { useState } from "react";
// import "./Contact.css";
// import { BsSend } from "react-icons/bs";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Contact = () => {
//   const API = "http://localhost:8080/snedermail";

//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [jobtypes, setJobtypes] = useState();
//   const [message, setMessage] = useState();

//   const sendemailInfo = () => {
//     fetch(API, {
//       method: "POST", 
//       headers: {
//         "content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({
//         name,
//         email,
//         jobtypes,
//         message,
//       }),
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         if (result.error) {
//           toast.error(result.error, {
//             position: toast.POSITION.TOP_RIGHT,
//           });
//         } else {
//           toast.success("Your mail has been sent succssfully", {
//             position: toast.POSITION.TOP_RIGHT,
//           });
//           setName("");
//           setEmail("");
//           setJobtypes("");
//           setMessage("");
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div className="container contact-section" id="contact">
//       <div className="row">
//         <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
//           <div className="contact-form-image">
//             <img
//               src="https://media.istockphoto.com/id/1454547885/photo/mail-communication-connection-message-to-mailing-contacts-phone-global-letters-concept.jpg?s=1024x1024&w=is&k=20&c=vgff06w7ukyIBAq3w2S0poBVp3pFoLawEVM81TpFW7A="
//               alt="Contact img"
//             />
//           </div>
//         </div>
//         <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
//           <div className="contact-form-design">
//             <div className="text-center">
//               <h5>Contact Me</h5>
//             </div>
//             <form className="contact-form-gap">
//               <div className="contact-form">
//                 <label className="form-label">Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </div>
//               <div className="contact-form">
//                 <label className="form-label">E-mail</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="contact-form">
//                 <label className="form-label">Job Types</label>
//                 <select
//                   className="custom-select-tag"
//                   value={jobtypes}
//                   onChange={(e) => setJobtypes(e.target.value)}
//                 >
//                   <option>Full-Time</option>
//                   <option>Student</option>
//                   <option>Part-Time</option>
//                   <option>Working Student</option>
//                 </select>
//               </div>
//               <div className="contact-form">
//                 <label className="form-label">Message</label>
//                 <textarea
//                   rows="10"
//                   type="text"
//                   className="form-control"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                 />
//               </div>
//               <div className="button-submit" onClick={sendemailInfo}>
//                 <p>
//                   Send <BsSend size="20" />
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <ToastContainer draggable autoClose={8000} />
//     </div>
//   );
// };

// export default Contact;
