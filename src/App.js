import React, { useState, useReducer } from 'react';
import { ChevronRight, ChevronLeft, Download, Save, Play, Users, Target, MapPin, Clock, Lightbulb, Heart, MessageSquare, User, Sparkles } from 'lucide-react';

const CARD_CATEGORIES = {
  planning: { color: 'bg-blue-500', name: 'Planning', icon: Target },
  framework: { color: 'bg-green-500', name: 'Framework', icon: MapPin },
  action: { color: 'bg-orange-500', name: 'Action', icon: Play },
  story: { color: 'bg-red-500', name: 'Story', icon: MessageSquare },
  whoami: { color: 'bg-purple-500', name: 'Who Am I', icon: User },
  emotion: { color: 'bg-yellow-500', name: 'Emotion', icon: Heart }
};

const PLANNING_CARDS = [
  { id: 'position', title: 'Position', description: 'Develop online/offline presence as thought leader' },
  { id: 'topic', title: 'Topic', description: 'Select relevant, topical subject with clear outcomes' },
  { id: 'audience', title: 'Audience', description: 'Know your audience demographics and needs' },
  { id: 'venue', title: 'Venue', description: 'Understand location, stage, seating, equipment' },
  { id: 'outline', title: 'Speech Outline', description: 'Choose speech type and stick with it' },
  { id: 'content', title: 'Content', description: 'Gather facts, research, quotes, applications' },
  { id: 'outcome', title: 'Outcome', description: 'Define desired audience outcomes' }
];

const FRAMEWORK_CARDS = [
  { id: 'introduction', title: 'Speaker Introduction', point: '', description: 'Third-person introduction positioning you as authority' },
  { id: 'greetings', title: 'Greetings', point: '', description: 'Acknowledge VIPs and follow proper protocols' },
  { id: 'whatis', title: 'What Is?', point: 'A', description: 'Current situation/problem that needs addressing' },
  { id: 'whatwow', title: 'What Wow?', point: 'B', description: 'Utopian ideal solution - stretch their imagination' },
  { id: 'whatif', title: 'What If?', point: 'C', description: 'Realistic achievable solution they can visualize' },
  { id: 'whatnow', title: 'What Now?', point: 'D', description: 'Present your blueprint/methodology/strategy' },
  { id: 'whyno', title: 'Why No?', point: 'E', description: 'Address audience concerns and objections' },
  { id: 'whyyes', title: 'Why Yes?', point: 'F', description: 'Provide solutions to overcome objections' },
  { id: 'hownow', title: 'How Now?', point: 'G', description: 'Specific steps and actions for implementation' }
];

const speechReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.section]: {
          ...state[action.section],
          [action.field]: action.value
        }
      };
    case 'GENERATE_CONTENT':
      return {
        ...state,
        generated: {
          ...state.generated,
          [action.section]: action.content
        }
      };
    default:
      return state;
  }
};

const initialState = {
  planning: {},
  framework: {},
  action: {},
  story: {},
  whoami: {},
  emotion: {},
  generated: {}
};

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [speechData, dispatch] = useReducer(speechReducer, initialState);
  const [activeCard, setActiveCard] = useState(null);

  const steps = ['Planning', 'Framework', 'Action & Story', 'Final Review'];

  const updateField = (section, field, value) => {
    dispatch({ type: 'UPDATE_FIELD', section, field, value });
  };

  const generateSuggestion = (cardId, context) => {
    // AI-powered content generation based on the methodology
    const suggestions = {
      position: "Build your authority through LinkedIn articles, speaking videos, and industry publications. Focus on your unique expertise in [your field].",
      topic: "Based on current trends, consider topics around digital transformation, resilience, or sustainable innovation that align with your expertise.",
      whatis: "Paint a picture of the current challenges your audience faces. Use statistics, trends, or relatable scenarios that make them nod in recognition.",
      whatwow: "Imagine if every challenge was solved perfectly - what would that world look like? Be bold, be visionary, stretch their imagination.",
      whatif: "Now bring it back to reality. What's a achievable version of that vision that they can actually work toward?",
      whyno: "Your audience is thinking: 'We don't have time/money/resources' or 'This won't work in our industry'. Address these head-on.",
      whyyes: "Counter each objection with specific solutions: new budget allocations, time-saving strategies, or industry-specific adaptations."
    };

    return suggestions[cardId] || "Consider how this element serves your speech's journey from Point A to Point C.";
  };

  const renderPlanningStep = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PLANNING_CARDS.map((card) => (
          <div key={card.id} className="bg-gray-700 border border-blue-300 rounded-lg p-4">
            <h3 className="font-semibold text-blue-300 mb-2">{card.title}</h3>
            <p className="text-sm text-gray-300 mb-3">{card.description}</p>
            <textarea
              className="w-full p-2 border border-gray-500 rounded-md text-sm bg-white text-black"
              rows="3"
              placeholder="Enter your details..."
              value={speechData.planning[card.id] || ''}
              onChange={(e) => updateField('planning', card.id, e.target.value)}
            />
            <button
              onClick={() => setActiveCard(card.id)}
              className="mt-2 text-xs text-blue-400 hover:text-blue-300 flex items-center"
            >
              <Lightbulb className="w-3 h-3 mr-1" />
              Get AI suggestion
            </button>
            {activeCard === card.id && (
              <div className="mt-2 p-2 bg-blue-900 rounded text-xs text-white">
                {generateSuggestion(card.id)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderFrameworkStep = () => (
    <div className="space-y-6">
      <div className="bg-gray-700 border border-green-400 p-4 rounded-lg mb-6">
        <h3 className="font-semibold text-green-300 mb-2">Framework Journey: A → D → E → F → G → C</h3>
        <p className="text-sm text-gray-300">
          Your audience starts at Point A (current problem), goes through your methodology (D), 
          addresses concerns (E→F), learns how to implement (G), and arrives at Point C (desired outcome).
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {FRAMEWORK_CARDS.map((card) => (
          <div key={card.id} className="bg-gray-700 border border-green-300 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-green-300">{card.title}</h3>
              {card.point && (
                <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                  Point {card.point}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-300 mb-3">{card.description}</p>
            <textarea
              className="w-full p-2 border border-gray-500 rounded-md text-sm bg-white text-black"
              rows="4"
              placeholder="Develop this section of your keynote..."
              value={speechData.framework[card.id] || ''}
              onChange={(e) => updateField('framework', card.id, e.target.value)}
            />
            <button
              onClick={() => setActiveCard(card.id)}
              className="mt-2 text-xs text-green-400 hover:text-green-300 flex items-center"
            >
              <Sparkles className="w-3 h-3 mr-1" />
              AI guidance
            </button>
            {activeCard === card.id && (
              <div className="mt-2 p-2 bg-green-900 rounded text-xs text-white">
                {generateSuggestion(card.id)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderActionStoryStep = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Action Cards */}
      <div className="space-y-4">
        <h3 className="font-bold text-orange-300 flex items-center">
          <Play className="w-5 h-5 mr-2" />
          Action Elements
        </h3>
        
        {['Pre-Speech', 'The Setup', 'Options', 'Motivation', 'Decision Time', 'Post-Speech'].map((action, idx) => (
          <div key={action} className="bg-gray-700 border border-orange-300 rounded-lg p-4">
            <h4 className="font-semibold text-orange-300 mb-2">Action {idx + 1}: {action}</h4>
            <textarea
              className="w-full p-2 border border-gray-500 rounded-md text-sm bg-white text-black"
              rows="3"
              placeholder={`Define your ${action.toLowerCase()} strategy...`}
              value={speechData.action[action.toLowerCase()] || ''}
              onChange={(e) => updateField('action', action.toLowerCase(), e.target.value)}
            />
          </div>
        ))}
      </div>

      {/* Story Cards */}
      <div className="space-y-4">
        <h3 className="font-bold text-red-300 flex items-center">
          <MessageSquare className="w-5 h-5 mr-2" />
          Story Elements
        </h3>
        
        {['Main Story Part 1', 'Main Story Part 2', 'Supporting Story', 'Who Am I'].map((story) => (
          <div key={story} className="bg-gray-700 border border-red-300 rounded-lg p-4">
            <h4 className="font-semibold text-red-300 mb-2">{story}</h4>
            <textarea
              className="w-full p-2 border border-gray-500 rounded-md text-sm bg-white text-black"
              rows="4"
              placeholder={`Develop your ${story.toLowerCase()}...`}
              value={speechData.story[story.toLowerCase().replace(/\s/g, '')] || ''}
              onChange={(e) => updateField('story', story.toLowerCase().replace(/\s/g, ''), e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );

  const renderFinalReview = () => (
    <div className="space-y-6">
      <div className="bg-gray-700 border border-purple-400 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-purple-300 mb-4">Your Keynote Blueprint</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-gray-600 p-3 rounded">
            <strong className="text-white">Topic:</strong> <span className="text-gray-300">{speechData.planning.topic || 'Not defined'}</span>
          </div>
          <div className="bg-gray-600 p-3 rounded">
            <strong className="text-white">Audience:</strong> <span className="text-gray-300">{speechData.planning.audience || 'Not defined'}</span>
          </div>
          <div className="bg-gray-600 p-3 rounded">
            <strong className="text-white">Outcome:</strong> <span className="text-gray-300">{speechData.planning.outcome || 'Not defined'}</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 border border-gray-500 rounded-lg p-4">
        <h4 className="font-semibold text-white mb-3">Speech Flow Summary</h4>
        <div className="space-y-2 text-sm">
          <div className="text-gray-300"><strong className="text-white">Opening (Point A):</strong> {speechData.framework.whatis || 'Define current problem'}</div>
          <div className="text-gray-300"><strong className="text-white">Vision (Point B→C):</strong> {speechData.framework.whatwow || 'Paint the ideal future'}</div>
          <div className="text-gray-300"><strong className="text-white">Solution (Point D):</strong> {speechData.framework.whatnow || 'Present your methodology'}</div>
          <div className="text-gray-300"><strong className="text-white">Objections (Point E→F):</strong> {speechData.framework.whyno || 'Address concerns'}</div>
          <div className="text-gray-300"><strong className="text-white">Action (Point G):</strong> {speechData.framework.hownow || 'Provide implementation steps'}</div>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center">
          <Download className="w-4 h-4 mr-2" />
          Export Keynote Script
        </button>
        <button className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 flex items-center justify-center">
          <Save className="w-4 h-4 mr-2" />
          Save Progress
        </button>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0: return renderPlanningStep();
      case 1: return renderFrameworkStep();
      case 2: return renderActionStoryStep();
      case 3: return renderFinalReview();
      default: return renderPlanningStep();
    }
  };

  return (
    <div className="min-h-screen bg-gray-800">
      {/* Header */}
      <div className="bg-blue-600 border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <img 
              src="https://brucewade.co.za/wp-content/uploads/2023/08/Logo100.png" 
              alt="Bruce Wade Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">Bruce's Killer Keynote Builder</h1>
              <p className="text-blue-100">AI-powered keynote creation based on Bruce Wade's methodology</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-gray-700 border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {steps.map((step, idx) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  idx <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-500 text-white'
                }`}>
                  {idx + 1}
                </div>
                <span className={`ml-2 text-sm ${idx <= currentStep ? 'text-blue-400' : 'text-gray-300'}`}>
                  {step}
                </span>
                {idx < steps.length - 1 && (
                  <ChevronRight className="w-4 h-4 mx-4 text-gray-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">{steps[currentStep]}</h2>
        </div>

        {renderCurrentStep()}

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="flex items-center px-4 py-2 text-gray-300 disabled:opacity-50 hover:text-white"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </button>
          <button
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            disabled={currentStep === steps.length - 1}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}