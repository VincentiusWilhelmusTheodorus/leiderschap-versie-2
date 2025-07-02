'use client'

import { useState, useEffect } from 'react'
import TheoryCard from './TheoryCard'
import QuizComponent from './QuizComponent'

interface Theory {
  id: string
  title: string
  description: string
  content: any
}

const theories: Theory[] = [
  {
    id: 'mintzberg',
    title: 'Mintzberg\'s Managementrollen',
    description: 'De 10 rollen die elke manager vervult, verdeeld over interpersoonlijke, informationele en beslissingsrollen.',
    content: {
      categories: [
        {
          name: 'Interpersoonlijke Rollen',
          roles: [
            {
              name: 'Boegbeeld',
              description: 'Ceremoniële en symbolische taken uitvoeren'
            },
            {
              name: 'Leider',
              description: 'Motiveren en aansturen van medewerkers'
            },
            {
              name: 'Contactpersoon',
              description: 'Netwerk onderhouden binnen en buiten de organisatie'
            }
          ]
        },
        {
          name: 'Informationele Rollen',
          roles: [
            {
              name: 'Waarnemer',
              description: 'Informatie verzamelen uit de omgeving'
            },
            {
              name: 'Verspreider',
              description: 'Informatie doorspelen aan medewerkers'
            },
            {
              name: 'Woordvoerder',
              description: 'Organisatie vertegenwoordigen naar buiten toe'
            }
          ]
        },
        {
          name: 'Beslissingsrollen',
          roles: [
            {
              name: 'Ondernemer',
              description: 'Nieuwe projecten en veranderingen initiëren'
            },
            {
              name: 'Probleemoplosser',
              description: 'Reageren op onverwachte problemen'
            },
            {
              name: 'Hulpbronnenverdeler',
              description: 'Beslissen over de verdeling van middelen'
            },
            {
              name: 'Onderhandelaar',
              description: 'Namens de organisatie onderhandelen'
            }
          ]
        }
      ],
      sportExample: 'Een voetbaltrainer vervult alle rollen: als boegbeeld bij persconferenties, als leider van het team, als contactpersoon met de clubleiding, als waarnemer van tegenstanders, als verspreider van tactische informatie, als woordvoerder naar de media, als ondernemer bij nieuwe trainingsmethoden, als probleemoplosser bij blessures, als hulpbronnenverdeler van speeltijd, en als onderhandelaar bij transfers.'
    }
  },
  {
    id: 'hersey-blanchard',
    title: 'Situationeel Leidinggeven (SLII)',
    description: 'Hersey & Blanchard\'s model dat leiderschapsstijl aanpast aan het ontwikkelingsniveau van de medewerker.',
    content: {
      introduction: {
        title: 'Wat is Situationeel Leidinggeven?',
        description: 'Situationeel Leidinggeven (SLII) is gebaseerd op het idee dat er geen beste leiderschapsstijl bestaat. De effectiviteit van een leiderschapsstijl hangt af van de situatie, specifiek het ontwikkelingsniveau van de persoon voor een bepaalde taak.',
        keyInsight: 'De sleutel tot effectief leiderschap is flexibiliteit - verschillende mensen en situaties vereisen verschillende benaderingen.'
      },
      coreModel: {
        title: 'Het SLII Model',
        description: 'Het model combineert twee gedragsdimensies van leiders om vier verschillende leiderschapsstijlen te creëren:',
        dimensions: [
          {
            name: 'Sturend Gedrag',
            description: 'Eenrichtingscommunicatie waarin de leider definieert wat, hoe, wanneer en waar taken uitgevoerd moeten worden.',
            characteristics: [
              'Duidelijke instructies geven',
              'Taken en rollen definiëren',
              'Nauw toezicht houden',
              'Deadlines stellen'
            ]
          },
          {
            name: 'Ondersteunend Gedrag',
            description: 'Tweerichtingscommunicatie waarin de leider luistert, ondersteunt, faciliteert en betrokkenheid stimuleert.',
            characteristics: [
              'Actief luisteren',
              'Emotionele ondersteuning bieden',
              'Faciliteren van probleemoplossing',
              'Betrokkenheid stimuleren'
            ]
          }
        ]
      },
      developmentLevels: [
        {
          level: 'D1 - Enthousiaste Beginner',
          competence: 'Laag',
          commitment: 'Hoog',
          characteristics: [
            'Hoge motivatie en enthousiasme',
            'Weinig specifieke vaardigheden',
            'Optimistisch over de taak',
            'Bereid om te leren'
          ],
          needs: 'Veel sturing en duidelijke instructies, maar weinig emotionele ondersteuning omdat motivatie al hoog is.',
          sportExample: 'Een nieuwe speler die net bij het team komt - super gemotiveerd maar moet nog alle systemen en tactieken leren.'
        },
        {
          level: 'D2 - Ontgoochelde Leerling',
          competence: 'Laag tot Gemiddeld',
          commitment: 'Laag',
          characteristics: [
            'Heeft wat ervaring opgedaan',
            'Realiseert dat het moeilijker is dan gedacht',
            'Gefrustreerd door tegenslagen',
            'Twijfelt aan eigen kunnen'
          ],
          needs: 'Zowel veel sturing (voor competentie) als veel ondersteuning (voor motivatie en vertrouwen).',
          sportExample: 'Een speler die na een paar maanden merkt dat het niveau hoger ligt dan verwacht en begint te twijfelen aan zijn kunnen.'
        },
        {
          level: 'D3 - Voorzichtige Uitvoerder',
          competence: 'Gemiddeld tot Hoog',
          commitment: 'Variabel',
          characteristics: [
            'Heeft de vaardigheden ontwikkeld',
            'Twijfelt aan eigen vermogen om zelfstandig te werken',
            'Zoekt bevestiging',
            'Voorzichtig met nieuwe uitdagingen'
          ],
          needs: 'Weinig sturing (heeft de vaardigheden) maar veel ondersteuning (voor vertrouwen en motivatie).',
          sportExample: 'Een ervaren speler die technisch goed is maar twijfelt of hij wel aanvoerder kan zijn of belangrijke penalty\'s kan nemen.'
        },
        {
          level: 'D4 - Zelfstandige Uitvoerder',
          competence: 'Hoog',
          commitment: 'Hoog',
          characteristics: [
            'Hoge competentie en motivatie',
            'Kan zelfstandig werken',
            'Neemt verantwoordelijkheid',
            'Zoekt nieuwe uitdagingen'
          ],
          needs: 'Weinig sturing en weinig ondersteuning - kan zelfstandig functioneren.',
          sportExample: 'Een ervaren aanvoerder die zowel technisch uitstekend is als het team kan motiveren en leiden.'
        }
      ],
      leadershipStyles: [
        {
          style: 'S1 - Sturend',
          behavior: 'Hoog Sturend, Laag Ondersteunend',
          when: 'Voor D1 - Enthousiaste Beginner',
          description: 'De leider geeft duidelijke instructies en houdt nauw toezicht. Weinig ruimte voor inbreng van de medewerker.',
          approach: [
            'Specifieke instructies geven',
            'Taken stap voor stap uitleggen',
            'Regelmatig controleren',
            'Duidelijke verwachtingen stellen'
          ],
          sportExample: 'Een trainer die een nieuwe speler exact uitlegt hoe het systeem werkt, welke posities hij moet innemen en wat zijn taken zijn.'
        },
        {
          style: 'S2 - Coachend',
          behavior: 'Hoog Sturend, Hoog Ondersteunend',
          when: 'Voor D2 - Ontgoochelde Leerling',
          description: 'De leider geeft nog steeds veel sturing maar biedt ook emotionele ondersteuning en luistert naar zorgen.',
          approach: [
            'Uitleggen waarom dingen gedaan moeten worden',
            'Luisteren naar zorgen en frustraties',
            'Vertrouwen opbouwen',
            'Kleine successen vieren'
          ],
          sportExample: 'Een trainer die een speler in een dipje niet alleen technische tips geeft, maar ook luistert naar zijn zorgen en hem mentaal ondersteunt.'
        },
        {
          style: 'S3 - Ondersteunend',
          behavior: 'Laag Sturend, Hoog Ondersteunend',
          when: 'Voor D3 - Voorzichtige Uitvoerder',
          description: 'De leider faciliteert en ondersteunt, maar laat de medewerker zelf beslissingen nemen.',
          approach: [
            'Vragen stellen in plaats van antwoorden geven',
            'Vertrouwen uitspreken',
            'Beschikbaar zijn voor ondersteuning',
            'Samen problemen oplossen'
          ],
          sportExample: 'Een trainer die een ervaren speler vraagt wat hij denkt dat de beste aanpak is en hem ondersteunt in zijn beslissingen.'
        },
        {
          style: 'S4 - Delegerend',
          behavior: 'Laag Sturend, Laag Ondersteunend',
          when: 'Voor D4 - Zelfstandige Uitvoerder',
          description: 'De leider delegeert verantwoordelijkheid en autoriteit. Minimale sturing en ondersteuning.',
          approach: [
            'Verantwoordelijkheid volledig overdragen',
            'Beschikbaar zijn wanneer nodig',
            'Resultaten monitoren, niet het proces',
            'Ruimte geven voor eigen aanpak'
          ],
          sportExample: 'Een trainer die zijn aanvoerder de vrijheid geeft om het team te leiden en alleen ingrijpt als het echt nodig is.'
        }
      ],
      keyPrinciples: [
        'Er is geen beste leiderschapsstijl - het hangt af van de situatie',
        'Ontwikkelingsniveau is taakspecifiek - iemand kan D4 zijn voor één taak en D2 voor een andere',
        'Effectieve leiders zijn flexibel en passen hun stijl aan',
        'Het doel is om mensen te ontwikkelen naar D4 niveau',
        'Communicatie over verwachtingen is cruciaal'
      ],
      diagnosticProcess: [
        'Bepaal het ontwikkelingsniveau van de persoon voor de specifieke taak',
        'Kies de bijpassende leiderschapsstijl',
        'Communiceer duidelijk over verwachtingen en aanpak',
        'Monitor de voortgang en pas aan indien nodig',
        'Werk naar meer zelfstandigheid (D4) toe'
      ],
      commonMistakes: [
        'Eén stijl gebruiken voor alle mensen en situaties',
        'Aannemen dat ervaren mensen altijd D4 zijn',
        'Te snel overgaan naar delegeren',
        'Niet communiceren over de gekozen aanpak',
        'Ontwikkelingsniveau niet regelmatig hervalueren'
      ],
      benefits: [
        'Betere ontwikkeling van teamleden',
        'Verhoogde effectiviteit van het team',
        'Meer gemotiveerde medewerkers',
        'Duidelijkere communicatie',
        'Flexibeler leiderschap'
      ]
    }
  },
  {
    id: 'macht-in-leiderschap',
    title: 'Macht in Leiderschap',
    description: 'Keltner\'s theorie over hoe macht je brein beschadigt en Marcus & Van Dam\'s zes machtsbronnen voor effectief leiderschap.',
    content: {
      introduction: {
        title: 'Macht: Noodzakelijk maar Gevaarlijk',
        description: 'Macht is essentieel voor management en leiderschap - je kunt niet leiden zonder invloed. Maar macht heeft ook een donkere kant die zorgvuldig beheerd moet worden.',
        keyInsight: 'Macht hoort bij leiderschap, maar "macht beschadigt je brein" - daarom zijn preventiestrategieën cruciaal.'
      },
      keltnerTheory: {
        problem: {
          description: 'Volgens Keltner gebeurt er iets gevaarlijks in je hoofd als je veel macht hebt. Je ontwikkelt bijna een antisociale persoonlijkheidsstoornis.',
          effects: [
            'Je aandacht gaat steeds meer naar jezelf',
            'Je wordt minder empathisch',
            'Je morele vermogens nemen af',
            'Alles wordt gericht op je eigen voordeel',
            'Je gaat macht misbruiken',
            'Het gaat niet meer om "the greater good"'
          ]
        },
        preventionStrategies: [
          {
            name: '1. Empathie',
            description: 'Richt jezelf voortdurend op de belangen en gevoelens van anderen, niet alleen op jezelf.',
            practice: 'Wees empathisch en denk actief na over hoe anderen zich voelen en wat zij nodig hebben.'
          },
          {
            name: '2. Delen/Generositeit',
            description: 'Deel wat je krijgt door je macht - kennis, geld, respect - ruimhartig met anderen.',
            practice: 'Geef credit aan je team, deel informatie en middelen, en zorg dat anderen ook kunnen groeien.'
          },
          {
            name: '3. Dankbaarheid',
            description: 'Wees dankbaar voor de macht en voorrechten die je hebt gekregen en deel die dankbaarheid.',
            practice: 'Erken dat je macht een geschenk is van anderen en toon waardering voor wat je hebt ontvangen.'
          },
          {
            name: '4. Verbinding',
            description: 'Zorg dat je werkt aan gezamenlijke doelen en hou verbinding met je team.',
            practice: 'Vertel verhalen die mensen verbinden, focus op gemeenschappelijke doelen en blijf betrokken bij je team.'
          }
        ]
      },
      marcusVanDam: {
        positionBased: [
          {
            name: 'Legitieme Macht',
            description: 'Macht die je hebt gekregen van anderen door je positie of functie.',
            advantages: [
              'Duidelijk en geaccepteerd',
              'Officieel erkend',
              'Geeft autoriteit om beslissingen te nemen'
            ],
            disadvantages: [
              'Verdwijnt als je de positie verlaat',
              'Kan weerstand oproepen',
              'Werkt alleen binnen de organisatie'
            ],
            sportExample: 'Een hoofdtrainer heeft legitieme macht over zijn assistenten en spelers door zijn aanstelling door de club.'
          },
          {
            name: 'Beloningmacht',
            description: 'Macht om anderen op welke manier dan ook te belonen.',
            advantages: [
              'Kan motiverend werken',
              'Duidelijke incentive',
              'Meetbare resultaten'
            ],
            disadvantages: [
              'Kan afhankelijkheid creëren',
              'Externe motivatie in plaats van intrinsieke',
              'Duur om vol te houden'
            ],
            sportExample: 'Een trainer die speeltijd, bonussen of complimenten kan geven aan goed presterende spelers.'
          },
          {
            name: 'Sanctiemacht',
            description: 'Macht om mensen te straffen of uit te sluiten als ze niet meewerken.',
            advantages: [
              'Kan snel gedrag veranderen',
              'Duidelijke consequenties',
              'Handhaaft discipline'
            ],
            disadvantages: [
              'Creëert angst en weerstand',
              'Beschadigt relaties',
              'Werkt alleen op korte termijn'
            ],
            sportExample: 'Een trainer die spelers kan schorsen, op de bank kan zetten of uit de selectie kan halen.'
          },
          {
            name: 'Informatiemacht',
            description: 'Macht door de informatie die je hebt - sommige mensen kunnen zonder die informatie niets doen.',
            advantages: [
              'Kan snel impact hebben',
              'Maakt je onmisbaar',
              'Geeft controle over processen'
            ],
            disadvantages: [
              'Kan leiden tot informatiehoarding',
              'Creëert afhankelijkheid',
              'Verdwijnt als informatie gedeeld wordt'
            ],
            sportExample: 'Een trainer die exclusieve informatie heeft over tegenstanders, blessures of tactische plannen.'
          }
        ],
        personBased: [
          {
            name: 'Expertisemacht',
            description: 'Macht door kennis en vaardigheden - "kennis is macht".',
            advantages: [
              'Duurzaam en overdraagbaar',
              'Gebaseerd op competentie',
              'Creëert respect'
            ],
            disadvantages: [
              'Duurt lang om op te bouwen',
              'Kan verouderen',
              'Vereist constante ontwikkeling'
            ],
            sportExample: 'Een trainer die respect heeft door zijn uitgebreide kennis van tactiek, training en spelersmanagement.'
          },
          {
            name: 'Referentiemacht (Charisma)',
            description: 'Macht door persoonlijke aantrekkingskracht en charisma - mensen volgen je omdat ze je bewonderen.',
            advantages: [
              'Zeer motiverend voor anderen',
              'Creëert loyaliteit',
              'Werkt in alle situaties'
            ],
            disadvantages: [
              'Moeilijk te ontwikkelen',
              'Kan leiden tot blinde volgzaamheid',
              'Afhankelijk van persoonlijkheid'
            ],
            sportExample: 'Een charismatische trainer zoals Jürgen Klopp die spelers inspireert door zijn persoonlijkheid en passie.'
          }
        ]
      },
      integration: {
        title: 'Integratie: Keltner + Marcus & Van Dam',
        description: 'De combinatie van beide theorieën geeft een compleet beeld van macht in leiderschap.',
        keyPoints: [
          'Positie-gebonden macht heeft het hoogste risico voor Keltner\'s "macht beschadigt je brein" effecten',
          'Persoon-gebonden macht is duurzamer en minder risicovol voor machtsmisbruik',
          'Effectieve leiders combineren verschillende machtsbronnen afhankelijk van de situatie',
          'Keltner\'s vier preventiestrategieën zijn vooral belangrijk bij positie-gebonden macht'
        ]
      },
      practicalApplications: [
        {
          situation: 'Nieuwe teamleider',
          approach: 'Begin met legitieme macht, bouw snel expertise en referentiemacht op',
          powerSources: ['Legitieme Macht', 'Expertisemacht', 'Informatiemacht']
        },
        {
          situation: 'Ervaren leider',
          approach: 'Focus op persoon-gebonden macht en pas Keltner\'s preventiestrategieën toe',
          powerSources: ['Expertisemacht', 'Referentiemacht', 'Empathie', 'Delen']
        },
        {
          situation: 'Crisis management',
          approach: 'Gebruik legitieme en sanctiemacht, maar herstel daarna relaties',
          powerSources: ['Legitieme Macht', 'Sanctiemacht', 'Informatiemacht']
        },
        {
          situation: 'Team ontwikkeling',
          approach: 'Gebruik beloningmacht en expertise, deel kennis en verantwoordelijkheid',
          powerSources: ['Beloningmacht', 'Expertisemacht', 'Delen', 'Verbinding']
        }
      ],
      warningSignals: [
        'Je luistert alleen nog naar mensen die het met je eens zijn',
        'Je neemt alle credit voor successen',
        'Je toont geen interesse in de mening van anderen',
        'Je gebruikt macht vooral voor persoonlijk gewin',
        'Je vermijdt feedback of kritiek',
        'Je isolatie van het team neemt toe'
      ],
      ethicalGuidelines: [
        'Gebruik macht ten dienste van het team en de organisatie',
        'Wees transparant over je beslissingen en motieven',
        'Zoek regelmatig feedback van je team',
        'Deel informatie en mogelijkheden met anderen',
        'Erken de bijdragen van teamleden',
        'Blijf leren en jezelf ontwikkelen'
      ]
    }
  },
  {
    id: 'narcisme',
    title: 'Disfunctioneel Leiderschap (Kets de Vries)',
    description: 'Manfred Kets de Vries\' analyse van disfunctionele leiderschapspatronen en hoe deze te herkennen en voorkomen.',
    content: {
      introduction: {
        title: 'Wanneer Leiderschap Misgaat',
        description: 'Kets de Vries identificeert verschillende disfunctionele leiderschapspatronen die organisaties kunnen beschadigen. Deze patronen ontstaan vaak uit onverwerkte psychologische problemen van de leider.',
        keyInsight: 'Disfunctioneel leiderschap is vaak het gevolg van onbewuste psychologische patronen die de leider zelf niet herkent.'
      },
      dysfunctionalPatterns: [
        {
          name: 'De Narcistische Leider',
          description: 'Heeft een overdreven gevoel van eigenwaarde en superioriteit, zoekt constant bewondering.',
          characteristics: [
            'Overdreven gevoel van eigenwaarde',
            'Fantasieën over onbeperkt succes en macht',
            'Gelooft uniek en speciaal te zijn',
            'Heeft behoefte aan constante bewondering',
            'Gevoel van recht op speciale behandeling',
            'Exploiteert anderen voor eigen doelen'
          ],
          consequences: [
            'Demotiveert teamleden',
            'Creëert toxische werkcultuur',
            'Leidt tot hoog verloop',
            'Vermindert innovatie',
            'Beschadigt organisatiereputatie'
          ],
          recognition: [
            'Neemt alle credit voor successen',
            'Geeft anderen de schuld van mislukkingen',
            'Toont weinig empathie',
            'Reageert slecht op kritiek',
            'Omringt zich met ja-knikkers'
          ],
          sportExample: 'Een trainer die alle media-aandacht naar zich toetrekt, spelers publiekelijk vernedert en weigert verantwoordelijkheid te nemen voor slechte resultaten.'
        },
        {
          name: 'De Paranoïde Leider',
          description: 'Vertoont excessief wantrouwen jegens anderen en ziet overal complotten en bedreigingen.',
          characteristics: [
            'Excessief wantrouwen',
            'Ziet overal bedreigingen',
            'Interpreteert neutrale opmerkingen als aanvallen',
            'Houdt wrok vast',
            'Deelt geen informatie',
            'Controleert obsessief'
          ],
          consequences: [
            'Inefficiënte processen door micromanagement',
            'Angstcultuur in het team',
            'Verminderde creativiteit',
            'Slechte communicatie',
            'Hoge stress bij medewerkers'
          ],
          recognition: [
            'Constant achterdochtig gedrag',
            'Weigert te delegeren',
            'Zoekt naar verborgen agenda\'s',
            'Isoleert zich van het team',
            'Reageert defensief op vragen'
          ],
          sportExample: 'Een trainer die denkt dat spelers tegen hem samenzweren, alle gesprekken afluistert en niemand vertrouwt met belangrijke informatie.'
        },
        {
          name: 'De Theatrale Leider',
          description: 'Heeft een constante behoefte aan aandacht en dramatiseert situaties.',
          characteristics: [
            'Constante behoefte aan aandacht',
            'Dramatisch en emotioneel gedrag',
            'Oppervlakkige emoties',
            'Zoekt constant goedkeuring',
            'Impulsieve beslissingen',
            'Overdreven expressief'
          ],
          consequences: [
            'Instabiele werkomgeving',
            'Onvoorspelbare besluitvorming',
            'Verminderde geloofwaardigheid',
            'Chaos in planning',
            'Stress bij teamleden'
          ],
          recognition: [
            'Overdreven emotionele reacties',
            'Constant in het middelpunt willen staan',
            'Impulsieve veranderingen',
            'Dramatiseert kleine problemen',
            'Inconsistent gedrag'
          ],
          sportExample: 'Een trainer die bij elke persconferentie dramatische uitspraken doet, spelers publiekelijk omhelst of uitscheldt, en constant de aandacht op zich vestigt.'
        },
        {
          name: 'De Dwangmatige Leider',
          description: 'Heeft een obsessie met perfectie, details en controle.',
          characteristics: [
            'Obsessie met perfectie',
            'Overdreven aandacht voor details',
            'Rigide werkwijze',
            'Moeilijk delegeren',
            'Hoge standaarden voor anderen',
            'Angst voor fouten'
          ],
          consequences: [
            'Vertraagde besluitvorming',
            'Verminderde flexibiliteit',
            'Stress door onrealistische eisen',
            'Gebrek aan innovatie',
            'Burnout bij teamleden'
          ],
          recognition: [
            'Eindeloos herzien van plannen',
            'Micromanagement',
            'Kan niet loslaten',
            'Kritisch op kleine details',
            'Vermijdt risico\'s'
          ],
          sportExample: 'Een trainer die elke training tot in de seconde plant, spelers corrigeert op kleinste details en weigert van zijn systeem af te wijken, zelfs als het niet werkt.'
        },
        {
          name: 'De Depressieve Leider',
          description: 'Toont chronisch pessimisme en gebrek aan energie.',
          characteristics: [
            'Chronisch pessimisme',
            'Gebrek aan energie',
            'Negatieve wereldvisie',
            'Vermijdt beslissingen',
            'Lage zelfwaardering',
            'Sociale isolatie'
          ],
          consequences: [
            'Demotiveert het hele team',
            'Verminderde productiviteit',
            'Negatieve sfeer',
            'Gebrek aan visie',
            'Stagnatie in ontwikkeling'
          ],
          recognition: [
            'Constant negatieve houding',
            'Vermijdt uitdagingen',
            'Weinig enthousiasme',
            'Twijfelt aan alles',
            'Trekt zich terug'
          ],
          sportExample: 'Een trainer die constant spreekt over wat er mis kan gaan, geen vertrouwen uitstraalt en het team demotiveert met zijn pessimistische houding.'
        }
      ],
      preventionStrategies: {
        title: 'Preventiestrategieën',
        description: 'Hoe kun je disfunctioneel leiderschapsgedrag voorkomen?',
        strategies: [
          {
            strategy: 'Zelfbewustzijn ontwikkelen',
            description: 'Regelmatige zelfreflectie en bewustwording van eigen gedragspatronen.',
            implementation: [
              'Regelmatige zelfevaluatie',
              'Persoonlijke coaching',
              'Mindfulness praktijk',
              'Journaling'
            ]
          },
          {
            strategy: 'Feedback zoeken',
            description: 'Actief feedback vragen van teamleden, collega\'s en superieuren.',
            implementation: [
              '360-graden feedback',
              'Regelmatige teamgesprekken',
              'Mentorship',
              'Open communicatie stimuleren'
            ]
          },
          {
            strategy: 'Professionele ontwikkeling',
            description: 'Investeren in persoonlijke en professionele groei.',
            implementation: [
              'Leiderschapstraining',
              'Therapie indien nodig',
              'Coaching',
              'Peer learning'
            ]
          },
          {
            strategy: 'Systemen en checks',
            description: 'Organisatorische safeguards implementeren.',
            implementation: [
              'Checks and balances',
              'Diverse teams',
              'Transparante processen',
              'Regelmatige evaluaties'
            ]
          }
        ]
      },
      warningSignals: [
        'Hoog verloop van getalenteerde medewerkers',
        'Verminderde teammoraal',
        'Gebrek aan open communicatie',
        'Angst om feedback te geven',
        'Stagnatie in innovatie',
        'Toxische werkcultuur',
        'Verminderde prestaties',
        'Isolatie van de leider'
      ],
      healthyLeadership: {
        title: 'Kenmerken van Gezond Leiderschap',
        description: 'Wat kenmerkt effectieve, gezonde leiders?',
        characteristics: [
          'Zelfbewustzijn en emotionele intelligentie',
          'Empathie en interesse in anderen',
          'Openheid voor feedback en kritiek',
          'Flexibiliteit en aanpassingsvermogen',
          'Integriteit en authentiek gedrag',
          'Focus op teamontwikkeling',
          'Balans tussen zelfvertrouwen en nederigheid',
          'Duidelijke communicatie'
        ]
      }
    }
  },
  {
    id: 'maccoby',
    title: 'Productief vs Destructief Narcisme (Maccoby)',
    description: 'Michael Maccoby\'s onderscheid tussen productieve en destructieve vormen van narcisme in leiderschap.',
    content: {
      introduction: {
        title: 'Narcisme: Niet Altijd Slecht',
        description: 'Michael Maccoby stelt dat narcisme in leiderschap niet per definitie destructief is. Er bestaat een belangrijk onderscheid tussen productief en destructief narcisme.',
        keyInsight: 'Productieve narcisten kunnen uitstekende leiders zijn als ze hun narcistische trekken kanaliseren naar teamdoelen in plaats van persoonlijk gewin.'
      },
      narcissismTypes: [
        {
          type: 'Productief Narcisme',
          description: 'Narcistische trekken die worden ingezet voor het grotere goed van het team of de organisatie.',
          characteristics: [
            'Hoog zelfvertrouwen en ambitie',
            'Visionair denken',
            'Bereidheid om risico\'s te nemen',
            'Charismatische uitstraling',
            'Competitieve drive',
            'Inspirerend voor anderen'
          ],
          benefits: [
            'Motiveert teams tot hoge prestaties',
            'Creëert ambitieuze doelen',
            'Durft moeilijke beslissingen te nemen',
            'Inspireert vertrouwen',
            'Drijft innovatie vooruit',
            'Bouwt sterke organisatiecultuur'
          ],
          sportExample: 'Een trainer zoals Pep Guardiola die zijn perfectionalisme en hoge eisen gebruikt om teams naar het hoogste niveau te tillen, waarbij zijn ego dienstbaar is aan teamsucces.'
        },
        {
          type: 'Destructief Narcisme',
          description: 'Narcistische trekken die primair gericht zijn op persoonlijk gewin ten koste van anderen.',
          characteristics: [
            'Gebrek aan empathie',
            'Exploiteert anderen',
            'Neemt alle credit',
            'Geeft anderen de schuld',
            'Luistert niet naar feedback',
            'Ziet anderen als bedreigingen'
          ],
          consequences: [
            'Demotiveert teamleden',
            'Creëert toxische cultuur',
            'Leidt tot hoog verloop',
            'Beschadigt relaties',
            'Vermindert teamcohesie',
            'Ondermijnt organisatiedoelen'
          ],
          sportExample: 'Een trainer die spelers publiekelijk vernedert, alle eer opeist voor overwinningen maar spelers de schuld geeft van nederlagen, en geen kritiek accepteert.'
        }
      ],
      productiveNarcissistTraits: [
        {
          trait: 'Visionair Leiderschap',
          description: 'Gebruikt hun zelfvertrouwen om ambitieuze visies te creëren en te communiceren.',
          application: 'Stelt inspirerende doelen die het team motiveert',
          balance: 'Zorgt dat de visie realistisch en haalbaar blijft'
        },
        {
          trait: 'Competitieve Excellence',
          description: 'Kanaliseert hun competitieve drive naar teamdoelen.',
          application: 'Gebruikt hun wil om te winnen voor teamsucces',
          balance: 'Erkent bijdragen van teamleden aan successen'
        },
        {
          trait: 'Charismatische Motivatie',
          description: 'Gebruikt hun natuurlijke charisma om anderen te inspireren.',
          application: 'Motiveert teams door persoonlijke uitstraling',
          balance: 'Ontwikkelt ook andere teamleden als leiders'
        },
        {
          trait: 'Risicobereidheid',
          description: 'Durft moeilijke beslissingen te nemen die anderen vermijden.',
          application: 'Neemt berekende risico\'s voor teamvoordeel',
          balance: 'Luistert naar input van experts en teamleden'
        }
      ],
      managingNarcissism: {
        title: 'Narcisme Managen',
        description: 'Hoe kunnen narcistische leiders hun trekken productief houden?',
        strategies: [
          {
            strategy: 'Empathie Ontwikkelen',
            description: 'Bewust werken aan begrip voor anderen.',
            implementation: [
              'Actief luisteren naar teamleden',
              'Interesse tonen in persoonlijke ontwikkeling van anderen',
              'Regelmatig vragen naar feedback',
              'Tijd besteden aan individuele gesprekken'
            ]
          },
          {
            strategy: 'Feedback Accepteren',
            description: 'Openheid creëren voor kritiek en suggesties.',
            implementation: [
              'Regelmatige feedback sessies organiseren',
              'Veilige omgeving creëren voor kritiek',
              'Dankbaar reageren op feedback',
              'Concrete acties ondernemen op basis van input'
            ]
          },
          {
            strategy: 'Credit Delen',
            description: 'Erkenning geven aan teamleden voor hun bijdragen.',
            implementation: [
              'Publiekelijk teamleden bedanken',
              'Successen toeschrijven aan teaminspanning',
              'Individuele prestaties uitlichten',
              'Ontwikkelingsmogelijkheden bieden aan anderen'
            ]
          },
          {
            strategy: 'Zelfbewustzijn',
            description: 'Bewust blijven van eigen narcistische neigingen.',
            implementation: [
              'Regelmatige zelfreflectie',
              'Coaching of mentoring zoeken',
              'Waarschuwingssignalen herkennen',
              'Preventieve maatregelen nemen'
            ]
          }
        ]
      },
      warningSignals: [
        'Alleen luisteren naar mensen die het met je eens zijn',
        'Alle credit opeisen voor successen',
        'Anderen de schuld geven van mislukkingen',
        'Weerstand tegen feedback of kritiek',
        'Gebrek aan interesse in ontwikkeling van anderen',
        'Zien van teamleden als bedreigingen',
        'Isolatie van het team',
        'Focus op persoonlijke roem boven teamdoelen'
      ],
      developmentPath: [
        'Herken je narcistische trekken (zowel positieve als negatieve)',
        'Identificeer hoe deze trekken je team kunnen helpen',
        'Ontwikkel empathie door actief te luisteren naar anderen',
        'Creëer systemen voor regelmatige feedback',
        'Oefen met het delen van credit en erkenning',
        'Zoek coaching of mentoring voor continue ontwikkeling',
        'Monitor jezelf op waarschuwingssignalen',
        'Blijf focussen op teamdoelen boven persoonlijke roem'
      ]
    }
  },
  {
    id: 'ferguson',
    title: 'Alex Ferguson\'s Leiderschapsfilosofie',
    description: 'De leiderschapsprincipes van Sir Alex Ferguson, gebaseerd op zijn 26 jaar als manager van Manchester United.',
    content: {
      introduction: {
        title: 'De Meest Succesvolle Manager Ooit',
        description: 'Sir Alex Ferguson leidde Manchester United 26 jaar lang en won 38 trofeeën. Zijn leiderschapsfilosofie combineert discipline, individuele benadering, lange termijn visie en mentale sterkte.',
        keyInsight: 'Succes komt niet van één factor, maar van het consistent toepassen van fundamentele leiderschapsprincipes over een lange periode.'
      },
      leadershipElements: [
        {
          number: 1,
          name: 'Discipline en Standaarden',
          description: 'Ferguson geloofde dat discipline de basis is van elk succesvol team. Regels golden voor iedereen, zonder uitzonderingen.',
          keyPoints: [
            'Geen uitzonderingen - zelfs sterren zoals Beckham werden weggestuurd',
            'Duidelijke verwachtingen voor iedereen',
            'Consequent handhaven van regels',
            'Discipline als basis voor vrijheid'
          ],
          quote: 'Discipline is not about punishment, it\'s about standards.',
          example: 'Ferguson stuurde David Beckham weg omdat hij de teamdiscipline ondermijnde, ondanks zijn status als wereldster.'
        },
        {
          number: 2,
          name: 'Individuele Benadering',
          description: 'Elke speler is anders en vereist een unieke aanpak. Ferguson paste zijn communicatie aan per persoon.',
          keyPoints: [
            'Verschillende motivatietechnieken per speler',
            'Begrip van persoonlijke achtergronden',
            'Aanpassing van communicatiestijl',
            'Individuele ontwikkelingsplannen'
          ],
          quote: 'You have to treat each player as an individual.',
          example: 'Roy Keane had directe confrontatie nodig, terwijl Ryan Giggs subtiele begeleiding prefereerde.'
        },
        {
          number: 3,
          name: 'De "Hairdryer Treatment"',
          description: 'Ferguson\'s beroemde intense kritiek was strategisch ingezet, niet uit emotie maar als bewust instrument.',
          keyPoints: [
            'Strategisch gebruik van intense kritiek',
            'Timing was cruciaal',
            'Vaak berekend, niet uit echte boosheid',
            'Bedoeld om spelers wakker te schudden'
          ],
          quote: 'Sometimes you have to be hard to be kind.',
          example: 'De beroemde "hairdryer" tijdens rust tegen Arsenal in 1999, wat leidde tot een comeback en de treble.'
        },
        {
          number: 4,
          name: 'Lange Termijn Visie',
          description: 'Ferguson dacht altijd in jaren, niet in wedstrijden. Hij bouwde voor de toekomst.',
          keyPoints: [
            'Investering in jeugdacademie',
            'Opbouw van duurzame systemen',
            'Voorbereiding van opvolgers',
            'Cultuur die generaties overstijgt'
          ],
          quote: 'I never think about today, I think about tomorrow.',
          example: 'De Class of \'92 (Beckham, Scholes, Giggs, etc.) kwam voort uit zijn lange termijn investering in jeugd.'
        },
        {
          number: 5,
          name: 'Mentale Sterkte',
          description: 'Ferguson geloofde dat mentale kracht belangrijker was dan technische vaardigheden.',
          keyPoints: [
            'Veerkracht bij tegenslagen',
            'Geloof in comeback mogelijkheden',
            'Mentale voorbereiding op druk',
            'Cultuur van "never give up"'
          ],
          quote: 'Football is a game of mistakes. Whoever makes the fewest mistakes wins.',
          example: 'Manchester United stond bekend om late goals en comebacks - "Fergie Time" werd een begrip.'
        },
        {
          number: 6,
          name: 'Controle en Autoriteit',
          description: 'Ferguson behield altijd de ultieme controle, maar delegeerde waar nodig.',
          keyPoints: [
            'Duidelijke hiërarchie',
            'Delegatie met behoud van controle',
            'Autoriteit door respect, niet angst',
            'Beslissende momenten zelf nemen'
          ],
          quote: 'The manager is the most important person at the club.',
          example: 'Ferguson nam alle belangrijke beslissingen zelf, maar gaf zijn assistenten ruimte in hun specialisaties.'
        },
        {
          number: 7,
          name: 'Aanpassingsvermogen',
          description: 'Ferguson paste zijn tactieken, spelers en aanpak aan gedurende zijn carrière.',
          keyPoints: [
            'Evolutie van speelstijl',
            'Aanpassing aan nieuwe generaties',
            'Flexibiliteit in tactieken',
            'Leren van nederlagen'
          ],
          quote: 'The game is always changing, and you have to change with it.',
          example: 'Ferguson veranderde van een aanvallende 4-4-2 naar meer tactische flexibiliteit in zijn latere jaren.'
        },
        {
          number: 8,
          name: 'Teamcultuur',
          description: 'Ferguson creëerde een winnende cultuur die groter was dan individuele spelers.',
          keyPoints: [
            'Cultuur van excellentie',
            'Teambelang boven individueel belang',
            'Tradities en rituelen',
            'Trots op de club'
          ],
          quote: 'The culture of the club is more important than any individual.',
          example: 'Nieuwe spelers werden geïndoctrineerd in de "United Way" - een cultuur van hard werk en winnen.'
        },
        {
          number: 9,
          name: 'Timing en Intuïtie',
          description: 'Ferguson had een uitzonderlijk gevoel voor timing in beslissingen en substituties.',
          keyPoints: [
            'Perfecte timing van substituties',
            'Intuïtief aanvoelen van momentum',
            'Juiste moment voor veranderingen',
            'Gevoel voor psychologie van het spel'
          ],
          quote: 'Timing in football is everything.',
          example: 'Zijn substituties in de Champions League finale van 1999 leidden tot twee late goals en de overwinning.'
        }
      ],
      corePhilosophy: {
        title: 'Ferguson\'s Kernfilosofie',
        description: 'De onderliggende principes die al zijn beslissingen stuurden.',
        principles: [
          'Winnen is een gewoonte, niet een toeval',
          'Discipline creëert vrijheid om te presteren',
          'Individuele talenten moeten dienstbaar zijn aan teamdoelen',
          'Lange termijn succes vereist korte termijn offers',
          'Mentale sterkte is de basis van alle prestaties',
          'Cultuur en waarden zijn belangrijker dan individuele sterren',
          'Continue verbetering en aanpassing zijn essentieel',
          'Leiderschap betekent verantwoordelijkheid nemen'
        ]
      },
      modernApplications: {
        title: 'Moderne Toepassingen',
        description: 'Hoe Ferguson\'s principes vandaag nog steeds relevant zijn.',
        applications: [
          {
            context: 'Moderne sportteams',
            approach: 'Combinatie van data-analyse met Ferguson\'s intuïtieve mensen-management',
            result: 'Betere balans tussen technologie en menselijke factoren'
          },
          {
            context: 'Bedrijfsleiderschap',
            approach: 'Toepassing van individuele benadering en lange termijn visie',
            result: 'Hogere medewerkerbetrokkenheid en duurzame groei'
          },
          {
            context: 'Jeugdcoaching',
            approach: 'Focus op mentale ontwikkeling naast technische vaardigheden',
            result: 'Veerkrachtigere en meer zelfverzekerde jonge atleten'
          },
          {
            context: 'Crisismanagement',
            approach: 'Ferguson\'s discipline en duidelijke communicatie onder druk',
            result: 'Effectievere besluitvorming in moeilijke tijden'
          }
        ]
      },
      keyLessons: [
        'Consistentie in principes is belangrijker dan perfecte tactieken',
        'Discipline en vrijheid zijn geen tegenstellingen maar complementair',
        'Individuele benadering verhoogt teamprestaties',
        'Lange termijn denken creëert duurzaam succes',
        'Mentale sterkte kan worden ontwikkeld en getraind',
        'Cultuur is de basis van alle andere successen',
        'Aanpassingsvermogen is essentieel voor langdurig succes',
        'Leiderschap vereist moed om moeilijke beslissingen te nemen'
      ]
    }
  },
  {
    id: 'wiltschut',
    title: 'Gezag vs Dominantie (Van Vugt & Wiltschut)',
    description: 'Het onderscheid tussen gezag (gewenst) en dominantie (vermijden) in leiderschapsgedrag.',
    content: {
      mainConcept: 'Effectief leiderschap draait om het opbouwen van gezag (gebaseerd op respect) in plaats van dominantie (gebaseerd op macht en controle).',
      gezag: [
        {
          characteristic: 'Gebaseerd op Respect',
          description: 'Mensen volgen je omdat ze je respecteren en vertrouwen',
          sportExample: 'Een aanvoerder die wordt gerespecteerd om zijn ervaring en wijsheid'
        },
        {
          characteristic: 'Verdiend Leiderschap',
          description: 'Autoriteit komt voort uit competentie en integriteit',
          sportExample: 'Een trainer die gezag heeft door zijn kennis en eerlijke behandeling'
        },
        {
          characteristic: 'Vrijwillige Volgzaamheid',
          description: 'Teamleden kiezen ervoor om je te volgen',
          sportExample: 'Spelers die extra moeite doen omdat ze geloven in de coach'
        },
        {
          characteristic: 'Empowerment',
          description: 'Geeft anderen de ruimte om te groeien en bij te dragen',
          sportExample: 'Een captain die andere spelers laat leiden in hun sterke punten'
        },
        {
          characteristic: 'Duurzame Invloed',
          description: 'Invloed blijft bestaan ook zonder directe aanwezigheid',
          sportExample: 'Spelers die de waarden van hun coach uitdragen, ook als hij er niet is'
        }
      ],
      dominantie: [
        {
          characteristic: 'Gebaseerd op Macht',
          description: 'Mensen volgen je uit angst of omdat ze moeten',
          sportExample: 'Een trainer die alleen door intimidatie en straffen leidt'
        },
        {
          characteristic: 'Opgelegde Autoriteit',
          description: 'Autoriteit komt alleen voort uit positie of dwang',
          sportExample: 'Een aanvoerder die alleen leidt omdat hij is aangewezen'
        },
        {
          characteristic: 'Gedwongen Gehoorzaamheid',
          description: 'Mensen gehoorzamen uit angst voor consequenties',
          sportExample: 'Spelers die alleen presteren uit angst voor straf'
        },
        {
          characteristic: 'Onderdrukking',
          description: 'Beperkt de groei en bijdrage van anderen',
          sportExample: 'Een coach die geen input accepteert van spelers of assistenten'
        },
        {
          characteristic: 'Tijdelijke Invloed',
          description: 'Invloed verdwijnt zodra de macht wegvalt',
          sportExample: 'Spelers die rebelleren zodra de strenge trainer vertrekt'
        }
      ],
      consequences: {
        gezag: 'Leidt tot gemotiveerde teams, duurzame prestaties, persoonlijke groei van teamleden, en een positieve cultuur waar mensen hun beste zelf kunnen zijn.',
        dominantie: 'Resulteert in angst, verminderde creativiteit, hoog verloop, burnout, en teams die alleen functioneren onder directe controle.'
      },
      developingAuthority: [
        'Bouw expertise op in je vakgebied',
        'Toon integriteit in al je handelingen',
        'Luister actief naar je teamleden',
        'Geef anderen de ruimte om te groeien',
        'Wees consistent in je gedrag en beslissingen',
        'Toon empathie en begrip voor anderen',
        'Neem verantwoordelijkheid voor je fouten',
        'Investeer in de ontwikkeling van je team',
        'Communiceer duidelijk en eerlijk',
        'Leef de waarden voor die je predikt'
      ]
    }
  }
]

export default function LeadershipApp() {
  const [selectedTheory, setSelectedTheory] = useState<string | null>(null)
  const [readTheories, setReadTheories] = useState<Set<string>>(new Set())
  const [showQuiz, setShowQuiz] = useState(false)
  const [points, setPoints] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [quizScore, setQuizScore] = useState<{score: number, total: number} | null>(null)

  // Load progress from localStorage on component mount
  useEffect(() => {
    const savedReadTheories = localStorage.getItem('readTheories')
    const savedPoints = localStorage.getItem('points')
    const savedQuizCompleted = localStorage.getItem('quizCompleted')
    const savedQuizScore = localStorage.getItem('quizScore')
    
    if (savedReadTheories) {
      setReadTheories(new Set(JSON.parse(savedReadTheories)))
    }
    if (savedPoints) {
      setPoints(parseInt(savedPoints))
    }
    if (savedQuizCompleted) {
      setQuizCompleted(JSON.parse(savedQuizCompleted))
    }
    if (savedQuizScore) {
      setQuizScore(JSON.parse(savedQuizScore))
    }
  }, [])

  // Save progress to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('readTheories', JSON.stringify(Array.from(readTheories)))
  }, [readTheories])

  useEffect(() => {
    localStorage.setItem('points', points.toString())
  }, [points])

  useEffect(() => {
    localStorage.setItem('quizCompleted', JSON.stringify(quizCompleted))
  }, [quizCompleted])

  useEffect(() => {
    if (quizScore) {
      localStorage.setItem('quizScore', JSON.stringify(quizScore))
    }
  }, [quizScore])

  const handleTheoryClick = (theoryId: string) => {
    if (selectedTheory === theoryId) {
      setSelectedTheory(null)
    } else {
      setSelectedTheory(theoryId)
      setShowQuiz(false)
    }
  }

  const handleTheoryRead = (theoryId: string) => {
    if (!readTheories.has(theoryId)) {
      setReadTheories(prev => new Set([...prev, theoryId]))
      setPoints(prev => prev + 50)
    }
  }

  const handleQuizComplete = (score: number, totalQuestions: number) => {
    setQuizCompleted(true)
    setQuizScore({ score, total: totalQuestions })
    const quizPoints = score * 10 // 10 points per correct answer
    setPoints(prev => prev + quizPoints)
  }

  const resetProgress = () => {
    setReadTheories(new Set())
    setPoints(0)
    setQuizCompleted(false)
    setQuizScore(null)
    setSelectedTheory(null)
    setShowQuiz(false)
    localStorage.removeItem('readTheories')
    localStorage.removeItem('points')
    localStorage.removeItem('quizCompleted')
    localStorage.removeItem('quizScore')
  }

  const allTheoriesRead = readTheories.size === theories.length
  const canTakeQuiz = allTheoriesRead && !quizCompleted

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🏆 Leiderschap in de Sport
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Voor HBO Sportkunde Studenten
        </p>
        
        {/* Progress Dashboard */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{points}</div>
              <div className="text-sm text-gray-600">Totaal Punten</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{readTheories.size}/{theories.length}</div>
              <div className="text-sm text-gray-600">Theorieën Gelezen</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">
                {quizCompleted ? '✅' : canTakeQuiz ? '🎯' : '🔒'}
              </div>
              <div className="text-sm text-gray-600">Quiz Status</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">
                {quizScore ? `${Math.round((quizScore.score / quizScore.total) * 100)}%` : '-'}
              </div>
              <div className="text-sm text-gray-600">Quiz Score</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Voortgang</span>
              <span>{Math.round(((readTheories.size + (quizCompleted ? 1 : 0)) / (theories.length + 1)) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${((readTheories.size + (quizCompleted ? 1 : 0)) / (theories.length + 1)) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            {canTakeQuiz && (
              <button
                onClick={() => {
                  setShowQuiz(true)
                  setSelectedTheory(null)
                }}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                🎯 Start Quiz (Verdien extra punten!)
              </button>
            )}
            
            {!allTheoriesRead && (
              <div className="text-center text-gray-600">
                <p className="text-sm">📚 Lees alle theorieën om de quiz te ontgrendelen</p>
              </div>
            )}

            <button
              onClick={resetProgress}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm"
            >
              🔄 Reset Voortgang
            </button>
          </div>
        </div>
      </div>

      {/* Quiz Section */}
      {showQuiz && (
        <div className="mb-8">
          <QuizComponent onComplete={handleQuizComplete} />
        </div>
      )}

      {/* Theories Grid */}
      {!showQuiz && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            📚 Leiderschapstheorieën
          </h2>
          
          {theories.map((theory) => (
            <div key={theory.id} onClick={() => handleTheoryClick(theory.id)} className="cursor-pointer">
              <TheoryCard
                theory={theory}
                isExpanded={selectedTheory === theory.id}
                onRead={() => handleTheoryRead(theory.id)}
                isRead={readTheories.has(theory.id)}
              />
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="text-center mt-12 text-gray-500">
        <p>💜 Gemaakt door Tom Naberink voor HBO Sportkunde</p>
        <p className="text-sm mt-2">Gebaseerd op de leiderschapstheorieën uit de cursus</p>
      </div>
    </div>
  )
}