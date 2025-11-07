import React, { useState } from "react";
import { useTranslation } from "react-i18next";

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

        <form
          onSubmit={onSubmit}
          className="relative bg-gray-900/50 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-12 space-y-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 mb-16"
        >
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-purple-600/5 rounded-3xl pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label
                htmlFor="name"
                className={`block mb-3 font-semibold text-gray-300 group-focus-within:text-brand-primary transition-colors ${isGeorgian ? 'text-sm leading-[1.6]' : 'text-sm'}`}
              >
                {t("contactForm.NAME_LABEL")}{" "}
                <span className="text-brand-primary">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full px-5 py-4 bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-white rounded-xl focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:bg-gray-800 transition-all duration-300 placeholder-gray-500 hover:border-brand-primary/50 ${isGeorgian ? 'text-base leading-[1.6]' : 'text-base'}`}
                  placeholder={t("contactForm.NAME_PLACEHOLDER")}
                  required
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-primary/0 via-brand-primary/5 to-brand-primary/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            <div className="group">
              <label
                htmlFor="company"
                className={`block mb-3 font-semibold text-gray-300 group-focus-within:text-brand-primary transition-colors ${isGeorgian ? 'text-sm leading-[1.6]' : 'text-sm'}`}
              >
                {t("contactForm.COMPANY_LABEL")}{" "}
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="company"
                  name="company"
                  className={`w-full px-5 py-4 bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-white rounded-xl focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:bg-gray-800 transition-all duration-300 placeholder-gray-500 hover:border-brand-primary/50 ${isGeorgian ? 'text-base leading-[1.6]' : 'text-base'}`}
                  placeholder={t("contactForm.COMPANY_PLACEHOLDER")}
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-primary/0 via-brand-primary/5 to-brand-primary/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          </div>

          <div className="relative z-10 group">
            <label
              htmlFor="email"
              className={`block mb-3 font-semibold text-gray-300 group-focus-within:text-brand-primary transition-colors ${isGeorgian ? 'text-sm leading-[1.6]' : 'text-sm'}`}
            >
              {t("contactForm.EMAIL_LABEL")}{" "}
              <span className="text-brand-primary">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full px-5 py-4 bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-white rounded-xl focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:bg-gray-800 transition-all duration-300 placeholder-gray-500 hover:border-brand-primary/50 ${isGeorgian ? 'text-base leading-[1.6]' : 'text-base'}`}
                placeholder={t("contactForm.EMAIL_PLACEHOLDER")}
                required
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-primary/0 via-brand-primary/5 to-brand-primary/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>

          <div className="relative z-10 group">
            <label
              htmlFor="message"
              className={`block mb-3 font-semibold text-gray-300 group-focus-within:text-brand-primary transition-colors ${isGeorgian ? 'text-sm leading-[1.6]' : 'text-sm'}`}
            >
              {t("contactForm.MESSAGE_LABEL")}{" "}
              <span className="text-brand-primary">*</span>
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={6}
                className={`w-full px-5 py-4 bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-white rounded-xl focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:bg-gray-800 transition-all duration-300 placeholder-gray-500 hover:border-brand-primary/50 resize-none ${isGeorgian ? 'text-base leading-[1.6]' : 'text-base'}`}
                placeholder={t("contactForm.MESSAGE_PLACEHOLDER")}
                required
              ></textarea>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-primary/0 via-brand-primary/5 to-brand-primary/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>

          <div className="relative z-10 group">
            <label
              htmlFor="source"
              className={`block mb-3 font-semibold text-gray-300 group-focus-within:text-brand-primary transition-colors ${isGeorgian ? 'text-sm leading-[1.6]' : 'text-sm'}`}
            >
              {t("contactForm.SOURCE_LABEL")}
            </label>
            <div className="relative">
              <select
                id="source"
                name="source"
                className={`w-full px-5 py-4 bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-white rounded-xl focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:bg-gray-800 transition-all duration-300 hover:border-brand-primary/50 appearance-none cursor-pointer ${isGeorgian ? 'text-base leading-[1.6]' : 'text-base'}`}
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
              {/* Custom dropdown arrow */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-primary/0 via-brand-primary/5 to-brand-primary/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>

          <div className="relative z-10">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`group relative w-full bg-gradient-to-r from-brand-primary to-cyan-500 hover:from-brand-hover hover:to-cyan-600 text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-2xl shadow-brand-primary/40 hover:shadow-brand-primary/60 overflow-hidden ${isGeorgian ? 'text-base leading-[1.6]' : 'text-base'}`}
            >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>

            {isSubmitting ? (
              <span className="relative flex items-center justify-center gap-3">
                <svg
                  className="animate-spin h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                {t("contactForm.SENDING")}
              </span>
            ) : (
              <span className="relative flex items-center justify-center gap-2">
                {t("contactForm.SUBMIT_BUTTON")}
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            )}
            </button>
          </div>

          {result && (
            <div
              className={`px-6 py-4 rounded-xl text-center font-semibold animate-fadeIn flex items-center justify-center gap-3 ${
                result.includes("success") ||
                result.includes("Thank you") ||
                result.includes("გმადლობთ")
                  ? "bg-green-900/30 border border-green-500 text-green-400"
                  : result.includes("Sending") || result.includes("იგზავნება")
                  ? "bg-brand-primary/20 border border-brand-primary text-brand-primary"
                  : "bg-red-900/30 border border-red-500 text-red-400"
              }`}
            >
              {(result.includes("success") ||
                result.includes("Thank you") ||
                result.includes("გმადლობთ")) && (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
              {(result.includes("error") || result.includes("შეცდომა")) && (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
              {result}
            </div>
          )}

          <p className={`text-gray-500 text-center flex items-center justify-center gap-2 ${isGeorgian ? 'text-xs leading-[1.6]' : 'text-xs'}`}>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            {t("contactForm.PRIVACY_TEXT")}
          </p>
        </form>
      </div>
    </section>
  );
});
