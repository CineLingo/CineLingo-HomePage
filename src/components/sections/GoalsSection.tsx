interface GoalItemProps {
  number: string;
  title: string;
  description: string;
  subtitle?: string;
  actionText?: string;
  actionLink?: string;
}

function GoalItem({ number, title, description, subtitle, actionText, actionLink }: GoalItemProps) {
  return (
    <div className="mb-32 last:mb-0">
      <div className="flex items-start gap-16">
        {/* Number and Title on same line */}
        <div className="flex items-baseline gap-10 flex-shrink-0">
          <div className="text-8xl md:text-9xl lg:text-[10rem] font-bold text-gray-200 leading-none">
            {number}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {title}
          </h2>
        </div>
        
        {/* Content */}
        <div className="flex-1 pt-6">
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed font-light">
            {description}
          </p>
          {subtitle && (
            <p className="text-base md:text-lg text-gray-500 mb-8 leading-relaxed font-light">
              {subtitle}
            </p>
          )}
          {actionText && actionLink && (
            <a 
              href={actionLink}
              className="inline-block text-blue-600 hover:text-blue-800 font-medium text-lg transition-colors duration-200"
            >
              {actionText} →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

interface GoalsSectionProps {
  className?: string;
}

export default function GoalsSection({ className = "" }: GoalsSectionProps) {
  return (
    <section id="research" className={`py-40 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-32">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            To start, we have two goals
          </h2>
        </div>

        {/* Goals */}
        <div className="space-y-32">
          <GoalItem
            number="01"
            title="A personal language companion"
            description="An AI-powered tutor that adapts to your learning style, providing personalized conversations and feedback to help you master new languages naturally and efficiently."
            actionText="Try our research demo"
            actionLink="#demo"
          />
          
          <GoalItem
            number="02"
            title="Immersive learning experiences"
            description="Interactive scenarios and real-world conversations that make language learning engaging and practical, breaking down the barriers between classroom and real life."
            subtitle="Crossing the uncanny valley of conversational language learning"
            actionText="Explore our approach"
            actionLink="#approach"
          />
        </div>
      </div>
    </section>
  );
} 