interface Theory {
  id: string
  title: string
  description: string
  content: any
}

interface TheoryCardProps {
  theory: Theory
  isExpanded: boolean
  onRead?: () => void
  isRead?: boolean
}

export default function TheoryCard({ theory, isExpanded, onRead, isRead = false }: TheoryCardProps) {
  const handleReadComplete = () => {
    if (onRead && !isRead) {
      onRead()
    }
  }

  const renderContent = () => {
    switch (theory.id) {
      case 'mintzberg':
        return (
          <div className="space-y-6">
            {theory.content.categories.map((category: any, index: number) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-lg mb-3 text-blue-700">
                  {category.name}
                </h4>
                <div className="grid gap-3">
                  {category.roles.map((role: any, roleIndex: number) => (
                    <div key={roleIndex} className="bg-white p-3 rounded border-l-4 border-blue-400">
                      <div className="font-medium text-gray-800">{role.name}</div>
                      <div className="text-sm text-gray-600">{role.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h4 className="font-semibold text-green-800 mb-2">⚽ Sportvoorbeeld:</h4>
              <p className="text-green-700">{theory.content.sportExample}</p>
            </div>
          </div>
        )

      case 'hersey-blanchard':
        return (
          <div className="space-y-6">
            {/* Introduction */}
            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
              <h4 className="font-semibold text-lg text-indigo-800 mb-2">{theory.content.introduction.title}</h4>
              <p className="text-indigo-700 mb-3">{theory.content.introduction.description}</p>
              <div className="bg-indigo-100 p-3 rounded">
                <p className="text-indigo-800 font-medium text-sm">💡 {theory.content.introduction.keyInsight}</p>
              </div>
            </div>

            {/* Core Model */}
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h4 className="font-semibold text-lg text-blue-800 mb-2">{theory.content.coreModel.title}</h4>
              <p className="text-blue-700 mb-4">{theory.content.coreModel.description}</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {theory.content.coreModel.dimensions.map((dimension: any, index: number) => (
                  <div key={index} className="bg-white p-4 rounded">
                    <h5 className="font-medium text-blue-800 mb-2">{dimension.name}</h5>
                    <p className="text-sm text-gray-600 mb-3">{dimension.description}</p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      {dimension.characteristics.map((char: string, charIndex: number) => (
                        <li key={charIndex}>• {char}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Development Levels */}
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-4">🎯 Ontwikkelingsniveaus</h4>
              <div className="grid gap-4">
                {theory.content.developmentLevels.map((level: any, index: number) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <h5 className="font-semibold text-orange-700 mb-2">{level.level}</h5>
                    <div className="grid md:grid-cols-2 gap-2 mb-3">
                      <div className="text-sm">
                        <span className="font-medium">Competentie:</span> {level.competence}
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Betrokkenheid:</span> {level.commitment}
                      </div>
                    </div>
                    <div className="mb-3">
                      <span className="font-medium text-sm">Kenmerken:</span>
                      <ul className="text-sm text-gray-600 mt-1">
                        {level.characteristics.map((char: string, charIndex: number) => (
                          <li key={charIndex}>• {char}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-3 bg-gray-50 p-2 rounded">
                      <span className="font-medium text-sm">Wat nodig:</span>
                      <p className="text-sm text-gray-700">{level.needs}</p>
                    </div>
                    <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-400">
                      <strong className="text-orange-800">⚽ Sportvoorbeeld:</strong>
                      <p className="text-orange-700 text-sm">{level.sportExample}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership Styles */}
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-4">👨‍💼 Leiderschapsstijlen</h4>
              <div className="grid gap-4">
                {theory.content.leadershipStyles.map((style: any, index: number) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <h5 className="font-semibold text-green-700 mb-2">{style.style}</h5>
                    <div className="mb-2">
                      <span className="text-sm font-medium">Gedrag:</span>
                      <span className="text-sm text-gray-600 ml-2">{style.behavior}</span>
                    </div>
                    <div className="mb-3">
                      <span className="text-sm font-medium">Wanneer:</span>
                      <span className="text-sm text-gray-600 ml-2">{style.when}</span>
                    </div>
                    <div className="mb-3">
                      <p className="text-sm text-gray-700">{style.description}</p>
                    </div>
                    <div className="mb-3">
                      <span className="font-medium text-sm">Aanpak:</span>
                      <ul className="text-sm text-gray-600 mt-1">
                        {style.approach.map((item: string, itemIndex: number) => (
                          <li key={itemIndex}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                      <strong className="text-green-800">⚽ Sportvoorbeeld:</strong>
                      <p className="text-green-700 text-sm">{style.sportExample}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Principles */}
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-3">🔑 Kernprincipes</h4>
              <ul className="space-y-2">
                {theory.content.keyPrinciples.map((principle: string, index: number) => (
                  <li key={index} className="text-purple-700 text-sm flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    {principle}
                  </li>
                ))}
              </ul>
            </div>

            {/* Diagnostic Process */}
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
              <h4 className="font-semibold text-gray-800 mb-3">🔍 Diagnostisch Proces</h4>
              <ol className="space-y-2">
                {theory.content.diagnosticProcess.map((step: string, index: number) => (
                  <li key={index} className="text-gray-700 text-sm flex items-start">
                    <span className="text-gray-500 mr-2 font-medium">{index + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Common Mistakes */}
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h4 className="font-semibold text-red-800 mb-3">⚠️ Veelgemaakte Fouten</h4>
              <ul className="space-y-2">
                {theory.content.commonMistakes.map((mistake: string, index: number) => (
                  <li key={index} className="text-red-700 text-sm flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    {mistake}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h4 className="font-semibold text-green-800 mb-3">✅ Voordelen van SLII</h4>
              <ul className="space-y-2">
                {theory.content.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="text-green-700 text-sm flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )

      case 'machtsbronnen':
        return (
          <div className="space-y-6">
            {/* Introduction */}
            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
              <h4 className="font-semibold text-lg text-indigo-800 mb-2">{theory.content.introduction.title}</h4>
              <p className="text-indigo-700 mb-3">{theory.content.introduction.description}</p>
              <div className="bg-indigo-100 p-3 rounded">
                <p className="text-indigo-800 font-medium text-sm">💡 {theory.content.introduction.keyInsight}</p>
              </div>
            </div>

            {/* Power Sources */}
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-4">⚡ De Vijf Machtsbronnen</h4>
              <div className="space-y-6">
                {theory.content.powerSources.map((power: any, index: number) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <h5 className="font-semibold text-xl text-blue-700 mb-2">{power.name}</h5>
                    <p className="text-gray-700 mb-4">{power.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-green-50 p-3 rounded">
                        <h6 className="font-medium text-green-800 mb-2">✅ Voordelen:</h6>
                        <ul className="text-sm text-green-700 space-y-1">
                          {power.advantages.map((advantage: string, advIndex: number) => (
                            <li key={advIndex}>• {advantage}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-red-50 p-3 rounded">
                        <h6 className="font-medium text-red-800 mb-2">⚠️ Nadelen:</h6>
                        <ul className="text-sm text-red-700 space-y-1">
                          {power.disadvantages.map((disadvantage: string, disIndex: number) => (
                            <li key={disIndex}>• {disadvantage}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h6 className="font-medium text-gray-800 mb-2">Kenmerken:</h6>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {power.characteristics.map((char: string, charIndex: number) => (
                          <li key={charIndex}>• {char}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400 mb-4">
                      <strong className="text-blue-800">⚽ Sportvoorbeeld:</strong>
                      <p className="text-blue-700 text-sm">{power.sportExample}</p>
                    </div>

                    <div className="bg-yellow-50 p-3 rounded">
                      <h6 className="font-medium text-yellow-800 mb-2">💡 Effectief Gebruik:</h6>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        {power.effectiveUse.map((use: string, useIndex: number) => (
                          <li key={useIndex}>• {use}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Power Combinations */}
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-3">{theory.content.powerCombinations.title}</h4>
              <p className="text-purple-700 mb-4">{theory.content.powerCombinations.description}</p>
              
              <div className="space-y-4">
                {theory.content.powerCombinations.combinations.map((combo: any, index: number) => (
                  <div key={index} className="bg-white p-3 rounded">
                    <h6 className="font-medium text-gray-800 mb-2">📋 {combo.situation}</h6>
                    <div className="mb-2">
                      <span className="text-sm font-medium">Machtsbronnen: </span>
                      <span className="text-sm text-purple-600">{combo.powers.join(', ')}</span>
                    </div>
                    <p className="text-sm text-gray-600">{combo.rationale}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Developing Power */}
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h4 className="font-semibold text-green-800 mb-3">{theory.content.developingPower.title}</h4>
              <p className="text-green-700 mb-4">{theory.content.developingPower.description}</p>
              
              <div className="space-y-4">
                {theory.content.developingPower.strategies.map((strategy: any, index: number) => (
                  <div key={index} className="bg-white p-3 rounded">
                    <h6 className="font-medium text-gray-800 mb-2">🚀 {strategy.powerType}</h6>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {strategy.development.map((dev: string, devIndex: number) => (
                        <li key={devIndex}>• {dev}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Ethical Considerations */}
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h4 className="font-semibold text-orange-800 mb-3">🤝 Ethische Overwegingen</h4>
              <ul className="space-y-2">
                {theory.content.ethicalConsiderations.principles.map((consideration: string, index: number) => (
                  <li key={index} className="text-orange-700 text-sm flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {consideration}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )

      case 'macht-in-leiderschap':
        return (
          <div className="space-y-6">
            {/* Introduction */}
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h4 className="font-semibold text-lg text-red-800 mb-2">{theory.content.introduction.title}</h4>
              <p className="text-red-700 mb-3">{theory.content.introduction.description}</p>
              <div className="bg-red-100 p-3 rounded">
                <p className="text-red-800 font-medium text-sm">💡 {theory.content.introduction.keyInsight}</p>
              </div>
            </div>

            {/* Keltner's Theory */}
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-4">🧠 Keltner's Theorie: "Macht beschadigt je brein"</h4>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400 mb-4">
                <h5 className="font-semibold text-orange-800 mb-2">⚠️ Het Probleem met Macht</h5>
                <p className="text-orange-700 mb-3">{theory.content.keltnerTheory.problem.description}</p>
                <ul className="space-y-2">
                  {theory.content.keltnerTheory.problem.effects.map((effect: string, index: number) => (
                    <li key={index} className="text-orange-600 text-sm flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      {effect}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                <h5 className="font-semibold text-green-800 mb-3">✅ Keltner's 4 Preventiestrategieën</h5>
                <div className="space-y-4">
                  {theory.content.keltnerTheory.preventionStrategies.map((strategy: any, index: number) => (
                    <div key={index} className="bg-white p-3 rounded">
                      <h6 className="font-medium text-gray-800 mb-2">{strategy.name}</h6>
                      <p className="text-sm text-gray-600 mb-2">{strategy.description}</p>
                      <div className="bg-green-100 p-2 rounded">
                        <span className="text-xs font-medium text-green-800">Praktijk:</span>
                        <p className="text-xs text-green-700">{strategy.practice}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Marcus & Van Dam Power Sources */}
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-4">⚡ Marcus & Van Dam: 6 Machtsbronnen</h4>
              
              {/* Position-based Power */}
              <div className="mb-6">
                <h5 className="font-semibold text-blue-700 mb-3">🏢 Positie-gebonden Machtsbronnen</h5>
                <div className="space-y-4">
                  {theory.content.marcusVanDam.positionBased.map((power: any, index: number) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <h6 className="font-semibold text-blue-700 mb-2">{power.name}</h6>
                      <p className="text-gray-700 mb-3">{power.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-3 mb-3">
                        <div className="bg-green-50 p-2 rounded">
                          <span className="font-medium text-green-800 text-sm">Voordelen:</span>
                          <ul className="text-xs text-green-700 mt-1">
                            {power.advantages.map((adv: string, advIndex: number) => (
                              <li key={advIndex}>• {adv}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-red-50 p-2 rounded">
                          <span className="font-medium text-red-800 text-sm">Nadelen:</span>
                          <ul className="text-xs text-red-700 mt-1">
                            {power.disadvantages.map((dis: string, disIndex: number) => (
                              <li key={disIndex}>• {dis}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                        <strong className="text-blue-800">⚽ Sportvoorbeeld:</strong>
                        <p className="text-blue-700 text-sm">{power.sportExample}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Person-based Power */}
              <div className="mb-6">
                <h5 className="font-semibold text-purple-700 mb-3">👤 Persoon-gebonden Machtsbronnen</h5>
                <div className="space-y-4">
                  {theory.content.marcusVanDam.personBased.map((power: any, index: number) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <h6 className="font-semibold text-purple-700 mb-2">{power.name}</h6>
                      <p className="text-gray-700 mb-3">{power.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-3 mb-3">
                        <div className="bg-green-50 p-2 rounded">
                          <span className="font-medium text-green-800 text-sm">Voordelen:</span>
                          <ul className="text-xs text-green-700 mt-1">
                            {power.advantages.map((adv: string, advIndex: number) => (
                              <li key={advIndex}>• {adv}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-red-50 p-2 rounded">
                          <span className="font-medium text-red-800 text-sm">Nadelen:</span>
                          <ul className="text-xs text-red-700 mt-1">
                            {power.disadvantages.map((dis: string, disIndex: number) => (
                              <li key={disIndex}>• {dis}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-400">
                        <strong className="text-purple-800">⚽ Sportvoorbeeld:</strong>
                        <p className="text-purple-700 text-sm">{power.sportExample}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Integration */}
            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
              <h4 className="font-semibold text-indigo-800 mb-3">{theory.content.integration.title}</h4>
              <p className="text-indigo-700 mb-4">{theory.content.integration.description}</p>
              
              <div className="space-y-3">
                {theory.content.integration.keyPoints.map((point: string, index: number) => (
                  <div key={index} className="bg-white p-3 rounded">
                    <p className="text-sm text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Applications */}
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-800 mb-3">💡 Praktische Toepassingen</h4>
              <div className="space-y-3">
                {theory.content.practicalApplications.map((application: any, index: number) => (
                  <div key={index} className="bg-white p-3 rounded">
                    <h6 className="font-medium text-gray-800 mb-2">📋 {application.situation}</h6>
                    <div className="mb-2">
                      <span className="text-sm font-medium">Aanpak: </span>
                      <span className="text-sm text-yellow-600">{application.approach}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Machtsbronnen: </span>
                      <span className="text-sm text-gray-600">{application.powerSources.join(', ')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning Signals */}
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h4 className="font-semibold text-red-800 mb-3">🚨 Waarschuwingssignalen voor Machtsmisbruik</h4>
              <ul className="space-y-2">
                {theory.content.warningSignals.map((signal: string, index: number) => (
                  <li key={index} className="text-red-700 text-sm flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    {signal}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ethical Guidelines */}
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h4 className="font-semibold text-green-800 mb-3">🤝 Ethische Richtlijnen</h4>
              <ul className="space-y-2">
                {theory.content.ethicalGuidelines.map((guideline: string, index: number) => (
                  <li key={index} className="text-green-700 text-sm flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    {guideline}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )

      case 'narcisme':
        return (
          <div className="space-y-6">
            {/* Introduction */}
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h4 className="font-semibold text-lg text-red-800 mb-2">{theory.content.introduction.title}</h4>
              <p className="text-red-700 mb-3">{theory.content.introduction.description}</p>
              <div className="bg-red-100 p-3 rounded">
                <p className="text-red-800 font-medium text-sm">💡 {theory.content.introduction.keyInsight}</p>
              </div>
            </div>

            {/* Dysfunctional Patterns */}
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-4">🚨 Disfunctionele Leiderschapspatronen</h4>
              <div className="space-y-6">
                {theory.content.dysfunctionalPatterns.map((pattern: any, index: number) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <h5 className="font-semibold text-xl text-red-700 mb-2">{pattern.name}</h5>
                    <p className="text-gray-700 mb-4">{pattern.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 p-3 rounded">
                        <h6 className="font-medium text-gray-800 mb-2">Kenmerken:</h6>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {pattern.characteristics.map((char: string, charIndex: number) => (
                            <li key={charIndex}>• {char}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-red-50 p-3 rounded">
                        <h6 className="font-medium text-red-800 mb-2">Gevolgen:</h6>
                        <ul className="text-sm text-red-700 space-y-1">
                          {pattern.consequences.map((consequence: string, consIndex: number) => (
                            <li key={consIndex}>• {consequence}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-400 mb-4">
                      <strong className="text-orange-800">⚽ Sportvoorbeeld:</strong>
                      <p className="text-orange-700 text-sm">{pattern.sportExample}</p>
                    </div>

                    <div className="bg-yellow-50 p-3 rounded">
                      <h6 className="font-medium text-yellow-800 mb-2">🔍 Herkenning:</h6>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        {pattern.recognition.map((sign: string, signIndex: number) => (
                          <li key={signIndex}>• {sign}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prevention Strategies */}
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h4 className="font-semibold text-green-800 mb-3">{theory.content.preventionStrategies.title}</h4>
              <p className="text-green-700 mb-4">{theory.content.preventionStrategies.description}</p>
              
              <div className="space-y-4">
                {theory.content.preventionStrategies.strategies.map((strategy: any, index: number) => (
                  <div key={index} className="bg-white p-3 rounded">
                    <h6 className="font-medium text-gray-800 mb-2">🛡️ {strategy.strategy}</h6>
                    <p className="text-sm text-gray-600 mb-2">{strategy.description}</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {strategy.implementation.map((impl: string, implIndex: number) => (
                        <li key={implIndex}>• {impl}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning Signals */}
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h4 className="font-semibold text-orange-800 mb-3">⚠️ Waarschuwingssignalen</h4>
              <ul className="space-y-2">
                {theory.content.warningSignals.map((signal: string, index: number) => (
                  <li key={index} className="text-orange-700 text-sm flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {signal}
                  </li>
                ))}
              </ul>
            </div>

            {/* Healthy Leadership */}
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-800 mb-3">{theory.content.healthyLeadership.title}</h4>
              <p className="text-blue-700 mb-4">{theory.content.healthyLeadership.description}</p>
              <ul className="space-y-2">
                {theory.content.healthyLeadership.characteristics.map((char: string, index: number) => (
                  <li key={index} className="text-blue-700 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {char}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )

      case 'maccoby':
        return (
          <div className="space-y-6">
            {/* Introduction */}
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h4 className="font-semibold text-lg text-purple-800 mb-2">{theory.content.introduction.title}</h4>
              <p className="text-purple-700 mb-3">{theory.content.introduction.description}</p>
              <div className="bg-purple-100 p-3 rounded">
                <p className="text-purple-800 font-medium text-sm">💡 {theory.content.introduction.keyInsight}</p>
              </div>
            </div>

            {/* Narcissism Types */}
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-4">🔄 Twee Vormen van Narcisme</h4>
              <div className="grid gap-6">
                {theory.content.narcissismTypes.map((type: any, index: number) => (
                  <div key={index} className={`p-4 rounded-lg border-l-4 ${
                    type.type === 'Productief Narcisme' 
                      ? 'bg-green-50 border-green-400' 
                      : 'bg-red-50 border-red-400'
                  }`}>
                    <h5 className={`font-semibold text-lg mb-2 ${
                      type.type === 'Productief Narcisme' ? 'text-green-800' : 'text-red-800'
                    }`}>
                      {type.type === 'Productief Narcisme' ? '✅' : '❌'} {type.type}
                    </h5>
                    <p className={`mb-3 text-sm ${
                      type.type === 'Productief Narcisme' ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {type.description}
                    </p>
                    
                    <div className="mb-4">
                      <h6 className="font-medium mb-2">Kenmerken:</h6>
                      <ul className="text-sm space-y-1">
                        {type.characteristics.map((char: string, charIndex: number) => (
                          <li key={charIndex} className={`flex items-start ${
                            type.type === 'Productief Narcisme' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            <span className="mr-2">•</span>
                            {char}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h6 className="font-medium mb-2">
                        {type.type === 'Productief Narcisme' ? 'Voordelen:' : 'Gevolgen:'}
                      </h6>
                      <ul className="text-sm space-y-1">
                        {(type.benefits || type.consequences).map((item: string, itemIndex: number) => (
                          <li key={itemIndex} className={`flex items-start ${
                            type.type === 'Productief Narcisme' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            <span className="mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`p-3 rounded border-l-4 ${
                      type.type === 'Productief Narcisme' 
                        ? 'bg-green-100 border-green-500' 
                        : 'bg-red-100 border-red-500'
                    }`}>
                      <strong className={type.type === 'Productief Narcisme' ? 'text-green-800' : 'text-red-800'}>
                        ⚽ Sportvoorbeeld:
                      </strong>
                      <p className={`text-sm ${
                        type.type === 'Productief Narcisme' ? 'text-green-700' : 'text-red-700'
                      }`}>
                        {type.sportExample}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Productive Narcissist Traits */}
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-4">🌟 Eigenschappen van Productieve Narcisten</h4>
              <div className="grid gap-4">
                {theory.content.productiveNarcissistTraits.map((trait: any, index: number) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <h5 className="font-semibold text-blue-700 mb-2">{trait.trait}</h5>
                    <p className="text-sm text-gray-700 mb-2">{trait.description}</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-blue-50 p-3 rounded">
                        <span className="font-medium text-blue-800 text-sm">Toepassing:</span>
                        <p className="text-blue-700 text-sm">{trait.application}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded">
                        <span className="font-medium text-green-800 text-sm">Balans:</span>
                        <p className="text-green-700 text-sm">{trait.balance}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Managing Narcissism */}
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-800 mb-3">{theory.content.managingNarcissism.title}</h4>
              <p className="text-yellow-700 mb-4">{theory.content.managingNarcissism.description}</p>
              
              <div className="space-y-4">
                {theory.content.managingNarcissism.strategies.map((strategy: any, index: number) => (
                  <div key={index} className="bg-white p-3 rounded">
                    <h6 className="font-medium text-gray-800 mb-2">{strategy.strategy}</h6>
                    <p className="text-sm text-gray-600 mb-2">{strategy.description}</p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      {strategy.implementation.map((impl: string, implIndex: number) => (
                        <li key={implIndex}>• {impl}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning Signals */}
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h4 className="font-semibold text-orange-800 mb-3">⚠️ Waarschuwingssignalen</h4>
              <ul className="space-y-2">
                {theory.content.warningSignals.map((signal: string, index: number) => (
                  <li key={index} className="text-orange-700 text-sm flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {signal}
                  </li>
                ))}
              </ul>
            </div>

            {/* Development Path */}
            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
              <h4 className="font-semibold text-indigo-800 mb-3">🚀 Ontwikkelingspad</h4>
              <ol className="space-y-2">
                {theory.content.developmentPath.map((step: string, index: number) => (
                  <li key={index} className="text-indigo-700 text-sm flex items-start">
                    <span className="text-indigo-500 mr-2 font-medium">{index + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )

      case 'ferguson':
        return (
          <div className="space-y-6">
            {/* Introduction */}
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h4 className="font-semibold text-lg text-red-800 mb-2">{theory.content.introduction.title}</h4>
              <p className="text-red-700 mb-3">{theory.content.introduction.description}</p>
              <div className="bg-red-100 p-3 rounded">
                <p className="text-red-800 font-medium text-sm">💡 {theory.content.introduction.keyInsight}</p>
              </div>
            </div>

            {/* Leadership Elements */}
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-4">🎯 Ferguson's 9 Leiderschapselementen</h4>
              <div className="space-y-6">
                {theory.content.leadershipElements.map((element: any, index: number) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <h5 className="font-semibold text-xl text-red-700 mb-2">{element.number}. {element.name}</h5>
                    <p className="text-gray-700 mb-3">{element.description}</p>
                    
                    <div className="mb-4">
                      <h6 className="font-medium text-gray-800 mb-2">Kernpunten:</h6>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {element.keyPoints.map((point: string, pointIndex: number) => (
                          <li key={pointIndex}>• {point}</li>
                        ))}
                      </ul>
                    </div>

                    {element.quote && (
                      <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400 mb-4">
                        <strong className="text-blue-800">💬 Ferguson Quote:</strong>
                        <p className="text-blue-700 text-sm italic">"{element.quote}"</p>
                      </div>
                    )}

                    <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                      <strong className="text-red-800">⚽ Praktijkvoorbeeld:</strong>
                      <p className="text-red-700 text-sm">{element.example}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Philosophy */}
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
              <h4 className="font-semibold text-gray-800 mb-3">{theory.content.corePhilosophy.title}</h4>
              <p className="text-gray-700 mb-4">{theory.content.corePhilosophy.description}</p>
              <ul className="space-y-2">
                {theory.content.corePhilosophy.principles.map((principle: string, index: number) => (
                  <li key={index} className="text-gray-600 text-sm flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    {principle}
                  </li>
                ))}
              </ul>
            </div>

            {/* Modern Applications */}
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h4 className="font-semibold text-green-800 mb-3">{theory.content.modernApplications.title}</h4>
              <p className="text-green-700 mb-4">{theory.content.modernApplications.description}</p>
              
              <div className="space-y-4">
                {theory.content.modernApplications.applications.map((app: any, index: number) => (
                  <div key={index} className="bg-white p-3 rounded">
                    <h6 className="font-medium text-gray-800 mb-2">📋 {app.context}</h6>
                    <div className="mb-2">
                      <span className="text-sm font-medium">Aanpak: </span>
                      <span className="text-sm text-green-600">{app.approach}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Resultaat: </span>
                      <span className="text-sm text-gray-600">{app.result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Lessons */}
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-800 mb-3">🔑 Belangrijkste Lessen</h4>
              <ul className="space-y-2">
                {theory.content.keyLessons.map((lesson: string, index: number) => (
                  <li key={index} className="text-yellow-700 text-sm flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    {lesson}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )

      case 'wiltschut':
        return (
          <div className="space-y-6">
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">💡 Kernboodschap:</h4>
              <p className="text-purple-700">{theory.content.mainConcept}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-lg mb-3 text-green-700">
                  👑 Gezag (Gewenst)
                </h4>
                <div className="space-y-3">
                  {theory.content.gezag.map((item: any, index: number) => (
                    <div key={index} className="bg-white p-3 rounded">
                      <div className="font-medium text-gray-800 mb-1">{item.characteristic}</div>
                      <div className="text-sm text-gray-600 mb-2">{item.description}</div>
                      <div className="text-xs text-green-600 italic">⚽ {item.sportExample}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-lg mb-3 text-red-700">
                  ⚡ Dominantie (Vermijden)
                </h4>
                <div className="space-y-3">
                  {theory.content.dominantie.map((item: any, index: number) => (
                    <div key={index} className="bg-white p-3 rounded">
                      <div className="font-medium text-gray-800 mb-1">{item.characteristic}</div>
                      <div className="text-sm text-gray-600 mb-2">{item.description}</div>
                      <div className="text-xs text-red-600 italic">⚽ {item.sportExample}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">✅ Gevolgen van Gezag:</h4>
                <p className="text-green-700 text-sm">{theory.content.consequences.gezag}</p>
              </div>
              <div className="bg-red-100 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">❌ Gevolgen van Dominantie:</h4>
                <p className="text-red-700 text-sm">{theory.content.consequences.dominantie}</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-800 mb-3">🚀 Gezag ontwikkelen:</h4>
              <ul className="space-y-2">
                {theory.content.developingAuthority.map((tip: string, index: number) => (
                  <li key={index} className="text-blue-700 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )

      default:
        return (
          <div className="text-center py-8">
            <p className="text-gray-500">Inhoud wordt geladen...</p>
          </div>
        )
    }
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow ${
      isRead ? 'border-l-4 border-green-500' : ''
    }`}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-gray-800">{theory.title}</h3>
        {isRead && (
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
            ✅ Gelezen
          </span>
        )}
      </div>
      <p className="text-gray-600 mb-4">{theory.description}</p>
      
      {isExpanded ? (
        <div>
          {renderContent()}
          {!isRead && (
            <div className="mt-6 text-center">
              <button
                onClick={handleReadComplete}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                🎉 Markeer als gelezen (+50 punten)
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-blue-600 font-medium">
          Klik om meer te lezen →
        </div>
      )}
    </div>
  )
}