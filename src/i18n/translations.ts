export type Language = 'pt-BR' | 'en' | 'es'

export interface Translations {
  // Header
  home: string
  about: string
  faq: string
  contact: string
  studentHouse: string

  // Home Page
  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  knowOurHistory: string
  visitUs: string
  yearsOfHistory: string
  activeStudents: string
  availablePorter: string
  selfManagedHouse: string
  knowOurStructure: string
  structureDescription: string
  whyChooseCEU: string
  whyChooseDescription: string
  readyToJoin: string
  readyToJoinDescription: string
  clarifyDoubts: string
  getInTouch: string

  // Features
  studentHousing: string
  studentHousingDesc: string
  activeCommunity: string
  activeCommunityDesc: string
  centralLocation: string
  centralLocationDesc: string
  completeStructure: string
  completeStructureDesc: string

  // About Page
  aboutTitle: string
  ourHistory: string
  ourHistoryText1: string
  ourHistoryText2: string
  ourHistoryText3: string
  mission: string
  missionText: string
  vision: string
  visionText: string
  values: string
  valuesText: string
  ourStructure: string
  structureItem1: string
  structureItem2: string
  structureItem3: string
  structureItem4: string
  structureItem5: string
  structureItem6: string

  // About Page - Timeline
  timelineFoundation: string
  timelineFoundationDesc: string
  timelineExpansion: string
  timelineExpansionDesc: string
  timelineRecognition: string
  timelineRecognitionDesc: string
  timelineModernization: string
  timelineModernizationDesc: string
  timelineLargest: string
  timelineLargestDesc: string

  // About Page - Values
  solidarity: string
  solidarityDesc: string
  community: string
  communityDesc: string
  excellence: string
  excellenceDesc: string
  inclusion: string
  inclusionDesc: string

  // About Page - Video Section
  videoSectionTitle: string
  videoSectionDesc: string

  // FAQ Page
  faqTitle: string
  faqDescription: string
  faqQ1: string
  faqA1: string
  faqQ2: string
  faqA2: string
  faqQ3: string
  faqA3: string
  faqQ4: string
  faqA4: string
  faqQ5: string
  faqA5: string
  faqQ6: string
  faqA6: string

  // Contact Page
  contactTitle: string
  contactDescription: string
  address: string
  phone: string
  generalEmail: string
  generalEmailDesc: string
  selectionEmail: string
  selectionEmailDesc: string
  followUs: string
  usefulLinks: string
  generalQuestions: string
  selectionProcess: string

  // Contact Page - Form
  sendYourMessage: string
  formDescription: string
  fullName: string
  email: string
  subject: string
  message: string
  fullNamePlaceholder: string
  emailPlaceholder: string
  selectSubject: string
  messagePlaceholder: string
  sending: string
  sendMessage: string
  loginToSend: string
  loginRequired: string
  emailCopyNotice: string

  // Contact Page - Form Subjects
  subjectGeneral: string
  subjectSelection: string
  subjectDocumentation: string
  subjectVisit: string
  subjectHousing: string
  subjectOthers: string

  // Contact Page - Info
  ourLocation: string
  publicTransport: string
  publicTransportDesc: string
  intercampi: string
  intercampiDesc: string
  downtownLocation: string
  downtownLocationDesc: string
  contactTips: string
  selectionEmailTip: string
  generalEmailTip: string
  phoneTip: string
  responseTime: string

  // Contact Page - Schedule
  weekdaySchedule: string
  saturdaySchedule: string

  // Login Messages
  loginToSendMessage: string
  loggedInAs: string
  loginSuccess: string
  loginError: string
  loginRequiredMessage: string
  messageSentSuccess: string
  messageSentError: string

  // Footer
  footerDescription: string
  allRightsReserved: string
  footerContact: string
  footerUsefulLinks: string
  homePage: string
  generalQuestionsFooter: string
}

export const translations: Record<Language, Translations> = {
  'pt-BR': {
    // Header
    home: 'Página Inicial',
    about: 'Conheça a CEU',
    faq: 'Dúvidas Frequentes',
    contact: 'Contate Nós',
    studentHouse: 'Casa do Estudante',

    // Home Page
    heroTitle: 'CEU - CASA DO ESTUDANTE UNIVERSITÁRIO',
    heroSubtitle: 'A maior Casa de Estudantes autogerida da América Latina',
    heroDescription: 'Mais que uma moradia, um lar para sua jornada acadêmica',
    knowOurHistory: 'Conheça Nossa História',
    visitUs: 'Visite-nos',
    yearsOfHistory: 'Anos de História',
    activeStudents: 'Estudantes Ativos',
    availablePorter: 'Portaria Disponível',
    selfManagedHouse: 'Casa Autogerida da AL',
    knowOurStructure: 'Conheça Nossa Estrutura',
    structureDescription: 'Espaços pensados para proporcionar o melhor ambiente de estudos e convivência',
    whyChooseCEU: 'Por que Escolher a CEU?',
    whyChooseDescription: 'Mais que uma moradia, um lar para sua jornada acadêmica',
    readyToJoin: 'Pronto para Fazer Parte da Nossa Comunidade?',
    readyToJoinDescription: 'Descubra como a CEU pode transformar sua experiência universitária',
    clarifyDoubts: 'Tire Suas Dúvidas',
    getInTouch: 'Entre em Contato',

    // Features
    studentHousing: 'Moradia Estudantil',
    studentHousingDesc: 'Quartos compartilhados confortáveis com mensalidade por rateio de R$ 300 a 400',
    activeCommunity: 'Comunidade Ativa',
    activeCommunityDesc: 'Convivência com estudantes de diversas áreas e regiões do Brasil',
    centralLocation: 'Localização Central',
    centralLocationDesc: 'Centro de Curitiba, próximo ao transporte público e Intercampi da UFPR',
    completeStructure: 'Estrutura Completa',
    completeStructureDesc: 'Biblioteca, salas de estudo, quadra esportiva, portaria 24h e muito mais',

    // About Page
    aboutTitle: 'Conheça a CEU',
    ourHistory: 'Nossa História',
    ourHistoryText1: 'A Casa do Estudante Universitário (CEU) foi fundada em 1948 com o objetivo de proporcionar moradia acessível e de qualidade para estudantes universitários que vêm de diferentes regiões do Brasil para estudar em Curitiba.',
    ourHistoryText2: 'Ao longo de mais de 70 anos de história, a CEU se consolidou como a maior casa de estudantes autogerida da América Latina, acolhendo milhares de estudantes e contribuindo significativamente para a formação acadêmica e pessoal de seus moradores.',
    ourHistoryText3: 'Hoje, a CEU continua sua missão de oferecer não apenas moradia, mas um verdadeiro lar, onde os estudantes podem desenvolver suas habilidades acadêmicas, sociais e profissionais em um ambiente acolhedor e colaborativo.',
    mission: 'Missão',
    missionText: 'Proporcionar moradia estudantil de qualidade, promovendo o desenvolvimento acadêmico, social e pessoal dos estudantes universitários através de um ambiente colaborativo e autogerido.',
    vision: 'Visão',
    visionText: 'Ser referência em moradia estudantil autogerida na América Latina, reconhecida pela excelência no acolhimento e desenvolvimento integral dos estudantes.',
    values: 'Valores',
    valuesText: 'Solidariedade, Autogestão, Respeito à Diversidade, Responsabilidade Coletiva, Desenvolvimento Acadêmico e Pessoal.',
    ourStructure: 'Nossa Estrutura',
    structureItem1: 'Quartos compartilhados equipados',
    structureItem2: 'Biblioteca e salas de estudo',
    structureItem3: 'Quadra esportiva',
    structureItem4: 'Áreas de convivência',
    structureItem5: 'Cozinha coletiva',
    structureItem6: 'Portaria 24 horas',

    // About Page - Timeline
    timelineFoundation: 'Fundação da CEU',
    timelineFoundationDesc: 'Criada por estudantes universitários com o sonho de uma moradia estudantil autogerida',
    timelineExpansion: 'Expansão das Instalações',
    timelineExpansionDesc: 'Ampliação da capacidade para atender mais estudantes de todo o Brasil',
    timelineRecognition: 'Reconhecimento Nacional',
    timelineRecognitionDesc: 'Tornou-se referência em moradia estudantil autogerida no país',
    timelineModernization: 'Modernização',
    timelineModernizationDesc: 'Renovação completa das instalações com tecnologia moderna',
    timelineLargest: 'Maior da América Latina',
    timelineLargestDesc: 'Reconhecida como a maior casa de estudantes autogerida da América Latina',

    // About Page - Values
    solidarity: 'Solidariedade',
    solidarityDesc: 'Cultivamos o espírito de ajuda mútua e apoio entre os moradores',
    community: 'Comunidade',
    communityDesc: 'Valorizamos a diversidade e a convivência harmoniosa entre estudantes',
    excellence: 'Excelência',
    excellenceDesc: 'Buscamos sempre oferecer o melhor ambiente para o desenvolvimento acadêmico',
    inclusion: 'Inclusão',
    inclusionDesc: 'Acolhemos estudantes de todas as regiões, promovendo integração cultural',

    // About Page - Video Section
    videoSectionTitle: 'Conheça Nossa Estrutura',
    videoSectionDesc: 'Assista ao vídeo e veja de perto todos os espaços e instalações que a CEU oferece aos estudantes',

    // FAQ Page
    faqTitle: 'Dúvidas Frequentes',
    faqDescription: 'Encontre respostas para as perguntas mais comuns sobre a CEU',
    faqQ1: 'Quem pode se candidatar para morar na CEU?',
    faqA1: 'Podem se candidatar estudantes universitários regularmente matriculados em instituições de ensino superior de Curitiba e região metropolitana. É necessário comprovar a necessidade de moradia estudantil e participar do processo seletivo.',
    faqQ2: 'Qual o valor da mensalidade?',
    faqA2: 'A mensalidade é definida por rateio entre os moradores e varia entre R$ 300 e R$ 400, incluindo despesas básicas de manutenção da casa. O valor pode variar conforme o número de moradores e custos operacionais.',
    faqQ3: 'Como funciona o processo seletivo?',
    faqA3: 'O processo seletivo ocorre periodicamente e envolve análise de documentação, entrevista e avaliação socioeconômica. Os candidatos devem demonstrar necessidade de moradia e compromisso com os valores da casa.',
    faqQ4: 'A CEU oferece alimentação?',
    faqA4: 'A CEU possui cozinha coletiva onde os moradores podem preparar suas próprias refeições. Não há serviço de alimentação incluso na mensalidade, mas a estrutura permite que os estudantes cozinhem de forma econômica.',
    faqQ5: 'Quais são as regras de convivência?',
    faqA5: 'A CEU é uma casa autogerida, onde todos os moradores participam das decisões e da manutenção. Existem regras de convivência estabelecidas coletivamente, incluindo horários, limpeza, uso de espaços comuns e respeito mútuo.',
    faqQ6: 'Posso receber visitas?',
    faqA6: 'Sim, visitas são permitidas respeitando os horários e regras estabelecidas pela casa. É importante comunicar previamente e seguir as normas de convivência para garantir o conforto de todos os moradores.',

    // Contact Page
    contactTitle: 'Entre em Contato',
    contactDescription: 'Estamos aqui para ajudar. Entre em contato conosco através dos canais abaixo.',
    address: 'Endereço',
    phone: 'Telefone',
    generalEmail: 'E-mail Geral',
    generalEmailDesc: 'Para questões gerais',
    selectionEmail: 'Processo Seletivo',
    selectionEmailDesc: 'Para dúvidas sobre seleção',
    followUs: 'Siga-nos',
    usefulLinks: 'Links Úteis',
    generalQuestions: 'Questões gerais',
    selectionProcess: 'Processo Seletivo',

    // Contact Page - Form
    sendYourMessage: 'Envie sua Mensagem',
    formDescription: 'Preencha o formulário e entraremos em contato em breve',
    fullName: 'Nome Completo',
    email: 'E-mail',
    subject: 'Assunto',
    message: 'Mensagem',
    fullNamePlaceholder: 'Seu nome completo',
    emailPlaceholder: 'seu@email.com',
    selectSubject: 'Selecione o assunto',
    messagePlaceholder: 'Descreva sua dúvida ou mensagem...',
    sending: 'Enviando...',
    sendMessage: 'Enviar Mensagem',
    loginToSend: 'Faça Login para Enviar',
    loginRequired: 'Você precisa fazer login para enviar mensagens',
    emailCopyNotice: 'Uma cópia da mensagem será enviada para',

    // Contact Page - Form Subjects
    subjectGeneral: 'Informações Gerais',
    subjectSelection: 'Processo Seletivo',
    subjectDocumentation: 'Documentação',
    subjectVisit: 'Visita à Casa',
    subjectHousing: 'Moradia',
    subjectOthers: 'Outros',

    // Contact Page - Info
    ourLocation: 'Nossa Localização',
    publicTransport: 'Transporte Público',
    publicTransportDesc: 'Fácil acesso por ônibus urbano',
    intercampi: 'Intercampi UFPR',
    intercampiDesc: 'Próximo às paradas',
    downtownLocation: 'Centro de Curitiba',
    downtownLocationDesc: 'Localização privilegiada',
    contactTips: 'Dicas para Contato',
    selectionEmailTip: 'Para processo seletivo, use: processoseletivo@ceupr.org.br',
    generalEmailTip: 'Para questões gerais, use: comunicacao@ceupr.com.br',
    phoneTip: 'Telefone: (41) 3324-1984',
    responseTime: 'Resposta em até 48 horas úteis',

    // Contact Page - Schedule
    weekdaySchedule: 'Segunda a Sexta: 8h às 18h',
    saturdaySchedule: 'Sábados: 8h às 12h',

    // Login Messages
    loginToSendMessage: 'Fazer Login para Enviar Mensagem',
    loggedInAs: 'Logado como',
    loginSuccess: 'Login realizado com sucesso!',
    loginError: 'Erro ao fazer login. Tente novamente.',
    loginRequiredMessage: 'Você precisa fazer login para enviar mensagens.',
    messageSentSuccess: 'Mensagem enviada com sucesso! Você receberá uma cópia no seu e-mail.',
    messageSentError: 'Erro ao enviar mensagem. Tente novamente.',

    // Footer
    footerDescription: 'Oferecendo moradia estudantil de qualidade há mais de 50 anos, proporcionando um ambiente seguro e acolhedor para estudantes universitários.',
    allRightsReserved: 'Todos os direitos reservados',
    footerContact: 'Contato',
    footerUsefulLinks: 'Links Úteis',
    homePage: 'Página Inicial',
    generalQuestionsFooter: 'Questões gerais',
  },

  'en': {
    // Header
    home: 'Home',
    about: 'About CEU',
    faq: 'FAQ',
    contact: 'Contact Us',
    studentHouse: 'Student House',

    // Home Page
    heroTitle: 'CEU - UNIVERSITY STUDENT HOUSE',
    heroSubtitle: 'The largest self-managed Student House in Latin America',
    heroDescription: 'More than housing, a home for your academic journey',
    knowOurHistory: 'Know Our History',
    visitUs: 'Visit Us',
    yearsOfHistory: 'Years of History',
    activeStudents: 'Active Students',
    availablePorter: 'Available Porter',
    selfManagedHouse: 'Self-Managed House in LA',
    knowOurStructure: 'Know Our Structure',
    structureDescription: 'Spaces designed to provide the best study and living environment',
    whyChooseCEU: 'Why Choose CEU?',
    whyChooseDescription: 'More than housing, a home for your academic journey',
    readyToJoin: 'Ready to Join Our Community?',
    readyToJoinDescription: 'Discover how CEU can transform your university experience',
    clarifyDoubts: 'Clarify Your Doubts',
    getInTouch: 'Get in Touch',

    // Features
    studentHousing: 'Student Housing',
    studentHousingDesc: 'Comfortable shared rooms with monthly fees ranging from R$ 300 to 400',
    activeCommunity: 'Active Community',
    activeCommunityDesc: 'Living with students from different areas and regions of Brazil',
    centralLocation: 'Central Location',
    centralLocationDesc: 'Downtown Curitiba, close to public transport and UFPR Intercampus',
    completeStructure: 'Complete Structure',
    completeStructureDesc: 'Library, study rooms, sports court, 24h reception and much more',

    // About Page
    aboutTitle: 'About CEU',
    ourHistory: 'Our History',
    ourHistoryText1: 'The University Student House (CEU) was founded in 1948 with the goal of providing affordable and quality housing for university students coming from different regions of Brazil to study in Curitiba.',
    ourHistoryText2: 'Over more than 70 years of history, CEU has established itself as the largest self-managed student house in Latin America, welcoming thousands of students and contributing significantly to the academic and personal development of its residents.',
    ourHistoryText3: 'Today, CEU continues its mission to offer not just housing, but a true home, where students can develop their academic, social and professional skills in a welcoming and collaborative environment.',
    mission: 'Mission',
    missionText: 'To provide quality student housing, promoting the academic, social and personal development of university students through a collaborative and self-managed environment.',
    vision: 'Vision',
    visionText: 'To be a reference in self-managed student housing in Latin America, recognized for excellence in welcoming and comprehensive development of students.',
    values: 'Values',
    valuesText: 'Solidarity, Self-Management, Respect for Diversity, Collective Responsibility, Academic and Personal Development.',
    ourStructure: 'Our Structure',
    structureItem1: 'Equipped shared rooms',
    structureItem2: 'Library and study rooms',
    structureItem3: 'Sports court',
    structureItem4: 'Common areas',
    structureItem5: 'Collective kitchen',
    structureItem6: '24-hour reception',

    // About Page - Timeline
    timelineFoundation: 'CEU Foundation',
    timelineFoundationDesc: 'Created by university students with the dream of a self-managed student housing',
    timelineExpansion: 'Facilities Expansion',
    timelineExpansionDesc: 'Capacity expansion to serve more students from all over Brazil',
    timelineRecognition: 'National Recognition',
    timelineRecognitionDesc: 'Became a reference in self-managed student housing in the country',
    timelineModernization: 'Modernization',
    timelineModernizationDesc: 'Complete renovation of facilities with modern technology',
    timelineLargest: 'Largest in Latin America',
    timelineLargestDesc: 'Recognized as the largest self-managed student house in Latin America',

    // About Page - Values
    solidarity: 'Solidarity',
    solidarityDesc: 'We cultivate the spirit of mutual help and support among residents',
    community: 'Community',
    communityDesc: 'We value diversity and harmonious coexistence among students',
    excellence: 'Excellence',
    excellenceDesc: 'We always seek to offer the best environment for academic development',
    inclusion: 'Inclusion',
    inclusionDesc: 'We welcome students from all regions, promoting cultural integration',

    // About Page - Video Section
    videoSectionTitle: 'Get to Know Our Structure',
    videoSectionDesc: 'Watch the video and see up close all the spaces and facilities that CEU offers to students',

    // FAQ Page
    faqTitle: 'Frequently Asked Questions',
    faqDescription: 'Find answers to the most common questions about CEU',
    faqQ1: 'Who can apply to live at CEU?',
    faqA1: 'University students regularly enrolled in higher education institutions in Curitiba and the metropolitan region can apply. It is necessary to prove the need for student housing and participate in the selection process.',
    faqQ2: 'What is the monthly fee?',
    faqA2: 'The monthly fee is defined by sharing among residents and ranges from R$ 300 to R$ 400, including basic house maintenance expenses. The amount may vary according to the number of residents and operational costs.',
    faqQ3: 'How does the selection process work?',
    faqA3: 'The selection process occurs periodically and involves documentation analysis, interview and socioeconomic evaluation. Candidates must demonstrate housing need and commitment to the house values.',
    faqQ4: 'Does CEU offer meals?',
    faqA4: 'CEU has a collective kitchen where residents can prepare their own meals. There is no meal service included in the monthly fee, but the structure allows students to cook economically.',
    faqQ5: 'What are the coexistence rules?',
    faqA5: 'CEU is a self-managed house, where all residents participate in decisions and maintenance. There are collectively established coexistence rules, including schedules, cleaning, use of common spaces and mutual respect.',
    faqQ6: 'Can I receive visitors?',
    faqA6: 'Yes, visitors are allowed respecting the schedules and rules established by the house. It is important to communicate in advance and follow the coexistence norms to ensure the comfort of all residents.',

    // Contact Page
    contactTitle: 'Contact Us',
    contactDescription: 'We are here to help. Contact us through the channels below.',
    address: 'Address',
    phone: 'Phone',
    generalEmail: 'General Email',
    generalEmailDesc: 'For general questions',
    selectionEmail: 'Selection Process',
    selectionEmailDesc: 'For selection inquiries',
    followUs: 'Follow Us',
    usefulLinks: 'Useful Links',
    generalQuestions: 'General questions',
    selectionProcess: 'Selection Process',

    // Contact Page - Form
    sendYourMessage: 'Send Your Message',
    formDescription: 'Fill out the form and we will contact you soon',
    fullName: 'Full Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    fullNamePlaceholder: 'Your full name',
    emailPlaceholder: 'your@email.com',
    selectSubject: 'Select subject',
    messagePlaceholder: 'Describe your question or message...',
    sending: 'Sending...',
    sendMessage: 'Send Message',
    loginToSend: 'Login to Send',
    loginRequired: 'You need to login to send messages',
    emailCopyNotice: 'A copy of the message will be sent to',

    // Contact Page - Form Subjects
    subjectGeneral: 'General Information',
    subjectSelection: 'Selection Process',
    subjectDocumentation: 'Documentation',
    subjectVisit: 'House Visit',
    subjectHousing: 'Housing',
    subjectOthers: 'Others',

    // Contact Page - Info
    ourLocation: 'Our Location',
    publicTransport: 'Public Transport',
    publicTransportDesc: 'Easy access by city bus',
    intercampi: 'UFPR Intercampus',
    intercampiDesc: 'Close to stops',
    downtownLocation: 'Downtown Curitiba',
    downtownLocationDesc: 'Prime location',
    contactTips: 'Contact Tips',
    selectionEmailTip: 'For selection process, use: processoseletivo@ceupr.org.br',
    generalEmailTip: 'For general questions, use: comunicacao@ceupr.com.br',
    phoneTip: 'Phone: (41) 3324-1984',
    responseTime: 'Response within 48 business hours',

    // Contact Page - Schedule
    weekdaySchedule: 'Monday to Friday: 8am to 6pm',
    saturdaySchedule: 'Saturdays: 8am to 12pm',

    // Login Messages
    loginToSendMessage: 'Login to Send Message',
    loggedInAs: 'Logged in as',
    loginSuccess: 'Successfully logged in!',
    loginError: 'Error logging in. Please try again.',
    loginRequiredMessage: 'You need to login to send messages.',
    messageSentSuccess: 'Message sent successfully! You will receive a copy in your email.',
    messageSentError: 'Error sending message. Please try again.',

    // Footer
    footerDescription: 'Offering quality student housing for over 50 years, providing a safe and welcoming environment for university students.',
    allRightsReserved: 'All rights reserved',
    footerContact: 'Contact',
    footerUsefulLinks: 'Useful Links',
    homePage: 'Home',
    generalQuestionsFooter: 'General questions',
  },

  'es': {
    // Header
    home: 'Inicio',
    about: 'Conozca CEU',
    faq: 'Preguntas Frecuentes',
    contact: 'Contáctenos',
    studentHouse: 'Casa del Estudiante',

    // Home Page
    heroTitle: 'CEU - CASA DEL ESTUDIANTE UNIVERSITARIO',
    heroSubtitle: 'La mayor Casa de Estudiantes autogestionada de América Latina',
    heroDescription: 'Más que una vivienda, un hogar para tu viaje académico',
    knowOurHistory: 'Conozca Nuestra Historia',
    visitUs: 'Visítenos',
    yearsOfHistory: 'Años de Historia',
    activeStudents: 'Estudiantes Activos',
    availablePorter: 'Portería Disponible',
    selfManagedHouse: 'Casa Autogestionada de AL',
    knowOurStructure: 'Conozca Nuestra Estructura',
    structureDescription: 'Espacios diseñados para proporcionar el mejor ambiente de estudio y convivencia',
    whyChooseCEU: '¿Por qué Elegir CEU?',
    whyChooseDescription: 'Más que una vivienda, un hogar para tu viaje académico',
    readyToJoin: '¿Listo para Formar Parte de Nuestra Comunidad?',
    readyToJoinDescription: 'Descubra cómo CEU puede transformar su experiencia universitaria',
    clarifyDoubts: 'Aclare Sus Dudas',
    getInTouch: 'Póngase en Contacto',

    // Features
    studentHousing: 'Vivienda Estudiantil',
    studentHousingDesc: 'Habitaciones compartidas cómodas con cuota mensual de R$ 300 a 400',
    activeCommunity: 'Comunidad Activa',
    activeCommunityDesc: 'Convivencia con estudiantes de diferentes áreas y regiones de Brasil',
    centralLocation: 'Ubicación Central',
    centralLocationDesc: 'Centro de Curitiba, cerca del transporte público e Intercampi de UFPR',
    completeStructure: 'Estructura Completa',
    completeStructureDesc: 'Biblioteca, salas de estudio, cancha deportiva, portería 24h y mucho más',

    // About Page
    aboutTitle: 'Conozca CEU',
    ourHistory: 'Nuestra Historia',
    ourHistoryText1: 'La Casa del Estudiante Universitario (CEU) fue fundada en 1948 con el objetivo de proporcionar vivienda accesible y de calidad para estudiantes universitarios que vienen de diferentes regiones de Brasil para estudiar en Curitiba.',
    ourHistoryText2: 'A lo largo de más de 70 años de historia, CEU se ha consolidado como la mayor casa de estudiantes autogestionada de América Latina, acogiendo a miles de estudiantes y contribuyendo significativamente a la formación académica y personal de sus residentes.',
    ourHistoryText3: 'Hoy, CEU continúa su misión de ofrecer no solo vivienda, sino un verdadero hogar, donde los estudiantes pueden desarrollar sus habilidades académicas, sociales y profesionales en un ambiente acogedor y colaborativo.',
    mission: 'Misión',
    missionText: 'Proporcionar vivienda estudiantil de calidad, promoviendo el desarrollo académico, social y personal de los estudiantes universitarios a través de un ambiente colaborativo y autogestionado.',
    vision: 'Visión',
    visionText: 'Ser referencia en vivienda estudiantil autogestionada en América Latina, reconocida por la excelencia en la acogida y desarrollo integral de los estudiantes.',
    values: 'Valores',
    valuesText: 'Solidaridad, Autogestión, Respeto a la Diversidad, Responsabilidad Colectiva, Desarrollo Académico y Personal.',
    ourStructure: 'Nuestra Estructura',
    structureItem1: 'Habitaciones compartidas equipadas',
    structureItem2: 'Biblioteca y salas de estudio',
    structureItem3: 'Cancha deportiva',
    structureItem4: 'Áreas de convivencia',
    structureItem5: 'Cocina colectiva',
    structureItem6: 'Portería 24 horas',

    // About Page - Timeline
    timelineFoundation: 'Fundación de CEU',
    timelineFoundationDesc: 'Creada por estudiantes universitarios con el sueño de una vivienda estudiantil autogestionada',
    timelineExpansion: 'Expansión de Instalaciones',
    timelineExpansionDesc: 'Ampliación de la capacidad para atender más estudiantes de todo Brasil',
    timelineRecognition: 'Reconocimiento Nacional',
    timelineRecognitionDesc: 'Se convirtió en referencia en vivienda estudiantil autogestionada en el país',
    timelineModernization: 'Modernización',
    timelineModernizationDesc: 'Renovación completa de las instalaciones con tecnología moderna',
    timelineLargest: 'Mayor de América Latina',
    timelineLargestDesc: 'Reconocida como la mayor casa de estudiantes autogestionada de América Latina',

    // About Page - Values
    solidarity: 'Solidaridad',
    solidarityDesc: 'Cultivamos el espíritu de ayuda mutua y apoyo entre los residentes',
    community: 'Comunidad',
    communityDesc: 'Valoramos la diversidad y la convivencia armoniosa entre estudiantes',
    excellence: 'Excelencia',
    excellenceDesc: 'Buscamos siempre ofrecer el mejor ambiente para el desarrollo académico',
    inclusion: 'Inclusión',
    inclusionDesc: 'Acogemos estudiantes de todas las regiones, promoviendo integración cultural',

    // About Page - Video Section
    videoSectionTitle: 'Conozca Nuestra Estructura',
    videoSectionDesc: 'Vea el video y conozca de cerca todos los espacios e instalaciones que CEU ofrece a los estudiantes',

    // FAQ Page
    faqTitle: 'Preguntas Frecuentes',
    faqDescription: 'Encuentre respuestas a las preguntas más comunes sobre CEU',
    faqQ1: '¿Quién puede postularse para vivir en CEU?',
    faqA1: 'Pueden postularse estudiantes universitarios regularmente matriculados en instituciones de educación superior de Curitiba y región metropolitana. Es necesario comprobar la necesidad de vivienda estudantil y participar del proceso de selección.',
    faqQ2: '¿Cuál es el valor de la cuota mensual?',
    faqA2: 'La cuota mensual se define por prorrateo entre los residentes y varía entre R$ 300 y R$ 400, incluyendo gastos básicos de mantenimiento de la casa. El valor puede variar según el número de residentes y costos operacionales.',
    faqQ3: '¿Cómo funciona el proceso de selección?',
    faqA3: 'El proceso de selección ocurre periódicamente e involucra análisis de documentación, entrevista y evaluación socioeconómica. Los candidatos deben demostrar necesidad de vivienda y compromiso con los valores de la casa.',
    faqQ4: '¿CEU ofrece alimentación?',
    faqA4: 'CEU tiene cocina colectiva donde los residentes pueden preparar sus propias comidas. No hay servicio de alimentación incluido en la cuota mensual, pero la estructura permite que los estudiantes cocinen de forma económica.',
    faqQ5: '¿Cuáles son las reglas de convivencia?',
    faqA5: 'CEU es una casa autogestionada, donde todos los residentes participan de las decisiones y del mantenimiento. Existen reglas de convivencia establecidas colectivamente, incluyendo horarios, limpieza, uso de espacios comunes y respeto mutuo.',
    faqQ6: '¿Puedo recibir visitas?',
    faqA6: 'Sí, las visitas están permitidas respetando los horarios y reglas establecidas por la casa. Es importante comunicar previamente y seguir las normas de convivencia para garantizar la comodidad de todos los residentes.',

    // Contact Page
    contactTitle: 'Contáctenos',
    contactDescription: 'Estamos aquí para ayudar. Contáctenos a través de los canales a continuación.',
    address: 'Dirección',
    phone: 'Teléfono',
    generalEmail: 'Correo General',
    generalEmailDesc: 'Para preguntas generales',
    selectionEmail: 'Proceso de Selección',
    selectionEmailDesc: 'Para dudas sobre selección',
    followUs: 'Síguenos',
    usefulLinks: 'Enlaces Útiles',
    generalQuestions: 'Preguntas generales',
    selectionProcess: 'Proceso de Selección',

    // Contact Page - Form
    sendYourMessage: 'Envíe su Mensaje',
    formDescription: 'Complete el formulario y nos pondremos en contacto pronto',
    fullName: 'Nombre Completo',
    email: 'Correo Electrónico',
    subject: 'Asunto',
    message: 'Mensaje',
    fullNamePlaceholder: 'Su nombre completo',
    emailPlaceholder: 'su@email.com',
    selectSubject: 'Seleccione el asunto',
    messagePlaceholder: 'Describa su duda o mensaje...',
    sending: 'Enviando...',
    sendMessage: 'Enviar Mensaje',
    loginToSend: 'Iniciar Sesión para Enviar',
    loginRequired: 'Necesita iniciar sesión para enviar mensajes',
    emailCopyNotice: 'Se enviará una copia del mensaje a',

    // Contact Page - Form Subjects
    subjectGeneral: 'Información General',
    subjectSelection: 'Proceso de Selección',
    subjectDocumentation: 'Documentación',
    subjectVisit: 'Visita a la Casa',
    subjectHousing: 'Vivienda',
    subjectOthers: 'Otros',

    // Contact Page - Info
    ourLocation: 'Nuestra Ubicación',
    publicTransport: 'Transporte Público',
    publicTransportDesc: 'Fácil acceso en autobús urbano',
    intercampi: 'Intercampi UFPR',
    intercampiDesc: 'Cerca de las paradas',
    downtownLocation: 'Centro de Curitiba',
    downtownLocationDesc: 'Ubicación privilegiada',
    contactTips: 'Consejos para Contacto',
    selectionEmailTip: 'Para proceso de selección, use: processoseletivo@ceupr.org.br',
    generalEmailTip: 'Para preguntas generales, use: comunicacao@ceupr.com.br',
    phoneTip: 'Teléfono: (41) 3324-1984',
    responseTime: 'Respuesta en hasta 48 horas hábiles',

    // Contact Page - Schedule
    weekdaySchedule: 'Lunes a Viernes: 8h a 18h',
    saturdaySchedule: 'Sábados: 8h a 12h',

    // Login Messages
    loginToSendMessage: 'Iniciar Sesión para Enviar Mensaje',
    loggedInAs: 'Conectado como',
    loginSuccess: '¡Inicio de sesión exitoso!',
    loginError: 'Error al iniciar sesión. Inténtelo de nuevo.',
    loginRequiredMessage: 'Necesita iniciar sesión para enviar mensajes.',
    messageSentSuccess: '¡Mensaje enviado con éxito! Recibirá una copia en su correo electrónico.',
    messageSentError: 'Error al enviar mensaje. Inténtelo de nuevo.',

    // Footer
    footerDescription: 'Ofreciendo vivienda estudiantil de calidad desde hace más de 50 años, proporcionando un ambiente seguro y acogedor para estudiantes universitarios.',
    allRightsReserved: 'Todos los derechos reservados',
    footerContact: 'Contacto',
    footerUsefulLinks: 'Enlaces Útiles',
    homePage: 'Inicio',
    generalQuestionsFooter: 'Preguntas generales',
  },
}
