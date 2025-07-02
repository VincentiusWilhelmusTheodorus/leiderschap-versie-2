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
    title: "Mintzberg's Managementrollen",
    description: "Henry Mintzberg identificeerde 10 managementrollen verdeeld over 3 categorieën die elke manager vervult.",
    content: {
      categories: [
        {
          name: "Interpersoonlijke Rollen",
          roles: [
            {
              name: "Boegbeeld",
              description: "Ceremoniële en symbolische taken uitvoeren als vertegenwoordiger van de organisatie"
            },
            {
              name: "Leider",
              description: "Motiveren en aansturen van medewerkers, verantwoordelijk voor personeelszaken"
            },
            {
              name: "Verbindingspersoon",
              description: "Netwerken onderhouden met externe contacten en stakeholders"
            }
          ]
        },
        {
          name: "Informationele Rollen",
          roles: [
            {
              name: "Monitor",
              description: "Informatie verzamelen over interne en externe ontwikkelingen"
            },
            {
              name: "Verspreider",
              description: "Informatie doorspelen aan medewerkers binnen de organisatie"
            },
            {
              name: "Woordvoerder",
              description: "Informatie naar buiten brengen namens de organisatie"
            }
          ]
        },
        {
          name: "Besluitvormingsrollen",
          roles: [
            {
              name: "Ondernemer",
              description: "Nieuwe projecten initiëren en veranderingen doorvoeren"
            },
            {
              name: "Probleemoplosser",
              description: "Reageren op onverwachte gebeurtenissen en crises"
            },
            {
              name: "Hulpbronnenverdeler",
              description: "Beslissen over de toewijzing van middelen, tijd en personeel"
            },
            {
              name: "Onderhandelaar",
              description: "Namens de organisatie onderhandelen met externe partijen"
            }
          ]
        }
      ],
      sportExample: "Een voetbaltrainer vervult alle rollen: als boegbeeld bij persconferenties, als leider van het team, als verbindingspersoon met de clubleiding, als monitor van tegenstanders, als verspreider van tactische informatie, als woordvoerder naar de media, als ondernemer bij nieuwe trainingsmethoden, als probleemoplosser bij blessures, als hulpbronnenverdeler van speeltijd, en als onderhandelaar bij transfers."
    }
  },
  {
    id: 'hersey-blanchard',
    title: "Situationeel Leidinggeven (SLII)",
    description: "Het SLII-model van Hersey en Blanchard stelt dat effectief leiderschap afhangt van het aanpassen van je leiderschapsstijl aan het ontwikkelingsniveau van je teamleden.",
    content: {
      introduction: {
        title: "Kernprincipe van SLII",
        description: "Er is geen beste leiderschapsstijl - de effectiviteit hangt af van de situatie en het ontwikkelingsniveau van de persoon voor een specifieke taak.",
        keyInsight: "Verschillende mensen hebben verschillende benaderingen nodig, en dezelfde persoon kan verschillende benaderingen nodig hebben voor verschillende taken."
      },
      coreModel: {
        title: "Het SLII Model",
        description: "Het model combineert twee gedragsdimensies om vier leiderschapsstijlen te creëren:",
        dimensions: [
          {
            name: "Sturend Gedrag",
            description: "Eenrichtingscommunicatie waarin de leider definieert wat, hoe, wanneer en waar taken uitgevoerd moeten worden.",
            characteristics: [
              "Duidelijke instructies geven",
              "Taken en rollen definiëren",
              "Nauw toezicht houden",
              "Prestaties monitoren"
            ]
          },
          {
            name: "Ondersteunend Gedrag",
            description: "Tweerichtingscommunicatie waarin de leider luistert, ondersteunt en faciliteert.",
            characteristics: [
              "Actief luisteren",
              "Emotionele ondersteuning bieden",
              "Faciliteren van probleemoplossing",
              "Betrekken bij besluitvorming"
            ]
          }
        ]
      },
      developmentLevels: [
        {
          level: "D1 - Enthousiaste Beginner",
          competence: "Laag",
          commitment: "Hoog",
          characteristics: [
            "Hoge motivatie en enthousiasme",
            "Weinig specifieke vaardigheden",
            "Optimistisch over de taak",
            "Bereid om te leren"
          ],
          needs: "Veel sturing en duidelijke instructies, weinig emotionele ondersteuning nodig",
          sportExample: "Een nieuwe speler die net bij het team komt - gemotiveerd en enthousiast maar heeft nog veel te leren over de tactiek en teamdynamiek."
        },
        {
          level: "D2 - Ontgoochelde Leerling",
          competence: "Laag tot Gemiddeld",
          commitment: "Laag",
          characteristics: [
            "Heeft wat ervaring opgedaan",
            "Realiseert dat de taak moeilijker is dan gedacht",
            "Gefrustreerd door tegenslagen",
            "Twijfelt aan eigen kunnen"
          ],
          needs: "Zowel veel sturing als veel ondersteuning - coaching en begeleiding",
          sportExample: "Een speler die een paar maanden in het team zit maar moeite heeft met de complexiteit van het spel en begint te twijfelen aan zijn kunnen."
        },
        {
          level: "D3 - Voorzichtige Uitvoerder",
          competence: "Gemiddeld tot Hoog",
          commitment: "Variabel",
          characteristics: [
            "Heeft de vaardigheden ontwikkeld",
            "Onzeker over eigen kunnen",
            "Wil het goed doen maar twijfelt",
            "Heeft vertrouwen en ondersteuning nodig"
          ],
          needs: "Weinig sturing maar veel ondersteuning en vertrouwen",
          sportExample: "Een ervaren speler die de vaardigheden heeft maar onzeker is over zijn rol in belangrijke wedstrijden en ondersteuning nodig heeft."
        },
        {
          level: "D4 - Zelfstandige Uitvoerder",
          competence: "Hoog",
          commitment: "Hoog",
          characteristics: [
            "Heeft zowel vaardigheden als motivatie",
            "Kan zelfstandig werken",
            "Neemt verantwoordelijkheid",
            "Vertrouwt op eigen kunnen"
          ],
          needs: "Weinig sturing en weinig ondersteuning - kan gedelegeerd worden",
          sportExample: "Een ervaren aanvoerder die zowel de vaardigheden als de motivatie heeft om zelfstandig te presteren en anderen te leiden."
        }
      ],
      leadershipStyles: [
        {
          style: "S1 - Sturend",
          behavior: "Hoog Sturend, Laag Ondersteunend",
          when: "Voor D1 - Enthousiaste Beginner",
          description: "De leider geeft specifieke instructies en houdt nauw toezicht op de uitvoering van taken.",
          approach: [
            "Duidelijke doelen en verwachtingen stellen",
            "Gedetailleerde instructies geven",
            "Frequent controleren en feedback geven",
            "Beslissingen nemen voor de persoon"
          ],
          sportExample: "Een trainer die een nieuwe speler stap-voor-stap leert hoe hij moet verdedigen, met duidelijke instructies en veel herhaling."
        },
        {
          style: "S2 - Coachend",
          behavior: "Hoog Sturend, Hoog Ondersteunend",
          when: "Voor D2 - Ontgoochelde Leerling",
          description: "De leider geeft nog steeds veel sturing maar biedt ook emotionele ondersteuning en uitleg.",
          approach: [
            "Uitleggen waarom dingen gedaan moeten worden",
            "Luisteren naar zorgen en frustraties",
            "Aanmoedigen en motiveren",
            "Samen problemen oplossen"
          ],
          sportExample: "Een trainer die een speler door een moeilijke periode helpt door zowel technische begeleiding als emotionele ondersteuning te bieden."
        },
        {
          style: "S3 - Ondersteunend",
          behavior: "Laag Sturend, Hoog Ondersteunend",
          when: "Voor D3 - Voorzichtige Uitvoerder",
          description: "De leider faciliteert en ondersteunt bij besluitvorming, geeft vertrouwen en moedigt aan.",
          approach: [
            "Samen beslissingen nemen",
            "Vertrouwen uitspreken in hun kunnen",
            "Beschikbaar zijn voor ondersteuning",
            "Ruimte geven voor eigen initiatief"
          ],
          sportExample: "Een trainer die een ervaren speler vertrouwen geeft door hem te betrekken bij tactische beslissingen en hem aan te moedigen."
        },
        {
          style: "S4 - Delegerend",
          behavior: "Laag Sturend, Laag Ondersteunend",
          when: "Voor D4 - Zelfstandige Uitvoerder",
          description: "De leider delegeert verantwoordelijkheid en autoriteit, geeft ruimte voor zelfstandig werken.",
          approach: [
            "Verantwoordelijkheid overdragen",
            "Doelen stellen maar methode overlaten",
            "Beschikbaar zijn wanneer nodig",
            "Resultaten monitoren op afstand"
          ],
          sportExample: "Een trainer die zijn aanvoerder de vrijheid geeft om het team op het veld te leiden en tactische aanpassingen te maken."
        }
      ],
      keyPrinciples: [
        "Er is geen beste leiderschapsstijl - het hangt af van de situatie",
        "Ontwikkelingsniveau is taakspecifiek - iemand kan D4 zijn voor één taak en D2 voor een andere",
        "Effectieve leiders passen hun stijl aan het ontwikkelingsniveau aan",
        "Het doel is om mensen te ontwikkelen naar D4 niveau",
        "Communicatie over verwachtingen en ontwikkelingsniveau is cruciaal"
      ],
      diagnosticProcess: [
        "Bepaal het ontwikkelingsniveau van de persoon voor de specifieke taak",
        "Kies de bijpassende leiderschapsstijl",
        "Communiceer duidelijk over verwachtingen en aanpak",
        "Monitor de voortgang en pas aan waar nodig",
        "Werk toe naar meer zelfstandigheid (D4 niveau)"
      ],
      commonMistakes: [
        "Eén stijl gebruiken voor alle situaties en mensen",
        "Aannemen dat ervaren mensen altijd D4 zijn",
        "Te snel overgaan naar delegeren zonder voldoende ontwikkeling",
        "Niet communiceren over de gekozen aanpak",
        "Ontwikkelingsniveau inschatten op basis van algemene ervaring in plaats van taakspecifieke competentie"
      ],
      benefits: [
        "Betere ontwikkeling van teamleden",
        "Verhoogde effectiviteit en prestaties",
        "Meer gemotiveerde en betrokken medewerkers",
        "Duidelijkere communicatie en verwachtingen",
        "Flexibeler en aanpassingsgerichter leiderschap"
      ]
    }
  },
  {
    id: 'machtsbronnen',
    title: "French & Raven's Machtsbronnen",
    description: "French en Raven identificeerden vijf bronnen van macht die leiders kunnen gebruiken om invloed uit te oefenen.",
    content: {
      introduction: {
        title: "Macht in Leiderschap",
        description: "Macht is het vermogen om het gedrag van anderen te beïnvloeden. Effectieve leiders begrijpen verschillende machtsbronnen en gebruiken ze ethisch.",
        keyInsight: "De meest effectieve leiders combineren verschillende machtsbronnen en passen hun gebruik aan de situatie aan."
      },
      powerSources: [
        {
          name: "1. Positiemacht (Legitimate Power)",
          description: "Macht die voortkomt uit je formele positie of functie binnen de organisatie.",
          characteristics: [
            "Gebaseerd op hiërarchie en organisatiestructuur",
            "Komt met de functie, niet met de persoon",
            "Verdwijnt wanneer je de positie verlaat",
            "Geeft recht om beslissingen te nemen"
          ],
          advantages: [
            "Duidelijke autoriteit en verantwoordelijkheid",
            "Snelle besluitvorming mogelijk",
            "Respect voor organisatiestructuur",
            "Legitimiteit van beslissingen"
          ],
          disadvantages: [
            "Kan leiden tot blinde gehoorzaamheid",
            "Verdwijnt met de positie",
            "Mogelijk weerstand bij misbruik",
            "Beperkt tot formele situaties"
          ],
          sportExample: "Een hoofdtrainer heeft positiemacht om de opstelling te bepalen en tactische beslissingen te nemen omdat dit bij zijn functie hoort.",
          effectiveUse: [
            "Gebruik voor organisatorische beslissingen",
            "Combineer met andere machtsbronnen",
            "Respecteer de grenzen van je autoriteit",
            "Wees transparant over besluitvorming"
          ]
        },
        {
          name: "2. Beloningmacht (Reward Power)",
          description: "Macht gebaseerd op het vermogen om beloningen uit te delen of te onthouden.",
          characteristics: [
            "Controle over gewenste middelen",
            "Kan materieel of immaterieel zijn",
            "Effectief voor korte termijn motivatie",
            "Vereist waardevolle beloningen"
          ],
          advantages: [
            "Sterke motivator voor prestaties",
            "Duidelijke koppeling tussen gedrag en gevolgen",
            "Flexibel in toepassing",
            "Kan positieve cultuur creëren"
          ],
          disadvantages: [
            "Kan afhankelijkheid creëren",
            "Externe motivatie kan intrinsieke motivatie verminderen",
            "Kostbaar om vol te houden",
            "Kan tot oneerlijk gedrag leiden"
          ],
          sportExample: "Een trainer die speeltijd, aanvoerdersband of bonussen kan uitdelen aan spelers die goed presteren.",
          effectiveUse: [
            "Koppel beloningen aan gewenst gedrag",
            "Zorg voor eerlijke verdeling",
            "Varieer tussen materiële en immateriële beloningen",
            "Gebruik als ondersteuning, niet als enige motivator"
          ]
        },
        {
          name: "3. Dwangmacht (Coercive Power)",
          description: "Macht gebaseerd op het vermogen om straffen uit te delen of negatieve gevolgen te veroorzaken.",
          characteristics: [
            "Gebaseerd op angst voor consequenties",
            "Kan leiden tot compliance maar niet commitment",
            "Effectief voor het stoppen van ongewenst gedrag",
            "Risico op negatieve bijeffecten"
          ],
          advantages: [
            "Snel effect op gedrag",
            "Duidelijke grenzen stellen",
            "Effectief in crisissituaties",
            "Kan discipline handhaven"
          ],
          disadvantages: [
            "Creëert angst en weerstand",
            "Vermindert creativiteit en initiatief",
            "Kan tot wraakgevoelens leiden",
            "Negatieve impact op werksfeer"
          ],
          sportExample: "Een trainer die spelers kan straffen met bankzitten, extra trainingen of uitsluiting van het team bij slecht gedrag.",
          effectiveUse: [
            "Gebruik spaarzaam en als laatste redmiddel",
            "Zorg voor duidelijke waarschuwingen",
            "Wees consistent in toepassing",
            "Combineer met uitleg en ondersteuning"
          ]
        },
        {
          name: "4. Expertmacht (Expert Power)",
          description: "Macht gebaseerd op kennis, vaardigheden en expertise die anderen waarderen.",
          characteristics: [
            "Gebaseerd op competentie en kennis",
            "Groeit met ervaring en leren",
            "Overdraagbaar tussen situaties",
            "Vereist erkenning van expertise"
          ],
          advantages: [
            "Duurzaam en overdraagbaar",
            "Creëert respect en vertrouwen",
            "Stimuleert leren en ontwikkeling",
            "Effectief in kennisintensieve situaties"
          ],
          disadvantages: [
            "Duurt lang om op te bouwen",
            "Kan verouderen door nieuwe ontwikkelingen",
            "Beperkt tot expertisegebied",
            "Kan leiden tot arrogantie"
          ],
          sportExample: "Een trainer met uitgebreide tactische kennis en ervaring die spelers respecteren vanwege zijn expertise in het spel.",
          effectiveUse: [
            "Blijf leren en ontwikkelen",
            "Deel kennis met anderen",
            "Erken grenzen van je expertise",
            "Gebruik expertise om anderen te helpen"
          ]
        },
        {
          name: "5. Referentiemacht (Referent Power)",
          description: "Macht gebaseerd op persoonlijke aantrekkingskracht, charisma en de wens van anderen om je te volgen.",
          characteristics: [
            "Gebaseerd op persoonlijke kwaliteiten",
            "Creëert loyaliteit en bewondering",
            "Moeilijk te imiteren",
            "Sterk gekoppeld aan persoonlijkheid"
          ],
          advantages: [
            "Creëert sterke loyaliteit",
            "Inspireert en motiveert anderen",
            "Effectief in veranderingsprocessen",
            "Bouwt sterke relaties"
          ],
          disadvantages: [
            "Moeilijk te ontwikkelen",
            "Kan leiden tot blinde loyaliteit",
            "Afhankelijk van persoonlijke relaties",
            "Risico op misbruik van vertrouwen"
          ],
          sportExample: "Een charismatische aanvoerder die door zijn persoonlijkheid en integriteit het respect en de loyaliteit van teamgenoten wint.",
          effectiveUse: [
            "Wees authentiek en integer",
            "Toon interesse in anderen",
            "Wees consistent in je gedrag",
            "Gebruik invloed ten goede van het team"
          ]
        }
      ],
      powerCombinations: {
        title: "Effectieve Machtscombinaties",
        description: "De meest effectieve leiders combineren verschillende machtsbronnen afhankelijk van de situatie:",
        combinations: [
          {
            situation: "Nieuwe teamleden begeleiden",
            powers: ["Positiemacht", "Expertmacht", "Beloningmacht"],
            rationale: "Duidelijke autoriteit, kennis om te leren, en motivatie door beloningen"
          },
          {
            situation: "Verandering doorvoeren",
            powers: ["Referentiemacht", "Expertmacht", "Positiemacht"],
            rationale: "Inspiratie en vertrouwen, kennis van de verandering, en autoriteit om te implementeren"
          },
          {
            situation: "Crisis management",
            powers: ["Positiemacht", "Expertmacht", "Dwangmacht"],
            rationale: "Snelle besluitvorming, kennis van oplossingen, en mogelijkheid tot directe actie"
          }
        ]
      },
      developingPower: {
        title: "Macht Ontwikkelen",
        description: "Verschillende machtsbronnen vereisen verschillende ontwikkelingsstrategieën:",
        strategies: [
          {
            powerType: "Expertmacht",
            development: [
              "Investeer in continue lering en ontwikkeling",
              "Zoek mentoren en leerervaring",
              "Deel je kennis met anderen",
              "Blijf op de hoogte van ontwikkelingen in je vakgebied"
            ]
          },
          {
            powerType: "Referentiemacht",
            development: [
              "Ontwikkel emotionele intelligentie",
              "Wees authentiek en integer",
              "Toon interesse in anderen",
              "Bouw sterke relaties op"
            ]
          },
          {
            powerType: "Positiemacht",
            development: [
              "Presteer goed in je huidige rol",
              "Toon leiderschapspotentieel",
              "Bouw netwerken binnen de organisatie",
              "Zoek uitdagende projecten en verantwoordelijkheden"
            ]
          }
        ]
      },
      ethicalConsiderations: {
        title: "Ethische Overwegingen",
        principles: [
          "Gebruik macht ten dienste van het team en de organisatie, niet voor persoonlijk gewin",
          "Wees transparant over je besluitvorming en motivaties",
          "Respecteer de waardigheid en autonomie van anderen",
          "Gebruik de minst dwangmatige vorm van macht die effectief is",
          "Ontwikkel anderen zodat ze ook macht en invloed kunnen uitoefenen",
          "Neem verantwoordelijkheid voor de gevolgen van je machtgebruik"
        ]
      }
    }
  },
  {
    id: 'macht-in-leiderschap',
    title: "Macht in Leiderschap: Keltner & Marcus/Van Dam",
    description: "Een diepgaande analyse van hoe macht leiders beïnvloedt en hoe verschillende machtsbronnen effectief kunnen worden ingezet.",
    content: {
      introduction: {
        title: "De Paradox van Macht",
        description: "Macht is essentieel voor effectief leiderschap, maar kan ook leiden tot corruptie en disfunctioneel gedrag. Het begrijpen van machtsdynamiek is cruciaal voor elke leider.",
        keyInsight: "Macht heeft de neiging om empathie te verminderen en kan leiden tot misbruik, maar met bewustzijn en preventieve strategieën kan dit worden voorkomen."
      },
      keltnerTheory: {
        problem: {
          description: "Volgens Dacher Keltner beschadigt macht letterlijk je brein door empathie-circuits te onderdrukken.",
          effects: [
            "Verminderde empathie en sociale gevoeligheid",
            "Toegenomen impulsiviteit en risicogedrag",
            "Minder aandacht voor anderen en hun behoeften",
            "Overmatig zelfvertrouwen en overschatting van eigen kunnen",
            "Verminderd vermogen om anderen te begrijpen"
          ]
        },
        preventionStrategies: [
          {
            name: "1. Perspectief Nemen",
            description: "Bewust proberen de wereld te zien vanuit het perspectief van anderen.",
            practice: "Vraag regelmatig naar meningen van teamleden, luister actief naar feedback, en probeer situaties te bekijken vanuit verschillende standpunten."
          },
          {
            name: "2. Empathie Oefenen",
            description: "Actief werken aan het begrijpen en voelen van emoties van anderen.",
            practice: "Besteed tijd aan persoonlijke gesprekken, toon interesse in het welzijn van teamleden, en reageer empathisch op hun zorgen."
          },
          {
            name: "3. Nederigheid Cultiveren",
            description: "Erkennen van je eigen beperkingen en fouten.",
            practice: "Geef fouten toe, vraag om hulp wanneer nodig, en erken de bijdragen van anderen aan je succes."
          },
          {
            name: "4. Macht Delen",
            description: "Bewust macht en verantwoordelijkheid delegeren aan anderen.",
            practice: "Geef teamleden autonomie, betrek hen bij besluitvorming, en ontwikkel hun leiderschapscapaciteiten."
          }
        ]
      },
      marcusVanDam: {
        positionBased: [
          {
            name: "Positiemacht",
            description: "Macht die voortkomt uit je formele positie binnen de organisatiehiërarchie.",
            advantages: [
              "Duidelijke autoriteit en legitimiteit",
              "Snelle besluitvorming mogelijk",
              "Geaccepteerd binnen organisatiestructuur"
            ],
            disadvantages: [
              "Verdwijnt met de positie",
              "Kan leiden tot blinde gehoorzaamheid",
              "Beperkt tot formele context"
            ],
            sportExample: "Een hoofdtrainer die de autoriteit heeft om de opstelling te bepalen en tactische beslissingen te nemen."
          },
          {
            name: "Beloningmacht",
            description: "Het vermogen om beloningen uit te delen of te onthouden.",
            advantages: [
              "Sterke motivator voor prestaties",
              "Flexibel in toepassing",
              "Kan positief gedrag versterken"
            ],
            disadvantages: [
              "Kan afhankelijkheid creëren",
              "Kostbaar om vol te houden",
              "Risico op externe motivatie"
            ],
            sportExample: "Een trainer die speeltijd, bonussen of erkenning kan uitdelen aan goed presterende spelers."
          },
          {
            name: "Dwangmacht",
            description: "Het vermogen om straffen uit te delen of negatieve gevolgen te veroorzaken.",
            advantages: [
              "Snel effect op gedrag",
              "Effectief voor discipline",
              "Duidelijke grenzen stellen"
            ],
            disadvantages: [
              "Creëert angst en weerstand",
              "Negatieve impact op werksfeer",
              "Kan tot wraakgevoelens leiden"
            ],
            sportExample: "Een trainer die spelers kan straffen met bankzitten of uitsluiting bij regelovertreding."
          }
        ],
        personBased: [
          {
            name: "Persoonlijke Macht",
            description: "Macht gebaseerd op persoonlijke kwaliteiten, competenties en charisma.",
            advantages: [
              "Duurzaam en overdraagbaar",
              "Creëert loyaliteit en respect",
              "Onafhankelijk van positie"
            ],
            disadvantages: [
              "Duurt lang om op te bouwen",
              "Moeilijk te ontwikkelen",
              "Afhankelijk van persoonlijke relaties"
            ],
            sportExample: "Een charismatische aanvoerder die door zijn persoonlijkheid en integriteit natuurlijk leiderschap uitstraalt."
          },
          {
            name: "Informatiemacht",
            description: "Macht gebaseerd op toegang tot belangrijke of exclusieve informatie.",
            advantages: [
              "Kan snel impact hebben",
              "Waardevol in besluitvorming",
              "Flexibel in gebruik"
            ],
            disadvantages: [
              "Informatie kan verouderen",
              "Afhankelijk van toegang",
              "Kan tot manipulatie leiden"
            ],
            sportExample: "Een analist die exclusieve informatie heeft over tegenstanders en deze strategisch deelt met het team."
          },
          {
            name: "Verbindingsmacht",
            description: "Macht gebaseerd op je netwerk en connecties met invloedrijke personen.",
            advantages: [
              "Toegang tot middelen en kansen",
              "Kan deuren openen",
              "Vergroot invloedssfeer"
            ],
            disadvantages: [
              "Afhankelijk van relaties",
              "Kan fragiel zijn",
              "Risico op belangenverstrengeling"
            ],
            sportExample: "Een trainer met sterke connecties in de voetbalwereld die talentvolle spelers kan aantrekken."
          }
        ]
      },
      integration: {
        title: "Integratie van Theorieën",
        description: "De combinatie van Keltner's waarschuwingen en Marcus & Van Dam's machtsbronnen biedt een compleet beeld:",
        keyPoints: [
          "Positie-gebonden macht (Positie, Beloning, Dwang) heeft het hoogste risico voor Keltner's 'macht beschadigt je brein' effecten",
          "Persoon-gebonden macht (Persoonlijk, Informatie, Verbinding) is duurzamer maar vereist meer ontwikkeling",
          "Effectieve leiders combineren verschillende machtsbronnen en blijven bewust van de risico's",
          "Preventieve strategieën zijn essentieel, vooral bij het gebruik van positie-gebonden macht"
        ]
      },
      practicalApplications: [
        {
          situation: "Nieuwe teamleider",
          approach: "Begin met Persoonlijke Macht ontwikkelen, gebruik Positiemacht spaarzaam",
          powerSources: ["Persoonlijke Macht", "Informatiemacht", "Beperkte Positiemacht"]
        },
        {
          situation: "Crisis management",
          approach: "Gebruik Positiemacht voor snelle beslissingen, combineer met Expertmacht",
          powerSources: ["Positiemacht", "Informatiemacht", "Beperkte Dwangmacht"]
        },
        {
          situation: "Lange termijn ontwikkeling",
          approach: "Focus op Persoonlijke Macht en Verbindingsmacht, deel macht met team",
          powerSources: ["Persoonlijke Macht", "Verbindingsmacht", "Gedeelde Beloningmacht"]
        }
      ],
      warningSignals: [
        "Verminderde interesse in feedback van teamleden",
        "Toegenomen ongeduld met anderen",
        "Neiging om alleen beslissingen te nemen",
        "Minder empathie voor problemen van teamleden",
        "Overmatig vertrouwen in eigen oordeel",
        "Weerstand tegen kritiek of tegenspraak",
        "Isolatie van het team",
        "Focus op persoonlijke voordelen boven teambelang"
      ],
      ethicalGuidelines: [
        "Gebruik macht ten dienste van het team, niet voor persoonlijk gewin",
        "Blijf luisteren naar feedback en verschillende perspectieven",
        "Deel macht en verantwoordelijkheid met teamleden",
        "Wees transparant over besluitvorming en motivaties",
        "Ontwikkel anderen zodat ze ook leiderschap kunnen tonen",
        "Neem verantwoordelijkheid voor de gevolgen van je machtgebruik",
        "Zoek regelmatig feedback over je leiderschapsstijl",
        "Blijf nederig en erkend je beperkingen"
      ]
    }
  },
  {
    id: 'narcisme',
    title: "Disfunctioneel Leiderschap: Kets de Vries",
    description: "Manfred Kets de Vries beschrijft verschillende disfunctionele leiderschapspatronen die ontstaan wanneer leiders 'ontsporen' en hun effectiviteit verliezen.",
    content: {
      introduction: {
        title: "Wanneer Leiders Ontsporen",
        description: "Volgens Manfred Kets de Vries kunnen leiders disfunctionele patronen ontwikkelen die hun effectiviteit ondermijnen. Deze patronen zijn vaak geworteld in persoonlijke onzekerheden en kunnen ernstige gevolgen hebben voor teams en organisaties.",
        keyInsight: "Iedereen is normaal totdat je hen beter leert kennen - vooral bij leiders kunnen disfunctionele patronen verborgen blijven totdat ze in machtposities komen."
      },
      dysfunctionalPatterns: [
        {
          name: "De Conflictvermijdende Leider",
          description: "Leiders die moeilijke beslissingen vermijden en iedereen aardig willen vinden.",
          characteristics: [
            "Kan geen grenzen stellen",
            "Vermijdt confrontaties",
            "Wil door iedereen aardig gevonden worden",
            "Stelt moeilijke beslissingen uit",
            "Zoekt vaak iemand anders om moeilijke beslissingen te nemen"
          ],
          consequences: [
            "Onduidelijkheid over verwachtingen",
            "Problemen worden niet aangepakt",
            "Teamleden raken gefrustreerd",
            "Besluitvorming wordt vertraagd",
            "Organisatie mist richting"
          ],
          sportExample: "Een trainer die geen spelers durft te wisselen of kritiek te geven omdat hij bang is voor negatieve reacties, waardoor het team niet verbetert.",
          recognition: [
            "Vermijdt moeilijke gesprekken",
            "Stelt beslissingen steeds uit",
            "Zoekt constant bevestiging",
            "Delegeert moeilijke taken aan anderen"
          ]
        },
        {
          name: "De Tirannieke Leider",
          description: "Leiders die agressief en vernietigd gedrag vertonen jegens teamleden.",
          characteristics: [
            "Verbaal of emotioneel agressief",
            "Vernietigt mensen die tegenspreken",
            "Gebruikt angst als controlemiddel",
            "Toont geen empathie",
            "Ziet anderen als bedreigingen"
          ],
          consequences: [
            "Angstcultuur in het team",
            "Creativiteit en initiatief verdwijnen",
            "Hoog verloop van personeel",
            "Verminderde prestaties",
            "Psychologische schade bij teamleden"
          ],
          sportExample: "Een trainer die spelers publiekelijk vernedert, schreeuwt en dreigt, waardoor spelers bang worden om fouten te maken en hun natuurlijke spel verliezen.",
          recognition: [
            "Frequent schreeuwen of dreigen",
            "Publiekelijke vernedering van teamleden",
            "Geen tolerantie voor fouten",
            "Teamleden zijn bang om te spreken"
          ]
        },
        {
          name: "De Micromanager",
          description: "Leiders die alles willen controleren en geen controle kunnen loslaten.",
          characteristics: [
            "Wil alle details weten en controleren",
            "Kan niet delegeren",
            "Leest alle contracten en documenten",
            "Bemoeit zich met kleinste details",
            "Vertrouwt teamleden niet"
          ],
          consequences: [
            "Teamleden voelen zich niet vertrouwd",
            "Ontwikkeling van teamleden stagneert",
            "Inefficiënte processen",
            "Leider wordt overbelast",
            "Innovatie wordt belemmerd"
          ],
          sportExample: "Een trainer die elke pass, elke beweging wil controleren en spelers geen ruimte geeft voor eigen interpretatie, waardoor ze robotachtig gaan spelen.",
          recognition: [
            "Wil bij alle beslissingen betrokken zijn",
            "Controleert constant wat teamleden doen",
            "Kan geen taken volledig overdragen",
            "Teamleden vragen om toestemming voor kleine dingen"
          ]
        },
        {
          name: "De Manische Leider",
          description: "Leiders die hyperactief zijn en onsamenhangende beslissingen nemen.",
          characteristics: [
            "Heel hyperactief en energiek",
            "Neemt onsamenhangende beslissingen",
            "Maakt anderen 'gek' met hun energie",
            "Loopt hard maar de verkeerde kant op",
            "Kan niet stilzitten of focussen"
          ],
          consequences: [
            "Verwarring over prioriteiten",
            "Teamleden raken uitgeput",
            "Inconsistent beleid",
            "Verspilling van energie en middelen",
            "Gebrek aan duidelijke richting"
          ],
          sportExample: "Een trainer die constant van tactiek wisselt, spelers bombardeert met nieuwe ideeën en zo veel veranderingen doorvoert dat niemand meer weet wat de bedoeling is.",
          recognition: [
            "Constant nieuwe initiatieven",
            "Kan niet bij één onderwerp blijven",
            "Teamleden zijn verward over prioriteiten",
            "Veel energie maar weinig resultaat"
          ]
        },
        {
          name: "De Ontoegankelijke Leider",
          description: "Leiders die zich compleet afschermen van hun team en organisatie.",
          characteristics: [
            "Isoleert zichzelf van het team",
            "Niet toegankelijk voor teamleden",
            "Weet niet wat er in de praktijk gebeurt",
            "Omringt zich met 'ja-knikkers'",
            "Leeft in een bubbel"
          ],
          consequences: [
            "Verlies van contact met de realiteit",
            "Slechte besluitvorming door gebrek aan informatie",
            "Teamleden voelen zich niet gehoord",
            "Problemen worden niet tijdig gesignaleerd",
            "Organisatie raakt verdeeld"
          ],
          sportExample: "Een trainer die alleen met zijn assistenten praat, nooit met spelers spreekt en niet weet wat er leeft in de kleedkamer, waardoor hij de verkeerde beslissingen neemt.",
          recognition: [
            "Zelden direct contact met teamleden",
            "Krijgt informatie alleen via tussenpersonen",
            "Kent de dagelijkse problemen niet",
            "Teamleden kunnen hem niet bereiken"
          ]
        },
        {
          name: "De Machtsspelletjes Leider",
          description: "Leiders die uitsluitend bezig zijn met het behouden van hun eigen macht.",
          characteristics: [
            "Speelt mensen tegen elkaar uit",
            "Ziet anderen als bedreiging",
            "Eigen belang staat altijd voorop",
            "Saboteert potentiële opvolgers",
            "Manipuleert situaties voor eigen voordeel"
          ],
          consequences: [
            "Giftige werkomgeving",
            "Geen teamwork mogelijk",
            "Talentvolle mensen vertrekken",
            "Organisatie stagneert",
            "Verlies van vertrouwen"
          ],
          sportExample: "Een trainer die spelers tegen elkaar opzet, informatie achterhoudt en ervoor zorgt dat niemand anders krediet krijgt voor successen.",
          recognition: [
            "Speelt teamleden tegen elkaar uit",
            "Houdt informatie achter",
            "Saboteert anderen die succesvol zijn",
            "Alles draait om eigen positie"
          ]
        }
      ],
      narcissisticTraits: [
        "Slechte verliezers en slechte winnaars - het is nooit goed genoeg",
        "Voelen zich voortdurend ondergewaardeerd en zoeken constant waardering",
        "Denken dat iedereen dom is en zij de slimste zijn",
        "Hebben een superieur gevoel - anderen zien het allemaal verkeerd",
        "Vinden het heerlijk om anderen te vertellen wat ze moeten doen",
        "Zijn entertainers - houden van shows en drama",
        "Hebben geen emoties en willen ze ook niet voelen",
        "Hebben geen empathie voor anderen",
        "Luisteren niet - willen alleen zelf aan het woord zijn",
        "Zijn ontrouw in relaties en hebben vaak scheidingen",
        "Willen altijd de controle hebben - micromanagement",
        "Hebben vaak veel jongere partners (ego-boost)",
        "Willen gebouwen met hun naam erop"
      ],
      preventionStrategies: {
        title: "Preventie en Herstel",
        description: "Kets de Vries ontwikkelde methoden om disfunctionele patronen te doorbreken:",
        strategies: [
          {
            strategy: "360-graden Feedback",
            description: "Feedback krijgen van alle kanten - collega's, ondergeschikten, familie.",
            implementation: [
              "Organiseer regelmatige feedback sessies",
              "Betrek familie en vrienden bij evaluatie",
              "Luister naar alle perspectieven",
              "Neem feedback serieus en handel ernaar"
            ]
          },
          {
            strategy: "Legacy Reflectie",
            description: "Nadenken over hoe je herinnerd wilt worden.",
            implementation: [
              "Vraag jezelf af: 'Hoe wil ik herinnerd worden?'",
              "Denk na over je impact op anderen",
              "Stel doelen voor persoonlijke ontwikkeling",
              "Werk aan een positieve nalatenschap"
            ]
          },
          {
            strategy: "Eenzaamheid Aanpakken",
            description: "Omgaan met de eenzaamheid die macht met zich meebrengt.",
            implementation: [
              "Bouw echte relaties op",
              "Zoek mentoren en coaches",
              "Deel kwetsbaarheden met vertrouwde personen",
              "Investeer in persoonlijke relaties"
            ]
          },
          {
            strategy: "Controle Loslaten",
            description: "Leren omgaan met de angst om controle te verliezen.",
            implementation: [
              "Delegeer bewust verantwoordelijkheden",
              "Vertrouw op teamleden",
              "Focus op resultaten, niet op processen",
              "Accepteer dat je niet alles kunt controleren"
            ]
          }
        ]
      },
      warningSignals: [
        "Hoog verloop van getalenteerde medewerkers",
        "Verminderde innovatie en creativiteit",
        "Angstcultuur binnen het team",
        "Gebrek aan eerlijke feedback",
        "Isolatie van de leider",
        "Constant conflict en drama",
        "Verminderde prestaties ondanks talent",
        "Verlies van vertrouwen van stakeholders"
      ],
      healthyLeadership: {
        title: "Kenmerken van Gezond Leiderschap",
        description: "In tegenstelling tot disfunctionele patronen kenmerkt gezond leiderschap zich door:",
        characteristics: [
          "Zelfbewustzijn en emotionele intelligentie",
          "Vermogen om feedback te ontvangen en te gebruiken",
          "Empathie en interesse in anderen",
          "Bereidheid om macht te delen",
          "Authenticiteit en integriteit",
          "Flexibiliteit en aanpassingsvermogen",
          "Focus op ontwikkeling van anderen",
          "Balans tussen zelfvertrouwen en nederigheid"
        ]
      }
    }
  },
  {
    id: 'maccoby',
    title: "Maccoby's Narcistische Leider",
    description: "Michael Maccoby onderscheidt tussen productief en destructief narcisme in leiderschap, waarbij narcistische eigenschappen zowel voordelig als schadelijk kunnen zijn.",
    content: {
      introduction: {
        title: "De Twee Gezichten van Narcisme",
        description: "Volgens Michael Maccoby kunnen narcistische eigenschappen bij leiders zowel productief als destructief zijn, afhankelijk van hoe ze worden gekanaliseerd.",
        keyInsight: "Het gaat niet om het elimineren van narcisme, maar om het kanaliseren naar productieve doelen die het team en de organisatie ten goede komen."
      },
      narcissismTypes: [
        {
          type: "Productief Narcisme",
          description: "Narcistische eigenschappen die worden gekanaliseerd naar teamdoelen en organisatiesucces.",
          characteristics: [
            "Visionair denken en grote ambities",
            "Zelfvertrouwen en charisma",
            "Bereidheid om risico's te nemen",
            "Inspirerend voor anderen",
            "Focus op innovatie en verandering",
            "Competitieve drive gericht op teamsucces"
          ],
          benefits: [
            "Inspireert teams tot hoge prestaties",
            "Durft moeilijke beslissingen te nemen",
            "Creëert visie en richting",
            "Stimuleert innovatie",
            "Bouwt vertrouwen in het team",
            "Bereikt uitzonderlijke resultaten"
          ],
          sportExample: "Een trainer die groot droomt, zijn team inspireert om onmogelijk geachte doelen te bereiken, en zijn competitieve drive gebruikt om het beste uit elke speler te halen."
        },
        {
          type: "Destructief Narcisme",
          description: "Narcistische eigenschappen die ten koste gaan van het team en gericht zijn op persoonlijke verheerlijking.",
          characteristics: [
            "Alleen luisteren naar mensen die het eens zijn",
            "Geen kritiek kunnen verdragen",
            "Anderen de schuld geven van mislukkingen",
            "Eigen succes overdrijven",
            "Gebrek aan empathie",
            "Manipulatief gedrag"
          ],
          consequences: [
            "Verlies van vertrouwen van het team",
            "Slechte besluitvorming door gebrek aan feedback",
            "Hoog verloop van getalenteerde mensen",
            "Toxische werkomgeving",
            "Verminderde prestaties op lange termijn",
            "Reputatieschade"
          ],
          sportExample: "Een trainer die alleen zijn eigen succes ziet, spelers de schuld geeft van nederlagen, geen kritiek accepteert en het team gebruikt voor persoonlijke roem."
        }
      ],
      productiveNarcissistTraits: [
        {
          trait: "Visionair Leiderschap",
          description: "Het vermogen om inspirerende toekomstbeelden te creëren en anderen mee te nemen.",
          application: "Gebruik je visie om het team te inspireren en richting te geven",
          balance: "Zorg dat de visie realistisch en haalbaar is, niet alleen grandioos"
        },
        {
          trait: "Competitieve Drive",
          description: "Sterke motivatie om te winnen en de beste te zijn.",
          application: "Kanaliseer competitiedrang naar teamprestaties en collectieve doelen",
          balance: "Vermijd dat competitie ten koste gaat van teamwork en samenwerking"
        },
        {
          trait: "Zelfvertrouwen",
          description: "Geloof in eigen kunnen en beslissingen, ook onder druk.",
          application: "Gebruik zelfvertrouwen om moeilijke beslissingen te nemen en het team gerust te stellen",
          balance: "Blijf open voor feedback en erken je eigen beperkingen"
        },
        {
          trait: "Charisma",
          description: "Natuurlijke aantrekkingskracht en vermogen om anderen te beïnvloeden.",
          application: "Gebruik charisma om mensen te motiveren en te inspireren",
          balance: "Zorg dat charisma authentiek is en niet manipulatief"
        }
      ],
      managingNarcissism: {
        title: "Narcisme Managen",
        description: "Strategieën om narcistische eigenschappen productief te houden:",
        strategies: [
          {
            strategy: "Empathie Ontwikkelen",
            description: "Bewust werken aan het begrijpen van anderen en hun perspectieven.",
            implementation: [
              "Luister actief naar teamleden",
              "Vraag naar hun meningen en gevoelens",
              "Probeer situaties vanuit hun perspectief te bekijken",
              "Toon interesse in hun persoonlijke ontwikkeling"
            ]
          },
          {
            strategy: "Feedback Zoeken",
            description: "Actief vragen om eerlijke feedback, ook als die pijnlijk is.",
            implementation: [
              "Creëer veilige ruimte voor kritiek",
              "Vraag specifiek naar verbeterpunten",
              "Reageer positief op feedback",
              "Handel naar feedback en communiceer veranderingen"
            ]
          },
          {
            strategy: "Teamfocus Behouden",
            description: "Zorgen dat persoonlijke ambities niet ten koste gaan van het team.",
            implementation: [
              "Stel teamdoelen boven persoonlijke doelen",
              "Geef teamleden krediet voor successen",
              "Neem verantwoordelijkheid voor mislukkingen",
              "Investeer in ontwikkeling van anderen"
            ]
          },
          {
            strategy: "Zelfbewustzijn Ontwikkelen",
            description: "Bewust worden van eigen narcistische neigingen en triggers.",
            implementation: [
              "Reflecteer regelmatig op eigen gedrag",
              "Herken waarschuwingssignalen",
              "Zoek coaching of mentoring",
              "Werk aan persoonlijke ontwikkeling"
            ]
          }
        ]
      },
      warningSignals: [
        "Alleen luisteren naar mensen die het met je eens zijn",
        "Geen kritiek kunnen verdragen of wegwuiven van feedback",
        "Anderen de schuld geven van mislukkingen",
        "Eigen rol in successen overdrijven",
        "Verminderde interesse in het welzijn van teamleden",
        "Toenemende isolatie van het team",
        "Beslissingen nemen zonder input van anderen",
        "Focus op persoonlijke roem boven teamresultaten"
      ],
      developmentPath: [
        "Erken je narcistische eigenschappen zonder ze te veroordelen",
        "Identificeer welke eigenschappen productief zijn en welke destructief",
        "Ontwikkel empathie door actief te luisteren naar anderen",
        "Zoek regelmatig feedback en handel ernaar",
        "Focus op teamdoelen en collectief succes",
        "Investeer in de ontwikkeling van anderen",
        "Blijf nederig ondanks successen",
        "Gebruik je charisma en visie ten dienste van het team"
      ]
    }
  },
  {
    id: 'ferguson',
    title: "Alex Ferguson's Leiderschapsfilosofie",
    description: "Sir Alex Ferguson leidde Manchester United 26 jaar lang naar ongekend succes. Zijn leiderschapsfilosofie biedt waardevolle lessen voor elke leider.",
    content: {
      introduction: {
        title: "De Meest Succesvolle Manager Aller Tijden",
        description: "Sir Alex Ferguson transformeerde Manchester United van een middelmatige club naar de meest succesvolle voetbalclub ter wereld. Zijn leiderschapsfilosofie gaat ver beyond voetbal.",
        keyInsight: "Succes komt niet van talent alleen, maar van het creëren van een winnende cultuur waarin discipline, ontwikkeling en mentale sterkte centraal staan."
      },
      leadershipElements: [
        {
          number: 1,
          name: "Discipline en Standaarden",
          description: "Ferguson geloofde dat discipline de basis is van alle succes. Regels golden voor iedereen, zonder uitzonderingen.",
          keyPoints: [
            "Geen uitzonderingen - zelfs sterren zoals Beckham werden weggestuurd bij regelovertreding",
            "Duidelijke verwachtingen voor iedereen",
            "Consequent handhaven van standaarden",
            "Discipline als basis voor teamwork"
          ],
          quote: "Als je een uitzondering maakt voor één speler, verlies je het hele team.",
          example: "Ferguson stuurde David Beckham weg naar Real Madrid toen deze de teamdiscipline ondermijnde, ondanks zijn status als wereldster."
        },
        {
          number: 2,
          name: "Individuele Benadering",
          description: "Hoewel de regels voor iedereen golden, paste Ferguson zijn communicatie aan per speler.",
          keyPoints: [
            "Verschillende motivatietechnieken voor verschillende persoonlijkheden",
            "Begrip van wat elke speler nodig heeft",
            "Flexibele communicatiestijl",
            "Persoonlijke ontwikkeling van elke speler"
          ],
          quote: "Je moet elke speler anders behandelen, maar wel eerlijk.",
          example: "Roy Keane had directe confrontatie nodig om gemotiveerd te blijven, terwijl Ryan Giggs subtiele begeleiding prefereerde."
        },
        {
          number: 3,
          name: "De 'Hairdryer Treatment'",
          description: "Ferguson's beroemde intense kritiek die hij strategisch gebruikte om spelers wakker te schudden.",
          keyPoints: [
            "Strategisch gebruik van intense kritiek",
            "Timing was cruciaal",
            "Vaak berekend, niet uit echte boosheid",
            "Bedoeld om prestaties te verbeteren"
          ],
          quote: "Soms moet je de waarheid hard vertellen om door te dringen.",
          example: "Ferguson gaf spelers soms de 'hairdryer treatment' in de rust om hen scherp te krijgen voor de tweede helft."
        },
        {
          number: 4,
          name: "Lange Termijn Visie",
          description: "Ferguson dacht altijd in jaren vooruit en bouwde aan een duurzame organisatie.",
          keyPoints: [
            "Investering in jeugdacademie",
            "Opbouw van winnende cultuur",
            "Duurzame organisatiestructuur",
            "Voorbereiding op de toekomst"
          ],
          quote: "Ik bouw niet voor vandaag, ik bouw voor de volgende generatie.",
          example: "Ferguson investeerde zwaar in de jeugdacademie, wat spelers als Scholes, Giggs en Beckham opleverde."
        },
        {
          number: 5,
          name: "Mentale Sterkte",
          description: "Ferguson geloofde dat mentale sterkte belangrijker was dan technische vaardigheden.",
          keyPoints: [
            "Veerkracht bij tegenslagen",
            "Nooit opgeven mentaliteit",
            "Geloof in comeback mogelijkheden",
            "Mentale voorbereiding op druk"
          ],
          quote: "Voetbal wordt gespeeld in het hoofd. De beste spelers zijn mentaal het sterkst.",
          example: "Manchester United stond bekend om late goals en comebacks, wat mentale sterkte reflecteerde."
        },
        {
          number: 6,
          name: "Controle en Autoriteit",
          description: "Ferguson behield altijd de controle en liet nooit twijfel bestaan over wie de baas was.",
          keyPoints: [
            "Duidelijke hiërarchie",
            "Geen twijfel over autoriteit",
            "Controle over alle aspecten",
            "Respect voor de manager"
          ],
          quote: "Er kan maar één baas zijn, en dat ben ik.",
          example: "Ferguson tolereerde geen uitdaging van zijn autoriteit en stuurde spelers weg die dit probeerden."
        },
        {
          number: 7,
          name: "Voortdurende Verbetering",
          description: "Ferguson was nooit tevreden en zocht altijd naar manieren om beter te worden.",
          keyPoints: [
            "Nooit tevreden met status quo",
            "Constant zoeken naar verbetering",
            "Leren van nederlagen",
            "Innovatie in training en tactiek"
          ],
          quote: "Stilstand is achteruitgang. We moeten altijd beter willen worden.",
          example: "Na elke overwinning analyseerde Ferguson wat beter kon en werkte aan verbeteringen."
        },
        {
          number: 8,
          name: "Teambuilding",
          description: "Ferguson creëerde een familie-gevoel binnen het team waarbij iedereen voor elkaar opkwam.",
          keyPoints: [
            "Familie-gevoel creëren",
            "Loyaliteit naar elkaar",
            "Samen sterk zijn",
            "Onderlinge steun"
          ],
          quote: "We zijn geen team, we zijn een familie.",
          example: "Ferguson zorgde ervoor dat spelers elkaar steunden, zowel op als naast het veld."
        },
        {
          number: 9,
          name: "Aanpassingsvermogen",
          description: "Ferguson paste zijn stijl aan door de jaren heen en evolueerde met de tijd.",
          keyPoints: [
            "Flexibiliteit in aanpak",
            "Aanpassing aan nieuwe generaties",
            "Evolutie van leiderschapsstijl",
            "Leren van ervaringen"
          ],
          quote: "Als je niet verandert, word je ingehaald.",
          example: "Ferguson paste zijn communicatiestijl aan toen hij met jongere spelers ging werken in de latere jaren."
        }
      ],
      corePhilosophy: {
        title: "Ferguson's Kernfilosofie",
        description: "De onderliggende principes die al Ferguson's beslissingen stuurden:",
        principles: [
          "Winnende mentaliteit is belangrijker dan individueel talent",
          "Discipline en respect zijn de basis van elk succesvol team",
          "Lange termijn denken gaat boven korte termijn resultaten",
          "Mentale sterkte kan worden ontwikkeld en is cruciaal voor succes",
          "Leiderschap betekent moeilijke beslissingen nemen voor het grotere goed",
          "Voortdurende verbetering en leren zijn essentieel",
          "Het team staat altijd boven het individu"
        ]
      },
      modernApplications: {
        title: "Moderne Toepassingen",
        description: "Hoe Ferguson's principes toegepast kunnen worden in verschillende contexten:",
        applications: [
          {
            context: "Bedrijfsleiderschap",
            approach: "Discipline en standaarden handhaven, individuele benadering per medewerker",
            result: "Hogere prestaties en betere teamcohesie"
          },
          {
            context: "Sportcoaching",
            approach: "Mentale sterkte ontwikkelen, lange termijn visie hanteren",
            result: "Meer veerkrachtige atleten en duurzaam succes"
          },
          {
            context: "Onderwijsmanagement",
            approach: "Hoge verwachtingen stellen, individuele ondersteuning bieden",
            result: "Betere leerresultaten en sterkere schoolcultuur"
          }
        ]
      },
      keyLessons: [
        "Succes vereist zowel hoge standaarden als individuele zorg",
        "Discipline is niet het tegenovergestelde van zorg, maar een vorm ervan",
        "Mentale sterkte kan worden ontwikkeld en is vaak belangrijker dan talent",
        "Lange termijn denken leidt tot duurzamer succes dan korte termijn winst",
        "Echte leiders nemen moeilijke beslissingen voor het grotere goed",
        "Aanpassingsvermogen is essentieel voor langdurig succes",
        "Het bouwen van een winnende cultuur is belangrijker dan het winnen van individuele wedstrijden"
      ]
    }
  },
  {
    id: 'wiltschut',
    title: "Gezag vs Dominantie: Van Vugt & Wiltschut",
    description: "Mark van Vugt en Tom Wiltschut maken een cruciaal onderscheid tussen gezag (gewenst) en dominantie (te vermijden) in leiderschap.",
    content: {
      mainConcept: "Effectief leiderschap is gebaseerd op gezag (respect en vertrouwen) in plaats van dominantie (macht en controle). Dit onderscheid is cruciaal voor duurzaam en ethisch leiderschap.",
      gezag: [
        {
          characteristic: "Gebaseerd op Respect",
          description: "Mensen volgen je omdat ze je respecteren en vertrouwen in je capaciteiten.",
          sportExample: "Een aanvoerder die wordt gerespecteerd om zijn ervaring en wijsheid, niet omdat hij de loudste is."
        },
        {
          characteristic: "Verdiend Leiderschap",
          description: "Leiderschapspositie wordt verdiend door competentie, integriteit en prestaties.",
          sportExample: "Een trainer die autoriteit heeft opgebouwd door jarenlange ervaring en bewezen resultaten."
        },
        {
          characteristic: "Vrijwillige Volging",
          description: "Teamleden kiezen ervoor om je te volgen en zijn intrinsiek gemotiveerd.",
          sportExample: "Spelers die extra moeite doen omdat ze geloven in de visie van hun coach."
        },
        {
          characteristic: "Empathie en Begrip",
          description: "Toont interesse in het welzijn van teamleden en begrijpt hun perspectieven.",
          sportExample: "Een captain die luistert naar de zorgen van teamgenoten en rekening houdt met hun behoeften."
        },
        {
          characteristic: "Dienend Leiderschap",
          description: "Gebruikt leiderschapspositie om anderen te helpen groeien en succesvol te zijn.",
          sportExample: "Een ervaren speler die jongere teamgenoten mentort en helpt ontwikkelen."
        }
      ],
      dominantie: [
        {
          characteristic: "Gebaseerd op Macht",
          description: "Mensen volgen je uit angst voor consequenties of omdat ze geen keuze hebben.",
          sportExample: "Een trainer die spelers laat gehoorzamen door te dreigen met bankzitten of uitsluiting."
        },
        {
          characteristic: "Opgelegd Leiderschap",
          description: "Leiderschapspositie wordt afgedwongen door positie, dreigementen of manipulatie.",
          sportExample: "Een aanvoerder die zijn positie gebruikt om anderen te intimideren in plaats van te inspireren."
        },
        {
          characteristic: "Gedwongen Volging",
          description: "Teamleden volgen uit noodzaak, niet uit overtuiging, wat leidt tot minimale inzet.",
          sportExample: "Spelers die alleen het minimum doen omdat ze bang zijn voor de reactie van de coach."
        },
        {
          characteristic: "Gebrek aan Empathie",
          description: "Weinig interesse in het welzijn van anderen, focus ligt op eigen doelen en macht.",
          sportExample: "Een coach die spelers ziet als instrumenten voor eigen succes, niet als mensen."
        },
        {
          characteristic: "Zelfzuchtig Leiderschap",
          description: "Gebruikt leiderschapspositie primair voor eigen voordeel en status.",
          sportExample: "Een aanvoerder die alle eer opeist en anderen de schuld geeft van mislukkingen."
        }
      ],
      consequences: {
        gezag: "Leidt tot intrinsieke motivatie, creativiteit, loyaliteit, duurzame prestaties en positieve teamcultuur. Teamleden ontwikkelen zich en nemen eigenaarschap.",
        dominantie: "Resulteert in angst, weerstand, minimale inzet, hoog verloop en toxische cultuur. Teamleden worden passief en verliezen initiatief."
      },
      developingAuthority: [
        "Bouw competentie op door continue leren en ontwikkeling",
        "Toon integriteit door consistent en eerlijk gedrag",
        "Ontwikkel empathie door actief te luisteren naar teamleden",
        "Investeer in de ontwikkeling van anderen",
        "Wees transparant in communicatie en besluitvorming",
        "Neem verantwoordelijkheid voor zowel successen als mislukkingen",
        "Respecteer de waardigheid en autonomie van teamleden",
        "Focus op het dienen van het team in plaats van jezelf"
      ]
    }
  }
]

export default function LeadershipApp() {
  const [selectedTheory, setSelectedTheory] = useState<string | null>(null)
  const [readTheories, setReadTheories] = useState<string[]>([])
  const [showQuiz, setShowQuiz] = useState(false)
  const [points, setPoints] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [quizScore, setQuizScore] = useState(0)

  // Load saved progress from localStorage
  useEffect(() => {
    const savedReadTheories = localStorage.getItem('readTheories')
    const savedPoints = localStorage.getItem('points')
    const savedQuizCompleted = localStorage.getItem('quizCompleted')
    const savedQuizScore = localStorage.getItem('quizScore')
    
    if (savedReadTheories) {
      setReadTheories(JSON.parse(savedReadTheories))
    }
    if (savedPoints) {
      setPoints(parseInt(savedPoints))
    }
    if (savedQuizCompleted) {
      setQuizCompleted(JSON.parse(savedQuizCompleted))
    }
    if (savedQuizScore) {
      setQuizScore(parseInt(savedQuizScore))
    }
  }, [])

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('readTheories', JSON.stringify(readTheories))
    localStorage.setItem('points', points.toString())
    localStorage.setItem('quizCompleted', JSON.stringify(quizCompleted))
    localStorage.setItem('quizScore', quizScore.toString())
  }, [readTheories, points, quizCompleted, quizScore])

  const handleTheoryRead = (theoryId: string) => {
    if (!readTheories.includes(theoryId)) {
      setReadTheories([...readTheories, theoryId])
      setPoints(points + 50)
    }
  }

  const handleQuizComplete = (score: number, total: number) => {
    const quizPoints = score * 10
    setPoints(points + quizPoints)
    setQuizCompleted(true)
    setQuizScore(score)
  }

  const getProgressPercentage = () => {
    const totalTheories = theories.length
    const readCount = readTheories.length
    const quizBonus = quizCompleted ? 1 : 0
    return Math.round(((readCount + quizBonus) / (totalTheories + 1)) * 100)
  }

  const getProgressMessage = () => {
    const percentage = getProgressPercentage()
    if (percentage === 100) return "🏆 Gefeliciteerd! Je hebt alles voltooid!"
    if (percentage >= 80) return "🌟 Bijna klaar! Nog even volhouden!"
    if (percentage >= 60) return "💪 Goed bezig! Je bent op de goede weg!"
    if (percentage >= 40) return "📚 Mooi! Blijf lezen en leren!"
    if (percentage >= 20) return "🚀 Goede start! Ga zo door!"
    return "👋 Welkom! Begin met het lezen van de theorieën!"
  }

  if (showQuiz) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <button
            onClick={() => setShowQuiz(false)}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            ← Terug naar theorieën
          </button>
        </div>
        <QuizComponent onComplete={handleQuizComplete} />
      </div>
    )
  }

  if (selectedTheory) {
    const theory = theories.find(t => t.id === selectedTheory)
    if (!theory) return null

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <button
            onClick={() => setSelectedTheory(null)}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
          >
            ← Terug naar overzicht
          </button>
        </div>
        
        <TheoryCard
          theory={theory}
          isExpanded={true}
          onRead={() => handleTheoryRead(theory.id)}
          isRead={readTheories.includes(theory.id)}
        />
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🎯 Leiderschap in de Sport
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Voor HBO Sportkunde studenten - Leer de belangrijkste leiderschapstheorieën
        </p>
        
        {/* Progress Dashboard */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{points}</div>
              <div className="text-gray-600">Punten Verdiend</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {readTheories.length}/{theories.length}
              </div>
              <div className="text-gray-600">Theorieën Gelezen</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {getProgressPercentage()}%
              </div>
              <div className="text-gray-600">Voortgang</div>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${getProgressPercentage()}%` }}
              ></div>
            </div>
            <p className="text-center text-gray-600">{getProgressMessage()}</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setShowQuiz(true)}
          disabled={readTheories.length === 0}
          className={`px-8 py-4 rounded-lg font-bold text-lg transition-colors ${
            readTheories.length === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : quizCompleted
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-purple-600 text-white hover:bg-purple-700'
          }`}
        >
          {quizCompleted ? `🏆 Quiz Voltooid (${quizScore}/10)` : '🎯 Start Quiz'}
        </button>
      </div>

      {/* Theories Grid */}
      <div className="grid gap-8 max-w-6xl mx-auto">
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
              isRead={readTheories.includes(theory.id)}
            />
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-16 py-8 border-t border-gray-200">
        <p className="text-gray-600 mb-2">
          📚 Gemaakt voor HBO Sportkunde studenten
        </p>
        <p className="text-sm text-gray-500">
          Alle theorieën zijn gebaseerd op wetenschappelijke bronnen en toegepast op sportcontexten
        </p>
      </div>
    </div>
  )
}