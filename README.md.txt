# Bruce's Killer Keynote Builder

An AI-powered keynote creation app based on Bruce Wade's "Crafting a Killer Keynote" methodology.

## Overview

This application guides professional speakers through the systematic process of creating powerful keynotes using Bruce Wade's proven framework. The app transforms the complex art of keynote scripting into a structured, step-by-step process.

## Features

- **4-Step Guided Process**: Planning → Framework → Action & Story → Final Review
- **Bruce Wade's 9-Point Framework**: Psychological journey from Point A to Point C
- **AI-Powered Suggestions**: Context-aware content generation for each section
- **Dark Theme Interface**: Professional appearance with Bruce Wade branding
- **Export Functionality**: Generate complete keynote scripts
- **Progress Tracking**: Save and resume keynote development

## Bruce Wade's Framework

### The Psychological Journey
The framework moves audiences through a specific emotional and intellectual path:

**A** → **D** → **E** → **F** → **G** → **C**

- **Point A**: Current problem/situation (What Is?)
- **Point B**: Utopian solution (What Wow?)
- **Point C**: Realistic achievable outcome (What If?)
- **Point D**: Your methodology/solution (What Now?)
- **Point E**: Address objections (Why No?)
- **Point F**: Counter objections (Why Yes?)
- **Point G**: Implementation steps (How Now?)

### Card Categories

1. **Planning Cards (Blue)**: Position, Topic, Audience, Venue, Outline, Content, Outcome
2. **Framework Cards (Green)**: 9-point journey structure
3. **Action Cards (Orange)**: Call-to-action strategy
4. **Story Cards (Red)**: Narrative elements
5. **Who Am I Cards (Purple)**: Speaker positioning
6. **Emotion Cards (Yellow)**: Emotional engagement

## Installation & Setup

### Option 1: React App (Recommended)

```bash
npx create-react-app bruce-keynote-builder
cd bruce-keynote-builder
npm install lucide-react
# Replace src/App.js with the provided App.js file
npm start
```

### Option 2: GitHub Pages Deployment

1. Create new GitHub repository
2. Clone and set up the project:
```bash
git clone https://github.com/yourusername/bruce-keynote-builder.git
cd bruce-keynote-builder
npm install
```

3. Add GitHub Pages deployment:
```bash
npm install --save-dev gh-pages
```

4. Update package.json with homepage URL and deploy scripts (see package.json file)

5. Deploy to GitHub Pages:
```bash
npm run deploy
```

Your app will be live at: `https://yourusername.github.io/bruce-keynote-builder`

### Option 3: Standalone HTML

Use the `keynote-builder.html` file for immediate local testing:
1. Download the HTML file
2. Open in any modern web browser
3. No installation required

## File Structure

```
bruce-keynote-builder/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js          # Main application component
│   ├── App.css         # Custom styles
│   └── index.js        # React entry point
├── package.json        # Dependencies and scripts
├── README.md          # This documentation
└── keynote-builder.html # Standalone version
```

## Usage Guide

### Step 1: Planning
- Define your positioning and expertise
- Select your keynote topic and target audience
- Understand venue requirements
- Set clear desired outcomes

### Step 2: Framework Development
- Use Bruce Wade's 9-point journey structure
- Start with Point A (current problem)
- Paint the vision with Points B & C
- Present your solution methodology (Point D)
- Address resistance with Points E & F
- Provide implementation steps (Point G)

### Step 3: Action & Story Integration
- Develop your call-to-action strategy
- Create compelling story elements
- Position yourself as the authority
- Plan pre-speech and post-speech activities

### Step 4: Final Review & Export
- Review complete keynote blueprint
- Export your finished script
- Save progress for future iterations

## Key Methodology Principles

Bruce Wade's approach treats keynotes as "change management edutainment" - moving audiences from one mindset to another through:

1. **Emotional Engagement**: Using stories and experiences to connect
2. **Logical Progression**: Following the A→D→E→F→G→C pathway
3. **Resistance Management**: Addressing objections before they arise
4. **Action Orientation**: Clear next steps for implementation

## Development

### Running Locally
```bash
npm start
```
Opens the app in development mode at http://localhost:3000

### Building for Production
```bash
npm run build
```
Creates optimized production build in the `build/` folder

### Testing
```bash
npm test
```
Launches the test runner in watch mode

## Contributing

This project is based on Bruce Wade's copyrighted methodology from "Crafting a Killer Keynote." Please respect intellectual property rights when contributing.

## License

This application implements Bruce Wade's methodology with permission. The original methodology and book content are copyrighted by Bruce Wade and EM Solutions (Pty) Ltd.

## Contact

For questions about Bruce Wade's methodology, visit: https://brucewade.co.za

## Acknowledgments

- Bruce Wade for the original "Crafting a Killer Keynote" methodology
- Professional Speaking Association of Southern Africa
- The speaking community for feedback and inspiration