interface DataType {
   id: number;
   thumb: string;
   category: string;
   rating: number;
   title: string;
   desc: string;
   instructors: string;
   price: number;
   skill_level: string;
   price_type: string;
   language: string;
   popular?: string;
};

const inner_course_data: DataType[] = [
   {
      id: 1,
      thumb: "/assets/img/courses/course_thumb01.jpg",
      category: "Development",
      rating: 5,
      title: "Learning JavaScript With Imagination",
      instructors: "David Millar",
      price: 15,
      skill_level: "Beginner",
      price_type: "Free",
      language: "Arabic",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 2,
      thumb: "/assets/img/courses/course_thumb02.jpg",
      category: "Art & Design",
      rating: 4.5,
      title: "The Complete Graphic Design for Beginners",
      instructors: "Jenny Wilson",
      price: 19,
      skill_level: "Intermediate",
      price_type: "Paid",
      language: "English",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 3,
      thumb: "/assets/img/courses/course_thumb03.jpg",
      category: "Business",
      rating: 4.8,
      title: "Learning Digital Marketing on Facebook",
      instructors: "Wade Warren",
      price: 10,
      skill_level: "High",
      price_type: "Paid",
      language: "Spanish",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 4,
      thumb: "/assets/img/courses/course_thumb04.jpg",
      category: "Data Science",
      rating: 5,
      title: "Financial Analyst Training & Investing Course",
      instructors: "Robert Fox",
      price: 12,
      skill_level: "Beginner",
      price_type: "Free",
      language: "Spanish",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 5,
      thumb: "/assets/img/courses/course_thumb05.jpg",
      category: "Finance",
      rating: 4,
      title: "Data Analysis & Visualization Masterclass",
      instructors: "Guy Hawkins",
      price: 27,
      skill_level: "Beginner",
      price_type: "Paid",
      language: "Spanish",
      popular: "popular",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 6,
      thumb: "/assets/img/courses/course_thumb06.jpg",
      category: "Health & Fitness",
      rating: 3,
      title: "Master the Fundamentals of Math",
      instructors: "Jacob Jones",
      price: 10,
      skill_level: "Intermediate",
      price_type: "Paid",
      language: "English",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 7,
      thumb: "/assets/img/courses/course_thumb07.jpg",
      category: "Lifestyle",
      rating: 5,
      title: "How To Build A Localized Website With Hugo And Strapi",
      instructors: "David Millar",
      price: 11,
      skill_level: "High",
      price_type: "Free",
      language: "Bangla",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 8,
      thumb: "/assets/img/courses/course_thumb08.jpg",
      category: "Design",
      rating: 5,
      title: "Designing Effective Pricing Plans UX",
      instructors: "awpawlo Mark",
      price: 17,
      skill_level: "Intermediate",
      price_type: "Free",
      language: "Arabic",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 9,
      thumb: "/assets/img/courses/course_thumb09.jpg",
      category: "Health & Fitness",
      rating: 4,
      title: "Accelerating UX Maturity With A Breakthrough Project",
      instructors: "David Millar",
      price: 22,
      skill_level: "High",
      price_type: "Free",
      language: "Bangla",
      popular: "popular",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 10,
      thumb: "/assets/img/courses/course_thumb10.jpg",
      category: "Development",
      rating: 5,
      title: "Demystifying The New Gatsby Framework",
      instructors: "Wade Warren",
      price: 22,
      skill_level: "Intermediate",
      price_type: "Paid",
      language: "English",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 11,
      thumb: "/assets/img/courses/course_thumb11.jpg",
      category: "Data Science",
      rating: 3,
      title: "Voice Control Usability Considerations For Partially",
      instructors: "Wade Warren",
      price: 12,
      skill_level: "High",
      price_type: "Free",
      language: "Arabic",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 12,
      thumb: "/assets/img/courses/course_thumb12.jpg",
      category: "Development",
      rating: 3,
      title: "Things I Wish I’d Known Earlier In My Career",
      instructors: "Jenny Wilson",
      price: 9,
      skill_level: "High",
      price_type: "Free",
      language: "Arabic",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 13,
      thumb: "/assets/img/courses/course_thumb07.jpg",
      category: "Lifestyle",
      rating: 5,
      title: "How To Build A Localized Website With Hugo And Strapi",
      instructors: "David Millar",
      price: 11,
      skill_level: "High",
      price_type: "Free",
      language: "Bangla",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 14,
      thumb: "/assets/img/courses/course_thumb08.jpg",
      category: "Design",
      rating: 5,
      title: "Designing Effective Pricing Plans UX",
      instructors: "awpawlo Mark",
      price: 17,
      skill_level: "Intermediate",
      price_type: "Free",
      language: "Arabic",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 15,
      thumb: "/assets/img/courses/course_thumb09.jpg",
      category: "Health & Fitness",
      rating: 4,
      title: "Accelerating UX Maturity With A Breakthrough Project",
      instructors: "David Millar",
      price: 22,
      skill_level: "High",
      price_type: "Free",
      language: "Bangla",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 16,
      thumb: "/assets/img/courses/course_thumb10.jpg",
      category: "Business",
      rating: 5,
      title: "Demystifying The New Gatsby Framework",
      instructors: "Wade Warren",
      price: 22,
      skill_level: "Intermediate",
      price_type: "Paid",
      language: "English",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 17,
      thumb: "/assets/img/courses/course_thumb10.jpg",
      category: "Data Science",
      rating: 3,
      title: "Voice Control Usability Considerations For Partially",
      instructors: "Wade Warren",
      price: 12,
      skill_level: "High",
      price_type: "Free",
      language: "Arabic",
      popular: "popular",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 18,
      thumb: "/assets/img/courses/course_thumb12.jpg",
      category: "Business",
      rating: 3,
      title: "Things I Wish I’d Known Earlier In My Career",
      instructors: "Jenny Wilson",
      price: 9,
      skill_level: "High",
      price_type: "Free",
      language: "Arabic",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 19,
      thumb: "/assets/img/courses/course_thumb01.jpg",
      category: "Development",
      rating: 5,
      title: "Learning JavaScript With Imagination",
      instructors: "David Millar",
      price: 15,
      skill_level: "Beginner",
      price_type: "Free",
      language: "Arabic",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 20,
      thumb: "/assets/img/courses/course_thumb05.jpg",
      category: "Art & Design",
      rating: 4.5,
      title: "The Complete Graphic Design for Beginners",
      instructors: "Jenny Wilson",
      price: 19,
      skill_level: "Intermediate",
      price_type: "Paid",
      language: "English",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 21,
      thumb: "/assets/img/courses/course_thumb05.jpg",
      category: "Business",
      rating: 4.8,
      title: "Learning Digital Marketing on Facebook",
      instructors: "Wade Warren",
      price: 10,
      skill_level: "High",
      price_type: "Paid",
      language: "Spanish",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 22,
      thumb: "/assets/img/courses/course_thumb09.jpg",
      category: "Data Science",
      rating: 2,
      title: "Financial Analyst Training & Investing Course",
      instructors: "Robert Fox",
      price: 12,
      skill_level: "Beginner",
      price_type: "Free",
      language: "Spanish",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 23,
      thumb: "/assets/img/courses/course_thumb05.jpg",
      category: "Finance",
      rating: 4,
      title: "Data Analysis & Visualization Masterclass",
      instructors: "Guy Hawkins",
      price: 27,
      skill_level: "Beginner",
      price_type: "Paid",
      language: "Spanish",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 24,
      thumb: "/assets/img/courses/course_thumb06.jpg",
      category: "Lifestyle",
      rating: 3,
      title: "Master the Fundamentals of Math",
      instructors: "Jacob Jones",
      price: 10,
      skill_level: "Intermediate",
      price_type: "Paid",
      language: "English",
      popular: "popular",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 25,
      thumb: "/assets/img/courses/course_thumb01.jpg",
      category: "Development",
      rating: 5,
      title: "Learning JavaScript With Imagination",
      instructors: "David Millar",
      price: 15,
      skill_level: "Beginner",
      price_type: "Free",
      language: "Arabic",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 26,
      thumb: "/assets/img/courses/course_thumb12.jpg",
      category: "Art & Design",
      rating: 4.5,
      title: "The Complete Graphic Design for Beginners",
      instructors: "Jenny Wilson",
      price: 19,
      skill_level: "Intermediate",
      price_type: "Paid",
      language: "English",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 27,
      thumb: "/assets/img/courses/course_thumb07.jpg",
      category: "Business",
      rating: 4.8,
      title: "Learning Digital Marketing on Facebook",
      instructors: "Wade Warren",
      price: 10,
      skill_level: "High",
      price_type: "Paid",
      language: "Spanish",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 28,
      thumb: "/assets/img/courses/course_thumb06.jpg",
      category: "Data Science",
      rating: 5,
      title: "Financial Analyst Training & Investing Course",
      instructors: "Robert Fox",
      price: 12,
      skill_level: "Beginner",
      price_type: "Free",
      language: "Spanish",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 29,
      thumb: "/assets/img/courses/course_thumb05.jpg",
      category: "Finance",
      rating: 4,
      title: "Data Analysis & Visualization Masterclass",
      instructors: "Guy Hawkins",
      price: 27,
      skill_level: "Beginner",
      price_type: "Paid",
      language: "Spanish",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 30,
      thumb: "/assets/img/courses/course_thumb06.jpg",
      category: "Lifestyle",
      rating: 3,
      title: "Master the Fundamentals of Math",
      instructors: "Jacob Jones",
      price: 10,
      skill_level: "Intermediate",
      price_type: "Paid",
      language: "English",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 31,
      thumb: "/assets/img/courses/course_thumb07.jpg",
      category: "Lifestyle",
      rating: 5,
      title: "How To Build A Localized Website With Hugo And Strapi",
      instructors: "David Millar",
      price: 11,
      skill_level: "High",
      price_type: "Free",
      language: "Bangla",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 32,
      thumb: "/assets/img/courses/course_thumb08.jpg",
      category: "Design",
      rating: 5,
      title: "Designing Effective Pricing Plans UX",
      instructors: "awpawlo Mark",
      price: 17,
      skill_level: "Intermediate",
      price_type: "Free",
      language: "Arabic",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 33,
      thumb: "/assets/img/courses/course_thumb09.jpg",
      category: "Lifestyle",
      rating: 4,
      title: "Accelerating UX Maturity With A Breakthrough Project",
      instructors: "David Millar",
      price: 22,
      skill_level: "High",
      price_type: "Free",
      language: "Bangla",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 34,
      thumb: "/assets/img/courses/course_thumb10.jpg",
      category: "Finance",
      rating: 1,
      title: "Demystifying The New Gatsby Framework",
      instructors: "Wade Warren",
      price: 22,
      skill_level: "Intermediate",
      price_type: "Paid",
      language: "English",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 35,
      thumb: "/assets/img/courses/course_thumb12.jpg",
      category: "Data Science",
      rating: 3,
      title: "Voice Control Usability Considerations For Partially",
      instructors: "Wade Warren",
      price: 12,
      skill_level: "High",
      price_type: "Free",
      language: "Arabic",
      popular: "popular",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 36,
      thumb: "/assets/img/courses/course_thumb12.jpg",
      category: "Finance",
      rating: 3,
      title: "Things I Wish I’d Known Earlier In My Career",
      instructors: "Jenny Wilson",
      price: 9,
      skill_level: "High",
      price_type: "Free",
      language: "Arabic",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 37,
      thumb: "/assets/img/courses/course_thumb07.jpg",
      category: "Lifestyle",
      rating: 5,
      title: "How To Build A Localized Website With Hugo And Strapi",
      instructors: "David Millar",
      price: 11,
      skill_level: "High",
      price_type: "Free",
      language: "Bangla",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 38,
      thumb: "/assets/img/courses/course_thumb08.jpg",
      category: "Design",
      rating: 5,
      title: "Designing Effective Pricing Plans UX",
      instructors: "awpawlo Mark",
      price: 17,
      skill_level: "Intermediate",
      price_type: "Free",
      language: "Arabic",
      popular: "popular",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 39,
      thumb: "/assets/img/courses/course_thumb09.jpg",
      category: "Health & Fitness",
      rating: 4,
      title: "Accelerating UX Maturity With A Breakthrough Project",
      instructors: "David Millar",
      price: 22,
      skill_level: "High",
      price_type: "Free",
      language: "Bangla",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 40,
      thumb: "/assets/img/courses/course_thumb10.jpg",
      category: "Finance",
      rating: 5,
      title: "Demystifying The New Gatsby Framework",
      instructors: "Wade Warren",
      price: 22,
      skill_level: "Intermediate",
      price_type: "Paid",
      language: "English",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 41,
      thumb: "/assets/img/courses/course_thumb11.jpg",
      category: "Data Science",
      rating: 3,
      title: "Voice Control Usability Considerations For Partially",
      instructors: "Wade Warren",
      price: 12,
      skill_level: "High",
      price_type: "Free",
      language: "Arabic",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 42,
      thumb: "/assets/img/courses/course_thumb12.jpg",
      category: "Finance",
      rating: 3,
      title: "Things I Wish I’d Known Earlier In My Career",
      instructors: "Jenny Wilson",
      price: 9,
      skill_level: "High",
      price_type: "Free",
      language: "Arabic",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 43,
      thumb: "/assets/img/courses/course_thumb01.jpg",
      category: "Development",
      rating: 5,
      title: "Learning JavaScript With Imagination",
      instructors: "David Millar",
      price: 15,
      skill_level: "Beginner",
      price_type: "Free",
      language: "Arabic",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 44,
      thumb: "/assets/img/courses/course_thumb09.jpg",
      category: "Art & Design",
      rating: 4.5,
      title: "The Complete Graphic Design for Beginners",
      instructors: "Jenny Wilson",
      price: 19,
      skill_level: "Intermediate",
      price_type: "Paid",
      language: "English",
      popular: "popular",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 45,
      thumb: "/assets/img/courses/course_thumb01.jpg",
      category: "Business",
      rating: 4.8,
      title: "Learning Digital Marketing on Facebook",
      instructors: "Wade Warren",
      price: 10,
      skill_level: "High",
      price_type: "Paid",
      language: "Spanish",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 46,
      thumb: "/assets/img/courses/course_thumb04.jpg",
      category: "Data Science",
      rating: 2,
      title: "Financial Analyst Training & Investing Course",
      instructors: "Robert Fox",
      price: 12,
      skill_level: "Beginner",
      price_type: "Free",
      language: "Spanish",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 47,
      thumb: "/assets/img/courses/course_thumb05.jpg",
      category: "Finance",
      rating: 4,
      title: "Data Analysis & Visualization Masterclass",
      instructors: "Guy Hawkins",
      price: 27,
      skill_level: "Beginner",
      price_type: "Paid",
      language: "Spanish",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
   {
      id: 48,
      thumb: "/assets/img/courses/course_thumb06.jpg",
      category: "Health & Fitness",
      rating: 3,
      title: "Master the Fundamentals of Math",
      instructors: "Jacob Jones",
      price: 10,
      skill_level: "Intermediate",
      price_type: "Paid",
      language: "English",
      desc: "when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.",
   },
]

export default inner_course_data;