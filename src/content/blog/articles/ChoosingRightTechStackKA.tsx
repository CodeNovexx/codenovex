// ChoosingRightTechStackKA.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const ChoosingRightTechStackKA: React.FC = () => {
  return (
    <article className="text-gray-300">
      {/* Introduction */}
      <div className="mb-12 space-y-4">
        <p className="text-xl text-gray-200 leading-[1.9]">
          სწორი ტექნოლოგიური სტეკის შერჩევა ერთ-ერთი ყველაზე კრიტიკული გადაწყვეტილებაა თქვენი სტარტაპისთვის. 
          არასწორმა არჩევანმა შეიძლება გამოიწვიოს ტექნიკური ვალი, განვითარების შენელება და ძვირადღირებული გადაკეთება.
        </p>
        <p className="text-lg text-gray-300 leading-[1.9]">
          ეს გზამკვლევი დაგეხმარებათ მიიღოთ ინფორმირებული გადაწყვეტილება თქვენს საჭიროებებზე, ბიუჯეტსა და ზრდის გეგმებზე დაყრდნობით.
        </p>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-br from-brand-primary/20 to-purple-600/10 border-l-4 border-brand-primary p-8 mb-16 rounded-r-2xl">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="text-3xl">💡</span>
          რას გაიგებთ ამ სტატიიდან
        </h3>
        <div className="space-y-4">
          {[
            'როგორ შეაფასოთ ტექ. სტეკი თქვენი სტარტაპის ეტაპის მიხედვით',
            'პოპულარული ფრონტენდ ფრეიმვორქების შედარება (React, Vue, Angular)',
            'ბექენდის ოპციები: Node.js, Python, Go – და როდის გამოვიყენოთ თითოეული',
            'მონაცემთა ბაზის შერჩევა: SQL vs NoSQL გადაწყვეტილების ჩარჩო',
            'Cloud პროვაიდერები: AWS vs Azure vs Google Cloud'
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-brand-primary text-xl mt-0.5 flex-shrink-0">✓</span>
              <span className="text-gray-200 leading-relaxed text-base">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 1 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30">
          1. ტექ. სტეკის შეფასების ჩარჩო
        </h2>
        <p className="text-lg leading-[1.9] mb-10 text-gray-200">
          სანამ კონკრეტულ ტექნოლოგიებს ჩავუღრმავდებით, გაითვალისწინეთ ეს ფაქტორები:
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-brand-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/10">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">💼</span>
              <h4 className="text-2xl font-bold text-brand-primary">ბიზნეს ფაქტორები</h4>
            </div>
            <div className="space-y-4">
              {[
                'ბაზარზე პროდუქტის გაშვების სისწრაფე',
                'ბიუჯეტის შეზღუდვები',
                'მოსალოდნელი ტრაფიკი და მასშტაბი',
                'გუნდის გამოცდილება',
                'კადრების მოძიების სირთულე'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-brand-primary text-lg mt-0.5 flex-shrink-0">→</span>
                  <span className="leading-relaxed text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-brand-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/10">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">⚙️</span>
              <h4 className="text-2xl font-bold text-brand-primary">ტექნიკური ფაქტორები</h4>
            </div>
            <div className="space-y-4">
              {[
                'პერფორმანსის მოთხოვნები',
                'უსაფრთხოების საჭიროებები',
                'ინტეგრაციის მოთხოვნები',
                'მასშტაბირების პერსპექტივა',
                'მხარდაჭერის სირთულე'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-brand-primary text-lg mt-0.5 flex-shrink-0">→</span>
                  <span className="leading-relaxed text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Frontend */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30">
          2. ფრონტენდ ფრეიმვორქების შედარება
        </h2>
        
        <div className="space-y-8">
          {/* React */}
          <div className="bg-gradient-to-br from-blue-900/20 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">⚛️</span>
              <h3 className="text-2xl font-bold text-white">React</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-base">
              ყველაზე პოპულარული არჩევანი, უდიდესი ეკოსისტემითა და კადრების ბაზრით.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h5 className="text-green-400 font-bold text-lg flex items-center gap-2">
                  <span>✅</span> საუკეთესოა
                </h5>
                <div className="space-y-3 text-sm">
                  {[
                    'რთული, ინტერაქტიული UI-სთვის',
                    'დიდი გუნდებისთვის',
                    'მობილური აპლიკაციებისთვის (React Native)',
                    'დეველოპერების სწრაფად აყვანისთვის'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">•</span>
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h5 className="text-red-400 font-bold text-lg flex items-center gap-2">
                  <span>❌</span> გამოწვევები
                </h5>
                <div className="space-y-3 text-sm">
                  {[
                    'სწრაფად ცვალებადი ეკოსისტემა',
                    'SEO-სთვის საჭიროებს Next.js-ს',
                    'შედარებით მეტი კოდი დასაწერად'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">•</span>
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Vue */}
          <div className="bg-gradient-to-br from-green-900/20 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🟢</span>
              <h3 className="text-2xl font-bold text-white">Vue.js</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-base">
              პროგრესული ფრეიმვორქი, მარტივი ასათვისებლად და შესანიშნავი დოკუმენტაციით.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h5 className="text-green-400 font-bold text-lg flex items-center gap-2">
                  <span>✅</span> საუკეთესოა
                </h5>
                <div className="space-y-3 text-sm">
                  {[
                    'მცირე და საშუალო პროექტებისთვის',
                    'სწრაფი პროტოტიპებისთვის',
                    'გუნდებისთვის, ვინც ახლა იწყებს',
                    'შეზღუდული ბიუჯეტის მქონე სტარტაპებისთვის'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">•</span>
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h5 className="text-red-400 font-bold text-lg flex items-center gap-2">
                  <span>❌</span> გამოწვევები
                </h5>
                <div className="space-y-3 text-sm">
                  {[
                    'შედარებით მცირე ეკოსისტემა',
                    'ნაკლები სენიორ დეველოპერი ბაზარზე',
                    'ნაკლებად გამოიყენება დიდ კორპორაციებში'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">•</span>
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Angular */}
          <div className="bg-gradient-to-br from-red-900/20 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🅰️</span>
              <h3 className="text-2xl font-bold text-white">Angular</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-base">
              Google-ის მიერ მხარდაჭერილი სრულყოფილი ფრეიმვორქი, იდეალური კორპორატიული აპლიკაციებისთვის.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h5 className="text-green-400 font-bold text-lg flex items-center gap-2">
                  <span>✅</span> საუკეთესოა
                </h5>
                <div className="space-y-3 text-sm">
                  {[
                    'კორპორატიული აპლიკაციებისთვის',
                    'დიდი, სტრუქტურირებული გუნდებისთვის',
                    'გრძელვადიანი პროექტებისთვის',
                    'TypeScript-ზე დაფუძნებული მიდგომისთვის'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">•</span>
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h5 className="text-red-400 font-bold text-lg flex items-center gap-2">
                  <span>❌</span> გამოწვევები
                </h5>
                <div className="space-y-3 text-sm">
                  {[
                    'რთული ასათვისებლად',
                    'ბევრი კოდი დასაწერად',
                    'შედარებით ნელი დეველოპმენტის პროცესი'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">•</span>
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Backend */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30">
          3. ბექენდ ტექნოლოგიების შერჩევა
        </h2>
        <div className="space-y-6">
          {[
            { icon: '🟢', title: 'Node.js + Express', desc: 'რეალურ დროში მომუშავე აპლიკაციებისთვის, API-ებისთვის, მიკროსერვისებისთვის' },
            { icon: '🐍', title: 'Python + Django/FastAPI', desc: 'AI/ML ფუნქციონალისთვის, მონაცემებზე-დაფუძნებული აპლიკაციებისთვის, სწრაფი პროტოტიპებისთვის' },
            { icon: '🔷', title: 'Go (Golang)', desc: 'მაღალი პერფორმანსის API-ებისთვის, მიკროსერვისებისთვის, Cloud ინფრასტრუქტურისთვის' }
          ].map((tech, index) => (
            <div key={index} className="bg-gradient-to-r from-gray-800/50 to-gray-900/30 rounded-xl p-6 border border-gray-700/50 hover:border-brand-primary/50 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{tech.icon}</span>
                <h3 className="text-xl font-bold text-white">{tech.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed"><strong className="text-brand-primary">საუკეთესოა:</strong> {tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Database */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30">
          4. მონაცემთა ბაზის შერჩევა
        </h2>
        <div className="bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900/50 border-2 border-brand-primary/30 rounded-2xl p-10">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">SQL vs NoSQL: როგორ ავირჩიოთ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/70 p-6 rounded-xl border border-green-500/30">
              <p className="font-bold text-white mb-4 text-lg flex items-center gap-2">
                <span className="text-green-400">✅</span> აირჩიეთ SQL
              </p>
              <div className="space-y-3 text-sm">
                {[
                  'მონაცემებს შორის რთული კავშირებია',
                  'მონაცემთა სტრუქტურა სტაბილური და წინასწარ განსაზღვრულია',
                  'მონაცემთა მთლიანობა კრიტიკულად მნიშვნელოვანია (ფინანსები, E-commerce)'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-brand-primary mt-0.5">→</span>
                    <span className="text-gray-300 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800/70 p-6 rounded-xl border border-purple-500/30">
              <p className="font-bold text-white mb-4 text-lg flex items-center gap-2">
                <span className="text-purple-400">✅</span> აირჩიეთ NoSQL
              </p>
              <div className="space-y-3 text-sm">
                {[
                  'მონაცემთა სტრუქტურა ხშირად იცვლება',
                  'მასშტაბირება მთავარი პრიორიტეტია',
                  'მუშაობთ არასტრუქტურირებულ მონაცემებთან',
                  'საჭიროა ჩაწერის მაღალი სისწრაფე'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-brand-primary mt-0.5">→</span>
                    <span className="text-gray-300 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Conclusion */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b-2 border-brand-primary/30">
          საბოლოო რეკომენდაციები
        </h2>
        <div className="bg-amber-900/20 border-l-4 border-amber-500 p-8 rounded-r-2xl mb-8">
          <h4 className="text-xl font-bold text-amber-300 mb-6 flex items-center gap-2">
            <span>⚠️</span> გავრცელებული შეცდომები
          </h4>
          <div className="space-y-4">
            {[
              { title: 'არჩევანი ტრენდის მიხედვით', desc: 'პოპულარული არ ნიშნავს საუკეთესოს თქვენთვის' },
              { title: 'ზედმეტი გართულება', desc: 'MVP-სთვის მიკროსერვისები არ გჭირდებათ' },
              { title: 'გუნდის გამოცდილების იგნორირება', desc: 'გამოიყენეთ ის, რაც თქვენმა გუნდმა კარგად იცის' },
              { title: 'მთლიანი ღირებულების დავიწყება', desc: 'გაითვალისწინეთ ჰოსტინგის, დეველოპმენტის და მხარდაჭერის ხარჯები' }
            ].map((mistake, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">→</span>
                <div>
                  <strong className="text-white">{mistake.title}:</strong>{' '}
                  <span className="text-gray-300">{mistake.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-lg text-gray-200 leading-[1.9] mb-6">
          "საუკეთესო" ტექ. სტეკი არ არსებობს - არსებობს მხოლოდ საუკეთესო სტეკი თქვენი კონკრეტული სიტუაციისთვის.
        </p>
        <p className="text-lg text-gray-200 leading-[1.9]">
          გაითვალისწინეთ ვადები, ბიუჯეტი, გუნდი და ზრდის გეგმები. დაიწყეთ მარტივად, დაატესტირეთ იდეა და შემდეგ გაზარდეთ მასშტაბი.
        </p>
      </section>

      {/* CTA Section */}
      <div className="mt-16 p-10 bg-gradient-to-r from-brand-primary/10 via-purple-600/10 to-brand-primary/10 border-2 border-brand-primary/30 rounded-3xl text-center">
        <h3 className="text-3xl font-bold text-white mb-4">
          გჭირდებათ დახმარება სწორი ტექ. სტეკის შერჩევაში?
        </h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed text-lg">
          ჩვენს გუნდს შექმნილი აქვს 50-ზე მეტი აპლიკაცია სხვადასხვა ინდუსტრიაში. ჩვენ გავაანალიზებთ თქვენს მოთხოვნებს და 
          შემოგთავაზებთ ოპტიმალურ ტექ. სტეკს თქვენი სტარტაპისთვის.
        </p>
        <Link
          to="/#contact"
          className="inline-block bg-brand-primary hover:bg-brand-hover text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg shadow-lg shadow-brand-primary/20"
        >
          დაჯავშნეთ უფასო კონსულტაცია
        </Link>
      </div>
    </article>
  );
};

export default ChoosingRightTechStackKA;
