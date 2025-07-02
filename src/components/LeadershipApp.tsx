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
    description: 'De 10 rollen die elke manager vervult, verdeeld over interpersoonlijke, informationele en besluitvormingsrollen.',
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
              description: 'Organisatie vertegenwoordigen naar buiten'
            }
          ]
        },
        {
          name: 'Besluitvormingsrollen',
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
              description: 'Beslissen over toewijzing van middelen'
            },
            {
              name: 'Onderhandelaar',
              description: 'Namens organisatie onderhandelen'
            }
          ]
        }
      ],
      sportExample: 'Een voetbaltrainer vervult alle rollen: als boegbeeld bij persconferenties, als leider van het team, als waarnemer van tegenstanders, als woordvoerder naar de media, en als onderhandelaar bij transfers.'
    }
  },
  {
    id: 'hersey-blanchard',
    title: 'Situationeel Leidinggeven (SLII)',
    description: 'Het aanpassen van je leiderschapsstijl aan het ontwikkelingsniveau van je teamleden voor specifieke taken.',
    content: {
      introduction: {
        title: 'Wat is Situationeel Leidinggeven?',
        description: 'Situationeel Leidinggeven (SLII) is gebaseerd op het idee dat er geen beste leiderschapsstijl bestaat. De effectiviteit van een leiderschapsstijl hangt af van de situatie en het ontwikkelingsniveau van de persoon.',
        keyInsight: 'De sleutel tot effectief leiderschap is flexibiliteit - het aanpassen van je stijl aan wat de situatie en de persoon nodig heeft.'
      },
      coreModel: {
        title: 'Het SLII Model',
        description: 'Het model combineert twee gedragsdimensies om vier verschillende leiderschapsstijlen te creëren:',
        dimensions: [
          {
            name: 'Sturend Gedrag',
            description: 'Eenrichtingscommunicatie waarbij de leider duidelijke instructies geeft',
            characteristics: [
              'Specifieke instructies geven',
              'Taken en rollen definiëren',
              'Nauw toezicht houden',
              'Deadlines stellen'
            ]
          },
          {
            name: 'Ondersteunend Gedrag',
            description: 'Tweerichtingscommunicatie waarbij de leider luistert en ondersteunt',
            characteristics: [
              'Actief luisteren',
              'Faciliteren en ondersteunen',
              'Betrekken bij besluitvorming',
              'Aanmoedigen en motiveren'
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
            'Weinig specifieke vaardigheden voor de taak',
            'Hoge motivatie en enthousiasme',
            'Bereid om te leren',
            'Overschat soms eigen kunnen'
          ],
          needs: 'Veel sturing en duidelijke instructies, weinig ondersteuning nodig vanwege hoge motivatie',
          sportExample: 'Een nieuwe speler die net bij het team komt - gemotiveerd maar heeft nog veel te leren over de tactiek en teamcultuur.'
        },
        {
          level: 'D2 - Ontgoochelde Leerling',
          competence: 'Laag tot Gemiddeld',
          commitment: 'Laag',
          characteristics: [
            'Heeft wat ervaring opgedaan',
            'Realiseert zich dat het moeilijker is dan gedacht',
            'Motivatie en vertrouwen zijn gedaald',
            'Kan gefrustreerd of ontmoedigd zijn'
          ],
          needs: 'Zowel veel sturing als veel ondersteuning - coaching om door de moeilijke periode te komen',
          sportExample: 'Een speler die na een paar maanden merkt dat het niveau hoger is dan verwacht en twijfelt aan eigen kunnen.'
        },
        {
          level: 'D3 - Voorzichtige Uitvoerder',
          competence: 'Gemiddeld tot Hoog',
          commitment: 'Variabel',
          characteristics: [
            'Heeft de vaardigheden ontwikkeld',
            'Twijfelt aan eigen kunnen of motivatie',
            'Wil meer verantwoordelijkheid maar is onzeker',
            'Heeft vertrouwen en ondersteuning nodig'
          ],
          needs: 'Weinig sturing maar veel ondersteuning - vertrouwen opbouwen en motiveren',
          sportExample: 'Een ervaren speler die technisch goed is maar twijfelt of hij wel geschikt is voor een leidersrol in het team.'
        },
        {
          level: 'D4 - Zelfstandige Uitvoerder',
          competence: 'Hoog',
          commitment: 'Hoog',
          characteristics: [
            'Heeft zowel vaardigheden als motivatie',
            'Kan zelfstandig werken',
            'Neemt verantwoordelijkheid',
            'Heeft vertrouwen in eigen kunnen'
          ],
          needs: 'Weinig sturing en weinig ondersteuning - kan gedelegeerd worden',
          sportExample: 'Een ervaren aanvoerder die zowel technisch uitstekend is als het team kan motiveren en leiden.'
        }
      ],
      leadershipStyles: [
        {
          style: 'S1 - Sturend',
          behavior: 'Hoog sturend, laag ondersteunend',
          when: 'Voor D1 - Enthousiaste Beginner',
          description: 'De leider geeft specifieke instructies en houdt nauw toezicht.',
          approach: [
            'Duidelijke instructies geven',
            'Taken en procedures uitleggen',
            'Nauw toezicht houden',
            'Weinig ruimte voor eigen inbreng'
          ],
          sportExample: 'Een trainer die een nieuwe speler stap-voor-stap de tactiek uitlegt en precies vertelt wat hij moet doen.'
        },
        {
          style: 'S2 - Coachend',
          behavior: 'Hoog sturend, hoog ondersteunend',
          when: 'Voor D2 - Ontgoochelde Leerling',
          description: 'De leider geeft nog steeds veel sturing maar ook veel ondersteuning en uitleg.',
          approach: [
            'Instructies geven én uitleggen waarom',
            'Vragen beantwoorden en ondersteunen',
            'Motiveren en aanmoedigen',
            'Feedback geven op prestaties'
          ],
          sportExample: 'Een trainer die een speler door een moeilijke periode helpt door zowel technische begeleiding als mentale ondersteuning te bieden.'
        },
        {
          style: 'S3 - Ondersteunend',
          behavior: 'Laag sturend, hoog ondersteunend',
          when: 'Voor D3 - Voorzichtige Uitvoerder',
          description: 'De leider faciliteert en ondersteunt, maar laat de uitvoering over aan de medewerker.',
          approach: [
            'Luisteren en faciliteren',
            'Betrekken bij besluitvorming',
            'Vertrouwen uitspreken',
            'Beschikbaar zijn voor ondersteuning'
          ],
          sportExample: 'Een trainer die een ervaren speler betrekt bij tactische beslissingen en hem het vertrouwen geeft om initiatief te nemen.'
        },
        {
          style: 'S4 - Delegerend',
          behavior: 'Laag sturend, laag ondersteunend',
          when: 'Voor D4 - Zelfstandige Uitvoerder',
          description: 'De leider delegeert verantwoordelijkheid en autoriteit.',
          approach: [
            'Verantwoordelijkheid overdragen',
            'Ruimte geven voor eigen beslissingen',
            'Beschikbaar zijn indien nodig',
            'Resultaten monitoren, niet het proces'
          ],
          sportExample: 'Een trainer die zijn aanvoerder de vrijheid geeft om het team te leiden en alleen ingrijpt bij belangrijke strategische beslissingen.'
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
        'Werk toe naar meer zelfstandigheid (D4 niveau)'
      ],
      commonMistakes: [
        'Eén stijl gebruiken voor alle situaties en mensen',
        'Aannemen dat ervaren mensen altijd D4 zijn',
        'Te snel overgaan naar delegeren zonder de stappen te doorlopen',
        'Niet communiceren over de gekozen aanpak',
        'Ontwikkelingsniveau inschatten op basis van algemene ervaring in plaats van taakspecifieke competentie'
      ],
      benefits: [
        'Betere ontwikkeling van teamleden',
        'Verhoogde effectiviteit en prestaties',
        'Meer gemotiveerde en betrokken medewerkers',
        'Duidelijkere communicatie en verwachtingen',
        'Flexibeler en aanpassingsvermogen als leider'
      ]
    }
  },
  {
    id: 'machtsbronnen',
    title: 'French & Raven: 5 Machtsbronnen',
    description: 'De vijf verschillende bronnen van macht die leiders kunnen gebruiken om invloed uit te oefenen.',
    content: {
      introduction: {
        title: 'Macht in Leiderschap',
        description: 'French en Raven identificeerden vijf verschillende bronnen van macht die leiders kunnen gebruiken. Elke bron heeft zijn eigen voordelen, nadelen en toepassingen.',
        keyInsight: 'Effectieve leiders begrijpen welke machtsbron wanneer te gebruiken en combineren verschillende bronnen voor maximale effectiviteit.'
      },
      powerSources: [
        {
          name: '1. Legitieme Macht (Positiemacht)',
          description: 'Macht die voortkomt uit je formele positie of titel in de organisatie.',
          characteristics: [
            'Gebaseerd op hiërarchie en organisatiestructuur',
            'Komt met de functie, niet met de persoon',
            'Wordt erkend door de organisatie',
            'Heeft duidelijke grenzen en bevoegdheden'
          ],
          advantages: [
            'Duidelijk en officieel erkend',
            'Geeft autoriteit om beslissingen te nemen',
            'Ondersteund door organisatiebeleid',
            'Effectief voor routine taken'
          ],
          disadvantages: [
            'Verdwijnt wanneer je de positie verlaat',
            'Kan weerstand oproepen',
            'Beperkt tot formele bevoegdheden',
            'Werkt niet altijd bij vrijwilligers of experts'
          ],
          sportExample: 'Een hoofdtrainer heeft legitieme macht over zijn assistenten en spelers vanwege zijn officiële positie in de club.',
          effectiveUse: [
            'Gebruik voor duidelijke organisatorische beslissingen',
            'Combineer met andere machtsbronnen',
            'Respecteer de grenzen van je bevoegdheden',
            'Gebruik spaarzaam om weerstand te voorkomen'
          ]
        },
        {
          name: '2. Beloningmacht',
          description: 'Macht gebaseerd op je vermogen om beloningen uit te delen.',
          characteristics: [
            'Controle over gewenste middelen of voordelen',
            'Kan materieel of immaterieel zijn',
            'Effectiviteit hangt af van waarde voor ontvanger',
            'Vereist middelen om beloningen te kunnen geven'
          ],
          advantages: [
            'Kan motiverend werken',
            'Flexibel in toepassing',
            'Kan gedrag positief beïnvloeden',
            'Creëert win-win situaties'
          ],
          disadvantages: [
            'Kan afhankelijkheid creëren',
            'Duur om vol te houden',
            'Kan externe motivatie bevorderen',
            'Effectiviteit neemt af bij overgebruik'
          ],
          sportExample: 'Een trainer die speeltijd, bonussen, of erkenning kan uitdelen aan spelers die goed presteren.',
          effectiveUse: [
            'Zorg dat beloningen waardevol zijn voor ontvanger',
            'Gebruik eerlijk en consistent',
            'Combineer met intrinsieke motivatie',
            'Varieer in type beloningen'
          ]
        },
        {
          name: '3. Dwangmacht',
          description: 'Macht gebaseerd op je vermogen om straffen uit te delen.',
          characteristics: [
            'Controle over ongewenste consequenties',
            'Kan fysiek, psychologisch of professioneel zijn',
            'Werkt door angst voor negatieve gevolgen',
            'Vereist bereidheid om straffen uit te voeren'
          ],
          advantages: [
            'Kan snel gedrag veranderen',
            'Effectief bij acute problemen',
            'Duidelijk in communicatie',
            'Kan grenzen afdwingen'
          ],
          disadvantages: [
            'Creëert negatieve sfeer',
            'Kan weerstand en wraak oproepen',
            'Werkt alleen bij aanwezigheid van leider',
            'Beschadigt relaties en vertrouwen'
          ],
          sportExample: 'Een trainer die spelers kan schorsen, uit het team kan zetten, of extra trainingen kan opleggen als straf.',
          effectiveUse: [
            'Gebruik alleen als laatste redmiddel',
            'Zorg voor eerlijke en consistente toepassing',
            'Communiceer duidelijk over consequenties',
            'Focus op gedrag, niet op persoon'
          ]
        },
        {
          name: '4. Expertmacht',
          description: 'Macht gebaseerd op je kennis, vaardigheden en expertise.',
          characteristics: [
            'Gebaseerd op competentie en kennis',
            'Erkend door anderen als expert',
            'Onafhankelijk van formele positie',
            'Groeit met ervaring en leren'
          ],
          advantages: [
            'Duurzaam en overdraagbaar',
            'Creëert respect en vertrouwen',
            'Effectief bij kenniswerkers',
            'Moeilijk aan te vechten'
          ],
          disadvantages: [
            'Duurt lang om op te bouwen',
            'Kan verouderen door nieuwe ontwikkelingen',
            'Beperkt tot expertisegebied',
            'Kan arrogantie veroorzaken'
          ],
          sportExample: 'Een trainer met bewezen tactische kennis en ervaring die spelers respecteren vanwege zijn expertise.',
          effectiveUse: [
            'Blijf leren en ontwikkelen',
            'Deel kennis met anderen',
            'Erken grenzen van je expertise',
            'Gebruik om anderen te ontwikkelen'
          ]
        },
        {
          name: '5. Referentiemacht (Persoonlijke Macht)',
          description: 'Macht gebaseerd op persoonlijke aantrekkingskracht en charisma.',
          characteristics: [
            'Gebaseerd op persoonlijkheid en karakter',
            'Mensen willen je graag volgen',
            'Onafhankelijk van positie of middelen',
            'Gebaseerd op vertrouwen en bewondering'
          ],
          advantages: [
            'Zeer duurzaam en krachtig',
            'Creëert loyaliteit en betrokkenheid',
            'Werkt in alle situaties',
            'Moeilijk te kopiëren'
          ],
          disadvantages: [
            'Moeilijk te ontwikkelen',
            'Kan misbruikt worden',
            'Afhankelijk van persoonlijke relaties',
            'Kan leiden tot afhankelijkheid'
          ],
          sportExample: 'Een charismatische aanvoerder die door zijn persoonlijkheid en integriteit natuurlijk leiderschap uitstraalt.',
          effectiveUse: [
            'Wees authentiek en integer',
            'Toon interesse in anderen',
            'Wees consistent in gedrag',
            'Gebruik macht ten dienste van anderen'
          ]
        }
      ],
      powerCombinations: {
        title: 'Effectieve Machtscombinaties',
        description: 'De meest effectieve leiders combineren verschillende machtsbronnen afhankelijk van de situatie:',
        combinations: [
          {
            situation: 'Crisis Management',
            powers: ['Legitieme Macht', 'Expertmacht'],
            rationale: 'Formele autoriteit gecombineerd met kennis om snel beslissingen te nemen'
          },
          {
            situation: 'Team Development',
            powers: ['Referentiemacht', 'Beloningmacht'],
            rationale: 'Persoonlijke invloed gecombineerd met positieve bekrachtiging'
          },
          {
            situation: 'Performance Management',
            powers: ['Expertmacht', 'Beloningmacht', 'Dwangmacht'],
            rationale: 'Kennis om te beoordelen, beloningen voor goede prestaties, consequenties voor slechte prestaties'
          }
        ]
      },
      developingPower: {
        title: 'Macht Ontwikkelen',
        description: 'Strategieën om verschillende machtsbronnen te ontwikkelen:',
        strategies: [
          {
            powerType: 'Expertmacht',
            development: [
              'Investeer in continue lering en ontwikkeling',
              'Zoek mentoren en coaches',
              'Deel je kennis met anderen',
              'Blijf op de hoogte van ontwikkelingen in je vakgebied'
            ]
          },
          {
            powerType: 'Referentiemacht',
            development: [
              'Ontwikkel emotionele intelligentie',
              'Wees betrouwbaar en integer',
              'Toon oprechte interesse in anderen',
              'Communiceer effectief en inspirerend'
            ]
          },
          {
            powerType: 'Legitieme Macht',
            development: [
              'Presteer goed in je huidige rol',
              'Ontwikkel leiderschapsvaardigheden',
              'Bouw een netwerk op',
              'Zoek uitdagende assignments'
            ]
          }
        ]
      },
      ethicalConsiderations: {
        title: 'Ethische Overwegingen',
        principles: [
          'Gebruik macht ten dienste van het team en de organisatie, niet voor persoonlijk gewin',
          'Wees transparant over je motieven en beslissingen',
          'Respecteer de waardigheid en rechten van anderen',
          'Gebruik de minst invasieve vorm van macht die effectief is',
          'Ontwikkel anderen in plaats van afhankelijkheid te creëren',
          'Neem verantwoordelijkheid voor de gevolgen van je machtgebruik'
        ]
      }
    }
  },
  {
    id: 'macht-in-leiderschap',
    title: 'Macht in Leiderschap: Keltner & Marcus/Van Dam',
    description: 'Hoe macht leiders beïnvloedt en de verschillende bronnen van macht volgens moderne theorieën.',
    content: {
      introduction: {
        title: 'Macht en Leiderschap',
        description: 'Macht is een fundamenteel aspect van leiderschap, maar het kan ook gevaarlijk zijn. Moderne onderzoek toont aan hoe macht ons gedrag en onze hersenen beïnvloedt.',
        keyInsight: 'Macht heeft de neiging om empathie te verminderen en kan leiden tot machtsmisbruik, maar er zijn strategieën om dit te voorkomen.'
      },
      keltnerTheory: {
        problem: {
          description: 'Volgens Dacher Keltner beschadigt macht letterlijk je brein door de empathie-circuits te onderdrukken.',
          effects: [
            'Verminderde empathie en sociale vaardigheden',
            'Verhoogde impulsiviteit en risicogedrag',
            'Minder aandacht voor anderen en hun behoeften',
            'Overschatting van eigen capaciteiten',
            'Verminderd vermogen om andermans perspectief te begrijpen'
          ]
        },
        preventionStrategies: [
          {
            name: '1. Perspectief Nemen',
            description: 'Bewust proberen de wereld te zien vanuit het perspectief van anderen',
            practice: 'Vraag regelmatig: "Hoe zou dit voelen voor mijn teamleden?" en luister actief naar hun ervaringen'
          },
          {
            name: '2. Nederigheid Cultiveren',
            description: 'Erkennen van je eigen beperkingen en fouten',
            practice: 'Geef fouten toe, vraag om feedback, en erken de bijdragen van anderen aan je succes'
          },
          {
            name: '3. Empathie Oefenen',
            description: 'Actief werken aan het begrijpen en voelen van andermans emoties',
            practice: 'Besteed tijd aan persoonlijke gesprekken met teamleden en toon oprechte interesse in hun welzijn'
          },
          {
            name: '4. Macht Delen',
            description: 'Bewust macht en verantwoordelijkheid delegeren aan anderen',
            practice: 'Geef anderen beslissingsbevoegdheid, creëer ontwikkelingsmogelijkheden, en vermijd micromanagement'
          }
        ]
      },
      marcusVanDam: {
        positionBased: [
          {
            name: 'Positiemacht',
            description: 'Macht die voortkomt uit je formele positie in de hiërarchie',
            advantages: [
              'Officieel erkend en geaccepteerd',
              'Duidelijke autoriteit en bevoegdheden',
              'Ondersteund door organisatiestructuur'
            ],
            disadvantages: [
              'Verdwijnt met de positie',
              'Kan weerstand oproepen',
              'Beperkt tot formele bevoegdheden'
            ],
            sportExample: 'Een hoofdtrainer heeft positiemacht over zijn staf en spelers vanwege zijn officiële rol'
          },
          {
            name: 'Beloningmacht',
            description: 'Macht gebaseerd op het kunnen uitdelen van beloningen',
            advantages: [
              'Kan motiverend werken',
              'Flexibel in toepassing',
              'Creëert positieve associaties'
            ],
            disadvantages: [
              'Kan afhankelijkheid creëren',
              'Duur om vol te houden',
              'Effectiviteit neemt af bij overgebruik'
            ],
            sportExample: 'Een trainer die speeltijd, bonussen of erkenning kan uitdelen aan presterende spelers'
          },
          {
            name: 'Dwangmacht',
            description: 'Macht gebaseerd op het kunnen uitdelen van straffen',
            advantages: [
              'Kan snel gedrag veranderen',
              'Effectief bij acute problemen',
              'Duidelijk in communicatie'
            ],
            disadvantages: [
              'Creëert negatieve sfeer',
              'Kan weerstand oproepen',
              'Beschadigt relaties'
            ],
            sportExample: 'Een trainer die spelers kan schorsen of uit het team kan zetten als straf'
          }
        ],
        personBased: [
          {
            name: 'Persoonlijke Macht',
            description: 'Macht gebaseerd op persoonlijke kwaliteiten en charisma',
            advantages: [
              'Zeer duurzaam en krachtig',
              'Onafhankelijk van positie',
              'Creëert loyaliteit en vertrouwen'
            ],
            disadvantages: [
              'Moeilijk te ontwikkelen',
              'Afhankelijk van persoonlijke relaties',
              'Kan leiden tot afhankelijkheid'
            ],
            sportExample: 'Een charismatische aanvoerder die door zijn persoonlijkheid natuurlijk leiderschap uitstraalt'
          },
          {
            name: 'Informatiemacht',
            description: 'Macht gebaseerd op toegang tot belangrijke informatie',
            advantages: [
              'Kan snel impact hebben',
              'Waardevol in kennisorganisaties',
              'Flexibel in toepassing'
            ],
            disadvantages: [
              'Kan verouderen',
              'Afhankelijk van informatietoegang',
              'Kan misbruikt worden'
            ],
            sportExample: 'Een analist die cruciale informatie heeft over tegenstanders en tactische zwaktes'
          },
          {
            name: 'Verbindingsmacht',
            description: 'Macht gebaseerd op je netwerk en connecties',
            advantages: [
              'Kan deuren openen',
              'Vergroot invloedssfeer',
              'Waardevol voor organisatie'
            ],
            disadvantages: [
              'Afhankelijk van relaties',
              'Kan verdwijnen bij conflicten',
              'Vereist onderhoud'
            ],
            sportExample: 'Een trainer met uitstekende contacten bij andere clubs, media en voetbalbond'
          }
        ]
      },
      integration: {
        title: 'Integratie van Theorieën',
        description: 'Keltner\'s waarschuwingen over macht combineren met Marcus & Van Dam\'s praktische benadering:',
        keyPoints: [
          'Persoonlijke Macht is het minst risicovol voor Keltner\'s "macht beschadigt je brein" effecten',
          'Positie-gebonden macht (Positiemacht, Dwangmacht) heeft het hoogste risico voor machtsmisbruik',
          'Informatiemacht en Verbindingsmacht vereisen continue ethische overwegingen',
          'Effectieve leiders combineren verschillende machtsbronnen maar blijven alert op de gevaren',
          'Keltner\'s preventiestrategieën zijn essentieel bij het gebruik van alle machtsbronnen'
        ]
      },
      practicalApplications: [
        {
          situation: 'Nieuwe leider in organisatie',
          approach: 'Begin met Persoonlijke Macht opbouwen, gebruik Positiemacht spaarzaam',
          powerSources: ['Persoonlijke Macht', 'Informatiemacht']
        },
        {
          situation: 'Crisis management',
          approach: 'Combineer Positiemacht met Expertmacht, maar behoud empathie',
          powerSources: ['Positiemacht', 'Informatiemacht', 'Persoonlijke Macht']
        },
        {
          situation: 'Team development',
          approach: 'Focus op Persoonlijke Macht en deel macht met teamleden',
          powerSources: ['Persoonlijke Macht', 'Beloningmacht']
        },
        {
          situation: 'Veranderingsproces',
          approach: 'Gebruik Verbindingsmacht en Informatiemacht, vermijd Dwangmacht',
          powerSources: ['Verbindingsmacht', 'Informatiemacht', 'Persoonlijke Macht']
        }
      ],
      warningSignals: [
        'Je luistert minder naar feedback van anderen',
        'Je neemt meer risico\'s zonder anderen te raadplegen',
        'Je voelt je superieur aan je teamleden',
        'Je hebt minder geduld met andermans meningen',
        'Je delegeert minder en wilt meer controleren',
        'Je omringt jezelf alleen met mensen die het met je eens zijn',
        'Je neemt beslissingen zonder input van anderen',
        'Je voelt je minder verbonden met je team'
      ],
      ethicalGuidelines: [
        'Gebruik macht ten dienste van het team en de organisatie',
        'Blijf regelmatig feedback vragen en luisteren naar anderen',
        'Deel macht en verantwoordelijkheid met teamleden',
        'Erken je fouten en beperkingen openlijk',
        'Investeer in persoonlijke ontwikkeling en zelfbewustzijn',
        'Creëer systemen van checks and balances',
        'Focus op het ontwikkelen van anderen in plaats van controle',
        'Gebruik de minst invasieve vorm van macht die effectief is'
      ]
    }
  },
  {
    id: 'narcisme',
    title: 'Kets de Vries: Disfunctionele Leiderschapspatronen',
    description: 'Manfred Kets de Vries\' analyse van wanneer leiders ontsporen en disfunctionele patronen ontwikkelen.',
    content: {
      introduction: {
        title: 'Wanneer Leiders Ontsporen',
        description: 'Manfred Kets de Vries, een van de meest geciteerde wetenschappers op het gebied van leiderschap, onderzoekt wat er gebeurt wanneer leiders disfunctionele patronen ontwikkelen. Zijn beroemde uitspraak: "Everybody is normal until you know them better" - pas wanneer je iemand echt leert kennen, zie je dat niet iedereen normaal is, zeker bij leiders.',
        keyInsight: 'Macht en positie kunnen leiden tot disfunctionele patronen die effectief leiderschap ondermijnen. Herkenning en preventie zijn cruciaal.'
      },
      dysfunctionalPatterns: [
        {
          name: 'De Narcistische Leider',
          description: 'Leiders met een overdreven gevoel van eigenwaarde en superioriteit die constant bevestiging zoeken.',
          characteristics: [
            'Overdreven gevoel van eigenwaarde en superioriteit',
            'Constant op zoek naar bewondering en bevestiging',
            'Gebrek aan empathie voor anderen',
            'Geloof dat ze uniek en speciaal zijn',
            'Fantasieën over onbeperkt succes en macht',
            'Uitbuiting van anderen voor eigen doelen',
            'Arrogant gedrag en houding'
          ],
          consequences: [
            'Slechte besluitvorming door gebrek aan input',
            'Hoog verloop van getalenteerde medewerkers',
            'Toxische organisatiecultuur',
            'Verminderde innovatie en creativiteit',
            'Ethische problemen en schandalen'
          ],
          sportExample: 'Een trainer die alle eer opeist voor overwinningen, spelers de schuld geeft van nederlagen, en weigert te luisteren naar feedback van zijn staf.',
          recognition: [
            'Neemt alle eer voor successen',
            'Geeft anderen de schuld bij mislukkingen',
            'Omringt zich met ja-knikkers',
            'Reageert slecht op kritiek',
            'Toont weinig interesse in ontwikkeling van anderen'
          ]
        },
        {
          name: 'De Paranoïde Leider',
          description: 'Leiders die excessief wantrouwend zijn en overal bedreigingen en complotten zien.',
          characteristics: [
            'Excessief wantrouwen jegens anderen',
            'Ziet overal complotten en bedreigingen',
            'Obsessieve controle en micromanagement',
            'Moeilijkheden met delegeren',
            'Interpreteert neutrale acties als vijandig',
            'Houdt rancune en vergeeft niet gemakkelijk',
            'Isoleert zich van potentiële "bedreigingen"'
          ],
          consequences: [
            'Inefficiënte processen door overcontrole',
            'Angstcultuur in de organisatie',
            'Verminderde creativiteit en initiatief',
            'Hoge stress en burn-out bij medewerkers',
            'Slechte samenwerking en teamwork'
          ],
          sportExample: 'Een trainer die denkt dat spelers tegen hem samenzweren, alle communicatie controleert, en niemand vertrouwt met belangrijke informatie.',
          recognition: [
            'Controleert alle communicatie',
            'Vertrouwt niemand volledig',
            'Ziet verraad waar het niet is',
            'Houdt informatie voor zich',
            'Reageert overdreven op kleine incidenten'
          ]
        },
        {
          name: 'De Theatrale Leider',
          description: 'Leiders die constant aandacht zoeken en dramatisch gedrag vertonen.',
          characteristics: [
            'Constant behoefte aan aandacht en bewondering',
            'Dramatisch en emotioneel gedrag',
            'Oppervlakkige en snel veranderende emoties',
            'Ziet zichzelf als centrum van aandacht',
            'Overdreven expressief en theatraal',
            'Gemakkelijk beïnvloedbaar door anderen',
            'Relaties worden als intiemer ervaren dan ze zijn'
          ],
          consequences: [
            'Instabiele en onvoorspelbare werkomgeving',
            'Gebrek aan focus op lange termijn doelen',
            'Verwarring over prioriteiten',
            'Emotionele uitputting van medewerkers',
            'Inconsistent beleid en besluitvorming'
          ],
          sportExample: 'Een trainer die elke persconferentie gebruikt als show, overdreven reageert op gebeurtenissen, en meer bezig is met zijn imago dan met het team.',
          recognition: [
            'Zoekt constant media-aandacht',
            'Overdreven emotionele reacties',
            'Inconsistent in boodschappen',
            'Focus op eigen imago',
            'Dramatiseert situaties'
          ]
        },
        {
          name: 'De Dwangmatige Leider',
          description: 'Leiders die geobsedeerd zijn door perfectie, details en controle.',
          characteristics: [
            'Obsessie met perfectie en details',
            'Rigide en inflexibele werkwijze',
            'Moeilijkheden met delegeren',
            'Overmatige focus op regels en procedures',
            'Perfectionisme dat productiviteit belemmert',
            'Moeilijkheden met het nemen van beslissingen',
            'Workaholic gedrag'
          ],
          consequences: [
            'Vertraagde besluitvorming',
            'Verminderde efficiëntie door overanalyse',
            'Frustratie bij medewerkers',
            'Gebrek aan innovatie en flexibiliteit',
            'Burn-out bij leider en team'
          ],
          sportExample: 'Een trainer die elke training tot in detail plant, niet kan delegeren aan assistenten, en spelers frustreert met eindeloze herhalingen van perfecte uitvoering.',
          recognition: [
            'Micromanagement van alle aspecten',
            'Kan geen fouten tolereren',
            'Eindeloze herzieningen van plannen',
            'Moeilijkheden met prioriteiten stellen',
            'Werkt excessief lange uren'
          ]
        },
        {
          name: 'De Depressieve Leider',
          description: 'Leiders die chronisch pessimistisch zijn en gebrek aan energie tonen.',
          characteristics: [
            'Chronisch pessimisme en negativiteit',
            'Gebrek aan energie en enthousiasme',
            'Moeilijkheden met motiveren van anderen',
            'Neiging tot zelfkritiek en twijfel',
            'Vermijding van risico\'s en uitdagingen',
            'Sociale isolatie en terugtrekking',
            'Gebrek aan visie en richting'
          ],
          consequences: [
            'Demotivatie van het hele team',
            'Gebrek aan innovatie en groei',
            'Negatieve organisatiecultuur',
            'Verminderde prestaties',
            'Hoog verloop van ambitieuze medewerkers'
          ],
          sportExample: 'Een trainer die altijd het ergste verwacht, geen vertrouwen uitstraalt in zijn team, en spelers demotiveert met zijn pessimistische houding.',
          recognition: [
            'Constant negatieve verwachtingen',
            'Gebrek aan enthousiasme',
            'Vermijdt uitdagende doelen',
            'Weinig sociale interactie',
            'Focus op problemen in plaats van oplossingen'
          ]
        }
      ],
      narcissisticCharacteristics: {
        title: 'Uitgebreide Kenmerken van Narcisme',
        description: 'Gedetailleerde kenmerken van narcistische leiders volgens Kets de Vries:',
        traits: [
          'Slechte verliezers én slechte winnaars - ligt altijd aan anderen of het is nooit goed genoeg',
          'Voelen zich voortdurend ondergewaardeerd en zoeken constant waardering',
          'Denken dat iedereen dom is en zij de slimste zijn',
          'Superieur gevoel - hun kijk op dingen is absoluut beter',
          'Vinden het heerlijk om anderen te vertellen wat ze moeten doen (dominant)',
          'Zijn entertainers - hoog entertainment gehalte in speeches en presentaties',
          'Hebben geen emoties en willen ze ook niet voelen - emotieloos',
          'Luisteren niet - willen heel graag aan het woord zijn',
          'Zijn ontzettend romantisch maar bedriegers in relaties',
          'Hebben allemaal scheidingen achter de rug',
          'Always to be in control - micromanagement is heel belangrijk',
          'Spelen spelletjes om macht te behouden - spelen mensen tegen elkaar uit',
          'Hebben een groot ego en vaak een gebouw met hun naam erop',
          'Hebben vaak een veel jongere partner (geboren nadat de leider al volwassen was)'
        ]
      },
      powerAndCorruption: {
        title: 'Macht en Corruptie',
        description: 'Kets de Vries over de relatie tussen macht en narcisme:',
        insights: [
          'Als je extreme macht hebt, ben je corrupt - absoluut',
          'Van hero tot zero - mensen die alle macht krijgen worden corrupt',
          'Met sterke macht ben je omringd door leugenaars en ja-knikkers',
          'Alle machtige leiders hebben een heel groot ego',
          'Lonely at the top - macht maakt eenzaam',
          'Je hebt geen vrijheid - moet voortdurend controleren en op je hoede zijn',
          'Moet voortdurend spelletjes spelen om macht te behouden'
        ]
      },
      preventionStrategies: {
        title: 'Preventie en Interventie',
        description: 'Kets de Vries\' methoden om disfunctioneel leiderschap te voorkomen en aan te pakken:',
        strategies: [
          {
            strategy: 'Zelfbewustzijn Ontwikkelen',
            description: 'Bewust worden van eigen patronen en gedragingen',
            implementation: [
              '360-graden feedback regelmatig inzetten',
              'Persoonlijke coaching en therapie',
              'Reflectie op eigen gedrag en impact',
              'Feedback van familie en vrienden serieus nemen'
            ]
          },
          {
            strategy: 'Creatief Worden',
            description: 'Weer gaan dromen en creatief denken over de toekomst',
            implementation: [
              'Tijd maken voor reflectie en visie ontwikkeling',
              'Nieuwe uitdagingen zoeken buiten comfort zone',
              'Inspiratie zoeken in andere sectoren',
              'Experimenteren met nieuwe ideeën'
            ]
          },
          {
            strategy: 'Legacy Vragen',
            description: 'Nadenken over hoe je herinnerd wilt worden',
            implementation: [
              'Regelmatig vragen: "Wat is mijn legacy?"',
              'Focus op lange termijn impact',
              'Investeren in ontwikkeling van anderen',
              'Ethische overwegingen centraal stellen'
            ]
          },
          {
            strategy: 'Relaties Opbouwen',
            description: 'Omgaan met eenzaamheid en echte verbindingen maken',
            implementation: [
              'Investeren in persoonlijke relaties',
              'Mentoren zoeken en zijn',
              'Tijd besteden aan familie en vrienden',
              'Authentieke gesprekken voeren'
            ]
          },
          {
            strategy: 'Controle Loslaten',
            description: 'Omgaan met angst en behoefte aan controle',
            implementation: [
              'Delegeren en vertrouwen geven',
              'Accepteren van onzekerheid',
              'Focus op wat je wel kunt beïnvloeden',
              'Mindfulness en stress management'
            ]
          }
        ]
      },
      warningSignals: [
        'Hoog verloop van getalenteerde medewerkers',
        'Gebrek aan opvolgers of potentiële leiders',
        'Verminderde innovatie en creativiteit',
        'Ethische problemen en schandalen',
        'Slechte externe reputatie',
        'Angstcultuur in de organisatie',
        'Gebrek aan diverse meningen in besluitvorming',
        'Persoonlijke relaties die lijden onder werk',
        'Fysieke en mentale gezondheidsproblemen',
        'Isolatie van feedback en kritiek'
      ],
      healthyLeadership: {
        title: 'Kenmerken van Gezond Leiderschap',
        description: 'Wat gezonde leiders onderscheidt van disfunctionele leiders:',
        characteristics: [
          'Zelfbewustzijn en emotionele intelligentie',
          'Empathie en interesse in anderen',
          'Bereidheid om fouten toe te geven en te leren',
          'Delegeren en anderen ontwikkelen',
          'Ethisch gedrag en integriteit',
          'Balans tussen werk en privé',
          'Openheid voor feedback en kritiek',
          'Focus op lange termijn succes van organisatie',
          'Authentiek en consistent gedrag',
          'Investeren in relaties en vertrouwen'
        ]
      },
      organizationalSafeguards: {
        title: 'Organisatorische Waarborgen',
        description: 'Systemen om disfunctioneel leiderschap te voorkomen:',
        safeguards: [
          'Implementeer checks and balances in governance',
          'Creëer diverse en onafhankelijke adviesraden',
          'Stel duidelijke ethische richtlijnen en gedragscodes op',
          'Ontwikkel robuuste feedback systemen',
          'Investeer in leiderschapsontwikkeling programma\'s',
          'Creëer psychologische veiligheid voor het uiten van zorgen',
          'Implementeer regelmatige leiderschap assessments',
          'Zorg voor externe toezicht en accountability'
        ]
      }
    }
  },
  {
    id: 'maccoby',
    title: 'Maccoby: Productief vs Destructief Narcisme',
    description: 'Michael Maccoby\'s onderscheid tussen productieve en destructieve vormen van narcisme in leiderschap.',
    content: {
      introduction: {
        title: 'Narcisme: Niet Altijd Destructief',
        description: 'Michael Maccoby toont aan dat narcisme niet altijd negatief is. Er bestaat een belangrijk onderscheid tussen productief en destructief narcisme in leiderschap.',
        keyInsight: 'Productieve narcisten kunnen uitstekende leiders zijn als ze hun narcistische trekken kanaliseren naar teamdoelen en empathie ontwikkelen.'
      },
      narcissismTypes: [
        {
          type: 'Productief Narcisme',
          description: 'Narcistische trekken die positief bijdragen aan leiderschap en organisatiesucces.',
          characteristics: [
            'Visionair denken en grote ambities',
            'Zelfvertrouwen en charisma',
            'Bereidheid om risico\'s te nemen',
            'Competitieve drive en wil om te winnen',
            'Vermogen om anderen te inspireren',
            'Focus op innovatie en verandering',
            'Sterke overtuigingskracht'
          ],
          benefits: [
            'Kunnen organisaties transformeren',
            'Inspireren anderen tot topprestaties',
            'Durven moeilijke beslissingen te nemen',
            'Creëren visie en richting',
            'Brengen energie en enthousiasme',
            'Zijn niet bang voor uitdagingen',
            'Kunnen teams motiveren tot excellentie'
          ],
          sportExample: 'Een trainer die een duidelijke visie heeft, het team inspireert tot grootse doelen, en de moed heeft om moeilijke tactische beslissingen te nemen die uiteindelijk tot succes leiden.'
        },
        {
          type: 'Destructief Narcisme',
          description: 'Narcistische trekken die leiden tot disfunctioneel leiderschap en organisatieschade.',
          characteristics: [
            'Gebrek aan empathie voor anderen',
            'Alleen luisteren naar mensen die het eens zijn',
            'Overschatting van eigen capaciteiten',
            'Uitbuiting van anderen voor eigen doelen',
            'Onvermogen om kritiek te accepteren',
            'Obsessie met eigen imago en status',
            'Gebrek aan interesse in ontwikkeling van anderen'
          ],
          consequences: [
            'Toxische organisatiecultuur',
            'Hoog verloop van talent',
            'Slechte besluitvorming door gebrek aan input',
            'Ethische problemen en schandalen',
            'Verminderde innovatie en creativiteit',
            'Angst en stress bij medewerkers',
            'Lange termijn schade aan organisatie'
          ],
          sportExample: 'Een trainer die alle eer opeist, spelers vernedert, geen kritiek accepteert van zijn staf, en uiteindelijk het team en de club beschadigt door zijn gedrag.'
        }
      ],
      productiveNarcissistTraits: [
        {
          trait: 'Visionair Leiderschap',
          description: 'Vermogen om inspirerende toekomstbeelden te creëren',
          application: 'Ontwikkelen van ambitieuze maar haalbare doelen voor het team',
          balance: 'Zorgen dat de visie gedeeld wordt en niet alleen persoonlijke glorie dient'
        },
        {
          trait: 'Competitieve Drive',
          description: 'Sterke wil om te winnen en excellentie na te streven',
          application: 'Kanaliseren van competitieve energie naar teamdoelen',
          balance: 'Winnen als team, niet als individu - anderen laten delen in succes'
        },
        {
          trait: 'Zelfvertrouwen',
          description: 'Geloof in eigen capaciteiten en beslissingen',
          application: 'Moedige beslissingen nemen in moeilijke situaties',
          balance: 'Zelfvertrouwen combineren met nederigheid en openheid voor feedback'
        },
        {
          trait: 'Charisma en Overtuigingskracht',
          description: 'Vermogen om anderen te inspireren en mee te krijgen',
          application: 'Motiveren van teamleden om hun beste prestaties te leveren',
          balance: 'Charisma gebruiken om anderen te ontwikkelen, niet om te manipuleren'
        }
      ],
      managingNarcissism: {
        title: 'Narcisme Managen en Kanaliseren',
        description: 'Strategieën voor narcistische leiders om productief te blijven:',
        strategies: [
          {
            strategy: 'Empathie Ontwikkelen',
            description: 'Bewust werken aan begrip voor anderen',
            implementation: [
              'Actief luisteren naar teamleden',
              'Interesse tonen in persoonlijke ontwikkeling van anderen',
              'Regelmatig vragen naar impact van eigen gedrag',
              'Tijd besteden aan persoonlijke gesprekken'
            ]
          },
          {
            strategy: 'Feedback Zoeken',
            description: 'Actief op zoek gaan naar eerlijke feedback',
            implementation: [
              '360-graden feedback regelmatig gebruiken',
              'Vertrouwde adviseurs aanstellen die eerlijk zijn',
              'Vragen naar specifieke verbeterpunten',
              'Feedback serieus nemen en erop handelen'
            ]
          },
          {
            strategy: 'Anderen Ontwikkelen',
            description: 'Focus leggen op groei en succes van teamleden',
            implementation: [
              'Mentoring en coaching van teamleden',
              'Kansen creëren voor anderen om te groeien',
              'Succes van anderen vieren en erkennen',
              'Opvolgers ontwikkelen en voorbereiden'
            ]
          },
          {
            strategy: 'Nederigheid Cultiveren',
            description: 'Bewust werken aan bescheidenheid en zelfkennis',
            implementation: [
              'Fouten toegeven en ervan leren',
              'Erkennen van bijdragen van anderen',
              'Vragen om hulp wanneer nodig',
              'Eigen beperkingen erkennen'
            ]
          }
        ]
      },
      warningSignals: [
        'Alleen nog luisteren naar mensen die het met je eens zijn',
        'Verminderde interesse in feedback van anderen',
        'Toename van impulsieve beslissingen',
        'Minder aandacht voor ontwikkeling van teamleden',
        'Verhoogde focus op eigen imago en status',
        'Verminderde empathie voor problemen van anderen',
        'Overschatting van eigen bijdrage aan successen',
        'Weerstand tegen kritiek of alternatieve meningen'
      ],
      developmentPath: [
        'Zelfbewustzijn ontwikkelen over narcistische trekken',
        'Empathie en sociale vaardigheden versterken',
        'Feedback systemen implementeren en gebruiken',
        'Focus verleggen van persoonlijk naar team succes',
        'Anderen ontwikkelen en empoweren',
        'Nederigheid en zelfkennis cultiveren',
        'Ethische richtlijnen en waarden centraal stellen',
        'Continue persoonlijke ontwikkeling nastreven'
      ]
    }
  },
  {
    id: 'ferguson',
    title: 'Alex Ferguson: Leading',
    description: 'De leiderschapsprincipes van Sir Alex Ferguson, een van de meest succesvolle trainers in de sportgeschiedenis.',
    content: {
      introduction: {
        title: 'Sir Alex Ferguson: Meesterschap in Leiderschap',
        description: 'Sir Alex Ferguson leidde Manchester United 26 jaar lang en won 38 trofeeën. Zijn leiderschapsfilosofie combineert discipline, individuele benadering, en lange termijn visie.',
        keyInsight: 'Succesvol leiderschap vereist een combinatie van onwrikbare principes en flexibele aanpassing aan individuele behoeften.'
      },
      leadershipElements: [
        {
          number: 1,
          name: 'Begin met de Basis',
          description: 'Zorg voor een solide fundament voordat je complexere zaken aanpakt.',
          keyPoints: [
            'Discipline en structuur zijn fundamenteel',
            'Duidelijke regels en verwachtingen stellen',
            'Consistentie in toepassing van regels',
            'Geen uitzonderingen, ook niet voor sterren'
          ],
          quote: 'Discipline is niet straffen, discipline is training mensen om hun verantwoordelijkheden te vervullen.',
          example: 'Ferguson stuurde David Beckham weg toen deze de teamdiscipline ondermijnde, ondanks zijn status als ster.'
        },
        {
          number: 2,
          name: 'Stel Hoge Standaarden',
          description: 'Verwacht excellentie en accepteer geen middelmatigheid.',
          keyPoints: [
            'Hoge verwachtingen voor alle aspecten',
            'Nooit tevreden zijn met "goed genoeg"',
            'Continue verbetering nastreven',
            'Voorbeeldgedrag tonen'
          ],
          quote: 'Ik wilde dat spelers wisten dat middelmatigheid niet geaccepteerd werd.',
          example: 'Ferguson\'s beroemde "hairdryer treatment" - intense kritiek om spelers wakker te schudden wanneer ze onder hun niveau presteerden.'
        },
        {
          number: 3,
          name: 'Individuele Benadering',
          description: 'Behandel elke persoon anders, afhankelijk van hun persoonlijkheid en behoeften.',
          keyPoints: [
            'Verschillende motivatietechnieken voor verschillende mensen',
            'Begrip van individuele persoonlijkheden',
            'Aanpassing van communicatiestijl',
            'Respect voor individuele verschillen'
          ],
          quote: 'Je kunt niet iedereen hetzelfde behandelen. Wat werkt voor de een, werkt niet voor de ander.',
          example: 'Roy Keane had directe confrontatie nodig, terwijl Ryan Giggs subtiele begeleiding prefereerde.'
        },
        {
          number: 4,
          name: 'Observatie en Informatie',
          description: 'Verzamel voortdurend informatie over je team en omgeving.',
          keyPoints: [
            'Constante observatie van spelers en situaties',
            'Informatie verzamelen uit verschillende bronnen',
            'Anticiperen op problemen voordat ze ontstaan',
            'Gebruik van data en analyse'
          ],
          quote: 'Informatie is macht. Hoe meer je weet, hoe betere beslissingen je kunt nemen.',
          example: 'Ferguson observeerde spelers tijdens training, reizen, en sociale situaties om hun mentale staat te begrijpen.'
        },
        {
          number: 5,
          name: 'Timing van Interventies',
          description: 'Weet wanneer je moet ingrijpen en wanneer je moet afwachten.',
          keyPoints: [
            'Strategisch gebruik van kritiek en lof',
            'Juiste moment kiezen voor moeilijke gesprekken',
            'Geduld hebben wanneer nodig',
            'Beslissend handelen in cruciale momenten'
          ],
          quote: 'Timing is alles in management. Te vroeg of te laat kan het verschil maken tussen succes en falen.',
          example: 'Ferguson wachtte vaak tot rust om kritiek te geven, zodat spelers tijd hadden om te reflecteren.'
        },
        {
          number: 6,
          name: 'Lange Termijn Visie',
          description: 'Denk verder dan het huidige seizoen en bouw voor de toekomst.',
          keyPoints: [
            'Investeren in jeugdontwikkeling',
            'Opbouwen van duurzame systemen',
            'Planning voor opvolging',
            'Balans tussen korte en lange termijn doelen'
          ],
          quote: 'Ik bouwde niet alleen een team, ik bouwde een organisatie die generaties zou overstijgen.',
          example: 'Ferguson\'s investering in de jeugdacademie leverde spelers op zoals Beckham, Scholes, en Giggs.'
        },
        {
          number: 7,
          name: 'Omgaan met Tegenslagen',
          description: 'Gebruik tegenslagen als leermomenten en motivatie.',
          keyPoints: [
            'Veerkracht en mentale sterkte ontwikkelen',
            'Leren van nederlagen en fouten',
            'Team motiveren na teleurstellingen',
            'Focus op volgende uitdaging'
          ],
          quote: 'Het gaat er niet om hoe vaak je valt, maar hoe vaak je opstaat.',
          example: 'Na de Champions League finale verlies in 2009, gebruikte Ferguson dit als motivatie voor het volgende seizoen.'
        },
        {
          number: 8,
          name: 'Delegeren en Vertrouwen',
          description: 'Geef verantwoordelijkheid aan anderen en vertrouw op hun capaciteiten.',
          keyPoints: [
            'Juiste mensen op juiste posities',
            'Vertrouwen geven en ruimte voor groei',
            'Niet alles zelf willen controleren',
            'Ontwikkelen van leiderschap in anderen'
          ],
          quote: 'Als je goede mensen hebt, geef ze dan de ruimte om te excelleren.',
          example: 'Ferguson gaf ervaren spelers zoals Keane en Scholes leiderschapsrollen binnen het team.'
        },
        {
          number: 9,
          name: 'Continue Vernieuwing',
          description: 'Blijf innoveren en aanpassen aan veranderende omstandigheden.',
          keyPoints: [
            'Openheid voor nieuwe ideeën en methoden',
            'Aanpassing aan veranderende omgeving',
            'Investeren in nieuwe technologieën',
            'Leren van anderen en andere sectoren'
          ],
          quote: 'Stilstand is achteruitgang. Je moet altijd blijven evolueren.',
          example: 'Ferguson paste zijn tactiek en trainingsmethoden aan gedurende zijn carrière, van 4-4-2 naar meer flexibele systemen.'
        }
      ],
      corePhilosophy: {
        title: 'Ferguson\'s Kernfilosofie',
        description: 'De fundamentele principes die Ferguson\'s succes onderbouwden:',
        principles: [
          'Discipline en respect zijn de basis van alles',
          'Individuele benadering binnen teamkader',
          'Lange termijn denken en geduld',
          'Mentale sterkte is belangrijker dan techniek',
          'Continue verbetering en leren',
          'Loyaliteit verdien je, je krijgt het niet',
          'Leiderschap betekent verantwoordelijkheid nemen',
          'Succes is een team prestatie, falen is individuele verantwoordelijkheid'
        ]
      },
      modernApplications: {
        title: 'Moderne Toepassingen',
        description: 'Hoe Ferguson\'s principes toegepast kunnen worden in hedendaagse organisaties:',
        applications: [
          {
            context: 'Bedrijfsleiderschap',
            approach: 'Combineer hoge standaarden met individuele ontwikkeling',
            result: 'Verhoogde prestaties en medewerkertevredenheid'
          },
          {
            context: 'Teammanagement',
            approach: 'Gebruik verschillende motivatietechnieken per teamlid',
            result: 'Betere teamdynamiek en individuele groei'
          },
          {
            context: 'Verandermanagement',
            approach: 'Lange termijn visie met korte termijn wins',
            result: 'Succesvolle transformatie met draagvlak'
          },
          {
            context: 'Crisismanagement',
            approach: 'Mentale sterkte en focus op oplossingen',
            result: 'Sneller herstel en sterker team'
          }
        ]
      },
      keyLessons: [
        'Discipline en flexibiliteit kunnen samengaan',
        'Individuele benadering verhoogt teameffectiviteit',
        'Lange termijn visie vereist korte termijn offers',
        'Mentale sterkte is vaak belangrijker dan technische vaardigheden',
        'Leiderschap betekent verantwoordelijkheid nemen voor resultaten',
        'Continue observatie en aanpassing zijn essentieel',
        'Timing van interventies bepaalt hun effectiviteit',
        'Opvolging en duurzaamheid moeten vanaf het begin gepland worden'
      ]
    }
  },
  {
    id: 'wiltschut',
    title: 'Van Vugt & Wiltschut: Gezag vs Dominantie',
    description: 'Het verschil tussen gezag (gewenst) en dominantie (vermijden) in leiderschap volgens Van Vugt en Wiltschut.',
    content: {
      mainConcept: 'Effectief leiderschap is gebaseerd op gezag (respect en vertrouwen) in plaats van dominantie (macht en controle). Gezag leidt tot betere prestaties en welzijn van het team.',
      gezag: [
        {
          characteristic: 'Gebaseerd op Respect',
          description: 'Mensen volgen je omdat ze je respecteren en vertrouwen',
          sportExample: 'Een aanvoerder die door zijn integriteit en competentie natuurlijk wordt gevolgd door teamgenoten'
        },
        {
          characteristic: 'Competentie en Expertise',
          description: 'Leiderschap komt voort uit kennis en vaardigheden',
          sportExample: 'Een trainer wiens tactische inzichten en ervaring door spelers worden gewaardeerd'
        },
        {
          characteristic: 'Dienend Leiderschap',
          description: 'Focus ligt op het helpen en ontwikkelen van anderen',
          sportExample: 'Een coach die prioriteit geeft aan de ontwikkeling van individuele spelers'
        },
        {
          characteristic: 'Inspiratie en Motivatie',
          description: 'Motiveert anderen door visie en voorbeeld',
          sportExample: 'Een teamleider die anderen inspireert door zijn toewijding en positieve houding'
        },
        {
          characteristic: 'Empathie en Luisteren',
          description: 'Toont begrip en interesse voor anderen',
          sportExample: 'Een trainer die tijd neemt om naar de zorgen van spelers te luisteren'
        }
      ],
      dominantie: [
        {
          characteristic: 'Gebaseerd op Macht',
          description: 'Mensen volgen uit angst of omdat ze moeten',
          sportExample: 'Een trainer die spelers intimideert en dreigt met consequenties'
        },
        {
          characteristic: 'Controle en Dwang',
          description: 'Gebruikt positie om anderen te controleren',
          sportExample: 'Een aanvoerder die zijn status gebruikt om anderen te onderdrukken'
        },
        {
          characteristic: 'Eigenbelang',
          description: 'Focus ligt op eigen succes en status',
          sportExample: 'Een coach die alleen geïnteresseerd is in zijn eigen reputatie'
        },
        {
          characteristic: 'Intimidatie en Agressie',
          description: 'Gebruikt agressief gedrag om anderen te beïnvloeden',
          sportExample: 'Een trainer die schreeuwt en spelers vernedert voor de groep'
        },
        {
          characteristic: 'Gebrek aan Empathie',
          description: 'Weinig interesse in gevoelens en behoeften van anderen',
          sportExample: 'Een teamleider die geen rekening houdt met persoonlijke omstandigheden van spelers'
        }
      ],
      consequences: {
        gezag: 'Leidt tot verhoogde motivatie, betere prestaties, meer creativiteit, sterke teamcohesie, en duurzaam succes. Teamleden voelen zich gewaardeerd en ontwikkelen zich optimaal.',
        dominantie: 'Resulteert in angst, stress, verminderde creativiteit, hoog verloop, en korte termijn resultaten ten koste van lange termijn succes. Teamleden voelen zich onderdrukt en presteren onder hun niveau.'
      },
      developingAuthority: [
        'Ontwikkel je competenties en expertise continu',
        'Toon oprechte interesse in de ontwikkeling van anderen',
        'Wees consistent en betrouwbaar in je gedrag',
        'Luister actief en toon empathie',
        'Geef het goede voorbeeld in houding en gedrag',
        'Erken en waardeer de bijdragen van anderen',
        'Wees transparant in je besluitvorming',
        'Investeer in persoonlijke relaties met teamleden',
        'Focus op het dienen van het team in plaats van jezelf',
        'Blijf nederig en open voor feedback'
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

  // Load progress from localStorage
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

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('readTheories', JSON.stringify(Array.from(readTheories)))
    localStorage.setItem('points', points.toString())
    localStorage.setItem('quizCompleted', JSON.stringify(quizCompleted))
    if (quizScore) {
      localStorage.setItem('quizScore', JSON.stringify(quizScore))
    }
  }, [readTheories, points, quizCompleted, quizScore])

  const handleTheoryClick = (theoryId: string) => {
    if (selectedTheory === theoryId) {
      setSelectedTheory(null)
    } else {
      setSelectedTheory(theoryId)
    }
  }

  const handleTheoryRead = (theoryId: string) => {
    if (!readTheories.has(theoryId)) {
      setReadTheories(prev => new Set([...prev, theoryId]))
      setPoints(prev => prev + 50)
    }
  }

  const handleQuizComplete = (score: number, totalQuestions: number) => {
    if (!quizCompleted) {
      setQuizCompleted(true)
      setQuizScore({score, total: totalQuestions})
      const quizPoints = score * 10 // 10 points per correct answer
      setPoints(prev => prev + quizPoints)
    }
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

  const progressPercentage = Math.round(((readTheories.size / theories.length) + (quizCompleted ? 1 : 0)) / (theories.length + 1) * 100)

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🏆 Leiderschap in de Sport
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          HBO Sportkunde - Leiderschapstheorieën
        </p>
        
        {/* Progress Dashboard */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{points}</div>
              <div className="text-sm text-gray-600">Punten</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{readTheories.size}/{theories.length}</div>
              <div className="text-sm text-gray-600">Theorieën Gelezen</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">{quizCompleted ? '✅' : '⏳'}</div>
              <div className="text-sm text-gray-600">Quiz Status</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">{progressPercentage}%</div>
              <div className="text-sm text-gray-600">Voortgang</div>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {quizScore && (
            <div className="mt-4 p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
              <p className="text-green-800 font-medium">
                🎉 Quiz voltooid: {quizScore.score}/{quizScore.total} correct ({Math.round((quizScore.score / quizScore.total) * 100)}%)
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={() => {setShowQuiz(false); setSelectedTheory(null)}}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            !showQuiz ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          📚 Theorieën
        </button>
        <button
          onClick={() => {setShowQuiz(true); setSelectedTheory(null)}}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            showQuiz ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          🎯 Quiz
        </button>
        <button
          onClick={resetProgress}
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
        >
          🔄 Reset Voortgang
        </button>
      </div>

      {/* Content */}
      {showQuiz ? (
        <QuizComponent onComplete={handleQuizComplete} />
      ) : (
        <div className="space-y-6">
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
      <div className="text-center mt-12 pt-8 border-t border-gray-200">
        <p className="text-gray-500 text-sm">
          💜 Gemaakt door Tom Naberink - HBO Sportkunde Leiderschapsmodule
        </p>
      </div>
    </div>
  )
}