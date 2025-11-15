import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post("http://localhost:8080/api/contact", form);
      setStatus("Message sent!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Failed to send message.");
    }finally{
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto">
      <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className="border p-2 rounded"/>
      <input name="email" placeholder="Your Email" value={form.email} onChange={handleChange} className="border p-2 rounded"/>
      <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} className="border p-2 rounded"/>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
      {sending && <p>Sending...</p>}
      {status && <p>{status}</p>}
    </form>
  );
}

