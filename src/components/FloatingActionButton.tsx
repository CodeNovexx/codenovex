import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Mail, Phone, X } from "lucide-react";

export const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:info@codenovex.ge",
      color: "from-blue-500 to-cyan-500",
      hoverColor: "hover:shadow-blue-500/50",
    },
    {
      icon: Phone,
      label: "Call",
      href: "tel:+995555050001",
      color: "from-green-500 to-emerald-500",
      hoverColor: "hover:shadow-green-500/50",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/995555050001",
      color: "from-purple-500 to-pink-500",
      hoverColor: "hover:shadow-purple-500/50",
    },
  ];

  return (
    <div className="fixed bottom-24 right-8 z-50 flex flex-col items-end gap-4">
      {/* Action buttons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ staggerChildren: 0.1 }}
            className="flex flex-col gap-3"
          >
            {actions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.a
                  key={index}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.8 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group flex items-center gap-3 bg-gradient-to-r ${action.color} text-white px-4 py-3 rounded-full shadow-2xl ${action.hoverColor} hover:shadow-2xl transition-all duration-300`}
                >
                  <span className="text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {action.label}
                  </span>
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`relative w-16 h-16 rounded-full bg-gradient-to-r from-brand-primary to-purple-600 shadow-2xl shadow-brand-primary/40 flex items-center justify-center text-white transition-all duration-300 ${
          isOpen ? "rotate-45" : ""
        }`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse animation ring */}
        <span className="absolute inset-0 rounded-full bg-brand-primary/50 animate-ping" />
      </motion.button>
    </div>
  );
};
