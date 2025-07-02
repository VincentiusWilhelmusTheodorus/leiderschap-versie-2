'use client'

import { useState } from 'react'
import TheoryCard from './TheoryCard'
import QuizComponent from './QuizComponent'

const theories = [
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
      sportExample: 'Een voetbaltrainer vervult alle rollen: als boegbeeld bij persconferenties, als leider van het team, als waarnemer van tegenstanders, als verspreider van tactische informatie, en als onderhandelaar bij transfers.'
    }
  },
  {
    id: 'hersey-blanchard',
    title: 'Situationeel Leidinggeven (SLII)',
    description: 'Hersey & Blanchard\'s model dat leiderschapsstijl aanpast aan het ontwikkelingsniveau van medewerkers.',
    content: {
      introduction: {
        title: 'Wat is Situationeel Leidinggeven?',
        description: 'Situationeel Leidinggeven (SLII) is gebaseerd op het principe dat er geen beste leiderschapsstijl bestaat. De effectiviteit van een leiderschapsstijl hangt af van de situatie en specifiek van het ontwikkelingsniveau van de persoon voor een bepaalde taak.',
        keyInsight: 'Het ontwikkelingsniveau is taakspecifiek - iemand kan D4 zijn voor één taak en D2 voor een andere taak.'
      },
      coreModel: {
        title: 'Het SLII Model',
        description: 'Het model combineert twee gedragsdimensies van leiders om de juiste leiderschapsstijl te bepalen:',
        dimensions: [
          {
            name: 'Sturend Gedrag',
            description: 'Eenrichtingscommunicatie waarin de leider duidelijke instructies geeft',
            characteristics: [
              'Wat, wanneer, waar en hoe taken uitgevoerd moeten worden',
              'Duidelijke verwachtingen en deadlines',
              'Specifieke instructies en procedures',
              'Nauw toezicht en controle'
            ]
          },
          {
            name: 'Ondersteunend Gedrag', 
            description: 'Tweerichtingscommunicatie waarin de leider luistert en ondersteunt',
            characteristics: [
              'Actief luisteren naar ideeën en zorgen',
              'Aanmoediging en emotionele steun',
              'Faciliteren van probleemoplossing',
              'Erkenning en waardering geven'
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
            'Optimistisch over mogelijkheden',
            'Bereid om te leren'
          ],
          needs: 'Veel sturing en instructies, weinig ondersteuning (ze zijn al gemotiveerd)',
          sportExample: 'Een nieuwe speler die net bij het team komt - enthousiast maar heeft nog veel te leren over de tactiek en teamcultuur.'
        },
        {
          level: 'D2 - Ontgoochelde Leerling',
          competence: 'Laag tot Gemiddeld',
          commitment: 'Laag',
          characteristics: [
            'Heeft wat ervaring opgedaan',
            'Realiseert zich dat het moeilijker is dan gedacht',
            'Gefrustreerd door tegenslagen',
            'Twijfelt aan eigen kunnen'
          ],
          needs: 'Zowel veel sturing als veel ondersteuning om door de moeilijke periode te komen',
          sportExample: 'Een speler die na een paar maanden merkt dat het niveau hoger ligt dan verwacht en moeite heeft met het tempo van het profvoetbal.'
        },
        {
          level: 'D3 - Voorzichtige Uitvoerder',
          competence: 'Gemiddeld tot Hoog',
          commitment: 'Variabel',
          characteristics: [
            'Heeft de vaardigheden ontwikkeld',
            'Kan de taak uitvoeren',
            'Twijfelt aan eigen kunnen of motivatie',
            'Heeft vertrouwen en ondersteuning nodig'
          ],
          needs: 'Weinig sturing maar veel ondersteuning en vertrouwen',
          sportExample: 'Een ervaren speler die technisch goed is maar twijfelt aan zichzelf na een mindere periode of blessure.'
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
          description: 'De leider geeft duidelijke instructies en houdt nauw toezicht.',
          approach: [
            'Specifieke instructies geven',
            'Duidelijke verwachtingen stellen',
            'Regelmatig controleren',
            'Stap-voor-stap begeleiding'
          ],
          sportExample: 'Een trainer die een nieuwe speler exact uitlegt hoe een bepaalde tactiek werkt en deze intensief begeleidt tijdens trainingen.'
        },
        {
          style: 'S2 - Coachend',
          behavior: 'Hoog sturend, hoog ondersteunend',
          when: 'Voor D2 - Ontgoochelde Leerling',
          description: 'De leider geeft nog steeds veel sturing maar biedt ook veel ondersteuning.',
          approach: [
            'Uitleggen waarom dingen gedaan moeten worden',
            'Luisteren naar zorgen en frustraties',
            'Aanmoedigen en motiveren',
            'Samen problemen oplossen'
          ],
          sportExample: 'Een trainer die een speler in een dipje niet alleen technische tips geeft, maar ook emotionele steun biedt en uitlegt waarom bepaalde oefeningen belangrijk zijn.'
        },
        {
          style: 'S3 - Ondersteunend',
          behavior: 'Laag sturend, hoog ondersteunend',
          when: 'Voor D3 - Voorzichtige Uitvoerder',
          description: 'De leider faciliteert en ondersteunt, maar laat de uitvoering over aan de medewerker.',
          approach: [
            'Luisteren en faciliteren',
            'Vertrouwen uitspreken',
            'Samen beslissingen nemen',
            'Aanmoedigen en waarderen'
          ],
          sportExample: 'Een trainer die een ervaren speler vertrouwen geeft door hem keuzes te laten maken op het veld en hem te steunen bij moeilijke momenten.'
        },
        {
          style: 'S4 - Delegerend',
          behavior: 'Laag sturend, laag ondersteunend',
          when: 'Voor D4 - Zelfstandige Uitvoerder',
          description: 'De leider delegeert verantwoordelijkheid en autoriteit.',
          approach: [
            'Verantwoordelijkheid overdragen',
            'Ruimte geven voor eigen beslissingen',
            'Beschikbaar zijn wanneer nodig',
            'Resultaten monitoren'
          ],
          sportExample: 'Een trainer die zijn aanvoerder de vrijheid geeft om tijdens de wedstrijd tactische aanpassingen te maken en het team aan te sturen.'
        }
      ],
      keyPrinciples: [
        'Er is geen beste leiderschapsstijl - het hangt af van de situatie',
        'Het ontwikkelingsniveau is taakspecifiek',
        'Leiders moeten flexibel zijn en kunnen schakelen tussen stijlen',
        'Diagnose van het ontwikkelingsniveau is cruciaal',
        'Communicatie over verwachtingen is essentieel'
      ],
      diagnosticProcess: [
        'Bepaal de specifieke taak of verantwoordelijkheid',
        'Beoordeel het competentieniveau van de persoon voor deze taak',
        'Beoordeel het betrokkenheidsniveau van de persoon',
        'Bepaal het ontwikkelingsniveau (D1, D2, D3, of D4)',
        'Kies de bijpassende leiderschapsstijl (S1, S2, S3, of S4)',
        'Pas de stijl toe en monitor de resultaten',
        'Pas aan indien nodig'
      ],
      commonMistakes: [
        'Eén stijl gebruiken voor alle situaties en mensen',
        'Aannemen dat ervaren mensen altijd D4 zijn',
        'Te snel overgaan naar delegeren',
        'Niet communiceren over verwachtingen',
        'Ontwikkelingsniveau niet regelmatig herbeoordelingen'
      ],
      benefits: [
        'Betere ontwikkeling van teamleden',
        'Verhoogde effectiviteit van leiderschap',
        'Meer gemotiveerde medewerkers',
        'Duidelijkere communicatie',
        'Flexibeler leiderschapsgedrag'
      ]
    }
  },
  {
    id: 'machtsbronnen',
    title: 'French & Raven\'s Machtsbronnen',
    description: 'De vijf bronnen van macht die leiders kunnen gebruiken om invloed uit te oefenen.',
    content: {
      introduction: {
        title: 'Wat zijn Machtsbronnen?',
        description: 'French en Raven identificeerden vijf verschillende bronnen waaruit leiders macht kunnen putten. Elke bron heeft zijn eigen voordelen, nadelen en toepassingsgebieden.',
        keyInsight: 'Effectieve leiders combineren verschillende machtsbronnen afhankelijk van de situatie en de mensen waarmee ze werken.'
      },
      powerSources: [
        {
          name: '1. Positiemacht (Legitimate Power)',
          description: 'Macht die voortkomt uit de formele positie of functie binnen de organisatie.',
          characteristics: [
            'Gebaseerd op hiërarchie en organisatiestructuur',
            'Formeel erkend door de organisatie',
            'Komt met specifieke rechten en verantwoordelijkheden',
            'Verdwijnt wanneer je de positie verlaat'
          ],
          advantages: [
            'Duidelijk en officieel erkend',
            'Geeft autoriteit om beslissingen te nemen',
            'Ondersteund door organisatiebeleid'
          ],
          disadvantages: [
            'Beperkt tot de formele rol',
            'Kan weerstand oproepen',
            'Verdwijnt bij functiewisseling'
          ],
          sportExample: 'Een hoofdtrainer heeft positiemacht omdat hij officieel is aangesteld door de club. Spelers moeten zijn instructies opvolgen omdat hij de baas is.',
          effectiveUse: [
            'Gebruik voor formele beslissingen',
            'Combineer met andere machtsbronnen',
            'Wees transparant over verwachtingen'
          ]
        },
        {
          name: '2. Beloningmacht (Reward Power)',
          description: 'Macht gebaseerd op het vermogen om beloningen uit te delen.',
          characteristics: [
            'Controle over gewenste middelen',
            'Kan materiële en immateriële beloningen geven',
            'Afhankelijk van wat anderen waarderen',
            'Vereist middelen om uit te delen'
          ],
          advantages: [
            'Kan motiverend werken',
            'Flexibel in toepassing',
            'Positieve benadering'
          ],
          disadvantages: [
            'Kan afhankelijkheid creëren',
            'Duur om vol te houden',
            'Werkt niet voor iedereen hetzelfde'
          ],
          sportExample: 'Een trainer die speeltijd, bonussen, of aanvoerdersband kan uitdelen aan spelers die goed presteren.',
          effectiveUse: [
            'Koppel beloningen aan prestaties',
            'Varieer in soorten beloningen',
            'Zorg voor eerlijkheid en transparantie'
          ]
        },
        {
          name: '3. Dwangmacht (Coercive Power)',
          description: 'Macht gebaseerd op het vermogen om straffen uit te delen.',
          characteristics: [
            'Controle over ongewenste consequenties',
            'Kan materiële en immateriële straffen opleggen',
            'Gebaseerd op angst voor negatieve gevolgen',
            'Vereist bereidheid om straffen uit te voeren'
          ],
          advantages: [
            'Kan snel gedrag veranderen',
            'Effectief bij acute problemen',
            'Duidelijke consequenties'
          ],
          disadvantages: [
            'Creëert negatieve sfeer',
            'Kan weerstand en wraak oproepen',
            'Werkt alleen bij aanwezigheid van de leider'
          ],
          sportExample: 'Een trainer die spelers op de bank zet, boetes uitdeelt, of uit het team zet als straf voor slecht gedrag.',
          effectiveUse: [
            'Gebruik spaarzaam en als laatste redmiddel',
            'Zorg voor duidelijke waarschuwingen',
            'Combineer met uitleg en ondersteuning'
          ]
        },
        {
          name: '4. Expertmacht (Expert Power)',
          description: 'Macht gebaseerd op kennis, vaardigheden en expertise.',
          characteristics: [
            'Gebaseerd op competentie en kennis',
            'Erkend door anderen als expert',
            'Onafhankelijk van formele positie',
            'Moet voortdurend onderhouden worden'
          ],
          advantages: [
            'Duurzaam en overdraagbaar',
            'Creëert respect en vertrouwen',
            'Gebaseerd op waarde-toevoeging'
          ],
          disadvantages: [
            'Duurt lang om op te bouwen',
            'Kan verouderen',
            'Beperkt tot expertisegebied'
          ],
          sportExample: 'Een trainer die respect krijgt vanwege zijn tactische kennis, ervaring als speler, of bewezen track record.',
          effectiveUse: [
            'Blijf je kennis up-to-date houden',
            'Deel je expertise met anderen',
            'Erken grenzen van je expertise'
          ]
        },
        {
          name: '5. Referentiemacht (Referent Power)',
          description: 'Macht gebaseerd op persoonlijke aantrekkingskracht en charisma.',
          characteristics: [
            'Gebaseerd op persoonlijke kwaliteiten',
            'Mensen willen graag geassocieerd worden met de leider',
            'Ontstaat door bewondering en respect',
            'Zeer persoonlijk en moeilijk na te bootsen'
          ],
          advantages: [
            'Zeer krachtig en motiverend',
            'Creëert loyaliteit en toewijding',
            'Werkt ook zonder toezicht'
          ],
          disadvantages: [
            'Moeilijk te ontwikkelen',
            'Kan misbruikt worden',
            'Afhankelijk van persoonlijke relaties'
          ],
          sportExample: 'Een charismatische aanvoerder waar spelers voor willen spelen en die ze willen volgen, ongeacht zijn formele positie.',
          effectiveUse: [
            'Wees authentiek en integer',
            'Toon interesse in anderen',
            'Leef je waarden na'
          ]
        }
      ],
      powerCombinations: {
        title: 'Effectieve Combinaties van Machtsbronnen',
        description: 'Succesvolle leiders gebruiken meestal meerdere machtsbronnen tegelijk, afhankelijk van de situatie:',
        combinations: [
          {
            situation: 'Crisis Management',
            powers: ['Positiemacht', 'Expertmacht'],
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
        title: 'Machtsbronnen Ontwikkelen',
        description: 'Verschillende machtsbronnen vereisen verschillende ontwikkelingsstrategieën:',
        strategies: [
          {
            powerType: 'Expertmacht',
            development: [
              'Investeer in continue leer- en ontwikkeling',
              'Zoek mentorship en coaching',
              'Deel je kennis met anderen',
              'Blijf op de hoogte van trends en ontwikkelingen'
            ]
          },
          {
            powerType: 'Referentiemacht',
            development: [
              'Ontwikkel emotionele intelligentie',
              'Wees consistent in je gedrag en waarden',
              'Toon oprechte interesse in anderen',
              'Bouw vertrouwensrelaties op'
            ]
          },
          {
            powerType: 'Positiemacht',
            development: [
              'Presteer goed in je huidige rol',
              'Toon leiderschapspotentieel',
              'Bouw een netwerk binnen de organisatie',
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
          'Respecteer de waardigheid en autonomie van anderen',
          'Gebruik de minst invasieve vorm van macht die effectief is',
          'Neem verantwoordelijkheid voor de gevolgen van je machtgebruik'
        ]
      }
    }
  },
  {
    id: 'macht-in-leiderschap',
    title: 'Macht in Leiderschap',
    description: 'Keltner\'s inzichten over hoe macht het brein beïnvloedt en Marcus & Van Dam\'s 6 machtsbronnen.',
    content: {
      introduction: {
        title: 'Macht en de Gevaren Ervan',
        description: 'Macht is essentieel voor effectief leiderschap, maar het heeft ook donkere kanten. Onderzoek toont aan dat macht letterlijk je brein kan veranderen en empathie kan verminderen.',
        keyInsight: 'Macht beschadigt je brein door empathie-circuits te onderdrukken, maar dit kan voorkomen worden door bewuste strategieën.'
      },
      keltnerTheory: {
        problem: {
          description: 'Volgens Dacher Keltner beschadigt macht letterlijk je brein door de empathie-circuits te onderdrukken.',
          effects: [
            'Verminderde empathie en sociale vaardigheden',
            'Verhoogde impulsiviteit en risicogedrag',
            'Minder aandacht voor anderen',
            'Overmatig zelfvertrouwen',
            'Verminderd vermogen om anderen te begrijpen'
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
            practice: 'Geef toe wanneer je het niet weet, vraag om feedback en leer van je fouten'
          },
          {
            name: '3. Empathie Oefenen',
            description: 'Actief werken aan het begrijpen en voelen van andermans emoties',
            practice: 'Besteed tijd aan persoonlijke gesprekken en toon oprechte interesse in het welzijn van je team'
          },
          {
            name: '4. Macht Delen',
            description: 'Bewust macht en verantwoordelijkheid delegeren aan anderen',
            practice: 'Geef anderen beslissingsbevoegdheid en erken hun bijdragen publiekelijk'
          }
        ]
      },
      marcusVanDam: {
        positionBased: [
          {
            name: 'Positiemacht',
            description: 'Macht die voortkomt uit je formele positie in de hiërarchie',
            advantages: [
              'Officieel erkend',
              'Duidelijke autoriteit',
              'Ondersteund door organisatie'
            ],
            disadvantages: [
              'Verdwijnt bij functiewisseling',
              'Kan weerstand oproepen',
              'Beperkt tot formele rol'
            ],
            sportExample: 'Een hoofdtrainer heeft positiemacht omdat hij officieel door de club is aangesteld'
          },
          {
            name: 'Beloningmacht',
            description: 'Macht gebaseerd op het kunnen uitdelen van beloningen',
            advantages: [
              'Motiverend effect',
              'Positieve benadering',
              'Flexibel toepasbaar'
            ],
            disadvantages: [
              'Kan afhankelijkheid creëren',
              'Duur om vol te houden',
              'Externe motivatie'
            ],
            sportExample: 'Een trainer die speeltijd, bonussen of aanvoerdersband kan uitdelen'
          },
          {
            name: 'Dwangmacht',
            description: 'Macht gebaseerd op het kunnen uitdelen van straffen',
            advantages: [
              'Snel effect',
              'Duidelijke consequenties',
              'Effectief bij acute problemen'
            ],
            disadvantages: [
              'Negatieve sfeer',
              'Kan weerstand oproepen',
              'Werkt alleen bij toezicht'
            ],
            sportExample: 'Een trainer die spelers kan schorsen, beboeten of uit het team zetten'
          }
        ],
        personBased: [
          {
            name: 'Persoonlijke Macht',
            description: 'Macht gebaseerd op persoonlijke kwaliteiten en competenties',
            advantages: [
              'Duurzaam en overdraagbaar',
              'Creëert respect',
              'Onafhankelijk van positie'
            ],
            disadvantages: [
              'Duurt lang om op te bouwen',
              'Vereist constante ontwikkeling',
              'Persoonlijk afhankelijk'
            ],
            sportExample: 'Een trainer die respect krijgt door zijn expertise, integriteit en leiderschapskwaliteiten'
          },
          {
            name: 'Informatiemacht',
            description: 'Macht gebaseerd op toegang tot belangrijke informatie',
            advantages: [
              'Kan snel impact hebben',
              'Waardevol voor besluitvorming',
              'Flexibel toepasbaar'
            ],
            disadvantages: [
              'Kan verouderen',
              'Afhankelijk van toegang',
              'Kan misbruikt worden'
            ],
            sportExample: 'Een trainer die exclusieve informatie heeft over tegenstanders, blessures of transferplannen'
          },
          {
            name: 'Verbindingsmacht',
            description: 'Macht gebaseerd op je netwerk en connecties',
            advantages: [
              'Vergroot invloedssfeer',
              'Toegang tot middelen',
              'Kan deuren openen'
            ],
            disadvantages: [
              'Afhankelijk van relaties',
              'Kan fragiel zijn',
              'Vereist onderhoud'
            ],
            sportExample: 'Een trainer met goede contacten bij andere clubs, media of voetbalbond'
          }
        ]
      },
      integration: {
        title: 'Integratie: Keltner en Marcus & Van Dam',
        description: 'Door Keltner\'s inzichten te combineren met Marcus & Van Dam\'s machtsbronnen krijgen we een compleet beeld:',
        keyPoints: [
          'Positie-gebonden macht (Positie, Beloning, Dwang) heeft het hoogste risico voor Keltner\'s "macht beschadigt je brein" effecten',
          'Persoon-gebonden macht (Persoonlijk, Informatie, Verbinding) is minder risicovol maar vereist meer ontwikkeling',
          'De vier preventiestrategieën van Keltner zijn vooral belangrijk bij het gebruik van positie-gebonden macht',
          'Effectieve leiders combineren verschillende machtsbronnen en blijven bewust van de gevaren van macht'
        ]
      },
      practicalApplications: [
        {
          situation: 'Nieuwe leider in functie',
          approach: 'Begin met persoonlijke macht opbouwen voordat je positiemacht gebruikt',
          powerSources: ['Persoonlijke Macht', 'Informatiemacht']
        },
        {
          situation: 'Crisis management',
          approach: 'Gebruik positiemacht maar compenseer met extra empathie en perspectief nemen',
          powerSources: ['Positiemacht', 'Expertmacht', 'Perspectief nemen']
        },
        {
          situation: 'Team ontwikkeling',
          approach: 'Focus op persoonlijke macht en verbindingen, vermijd dwang',
          powerSources: ['Persoonlijke Macht', 'Verbindingsmacht', 'Macht delen']
        }
      ],
      warningSignals: [
        'Je luistert minder naar feedback van anderen',
        'Je neemt meer risico\'s zonder anderen te raadplegen',
        'Je voelt je superieur aan je teamleden',
        'Je hebt minder geduld met "langzame" mensen',
        'Je omringt jezelf alleen met mensen die het met je eens zijn',
        'Je negeert de emotionele impact van je beslissingen op anderen'
      ],
      ethicalGuidelines: [
        'Gebruik macht ten dienste van het team, niet voor persoonlijk gewin',
        'Blijf regelmatig je motieven en gedrag reflecteren',
        'Zoek actief feedback van mensen die je eerlijk durven te zijn',
        'Investeer in relaties en empathie, niet alleen in macht',
        'Deel macht en verantwoordelijkheid met anderen',
        'Erken je fouten en beperkingen openlijk'
      ]
    }
  },
  {
    id: 'narcisme',
    title: 'Disfunctioneel Leiderschap (Kets de Vries)',
    description: 'Manfred Kets de Vries\' analyse van disfunctionele leiderschapspatronen en hoe leiders kunnen ontsporen.',
    content: {
      introduction: {
        title: 'Wanneer Leiders Ontsporen',
        description: '"Everybody is normal until you know them better" - Manfred Kets de Vries. Deze theorie onderzoekt disfunctionele patronen waardoor leiders incompetent worden en niet meer kunnen functioneren.',
        keyInsight: 'Veel machtige leiders vertonen disfunctionele patronen die hun effectiviteit ondermijnen en schade toebrengen aan hun organisaties.'
      },
      dysfunctionalPatterns: [
        {
          name: '1. Conflictvermijding',
          description: 'Onvermogen om moeilijke beslissingen te nemen of conflicten aan te gaan',
          characteristics: [
            'Wil door iedereen aardig gevonden worden',
            'Kan geen grenzen stellen',
            'Vermijdt confrontaties',
            'Stelt moeilijke beslissingen uit',
            'Komt vaak voort uit jeugdervaringen'
          ],
          consequences: [
            'Problemen escaleren',
            'Team verliest respect',
            'Onduidelijke verwachtingen',
            'Ineffectieve besluitvorming'
          ],
          sportExample: 'Een trainer die geen spelers durft te wisselen of kritiek te geven omdat hij bang is voor negatieve reacties, zoals Bill Clinton die door iedereen aardig gevonden wilde worden.',
          recognition: [
            'Zoekt vaak iemand anders om moeilijke beslissingen te nemen',
            'Gebruikt vage communicatie',
            'Vermijdt directe feedback',
            'Stelt beslissingen voortdurend uit'
          ]
        },
        {
          name: '2. Tiranniseren',
          description: 'Agressief en destructief gedrag jegens medewerkers',
          characteristics: [
            'Verbaal of fysiek agressief',
            'Vernietigt mensen systematisch',
            'Gebruikt angst als controlemiddel',
            'Toont geen empathie',
            'Geniet van macht over anderen'
          ],
          consequences: [
            'Hoog verloop van personeel',
            'Angstcultuur',
            'Verminderde creativiteit',
            'Psychologische schade bij medewerkers'
          ],
          sportExample: 'Trainers zoals Stalin-achtige figuren die spelers systematisch afbreken, of Trump-achtige verbale agressie tegen spelers en media.',
          recognition: [
            'Hoge turnover in het team',
            'Spelers zijn bang om fouten te maken',
            'Publieke vernederingen',
            'Extreme reacties op tegenslagen'
          ]
        },
        {
          name: '3. Micromanagement',
          description: 'Obsessieve controle over alle details en onvermogen om te delegeren',
          characteristics: [
            'Wil alles controleren',
            'Kan geen controle loslaten',
            'Bemoeit zich met alle details',
            'Vertrouwt niemand anders',
            'Leest alle contracten persoonlijk'
          ],
          consequences: [
            'Inefficiënte processen',
            'Demotivatie van medewerkers',
            'Bottlenecks in besluitvorming',
            'Geen ontwikkeling van anderen'
          ],
          sportExample: 'Een trainer zoals Elon Musk die elk detail wil controleren, alle trainingsschema\'s persoonlijk opstelt en geen assistent-trainers vertrouwt.',
          recognition: [
            'Alle beslissingen moeten door de leider',
            'Medewerkers wachten constant op goedkeuring',
            'Leider werkt extreem lange dagen',
            'Geen delegatie van verantwoordelijkheden'
          ]
        },
        {
          name: '4. Manisch Gedrag',
          description: 'Hyperactief, onsamenhangende beslissingen en chaotische energie',
          characteristics: [
            'Extreem hyperactief',
            'Onsamenhangende beslissingen',
            'Maakt anderen gek',
            'Veel energie maar verkeerde richting',
            'Impulsief en onvoorspelbaar'
          ],
          consequences: [
            'Chaos en verwarring',
            'Uitputting van het team',
            'Inconsistent beleid',
            'Verlies van focus'
          ],
          sportExample: 'Een trainer die constant van tactiek wisselt, spelers verward achterlaat en "heel hard rent maar de verkeerde kant op" zoals het citaat van Kets de Vries.',
          recognition: [
            'Constant wisselende prioriteiten',
            'Team weet niet wat er verwacht wordt',
            'Impulsieve beslissingen',
            'Uitputting bij medewerkers'
          ]
        },
        {
          name: '5. Ontoegankelijkheid',
          description: 'Compleet afschermen van de realiteit en andere mensen',
          characteristics: [
            'Isoleert zichzelf compleet',
            'Niet toegankelijk voor anderen',
            'Verzamelt ja-knikkers om zich heen',
            'Snapt niet wat er in de praktijk gebeurt',
            'Praat niet met gewone medewerkers'
          ],
          consequences: [
            'Verlies van contact met realiteit',
            'Slechte besluitvorming',
            'Geen feedback ontvangen',
            'Organisatie loopt vast'
          ],
          sportExample: 'Een trainer zoals Kim Jong-un die zich afschermt van spelers en staf, alleen omgaat met bestuurders en niet weet wat er echt speelt in de kleedkamer.',
          recognition: [
            'Leider is fysiek afwezig',
            'Communicatie gaat via tussenpersonen',
            'Geen directe interactie met team',
            'Beslissingen gebaseerd op incomplete informatie'
          ]
        },
        {
          name: '6. Spelletjes Spelen',
          description: 'Mensen tegen elkaar uitspelen om macht te behouden',
          characteristics: [
            'Speelt mensen tegen elkaar uit',
            'Alleen eigen belang telt',
            'Wil alle macht behouden',
            'Elimineert potentiële bedreigingen',
            'Zorgt dat anderen niet in het zonnetje staan'
          ],
          consequences: [
            'Verdeeld team',
            'Geen samenwerking',
            'Angst en wantrouwen',
            'Verlies van talent'
          ],
          sportExample: 'Een trainer die spelers tegen elkaar opzet, assistenten wegwerkt die te populair worden, en ervoor zorgt dat niemand anders krediet krijgt voor successen.',
          recognition: [
            'Veel conflicten tussen teamleden',
            'Hoog verloop van getalenteerde mensen',
            'Geheimzinnigheid en wantrouwen',
            'Leider neemt alle eer voor successen'
          ]
        }
      ],
      narcissisticCharacteristics: {
        title: 'Kenmerken van Narcistische Leiders',
        description: 'Specifieke kenmerken die narcistische leiders vertonen:',
        traits: [
          'Slechte verliezers en slechte winnaars - ligt altijd aan anderen of het is nooit goed genoeg',
          'Voelen zich voortdurend ondergewaardeerd en zoeken constant waardering',
          'Denken dat iedereen dom is en zij de slimste zijn',
          'Superieur gevoel - hun kijk op dingen is absoluut beter',
          'Houden ervan anderen te vertellen wat ze moeten doen (dominant)',
          'Zijn entertainers - speeches zijn shows met hoog entertainment gehalte',
          'Emotieloos - willen geen emoties voelen of tonen',
          'Luisteren niet - willen alleen zelf aan het woord zijn',
          'Ontrouw in relaties - veel scheidingen en affaires',
          'Micromanagement - always in control willen zijn',
          'Hebben gebouwen met hun naam erop',
          'Hebben vaak veel jongere partners (ego-boost)'
        ]
      },
      powerAndCorruption: {
        title: 'Macht en Corruptie',
        description: 'Kets de Vries over de gevaren van extreme macht:',
        insights: [
          'Extreme macht leidt tot absolute corruptie',
          '"Lonely at the top" - macht isoleert',
          'Omringd door leugenaars en ja-knikkers',
          'Groot ego en behoefte aan status symbolen',
          'Van "hero to zero" - macht corrumpeert',
          'Verlies van contact met de realiteit'
        ]
      },
      preventionStrategies: {
        title: 'Preventie en Interventie',
        description: 'Kets de Vries\' methoden om disfunctioneel leiderschap te voorkomen:',
        strategies: [
          {
            strategy: 'Legacy Reflectie',
            description: 'Confronteren met de vraag: "Hoe wil je herinnerd worden?"',
            implementation: [
              'Regelmatige zelfreflectie',
              'Denken aan lange termijn impact',
              'Overwegen van persoonlijke nalatenschap'
            ]
          },
          {
            strategy: 'Relaties Opbouwen',
            description: 'Werken aan het doorbreken van eenzaamheid en isolatie',
            implementation: [
              'Investeren in echte vriendschappen',
              'Zoeken van mentors en coaches',
              'Opbouwen van vertrouwensrelaties'
            ]
          },
          {
            strategy: 'Controle Loslaten',
            description: 'Leren omgaan met angst en behoefte aan controle',
            implementation: [
              'Delegeren van verantwoordelijkheden',
              'Accepteren van onzekerheid',
              'Vertrouwen in anderen ontwikkelen'
            ]
          },
          {
            strategy: '360-graden Feedback',
            description: 'Feedback krijgen van alle kanten, inclusief familie',
            implementation: [
              'Regelmatige feedback sessies',
              'Anonieme evaluaties',
              'Professionele coaching'
            ]
          },
          {
            strategy: 'Creativiteit Herontdekken',
            description: 'Weer verbinding maken met dromen en creativiteit',
            implementation: [
              'Tijd maken voor reflectie',
              'Nieuwe hobby\'s en interesses',
              'Inspiratie zoeken buiten werk'
            ]
          }
        ]
      },
      warningSignals: [
        'Hoog verloop van getalenteerde medewerkers',
        'Alleen omgeven door ja-knikkers',
        'Geen kritische feedback meer ontvangen',
        'Isolatie van de dagelijkse praktijk',
        'Extreme reacties op kritiek',
        'Obsessie met status en erkenning',
        'Verlies van empathie voor anderen',
        'Impulsieve en onsamenhangende beslissingen'
      ],
      organizationalSafeguards: {
        title: 'Organisatorische Waarborgen',
        description: 'Systemen om disfunctioneel leiderschap te voorkomen:',
        safeguards: [
          'Checks and balances in governance',
          'Regelmatige 360-graden evaluaties',
          'Onafhankelijke toezichthouders',
          'Transparante besluitvormingsprocessen',
          'Cultuur waarin feedback gewaardeerd wordt',
          'Rotatie van leiderschapsposities',
          'Mentoring en coaching programma\'s'
        ]
      },
      healthyLeadership: {
        title: 'Kenmerken van Gezond Leiderschap',
        description: 'Wat gezonde leiders onderscheidt van disfunctionele leiders:',
        characteristics: [
          'Zelfbewustzijn en emotionele intelligentie',
          'Vermogen om feedback te ontvangen en erop te handelen',
          'Empathie en interesse in anderen',
          'Bereidheid om macht te delen',
          'Authenticiteit en integriteit',
          'Flexibiliteit en aanpassingsvermogen',
          'Focus op ontwikkeling van anderen',
          'Balans tussen zelfvertrouwen en nederigheid'
        ]
      }
    }
  },
  {
    id: 'maccoby',
    title: 'Maccoby\'s Narcistische Leider',
    description: 'Michael Maccoby\'s onderscheid tussen productief en destructief narcisme in leiderschap.',
    content: {
      introduction: {
        title: 'Narcisme: Productief vs Destructief',
        description: 'Michael Maccoby onderscheidt tussen productief narcisme (dat kan leiden tot visionair leiderschap) en destructief narcisme (dat organisaties kan schaden).',
        keyInsight: 'Narcisme is niet per definitie slecht - het kan productief zijn als het goed gekanaliseerd wordt naar teamdoelen.'
      },
      narcissismTypes: [
        {
          type: 'Productief Narcisme',
          description: 'Narcisme dat gekanaliseerd wordt naar positieve doelen en teamresultaten',
          characteristics: [
            'Visionair denken en grote ambities',
            'Zelfvertrouwen en charisma',
            'Bereidheid om risico\'s te nemen',
            'Inspirerend voor anderen',
            'Focus op innovatie en verandering',
            'Competitieve drive naar excellentie'
          ],
          benefits: [
            'Motiveert teams tot hoge prestaties',
            'Creëert visie en richting',
            'Durft moeilijke beslissingen te nemen',
            'Brengt verandering en innovatie',
            'Inspireert anderen tot groei'
          ],
          sportExample: 'Een trainer zoals Pep Guardiola die zijn perfectionalisme en visie gebruikt om teams naar nieuwe hoogten te brengen, waarbij zijn ego dienstbaar is aan teamsucces.'
        },
        {
          type: 'Destructief Narcisme',
          description: 'Narcisme dat ten koste gaat van het team en de organisatie',
          characteristics: [
            'Alleen luisteren naar mensen die het eens zijn',
            'Geen empathie voor teamleden',
            'Alles draait om persoonlijke eer',
            'Kan geen kritiek verdragen',
            'Speelt mensen tegen elkaar uit',
            'Neemt alle krediet voor successen'
          ],
          consequences: [
            'Verdeeld en gedemotiveerd team',
            'Verlies van getalenteerde mensen',
            'Slechte besluitvorming door gebrek aan feedback',
            'Toxische organisatiecultuur',
            'Korte termijn denken'
          ],
          sportExample: 'Een trainer die alleen zijn eigen succes ziet, spelers de schuld geeft van nederlagen, en assistenten wegwerkt die te populair worden bij de spelers.'
        }
      ],
      productiveNarcissistTraits: [
        {
          trait: 'Visionair Leiderschap',
          description: 'Vermogen om inspirerende toekomstbeelden te creëren',
          application: 'Gebruikt persoonlijke ambitie om teamvisie te ontwikkelen',
          balance: 'Zorgt dat de visie groter is dan persoonlijke eer'
        },
        {
          trait: 'Competitieve Drive',
          description: 'Intense wil om te winnen en te excelleren',
          application: 'Kanaliseren van competitiedrang naar teamdoelen',
          balance: 'Wint samen met het team, niet ten koste van het team'
        },
        {
          trait: 'Zelfvertrouwen',
          description: 'Geloof in eigen kunnen en beslissingen',
          application: 'Geeft team vertrouwen in moeilijke momenten',
          balance: 'Erkent eigen fouten en beperkingen'
        },
        {
          trait: 'Charisma',
          description: 'Natuurlijke aantrekkingskracht en invloed',
          application: 'Inspireert en motiveert teamleden',
          balance: 'Gebruikt charisma om anderen te ontwikkelen'
        }
      ],
      managingNarcissism: {
        title: 'Narcisme Managen en Kanaliseren',
        description: 'Strategieën om narcistische trekken productief te houden:',
        strategies: [
          {
            strategy: 'Empathie Ontwikkelen',
            description: 'Bewust werken aan begrip voor anderen',
            implementation: [
              'Actief luisteren naar teamleden',
              'Interesse tonen in persoonlijke ontwikkeling van anderen',
              'Regelmatig vragen naar impact van beslissingen'
            ]
          },
          {
            strategy: 'Feedback Zoeken',
            description: 'Actief vragen om eerlijke feedback',
            implementation: [
              'Diverse bronnen van feedback zoeken',
              'Veilige omgeving creëren voor kritiek',
              'Handelen naar aanleiding van feedback'
            ]
          },
          {
            strategy: 'Team Focus',
            description: 'Persoonlijke ambities verbinden aan teamsucces',
            implementation: [
              'Doelen stellen die team en persoon ten goede komen',
              'Eer delen met teamleden',
              'Investeren in ontwikkeling van anderen'
            ]
          },
          {
            strategy: 'Zelfbewustzijn',
            description: 'Bewust zijn van narcistische neigingen',
            implementation: [
              'Regelmatige zelfreflectie',
              'Coaching of mentoring zoeken',
              'Waarschuwingssignalen herkennen'
            ]
          }
        ]
      },
      warningSignals: [
        'Alleen luisteren naar mensen die het met je eens zijn',
        'Alle eer opeisen voor teamsuccessen',
        'Geen interesse tonen in persoonlijke verhalen van teamleden',
        'Kritiek afwijzen zonder overweging',
        'Mensen tegen elkaar uitspelen',
        'Obsessie met persoonlijke status en erkenning',
        'Gebrek aan empathie voor anderen',
        'Impulsieve beslissingen zonder overleg'
      ],
      developmentPath: [
        'Erken je narcistische trekken zonder ze te ontkennen',
        'Identificeer welke trekken productief zijn en welke destructief',
        'Ontwikkel empathie door actief te luisteren naar anderen',
        'Zoek diverse bronnen van feedback en handel ernaar',
        'Verbind persoonlijke ambities aan teamdoelen',
        'Investeer in de ontwikkeling van anderen',
        'Deel eer en erkenning met het team',
        'Blijf werken aan zelfbewustzijn en persoonlijke groei'
      ]
    }
  },
  {
    id: 'ferguson',
    title: 'Alex Ferguson\'s Leiderschapsfilosofie',
    description: 'De leiderschapsprincipes van Sir Alex Ferguson, gebaseerd op zijn 26 jaar bij Manchester United.',
    content: {
      introduction: {
        title: 'De Meest Succesvolle Manager Aller Tijden',
        description: 'Sir Alex Ferguson leidde Manchester United 26 jaar lang en won 38 trofeeën. Zijn leiderschapsfilosofie combineert discipline, individuele benadering en lange termijn visie.',
        keyInsight: 'Succes komt niet van één enkele eigenschap, maar van het consistent toepassen van fundamentele leiderschapsprincipes over een lange periode.'
      },
      leadershipElements: [
        {
          number: 1,
          name: 'Discipline en Standaarden',
          description: 'Onwrikbare discipline waarbij iedereen gelijk behandeld wordt, ongeacht status',
          keyPoints: [
            'Geen uitzonderingen - zelfs sterren zoals Beckham werden weggestuurd',
            'Duidelijke regels die voor iedereen gelden',
            'Consequent handhaven van standaarden',
            'Discipline als basis voor teamprestaties'
          ],
          quote: 'I don\'t care if it\'s the best player in the world. If he doesn\'t abide by the standards, he has to go.',
          example: 'Ferguson stuurde David Beckham weg toen deze de teamdiscipline ondermijnde, ondanks zijn status als wereldster.'
        },
        {
          number: 2,
          name: 'Individuele Benadering',
          description: 'Verschillende motivatietechnieken voor verschillende spelertypes',
          keyPoints: [
            'Elke speler heeft een unieke persoonlijkheid',
            'Aanpassen van communicatiestijl per individu',
            'Begrijpen wat elke speler motiveert',
            'Flexibiliteit in leiderschapsstijl'
          ],
          quote: 'What worked for Roy Keane wouldn\'t work for Ryan Giggs. You have to understand the individual.',
          example: 'Roy Keane had directe confrontatie nodig om te presteren, terwijl Ryan Giggs subtiele begeleiding en vertrouwen nodig had.'
        },
        {
          number: 3,
          name: 'Het "Hairdryer Treatment"',
          description: 'Strategisch gebruik van intense kritiek op het juiste moment',
          keyPoints: [
            'Niet uit echte boosheid, maar berekend',
            'Timing is cruciaal',
            'Bedoeld om spelers wakker te schudden',
            'Gevolgd door constructieve begeleiding'
          ],
          quote: 'Sometimes you have to be hard to be kind. The hairdryer was about getting a reaction.',
          example: 'Ferguson\'s beroemde woede-uitbarstingen in de rust waren vaak theater om spelers te motiveren, niet echte emotie.'
        },
        {
          number: 4,
          name: 'Lange Termijn Visie',
          description: 'Bouwen aan een duurzame organisatie die generaties overstijgt',
          keyPoints: [
            'Investeren in jeugdacademie',
            'Cultuur belangrijker dan individuele talenten',
            'Denken in decennia, niet seizoenen',
            'Nalatenschap opbouwen'
          ],
          quote: 'I wanted to build something that would last long after I was gone.',
          example: 'Ferguson\'s investering in de Class of \'92 (Beckham, Scholes, Giggs, etc.) leverde decennia van succes op.'
        },
        {
          number: 5,
          name: 'Mentale Sterkte',
          description: 'Het belangrijkste voor het overwinnen van tegenslagen',
          keyPoints: [
            'Veerkracht belangrijker dan techniek',
            'Geloof in comeback mogelijkheden',
            'Nooit opgeven mentaliteit',
            'Druk omzetten in prestatie'
          ],
          quote: 'Football is a game of mistakes. Whoever makes the fewest mistakes wins.',
          example: 'Manchester United stond bekend om late goals en comebacks, wat mentale sterkte reflecteerde.'
        },
        {
          number: 6,
          name: 'Controle en Autoriteit',
          description: 'Absolute controle over alle aspecten van de organisatie',
          keyPoints: [
            'Duidelijke hiërarchie en verantwoordelijkheden',
            'Geen twijfel over wie de baas is',
            'Controle over transfers en tactiek',
            'Autoriteit verdienen door resultaten'
          ],
          quote: 'There can only be one person in charge, and that person has to make the decisions.',
          example: 'Ferguson had het laatste woord bij alle belangrijke beslissingen, van transfers tot opstelling.'
        },
        {
          number: 7,
          name: 'Aanpassingsvermogen',
          description: 'Evolueren met de tijd en veranderende omstandigheden',
          keyPoints: [
            'Tactiek aanpassen aan nieuwe trends',
            'Omgaan met verschillende generaties spelers',
            'Leren van nederlagen en fouten',
            'Flexibiliteit binnen vaste principes'
          ],
          quote: 'The game changes, but the principles of leadership remain the same.',
          example: 'Ferguson paste zijn tactiek aan van 4-4-2 naar meer moderne formaties, maar behield zijn kernprincipes.'
        },
        {
          number: 8,
          name: 'Timing en Intuïtie',
          description: 'Weten wanneer je moet handelen en wanneer je moet wachten',
          keyPoints: [
            'Gevoel voor het juiste moment',
            'Intuïtie over spelers en situaties',
            'Timing van wissels en beslissingen',
            'Geduld versus urgentie'
          ],
          quote: 'Timing in football, as in life, is everything.',
          example: 'Ferguson\'s beroemde wissels en tactische aanpassingen kwamen vaak op precies het juiste moment.'
        },
        {
          number: 9,
          name: 'Winnende Cultuur',
          description: 'Creëren van een omgeving waar excellentie de norm is',
          keyPoints: [
            'Hoge verwachtingen voor iedereen',
            'Cultuur van continue verbetering',
            'Trots op de club en geschiedenis',
            'Winnende mentaliteit doorgeven'
          ],
          quote: 'We don\'t just want to win, we expect to win. That\'s the Manchester United way.',
          example: 'Nieuwe spelers werden direct ondergedompeld in de winnende cultuur en verwachtingen van de club.'
        }
      ],
      corePhilosophy: {
        title: 'Ferguson\'s Kernfilosofie',
        description: 'De fundamentele overtuigingen die zijn succes onderbouwden:',
        principles: [
          'Discipline is de basis van alle succes',
          'Elke speler is uniek en vereist een individuele benadering',
          'Mentale sterkte is belangrijker dan technische vaardigheid',
          'Lange termijn visie gaat boven korte termijn resultaten',
          'Cultuur en waarden zijn belangrijker dan individuele talenten',
          'Leiderschap betekent moeilijke beslissingen durven nemen',
          'Aanpassingsvermogen is essentieel voor duurzaam succes'
        ]
      },
      modernApplications: {
        title: 'Moderne Toepassingen',
        description: 'Hoe Ferguson\'s principes toegepast kunnen worden in hedendaagse organisaties:',
        applications: [
          {
            context: 'Teammanagement',
            approach: 'Combineer duidelijke standaarden met individuele benadering',
            result: 'Hogere prestaties en betere teamcohesie'
          },
          {
            context: 'Organisatieverandering',
            approach: 'Lange termijn visie met korte termijn discipline',
            result: 'Duurzame transformatie'
          },
          {
            context: 'Talentmanagement',
            approach: 'Investeer in ontwikkeling en cultuur',
            result: 'Betere retentie en prestaties'
          },
          {
            context: 'Crisis Management',
            approach: 'Mentale sterkte en aanpassingsvermogen',
            result: 'Sneller herstel en groei'
          }
        ]
      },
      keyLessons: [
        'Consistentie in principes is belangrijker dan perfectie in uitvoering',
        'Discipline en empathie kunnen en moeten samengaan',
        'Lange termijn succes vereist korte termijn offers',
        'Leiderschap is een ambacht dat constant ontwikkeld moet worden',
        'Cultuur eet strategie als ontbijt',
        'Mentale sterkte kan geleerd en ontwikkeld worden',
        'Timing en intuïtie zijn net zo belangrijk als planning',
        'Echte leiders nemen verantwoordelijkheid voor zowel succes als falen'
      ]
    }
  },
  {
    id: 'wiltschut',
    title: 'Van Vugt & Wiltschut: Gezag vs Dominantie',
    description: 'Het onderscheid tussen gezag (gewenst) en dominantie (te vermijden) in leiderschap.',
    content: {
      mainConcept: 'Effectief leiderschap is gebaseerd op gezag (respect en vertrouwen) in plaats van dominantie (macht en controle). Gezag leidt tot duurzame invloed, dominantie tot weerstand.',
      gezag: [
        {
          characteristic: 'Gebaseerd op Respect',
          description: 'Invloed komt voort uit waardering voor competentie en karakter',
          sportExample: 'Een aanvoerder die gevolgd wordt omdat teamgenoten zijn expertise en integriteit respecteren'
        },
        {
          characteristic: 'Vertrouwen en Geloofwaardigheid',
          description: 'Mensen volgen vrijwillig omdat ze de leider vertrouwen',
          sportExample: 'Spelers die een trainer volgen omdat ze geloven in zijn visie en methoden'
        },
        {
          characteristic: 'Competentie en Expertise',
          description: 'Gezag gebaseerd op bewezen kennis en vaardigheden',
          sportExample: 'Een coach wiens tactische inzichten en ervaring erkend worden door het team'
        },
        {
          characteristic: 'Morele Autoriteit',
          description: 'Leiderschap gebaseerd op ethische principes en integriteit',
          sportExample: 'Een teamcaptain die het goede voorbeeld geeft in gedrag en houding'
        },
        {
          characteristic: 'Dienend Leiderschap',
          description: 'Focus op het dienen van het team en de organisatie',
          sportExample: 'Een trainer die zijn eigen ego opzij zet voor het succes van het team'
        }
      ],
      dominantie: [
        {
          characteristic: 'Gebaseerd op Macht',
          description: 'Invloed door positie, dwang of manipulatie',
          sportExample: 'Een trainer die alleen gehoorzaamd wordt uit angst voor consequenties'
        },
        {
          characteristic: 'Angst en Intimidatie',
          description: 'Controle door het creëren van angst bij volgers',
          sportExample: 'Een aanvoerder die teamgenoten intimideert om zijn zin te krijgen'
        },
        {
          characteristic: 'Ego en Eigenbelang',
          description: 'Leiderschap gericht op persoonlijke macht en status',
          sportExample: 'Een coach die beslissingen neemt om zichzelf goed te laten uitkomen'
        },
        {
          characteristic: 'Controle en Micromanagement',
          description: 'Obsessieve behoefte om alles te controleren',
          sportExample: 'Een trainer die elke beweging van spelers wil dicteren'
        },
        {
          characteristic: 'Agressie en Confrontatie',
          description: 'Gebruik van agressief gedrag om anderen te overheersen',
          sportExample: 'Een speler die door intimidatie en agressie probeert te leiden'
        }
      ],
      consequences: {
        gezag: 'Leidt tot intrinsieke motivatie, loyaliteit, creativiteit, duurzame prestaties en positieve teamcultuur. Mensen geven het beste van zichzelf omdat ze willen bijdragen.',
        dominantie: 'Resulteert in weerstand, angst, verminderde creativiteit, hoog verloop en toxische cultuur. Mensen doen alleen het minimum omdat ze moeten.'
      },
      developingAuthority: [
        'Ontwikkel je competenties en expertise continu',
        'Toon integriteit en consistentie in je handelen',
        'Luister actief naar je teamleden en toon empathie',
        'Neem verantwoordelijkheid voor zowel successen als mislukkingen',
        'Focus op het dienen van het team in plaats van jezelf',
        'Bouw vertrouwensrelaties op door betrouwbaar te zijn',
        'Erken je fouten en leer ervan',
        'Investeer in de ontwikkeling van anderen',
        'Communiceer duidelijk en transparant',
        'Toon nederigheid en blijf leren van anderen'
      ]
    }
  }
]

export default function LeadershipApp() {
  const [selectedTheory, setSelectedTheory] = useState<string | null>(null)
  const [readTheories, setReadTheories] = useState<Set<string>>(new Set())
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [quizScore, setQuizScore] = useState(0)
  const [totalPoints, setTotalPoints] = useState(0)

  const handleTheoryRead = (theoryId: string) => {
    if (!readTheories.has(theoryId)) {
      setReadTheories(new Set([...readTheories, theoryId]))
      setTotalPoints(prev => prev + 50)
    }
  }

  const handleQuizComplete = (score: number, total: number) => {
    if (!quizCompleted) {
      setQuizScore(score)
      setQuizCompleted(true)
      setTotalPoints(prev => prev + (score * 10)) // 10 punten per goed antwoord
    }
  }

  const getProgressPercentage = () => {
    const theoriesRead = readTheories.size
    const quizDone = quizCompleted ? 1 : 0
    const totalTasks = theories.length + 1 // theories + quiz
    return Math.round(((theoriesRead + quizDone) / totalTasks) * 100)
  }

  const getMotivationalMessage = () => {
    const progress = getProgressPercentage()
    if (progress === 100) return "🏆 Gefeliciteerd! Je bent een leiderschap expert!"
    if (progress >= 80) return "🌟 Bijna klaar! Je bent goed op weg!"
    if (progress >= 60) return "💪 Goed bezig! Blijf doorgaan!"
    if (progress >= 40) return "📚 Je maakt goede voortgang!"
    if (progress >= 20) return "🚀 Goede start! Ga zo door!"
    return "👋 Welkom! Begin je leiderschapsreis!"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🎯 Leiderschap in de Sport
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            HBO Sportkunde - Leiderschapstheorieën
          </p>
          
          {/* Progress Dashboard */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{totalPoints}</div>
                <div className="text-sm text-gray-600">Totaal Punten</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{readTheories.size}/{theories.length}</div>
                <div className="text-sm text-gray-600">Theorieën Gelezen</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">{getProgressPercentage()}%</div>
                <div className="text-sm text-gray-600">Voortgang</div>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${getProgressPercentage()}%` }}
              ></div>
            </div>
            
            <p className="text-center text-gray-700 font-medium">
              {getMotivationalMessage()}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => {
              setSelectedTheory(null)
              setShowQuiz(false)
            }}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              !selectedTheory && !showQuiz
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            📚 Overzicht
          </button>
          
          {theories.map((theory) => (
            <button
              key={theory.id}
              onClick={() => {
                setSelectedTheory(theory.id)
                setShowQuiz(false)
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-colors relative ${
                selectedTheory === theory.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {theory.title}
              {readTheories.has(theory.id) && (
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  ✓
                </span>
              )}
            </button>
          ))}
          
          <button
            onClick={() => {
              setSelectedTheory(null)
              setShowQuiz(true)
            }}
            className={`px-4 py-2 rounded-lg font-medium transition-colors relative ${
              showQuiz
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            🎯 Quiz
            {quizCompleted && (
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                ✓
              </span>
            )}
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {showQuiz ? (
            <QuizComponent onComplete={handleQuizComplete} />
          ) : selectedTheory ? (
            <TheoryCard
              theory={theories.find(t => t.id === selectedTheory)!}
              isExpanded={true}
              onRead={() => handleTheoryRead(selectedTheory)}
              isRead={readTheories.has(selectedTheory)}
            />
          ) : (
            <>
              {/* Welcome Message */}
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Welkom bij Leiderschap in de Sport! 🏆
                </h2>
                <p className="text-gray-600 mb-6">
                  Ontdek de belangrijkste leiderschapstheorieën toegepast op sport. 
                  Lees alle theorieën en maak de quiz om je kennis te testen.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">📖 Hoe werkt het?</h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Lees elke theorie voor 50 punten</li>
                      <li>• Maak de quiz voor extra punten</li>
                      <li>• Gebruik de kennis voor je analyses</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">🎯 Leerdoelen</h3>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Begrijp verschillende leiderschapsstijlen</li>
                      <li>• Herken macht en invloed patronen</li>
                      <li>• Analyseer leiders in de sport</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Theory Overview */}
              <div className="grid gap-6">
                {theories.map((theory) => (
                  <div
                    key={theory.id}
                    onClick={() => setSelectedTheory(theory.id)}
                    className="cursor-pointer"
                  >
                    <TheoryCard
                      theory={theory}
                      isExpanded={false}
                      onRead={() => handleTheoryRead(theory.id)}
                      isRead={readTheories.has(theory.id)}
                    />
                  </div>
                ))}
              </div>

              {/* Quiz Teaser */}
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4">🎯 Test je Kennis!</h2>
                <p className="mb-6">
                  Heb je alle theorieën gelezen? Test dan je kennis met onze uitgebreide quiz!
                </p>
                <button
                  onClick={() => setShowQuiz(true)}
                  className="px-8 py-3 bg-white text-purple-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  Start Quiz →
                </button>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500">
          <p>HBO Sportkunde - Leiderschap in de Sport</p>
          <p className="text-sm">Ontwikkeld voor studenten sportkunde</p>
        </div>
      </div>
    </div>
  )
}