import React from 'react';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  situation: string;
  className?: string;
}

export function Testimonial({ name, location, rating, text, situation, className }: TestimonialProps) {
  return (
    <div className={cn("bg-background border border-border rounded-xl p-6 shadow-sm", className)}>
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={cn(
              "h-5 w-5",
              i < rating ? "text-yellow-500 fill-yellow-500" : "text-muted"
            )} 
          />
        ))}
      </div>
      
      <div className="relative mb-4">
        <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
        <p className="text-foreground pl-6 leading-relaxed">{text}</p>
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div>
          <div className="font-semibold text-foreground">{name}</div>
          <div className="text-sm text-muted-foreground">{location}</div>
        </div>
        <div className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
          {situation}
        </div>
      </div>
    </div>
  );
}

export function TrustBadges() {
  const badges = [
    { icon: '🏆', text: '15+ Years Experience' },
    { icon: '✓', text: 'Licensed Agents' },
    { icon: '⭐', text: '4.8/5 Rating' },
    { icon: '🛡️', text: 'A+ BBB Rating' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {badges.map((badge, i) => (
        <div 
          key={i}
          className="flex items-center gap-2 bg-background border border-border rounded-lg px-4 py-2 shadow-sm"
        >
          <span className="text-2xl">{badge.icon}</span>
          <span className="text-sm font-medium text-foreground">{badge.text}</span>
        </div>
      ))}
    </div>
  );
}

interface StatsBarProps {
  className?: string;
}

export function StatsBar({ className }: StatsBarProps) {
  const stats = [
    { value: '10,000+', label: 'Homeowners Helped' },
    { value: '95%', label: 'Success Rate' },
    { value: '24hr', label: 'Avg Response' },
    { value: '44', label: 'States Served' },
  ];

  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-6", className)}>
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-muted-foreground">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

// Sample testimonials data
export const TESTIMONIALS = [
  {
    name: "Jennifer R.",
    location: "Miami, FL",
    rating: 5,
    text: "After Hurricane Ian, I was dropped by my carrier. HighRiskHomeowners connected me with a specialist who found private coverage for $2,000 less than Citizens. Incredible service!",
    situation: "Coastal Property"
  },
  {
    name: "Michael D.",
    location: "Denver, CO",
    rating: 5,
    text: "Living in the wildfire zone, I thought FAIR Plan was my only option. The agent they referred found me private coverage with better terms and lower deductibles.",
    situation: "Wildfire Risk"
  },
  {
    name: "Sarah K.",
    location: "Philadelphia, PA",
    rating: 5,
    text: "My 70-year-old home was 'uninsurable' according to three agents. The specialist found coverage within 48 hours. I can't thank them enough!",
    situation: "Older Home"
  },
  {
    name: "Robert T.",
    location: "Austin, TX",
    rating: 5,
    text: "Three water damage claims made me high-risk. Others turned me away, but the specialist they connected me with found affordable coverage. True professionals.",
    situation: "Claims History"
  }
];
