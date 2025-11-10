import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { User, Building2, Mail, Phone, MessageSquare, ChevronDown, Send, CheckCircle2, AlertCircle, Shield } from "lucide-react";
import FadeInUp from "./FadeInUp";

export const ContactForm = React.forwardRef<HTMLDivElement>((_, ref) => {
  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === 'ka';
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(t("contactForm.SENDING"));

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", import.meta.env.VITE_MESSAGE_ACCESS_KEY);
    formData.append("subject", "New Contact from CodeNovex Website");
    formData.append("from_name", "CodeNovex Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult(t("contactForm.SUCCESS_MESSAGE"));
        (event.target as HTMLFormElement).reset();
      } else {
        console.error("Error from web3forms:", data);
        setResult(data.message || t("contactForm.ERROR_MESSAGE"));
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult(t("contactForm.ERROR_MESSAGE"));
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setResult("");
      }, 5000);
    }
  };

  return (
    <section
      ref={ref}
      data-section="contact"
      id="contact"
      className="relative bg-black py-16 px-4 md:py-24 overflow-hidden"
      aria-labelledby="contact-form-heading"
      style={{ willChange: 'auto' }}
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto">
        <FadeInUp delay={0.1}>
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-sm font-semibold rounded-full">
                {t("contactForm.BADGE") || "GET IN TOUCH"}
              </span>
            </div>

            <h2
              id="contact-form-heading"
              className={`${isGeorgian ? 'text-3xl md:text-4xl leading-[1.4] pb-2' : 'text-4xl md:text-5xl pb-2'} font-bold text-white mb-4 md:mb-6`}
            >
              {t("contactForm.HEADING")}
            </h2>
            <p className={`text-gray-400 max-w-3xl mx-auto ${isGeorgian ? 'text-base leading-[1.9]' : 'text-base leading-relaxed'}`}>
              {t("contactForm.SUBHEADING")}
            </p>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <form
            onSubmit={onSubmit}
            className="relative glass-strong rounded-3xl shadow-2xl p-8 md:p-12 space-y-6 border border-white/10 mb-16 overflow-hidden"
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-purple-600/5 to-transparent opacity-50 pointer-events-none"></div>
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <motion.div 
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label
                htmlFor="name"
                className={`mb-2 font-medium text-gray-300 group-focus-within:text-brand-primary transition-colors flex items-center gap-2 ${isGeorgian ? 'text-sm leading-[1.6]' : 'text-sm'}`}
              >
                <User className="w-4 h-4" />
                {t("contactForm.NAME_LABEL")}{" "}
                <span className="text-brand-primary">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full pl-12 pr-4 py-3.5 bg-gray-900/50 border-2 border-gray-700/50 text-white rounded-xl focus:border-brand-primary focus:outline-none focus:bg-gray-900/70 transition-all duration-300 placeholder-gray-500 hover:border-gray-600 ${isGeorgian ? 'text-base leading-[1.6]' : 'text-base'}`}
                  placeholder={t("contactForm.NAME_PLACEHOLDER")}
                  required
                />
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-brand-primary transition-colors pointer-events-none" />
              </div>
            </motion.div>

            {/* Company Field */}
            <motion.div 
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <label
                htmlFor="company"
                className={`mb-2 font-medium text-gray-300 group-focus-within:text-brand-primary transition-colors flex items-center gap-2 ${isGeorgian ? 'text-sm leading-[1.6]' : 'text-sm'}`}
              >
                <Building2 className="w-4 h-4" />
                {t("contactForm.COMPANY_LABEL")}
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="company"
                  name="company"
                  className={`w-full pl-12 pr-4 py-3.5 bg-gray-900/50 border-2 border-gray-700/50 text-white rounded-xl focus:border-brand-primary focus:outline-none focus:bg-gray-900/70 transition-all duration-300 placeholder-gray-500 hover:border-gray-600 ${isGeorgian ? 'text-base leading-[1.6]' : 'text-base'}`}
                  placeholder={t("contactForm.COMPANY_PLACEHOLDER")}
                />
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-brand-primary transition-colors pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* Email Field */}
          <motion.div 
            className="relative z-10 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label
              htmlFor="email"
              className={`mb-2 font-medium text-gray-300 group-focus-within:text-brand-primary transition-colors flex items-center gap-2 ${isGeorgian ? 'text-sm leading-[1.6]' : 'text-sm'}`}
            >
              <Mail className="w-4 h-4" />
              {t("contactForm.EMAIL_LABEL")}{" "}
              <span className="text-brand-primary">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full pl-12 pr-4 py-3.5 bg-gray-900/50 border-2 border-gray-700/50 text-white rounded-xl focus:border-brand-primary focus:outline-none focus:bg-gray-900/70 transition-all duration-300 placeholder-gray-500 hover:border-gray-600 ${isGeorgian ? 'text-base leading-[1.6]' : 'text-base'}`}
                placeholder={t("contactForm.EMAIL_PLACEHOLDER")}
                required
              />
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-brand-primary transition-colors pointer-events-none" />
            </div>
          </motion.div>

          {/* Phone Field */}
          <motion.div 
            className="relative z-10 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <label
              htmlFor="phone"
              className={`mb-2 font-medium text-gray-300 group-focus-within:text-brand-primary transition-colors flex items-center gap-2 ${isGeorgian ? 'text-sm leading-[1.6]' : 'text-sm'}`}
            >
              <Phone className="w-4 h-4" />
              {t("contactForm.PHONE_LABEL")}{" "}
              <span className="text-brand-primary">*</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                className={`w-full pl-12 pr-4 py-3.5 bg-gray-900/50 border-2 border-gray-700/50 text-white rounded-xl focus:border-brand-primary focus:outline-none focus:bg-gray-900/70 transition-all duration-300 placeholder-gray-500 hover:border-gray-600 ${isGeorgian ? 'text-base leading-[1.6]' : 'text-base'}`}
                placeholder={t("contactForm.PHONE_PLACEHOLDER")}
                required
              />
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-brand-primary transition-colors pointer-events-none" />
            </div>
          </motion.div>

          {/* Message Field */}
          <motion.div 
            className="relative z-10 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label
              htmlFor="message"
              className={`mb-2 font-medium text-gray-300 group-focus-within:text-brand-primary transition-colors flex items-center gap-2 ${isGeorgian ? 'text-sm leading-[1.6]' : 'text-sm'}`}
            >
              <MessageSquare className="w-4 h-4" />
              {t("contactForm.MESSAGE_LABEL")}{" "}
              <span className="text-brand-primary">*</span>
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={5}
                className={`w-full pl-12 pr-4 py-3.5 bg-gray-900/50 border-2 border-gray-700/50 text-white rounded-xl focus:border-brand-primary focus:outline-none focus:bg-gray-900/70 transition-all duration-300 placeholder-gray-500 hover:border-gray-600 resize-none ${isGeorgian ? 'text-base leading-[1.6]' : 'text-base'}`}
                placeholder={t("contactForm.MESSAGE_PLACEHOLDER")}
                required
              ></textarea>
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500 group-focus-within:text-brand-primary transition-colors pointer-events-none" />
            </div>
          </motion.div>

          {/* Source Field */}
          <motion.div 
            className="relative z-10 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <label
              htmlFor="source"
              className={`block mb-2 font-medium text-gray-300 group-focus-within:text-brand-primary transition-colors ${isGeorgian ? 'text-sm leading-[1.6]' : 'text-sm'}`}
            >
              {t("contactForm.SOURCE_LABEL")}
            </label>
            <div className="relative">
              <select
                id="source"
                name="source"
                className={`w-full pl-4 pr-12 py-3.5 bg-gray-900/50 border-2 border-gray-700/50 text-white rounded-xl focus:border-brand-primary focus:outline-none focus:bg-gray-900/70 transition-all duration-300 hover:border-gray-600 appearance-none cursor-pointer ${isGeorgian ? 'text-base leading-[1.6]' : 'text-base'}`}
              >
                <option value="" className="bg-gray-900 text-gray-400">
                  {t("contactForm.SOURCE_PLACEHOLDER")}
                </option>
                {(t("contactForm.SOURCE_OPTIONS", { returnObjects: true }) as Array<{value: string, label: string}>).map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-900 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-brand-primary transition-colors pointer-events-none" />
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div 
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative w-full bg-gradient-to-r from-brand-primary via-cyan-500 to-brand-primary bg-size-200 hover:bg-pos-100 text-white font-bold py-4 px-8 rounded-xl transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50 overflow-hidden ${isGeorgian ? 'text-base leading-[1.6]' : 'text-lg'}`}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>

              {isSubmitting ? (
                <span className="relative flex items-center justify-center gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  </motion.div>
                  {t("contactForm.SENDING")}
                </span>
              ) : (
                <span className="relative flex items-center justify-center gap-2">
                  {t("contactForm.SUBMIT_BUTTON")}
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              )}
            </motion.button>
          </motion.div>

          {/* Result Message */}
          {result && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`relative z-10 px-6 py-4 rounded-xl text-center font-semibold flex items-center justify-center gap-3 ${
                result.includes("success") ||
                result.includes("Thank you") ||
                result.includes("გმადლობთ")
                  ? "bg-green-500/10 border-2 border-green-500/50 text-green-400"
                  : result.includes("Sending") || result.includes("იგზავნება")
                  ? "bg-brand-primary/10 border-2 border-brand-primary/50 text-brand-primary"
                  : "bg-red-500/10 border-2 border-red-500/50 text-red-400"
              }`}
            >
              {(result.includes("success") ||
                result.includes("Thank you") ||
                result.includes("გმადლობთ")) && (
                <CheckCircle2 className="w-6 h-6" />
              )}
              {(result.includes("error") || result.includes("შეცდომა")) && (
                <AlertCircle className="w-6 h-6" />
              )}
              {result}
            </motion.div>
          )}

          {/* Privacy Text */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`relative z-10 text-gray-500 text-center flex items-center justify-center gap-2 ${isGeorgian ? 'text-xs leading-[1.6]' : 'text-xs'}`}
          >
            <Shield className="w-4 h-4" />
            {t("contactForm.PRIVACY_TEXT")}
          </motion.p>
        </form>
        </FadeInUp>
      </div>
    </section>
  );
});
