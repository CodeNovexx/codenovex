import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface LoadingProps {
  variant?: "spinner" | "skeleton";
}

const Loading = ({ variant = "spinner" }: LoadingProps) => {
  const { t } = useTranslation();
  
  if (variant === "skeleton") {
    return (
      <div className="min-h-screen bg-black">
        {/* Header Skeleton */}
        <div className="py-6 px-5 md:px-7 lg:px-9">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="h-12 w-32 bg-gray-800 rounded-lg animate-pulse" />
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-10 w-20 bg-gray-800 rounded-lg animate-pulse" />
              ))}
            </div>
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="max-w-7xl mx-auto px-5 md:px-7 lg:px-9 py-20">
          {/* Title Skeleton */}
          <div className="mb-16 text-center">
            <div className="h-12 w-96 bg-gray-800 rounded-lg animate-pulse mx-auto mb-4" />
            <div className="h-6 w-[600px] bg-gray-800 rounded-lg animate-pulse mx-auto" />
          </div>

          {/* Cards Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8"
              >
                <div className="w-24 h-24 bg-gray-800 rounded-2xl animate-pulse mb-6" />
                <div className="h-8 w-32 bg-gray-800 rounded-lg animate-pulse mb-4" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-800 rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-gray-800 rounded animate-pulse" />
                  <div className="h-4 w-4/6 bg-gray-800 rounded animate-pulse" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm">
      <motion.div 
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated spinner with gradient */}
        <div className="relative mb-6">
          <motion.div
            className="w-20 h-20 rounded-full border-4 border-gray-700"
            initial={{ rotate: 0 }}
          />
          <motion.div
            className="absolute inset-0 w-20 h-20 rounded-full border-4 border-t-brand-primary border-r-purple-600 border-b-transparent border-l-transparent"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute inset-2 w-16 h-16 rounded-full bg-gradient-to-r from-brand-primary/20 to-purple-600/20 blur-lg"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Loading text with wave animation */}
        <div className="flex gap-3 items-center">
          <p className="text-white text-lg font-semibold">{t("loading.LOADING")}</p>
          <div id="wave">
            <span className="dot"></span>
            <span className="second_dot"></span>
            <span className="third_dot"></span>
          </div>
        </div>

        {/* Progress bar */}
        <motion.div 
          className="mt-6 w-48 h-1 bg-gray-700 rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-brand-primary to-purple-600"
            animate={{
              x: [-200, 200],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loading;
