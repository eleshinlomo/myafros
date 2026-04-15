'use client';

import { useState } from 'react';
import { addMemberToNewsLetter } from '../../api/Newsletter';

interface NewsletterProps {
  btnText: string;
}

const NewsletterForm = ({ btnText }: NewsletterProps) => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleEmailWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const service = 'elteema';
      const payload = {
        service,
        email,
      };
     
      const response: any = await addMemberToNewsLetter(payload);

      if (response.ok) {
        setMessage(response.message);
        setEmail('');
      } else {
        setMessage(response.error);
      }
    } catch (err: any) {
      setMessage(`"Error": ${err.message}`);
    }
  };

  return (
    <div className="w-full">
      <div className="py-4 text-white font-extrabold">
        <p className="py-2">{message ? message : btnText}</p>
        <form className="md:flex gap-3" onSubmit={handleEmailWaitlist}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 rounded-xl border border-gray-700 bg-gray-900/50 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition"
          />
          <button
            type="submit"
            className="mt-2 md:mt-0 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold text-white transition shadow-lg shadow-pink-500/20"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;