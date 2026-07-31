import { useState } from "react";
import "./Contacts.css";


function Contact() {
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        setLoading(true);
        setResult("");
      
        const formData = new FormData(event.target);
      
        const response = await fetch(
          "https://api.web3forms.com/submit",
          {
            method: "POST",
            body: formData,
          }
        );
      
        const data = await response.json();
      
        if (data.success) {
          setResult("✅ Thank you! Your enquiry has been sent successfully.");
          event.target.reset();
        } else {
          setResult("❌ Failed to send enquiry. Please try again.");
        }
      
        setLoading(false);
      };

  return (
    <section className="contact" id="contact">
      <div className="container">

        <div className="section-title">
          <span className="section-tag">CONTACT US</span>
          <h2>Let's Build Something Strong Together</h2>
          <p>
            Have a project in mind? Contact Ming Fok Steel Rolling today.
          </p>
          <p className="company-desc">
  We provide professional steel rolling and fabrication services for
  commercial, industrial and infrastructure projects throughout Malaysia.
  Contact us today for a free consultation or quotation.
</p>
        </div>

        <div className="contact-wrapper">

          {/* Left */}
          <div className="contact-info">






<div className="info-card">
  <h4>📍 Address</h4>
  <p>
  PT 2275, Jalan Kampung Baru Sungai Buloh,<br/> 
  47000 Selangor Darul Ehsan, Malaysia.
  </p>
</div>

<div className="info-card">
  <h4>📞 Phone</h4>
  <p>+60 16-316 3897</p>
</div>

<div className="info-card">
  <h4>✉️ Email</h4>
  <p> ✉ Email: <a href="mailto:ingfokrolling@gmail.com">mingfokrolling@gmail.com</a></p>
</div>

<div className="info-card">
  <h4>🕒 Business Hours</h4>
  <p>
    Monday - Saturday<br />
    8:00 AM - 5:30 PM<br/>
    Sunday Closed
  </p>
</div>

</div>

          {/* Right */}
          <form 
          className="contact-form" onSubmit={handleSubmit}
          >
            {/* YOUR ACCESS KEY */}
            <input
              type="hidden"
              name="access_key"
              value="ae4a6aa7-592d-49a6-8407-be131b029f2b"
            />

            {/* Optional */}
            <input
              type="hidden"
              name="subject"
              value="New enquiry from Ming Fok Website"
            />

            <input
              type="hidden"
              name="from_name"
              value="Ming Fok Website"
            />

            {/* Spam Protection */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
            />

            <select name="service" required>
            <option value="">Select a Service</option>
            <option>Beam Rolling</option>
            <option>Plate Rolling</option>
            <option>Section Rolling</option>
            <option>Cone Rolling</option>
            <option>Steel Fabrication</option>
            <option>Custom Project</option>
            </select>

            <textarea
              name="message"
              rows="6"
              placeholder="Tell us about your project..."
              required
            ></textarea>

            <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Enquiry"}
            </button>

            {result && (
            <p className="form-result">
                {result}
            </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;