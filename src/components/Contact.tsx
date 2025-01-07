import { Mail, Phone, MapPin } from 'lucide-react';
import { useState, FormEvent, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionCount, setSubmissionCount] = useState(0);
  const [isRateLimited, setIsRateLimited] = useState(false);

  // Reset the rate limiter after 15 minutes
  useEffect(() => {
    if (submissionCount > 0) {
      const timer = setTimeout(() => {
        setSubmissionCount(0);
        setIsRateLimited(false);
      }, 15 * 60 * 1000); // 15 minutes

      return () => clearTimeout(timer);
    }
  }, [submissionCount]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (isRateLimited) {
      toast.error('You are sending too many messages. Please try again later.');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_1h2r6ks', // Replace with your EmailJS service ID
        'template_xia50h9', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'Bhupeshverm29bv@gmail.com'
        },
        'rUme29clAq5gAMESV' // Replace with your EmailJS public key
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });

      // Increment submission count
      setSubmissionCount((prevCount) => prevCount + 1);

      // If the submission count exceeds the limit, activate rate limiting
      if (submissionCount + 1 >= 3) {
        setIsRateLimited(true);
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Email sending failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16">
      <Toaster position="top-right" />
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-amber-50	 mb-8">
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out if you want to connect!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-amber-50	">Bhupeshverm29bv@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-amber-50	">+91 9479070589</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-amber-50	">India</span>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-amber-50 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 text-slate-100	 bg-slate-700	 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-amber-50	 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 text-slate-100	 bg-slate-700	 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-amber-50	 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 text-slate-100	 bg-slate-700	 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting || isRateLimited}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : isRateLimited ? 'Rate Limited' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}