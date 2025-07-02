'use client'

import { useState } from 'react'

const quizQuestions = [
  {
    id: 1,
    question: "Welke rol van Mintzberg past bij een trainer die tijdens een persconferentie het team verdedigt?",
    options: [
      "Leider",
      "Woordvoerder", 
      "Onderhandelaar",
      "Probleemoplosser"
    ],
    correct: 1,
    explanation: "Als woordvoerder communiceert de trainer namens het team naar de buitenwereld."
  },
  {
    id: 2,
    question: "Wat is het kernprincipe van Situationeel Leidinggeven (SLII)?",
    options: [
      "Er is één beste leiderschapsstijl voor alle situaties",
      "Ervaren mensen hebben altijd minder sturing nodig",
      "Er is geen beste leiderschapsstijl - het hangt af van de situatie",
      "Ondersteunend gedrag is altijd belangrijker dan sturend gedrag"
    ],
    correct: 2,
    explanation: "Het kernprincipe van SLII is dat er geen beste leiderschapsstijl is - de effectiviteit hangt af van het ontwikkelingsniveau van de persoon voor de specifieke taak."
  },
  {
    id: 3,
    question: "Welke leiderschapsstijl van SLII past bij een D2 - Ontgoochelde Leerling?",
    options: [
      "S1 - Sturend",
      "S2 - Coachend",
      "S3 - Ondersteunend",
      "S4 - Delegerend"
    ],
    correct: 1,
    explanation: "S2 - Coachend (hoog sturend, hoog ondersteunend) is geschikt voor D2 die zowel sturing als ondersteuning nodig heeft om door de moeilijke periode te komen."
  },
  {
    id: 4,
    question: "Wat kenmerkt een D1 - Enthousiaste Beginner volgens SLII?",
    options: [
      "Hoge competentie, lage betrokkenheid",
      "Lage competentie, hoge betrokkenheid",
      "Hoge competentie, hoge betrokkenheid",
      "Lage competentie, lage betrokkenheid"
    ],
    correct: 1,
    explanation: "D1 - Enthousiaste Beginner heeft lage competentie maar hoge betrokkenheid. Ze zijn gemotiveerd en enthousiast maar hebben nog weinig specifieke vaardigheden."
  },
  {
    id: 5,
    question: "Welke twee gedragsdimensies combineert het SLII model?",
    options: [
      "Competentie en betrokkenheid",
      "Sturend en ondersteunend gedrag",
      "Taak- en relatiegericht gedrag",
      "Ervaring en motivatie"
    ],
    correct: 1,
    explanation: "Het SLII model combineert sturend gedrag (eenrichtingscommunicatie) en ondersteunend gedrag (tweerichtingscommunicatie) om de juiste leiderschapsstijl te bepalen."
  },
  {
    id: 6,
    question: "Wanneer gebruik je S3 - Ondersteunend volgens SLII?",
    options: [
      "Bij D1 - Enthousiaste Beginner",
      "Bij D2 - Ontgoochelde Leerling",
      "Bij D3 - Voorzichtige Uitvoerder",
      "Bij D4 - Zelfstandige Uitvoerder"
    ],
    correct: 2,
    explanation: "S3 - Ondersteunend (laag sturend, hoog ondersteunend) gebruik je bij D3 - Voorzichtige Uitvoerder die de vaardigheden heeft maar vertrouwen en ondersteuning nodig heeft."
  },
  {
    id: 7,
    question: "Wat is een belangrijke eigenschap van D4 - Zelfstandige Uitvoerder?",
    options: [
      "Heeft veel sturing nodig",
      "Twijfelt aan eigen kunnen",
      "Kan zelfstandig werken en beslissingen nemen",
      "Is gefrustreerd door moeilijkheden"
    ],
    correct: 2,
    explanation: "D4 - Zelfstandige Uitvoerder heeft hoge competentie en hoge betrokkenheid, waardoor ze zelfstandig kunnen werken en verantwoordelijkheid kunnen nemen."
  },
  {
    id: 8,
    question: "Welke leiderschapsstijl van SLII past bij een D1 - Enthousiaste Beginner?",
    options: [
      "S1 - Sturend",
      "S2 - Coachend",
      "S3 - Ondersteunend",
      "S4 - Delegerend"
    ],
    correct: 0,
    explanation: "S1 - Sturend (hoog sturend, laag ondersteunend) past bij D1 omdat ze veel instructies nodig hebben maar al gemotiveerd zijn."
  },
  {
    id: 9,
    question: "Wat is volgens Situationeel Leidinggeven een veelgemaakte fout?",
    options: [
      "Te veel aandacht voor ontwikkelingsniveau",
      "Eén stijl gebruiken voor alle situaties",
      "Te veel communicatie over verwachtingen",
      "Te langzaam overgaan naar delegeren"
    ],
    correct: 1,
    explanation: "Een veelgemaakte fout is om één leiderschapsstijl te gebruiken voor alle situaties en mensen, terwijl SLII juist flexibiliteit vereist."
  },
  {
    id: 10,
    question: "Welk ontwikkelingsniveau heeft zowel veel sturing als veel ondersteuning nodig?",
    options: [
      "D1 - Enthousiaste Beginner",
      "D2 - Ontgoochelde Leerling",
      "D3 - Voorzichtige Uitvoerder",
      "D4 - Zelfstandige Uitvoerder"
    ],
    correct: 1,
    explanation: "D2 - Ontgoochelde Leerling heeft zowel veel sturing (voor competentie) als veel ondersteuning (voor motivatie en vertrouwen) nodig."
  },
  {
    id: 11,
    question: "Wat betekent 'taakspecifiek ontwikkelingsniveau' in SLII?",
    options: [
      "Iemand heeft altijd hetzelfde ontwikkelingsniveau",
      "Het ontwikkelingsniveau hangt af van de specifieke taak",
      "Ervaren mensen zijn altijd D4",
      "Nieuwe mensen zijn altijd D1"
    ],
    correct: 1,
    explanation: "Taakspecifiek betekent dat iemand D4 kan zijn voor één taak (bijvoorbeeld technische vaardigheden) maar D2 voor een andere taak (bijvoorbeeld leidinggeven)."
  },
  {
    id: 12,
    question: "Welk gedrag hoort bij S4 - Delegerend?",
    options: [
      "Veel instructies geven",
      "Constant toezicht houden",
      "Verantwoordelijkheid overdragen",
      "Alle beslissingen zelf maken"
    ],
    correct: 2,
    explanation: "S4 - Delegerend kenmerkt zich door het overdragen van verantwoordelijkheid en autoriteit aan competente en gemotiveerde medewerkers."
  },
  {
    id: 13,
    question: "Wat is een voordeel van het correct toepassen van SLII?",
    options: [
      "Je hoeft maar één leiderschapsstijl te leren",
      "Alle problemen worden automatisch opgelost",
      "Betere ontwikkeling van teamleden",
      "Minder communicatie is nodig"
    ],
    correct: 2,
    explanation: "Een belangrijk voordeel van SLII is dat het leidt tot betere ontwikkeling van teamleden doordat ze de juiste combinatie van sturing en ondersteuning krijgen."
  },
  {
    id: 14,
    question: "Wat is een waarschuwingssignaal voor destructief narcisme volgens Maccoby?",
    options: [
      "Visionair denken",
      "Alleen luisteren naar mensen die het met je eens zijn",
      "Zelfvertrouwen tonen",
      "Ambitieuze doelen stellen"
    ],
    correct: 1,
    explanation: "Alleen luisteren naar mensen die het met je eens zijn is een waarschuwingssignaal dat productief narcisme omslaat naar destructief narcisme."
  },
  {
    id: 15,
    question: "Hoe kan een narcistische leider volgens Maccoby empathie ontwikkelen?",
    options: [
      "Door minder ambitieus te worden",
      "Door actief te luisteren naar teamleden",
      "Door geen feedback meer te vragen",
      "Door alleen met gelijkgestemden om te gaan"
    ],
    correct: 1,
    explanation: "Actief luisteren naar teamleden en interesse tonen in hun perspectief helpt narcistische leiders om empathie te ontwikkelen."
  },
  {
    id: 16,
    question: "Wat is volgens Maccoby een kenmerk van productieve narcisten in de sport?",
    options: [
      "Ze vermijden alle risico's",
      "Ze hebben geen visie voor het team",
      "Ze kanaliseren hun competitieve drive naar teamdoelen",
      "Ze accepteren nooit kritiek"
    ],
    correct: 2,
    explanation: "Productieve narcisten in de sport kanaliseren hun natuurlijke competitieve drive en ambitie naar het bereiken van teamdoelen en collectief succes."
  },
  {
    id: 17,
    question: "Wat is volgens Marcus & Van Dam een ethische overweging bij het gebruik van macht?",
    options: [
      "Macht gebruiken voor persoonlijk gewin",
      "Macht gebruiken ten dienste van het team",
      "Altijd de sterkste vorm van macht gebruiken",
      "Transparantie vermijden"
    ],
    correct: 1,
    explanation: "Een belangrijke ethische overweging is dat macht gebruikt moet worden ten dienste van het team en de organisatie, niet voor persoonlijk gewin."
  },
  {
    id: 18,
    question: "Welke machtsbron volgens Marcus & Van Dam is het meest duurzaam?",
    options: [
      "Positiemacht",
      "Dwangmacht",
      "Persoonlijke Macht",
      "Beloningmacht"
    ],
    correct: 2,
    explanation: "Persoonlijke Macht is het meest duurzaam omdat het gebaseerd is op persoonlijke kwaliteiten en competenties die niet afhankelijk zijn van externe factoren."
  },
  {
    id: 19,
    question: "Wat is volgens Marcus & Van Dam de definitie van macht?",
    options: [
      "Het vermogen om populair te zijn",
      "Het vermogen om het gedrag van anderen te beïnvloeden, ook bij weerstand",
      "Het vermogen om vrienden te maken",
      "Het vermogen om geld te verdienen"
    ],
    correct: 1,
    explanation: "Marcus & Van Dam definiëren macht als het vermogen om het gedrag van anderen te beïnvloeden, ook wanneer zij daar weerstand tegen bieden."
  },
  {
    id: 20,
    question: "Wat was volgens Ferguson essentieel voor het handhaven van teamdiscipline?",
    options: [
      "Verschillende regels voor verschillende spelers",
      "Geen uitzonderingen - iedereen wordt gelijk behandeld",
      "Alleen straffen voor reservespelers",
      "Regels alleen tijdens wedstrijden"
    ],
    correct: 1,
    explanation: "Ferguson geloofde dat discipline betekende dat er geen uitzonderingen waren - zelfs sterren zoals David Beckham werden weggestuurd als ze de regels overtraden."
  },
  {
    id: 21,
    question: "Wat bedoelde Ferguson met 'individuele benadering'?",
    options: [
      "Alle spelers hetzelfde behandelen",
      "Verschillende motivatietechnieken voor verschillende spelertypes",
      "Alleen met sterren praten",
      "Geen persoonlijke gesprekken voeren"
    ],
    correct: 1,
    explanation: "Ferguson paste zijn communicatie en motivatie aan per speler - wat voor Roy Keane werkte (directe confrontatie) werkte niet voor Ryan Giggs (subtiele begeleiding)."
  },
  {
    id: 22,
    question: "Wat was Ferguson's 'hairdryer treatment'?",
    options: [
      "Een nieuwe trainingsmethode",
      "Strategisch gebruik van intense kritiek op het juiste moment",
      "Een beloning voor goede prestaties",
      "Een manier om spelers te ontspannen"
    ],
    correct: 1,
    explanation: "De 'hairdryer treatment' was Ferguson's beroemde intense kritiek die hij strategisch gebruikte om spelers wakker te schudden, vaak berekend en niet uit echte boosheid."
  },
  {
    id: 23,
    question: "Waarom investeerde Ferguson in jeugdspelers volgens zijn lange termijn visie?",
    options: [
      "Ze waren goedkoper",
      "Om een duurzame organisatie en winnende cultuur op te bouwen",
      "Hij had geen keuze",
      "Ze waren technisch beter"
    ],
    correct: 1,
    explanation: "Ferguson's investering in de jeugdacademie was onderdeel van zijn lange termijn visie om een duurzame organisatie op te bouwen die generaties zou overstijgen."
  },
  {
    id: 24,
    question: "Wat was volgens Ferguson het belangrijkste voor het overwinnen van tegenslagen?",
    options: [
      "Technische vaardigheden",
      "Mentale sterkte",
      "Fysieke kracht",
      "Tactische kennis"
    ],
    correct: 1,
    explanation: "Ferguson geloofde dat mentale sterkte het belangrijkste was - zijn teams stonden bekend om late goals en comebacks, wat mentale veerkracht reflecteerde."
  },
  {
    id: 25,
    question: "Welke machtsbron volgens Marcus & Van Dam kan het snelst impact hebben?",
    options: [
      "Persoonlijke Macht",
      "Positiemacht",
      "Informatiemacht",
      "Beloningmacht"
    ],
    correct: 2,
    explanation: "Informatiemacht kan snel impact hebben omdat relevante informatie onmiddellijk invloed kan uitoefenen op beslissingen en gedrag."
  },
  {
    id: 26,
    question: "Wat is volgens Marcus & Van Dam een nadeel van Beloningmacht?",
    options: [
      "Het werkt altijd hetzelfde voor iedereen",
      "Het kan afhankelijkheid en externe motivatie creëren",
      "Het is gratis om te gebruiken",
      "Het heeft geen effect op prestaties"
    ],
    correct: 1,
    explanation: "Een nadeel van Beloningmacht is dat het afhankelijkheid kan creëren en mensen kunnen gaan werken voor de beloning in plaats van intrinsieke motivatie."
  },
  {
    id: 27,
    question: "Welke eigenschap hoort NIET bij Persoonlijke Macht volgens Marcus & Van Dam?",
    options: [
      "Gebaseerd op persoonlijke kwaliteiten",
      "Onafhankelijk van formele positie",
      "Verdwijnt wanneer je de organisatie verlaat",
      "Opgebouwd door vertrouwen en respect"
    ],
    correct: 2,
    explanation: "Persoonlijke Macht verdwijnt NIET wanneer je de organisatie verlaat - het is juist duurzaam en overdraagbaar omdat het gebaseerd is op persoonlijke kwaliteiten."
  },
  {
    id: 28,
    question: "Wat is volgens Marcus & Van Dam een kenmerk van effectief machtgebruik?",
    options: [
      "Altijd dezelfde machtsbron gebruiken",
      "Verschillende machtsbronnen combineren afhankelijk van de situatie",
      "Alleen Dwangmacht gebruiken",
      "Macht vermijden"
    ],
    correct: 1,
    explanation: "Effectieve managers gebruiken verschillende machtsbronnen in combinatie, afhankelijk van de situatie en de mensen waarmee ze werken."
  },
  {
    id: 29,
    question: "Welke machtsbron volgens Marcus & Van Dam vereist het meeste tijd om op te bouwen?",
    options: [
      "Positiemacht",
      "Dwangmacht",
      "Persoonlijke Macht",
      "Informatiemacht"
    ],
    correct: 2,
    explanation: "Persoonlijke Macht duurt het langst om op te bouwen omdat het gebaseerd is op het ontwikkelen van persoonlijke kwaliteiten, competenties en het opbouwen van vertrouwen en respect."
  },
  {
    id: 30,
    question: "Wat is volgens Kets de Vries een kenmerk van de Narcistische Leider?",
    options: [
      "Hoge empathie voor anderen",
      "Overdreven gevoel van eigenwaarde en superioriteit",
      "Accepteert gemakkelijk kritiek",
      "Deelt altijd de eer met het team"
    ],
    correct: 1,
    explanation: "De Narcistische Leider heeft volgens Kets de Vries een overdreven gevoel van eigenwaarde en superioriteit, wat kan leiden tot disfunctioneel leiderschapsgedrag."
  },
  {
    id: 31,
    question: "Welk disfunctioneel leiderschapspatroon van Kets de Vries kenmerkt zich door excessief wantrouwen?",
    options: [
      "De Narcistische Leider",
      "De Paranoïde Leider",
      "De Theatrale Leider",
      "De Dwangmatige Leider"
    ],
    correct: 1,
    explanation: "De Paranoïde Leider kenmerkt zich door excessief wantrouwen jegens anderen en ziet overal complotten en bedreigingen."
  },
  {
    id: 32,
    question: "Wat is een gevolg van de Theatrale Leider volgens Kets de Vries?",
    options: [
      "Stabiele werkomgeving",
      "Goede strategische planning",
      "Instabiele en onvoorspelbare werkomgeving",
      "Duidelijke prioriteiten"
    ],
    correct: 2,
    explanation: "De Theatrale Leider creëert een instabiele en onvoorspelbare werkomgeving door hun constante behoefte aan aandacht en dramatisch gedrag."
  },
  {
    id: 33,
    question: "Welke eigenschap hoort bij de Dwangmatige Leider van Kets de Vries?",
    options: [
      "Flexibele werkwijze",
      "Gemakkelijk delegeren",
      "Obsessie met perfectie en details",
      "Ontspannen houding"
    ],
    correct: 2,
    explanation: "De Dwangmatige Leider heeft een obsessie met perfectie en details, wat kan leiden tot micromanagement en rigiditeit."
  },
  {
    id: 34,
    question: "Wat is volgens Kets de Vries een preventieve strategie tegen disfunctioneel leiderschap?",
    options: [
      "Vermijd alle feedback",
      "Werk alleen met gelijkgestemden",
      "Ontwikkel zelfbewustzijn en zoek regelmatig feedback",
      "Negeer persoonlijke ontwikkeling"
    ],
    correct: 2,
    explanation: "Het ontwikkelen van zelfbewustzijn en het regelmatig zoeken van feedback zijn cruciale preventieve strategieën tegen disfunctioneel leiderschap."
  },
  {
    id: 35,
    question: "Welk waarschuwingssignaal duidt volgens Kets de Vries op disfunctioneel leiderschap?",
    options: [
      "Hoge tevredenheid van medewerkers",
      "Stabiele prestaties",
      "Hoog verloop van getalenteerde medewerkers",
      "Goede samenwerking"
    ],
    correct: 2,
    explanation: "Hoog verloop van getalenteerde medewerkers is een belangrijk waarschuwingssignaal voor disfunctioneel leiderschap."
  },
  {
    id: 36,
    question: "Wat kenmerkt volgens Kets de Vries gezond leiderschap?",
    options: [
      "Gebrek aan empathie",
      "Weerstand tegen feedback",
      "Zelfbewustzijn en emotionele intelligentie",
      "Rigide gedrag"
    ],
    correct: 2,
    explanation: "Gezond leiderschap kenmerkt zich door zelfbewustzijn en emotionele intelligentie, waardoor leiders effectief kunnen functioneren."
  },
  {
    id: 37,
    question: "Welke gevolgen heeft de Depressieve Leider volgens Kets de Vries?",
    options: [
      "Verhoogde teammotivatie",
      "Duidelijke visie en richting",
      "Demotivatie van het hele team",
      "Positieve organisatiecultuur"
    ],
    correct: 2,
    explanation: "De Depressieve Leider veroorzaakt demotivatie van het hele team door hun chronisch pessimisme en gebrek aan energie."
  },
  {
    id: 38,
    question: "Wat is volgens Kets de Vries een organisatorische safeguard tegen disfunctioneel leiderschap?",
    options: [
      "Elimineer alle feedback systemen",
      "Concentreer alle macht bij één persoon",
      "Implementeer checks and balances",
      "Vermijd diversiteit in teams"
    ],
    correct: 2,
    explanation: "Het implementeren van checks and balances is een belangrijke organisatorische safeguard om disfunctioneel leiderschapsgedrag te voorkomen."
  },
  {
    id: 39,
    question: "Welke eigenschap van de Paranoïde Leider kan leiden tot inefficiënte processen?",
    options: [
      "Vertrouwen in teamleden",
      "Delegeren van verantwoordelijkheden",
      "Obsessieve controle en micromanagement",
      "Open communicatie"
    ],
    correct: 2,
    explanation: "De obsessieve controle en micromanagement van de Paranoïde Leider leiden tot inefficiënte processen en verminderde productiviteit."
  },
  {
    id: 40,
    question: "Volgens Keltner, wat is een van de vier preventiestrategieën tegen machtsmisbruik?",
    options: [
      "Meer macht verzamelen",
      "Perspectief nemen",
      "Anderen vermijden",
      "Alleen op jezelf vertrouwen"
    ],
    correct: 1,
    explanation: "Perspectief nemen - bewust proberen de wereld te zien vanuit het perspectief van anderen - is een van Keltner's vier preventiestrategieën."
  },
  {
    id: 41,
    question: "Wat is volgens Marcus & Van Dam Verbindingsmacht?",
    options: [
      "Macht gebaseerd op persoonlijke charme",
      "Macht gebaseerd op je netwerk en connecties",
      "Macht gebaseerd op informatie",
      "Macht gebaseerd op positie"
    ],
    correct: 1,
    explanation: "Verbindingsmacht is gebaseerd op je netwerk en connecties met invloedrijke personen of groepen."
  },
  {
    id: 42,
    question: "Welke van Keltner's preventiestrategieën houdt in dat je macht deelt?",
    options: [
      "Perspectief nemen",
      "Nederigheid cultiveren",
      "Empathie oefenen",
      "Macht delen"
    ],
    correct: 3,
    explanation: "Macht delen - bewust macht en verantwoordelijkheid delegeren aan anderen - is een van Keltner's vier preventiestrategieën."
  },
  {
    id: 43,
    question: "Wat is volgens Keltner het effect van macht op het brein?",
    options: [
      "Het verhoogt empathie",
      "Het beschadigt empathie-circuits",
      "Het heeft geen effect",
      "Het verbetert sociale vaardigheden"
    ],
    correct: 1,
    explanation: "Volgens Keltner beschadigt macht letterlijk je brein door de empathie-circuits te onderdrukken."
  },
  {
    id: 44,
    question: "Welke machtsbron volgens Marcus & Van Dam heeft het hoogste risico voor Keltner's 'macht beschadigt je brein' effecten?",
    options: [
      "Persoonlijke Macht",
      "Informatiemacht",
      "Positiemacht",
      "Verbindingsmacht"
    ],
    correct: 2,
    explanation: "Positie-gebonden macht zoals Positiemacht heeft het hoogste risico voor de 'macht beschadigt je brein' effecten omdat het gebaseerd is op hiërarchie en controle."
  },
  {
    id: 45,
    question: "Wat is volgens Van Vugt en Wiltschut het belangrijkste verschil tussen gezag en dominantie?",
    options: [
      "Gezag is luider dan dominantie",
      "Gezag is gebaseerd op respect, dominantie op macht",
      "Dominantie werkt beter in sport",
      "Er is geen verschil"
    ],
    correct: 1,
    explanation: "Volgens Van Vugt en Wiltschut is gezag gebaseerd op respect en vertrouwen, terwijl dominantie gebaseerd is op macht en controle."
  }
]

interface QuizComponentProps {
  onComplete?: (score: number, totalQuestions: number) => void
}

export default function QuizComponent({ onComplete }: QuizComponentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])

  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return // Prevent changing answer after feedback is shown
    setSelectedAnswer(answerIndex)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return
    setShowFeedback(true)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return

    const newAnswers = [...answers, selectedAnswer]
    setAnswers(newAnswers)

    if (selectedAnswer === quizQuestions[currentQuestion].correct) {
      setScore(score + 1)
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    } else {
      setShowResult(true)
      // Call onComplete callback if provided
      if (onComplete) {
        const finalScore = selectedAnswer === quizQuestions[currentQuestion].correct ? score + 1 : score
        onComplete(finalScore, quizQuestions.length)
      }
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setShowResult(false)
    setScore(0)
    setAnswers([])
  }

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100
    if (percentage >= 90) return "🏆 Uitstekend! Je beheerst de leiderschapstheorieën perfect."
    if (percentage >= 80) return "👍 Zeer goed! Je hebt een sterke kennis van leiderschap."
    if (percentage >= 70) return "📚 Goed gedaan! Je hebt een goede basis."
    if (percentage >= 60) return "💪 Niet slecht, maar bestudeer de theorieën nog eens."
    return "📖 Ga de theorieën nog eens goed doornemen en probeer opnieuw."
  }

  if (showResult) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🎉 Quiz Voltooid!</h2>
        <div className="text-6xl mb-4">
          {score >= 40 ? '🏆' : score >= 35 ? '🥇' : score >= 30 ? '🥈' : score >= 25 ? '🥉' : score >= 20 ? '👍' : score >= 15 ? '📚' : '💪'}
        </div>
        <p className="text-xl mb-4">
          Je hebt <span className="font-bold text-blue-600">{score}</span> van de{' '}
          <span className="font-bold">{quizQuestions.length}</span> vragen goed!
        </p>
        <p className="text-lg mb-2">
          <span className="font-bold text-green-600">{Math.round((score / quizQuestions.length) * 100)}%</span> correct
        </p>
        <p className="text-gray-600 mb-6">{getScoreMessage()}</p>
        
        <div className="space-y-4 mb-6 text-left">
          <h3 className="font-semibold text-lg">Uitleg per vraag:</h3>
          {quizQuestions.map((question, index) => (
            <div key={question.id} className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium mb-2">Vraag {index + 1}: {question.question}</p>
              <p className="text-sm text-gray-600 mb-2">
                Jouw antwoord: <span className={answers[index] === question.correct ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                  {question.options[answers[index]]}
                </span>
              </p>
              <p className="text-sm text-green-700">
                <strong>Correct antwoord:</strong> {question.options[question.correct]}
              </p>
              <p className="text-sm text-gray-600 mt-1">{question.explanation}</p>
            </div>
          ))}
        </div>
        
        <button
          onClick={resetQuiz}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          🔄 Opnieuw proberen
        </button>
      </div>
    )
  }

  const question = quizQuestions[currentQuestion]
  const isCorrect = selectedAnswer === question.correct

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">🎯 Leiderschap Quiz</h2>
          <span className="text-sm text-gray-500">
            Vraag {currentQuestion + 1} van {quizQuestions.length}
          </span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          {question.question}
        </h3>
        
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showFeedback}
              className={`w-full p-4 text-left rounded-lg border-2 transition-colors ${
                showFeedback
                  ? index === question.correct
                    ? 'border-green-500 bg-green-50 text-green-800'
                    : index === selectedAnswer && selectedAnswer !== question.correct
                    ? 'border-red-500 bg-red-50 text-red-800'
                    : 'border-gray-200 bg-gray-50 text-gray-600'
                  : selectedAnswer === index
                  ? 'border-blue-500 bg-blue-50 text-blue-800'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <span className="font-medium mr-3">
                {String.fromCharCode(65 + index)}.
              </span>
              {option}
              {showFeedback && index === question.correct && (
                <span className="ml-2 text-green-600">✓</span>
              )}
              {showFeedback && index === selectedAnswer && selectedAnswer !== question.correct && (
                <span className="ml-2 text-red-600">✗</span>
              )}
            </button>
          ))}
        </div>

        {showFeedback && (
          <div className={`mt-6 p-4 rounded-lg border-l-4 ${
            isCorrect 
              ? 'bg-green-50 border-green-400' 
              : 'bg-red-50 border-red-400'
          }`}>
            <div className="flex items-center mb-2">
              <span className={`text-lg mr-2 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                {isCorrect ? '✅' : '❌'}
              </span>
              <span className={`font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                {isCorrect ? 'Correct!' : 'Helaas, dat is niet juist.'}
              </span>
            </div>
            <p className={`text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
              {question.explanation}
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-between">
        <div className="text-sm text-gray-500">
          {!showFeedback ? 'Selecteer een antwoord' : 'Bekijk de uitleg hierboven'}
        </div>
        {!showFeedback ? (
          <button
            onClick={handleSubmitAnswer}
            disabled={selectedAnswer === null}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              selectedAnswer !== null
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Controleer antwoord
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            {currentQuestion < quizQuestions.length - 1 ? 'Volgende vraag' : 'Resultaat bekijken'}
          </button>
        )}
      </div>
    </div>
  )
}