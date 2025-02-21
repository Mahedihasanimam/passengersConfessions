import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom"; // If you are using react-router for routing

const AffiliateProgram = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF0048] to-[#FF8C00] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold leading-tight">
            Join Our Affiliate Program and Earn Big!
          </h1>
          <p className="mt-4 text-lg">
            Sign up now to start earning commissions for every sale you
            generate. Become a part of our team and benefit from incredible
            offers!
          </p>
          <div className="mt-8">
            <Link to="/auth/Becomeanaffiliate">
              <Button
                type="primary"
                size="large"
                style={{
                  backgroundColor: "#FF0048",
                  borderColor: "#FFFFFF",
                  fontSize: "18px",
                }}
              >
                Become an Affiliate
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Earning and Level Up Section */}
      <section className="py-16 px-4 md:px-10 bg-gradient-to-r from-[#FF0048] to-[#FF8C00] text-white text-center">
        <h2 className="text-3xl font-semibold">Earn More, Level Up!</h2>
        <p className="mt-4 text-lg">
          The more you earn, the higher your level and the bigger your rewards!
          Here’s how the levels work:
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-semibold text-primary">Level 1</h3>
            <p className="mt-2 text-gray-600">
              Earn up to <strong>$240,000</strong> in commissions
              {/*and unlock exclusive affiliate perks. */}
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-semibold text-primary">Level 2</h3>
            <p className="mt-2 text-gray-600">
              Earn up to <strong>$500,000</strong> in commissions
              {/*and receive additional rewards. */}
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-semibold text-primary">Level 3</h3>
            <p className="mt-2 text-gray-600">
              Earn up to <strong>$1,000,000</strong> in commissions
              {/*and enjoy premium affiliate benefits. */}
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-semibold text-primary">Level 4</h3>
            <p className="mt-2 text-gray-600">
              Earn over <strong>$2,000,000</strong> in commissions
              {/*and access VIP affiliate services. */}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold">Why Become an Affiliate?</h2>
          <p className="mt-4 text-lg text-gray-600">
            As an affiliate, you’ll enjoy numerous benefits and opportunities
            for growth.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">Earn Commission</h3>
              <p className="mt-2 text-gray-600">
                Get paid for every sale generated through your unique affiliate
                code.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">Flexibility</h3>
              <p className="mt-2 text-gray-600">
                Work from anywhere and promote our products in your own time.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">Exclusive Offers</h3>
              <p className="mt-2 text-gray-600">
                Gain access to special promotions and offers for your audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600">
            Getting started as an affiliate is quick and easy. Here's how it
            works:
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">Step 1: Sign Up</h3>
              <p className="mt-2 text-gray-600">
                Fill out a quick sign-up form to join our affiliate program.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">Step 2: Promote</h3>
              <p className="mt-2 text-gray-600">
                Share your unique affiliate code with your audience via social
                media, blogs, or email.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">Step 3: Earn</h3>
              <p className="mt-2 text-gray-600">
                Earn a commission for every sale that comes through your
                affiliate code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-[#FF0048] to-[#FF8C00] text-white text-center">
        <h2 className="text-3xl font-semibold">
          Ready to Get Started? Join Our Affiliate Program Today!
        </h2>
        <p className="mt-4 text-lg">
          Start earning commissions and be part of our success story.
        </p>
        <div className="mt-8">
          <Link to="/auth/Becomeanaffiliate">
            <Button
              type="primary"
              size="large"
              style={{
                backgroundColor: "#FF0048",
                borderColor: "#FFFFFF",
                fontSize: "18px",
              }}
            >
              Become an Affiliate
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AffiliateProgram;
