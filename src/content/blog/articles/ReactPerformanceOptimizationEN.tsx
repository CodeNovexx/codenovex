import React from "react";
import { Link } from "react-router-dom";

const ReactPerformanceOptimizationEN: React.FC = () => {
  const keyTakeaways = [
    "Reduce initial load time by 60% with code splitting and lazy loading",
    "Eliminate unnecessary re-renders using React.memo and useMemo",
    "Optimize bundle size by analyzing and removing dead code",
    "Implement concurrent rendering for smoother user experiences",
    "Monitor real-world performance with Web Vitals",
  ];

  const bundleBloaculprits = [
    {
      name: "Moment.js",
      solution: "Replace with date-fns or day.js (save ~230KB)",
    },
    {
      name: "Lodash",
      solution:
        "Import specific functions: import debounce from 'lodash/debounce'",
    },
    {
      name: "Material-UI",
      solution: "Use tree-shaking: import Button from '@mui/material/Button'",
    },
    { name: "Unused dependencies", solution: "Run npm-check to find them" },
  ];

  const targetMetrics = [
    { name: "LCP (Largest Contentful Paint)", value: "< 2.5s" },
    { name: "FID (First Input Delay)", value: "< 100ms" },
    { name: "CLS (Cumulative Layout Shift)", value: "< 0.1" },
    { name: "FCP (First Contentful Paint)", value: "< 1.8s" },
    { name: "TTI (Time to Interactive)", value: "< 3.8s" },
  ];

  const checklist = [
    "Implement route-based code splitting",
    "Add React.memo to expensive components",
    "Use useMemo for expensive calculations",
    "Analyze bundle size and remove bloat",
    "Implement useTransition for heavy updates",
    "Virtualize long lists (1000+ items)",
    "Lazy load images and heavy components",
    "Set up Web Vitals monitoring",
    "Optimize images (WebP/AVIF format)",
    "Test on slow 3G connection",
  ];

  return (
    <article className="text-gray-300 leading-relaxed">
      {/* Introduction */}
      <div className="mb-12">
        <p className="text-xl leading-relaxed">
          In 2025, React continues to dominate the frontend landscape, but with
          great power comes the responsibility of optimization. Users expect
          lightning-fast interactions, and even a 100ms delay can impact
          conversion rates. This comprehensive guide covers advanced React
          performance optimization techniques that will make your applications
          blazing fast.
        </p>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-br from-brand-primary/20 to-purple-600/10 border border-brand-primary/30 p-8 mb-12 rounded-2xl">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="text-3xl">💡</span>
          Key Takeaways
        </h3>
        <div className="space-y-3">
          {keyTakeaways.map((takeaway, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-green-400 font-bold mt-1">✓</span>
              <span className="text-gray-300">{takeaway}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 1: Code Splitting & Lazy Loading */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30 flex items-center gap-3">
          <span className="text-3xl">🚀</span>
          1. Code Splitting & Lazy Loading
        </h2>

        <p className="mb-8">
          The first rule of performance optimization: don't load what you don't
          need. Code splitting allows you to break your application into smaller
          chunks that load on demand.
        </p>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 mb-8 hover:border-brand-primary/50 transition-all duration-300">
          <h4 className="text-xl font-semibold text-white mb-4">
            Route-Based Code Splitting
          </h4>
          <pre className="bg-black/50 p-6 rounded-xl overflow-x-auto text-sm border border-gray-700/30">
            <code className="text-green-400">{`// Before: Everything loads at once
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

// After: Load routes on demand
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}`}</code>
          </pre>
          <p className="text-amber-400 mt-4 text-sm font-semibold">
            <strong>Result:</strong> Initial bundle size reduced by 40-60%,
            faster Time to Interactive (TTI)
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-brand-primary/50 transition-all duration-300">
          <h4 className="text-xl font-semibold text-white mb-4">
            Component-Level Lazy Loading
          </h4>
          <pre className="bg-black/50 p-6 rounded-xl overflow-x-auto text-sm border border-gray-700/30">
            <code className="text-green-400">{`// Lazy load heavy components
const HeavyChart = lazy(() => import('./components/HeavyChart'));
const VideoPlayer = lazy(() => import('./components/VideoPlayer'));

function Dashboard() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div>
      <button onClick={() => setShowChart(true)}>
        Show Analytics
      </button>
      
      {showChart && (
        <Suspense fallback={<ChartSkeleton />}>
          <HeavyChart data={analyticsData} />
        </Suspense>
      )}
    </div>
  );
}`}</code>
          </pre>
        </div>
      </section>

      {/* Section 2: Memoization Techniques */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30 flex items-center gap-3">
          <span className="text-3xl">⚡</span>
          2. Eliminate Unnecessary Re-renders
        </h2>

        <p className="mb-8">
          React's re-rendering can be expensive. Use React.memo, useMemo, and
          useCallback strategically to prevent unnecessary component updates.
        </p>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 mb-8 hover:border-brand-primary/50 transition-all duration-300">
          <h4 className="text-xl font-semibold text-white mb-4">
            React.memo for Component Memoization
          </h4>
          <pre className="bg-black/50 p-6 rounded-xl overflow-x-auto text-sm border border-gray-700/30">
            <code className="text-green-400">{`// Without memo: Re-renders every time parent updates
function UserCard({ user }) {
  console.log('UserCard rendered');
  return <div>{user.name}</div>;
}

// With memo: Only re-renders when 'user' prop changes
const UserCard = React.memo(function UserCard({ user }) {
  console.log('UserCard rendered');
  return <div>{user.name}</div>;
});

// Advanced: Custom comparison function
const UserCard = React.memo(
  function UserCard({ user }) {
    return <div>{user.name}</div>;
  },
  (prevProps, nextProps) => {
    // Return true if props are equal (skip re-render)
    return prevProps.user.id === nextProps.user.id;
  }
);`}</code>
          </pre>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 mb-8 hover:border-brand-primary/50 transition-all duration-300">
          <h4 className="text-xl font-semibold text-white mb-4">
            useMemo for Expensive Calculations
          </h4>
          <pre className="bg-black/50 p-6 rounded-xl overflow-x-auto text-sm border border-gray-700/30">
            <code className="text-green-400">{`function ProductList({ products, filters }) {
  // ❌ Bad: Filters recalculated on every render
  const filteredProducts = products.filter(p => 
    p.category === filters.category && p.price <= filters.maxPrice
  );

  // ✅ Good: Only recalculate when dependencies change
  const filteredProducts = useMemo(() => {
    return products.filter(p => 
      p.category === filters.category && p.price <= filters.maxPrice
    );
  }, [products, filters]);

  return <div>{/* Render products */}</div>;
}`}</code>
          </pre>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-brand-primary/50 transition-all duration-300">
          <h4 className="text-xl font-semibold text-white mb-4">
            useCallback for Function Stability
          </h4>
          <pre className="bg-black/50 p-6 rounded-xl overflow-x-auto text-sm border border-gray-700/30">
            <code className="text-green-400">{`function SearchBar({ onSearch }) {
  // ❌ Bad: New function created on every render
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  // ✅ Good: Function reference stays stable
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    onSearch(searchTerm);
  }, [searchTerm, onSearch]);

  return <form onSubmit={handleSubmit}>...</form>;
}`}</code>
          </pre>
        </div>
      </section>

      {/* Section 3: Bundle Size Optimization */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30 flex items-center gap-3">
          <span className="text-3xl">📦</span>
          3. Bundle Size Optimization
        </h2>

        <p className="mb-8">
          A smaller bundle means faster downloads. Analyze your bundle and
          eliminate bloat.
        </p>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 mb-8 hover:border-brand-primary/50 transition-all duration-300">
          <h4 className="text-xl font-semibold text-white mb-4">
            Analyze Your Bundle
          </h4>
          <pre className="bg-black/50 p-6 rounded-xl overflow-x-auto text-sm border border-gray-700/30">
            <code className="text-green-400">{`# Install bundle analyzer
npm install --save-dev webpack-bundle-analyzer

# Add to vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true })
  ]
});

# Build and analyze
npm run build`}</code>
          </pre>
        </div>

        <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 border border-amber-500/30 p-8 mb-8 rounded-2xl">
          <h4 className="text-xl font-semibold text-amber-300 mb-6 flex items-center gap-3">
            <span className="text-2xl">⚠️</span>
            Common Bundle Bloat Culprits
          </h4>
          <div className="space-y-4">
            {bundleBloaculprits.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-1">→</span>
                  <div>
                    <span className="text-white font-semibold">
                      {item.name}:
                    </span>
                    <span className="text-gray-300 ml-2">{item.solution}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Concurrent Rendering */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30 flex items-center gap-3">
          <span className="text-3xl">🔄</span>
          4. Concurrent Rendering (React 18+)
        </h2>

        <p className="mb-8">
          React 18's concurrent features allow your app to remain responsive
          during heavy updates.
        </p>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 mb-8 hover:border-brand-primary/50 transition-all duration-300">
          <h4 className="text-xl font-semibold text-white mb-4">
            useTransition for Non-Urgent Updates
          </h4>
          <pre className="bg-black/50 p-6 rounded-xl overflow-x-auto text-sm border border-gray-700/30">
            <code className="text-green-400">{`import { useState, useTransition } from 'react';

function SearchResults() {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value); // Urgent: Update input immediately
    
    startTransition(() => {
      // Non-urgent: Filter 10,000 items
      setFilteredResults(filterItems(value));
    });
  };

  return (
    <div>
      <input value={query} onChange={handleChange} />
      {isPending && <Spinner />}
      <Results items={filteredResults} />
    </div>
  );
}`}</code>
          </pre>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-brand-primary/50 transition-all duration-300">
          <h4 className="text-xl font-semibold text-white mb-4">
            useDeferredValue for Debouncing
          </h4>
          <pre className="bg-black/50 p-6 rounded-xl overflow-x-auto text-sm border border-gray-700/30">
            <code className="text-green-400">{`import { useState, useDeferredValue } from 'react';

function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const deferredSearchTerm = useDeferredValue(searchTerm);

  // This list only updates when system is idle
  const results = useMemo(() => 
    searchProducts(deferredSearchTerm),
    [deferredSearchTerm]
  );

  return (
    <div>
      <input 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <ProductList products={results} />
    </div>
  );
}`}</code>
          </pre>
        </div>
      </section>

      {/* Section 5: Virtualization */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30 flex items-center gap-3">
          <span className="text-3xl">📊</span>
          5. Virtualize Long Lists
        </h2>

        <p className="mb-8">
          Rendering 10,000 DOM nodes kills performance. Virtualization only
          renders visible items.
        </p>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-brand-primary/50 transition-all duration-300">
          <h4 className="text-xl font-semibold text-white mb-4">
            Using react-window
          </h4>
          <pre className="bg-black/50 p-6 rounded-xl overflow-x-auto text-sm border border-gray-700/30">
            <code className="text-green-400">{`import { FixedSizeList } from 'react-window';

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  );

  return (
    <FixedSizeList
      height={600}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {Row}
    </FixedSizeList>
  );
}

// Before: 10,000 DOM nodes (slow)
// After: ~20 DOM nodes (fast)`}</code>
          </pre>
          <p className="text-amber-400 mt-4 text-sm font-semibold">
            <strong>Performance gain:</strong> 10,000 items render in ~50ms
            instead of 5000ms
          </p>
        </div>
      </section>

      {/* Section 6: Image Optimization */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30 flex items-center gap-3">
          <span className="text-3xl">🖼️</span>
          6. Optimize Images & Assets
        </h2>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-brand-primary/50 transition-all duration-300">
          <h4 className="text-xl font-semibold text-white mb-4">
            Modern Image Formats & Lazy Loading
          </h4>
          <pre className="bg-black/50 p-6 rounded-xl overflow-x-auto text-sm border border-gray-700/30">
            <code className="text-green-400">{`// Use next-gen formats (WebP, AVIF)
<picture>
  <source srcSet="image.avif" type="image/avif" />
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Fallback" loading="lazy" />
</picture>

// React component
import { LazyLoadImage } from 'react-lazy-load-image-component';

function ProductImage({ src, alt }) {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      effect="blur"
      placeholderSrc="thumbnail.jpg"
    />
  );
}`}</code>
          </pre>
        </div>
      </section>

      {/* Section 7: Monitoring */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30 flex items-center gap-3">
          <span className="text-3xl">📈</span>
          7. Monitor Real-World Performance
        </h2>

        <p className="mb-8">
          Optimization without measurement is guesswork. Track Core Web Vitals
          in production.
        </p>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 mb-8 hover:border-brand-primary/50 transition-all duration-300">
          <h4 className="text-xl font-semibold text-white mb-4">
            Implement Web Vitals Tracking
          </h4>
          <pre className="bg-black/50 p-6 rounded-xl overflow-x-auto text-sm border border-gray-700/30">
            <code className="text-green-400">{`import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics({ name, value, id }) {
  // Send to your analytics service
  gtag('event', name, {
    value: Math.round(value),
    event_label: id,
    non_interaction: true,
  });
}

// Track all Core Web Vitals
getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);`}</code>
          </pre>
        </div>

        <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/10 border border-blue-500/30 p-8 rounded-2xl">
          <h4 className="text-xl font-semibold text-blue-300 mb-6 flex items-center gap-3">
            <span className="text-2xl">🎯</span>
            Target Metrics (2025)
          </h4>
          <div className="space-y-3">
            {targetMetrics.map((metric, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-blue-400 font-bold">→</span>
                <span className="text-white font-semibold">{metric.name}:</span>
                <span className="text-green-400 font-mono">{metric.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Checklist */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30 flex items-center gap-3">
          <span className="text-3xl">✅</span>
          Performance Optimization Checklist
        </h2>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8">
          <div className="space-y-4">
            {checklist.map((item, index) => (
              <label
                key={index}
                className="flex items-start gap-4 cursor-pointer hover:text-white transition-colors duration-200"
              >
                <input
                  type="checkbox"
                  className="mt-1 w-5 h-5 rounded border-gray-600 text-brand-primary focus:ring-brand-primary focus:ring-2"
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30 flex items-center gap-3">
          <span className="text-3xl">🎓</span>
          Conclusion
        </h2>

        <p className="mb-6">
          React performance optimization in 2025 is about strategic
          implementation, not premature optimization. Start by measuring your
          current performance, identify bottlenecks, then apply these techniques
          where they'll have the most impact.
        </p>

        <p className="mb-6">
          Remember: A 1-second improvement in load time can increase conversions
          by 7%. The effort you put into performance optimization directly
          translates to better user experience and business results.
        </p>
      </section>

      {/* CTA Section */}
      <div className="mt-16 p-10 bg-gradient-to-r from-brand-primary/10 via-purple-600/10 to-brand-primary/10 border-2 border-brand-primary/30 rounded-3xl text-center transform hover:scale-[1.02] transition-all duration-300 shadow-2xl shadow-brand-primary/20">
        <h3 className="text-3xl font-bold text-white mb-4">
          Need Help Optimizing Your React Application?
        </h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
          Our team of React experts can audit your application, identify
          performance bottlenecks, and implement optimizations that deliver
          measurable results.
        </p>
        <Link
          to="/#contact"
          className="inline-block bg-gradient-to-r from-brand-primary to-purple-600 hover:from-brand-hover hover:to-purple-700 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-brand-primary/50"
        >
          Schedule a Performance Audit
        </Link>
      </div>
    </article>
  );
};

export default ReactPerformanceOptimizationEN;
