import "../../styles/info/InfoSection.css";

function InfoSection() {
  return (
    <section className="info-section">
      <div className="gov-container">

        {/* FAQ Section */}
        <div className="faq-section">
          <h2 className="info-title">Frequently Asked Questions (FAQs)</h2>

          <div className="faq-item">
            <h4>How can I book bus tickets online in India?</h4>
            <p>
              Just enter your journey details (From, To, Date), hit ‘Search’,
              select a bus, pick your seat, and complete payment. You'll get
              an e-ticket instantly.
            </p>
          </div>

          <div className="faq-item">
            <h4>Are government buses available for booking?</h4>
            <p>
              Yes, we offer tickets for major state-run bus services like
              KSRTC, APSRTC, MSRTC, UPSRTC, and others.
            </p>
          </div>

          <div className="faq-item">
            <h4>Can I use UPI like PhonePe, Google Pay for payment?</h4>
            <p>
              Yes! We support all major Indian UPI apps, wallets, and
              banking systems.
            </p>
          </div>

          <div className="faq-item">
            <h4>Will I get a physical ticket?</h4>
            <p>
              No need. Your SMS or WhatsApp e-ticket is sufficient. Just
              show it during boarding, along with valid ID proof.
            </p>
          </div>

          <div className="faq-item">
            <h4>What if my bus gets canceled or delayed?</h4>
            <p>
              You'll be notified immediately. If canceled by the operator,
              a full refund will be initiated as per policy.
            </p>
          </div>

          <div className="faq-item">
            <h4>How do I cancel or reschedule my bus ticket?</h4>
            <p>
              Log in, go to ‘My Bookings’, and follow the cancellation or
              rescheduling steps. Operator-specific charges may apply.
            </p>
          </div>

          <div className="faq-item">
            <h4>Is customer care available in local languages?</h4>
            <p>
              Yes. Our support is available 24x7 in Hindi, English, and
              regional languages like Tamil, Telugu, Kannada, and more.
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="about-section">
          <h2 className="about-title">About IndiaBus</h2>
          <p className="about-text">
            IndiaBus is India’s trusted platform for booking bus tickets
            online. With 3,000+ bus operators and 100,000+ routes across India,
            we bring comfort, convenience, and reliability to your travel
            experience. Whether you're heading home, on a business trip, or
            planning a getaway, we've got you covered.
          </p>
        </div>

      </div>
    </section>
  );
}

export default InfoSection;