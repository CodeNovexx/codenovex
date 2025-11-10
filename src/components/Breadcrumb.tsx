import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          to="/"
          className="flex items-center gap-1 text-gray-400 hover:text-brand-primary transition-colors duration-300 group"
        >
          <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
        </Link>
      </motion.div>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center gap-2"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
            {item.href && !isLast ? (
              <Link
                to={item.href}
                className="text-gray-400 hover:text-brand-primary transition-colors duration-300 hover:underline decoration-brand-primary/50 underline-offset-4"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={`${
                  isLast
                    ? "text-white font-semibold"
                    : "text-gray-400"
                }`}
              >
                {item.label}
              </span>
            )}
          </motion.div>
        );
      })}
    </nav>
  );
};
