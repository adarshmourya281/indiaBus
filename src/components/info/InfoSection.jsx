function InfoSection() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="space-y-5">

            <div>
              <h4 className="text-base md:text-lg font-semibold">
                How can I book bus tickets online in India?
              </h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Just enter your journey details (From, To, Date), hit ‘Search’,
                select a bus, pick your seat, and complete payment. You'll get
                an e-ticket instantly.
              </p>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-semibold">
                Are government buses available for booking?
              </h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Yes, we offer tickets for major state-run bus services like
                KSRTC, APSRTC, MSRTC, UPSRTC, and others.
              </p>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-semibold">
                Can I use UPI like PhonePe, Google Pay for payment?
              </h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Yes! We support all major Indian UPI apps, wallets, and
                banking systems.
              </p>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-semibold">
                Will I get a physical ticket?
              </h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                No need. Your SMS or WhatsApp e-ticket is sufficient. Just
                show it during boarding, along with valid ID proof.
              </p>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-semibold">
                What if my bus gets canceled or delayed?
              </h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                You'll be notified immediately. If canceled by the operator,
                a full refund will be initiated as per policy.
              </p>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-semibold">
                How do I cancel or reschedule my bus ticket?
              </h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Log in, go to ‘My Bookings’, and follow the cancellation or
                rescheduling steps. Operator-specific charges may apply.
              </p>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-semibold">
                Is customer care available in local languages?
              </h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Yes. Our support is available 24x7 in Hindi, English, and
                regional languages like Tamil, Telugu, Kannada, and more.
              </p>
            </div>

          </div>
        </div>

        {/* About Section */}
        <div className="mt-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            About IndiaBus
          </h2>

          <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
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