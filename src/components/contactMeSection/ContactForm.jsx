import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // EmailJS configuration - Using environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if credentials are configured
    console.log("EmailJS config:", { serviceId, templateId, publicKey: publicKey ? "***" : "missing" });
    if (!serviceId || !templateId || !publicKey) {
      setError("Email service not configured. Please contact the site owner.");
      setLoading(false);
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Alok Giri",
      message: message,
    };
    console.log("Template params:", templateParams);

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (result.status === 200) {
        setSuccess("Message sent successfully! I'll get back to you soon.");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (err) {
      console.error("EmailJS error:", err);
      const errorMessage = err?.text || err?.message || "Failed to send message. Please try again or email me directly.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }

    // Clear messages after timeout
    setTimeout(() => {
      setSuccess("");
      setError("");
    }, 5000);
  };

  return (
    <div>
      {success && (
        <p className="text-xl text-cyan-400 font-bold mb-2 text-center">
          {success}
        </p>
      )}
      {error && (
        <p className="text-xl text-red-400 font-bold mb-2 text-center">
          {error}
        </p>
      )}
      <form
        className="flex flex-col gap-4 p-6 rounded-lg bg-black/80 border border-cyan-400 shadow-md"
        onSubmit={sendEmail}
      >
        {/* Name Input */}
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          autoComplete="off"
          className="h-12 rounded-md bg-black/80 px-4 text-white placeholder-gray-400 outline-none border border-cyan-400 
               focus:ring-2 focus:ring-cyan-400/50 transition-all duration-200"
          value={name}
          onChange={handleName}
          disabled={loading}
        />

        {/* Email Input */}
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          autoComplete="off"
          className="h-12 rounded-md bg-black/80 px-4 text-white placeholder-gray-400 outline-none border border-cyan-400 
               focus:ring-2 focus:ring-cyan-400/50 transition-all duration-200"
          value={email}
          onChange={handleEmail}
          disabled={loading}
        />

        {/* Message Input */}
        <textarea
          name="message"
          placeholder="Message"
          rows={6}
          required
          className="rounded-md bg-black/80 p-4 text-white placeholder-gray-400 outline-none resize-none 
               scrollbar-thin scrollbar-thumb-cyan-400/80 scrollbar-track-black border border-cyan-400 
               focus:ring-2 focus:ring-cyan-400/50 transition-all duration-200"
          value={message}
          onChange={handleMessage}
          disabled={loading}
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md border border-cyan-400 text-white h-12 font-medium text-lg bg-cyan-400 
               hover:bg-transparent hover:text-cyan-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;