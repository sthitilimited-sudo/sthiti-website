/* =========================================================
   STHITI LIMITED — DATA STORE
   Edit this file to update site content.
   ========================================================= */
'use strict';

window.MAIN_CATEGORIES = [
  {key:'all',         label:'All Work'},
  {key:'architecture',label:'Architecture'},
  {key:'masterplan',  label:'Masterplan'},
  {key:'landscape',   label:'Landscape'},
  {key:'interior',    label:'Interior'},
  {key:'construction',label:'Construction Mgmt'}
];

window.MAIN_CATEGORY_MAP = {
  architecture: ['residential','commercial','civic','healthcare'],
  masterplan:   ['masterplan'],
  landscape:    ['landscape'],
  interior:     ['interior'],
  construction: ['construction']
};

window.CATEGORY_LABELS = {
  residential:  'Residential',
  commercial:   'Commercial',
  civic:        'Civic & Cultural',
  healthcare:   'Healthcare',
  masterplan:   'Masterplan',
  landscape:    'Landscape',
  interior:     'Interior',
  construction: 'Construction'
};

window.DEFAULT_PROJECTS = [
  {
    id: 1, title: 'Police Liberation War Museum', location: 'Rajarbag, Dhaka',
    category: 'civic', year: '2017', featured: true,
    brief: 'The studio\u2019s founding commission. A civic memorial to the role of Bangladesh Police in the 1971 Liberation War \u2014 organised around the Red Path procession route, the Black Box of testimony, and the central rotunda of contemplative quotation walls. Delivered four days ahead of schedule.',
    photos: [
      { src: 'police_war_museum_central1.jpg', label: 'Central Rotunda \u2014 Testimony Wall' },
      { src: 'police_war_museum_central2.jpg', label: 'Central Rotunda \u2014 Display Plinths' },
      { src: 'police_war_museum_2017.jpg',     label: 'Inauguration Photograph, 2017' },
      { src: 'police_war_museum_red_path.jpg', label: 'The Red Path \u2014 Procession Route' },
      { src: 'police_war_museum_black_box.jpg',label: 'The Black Box \u2014 Memorial Chamber' }
    ]
  },
  {
    id: 2, title: 'Doyal Residence', location: 'Tikatuli, Dhaka',
    category: 'interior', year: '2024', featured: true,
    brief: 'A family home interior in old Dhaka emphasising warm material palettes, custom marble tile inlay, terracotta detail walls, and a contemplative terrace landscape. Living, dining, kitchen, master bedroom and entrance are unified through a continuous millwork and lighting language.',
    photos: [
      { src: 'doyal_residence_living.jpg',             label: 'Living \u2014 Custom Marble Tile' },
      { src: 'doyal_residence_custom_tiles.jpg',       label: 'Living \u2014 Custom Tile Detail' },
      { src: 'doyal_residence_living_terracotta.jpg',  label: 'Living \u2014 Terracotta Wall' },
      { src: 'doyal_residence_dining.jpg',             label: 'Dining & Lavatory Space' },
      { src: 'doyal_residence_kitchen.jpg',            label: 'Kitchen \u2014 Open Plan' },
      { src: 'doyal_residence_kitchen2.jpg',           label: 'Kitchen \u2014 Detail View' },
      { src: 'doyal_residence_masterbed.jpg',          label: 'Master Bedroom' },
      { src: 'doyal_residence_masterbed2.jpg',         label: 'Master Bedroom \u2014 Alt View' },
      { src: 'doyal_residence_entrance.jpg',           label: 'Vertical Garden \u2014 Entrance' },
      { src: 'doyal_residence_terrace.jpg',            label: 'Terrace Landscape' }
    ]
  },
  {
    id: 3, title: 'Sobuj Residence', location: 'Mirpur 10, Dhaka',
    category: 'interior', year: '2025', featured: true,
    brief: 'A complete residential interior across six core spaces \u2014 living, dining, master bedroom, child bedroom, entrance and bathroom. Soft contemporary tone with restrained ornamentation and layered indirect lighting throughout.',
    photos: [
      { src: 'sobuj_residence_living.jpg',     label: 'Living Room' },
      { src: 'sobuj_residence_dining.jpg',     label: 'Dining' },
      { src: 'sobuj_residence_masterbed.jpg',  label: 'Master Bedroom' },
      { src: 'sobuj_residence_childbed.jpg',   label: 'Child Bedroom' },
      { src: 'sobuj_residence_entrance.jpg',   label: 'Entrance Foyer' },
      { src: 'sobuj_residence_bathroom.jpg',   label: 'Bathroom' }
    ]
  },
  {
    id: 4, title: 'Samiul Residence', location: 'Mirpur 10, Dhaka',
    category: 'interior', year: '2024', featured: true,
    brief: 'A family apartment interior with a calm, wood-rich palette. Dining and bedrooms anchor the public-facing rooms; the entrance foyer establishes the threshold language. Kitchen and master bedroom complete the brief.',
    photos: [
      { src: 'samiul_residence_dining.jpg',    label: 'Dining Space' },
      { src: 'samiul_residence_kitchen.jpg',   label: 'Kitchen' },
      { src: 'samiul_residence_masterbed.jpg', label: 'Master Bedroom' },
      { src: 'samiul_residence_childbed.jpg',  label: 'Child Bedroom' },
      { src: 'samiul_residence_entrance.jpg',  label: 'Entrance Foyer' },
      { src: 'samiul_residence_progress.jpg',  label: 'Work in Progress' }
    ]
  },
  {
    id: 5, title: 'Shefali Residence', location: 'Sherpur, Bangladesh',
    category: 'residential', year: '2025', featured: true,
    brief: 'A standalone residence in Sherpur. The brick fa\u00e7ade is animated by suspended green planters between masonry masses \u2014 a balance of cultivated landscape and architectural mass.',
    photos: [
      { src: 'shefali_residence_exterior.jpg', label: 'Front Elevation' }
    ]
  },
  {
    id: 6, title: 'Apartments at Kawla', location: 'Kawla, Dhaka',
    category: 'residential', year: '2025', featured: false,
    brief: 'A multi-unit residential building combining warm brick with vertical planted screens and recessed balconies \u2014 a contemporary reading of the Dhaka apartment typology.',
    photos: [
      { src: 'kawla_apartments_exterior.jpg', label: 'Night View \u2014 Front Elevation' }
    ]
  },
  {
    id: 7, title: 'Apartment Building at POHS', location: 'POHS, Dhaka',
    category: 'residential', year: '2024', featured: false,
    brief: 'A residential apartment building in the Police Officers\u2019 Housing Society. The brick-clad fa\u00e7ade emphasises slender vertical proportions and a recessed entry court.',
    photos: [
      { src: 'pohs_apartment_exterior.jpg', label: 'Front Elevation' }
    ]
  },
  {
    id: 8, title: 'BEPZA Economic Zone Masterplan', location: 'Mirsarai, Chittagong',
    category: 'masterplan', year: '2024', featured: true,
    brief: 'Strategic masterplan input for the BEPZA Economic Zone in Mirsarai, Chittagong \u2014 a large-scale industrial and infrastructural framework with a central lake as the principal civic anchor.',
    photos: [
      { src: 'bepza_masterplan_aerial.jpg', label: 'Aerial Site Plan' }
    ]
  },
  {
    id: 9, title: 'Netrokona University Masterplan', location: 'Netrokona, Bangladesh',
    category: 'masterplan', year: 'January 2019', featured: true,
    brief: 'A proposed campus masterplan for Netrokona University. Phase 03 organises academic, residential and recreational precincts around a central water body and a continuous green corridor that connects the campus to its rural setting. Status \u2014 Proposed.',
    photos: [
      { src: 'netrokona_university_masterplan.jpg', label: 'Phase 03 \u2014 Proposed Masterplan' }
    ]
  },
  {
    id: 10, title: 'Daudpur General Hospital', location: 'Daudpur, Rupgonj, Narayanganj',
    category: 'healthcare', year: 'Dec 2024 — Present', featured: true,
    brief: 'A neighbourhood general hospital for Daudpur. The brick fa\u00e7ade carries the public identity from the street; inside, a calm reception sequence leads to clinical wards organised for a small community catchment. Currently in construction.',
    photos: [
      { src: 'dgh_hospital_exterior.jpg',   label: 'Front Elevation \u2014 Brick Fa\u00e7ade' },
      { src: 'dgh_hospital_reception.jpg',  label: 'Reception \u2014 Information & Accounts' },
      { src: 'dgh_hospital_ward.jpg',       label: 'Ward Configuration' }
    ]
  },
  {
    id: 11, title: 'Narail Vacation House', location: 'Lohagora, Narail',
    category: 'residential', year: 'Mar 2023 — Nov 2024', featured: true,
    brief: 'A family vacation residence on a rural plot in Lohagora, Narail. Brick massing is broken by punched perforations and timber screens; the night view across the paddy fields, framed by a roof-deck pergola, is the principal civic moment of the house. Completed November 2024.',
    photos: [
      { src: 'narail_vacation_house_exterior_day.jpg',  label: 'Day Elevation' },
      { src: 'narail_vacation_house_night_terrace.jpg', label: 'Night \u2014 Terrace Pergola, Paddy View' },
      { src: 'narail_vacation_house_night_exterior.jpg',label: 'Night \u2014 Garden Approach' }
    ]
  }
];

window.ACTIVE_ARCHITECTS = [
  { id:'tajbir', name:'Tajbir Ahmed Khan Rupok', role:'Founder & Principal Architect', email:'tajbir@sthitilimited.com',
    photo:'team/Tajbir_Ahmed_Rupok.jpg', timeline:'2016 \u2014 Present',
    expertise:['Architectural Design','Civic Architecture','Project Direction','Studio Leadership','Master Planning'],
    experience:'Tajbir founded Sthiti on 16 December 2016 under the name Sthiti Sthapotto, incorporated as Sthiti Limited in December 2025. He led the founding commission \u2014 the Bangladesh Police Liberation War Museum at Rajarbag \u2014 and has anchored every major project since, across residential, civic, healthcare, masterplan and interior briefs.',
    enrich:'Tajbir brings the studio its design language and project authority. He sets the visual standard, signs off every drawing set, and maintains direct relationships with clients from brief to handover.',
    acknowledgement:'Sthiti Limited acknowledges Tajbir Ahmed Khan Rupok as the founder, principal architect and unbroken line of authority through ten years of practice.',
    links:{facebook:'',instagram:'',x:'',linkedin:''} },
  { id:'mazhar', name:'Mazhar Uddin Chowdhury Prince', role:'Director and Managing Partner', email:'mazhar@sthitilimited.com',
    photo:'team/Mazharuddin_Chowdhury.jpg', timeline:'2019 \u2014 Present',
    expertise:['Architectural Design','Interior Architecture','Construction Documentation','Detail Resolution','Project Direction'],
    experience:'Mazhar joined Sthiti in 2022 as a partner and Director. Previously at DWM4 Internds, his PMG Gallery project was awarded by the Institute of Architects Bangladesh (IAB) in 2023. He now serves as Director and Managing Partner at Sthiti Limited.',
    enrich:'As Director, Mazhar carries technical detail and documentation across the studio\u2019s most demanding projects. His drawing precision and on-site judgement keep complex commissions buildable.',
    acknowledgement:'Sthiti Limited acknowledges Mazhar Uddin Chowdhury Prince for sustained senior leadership, IAB-recognised contribution since 2019, and his role as Director.',
    links:{facebook:'',instagram:'',x:'',linkedin:''} },
  { id:'mahbub', name:'Mahbub Muhsin', role:'Architect', email:'mahbub@sthitilimited.com',
    photo:'team/Mahbub_Muhsin.jpg', timeline:'2020 \u2014 Present',
    expertise:['Architectural Design','Residential Interior','Material Specification'],
    experience:'Joined Sthiti in 2020. Background in architectural practice in Dhaka, with sustained focus on residential briefs from schematic design through tender support.',
    enrich:'Mahbub contributes to Sthiti\u2019s residential portfolio, holding design intent through documentation and tender stages.',
    acknowledgement:'Sthiti Limited acknowledges Mahbub Muhsin for continued contribution to the studio\u2019s residential and interior practice.',
    links:{facebook:'',instagram:'',x:'',linkedin:''} },
  { id:'mehedi', name:'Mehedi Hassan', role:'Architect', email:'mehedi@sthitilimited.com',
    photo:'team/Mehedi.jpg', timeline:'2021 \u2014 Present',
    expertise:['Architectural Design','3D Visualisation','Concept Development'],
    experience:'Joined Sthiti in 2021. Trained in architectural design with a strong visualisation practice; supports the studio across concept and presentation stages for active commissions.',
    enrich:'Mehedi anchors the studio\u2019s visualisation work and supports concept development across active projects.',
    acknowledgement:'Sthiti Limited acknowledges Mehedi Hassan for sustained contribution to design and visualisation.',
    links:{facebook:'',instagram:'',x:'',linkedin:''} },
  { id:'konal', name:'Konal Ahmed', role:'Architect', email:'konal@sthitilimited.com',
    photo:'team/Konal_Ahmed.jpg', timeline:'2022 \u2014 Present',
    expertise:['Architectural Design','Site Documentation'],
    experience:'Joined Sthiti in 2022. Architectural training with focus on documentation and site coordination across the studio\u2019s active commissions.',
    enrich:'Konal supports project documentation and site coordination.',
    acknowledgement:'Sthiti Limited acknowledges Konal Ahmed for continued contribution.',
    links:{facebook:'',instagram:'',x:'',linkedin:''} }
];

window.ACTIVE_ENGINEERS = [
  { id:'fazlur', name:'MD Fazlur Rahman', role:'Chief Engineer', email:'fazlur@sthitilimited.com',
    photo:'', timeline:'2019 \u2014 Present',
    expertise:['Structural Engineering','RCC Design','Site Supervision','Construction Management'],
    experience:'BSc and MSc in Civil Engineering. Career-long focus on structural design and site management for residential, healthcare and civic projects across Bangladesh.',
    enrich:'Fazlur leads structural design and construction management for every Sthiti project. He bridges the architect\u2019s intent and the contractor\u2019s buildable reality.',
    acknowledgement:'Sthiti Limited acknowledges MD Fazlur Rahman as Chief Engineer and head of structural authority.',
    links:{facebook:'',instagram:'',x:'',linkedin:''} }
];

window.ACTIVE_ADMIN = [
  { id:'nazmul', name:'Nazmul Shohan', role:'Head of Admin & Accounts', email:'nazmul@sthitilimited.com',
    photo:'team/Nazmul_Shohan.jpg', timeline:'2020 \u2014 Present',
    expertise:['Office Administration','Accounts','Client Liaison','Project Coordination'],
    experience:'Nazmul leads administration and accounts for Sthiti Limited, managing client liaison, invoicing, and the operational rhythm of the studio.',
    enrich:'Nazmul keeps the studio running. Every project transaction, client communication and operational detail passes through his desk.',
    acknowledgement:'Sthiti Limited acknowledges Nazmul Shohan for sustained operational leadership of the studio.',
    links:{facebook:'',instagram:'',x:'',linkedin:''} }
];

/* Honorary Advisors — corrected per user direction */
window.ADVISORY_PANEL = [
  { id:'rafique', name:'Prof. Dr. Rafique Ullah Khan',
    role:'Aesthetics and Cultural Advisor, Sthiti Limited',
    email:'', photo:'team/Dr_Rafique_Ullah_Khan.jpg',
    timeline:'Advisor since 2023',
    counsel:'Counsel on cultural framing, language, and public voice of the practice.',
    expertise:['Cultural Counsel','Bengali Aesthetics','Literary Scholarship','Institutional Leadership'],
    experience:'Prof. Dr. Rafique Ullah Khan is one of Bangladesh\u2019s most distinguished academic minds \u2014 a celebrated literary scholar, essayist, researcher, and critic whose contributions have profoundly shaped the study of Bengali literature, culture, and aesthetics.\n\nA Professor of Bangla at the University of Dhaka, Dr. Khan is widely revered for his exceptional ability to illuminate the depths of Bengali cultural and behavioural aesthetics. His lectures are celebrated for transforming complex literary and cultural concepts into deeply engaging intellectual experiences.\n\nHis scholarly research spans Bengali novels and modern poetry, with deep focus on iconic literary figures including Michael Madhusudan Dutt, Rabindranath Tagore, Kazi Nazrul Islam, and Hasan Hafizur Rahman. In recognition of his exceptional contributions to research and literary scholarship, Dr. Khan was honoured with the prestigious Bangla Academy Literary Award in 2017.\n\nA towering figure in the global Bengali literary community, Dr. Khan served as President of the International Bengal Literature Council \u2014 a position of immense distinction, in which he was succeeded by the legendary Professor Anisuzzaman.\n\nBeyond academia, Dr. Khan has demonstrated outstanding leadership as the founding Vice-Chancellor of Netrokona University, Bangladesh, where he guided the institution\u2019s academic vision and development.',
    enrich:'As Aesthetics and Cultural Advisor to Sthiti Limited, Dr. Khan brings intellectual gravitas, cultural sensitivity, and a profound appreciation for Bengali heritage and aesthetics \u2014 enriching the firm\u2019s architectural philosophy with a deep understanding of the cultural soul of Bangladesh.',
    acknowledgement:'Sthiti Limited acknowledges Prof. Dr. Rafique Ullah Khan for entrusting our founding civic commission and for continued honorary advisory since 2023.',
    links:{facebook:'https://www.facebook.com/rafiqueullah.khan.52',instagram:'',x:'',linkedin:''} },
  { id:'rabbi', name:'Shaikh Mohammad Saleh Rabbi',
    role:'Strategic Advisor, Sthiti Limited',
    email:'', photo:'team/Shaikh_Mohammad_Saleh_Rabbi.jpg',
    timeline:'Advisor since 2024',
    counsel:'Strategy for the studio\u2019s journal, public communication, and long-form architectural writing.',
    expertise:['Content Strategy','Brand Communication','Editorial Direction','Philosophical Counsel'],
    experience:'Shaikh Mohammad Saleh Rabbi is a seasoned writer, editor, content strategist, and media professional with nearly a decade of experience in Bangladesh\u2019s communication and media landscape.\n\nCurrently serving as Content Strategist at BRAC, one of the world\u2019s largest development organisations, Rabbi brings a rare combination of creative depth and strategic thinking to everything he does. His career spans some of Bangladesh\u2019s most prominent media institutions \u2014 including Jamuna Television, BDNews24 Publishing Limited, Bangla Tribune, ICE Media Ltd, Bengal Foundation, and Nymphea \u2014 where he crafted well-researched communication and content across diverse platforms.\n\nA philosopher by academic training, Rabbi holds a Master\u2019s degree in Philosophy from the University of Dhaka, which lends his work a thoughtful, analytical dimension rarely found in the media world. He describes himself as a troubadour with a knack for creating engaging, purposeful content.',
    enrich:'As Strategic Advisor to Sthiti Limited, Rabbi contributes his expertise in brand communication, narrative strategy, and content development \u2014 helping the firm articulate its design philosophy and connect meaningfully with its audience.',
    acknowledgement:'Sthiti Limited acknowledges Shaikh Mohammad Saleh Rabbi for editorial and philosophical counsel since 2024.',
    links:{facebook:'https://www.facebook.com/SRJ007',instagram:'',x:'',linkedin:''} },
  { id:'kajal', name:'Kajal Abdullah',
    role:'Strategic Advisor, Sthiti Limited',
    email:'', photo:'team/Kajal_Abdullah.jpg',
    timeline:'Advisor since 2024',
    counsel:'Counsel on climate-resilient design, product thinking, and sustainable transportation interfaces with architecture.',
    expertise:['Maritime Innovation','Data Analytics','Heritage Preservation','Strategic Leadership'],
    experience:'Kajal Abdullah is a Dhaka-based tech entrepreneur, maritime innovator, and development sector leader with over 13 years of experience across globally acclaimed organisations including BBC, UNDP, and BRAC.\n\nHe is the Co-Founder and Chief Executive Officer of Jahaji Ltd., a technology and data analytics company transforming Bangladesh\u2019s inland water transport sector through digital innovation. Under his leadership, Jahaji has emerged as a pioneering force in maritime logistics, leveraging data to modernise cargo vessel operations across the country.\n\nPrior to Jahaji, Kajal served as CEO of the 1971: Genocide-Torture Archive & Museum \u2014 the only genocide museum in South Asia. At BRAC, he led Knowledge Management initiatives in partnership with Facebook, serving over 10,000 staff members. His earlier career included communications and reporting roles at the BBC and UNDP Bangladesh.\n\nA guest lecturer at the University of Dhaka and a case co-author in the Bangladesh edition of Philip Kotler\u2019s Essentials of Modern Marketing, Kajal brings strategic depth, institutional credibility, and entrepreneurial insight to his advisory role.',
    enrich:'As Strategic Advisor to Sthiti Limited, he also serves as Curator and Advisor of the Police Liberation War Museum \u2014 a role that reflects his lifelong commitment to preserving Bangladesh\u2019s national heritage and historical identity.',
    acknowledgement:'Sthiti Limited acknowledges Kajal Abdullah for strategic and heritage counsel since 2024.',
    links:{facebook:'https://www.facebook.com/kajalabdullah',instagram:'',x:'',linkedin:''} }
];

window.CONTRIB_DIRECTORS = [
  { id:'sakib', name:'Nazmus Sakib', role:'Past Director', email:'',
    photo:'team/Nazmus_Sakib.jpg', timeline:'2016 \u2014 2019',
    expertise:['Studio Direction','Founding Team'],
    experience:'Founding director of Sthiti Sthapotto. Contributed to early studio direction including the Police Liberation War Museum founding commission.',
    enrich:'Sakib\u2019s founding-era contribution helped establish Sthiti\u2019s civic and institutional voice.',
    acknowledgement:'Sthiti Limited acknowledges Nazmus Sakib for founding-era directorship 2016\u20132019.',
    links:{facebook:'',instagram:'',x:'',linkedin:''} },
  { id:'raihan', name:'Saiful Islam Raihan', role:'Past Director', email:'',
    photo:'team/Raihan.jpg', timeline:'2016 \u2014 2019',
    expertise:['Studio Direction','Founding Team'],
    experience:'Founding director of Sthiti Sthapotto. Contributed to studio identity and early project delivery.',
    enrich:'Raihan\u2019s founding-era contribution helped shape Sthiti\u2019s studio identity.',
    acknowledgement:'Sthiti Limited acknowledges Saiful Islam Raihan for founding-era directorship 2016\u20132019.',
    links:{facebook:'',instagram:'',x:'',linkedin:''} }
];

window.CONTRIB_ARCHITECTS = [
  { id:'ratul', name:'Ratul Ahmed', role:'Past Architect', email:'', photo:'',
    timeline:'2018 \u2014 2021', expertise:['Architectural Design'],
    experience:'[Contributing architect \u2014 full background to be added by admin]',
    enrich:'Ratul contributed to project documentation during 2018\u20132021.',
    acknowledgement:'Sthiti Limited acknowledges Ratul Ahmed for contribution 2018\u20132021.',
    links:{facebook:'',instagram:'',x:'',linkedin:''} },
  { id:'nafia', name:'Nafia Sharmin', role:'Senior Architect & Design Coordinator', email:'', photo:'team/Nafia_Sharmin.jpg',
    timeline:'2018 \u2014 2019', expertise:['LEED-Certified Green Building','Sustainable Architecture','Design Coordination','Interior Aesthetics'],
    experience:'Nafia Sharmin is a Dhaka-based architect with a decade of professional experience spanning sustainable architecture, planning, design, and environment management.\n\nHer most notable expertise lies in LEED-certified green building design, having contributed to numerous RMG (Ready-Made Garment) industry projects that achieved LEED certification \u2014 reflecting her deep commitment to sustainable and environmentally responsible architecture.\n\nShe served as Senior Architect and Design Coordinator at Sthiti Limited (Oct 2018 \u2013 Jul 2019), where she played a pivotal role in shaping the firm\u2019s design direction and project coordination. She subsequently spent over six years as Senior Architect at Equal Engineers and Consultants (Dec 2019 \u2013 Mar 2026), further deepening her expertise in architectural design and construction. She currently serves as Design Architect at DBL Group, one of Bangladesh\u2019s premier industrial conglomerates, focusing on sustainable architecture and industrial design.\n\nBeyond technical architecture, Nafia brings a creative versatility \u2014 having worked on graphical wall art to enhance interior aesthetics and designed book covers \u2014 showcasing her multidisciplinary design sensibility.',
    enrich:'Nafia contributed to Sthiti\u2019s design direction and project coordination during a formative period of the studio.',
    acknowledgement:'Sthiti Limited acknowledges Nafia Sharmin for her contribution as Senior Architect and Design Coordinator 2018\u20132019.',
    links:{facebook:'https://www.facebook.com/Nafiaa18',instagram:'',x:'',linkedin:''} },
  { id:'farah', name:'Farah Chowdhury', role:'Architect & Artist', email:'', photo:'team/Farah_Chowdhury.jpg',
    timeline:'2018 \u2014 2021', expertise:['Architectural Communication','Humanitarian Development','Inclusive Design','Creative Arts'],
    experience:'Farah Chowdhury is a multidisciplinary professional uniquely positioned at the intersection of architecture, humanitarian development, and creative arts.\n\nA development and humanitarian professional by vocation, Farah specialises in people-centred programming, organisational culture, and inclusive systems design within the migration and community development sector. Her core expertise spans People & Culture Development, Learning & Development, Training of Trainers (TOT), Gender, Disability & Social Inclusion (GDI), Sustainable Community Planning, and Safe Migration Programming.\n\nAs an architectural communication specialist, she works at the intersection of people, culture, and systems \u2014 ensuring that built environments and design interventions are not only effective but inclusive, sustainable, and community-driven. Her experience includes designing and implementing large-scale programmes focused on skills development, migrant protection, health access, and climate-resilient livelihoods.\n\nBeyond her professional pursuits, Farah is a soul artist and casual photographer \u2014 a creative spirit whose artistic eye enriches her architectural vision.',
    enrich:'Farah contributed her extraordinary conceptual presentation skills during the Netrokona University masterplan, where Sthiti took first place in the design presentation.',
    acknowledgement:'Sthiti Limited acknowledges Farah Chowdhury for her contribution as Architect and Artist 2018\u20132021.',
    links:{facebook:'',instagram:'https://www.instagram.com/3t.haraf_oya',x:'',linkedin:''} },
  { id:'snahashish', name:'Snahashish Shaha', role:'Past Architect', email:'', photo:'team/Snahashish_Shaha.jpg',
    timeline:'2020 \u2014 2023', expertise:['Architectural Design','Visualisation'],
    experience:'[Contributing architect \u2014 full background to be added by admin]',
    enrich:'Snahashish contributed to design and visualisation 2020\u20132023.',
    acknowledgement:'Sthiti Limited acknowledges Snahashish Shaha for contribution 2020\u20132023.',
    links:{facebook:'',instagram:'',x:'',linkedin:''} },
  { id:'tehami', name:'Tehami Hasan', role:'Past Architect', email:'', photo:'team/Tehami_Hasan.jpg',
    timeline:'2021 \u2014 2024', expertise:['Architectural Design'],
    experience:'[Contributing architect \u2014 full background to be added by admin]',
    enrich:'Tehami contributed to project documentation 2021\u20132024.',
    acknowledgement:'Sthiti Limited acknowledges Tehami Hasan for contribution 2021\u20132024.',
    links:{facebook:'',instagram:'',x:'',linkedin:''} }
];

window.CONTRIB_ENGINEERS = [
  { id:'ayub', name:'Ayub Ali', role:'Past Diploma Engineer', email:'', photo:'',
    timeline:'2018 \u2014 2021', expertise:['Site Supervision','Construction Documentation'],
    experience:'[Contributing diploma engineer \u2014 full background to be added by admin]',
    enrich:'Ayub contributed to construction supervision 2018\u20132021.',
    acknowledgement:'Sthiti Limited acknowledges Ayub Ali for contribution 2018\u20132021.',
    links:{facebook:'',instagram:'',x:'',linkedin:''} },
  { id:'sabbir', name:'Sabbir Ahmed', role:'Past Diploma Engineer', email:'', photo:'',
    timeline:'2019 \u2014 2022', expertise:['Site Supervision','Quantity Estimation'],
    experience:'[Contributing diploma engineer \u2014 full background to be added by admin]',
    enrich:'Sabbir contributed to site supervision and estimation 2019\u20132022.',
    acknowledgement:'Sthiti Limited acknowledges Sabbir Ahmed for contribution 2019\u20132022.',
    links:{facebook:'',instagram:'',x:'',linkedin:''} }
];

/* Services & deliverables \u2014 each item gets its own deliverable.html page */
window.DISCIPLINES = [
  {
    key:'architecture', roman:'i', title:'Architecture',
    tagline:'Buildings that earn their place.',
    body:[
      'Concept to completion across residences, healthcare, civic, and commercial work. Every project starts with site, climate, and brief \u2014 never with a style. The form follows from what the place asks for.',
      'We draw at every scale: the overall massing, the section through the wall, the detail of a door head. Senior architects stay involved through every phase. No project is handed to a junior to finish quietly.'
    ],
    deliverables:[
      { id:'site-analysis',     title:'Site analysis & feasibility',           brief:'A walked, drawn and photographed reading of the site. Climate, orientation, neighbours, regulations and access \u2014 set down before a single plan is drawn. We test programme against ground reality and tell the client what the site can carry.' },
      { id:'schematic-design',  title:'Schematic design & concept presentation', brief:'The first design move \u2014 hand drawings, study models, three or four organising ideas presented side by side. The client chooses a direction; we sharpen it before commitment.' },
      { id:'design-development',title:'Design development & coordination',     brief:'The chosen scheme is resolved across architecture, structure, MEP and interior. Sections through every condition. Co-ordination drawings that resolve conflicts before they reach site.' },
      { id:'construction-docs', title:'Construction documentation',           brief:'A drawing set a contractor can build from without phoning the office every other day. Plans, sections, elevations, schedules, details \u2014 at the scales the trade actually needs.' },
      { id:'permits',           title:'Permit submission & approvals',         brief:'RAJUK / municipal submission, agency liaison, and the patient pursuit of stamps. We handle the paperwork so the design momentum is not lost to bureaucracy.' },
      { id:'tender',            title:'Tender support & contractor selection', brief:'Tender documents, BoQ checks, contractor pre-qualification, and a transparent comparison of bids. The client makes the choice; we make sure the choice is informed.' },
      { id:'site-supervision',  title:'Site supervision through completion',   brief:'Weekly site visits, RFI response, shop-drawing review, snag-list closeout. The design is held to its intent right through to handover.' }
    ]
  },
  {
    key:'masterplan', roman:'ii', title:'Masterplan',
    tagline:'Sites that organise themselves.',
    body:[
      'Strategic site-scale planning for industrial, educational, healthcare and mixed-use developments. The masterplan is not a coloured site plan; it is the framework that decides how every later building will sit, how vehicles and people will move, and how the landscape will hold the whole together.',
      'Recent work includes the BEPZA Economic Zone at Mirsarai (a large industrial framework with a central lake) and the proposed Netrokona University campus (academic precincts organised around water).'
    ],
    deliverables:[
      { id:'site-strategy',     title:'Site strategy & precinct definition',  brief:'How the site divides into precincts \u2014 academic, residential, recreational, civic, service \u2014 and how those precincts read against the surrounding landscape and infrastructure.' },
      { id:'circulation',       title:'Circulation & infrastructure framework', brief:'Vehicle, pedestrian and service movement systems. Primary, secondary and tertiary routes. Service spines. Emergency access. Drainage and utility corridors.' },
      { id:'landscape-frame',   title:'Landscape & water framework',           brief:'The green and blue armature of the site \u2014 lakes, canals, planted corridors, civic anchors. The water and the planting hold the masterplan together.' },
      { id:'phasing',           title:'Phasing & development sequence',        brief:'How the masterplan is built out over five, ten, twenty years. What goes first, what unlocks what, what can be deferred without compromising the framework.' },
      { id:'density-controls',  title:'Density & built-form controls',         brief:'Floor area ratios, building heights, setback rules, fa\u00e7ade controls. The guidance that lets later architects work freely within a coherent whole.' },
      { id:'sustainability',    title:'Sustainability & climate strategy',     brief:'Solar orientation, prevailing winds, stormwater retention, urban heat strategy. Climate logic embedded at the masterplan scale, not bolted on later.' },
      { id:'public-realm',      title:'Public realm & civic anchors',          brief:'Plazas, parks, gathering places, the routes between them. The masterplan\u2019s public dimension is its most important architecture.' }
    ]
  },
  {
    key:'landscape', roman:'iii', title:'Landscape',
    tagline:'The ground the building stands on.',
    body:[
      'Landscape is a peer discipline to architecture, not a finishing layer. From terrace gardens above old-Dhaka residences to planted fa\u00e7ades on apartment buildings to the framing landscape of a rural vacation house, the studio designs the ground plane with the same discipline as the building above it.',
      'We work with local planting palettes, water as a climate tool, and shaded ground as a programme element. The result is architecture that belongs to its site.'
    ],
    deliverables:[
      { id:'planting-design',   title:'Planting design & species selection',   brief:'A planting palette drawn from the local climate, water table and maintenance reality. Trees that will be there in twenty years, not just in the photograph.' },
      { id:'softscape',         title:'Softscape & ground modelling',          brief:'Ground levels, slopes, swales, planted beds, lawn. The civic shape of the open ground.' },
      { id:'hardscape',         title:'Hardscape & paving',                    brief:'Stone, brick, concrete and timber surfaces. Movement patterns, drainage falls, edge treatments.' },
      { id:'water',             title:'Water features & retention',            brief:'Ponds, channels, retention basins, irrigation networks. Water as climate tool and civic anchor.' },
      { id:'roof-terrace',      title:'Roof terraces & vertical greening',     brief:'Terrace gardens, planted screens, green walls. The vertical landscape of dense city sites.' },
      { id:'lighting',          title:'Landscape lighting design',             brief:'Path lighting, garden lighting, civic-scale night image. Lighting that reads the landscape\u2019s logic.' },
      { id:'site-furniture',    title:'Site furniture & details',              brief:'Benches, planters, bollards, edges, sign-plates. The custom hardware of a designed ground plane.' }
    ]
  },
  {
    key:'interior', roman:'iv', title:'Interior',
    tagline:'Rooms that hold their occupants.',
    body:[
      'A significant share of recent work. Complete residential interiors carried through bespoke millwork, custom marble inlay, terracotta detail, lighting layout, sanitary specification and finish documentation. The Doyal, Sobuj and Samiul residences are recent examples.',
      'The interior is not a decoration round; it is architecture at the scale of the body. The studio holds it to the same discipline.'
    ],
    deliverables:[
      { id:'interior-concept',  title:'Interior concept & material palette',   brief:'The first move \u2014 mood, materials, light, the overall feeling. Established before a single piece of joinery is drawn.' },
      { id:'space-planning',    title:'Space planning & furniture layout',     brief:'How each room is used, the flow between rooms, the position of furniture and fixed pieces.' },
      { id:'millwork',          title:'Bespoke millwork & joinery design',     brief:'Wardrobes, kitchens, vanities, partition screens. Designed, detailed and shop-drawn for local fabricators.' },
      { id:'finish-spec',       title:'Custom finishes & tile specification',  brief:'Marble inlay floors, terracotta detail walls, textured plasters, paint systems. Specification drawings the contractor cannot misread.' },
      { id:'lighting-design',   title:'Lighting design & layout',              brief:'Layered lighting plans \u2014 ambient, task, accent, decorative. Switch positions, dimmer zones, fixture schedules.' },
      { id:'soft-furnishing',   title:'Soft furnishings & curtain detailing',  brief:'Sofa, bed, curtain and rug specification. Fabric selection. Soft-furnishing schedule.' },
      { id:'interior-supervision', title:'Site supervision & handover',        brief:'Weekly visits during interior works. Mock-up review, snag-list, final cleaning protocol, handover documentation.' }
    ]
  },
  {
    key:'construction', roman:'v', title:'Construction Management',
    tagline:'The drawing standing up.',
    body:[
      'Led by Chief Engineer MD Fazlur Rahman, with on-site supervision and structural authority. Sthiti can hold the project from design through tender and site execution \u2014 one chain of responsibility, one accountable team.',
      'This is what holds the design line. Outsource construction, and the drawings start to drift. Keep it in the studio, and the building you handed over is the building you drew.'
    ],
    deliverables:[
      { id:'tender-package',    title:'Tender package preparation',            brief:'A complete tender package \u2014 drawings, BoQ, specification, conditions of contract \u2014 that bidders can price accurately and the client can compare honestly.' },
      { id:'contractor-select', title:'Contractor pre-qualification & selection', brief:'Track-record review, financial check, site visits to current work, transparent comparison of submitted bids.' },
      { id:'structural-coord',  title:'Structural design coordination',        brief:'In-house RCC design and external consultant coordination. The structure is sized to the architecture, not the other way round.' },
      { id:'site-supervision-cm', title:'On-site supervision & quality control', brief:'A site engineer present at every pour, every critical detail, every finish trade. Photographs, daily logs, weekly client reports.' },
      { id:'progress-billing',  title:'Progress monitoring & contractor billing', brief:'Weekly programme review, monthly billing certification, variation tracking, cost-to-complete forecasts.' },
      { id:'safety',            title:'Safety & site protocols',               brief:'PPE compliance, scaffold inspection, edge-protection, hot-work permits. Safety as a daily discipline, not a poster on the wall.' },
      { id:'handover',          title:'Handover & defects period',             brief:'Snag-list, mock-handover, formal handover with O&M manuals and as-built drawings. Defects-period response within agreed turn-around.' }
    ]
  }
];

window.COMPANY_SOCIAL = {
  facebook: 'https://web.facebook.com/profile.php?id=61584378235575',
  whatsapp: 'https://wa.me/8801724453300',
  x: '',
  instagram: '',
  linkedin: ''
};

window.JOURNAL_ENTRIES = [
  {
    id:'sthiti-ten-years',
    date:'December 2026',
    category:'Studio Note',
    hero:'images/police_war_museum_central1.jpg',
    title_html:'On <em>Sthiti</em> &mdash; ten years of a name.',
    excerpt:'The word \u201csthiti\u201d in Bengali carries the sense of a steady, abiding presence \u2014 not motion, not absence, but the quality of holding one\u2019s position in place and time. A decade in, the studio reflects on what that intention has come to mean in the work.',
    read_time:'6 min read'
  },
  {
    id:'brick-terracotta-dhaka-facade',
    date:'November 2026',
    category:'Project Note',
    hero:'images/doyal_residence_living_terracotta.jpg',
    title_html:'Brick, terracotta and the <em>Dhaka facade</em>.',
    excerpt:'From the Police Liberation War Museum at Rajarbag to recent apartment buildings at Kawla and POHS, the studio returns repeatedly to brick and terracotta as the primary skin. A short note on the material\u2019s climate logic and its everyday economy in Bangladesh.',
    read_time:'8 min read'
  },
  {
    id:'bepza-mirsarai-site-note',
    date:'October 2026',
    category:'Site Note',
    hero:'images/bepza_masterplan_aerial.jpg',
    title_html:'Notes from the <em>BEPZA</em> Economic Zone.',
    excerpt:'The masterplan brief at Mirsarai, Chittagong \u2014 a 1,150-acre industrial framework organised around a central lake. Some early thoughts on civic anchoring at industrial scale, and the place of water as an organising element in Bangladeshi planning.',
    read_time:'10 min read'
  },
  {
    id:'narail-vacation-house-night',
    date:'September 2026',
    category:'Project Note',
    hero:'images/narail_vacation_house_night_terrace.jpg',
    title_html:'A vacation house in <em>Narail</em> &mdash; on building outside the city.',
    excerpt:'The Narail Vacation House was completed in November 2024 after a twenty-month build. A reflection on what it asks of a studio to design and supervise a residential project five hours from Dhaka, and what rural Bangladesh teaches an architect.',
    read_time:'7 min read'
  },
  {
    id:'netrokona-water-campus',
    date:'August 2026',
    category:'Masterplan Note',
    hero:'images/netrokona_university_masterplan.jpg',
    title_html:'A water-led masterplan for <em>Netrokona University</em>.',
    excerpt:'The 2019 masterplan proposal for Netrokona University organised academic, residential and civic precincts around a central water body. A note on water as primary masterplan element in a haor-region landscape.',
    read_time:'9 min read'
  },
  {
    id:'interior-as-architecture',
    date:'July 2026',
    category:'Practice Note',
    hero:'images/doyal_residence_masterbed.jpg',
    title_html:'The interior is <em>architecture</em>, at the scale of the body.',
    excerpt:'Why the studio treats residential interiors with the same drawing discipline as a civic commission. A short essay on millwork, finish specification, and the line that runs from concept sketch to handover photograph.',
    read_time:'5 min read'
  }
];

window.findJournalEntry = function(id){
  var list = window.JOURNAL_ENTRIES || [];
  for(var i=0;i<list.length;i++){ if(list[i].id === id) return list[i]; }
  return null;
};

window.loadProjects = function(){
  try{
    var raw = localStorage.getItem('sthiti_projects');
    if(raw){ var parsed = JSON.parse(raw); if(Array.isArray(parsed)) return parsed; }
  }catch(e){}
  return window.DEFAULT_PROJECTS;
};

window.imgSrc = function(name){
  if(!name) return '';
  if(name.indexOf('http')===0) return name;
  if(name.indexOf('images/')===0) return name;
  if(name.indexOf('team/')===0) return name;
  return 'images/' + name;
};

window.findPerson = function(id){
  if(!id || typeof id !== 'string') return null;
  if(!/^[a-zA-Z0-9_]+$/.test(id)) return null;
  var all = [].concat(
    window.ACTIVE_ARCHITECTS || [],
    window.ACTIVE_ENGINEERS  || [],
    window.ACTIVE_ADMIN      || [],
    window.ADVISORY_PANEL    || [],
    window.CONTRIB_DIRECTORS || [],
    window.CONTRIB_ARCHITECTS|| [],
    window.CONTRIB_ENGINEERS || []
  );
  for(var i=0;i<all.length;i++){ if(all[i].id === id) return all[i]; }
  return null;
};

window.findPersonTab = function(id){
  if((window.ACTIVE_ARCHITECTS||[]).some(function(p){return p.id===id;})) return 'active';
  if((window.ACTIVE_ENGINEERS ||[]).some(function(p){return p.id===id;})) return 'active';
  if((window.ACTIVE_ADMIN     ||[]).some(function(p){return p.id===id;})) return 'active';
  if((window.ADVISORY_PANEL   ||[]).some(function(p){return p.id===id;})) return 'advisors';
  if((window.CONTRIB_DIRECTORS||[]).some(function(p){return p.id===id;})) return 'contributors';
  if((window.CONTRIB_ARCHITECTS||[]).some(function(p){return p.id===id;})) return 'contributors';
  if((window.CONTRIB_ENGINEERS ||[]).some(function(p){return p.id===id;})) return 'contributors';
  return 'active';
};

window.findProject = function(id){
  var n = parseInt(id, 10);
  if(!Number.isFinite(n) || n < 1 || n > 9999) return null;
  var arr = window.loadProjects();
  for(var i=0;i<arr.length;i++){ if(arr[i].id === n) return arr[i]; }
  return null;
};

window.findDiscipline = function(key){
  if(!key || typeof key !== 'string') return null;
  if(!/^[a-z]+$/.test(key)) return null;
  return (window.DISCIPLINES || []).find(function(d){ return d.key === key; }) || null;
};

window.findDeliverable = function(disciplineKey, deliverableId){
  var d = window.findDiscipline(disciplineKey);
  if(!d) return null;
  if(!/^[a-z0-9-]+$/.test(deliverableId)) return null;
  return (d.deliverables || []).find(function(x){ return x.id === deliverableId; }) || null;
};
