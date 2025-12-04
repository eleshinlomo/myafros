
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { sendContactMessage } from '../api/contact';
import { FormEvent, useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [color, setColor] = useState('white')
   const [captchaValue, setCaptchaValue] = useState<string | null>(null);


   const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''

    // Fixed TypeScript type
  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };


  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSendContactMessage = async (e: FormEvent)=>{
       e.preventDefault()
       setIsSending(true)
         if(!name || !message || !email){
            setError('Input fields cannot be empty')
            setIsSending(false)
             window.location.href='#contact'
            return
         }

           if (!captchaValue) {
      setError('Please complete the CAPTCHA verification');
      window.location.href='#contact'
       setIsSending(false)
      return;
    }

       try{
      const payload = {
         service: 'MyAfros',
         name,
         email,
         subject,
         message,
         captchaValue
      }
      const response = await sendContactMessage(payload)
   
      if(response.ok){
        setSuccess(response.message)
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
      }else{
         setError('Error. Your message was not sent. Please try again')
      }
    }catch(err){
      console.log('Error', err)
    }finally{
       setIsSending(false)
       window.location.href = '#contact'
    }
    
  }

  // useEffect(()=>{
  //     if(error){
  //       setColor('red')
  //     }
  // }, [error])

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Interested in collaborating on AI projects or building innovative software solutions? 
            I&apos;m always open to discussing new opportunities.
          </p>

         
             <p className={`${error && 'text-red-600'} text-white font-extrabold py-2`}>{error ? error : success}</p>
          <motion.form
            className="space-y-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            onSubmit={handleSendContactMessage}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-300 focus:outline-none focus:border-blue-400 transition-all"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-300 focus:outline-none focus:border-blue-400 transition-all"
                 required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e)=>setSubject(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-300 focus:outline-none focus:border-blue-400 transition-all"
               required
            />
            <textarea
              placeholder="Your Message"
              rows={6}
               value={message}
                onChange={(e)=>setMessage(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-300 focus:outline-none focus:border-blue-400 transition-all resize-none"
               required
            ></textarea>

             <div className="w-full flex justify-center transform scale-90"> {/* Scale down to 90% */}
                  <ReCAPTCHA
                    sitekey={SITE_KEY}
                    onChange={handleCaptchaChange}
                  />
                </div>


            <motion.button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all flex items-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-5 h-5" />
              <span>{isSending ? 'Sending...': 'Send Message'}</span>
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}