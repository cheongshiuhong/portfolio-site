export const projects = {
  'full-stack-web-application-for-shopee': {
    title: 'Full Stack Web Application',
    subtitle: 'Built for Shopee\'s Regional Finance Team - Image Intentionally Blurred',
    description: `
      Developed from scratch with <strong>docker-compose</strong> to containerize the backend, celery workers & scheduler, and frontend. 
      Backend built with <strong>Django</strong>, including a management system for the team\'s use and <strong>REST API</strong> for the frontend. 
      Automations done by <strong>Celery</strong> workers for asynchronous execution, including tasks like scraping and processing data from multiple sources and emailing. 
      Frontend built with <strong>Next.js</strong> (<strong>React.js</strong>), styled with <strong>Material-UI</strong> for organisation-wide users. (Image intentionally blurred)
    `,
    image: '/media/images/fswa_blurred_light.png',
    darkModeImage: '/media/images/fswa_blurred_dark.png',
    startDate: 'Dec 2020',
    endDate: 'Jan 2021',
    codeUrl: 'https://www.shopee.com',
    projectUrl: '',
    experience: 'shopee-automation-internship',
    skillsToShow: 4,
    skills: [
      'docker',      
      'python',
      'django',
      'celery',
      'javascript',
      'react-js',
      'next-js',
      'material-ui',
    ],
    files: [],
  },
  'ubs-international-quant-hackathon-2020': {
    title: 'UBS International Quant Hackathon 2020',
    subtitle: 'Top 7% (Ranked 23/371)',
    description: `
      Applied machine learning techniques to Complex Derivatives Pricing with dataset of >16 million rows.
      Key steps include: dimensionality reduction with PCA, clustering and fitting each cluster with a decision tree regressor.
    `,
    image: '/media/images/ubs_logo.png',
    startDate: 'Sep 2020',
    endDate: 'Oct 2020',
    codeUrl: '',
    projectUrl: '',
    experience: '',
    skillsToShow: 2,
    skills: [
      'python',
      'machine-learning',
    ],
    files: [],
    teammates: [
      'darren-mok',
    ],
  },
  'gsheets-api-gui': {
    title: 'Google Sheets API Graphical User Interface',
    subtitle: 'Built for Shopee\'s Regional Finance Team - Image Intentionally Blurred',
    description: `
      Built for non-technical users to manipulate and move data by utilizing <strong>Google APIs</strong>, 
      with manipulation done in <strong>Python</strong>/<strong>Pandas</strong> triggered by a Graphical User Interface built with 
      <strong>HTML</strong>/<strong>CSS</strong>/<strong>JS</strong>, communicating via <strong>Eel</strong>.        
    `,
    image: '/media/images/gsheet_ui_blurred.png',
    startDate: 'Sep 2020',
    endDate: 'Sep 2020',
    codeUrl: '',
    projectUrl: '',
    experience: 'shopee-automation-internship',
    skillsToShow: 4,
    skills: [
      'python',
      'pandas',
      'javascript',
      'html',
      'css',
      'eel',
    ],
    files: [],
  },
  'modern-portfolio-theory-sig': {
    title: 'Modern Portfolio Theory Demonstration',
    subtitle: 'Prepared for SUSS Investment Interest Group',
    description: 'Mean variance optimisation, simulation',
    image: '/media/images/mpt_sig.png',
    startDate : 'Mar 2020',
    endDate: 'Mar 2020',
    codeUrl: 'https://github.com/cheongshiuhong/mpt-demo-sig',
    projectUrl: 'https://cheongshiuhong.github.io/mpt-demo-sig/',
    experience: '',
    skillsToShow: 2,
    skills: [
      'modern-portfolio-theory',
      'python',
      'numpy',
      'pandas',
      'scipy',
    ],
    files: [],
  },
  'cfa-research-challenge-2020': {
    title: 'CFA National Research Challenge 2020',
    subtitle: 'National Finalist',
    description: 'Used book value to estimate WACC ROFL',
    image: '/media/images/cfa_presenting.jpg',
    startDate: 'Dec 2019',
    endDate: 'Feb 2020',
    codeUrl: '',
    projectUrl: '',
    experience: '',
    skillsToShow: 3,
    skills: [
      'equity-valuation',
    ],
    files: [
      {
        title: 'Report',
        url: '/media/files/CFA_Research_Challenge_2020_report.pdf',
        thumbnail: '/media/images/cfa_report_thumbnail.png',
      },
      {
        title: 'Slide Deck',
        url: '/media/files/CFA_Research_Challenge_2020_ppt.pdf',
        thumbnail: '/media/images/cfa_ppt_thumbnail.png',
      },
    ],
    teammates: [
      'charlton-koh',
      'daniel-nyau',
      'joven-chiam',
      'rick-chua',
    ],
  },
  'mcgill-international-portfolio-challenge-2019' : {
    title: 'McGill International Portfolio Challenge 2019',
    subtitle: 'International Finalist',
    description: `Took part in the McGill International Portfolio Competition, being one of the teams invited to Montreal, Canada among 87 teams worldwide from renowned universities like Yale and Sydney.`,
    image: '/media/images/mcgill_team.jpg',
    startDate: 'Sep 2019',
    endDate: 'Nov 2019',
    codeUrl: '',
    projectUrl: '',
    experience: '',
    skillsToShow: 3,
    skills: [
      'modern-portfolio-theory',
      'python',
    ],
    files: [
      {
        title: 'Report',
        url: '/media/files/McGill_International_Portfolio_Challenge_2020_report.pdf',
        thumbnail: '/media/images/mcgill_report_thumbnail.png',
      },
      {
        title: 'Slide Deck',
        url: '/media/files/McGill_International_Portfolio_Challenge_2020_ppt.pdf',
        thumbnail: '/media/images/mcgill_ppt_thumbnail.png',
      }
    ],
    teammates: [
      'chia-rui-yang',
      'prerit-keertikar',
      'sean-ong',
    ],
  },
  'gerontechnology-research': {
    title: 'Gerontechnology Research',
    subtitle: 'Gerontechnology Research in Social Ageing',
    description: 'Examining the Perception and Usage of Infocomm Technologies in Socially Engaging the Elderly',
    image: '/media/images/suss_logo.jpg',
    startDate: 'Aug 2019',
    endDate: 'Oct 2019',
    codeUrl: '',
    projectUrl: '',
    experience: '',
    skillsToShow: 0,
    skills: [],
    files: [
      {
        title: 'Report',
        url: '/media/files/Design_X_report.pdf',
        thumbnail: '/media/images/design_x_report_thumbnail.png',
        
      }
    ],
    teammates: [
      'chia-rui-yang',
      'glennis-lee',
      'leroy-lim',
    ],
  },
  'machine-learning-workshop': {
    title: 'Machine Learning Workshop Materials',
    subtitle: 'Prepared for the Singapore University of Social Sciences',
    description: `
      Prepared for the Singapore University of Social Sciences as a Teaching Assistant. 
      Content covers the basic requirements in math, gradient descent, linear and logistic regressions, and neural networks.
    `,
    image: '/media/images/ml_workshop.png',
    startDate: 'Jun 2020',
    endDate: 'Jul 2020',
    codeUrl: 'https://github.com/cheongshiuhong/machinelearningworkshop',
    projectUrl: 'https://cheongshiuhong.github.io/machinelearningworkshop/',
    experience: 'suss-teaching-assistant',
    skillsToShow: 3,
    skills: [
      'python',
      'machine-learning',
      'numpy',
      'keras',
      'pandas',
    ],
    files: [],
  },
  'shopee-national-data-science-challenge-2019' : {
    title: 'Shopee National Data Science Challenge 2019 (Advanced)',
    subtitle: 'Top 14% (Ranked 15/111)',
    description: `
      Implemented a neural network solution for product category extraction from product titles, with zero/few-shot learning in consideration, translating to a model that scales well for adding new label categories in the future.
      Utilized and experimented with Word2Vec and GloVe embedding to vectorize natural language, which is then passed into GRU-based neural networks, measuring the context of the product title text against its label text, to ultimately categorize each title based on its cosine similarity.
    `,
    image: '/media/images/ndsc.png',
    startDate: 'Feb 2019',
    endDate: 'Mar 2019', 
    codeUrl: 'https://github.com/cheongshiuhong/shopee-ndsc-advanced-2019',
    projectUrl: 'https://cheongshiuhong.github.io/shopee-ndsc-advanced-2019/',
    experience: '',
    skillsToShow: 3,
    skills: [
      'python', 
      'machine-learning', 
      'pytorch'
    ],
    files: [],
  },
}