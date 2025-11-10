import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import BlogHeader from "../components/BlogHeader";
import { Footer } from "../components/Footer";

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       navigate(`/?search=${encodeURIComponent(searchQuery)}`);
//     }
//   };

  const suggestedPages = [
    { label: t("notFound.pages.home"), path: "/", icon: Home },
    { label: t("notFound.pages.blog"), path: "/blog", icon: Sparkles },
    { label: t("notFound.pages.services"), path: "/#services", icon: Sparkles },
    { label: t("notFound.pages.contact"), path: "/#contact", icon: Sparkles },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <BlogHeader />

      <div className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-20 left-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* 404 Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2,
            }}
            className="mb-8"
          >
            <div className="text-[150px] md:text-[200px] font-bold leading-none">
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="bg-gradient-to-r from-brand-primary via-purple-600 to-cyan-500 bg-clip-text text-transparent bg-[length:200%_auto]"
              >
                404
              </motion.span>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("notFound.title")}
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              {t("notFound.subtitle")}
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl mx-auto mb-12"
          >
            {/* <div className="relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-brand-primary transition-colors duration-300" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("notFound.searchPlaceholder")}
                className="w-full pl-14 pr-6 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30 transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-brand-primary to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-brand-primary/50 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                {t("notFound.searchButton")}
              </button>
            </div> */}
          </motion.form>

          {/* Suggested Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-gray-500 text-sm mb-6">{t("notFound.suggestedPages")}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {suggestedPages.map((page, index) => {
                const Icon = page.icon;
                return (
                  <motion.button
                    key={page.path}
                    onClick={() => navigate(page.path)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-strong px-6 py-3 rounded-xl border border-white/10 hover:border-brand-primary/50 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <Icon className="w-4 h-4 text-brand-primary group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-semibold">{page.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Back Button */}
          <motion.button
            onClick={() => navigate(-1)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 inline-flex items-center gap-2 text-gray-400 hover:text-brand-primary transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>{t("notFound.goBack")}</span>
          </motion.button>

          {/* Floating Elements */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-brand-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
