import React from 'react';
import { Link } from 'react-router-dom';

const ChoosingRightTechStackEN: React.FC = () => {
  const keyTakeaways = [
    "How to evaluate tech stacks based on your startup stage",
    "Comparison of popular frontend frameworks (React, Vue, Angular)",
    "Backend options: Node.js, Python, Go, and when to use each",
    "Database selection: SQL vs NoSQL decision framework",
    "Cloud providers: AWS vs Azure vs Google Cloud"
  ];

  const businessFactors = [
    "Time to market requirements",
    "Budget constraints",
    "Expected traffic & scale",
    "Team expertise",
    "Hiring market availability"
  ];

  const technicalFactors = [
    "Performance requirements",
    "Security needs",
    "Integration requirements",
    "Scalability projections",
    "Maintenance complexity"
  ];

  const reactBestFor = [
    "Complex, interactive UIs",
    "Large teams",
    "Mobile apps (React Native)",
    "Fast hiring needs"
  ];

  const reactChallenges = [
    "Rapid ecosystem changes",
    "SEO requires Next.js",
    "More boilerplate code"
  ];

  const vueBestFor = [
    "Small to medium projects",
    "Quick prototypes",
    "Teams new to frameworks",
    "Budget-conscious startups"
  ];

  const vueChallenges = [
    "Smaller ecosystem",
    "Fewer senior developers",
    "Less corporate adoption"
  ];

  const angularBestFor = [
    "Enterprise applications",
    "Large, structured teams",
    "Long-term projects",
    "TypeScript-first approach"
  ];

  const angularChallenges = [
    "Steep learning curve",
    "Verbose syntax",
    "Slower development speed"
  ];

  const sqlWhen = [
    "Complex relationships between data",
    "ACID compliance required (banking, e-commerce)",
    "Need complex queries and joins",
    "Data structure is well-defined and stable",
    "Strong consistency is critical"
  ];

  const nosqlWhen = [
    "Rapid iteration and schema changes",
    "Horizontal scaling is priority",
    "Unstructured or semi-structured data",
    "High write throughput needed",
    "Document-based data model fits naturally"
  ];

  const commonMistakes = [
    { title: "Choosing based on hype", detail: "Popular ≠ Right for your needs" },
    { title: "Over-engineering", detail: "Don't use microservices for an MVP" },
    { title: "Ignoring team expertise", detail: "Use what your team knows well" },
    { title: "Forgetting total cost", detail: "Consider hosting, dev time, and maintenance" }
  ];

  return (
    <article className="text-gray-300 leading-relaxed">
      {/* Introduction */}
      <div className="mb-12">
        <p className="text-xl leading-relaxed">
          Choosing the right technology stack is one of the most critical decisions for your startup. The wrong choice 
          can lead to technical debt, slow development, and costly rewrites. This guide will help you make an informed 
          decision based on your specific needs, budget, and growth plans.
        </p>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-br from-brand-primary/20 to-purple-600/10 border border-brand-primary/30 p-8 mb-12 rounded-2xl">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="text-3xl">💡</span>
          What You'll Learn
        </h3>
        <div className="space-y-3">
          {keyTakeaways.map((takeaway, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-green-400 font-bold mt-1">✓</span>
              <span>{takeaway}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 1: Evaluation Framework */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30 flex items-center gap-3">
          <span className="text-3xl">💼</span>
          1. Tech Stack Evaluation Framework
        </h2>
        
        <p className="mb-8">
          Before diving into specific technologies, consider these key factors:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-brand-primary/50 transition-all duration-300">
            <h4 className="text-xl font-semibold text-brand-primary mb-4">Business Factors</h4>
            <div className="space-y-2">
              {businessFactors.map((factor, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-brand-primary font-bold mt-1">→</span>
                  <span>{factor}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-brand-primary/50 transition-all duration-300">
            <h4 className="text-xl font-semibold text-brand-primary mb-4">Technical Factors</h4>
            <div className="space-y-2">
              {technicalFactors.map((factor, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-brand-primary font-bold mt-1">→</span>
                  <span>{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Frontend Frameworks */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30 flex items-center gap-3">
          <span className="text-3xl">⚙️</span>
          2. Frontend Framework Comparison
        </h2>
        
        <div className="space-y-8">
          {/* React */}
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <span className="text-4xl">⚛️</span>
              </div>
              <h3 className="text-3xl font-bold text-white m-0">React</h3>
            </div>
            <p className="mb-6 text-lg">
              The most popular choice with the largest ecosystem and job market.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-green-400 font-semibold mb-4 text-lg">✅ Best For</h5>
                <div className="space-y-2">
                  {reactBestFor.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-green-400 font-bold mt-1">→</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-red-400 font-semibold mb-4 text-lg">❌ Challenges</h5>
                <div className="space-y-2">
                  {reactChallenges.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-red-400 font-bold mt-1">→</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-blue-500/20">
              <p className="text-sm text-gray-400">
                <strong className="text-white">Market Share:</strong> 42.6% | <strong className="text-white">Avg Salary:</strong> $120k | <strong className="text-white">Learning Curve:</strong> Medium
              </p>
            </div>
          </div>

          {/* Vue */}
          <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-500/30 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center">
                <span className="text-4xl">🟢</span>
              </div>
              <h3 className="text-3xl font-bold text-white m-0">Vue.js</h3>
            </div>
            <p className="mb-6 text-lg">
              The progressive framework with gentle learning curve and excellent documentation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-green-400 font-semibold mb-4 text-lg">✅ Best For</h5>
                <div className="space-y-2">
                  {vueBestFor.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-green-400 font-bold mt-1">→</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-red-400 font-semibold mb-4 text-lg">❌ Challenges</h5>
                <div className="space-y-2">
                  {vueChallenges.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-red-400 font-bold mt-1">→</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-green-500/20">
              <p className="text-sm text-gray-400">
                <strong className="text-white">Market Share:</strong> 18.8% | <strong className="text-white">Avg Salary:</strong> $105k | <strong className="text-white">Learning Curve:</strong> Easy
              </p>
            </div>
          </div>

          {/* Angular */}
          <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-500/30 rounded-2xl p-8 hover:border-red-400/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center">
                <span className="text-4xl">🅰️</span>
              </div>
              <h3 className="text-3xl font-bold text-white m-0">Angular</h3>
            </div>
            <p className="mb-6 text-lg">
              The full-featured framework backed by Google, ideal for enterprise applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-green-400 font-semibold mb-4 text-lg">✅ Best For</h5>
                <div className="space-y-2">
                  {angularBestFor.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-green-400 font-bold mt-1">→</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-red-400 font-semibold mb-4 text-lg">❌ Challenges</h5>
                <div className="space-y-2">
                  {angularChallenges.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-red-400 font-bold mt-1">→</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-red-500/20">
              <p className="text-sm text-gray-400">
                <strong className="text-white">Market Share:</strong> 17.3% | <strong className="text-white">Avg Salary:</strong> $115k | <strong className="text-white">Learning Curve:</strong> Hard
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Backend Technologies */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30 flex items-center gap-3">
          <span className="text-3xl">🔧</span>
          3. Backend Technology Selection
        </h2>
        
        <div className="space-y-6">
          {/* Node.js */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-brand-primary/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">Node.js + Express</h3>
            <p className="mb-4 text-lg">
              <strong className="text-brand-primary">Best for:</strong> Real-time applications, APIs, microservices, full-stack JavaScript teams
            </p>
            <div className="bg-black/50 p-6 rounded-xl mb-4 border border-gray-700/30">
              <div className="space-y-2 text-sm">
                <div><span className="text-green-400 font-bold">✅ Use when:</span> Need real-time features, JavaScript everywhere, fast development</div>
                <div><span className="text-red-400 font-bold">❌ Avoid when:</span> CPU-intensive tasks, complex business logic, team prefers strong typing</div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              <strong className="text-white">Popular with:</strong> Netflix, LinkedIn, Uber | <strong className="text-white">Dev Cost:</strong> $ | <strong className="text-white">Performance:</strong> ⚡⚡⚡⚡
            </p>
          </div>

          {/* Python */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-brand-primary/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">Python + Django/FastAPI</h3>
            <p className="mb-4 text-lg">
              <strong className="text-brand-primary">Best for:</strong> AI/ML features, data-heavy applications, rapid prototyping, scientific computing
            </p>
            <div className="bg-black/50 p-6 rounded-xl mb-4 border border-gray-700/30">
              <div className="space-y-2 text-sm">
                <div><span className="text-green-400 font-bold">✅ Use when:</span> ML/AI features, data analysis, mature libraries needed, readable code priority</div>
                <div><span className="text-red-400 font-bold">❌ Avoid when:</span> High concurrency required, real-time features, mobile-first approach</div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              <strong className="text-white">Popular with:</strong> Instagram, Spotify, Dropbox | <strong className="text-white">Dev Cost:</strong> $ | <strong className="text-white">Performance:</strong> ⚡⚡⚡
            </p>
          </div>

          {/* Go */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-brand-primary/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">Go (Golang)</h3>
            <p className="mb-4 text-lg">
              <strong className="text-brand-primary">Best for:</strong> High-performance APIs, microservices, cloud infrastructure, DevOps tools
            </p>
            <div className="bg-black/50 p-6 rounded-xl mb-4 border border-gray-700/30">
              <div className="space-y-2 text-sm">
                <div><span className="text-green-400 font-bold">✅ Use when:</span> Need max performance, building microservices, handling massive concurrency</div>
                <div><span className="text-red-400 font-bold">❌ Avoid when:</span> Rapid prototyping needed, team unfamiliar with Go, complex web features</div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              <strong className="text-white">Popular with:</strong> Uber, Twitch, Docker | <strong className="text-white">Dev Cost:</strong> $$ | <strong className="text-white">Performance:</strong> ⚡⚡⚡⚡⚡
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Database Selection */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30 flex items-center gap-3">
          <span className="text-3xl">🗄️</span>
          4. Database Decision Framework
        </h2>
        
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-brand-primary/30 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">SQL vs NoSQL Decision Tree</h3>
          
          <div className="space-y-6">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
              <p className="font-semibold text-white mb-4 text-lg">✅ Choose SQL (PostgreSQL, MySQL) when:</p>
              <div className="space-y-2">
                {sqlWhen.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-green-400 font-bold mt-1">→</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
              <p className="font-semibold text-white mb-4 text-lg">✅ Choose NoSQL (MongoDB, DynamoDB) when:</p>
              <div className="space-y-2">
                {nosqlWhen.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold mt-1">→</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Popular Database Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-brand-primary/50 transition-all duration-300">
            <h4 className="text-xl font-bold text-white mb-3">PostgreSQL</h4>
            <p className="text-sm mb-3">Most feature-rich SQL database, excellent for complex applications</p>
            <p className="text-xs text-gray-400">Best for: SaaS, Analytics, GIS apps | Free & Open Source</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-brand-primary/50 transition-all duration-300">
            <h4 className="text-xl font-bold text-white mb-3">MongoDB</h4>
            <p className="text-sm mb-3">Popular NoSQL, great for rapid development and flexibility</p>
            <p className="text-xs text-gray-400">Best for: Content management, Real-time analytics | Free tier available</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-brand-primary/50 transition-all duration-300">
            <h4 className="text-xl font-bold text-white mb-3">Redis</h4>
            <p className="text-sm mb-3">In-memory store for caching and real-time features</p>
            <p className="text-xs text-gray-400">Best for: Caching, Sessions, Queues | Free & Open Source</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-brand-primary/50 transition-all duration-300">
            <h4 className="text-xl font-bold text-white mb-3">Firebase</h4>
            <p className="text-sm mb-3">Real-time NoSQL with built-in auth and hosting</p>
            <p className="text-xs text-gray-400">Best for: MVPs, Real-time apps, Mobile | Generous free tier</p>
          </div>
        </div>
      </section>

      {/* Section 5: Cloud Providers - Keeping table as is */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30 flex items-center gap-3">
          <span className="text-3xl">☁️</span>
          5. Cloud Provider Comparison
        </h2>
        
        <div className="overflow-x-auto bg-gray-800/50 rounded-2xl border border-gray-700/50">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="p-4 text-white">Provider</th>
                <th className="p-4 text-white">Best For</th>
                <th className="p-4 text-white">Pros</th>
                <th className="p-4 text-white">Cons</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="p-4 font-semibold text-brand-primary">AWS</td>
                <td className="p-4">Enterprises, Scale</td>
                <td className="p-4 text-sm">Most features, Largest ecosystem</td>
                <td className="p-4 text-sm">Complex, Expensive</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-4 font-semibold text-brand-primary">Google Cloud</td>
                <td className="p-4">AI/ML, Data</td>
                <td className="p-4 text-sm">Best AI tools, Good pricing</td>
                <td className="p-4 text-sm">Smaller ecosystem</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-4 font-semibold text-brand-primary">Azure</td>
                <td className="p-4">Enterprise, .NET</td>
                <td className="p-4 text-sm">Microsoft integration, Hybrid</td>
                <td className="p-4 text-sm">Complex, Windows focus</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-brand-primary">Vercel/Netlify</td>
                <td className="p-4">Startups, Frontend</td>
                <td className="p-4 text-sm">Simple, Fast deployment</td>
                <td className="p-4 text-sm">Limited backend options</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Recommended Stacks */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30 flex items-center gap-3">
          <span className="text-3xl">🎯</span>
          Recommended Stacks by Use Case
        </h2>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-brand-primary/10 to-purple-600/10 border border-brand-primary/30 rounded-2xl p-8 hover:border-brand-primary/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-brand-primary mb-3 flex items-center gap-3">
              <span className="text-2xl">🚀</span>
              MVP / Quick Launch
            </h3>
            <p className="mb-3">
              <strong className="text-white">Stack:</strong> Next.js + Vercel + Firebase + Stripe
            </p>
            <p className="text-sm text-gray-400">
              Deploy in days, scale to thousands of users, minimal DevOps overhead. Total cost: $0-50/month for first 1000 users.
            </p>
          </div>

          <div className="bg-gradient-to-r from-brand-primary/10 to-purple-600/10 border border-brand-primary/30 rounded-2xl p-8 hover:border-brand-primary/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-brand-primary mb-3 flex items-center gap-3">
              <span className="text-2xl">💼</span>
              SaaS Application
            </h3>
            <p className="mb-3">
              <strong className="text-white">Stack:</strong> React + Node.js + PostgreSQL + AWS/Heroku
            </p>
            <p className="text-sm text-gray-400">
              Battle-tested stack, great ecosystem, easy to hire developers. Scales to millions of users.
            </p>
          </div>

          <div className="bg-gradient-to-r from-brand-primary/10 to-purple-600/10 border border-brand-primary/30 rounded-2xl p-8 hover:border-brand-primary/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-brand-primary mb-3 flex items-center gap-3">
              <span className="text-2xl">🤖</span>
              AI/ML Application
            </h3>
            <p className="mb-3">
              <strong className="text-white">Stack:</strong> React + Python (FastAPI) + PostgreSQL + Google Cloud
            </p>
            <p className="text-sm text-gray-400">
              Best ML libraries, GPU support, great AI tools. Perfect for ML-heavy applications.
            </p>
          </div>

          <div className="bg-gradient-to-r from-brand-primary/10 to-purple-600/10 border border-brand-primary/30 rounded-2xl p-8 hover:border-brand-primary/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-brand-primary mb-3 flex items-center gap-3">
              <span className="text-2xl">📱</span>
              Mobile-First App
            </h3>
            <p className="mb-3">
              <strong className="text-white">Stack:</strong> React Native + Node.js + MongoDB + AWS Amplify
            </p>
            <p className="text-sm text-gray-400">
              One codebase for iOS & Android, real-time sync, offline support. Fast time to market.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30 flex items-center gap-3">
          <span className="text-3xl">🎓</span>
          Final Recommendations
        </h2>
        
        <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 border border-amber-500/30 p-8 rounded-2xl mb-8">
          <h4 className="text-xl font-semibold text-amber-300 mb-6 flex items-center gap-3">
            <span className="text-2xl">⚠️</span>
            Common Mistakes to Avoid
          </h4>
          <div className="space-y-4">
            {commonMistakes.map((mistake, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-amber-400 font-bold mt-1">→</span>
                <div>
                  <span className="text-white font-semibold">{mistake.title}:</span>
                  <span className="ml-2">{mistake.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mb-6">
          The "best" tech stack doesn't exist-only the best stack for YOUR specific situation. Consider your timeline, 
          budget, team, and growth plans. Start simple, validate your idea, then scale up as needed.
        </p>

        <p className="mb-6">
          Remember: Your tech stack should enable your business, not constrain it. Choose technologies that let you 
          move fast, iterate quickly, and adapt to changing requirements.
        </p>
      </section>

      {/* CTA Section */}
      <div className="mt-16 p-10 bg-gradient-to-r from-brand-primary/10 via-purple-600/10 to-brand-primary/10 border-2 border-brand-primary/30 rounded-3xl text-center transform hover:scale-[1.02] transition-all duration-300 shadow-2xl shadow-brand-primary/20">
        <h3 className="text-3xl font-bold text-white mb-4">
          Need Help Choosing the Right Tech Stack?
        </h3>
        <p className="mb-8 max-w-2xl mx-auto text-lg">
          Our team has built 50+ applications across various industries. We'll analyze your requirements and 
          recommend the optimal tech stack for your startup.
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

export default ChoosingRightTechStackEN;
