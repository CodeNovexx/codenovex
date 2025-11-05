// Blog post metadata database
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  language: 'en' | 'ka';
  author: string;
  readTime: string;
  category: string;
  tags: string[];
  image?: string;
  alternateSlug?: string; // Slug of the same article in the other language
}

export const blogPosts: BlogPost[] = [
  // English Posts
  {
    slug: 'how-to-reduce-development-costs',
    title: 'How to Reduce Software Development Costs by 40%',
    date: '2025-11-01',
    excerpt: 'Discover proven strategies to cut your development costs without sacrificing quality. Learn from real case studies and actionable insights.',
    language: 'en',
    author: 'CodeNovex Team',
    readTime: '8 min read',
    category: 'Business Strategy',
    tags: ['Cost Optimization', 'ROI', 'Best Practices'],
    image: '/blog/cost-reduction.webp',
    alternateSlug: 'rogor-shevamciro-ganvitreba-xarjebi'
  },
  {
    slug: 'react-performance-optimization-2025',
    title: 'React Performance Optimization: Advanced Techniques for 2025',
    date: '2025-10-28',
    excerpt: 'Master the latest React performance optimization techniques including concurrent rendering, code splitting, and lazy loading strategies.',
    language: 'en',
    author: 'CodeNovex Team',
    readTime: '12 min read',
    category: 'Technical',
    tags: ['React', 'Performance', 'Web Development'],
    image: '/blog/react-performance.webp',
    alternateSlug: 'react-performance-optimizacia-2025'
  },
  {
    slug: 'choosing-right-tech-stack-2025',
    title: 'Choosing the Right Tech Stack for Your Startup in 2025',
    date: '2025-10-20',
    excerpt: 'A comprehensive guide to selecting the perfect technology stack for your startup. Compare frameworks, databases, and deployment options.',
    language: 'en',
    author: 'CodeNovex Team',
    readTime: '10 min read',
    category: 'Technology',
    tags: ['Tech Stack', 'Startups', 'Decision Making'],
    image: '/blog/tech-stack.webp',
    alternateSlug: 'swori-teqnologiuri-steki-2025'
  },

  // Georgian Posts
  {
    slug: 'rogor-shevamciro-ganvitreba-xarjebi',
    title: 'როგორ შევამციროთ პროგრამული უზრუნველყოფის განვითარების ხარჯები 40%-ით',
    date: '2025-11-01',
    excerpt: 'აღმოაჩინეთ დამტკიცებული სტრატეგიები თქვენი განვითარების ხარჯების შესამცირებლად ხარისხის შენარჩუნებით. ისწავლეთ რეალური შემთხვევების შესწავლიდან.',
    language: 'ka',
    author: 'CodeNovex გუნდი',
    readTime: '8 წთ კითხვა',
    category: 'ბიზნეს სტრატეგია',
    tags: ['ხარჯების ოპტიმიზაცია', 'ROI', 'საუკეთესო პრაქტიკა'],
    image: '/blog/cost-reduction.webp',
    alternateSlug: 'how-to-reduce-development-costs'
  },
  {
    slug: 'react-performance-optimizacia-2025',
    title: 'React-ის შესრულების ოპტიმიზაცია: გაფართოებული ტექნიკა 2025-სთვის',
    date: '2025-10-28',
    excerpt: 'დაეუფლეთ უახლეს React-ის შესრულების ოპტიმიზაციის ტექნიკას, მათ შორის კონკურენტულ რენდერინგს, კოდის დაყოფას და ზარმაც ჩატვირთვის სტრატეგიებს.',
    language: 'ka',
    author: 'CodeNovex გუნდი',
    readTime: '12 წთ კითხვა',
    category: 'ტექნიკური',
    tags: ['React', 'შესრულება', 'ვებ განვითარება'],
    image: '/blog/react-performance.webp',
    alternateSlug: 'react-performance-optimization-2025'
  },
  {
    slug: 'swori-teqnologiuri-steki-2025',
    title: 'სწორი ტექნოლოგიური სტეკის არჩევა თქვენი სტარტაპისთვის 2025 წელს',
    date: '2025-10-20',
    excerpt: 'ყოვლისმომცველი გზამკვლევი თქვენი სტარტაპისთვის იდეალური ტექნოლოგიური სტეკის შერჩევისთვის. შეადარეთ ფრეიმვორკები, მონაცემთა ბაზები და განლაგების ვარიანტები.',
    language: 'ka',
    author: 'CodeNovex გუნდი',
    readTime: '10 წთ კითხვა',
    category: 'ტექნოლოგია',
    tags: ['ტექ სტეკი', 'სტარტაპები', 'გადაწყვეტილებები'],
    image: '/blog/tech-stack.webp',
    alternateSlug: 'choosing-right-tech-stack-2025'
  }
];

// Helper functions
export const getPostsByLanguage = (language: 'en' | 'ka'): BlogPost[] => {
  return blogPosts.filter(post => post.language === language);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRecentPosts = (language: 'en' | 'ka', limit: number = 3): BlogPost[] => {
  return getPostsByLanguage(language)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

export const getPostsByCategory = (category: string, language: 'en' | 'ka'): BlogPost[] => {
  return getPostsByLanguage(language).filter(post => post.category === category);
};

export const getAllCategories = (language: 'en' | 'ka'): string[] => {
  const posts = getPostsByLanguage(language);
  return Array.from(new Set(posts.map(post => post.category)));
};
