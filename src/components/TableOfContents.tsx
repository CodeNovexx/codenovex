import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { List } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export const TableOfContents = () => {
  const { t } = useTranslation();
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);

  useEffect(() => {
    // Wait for article to be rendered
    const checkArticle = () => {
      const article = document.querySelector("article");
      if (!article) {
        setTimeout(checkArticle, 100);
        return;
      }

      const elements = article.querySelectorAll("h2, h3");
      const items: TocItem[] = Array.from(elements).map((element, index) => {
        const id = element.id || `heading-${index}`;
        if (!element.id) {
          element.id = id;
        }

        return {
          id,
          text: element.textContent || "",
          level: parseInt(element.tagName[1]),
        };
      });

      setHeadings(items);
    };

    checkArticle();
  }, []);

  useEffect(() => {
    // Track active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -66% 0px",
      }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (headings.length === 0) return null;

  return (
    <motion.aside
      style={{ opacity }}
      className="hidden xl:block fixed left-8 top-1/2 -translate-y-1/2 w-64 max-h-[70vh] overflow-y-auto custom-scrollbar"
    >
      <div className="glass-strong rounded-2xl p-6 border border-white/10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
          <div className="w-8 h-8 rounded-lg bg-brand-primary/20 flex items-center justify-center">
            <List className="w-4 h-4 text-brand-primary" />
          </div>
          <h3 className="font-bold text-white">{t("toc.title")}</h3>
        </div>

        {/* TOC Items */}
        <nav className="space-y-2">
          {headings.map((heading, index) => {
            const isActive = activeId === heading.id;
            const isH3 = heading.level === 3;

            return (
              <motion.button
                key={heading.id}
                onClick={() => scrollToHeading(heading.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`
                  w-full text-left py-2 px-3 rounded-lg transition-all duration-300 relative group
                  ${isH3 ? "pl-6 text-sm" : "text-base"}
                  ${
                    isActive
                      ? "text-brand-primary font-semibold bg-brand-primary/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-brand-primary to-purple-600 rounded-r"
                  />
                )}

                {/* Text */}
                <span className="line-clamp-2">{heading.text}</span>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-brand-primary/0 via-brand-primary/5 to-brand-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.button>
            );
          })}
        </nav>

        {/* Progress indicator */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
            <span>{t("toc.readingProgress")}</span>
            <span>
              {headings.findIndex((h) => h.id === activeId) + 1} /{" "}
              {headings.length}
            </span>
          </div>
          <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-primary to-purple-600"
              initial={{ width: 0 }}
              animate={{
                width: `${
                  ((headings.findIndex((h) => h.id === activeId) + 1) /
                    headings.length) *
                  100
                }%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </motion.aside>
  );
};
