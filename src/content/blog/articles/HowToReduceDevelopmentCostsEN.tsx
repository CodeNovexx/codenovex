import React from 'react';
import { Link } from 'react-router-dom';

export const HowToReduceDevelopmentCosts: React.FC = () => {
  const techStack = [
    { category: "Frontend", tech: "React + TypeScript + Tailwind CSS" },
    { category: "Backend", tech: "Node.js + Express or Next.js API routes" },
    { category: "Database", tech: "PostgreSQL or MongoDB" },
    { category: "Deployment", tech: "Vercel or AWS" }
  ];

  const caseStudyPoints = [
    "2-week sprints with client demos",
    "MVP-first approach",
    "Automated testing from day 1"
  ];

  const manualTesting = [
    "3 days per feature",
    "Prone to human error",
    "$5,000+ per release cycle"
  ];

  const automatedTesting = [
    "10 minutes per feature",
    "Consistent and reliable",
    "$500 per release cycle"
  ];

  return (
    <article className="text-gray-300 leading-relaxed">
      {/* Hero Image */}
      <div className="mb-12">
        <img 
          src="/blog/cost-reduction.png" 
          alt="Cost Reduction Strategy" 
          className="w-full h-96 object-cover rounded-3xl shadow-2xl shadow-black/50"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
        How to Reduce Software Development Costs by 40%
      </h1>

      {/* Introduction */}
      <div className="mb-12">
        <p className="text-xl leading-relaxed">
          In today's competitive market, reducing development costs while maintaining quality is crucial for business success. 
          Based on our experience working with 50+ clients, we've identified proven strategies that can cut your costs by up to 40%.
        </p>
      </div>

      {/* Section 1 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30 flex items-center gap-3">
          <span className="text-3xl">📋</span>
          1. Start with Clear Requirements
        </h2>

        <p className="mb-8">
          The biggest cost driver in software development is scope creep and unclear requirements. According to our data, 
          projects with well-defined requirements cost 35% less than those without.
        </p>

        <div className="bg-gradient-to-br from-brand-primary/20 to-purple-600/10 border border-brand-primary/30 p-8 rounded-2xl">
          <p className="text-brand-primary font-semibold mb-3 flex items-center gap-3 text-lg">
            <span className="text-2xl">💡</span>
            Pro Tip:
          </p>
          <p>
            Invest 2-3 weeks in detailed requirements gathering and wireframing. This upfront investment can save you 
            months of rework and thousands in development costs.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30 flex items-center gap-3">
          <span className="text-3xl">⚙️</span>
          2. Choose the Right Technology Stack
        </h2>

        <p className="mb-8">
          Not all technologies are created equal. Choosing mature, well-documented frameworks can reduce development time by 40%.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-6">
          Our Recommended Stack for Cost Efficiency:
        </h3>

        <div className="space-y-3">
          {techStack.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-brand-primary text-xl font-bold mt-1">✓</span>
              <span>
                <strong className="text-white">{item.category}:</strong> {item.tech}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 */}
<section className="mb-12">
  <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30 flex items-center gap-3">
    <span className="text-3xl">🔄</span>
    3. Implement Agile Development
  </h2>

  <p className="mb-8">
    Agile methodology allows for iterative development and early feedback, reducing the risk of building the wrong features.
  </p>

  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8">
    <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
      <span className="text-2xl">📊</span>
      Our Approach in Practice: A Hypothetical Case Study
    </h4>
    <p className="mb-6">
      Imagine a fintech startup approaches us with a $200,000 budget for a complex platform. How would CodeNovex act to maximize efficiency and reduce costs? Our strategy would be based on three core principles:
    </p>
    <div className="space-y-3 mb-6">
      {caseStudyPoints.map((point, index) => (
        <div key={index} className="flex items-start gap-3">
          <span className="text-green-400 font-bold mt-1">→</span>
          <span>{point}</span>
        </div>
      ))}
    </div>
    <p className="text-brand-primary font-semibold text-lg bg-brand-primary/10 p-4 rounded-xl border border-brand-primary/30">
      Potential Result: By applying this methodology, it's possible to reduce the project budget by up to 40% and deliver within 4-6 months without compromising quality.
    </p>
  </div>
</section>

      {/* Section 4 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30 flex items-center gap-3">
          <span className="text-3xl">🔧</span>
          4. Leverage Code Reusability
        </h2>

        <p className="mb-8">
          Building reusable components and libraries can reduce development time by 30% on subsequent features.
        </p>

        <div className="bg-gray-800/50 rounded-2xl p-8 overflow-x-auto border border-gray-700/50">
          <p className="text-gray-400 mb-4 font-semibold">Example: Reusable Button Component</p>
          <pre className="bg-black/50 p-6 rounded-xl text-sm border border-gray-700/30">
            <code className="text-green-400">
{`// Button.tsx - Reusable across entire app
interface ButtonProps {
  variant: 'primary' | 'secondary';
  onClick: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant, onClick, children 
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold";
  const variantStyles = variant === 'primary' 
    ? "bg-blue-600 hover:bg-blue-700" 
    : "bg-gray-600 hover:bg-gray-700";
  
  return (
    <button 
      className={\`\${baseStyles} \${variantStyles}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};`}
            </code>
          </pre>
        </div>
      </section>

      {/* Section 5 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30 flex items-center gap-3">
          <span className="text-3xl">⚡</span>
          5. Automate Testing and Deployment
        </h2>

        <p className="mb-8">
          Automated testing catches bugs early, when they're cheapest to fix. Manual testing of a complex feature can take 
          2-3 days, while automated tests run in minutes.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-6">
          Cost Comparison:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-500/30 rounded-2xl p-8">
            <h4 className="text-xl font-semibold text-red-400 mb-6 flex items-center gap-3">
              <span className="text-2xl">❌</span>
              Manual Testing
            </h4>
            <div className="space-y-3">
              {manualTesting.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-1">→</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-500/30 rounded-2xl p-8">
            <h4 className="text-xl font-semibold text-green-400 mb-6 flex items-center gap-3">
              <span className="text-2xl">✅</span>
              Automated Testing
            </h4>
            <div className="space-y-3">
              {automatedTesting.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-1">→</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
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
          Reducing development costs doesn't mean cutting corners. By implementing these strategies, you can build 
          high-quality software faster and more efficiently.
        </p>
      </section>

      {/* CTA Section */}
      <div className="mt-16 p-10 bg-gradient-to-r from-brand-primary/10 via-purple-600/10 to-brand-primary/10 border-2 border-brand-primary/30 rounded-3xl text-center transform hover:scale-[1.02] transition-all duration-300 shadow-2xl shadow-brand-primary/20">
        <h3 className="text-3xl font-bold text-white mb-4">
          Ready to Optimize Your Development Costs?
        </h3>
        <p className="mb-8 max-w-2xl mx-auto text-lg">
          Let's discuss your project and show you exactly how we can reduce your costs by 40% without compromising quality.
        </p>
        <Link
          to="/#contact"
          className="inline-block bg-gradient-to-r from-brand-primary to-purple-600 hover:from-brand-hover hover:to-purple-700 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-brand-primary/50"
        >
          Schedule a Free Consultation
        </Link>
      </div>
    </article>
  );
};

export default HowToReduceDevelopmentCosts;
