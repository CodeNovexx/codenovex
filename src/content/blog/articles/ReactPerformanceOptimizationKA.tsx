import React from "react";
import { Link } from "react-router-dom";

const ReactPerformanceOptimizationKA: React.FC = () => {
  const keyTakeaways = [
    "შეამცირეთ საწყისი ჩატვირთვის დრო 60%-ით Code Splitting-ისა და Lazy Loading-ის გამოყენებით",
    "აღმოფხვერით არასაჭირო re-render-ები React.memo-სა და useMemo-ს საშუალებით",
    "შეამცირეთ Bundle-ის ზომა გამოუყენებელი კოდის ანალიზითა და წაშლით",
    "გამოიყენეთ Concurrent Rendering მომხმარებლის უკეთესი გამოცდილებისთვის",
    "დააკვირდით რეალურ პერფორმანსს Web Vitals-ის მეშვეობით",
  ];

  const bundleBloatCulprits = [
    {
      name: "Moment.js",
      solution: "შეცვალეთ date-fns-ით ან day.js-ით (დაზოგავთ ~230KB)",
    },
    { name: "Lodash", solution: "გააკეთეთ კონკრეტული ფუნქციების იმპორტი" },
    { name: "Material-UI", solution: "გამოიყენეთ tree-shaking" },
    {
      name: "გამოუყენებელი დამოკიდებულებები",
      solution: "იპოვეთ ისინი npm-check-ის გამოყენებით",
    },
  ];

  return (
    <article className="text-gray-300 leading-[1.9]">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
        React აპლიკაციების პერფორმანსის ოპტიმიზაცია: სრული გზამკვლევი 2025
      </h1>

      {/* Introduction */}
      <div className="mb-12">
        <p className="text-xl leading-[1.9]">
          მომხმარებლები ელოდებიან ელვის სისწრაფის მქონე ინტერფეისებს და
          100-მილიწამიან დაყოვნებასაც კი შეუძლია გავლენა მოახდინოს გაყიდვებზე.
          ეს გზამკვლევი მოიცავს React-ის ოპტიმიზაციის თანამედროვე ტექნიკებს,
          რომლებიც თქვენს აპლიკაციებს გახდის წარმოუდგენლად სწრაფს.
        </p>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-br from-brand-primary/20 to-purple-600/10 border border-brand-primary/30 p-8 mb-12 rounded-2xl">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="text-3xl">💡</span>
          ძირითადი თეზისები
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

      {/* Section 1 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30 flex items-center gap-3">
          <span className="text-3xl">🚀</span>
          1. Code Splitting & Lazy Loading
        </h2>
        <p className="mb-8">
          ოპტიმიზაციის პირველი წესი: არ ჩატვირთოთ ის, რაც არ გჭირდებათ. Code
          splitting გაძლევთ საშუალებას, დაყოთ აპლიკაცია პატარა ნაწილებად,
          რომლებიც მოთხოვნისამებრ ჩაიტვირთება.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30 flex items-center gap-3">
          <span className="text-3xl">⚡</span>
          2. აღმოფხვერით არასაჭირო Re-render-ები
        </h2>
        <p className="mb-8">
          React-ის re-render-ი შეიძლება ძვირი იყოს. გამოიყენეთ React.memo,
          useMemo და useCallback სტრატეგიულად, რომ თავიდან აიცილოთ კომპონენტების
          უმიზეზო განახლება.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30 flex items-center gap-3">
          <span className="text-3xl">📦</span>
          3. Bundle-ის ზომის ოპტიმიზაცია
        </h2>
        <p className="mb-8">
          პატარა bundle ნიშნავს სწრაფ ჩატვირთვას. გააანალიზეთ თქვენი bundle და
          მოიშორეთ ზედმეტი კოდი.
        </p>

        <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 border border-amber-500/30 p-8 rounded-2xl">
          <h4 className="text-xl font-semibold text-amber-300 mb-6 flex items-center gap-3">
            <span className="text-2xl">⚠️</span>
            Bundle-ის ზომის გაზრდის ხშირი მიზეზები
          </h4>
          <div className="space-y-4">
            {bundleBloatCulprits.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-amber-400 font-bold mt-1">→</span>
                <div>
                  <span className="text-white font-semibold">{item.name}:</span>
                  <span className="ml-2">{item.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30 flex items-center gap-3">
          <span className="text-3xl">🔄</span>
          4. Concurrent Rendering (React 18+)
        </h2>
        <p className="mb-8">
          React 18-ის Concurrent ფუნქციები საშუალებას აძლევს თქვენს აპლიკაციას
          დარჩეს მგრძნობიარე მძიმე განახლებების დროს.
        </p>
      </section>

      {/* Section 5 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30 flex items-center gap-3">
          <span className="text-3xl">📊</span>
          5. გრძელი სიების ვირტუალიზაცია
        </h2>
        <p className="mb-8">
          10,000 DOM ელემენტის ერთდროულად რენდერი კლავს პერფორმანსს.
          ვირტუალიზაცია არენდერებს მხოლოდ იმ ელემენტებს, რომლებიც ეკრანზე ჩანს.
        </p>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30 flex items-center gap-3">
          <span className="text-3xl">🎓</span>
          დასკვნა
        </h2>
        <p className="mb-6">
          React-ის პერფორმანსის ოპტიმიზაცია 2025 წელს გულისხმობს სტრატეგიულ
          იმპლემენტაციას და არა ნაადრევ ოპტიმიზაციას. დაიწყეთ თქვენი ამჟამინდელი
          პერფორმანსის გაზომვით, იპოვეთ პრობლემური წერტილები და შემდეგ
          გამოიყენეთ ეს ტექნიკები.
        </p>
        <p className="mb-6">
          გახსოვდეთ: ჩატვირთვის დროის 1-წამიანი გაუმჯობესება 7%-ით ზრდის
          კონვერსიას. თქვენი ძალისხმევა პირდაპირ აისახება უკეთეს მომხმარებლის
          გამოცდილებასა და ბიზნეს შედეგებზე.
        </p>
      </section>

      {/* CTA Section */}
      <div className="mt-16 p-10 bg-gradient-to-r from-brand-primary/10 via-purple-600/10 to-brand-primary/10 border-2 border-brand-primary/30 rounded-3xl text-center transform hover:scale-[1.02] transition-all duration-300 shadow-2xl shadow-brand-primary/20">
        <h3 className="text-3xl font-bold text-white mb-4">
          გჭირდებათ თქვენი React აპლიკაციის ოპტიმიზაცია?
        </h3>
        <p className="mb-8 max-w-2xl mx-auto text-lg">
          ჩვენი React-ის ექსპერტთა გუნდი ჩაატარებს თქვენი აპლიკაციის აუდიტს,
          იპოვის პრობლემურ წერტილებს და განახორციელებს ოპტიმიზაციას, რომელიც
          მოიტანს გაზომვად შედეგებს.
        </p>
        <Link
          to="/#contact"
          className="inline-block bg-gradient-to-r from-brand-primary to-purple-600 hover:from-brand-hover hover:to-purple-700 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-brand-primary/50"
        >
          მოითხოვეთ პერფორმანსის აუდიტი
        </Link>
      </div>
    </article>
  );
};

export default ReactPerformanceOptimizationKA;
