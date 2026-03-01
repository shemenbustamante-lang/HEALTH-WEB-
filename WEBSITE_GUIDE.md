# Student Health Hub - Website Guide

## Overview
An interactive healthy eating guide designed specifically for Filipino students. The website helps students learn about nutrition, plan meals, track habits, and build healthy eating routines through gamification.

## Pages

### 1. Homepage (index.html)
**Purpose:** Welcome and introduce users to the website

**Sections:**
- Hero section with welcome message
- Benefits of healthy eating (4 cards)
- "For Students Like You" personalized sections
- Quick tools: Daily checklist, food habit self-check, weekly challenge preview
- Call-to-action buttons

### 2. What Should I Eat? (meals.html)
**Purpose:** Provide meal ideas with nutritional information

**Sections:**
- **Breakfast:** 6 options with nutrient tags
- **Lunch:** 6 options with nutrient tags
- **Snacks:** 8 healthy options + foods to limit
- **Budget-Friendly:** 6 affordable options with pricing

### 3. Know Your Nutrients (nutrients.html)
**Purpose:** Educate students about nutrients in food

**Content:**
- 12 nutrient cards with detailed information
- What each nutrient does
- Food sources for each nutrient
- Fun facts about nutrition
- Nutrient combination tips
- Daily nutrient checklist

### 4. Student Health Tips (tips.html)
**Purpose:** Provide practical health advice

**Content:**
- 12 detailed tip cards
- 8 quick bonus tips
- Motivation section
- Each tip includes "why it matters" and easy actions

### 5. Check My Habits (habits.html)
**Purpose:** Interactive quiz to assess eating habits

**Features:**
- 10 multiple-choice questions
- Automatic scoring (0-50 points)
- Personalized feedback based on score
- Custom recommendations
- Badge rewards
- Action buttons to take next steps

### 6. Weekly Challenge (challenge.html)
**Purpose:** Gamified challenges to build healthy habits

**Features:**
- Featured challenge spotlight
- 8 different challenges with progress tracking
- Educational trivia for each challenge
- Badge collection system
- Motivational quotes

## Color Scheme

**Primary Colors:**
- Primary Green: `#7bc96f`
- Light Green: `#a8e6a1`
- Soft Green: `#e8f5e6`
- Dark Green: `#5a9a4e`

**Additional Colors:**
- Background: `#f9fdf8`
- Text Dark: `#2d3e2f`
- Text Light: `#6b8068`
- Border: `#d4e7d2`

## Interactive Features

### Progress Tracking
- Challenge progress saved in localStorage
- Persistent across page refreshes
- Progress bars show completion percentage
- Day counters update automatically

### Badge System
- Earn badges by completing challenges
- Badges displayed in collection section
- 9 different badges available
- Visual celebration when earned

### Quiz System
- 10 questions with 5 options each
- Scoring algorithm (5 points per question max)
- 4 result categories:
  - Excellent (45-50 points)
  - Very Good (35-44 points)
  - Good Start (25-34 points)
  - Needs Improvement (0-24 points)
- Personalized recommendations

### Checklist Features
- Interactive checkboxes
- States saved in localStorage
- Visual feedback on completion
- Daily food tracking

## Design Principles

1. **Student-Friendly:** Simple language, relatable content
2. **Encouraging:** Positive reinforcement, no judgment
3. **Visual:** Icons, colors, images for engagement
4. **Interactive:** Quizzes, challenges, tracking
5. **Educational:** Explains WHY, not just WHAT
6. **Practical:** Affordable options, Filipino foods
7. **Gamified:** Badges, progress bars, challenges

## Technical Details

### File Structure
```
HEALTH-WEB-/
├── index.html          # Homepage
├── meals.html          # Meal guide
├── nutrients.html      # Nutrient education
├── tips.html           # Health tips
├── habits.html         # Habits quiz
├── challenge.html      # Weekly challenges
├── styles.css          # All styling
├── script.js           # All functionality
└── README.md           # Project description
```

### Technologies Used
- **HTML5:** Semantic markup
- **CSS3:** Modern styling with flexbox/grid
- **Vanilla JavaScript:** No frameworks
- **LocalStorage API:** Data persistence
- **Responsive Design:** Mobile-first approach

### Browser Compatibility
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## How to Use

### For Students:
1. Start at homepage to understand the benefits
2. Explore "What Should I Eat?" for meal ideas
3. Learn about nutrients in "Know Your Nutrients"
4. Take the habits quiz to assess current eating
5. Choose challenges to improve habits
6. Track daily progress with checklists
7. Earn badges for completing challenges

### For Educators:
- Use as classroom resource for nutrition education
- Assign weekly challenges to students
- Track student engagement through quiz results
- Supplement with additional Filipino meal examples

## Future Enhancements (Optional)

- Recipe videos or step-by-step cooking guides
- Meal planning calendar
- Printable grocery lists
- Social sharing of achievements
- More challenges and badges
- Integration with health tracking apps
- Multilingual support (Tagalog option)

## Accessibility Features

- Semantic HTML for screen readers
- Clear contrast ratios
- Keyboard navigation support
- Readable font sizes
- Descriptive alt text for images
- Focus indicators on interactive elements

## Credits

Designed for Filipino students to promote healthy eating habits in an engaging, non-judgmental way. All content created with student wellness in mind.

---

**Last Updated:** March 2026
**Version:** 1.0
