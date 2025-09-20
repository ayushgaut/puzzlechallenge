import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");

  const handleCheckout = async () => {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Payment failed");
    }
  };

  return (
    <>
      <NavBar />
      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold">Welcome to the Puzzle Challenge!</h1>
        <p className="mt-4 text-gray-600">Pay $10 to enter the contest.</p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mt-4 w-64"
        />

        <div className="mt-6 text-left max-w-xl mx-auto">
          <label className="flex items-start space-x-2">
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <span className="text-sm">
              I confirm this is a skill-based contest. I am not using AI tools
              and will not use them during the contest. I understand that random
              checks may occur, and confirmed AI use may lead to disqualification
              and reversal of winnings.
            </span>
          </label>
        </div>

        <button
          onClick={handleCheckout}
          disabled={!checked || !email}
          className={`mt-6 px-6 py-2 rounded ${
            checked && email
              ? "bg-blue-600 text-white"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }`}
        >
          Pay $10 to Enter
        </button>
      </main>
      <Footer />
    </>
  );
}
