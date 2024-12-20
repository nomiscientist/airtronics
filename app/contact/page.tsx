'use client'

import PageWrapper from '@/components/PageWrapper'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const recipients = [
        {
          name: "Kashif Ali",
          title: "Head of Sales and Technical",
          email: "sales@airtronics.com.pk"
        },
        {
          name: "Haider",
          title: "Head of Commercial",
          email: "commercial@airtronics.com.pk"
        }
      ]

      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }
  }

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Sales & Technical",
      details: [
        "Kashif Ali - Head of Sales",
        "+92 335 2869956",
        "sales@airtronics.com.pk"
      ],
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Commercial",
      details: [
        "Haider - Head of Commercial",
        "+92 300 2241481",
        "commercial@airtronics.com.pk"
      ],
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Us",
      details: ["info@airtronics.com.pk"],
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Visit Us",
      details: [
        "Suit #614, 6th Floor Anum Blessing,",
        "SMCHU Block 7/8 Shahrah e Faisal",
        "Karachi, Pakistan"
      ],
    },
  ]

  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-center text-gray-900 dark:text-gray-100">
            Contact Us
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={info.title}
                className={`p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300
                  ${index === contactInfo.length - 1 ? 'lg:col-span-1' : ''}`}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full mr-3">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {info.title}
                  </h3>
                </div>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 dark:text-gray-400 ml-11">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 transition-colors duration-200"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 transition-colors duration-200"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-lg text-white font-semibold
                    ${isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'}
                    transition-colors duration-200`}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg">
                  Message sent successfully! Our Sales and Commercial teams will review your message and get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

