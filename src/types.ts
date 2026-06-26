export interface ProductNutrient {
  label: string;
  value: string;
}

export interface ProductReview {
  id: number;
  author: string;
  rating: number;
  date: string;
  title: string;
  text: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount?: number;
  description?: string;
  overview?: string;
  benefits?: string[];
  ingredients?: string;
  nutritionFacts?: {
    servingSize: string;
    servingsPerContainer: number;
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
    otherKeyNutrients?: ProductNutrient[];
  };
  usageDirections?: string;
  recommendedTiming?: string[];
  whoShouldUse?: string[];
  faqs?: ProductFAQ[];
  customerReviews?: ProductReview[];
  flavors?: string[];
  sizes?: string[];
  image?: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  publishedDate: string;
  excerpt: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}
