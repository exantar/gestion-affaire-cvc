const seedProjects = [
  {
    id: "aff-001",
    name: "Gymnase Saint-Exupéry",
    client: "Ville de Tours",
    city: "Tours",
    manager: "Axel Fournier",
    status: "travaux",
    revenue: 486000,
    progress: 62,
    nextDate: "2026-06-18",
    notes: "CTA posée. Attente validation DOE partiel et retour bureau de contrôle sur clapets CF.",
    lots: [
      { name: "Ventilation double flux", planned: 156000, committed: 104500 },
      { name: "Chauffage hydraulique", planned: 132000, committed: 91000 },
      { name: "Régulation GTB", planned: 64000, committed: 50500 },
      { name: "Sous-traitance calorifuge", planned: 38000, committed: 41000 }
    ],
    actions: [
      { label: "Relancer fournisseur registres motorisés", owner: "Achats", due: "2026-06-11", done: false },
      { label: "Envoyer CR de synthèse CVC", owner: "Axel", due: "2026-06-12", done: false },
      { label: "Valider PV équilibrage zone vestiaires", owner: "Mise au point", due: "2026-06-20", done: true }
    ],
    milestones: [
      { label: "Fin réseaux sous toiture", date: "2026-06-14" },
      { label: "Essais CTA", date: "2026-06-24" },
      { label: "OPR client", date: "2026-07-08" }
    ],
    purchases: [
      { theme: "Ventilation double flux", supplier: "Atlantic Pro", item: "CTA double flux", orderRef: "CDE-24031", amount: 74500, status: "livre" },
      { theme: "Régulation GTB", supplier: "Sider", item: "Registres motorisés", orderRef: "CDE-24044", amount: 12800, status: "commande" },
      { theme: "Sous-traitance calorifuge", supplier: "IsolPro", item: "Calorifuge réseaux", orderRef: "ST-24018", amount: 41000, status: "facture" }
    ],
    faes: [
      { label: "Situation travaux n°3", amount: 86000, due: "2026-06-30", status: "a_etablir" },
      { label: "Avenant clapets CF", amount: 9200, due: "2026-07-05", status: "a_valider" }
    ],
    hours: [
      { theme: "Ventilation double flux", task: "Pose gaines et terminaux", planned: 520, used: 342 },
      { theme: "Régulation GTB", task: "Mise au point / essais", planned: 120, used: 28 },
      { theme: "Chauffage hydraulique", task: "Encadrement chantier", planned: 180, used: 126 }
    ],
    timeEntries: [
      { technician: "Lucas Martin", date: "2026-06-08", theme: "Ventilation double flux", task: "Pose gaines vestiaires", hours: 7.5, note: "Réseaux zone nord terminés." },
      { technician: "Nora Benali", date: "2026-06-09", theme: "Régulation GTB", task: "Raccordement registres", hours: 6, note: "Attente deux servomoteurs." }
    ],
    goNoGo: {
      decision: "go",
      notes: "Affaire maîtrisée, planning tendu mais marge achats correcte.",
      criteria: [
        { label: "Marge attendue", weight: 30, score: 4, comment: "Marge cohérente avec les risques." },
        { label: "Capacité planning", weight: 25, score: 3, comment: "Coordination serrée sur les essais." },
        { label: "Complexité technique", weight: 20, score: 4, comment: "Solutions connues." },
        { label: "Risque client", weight: 25, score: 4, comment: "MOA réactive." }
      ]
    }
  },
  {
    id: "aff-002",
    name: "Plateau bureaux Horizon",
    client: "SCI Horizon",
    city: "Orléans",
    manager: "Axel Fournier",
    status: "etude",
    revenue: 218000,
    progress: 24,
    nextDate: "2026-06-13",
    notes: "Optimisation demandée sur terminaux plafonniers. Chiffrage variante DRV à comparer avec PAC eau glacée.",
    lots: [
      { name: "Études EXE", planned: 18500, committed: 12600 },
      { name: "DRV / unités intérieures", planned: 118000, committed: 0 },
      { name: "Ventilation bureaux", planned: 51000, committed: 8500 },
      { name: "Pilotage et sondes", planned: 24500, committed: 0 }
    ],
    actions: [
      { label: "Chiffrer variante diffusion linéaire", owner: "BE", due: "2026-06-10", done: false },
      { label: "Demander plans architecte indice C", owner: "Axel", due: "2026-06-12", done: false }
    ],
    milestones: [
      { label: "Remise offre optimisée", date: "2026-06-16" },
      { label: "Bouclage technique client", date: "2026-06-22" }
    ],
    purchases: [
      { theme: "DRV / unités intérieures", supplier: "Daikin", item: "Consultation DRV", orderRef: "DEV-DRV", amount: 0, status: "devis" },
      { theme: "Ventilation bureaux", supplier: "France Air", item: "Bouches et accessoires", orderRef: "DEV-VEN", amount: 8400, status: "devis" }
    ],
    faes: [
      { label: "Acompte études EXE", amount: 12500, due: "2026-06-28", status: "a_etablir" }
    ],
    hours: [
      { theme: "Études EXE", task: "Bureau d'études", planned: 96, used: 34 },
      { theme: "DRV / unités intérieures", task: "Chiffrage achats", planned: 24, used: 12 }
    ],
    timeEntries: [
      { technician: "Axel Fournier", date: "2026-06-07", theme: "Études EXE", task: "Reprise plans EXE", hours: 4, note: "Variante diffusion." }
    ],
    goNoGo: {
      decision: "reserve",
      notes: "GO possible si la variante DRV est validée avant consultation fournisseurs.",
      criteria: [
        { label: "Marge attendue", weight: 30, score: 3, comment: "Optimisation encore nécessaire." },
        { label: "Capacité planning", weight: 25, score: 4, comment: "Phase étude confortable." },
        { label: "Complexité technique", weight: 20, score: 3, comment: "Choix système à figer." },
        { label: "Risque client", weight: 25, score: 3, comment: "Attente arbitrage client." }
      ]
    }
  },
  {
    id: "aff-003",
    name: "Clinique Val de Loire",
    client: "Groupe Santé Loire",
    city: "Blois",
    manager: "Marie Lacombe",
    status: "reception",
    revenue: 732000,
    progress: 91,
    nextDate: "2026-06-21",
    notes: "Réserves limitées aux reprises calorifuge local technique et étiquetage réseaux. Facturation solde à préparer.",
    lots: [
      { name: "Production eau glacée", planned: 214000, committed: 205500 },
      { name: "Traitement air zones soins", planned: 286000, committed: 271000 },
      { name: "Désenfumage", planned: 92000, committed: 87000 },
      { name: "DOE et mise au point", planned: 41000, committed: 30500 }
    ],
    actions: [
      { label: "Finaliser DOE numérique", owner: "Méthodes", due: "2026-06-17", done: false },
      { label: "Signer levée réserves calorifuge", owner: "Conducteur", due: "2026-06-21", done: false },
      { label: "Préparer facture solde", owner: "Admin", due: "2026-06-25", done: false }
    ],
    milestones: [
      { label: "Visite levée réserves", date: "2026-06-21" },
      { label: "Transmission DOE", date: "2026-06-26" },
      { label: "Facturation solde", date: "2026-06-30" }
    ],
    purchases: [
      { theme: "Production eau glacée", supplier: "Carrier", item: "Groupe eau glacée", orderRef: "CDE-23102", amount: 156000, status: "facture" },
      { theme: "Traitement air zones soins", supplier: "Belimo", item: "Vannes motorisées", orderRef: "CDE-23136", amount: 18400, status: "livre" }
    ],
    faes: [
      { label: "Solde marché", amount: 72000, due: "2026-06-30", status: "a_etablir" },
      { label: "Travaux supplémentaires validés", amount: 18600, due: "2026-06-30", status: "emise" }
    ],
    hours: [
      { theme: "DOE et mise au point", task: "Levée de réserves", planned: 80, used: 42 },
      { theme: "DOE et mise au point", task: "DOE / essais finaux", planned: 90, used: 64 },
      { theme: "Traitement air zones soins", task: "Chef de chantier", planned: 260, used: 248 }
    ],
    timeEntries: [
      { technician: "Marie Lacombe", date: "2026-06-09", theme: "DOE et mise au point", task: "Contrôle DOE", hours: 3.5, note: "Compléments photos local technique." }
    ],
    goNoGo: {
      decision: "go",
      notes: "Affaire déjà en réception, risques principaux levés.",
      criteria: [
        { label: "Marge attendue", weight: 30, score: 4, comment: "Solde et TS identifiés." },
        { label: "Capacité planning", weight: 25, score: 4, comment: "Reste levée réserves." },
        { label: "Complexité technique", weight: 20, score: 3, comment: "DOE à finaliser." },
        { label: "Risque client", weight: 25, score: 4, comment: "Réception alignée." }
      ]
    }
  }
];

const storageKey = "gestion-affaires-cvc-v1";
const settingsKey = "gestion-affaires-cvc-settings-v1";
const goNoGoStorageKey = "gestion-affaires-cvc-gonogo-v2";
const todoStorageKey = "gestion-affaires-cvc-todolist-v1";
const technicianScheduleStorageKey = "gestion-affaires-cvc-technician-schedule-v1";
const technicianDirectoryStorageKey = "gestion-affaires-cvc-technician-directory-v1";
const agencyPresetStorageKey = "gestion-affaires-cvc-agency-presets-v1";
const remoteStateKeys = {
  projects: storageKey,
  settings: settingsKey,
  goNoGoCases: goNoGoStorageKey,
  todoTasks: todoStorageKey,
  technicianSchedule: technicianScheduleStorageKey,
  technicianDirectory: technicianDirectoryStorageKey,
  agencyPresets: agencyPresetStorageKey
};
const remoteStore = createRemoteStore();
let repairedStoredText = false;
let projects = repairStoredText(loadProjects());
normalizeProjects(projects);
let settings = loadSettings();
let goNoGoCases = repairStoredText(loadGoNoGoCases());
let todoTasks = [];
let technicianSchedule = [];
let manualTechnicians = [];
let selectedTechnicianScheduleId = "";
let selectedProjectOrderId = "";
let activeDeliveryView = "orders";
let showTechnicianScheduleHistory = false;
let agencyPresets = [];
let selectedTodoTaskId = "";
let selectedGoNoGoId = goNoGoCases[0]?.id;
let selectedId = projects[0]?.id;
let activeSpace = "chantiers";
let activeTab = "livraisons";
let activeTodoView = "tasks";
let goNoGoTemplate = null;
let currentUser = null;
let currentProfile = null;
let userProfiles = [];
let todoOwnerFilterInitialized = false;
let authReady = false;

const excelFieldGroups = [
  {
    title: "Client",
    fields: [
      ["info_C7", "Date remise offre", "Informations", "C7", "date"],
      ["info_C8", "Nom société", "Informations", "C8", "text"],
      ["info_C10", "Complément adresse", "Informations", "C10", "text"],
      ["info_C11", "Adresse", "Informations", "C11", "text"],
      ["info_C12", "Code postal", "Informations", "C12", "text"],
      ["info_C13", "Ville", "Informations", "C13", "text"],
      ["info_C14", "Pays", "Informations", "C14", "text"],
      ["info_C16", "Nom correspondant", "Informations", "C16", "text"],
      ["info_C17", "Civilité", "Informations", "C17", "text"],
      ["info_C18", "Téléphone", "Informations", "C18", "text"],
      ["info_C19", "Mail", "Informations", "C19", "email"]
    ]
  },
  {
    title: "Agence",
    fields: [
      ["info_F7", "Établissement", "Informations", "F7", "text"],
      ["info_F8", "SIRET", "Informations", "F8", "text"],
      ["info_F9", "TVA intracom.", "Informations", "F9", "text"],
      ["info_F11", "Complément adresse", "Informations", "F11", "text"],
      ["info_F12", "Adresse", "Informations", "F12", "text"],
      ["info_F13", "Code postal", "Informations", "F13", "text"],
      ["info_F14", "Ville", "Informations", "F14", "text"],
      ["info_F15", "Pays", "Informations", "F15", "text"],
      ["info_F16", "Téléphone", "Informations", "F16", "text"],
      ["info_F17", "Télécopie", "Informations", "F17", "text"],
      ["info_F18", "Email", "Informations", "F18", "email"]
    ]
  },
  {
    title: "Affaire",
    fields: [
      ["info_C23", "Nom de l'affaire", "Informations", "C23", "text"],
      ["info_C24", "Lot", "Informations", "C24", "text"],
      ["info_C25", "N° devis", "Informations", "C25", "text"],
      ["info_C26", "Indice", "Informations", "C26", "text"],
      ["info_C27", "Numéro d'affaire", "Informations", "C27", "text"],
      ["info_C28", "Numéro SICOM", "Informations", "C28", "text"],
      ["info_C29", "Montant estimé", "Informations", "C29", "number"],
      ["info_C30", "Complément adresse", "Informations", "C30", "text"],
      ["info_C31", "Adresse", "Informations", "C31", "text"],
      ["info_C32", "Code postal", "Informations", "C32", "text"],
      ["info_C33", "Ville", "Informations", "C33", "text"],
      ["info_C34", "Pays", "Informations", "C34", "text"],
      ["info_C36", "Resp. d'activités", "Informations", "C36", "text"],
      ["info_C37", "Porteur d'affaires", "Informations", "C37", "text"],
      ["info_C38", "Date remise d'offre / chiffrage", "Informations", "C38", "date"],
      ["info_C39", "Date visite", "Informations", "C39", "date"],
      ["info_C40", "Date démarrage", "Informations", "C40", "date"],
      ["info_C41", "Durée du contrat", "Informations", "C41", "text"]
    ]
  },
  {
    title: "Siège et BE",
    fields: [
      ["info_F23", "Entreprise", "Informations", "F23", "text"],
      ["info_F24", "SIRET", "Informations", "F24", "text"],
      ["info_F25", "TVA intracom.", "Informations", "F25", "text"],
      ["info_F27", "Complément adresse", "Informations", "F27", "text"],
      ["info_F28", "Adresse", "Informations", "F28", "text"],
      ["info_F29", "Code postal", "Informations", "F29", "text"],
      ["info_F30", "Ville", "Informations", "F30", "text"],
      ["info_F31", "Pays", "Informations", "F31", "text"],
      ["info_F32", "Téléphone", "Informations", "F32", "text"],
      ["info_F33", "Télécopie", "Informations", "F33", "text"],
      ["info_F34", "Email", "Informations", "F34", "email"],
      ["info_F40", "Bureau d'études", "Informations", "F40", "text"],
      ["info_F41", "Correspondant BE", "Informations", "F41", "text"],
      ["info_F42", "QPE", "Informations", "F42", "text"]
    ]
  },
  {
    title: "Go / No-Go complément",
    fields: [
      ["gng_F13", "Archi / Maître d'œuvre", "GoNoGo", "F13", "text"],
      ["gng_F14", "BET", "GoNoGo", "F14", "text"],
      ["gng_F15", "Demande autorisation groupement", "GoNoGo", "F15", "text"],
      ["gng_H26", "Date livraison", "GoNoGo", "H26", "date"]
    ]
  }
];

const agencyFieldKeys = excelFieldGroups
  .find((group) => group.title === "Agence")
  .fields.map(([key]) => key);

const goNoGoQuestions = [
  ["q_R7", "Connaît-on le maître d'ouvrage ?", "R7"],
  ["q_R8", "Connaît-on le MOE / BET ?", "R8"],
  ["q_R9", "Le domaine d'activité est-il intéressant ?", "R9"],
  ["q_R10", "La qualité du dossier est-elle suffisante ?", "R10"],
  ["q_R11", "Le planning travaux est-il compatible avec les effectifs ?", "R11"],
  ["q_R12", "A-t-on les compétences en interne ?", "R12"],
  ["q_R13", "Les budget et AO sont-ils connus en amont ?", "R13"],
  ["q_R14", "Connaît-on la concurrence ?", "R14"],
  ["q_R15", "Existe-t-il des contraintes juridiques ?", "R15"],
  ["q_R16", "Le RA a-t-il été impliqué lors du chiffrage ?", "R16"]
];

const seedTodoTasks = [
  {
    id: "todo-001",
    title: "Lever contrainte plans de réservation",
    owner: "BE EXE",
    projectId: "",
    zone: "Réseaux toiture",
    milestone: "Synthèse CVC figée",
    due: "2026-06-14",
    status: "blocked",
    constraint: "Plans architecte indice C attendus"
  },
  {
    id: "todo-002",
    title: "Valider commande registres motorisés",
    owner: "Achats",
    projectId: "aff-001",
    zone: "Ventilation",
    milestone: "Approvisionnement semaine 25",
    due: "2026-06-17",
    status: "ready",
    constraint: ""
  },
  {
    id: "todo-003",
    title: "Préparer zone d'essais CTA",
    owner: "Chef chantier",
    projectId: "aff-001",
    zone: "Local technique",
    milestone: "Essais CTA",
    due: "2026-06-24",
    status: "doing",
    constraint: "Accès local à confirmer"
  },
  {
    id: "todo-004",
    title: "Contrôler DOE partiel",
    owner: "Méthodes",
    projectId: "aff-003",
    zone: "DOE",
    milestone: "Transmission DOE",
    due: "2026-06-26",
    status: "done",
    constraint: ""
  }
];

todoTasks = repairStoredText(loadTodoTasks());
technicianSchedule = repairStoredText(loadTechnicianSchedule());
manualTechnicians = repairStoredText(loadManualTechnicians());
agencyPresets = repairStoredText(loadAgencyPresets());
if (repairedStoredText) {
  saveProjects();
  saveGoNoGoCases();
  saveTodoTasks();
  saveAgencyPresets();
}

const elements = {
  appShell: document.querySelector("#appShell"),
  authView: document.querySelector("#authView"),
  authForm: document.querySelector("#authForm"),
  authEmailInput: document.querySelector("#authEmailInput"),
  authPasswordInput: document.querySelector("#authPasswordInput"),
  authLoginBtn: document.querySelector("#authLoginBtn"),
  authSignupBtn: document.querySelector("#authSignupBtn"),
  authMessage: document.querySelector("#authMessage"),
  userBadge: document.querySelector("#userBadge"),
  logoutBtn: document.querySelector("#logoutBtn"),
  projectList: document.querySelector("#projectList"),
  searchInput: document.querySelector("#searchInput"),
  projectSpaceBtn: document.querySelector("#projectSpaceBtn"),
  goNoGoSpaceBtn: document.querySelector("#goNoGoSpaceBtn"),
  todoSpaceBtn: document.querySelector("#todoSpaceBtn"),
  planningSpaceBtn: document.querySelector("#planningSpaceBtn"),
  projectTitle: document.querySelector("#projectTitle"),
  projectSubtitle: document.querySelector("#projectSubtitle"),
  managementView: document.querySelector("#managementView"),
  technicianView: document.querySelector("#technicianView"),
  statusSelect: document.querySelector("#statusSelect"),
  progressRange: document.querySelector("#progressRange"),
  progressValue: document.querySelector("#progressValue"),
  progressBar: document.querySelector("#progressBar"),
  clientInput: document.querySelector("#clientInput"),
  managerInput: document.querySelector("#managerInput"),
  cityInput: document.querySelector("#cityInput"),
  nextDateInput: document.querySelector("#nextDateInput"),
  notesInput: document.querySelector("#notesInput"),
  budgetRows: document.querySelector("#budgetRows"),
  purchaseRows: document.querySelector("#purchaseRows"),
  purchaseThemes: document.querySelector("#purchaseThemes"),
  faeRows: document.querySelector("#faeRows"),
  hourRows: document.querySelector("#hourRows"),
  hourThemes: document.querySelector("#hourThemes"),
  addDeliveryForProjectBtn: document.querySelector("#addDeliveryForProjectBtn"),
  projectDeliveryList: document.querySelector("#projectDeliveryList"),
  addProjectOrderBtn: document.querySelector("#addProjectOrderBtn"),
  addOrderZoneBtn: document.querySelector("#addOrderZoneBtn"),
  exportProjectOrdersBtn: document.querySelector("#exportProjectOrdersBtn"),
  projectOrdersViewBtn: document.querySelector("#projectOrdersViewBtn"),
  projectDeliveriesViewBtn: document.querySelector("#projectDeliveriesViewBtn"),
  projectOrdersView: document.querySelector("#projectOrdersView"),
  projectDeliveriesView: document.querySelector("#projectDeliveriesView"),
  projectOrderForm: document.querySelector("#projectOrderForm"),
  projectOrderEditSelect: document.querySelector("#projectOrderEditSelect"),
  projectOrderZoneInput: document.querySelector("#projectOrderZoneInput"),
  projectOrderZoneSuggestions: document.querySelector("#projectOrderZoneSuggestions"),
  projectOrderItemInput: document.querySelector("#projectOrderItemInput"),
  projectOrderQuantityInput: document.querySelector("#projectOrderQuantityInput"),
  projectOrderUnitInput: document.querySelector("#projectOrderUnitInput"),
  projectOrderSupplierInput: document.querySelector("#projectOrderSupplierInput"),
  projectOrderReferenceInput: document.querySelector("#projectOrderReferenceInput"),
  projectOrderDateInput: document.querySelector("#projectOrderDateInput"),
  projectOrderStatusInput: document.querySelector("#projectOrderStatusInput"),
  projectOrderNoteInput: document.querySelector("#projectOrderNoteInput"),
  projectOrderCancelBtn: document.querySelector("#projectOrderCancelBtn"),
  projectOrderDeleteBtn: document.querySelector("#projectOrderDeleteBtn"),
  projectOrderSubmitBtn: document.querySelector("#projectOrderSubmitBtn"),
  projectOrdersByZone: document.querySelector("#projectOrdersByZone"),
  actionList: document.querySelector("#actionList"),
  milestoneList: document.querySelector("#milestoneList"),
  newProjectBtn: document.querySelector("#newProjectBtn"),
  techModeBtn: document.querySelector("#techModeBtn"),
  managerModeBtn: document.querySelector("#managerModeBtn"),
  timeEntryForm: document.querySelector("#timeEntryForm"),
  techProjectSelect: document.querySelector("#techProjectSelect"),
  techNameInput: document.querySelector("#techNameInput"),
  techDateInput: document.querySelector("#techDateInput"),
  techThemeSelect: document.querySelector("#techThemeSelect"),
  techTaskInput: document.querySelector("#techTaskInput"),
  techHoursInput: document.querySelector("#techHoursInput"),
  techNoteInput: document.querySelector("#techNoteInput"),
  techEntryList: document.querySelector("#techEntryList"),
  techPlanningList: document.querySelector("#techPlanningList"),
  techPlanningHistoryBtn: document.querySelector("#techPlanningHistoryBtn"),
  projectDialog: document.querySelector("#projectDialog"),
  createProjectConfirm: document.querySelector("#createProjectConfirm"),
  addLotBtn: document.querySelector("#addLotBtn"),
  addPurchaseBtn: document.querySelector("#addPurchaseBtn"),
  addFaeBtn: document.querySelector("#addFaeBtn"),
  addHourBtn: document.querySelector("#addHourBtn"),
  addActionBtn: document.querySelector("#addActionBtn"),
  addGngCaseBtn: document.querySelector("#addGngCaseBtn"),
  exportBtn: document.querySelector("#exportBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  deleteProjectBtn: document.querySelector("#deleteProjectBtn"),
  newName: document.querySelector("#newName"),
  newClient: document.querySelector("#newClient"),
  newCity: document.querySelector("#newCity"),
  newRevenue: document.querySelector("#newRevenue"),
  kpiRevenue: document.querySelector("#kpiRevenue"),
  kpiProgress: document.querySelector("#kpiProgress"),
  kpiMargin: document.querySelector("#kpiMargin"),
  kpiMarginRate: document.querySelector("#kpiMarginRate"),
  kpiCommitted: document.querySelector("#kpiCommitted"),
  kpiRemaining: document.querySelector("#kpiRemaining"),
  kpiOpenActions: document.querySelector("#kpiOpenActions"),
  kpiNextMilestone: document.querySelector("#kpiNextMilestone"),
  opsPurchases: document.querySelector("#opsPurchases"),
  opsPurchaseAlerts: document.querySelector("#opsPurchaseAlerts"),
  opsFae: document.querySelector("#opsFae"),
  opsHours: document.querySelector("#opsHours"),
  opsHoursPlanned: document.querySelector("#opsHoursPlanned"),
  opsHoursUsed: document.querySelector("#opsHoursUsed"),
  engagementBar: document.querySelector("#engagementBar"),
  billedBar: document.querySelector("#billedBar"),
  pendingFaeBar: document.querySelector("#pendingFaeBar"),
  engagementValue: document.querySelector("#engagementValue"),
  billedValue: document.querySelector("#billedValue"),
  gngCaseList: document.querySelector("#gngCaseList"),
  gngSearchInput: document.querySelector("#gngSearchInput"),
  gngStatusFilterSelect: document.querySelector("#gngStatusFilterSelect"),
  gngDateSortSelect: document.querySelector("#gngDateSortSelect"),
  gngAgencyPresetSelect: document.querySelector("#gngAgencyPresetSelect"),
  applyAgencyPresetBtn: document.querySelector("#applyAgencyPresetBtn"),
  saveAgencyPresetBtn: document.querySelector("#saveAgencyPresetBtn"),
  deleteAgencyPresetBtn: document.querySelector("#deleteAgencyPresetBtn"),
  gngTemplateName: document.querySelector("#gngTemplateName"),
  exportGngExcelBtn: document.querySelector("#exportGngExcelBtn"),
  gngStatusSelect: document.querySelector("#gngStatusSelect"),
  gngDownloadDateInput: document.querySelector("#gngDownloadDateInput"),
  gngActionMenu: document.querySelector("#gngActionMenu"),
  gngCaseNameInput: document.querySelector("#gngCaseNameInput"),
  gngCaseClientInput: document.querySelector("#gngCaseClientInput"),
  gngCaseAmountInput: document.querySelector("#gngCaseAmountInput"),
  gngCaseDueInput: document.querySelector("#gngCaseDueInput"),
  gngInfoFields: document.querySelector("#gngInfoFields"),
  gngQuestionRows: document.querySelector("#gngQuestionRows"),
  gngActionInput: document.querySelector("#gngActionInput"),
  gngFollowupInput: document.querySelector("#gngFollowupInput"),
  todoTasksViewBtn: document.querySelector("#todoTasksViewBtn"),
  todoPlanningViewBtn: document.querySelector("#todoPlanningViewBtn"),
  todoTasksView: document.querySelector("#todoTasksView"),
  todoPlanningView: document.querySelector("#todoPlanningView"),
  todoTaskForm: document.querySelector("#todoTaskForm"),
  todoOpenEditorBtn: document.querySelector("#todoOpenEditorBtn"),
  todoOwnerFilterSelect: document.querySelector("#todoOwnerFilterSelect"),
  todoProjectFilterSelect: document.querySelector("#todoProjectFilterSelect"),
  todoClearFiltersBtn: document.querySelector("#todoClearFiltersBtn"),
  todoClearDoneBtn: document.querySelector("#todoClearDoneBtn"),
  todoEditSelect: document.querySelector("#todoEditSelect"),
  todoTitleInput: document.querySelector("#todoTitleInput"),
  todoOwnerInput: document.querySelector("#todoOwnerInput"),
  todoProjectSelect: document.querySelector("#todoProjectSelect"),
  todoZoneInput: document.querySelector("#todoZoneInput"),
  todoDueInput: document.querySelector("#todoDueInput"),
  todoStatusInput: document.querySelector("#todoStatusInput"),
  todoConstraintInput: document.querySelector("#todoConstraintInput"),
  todoNewTaskBtn: document.querySelector("#todoNewTaskBtn"),
  todoDeleteSelectedBtn: document.querySelector("#todoDeleteSelectedBtn"),
  todoSubmitBtn: document.querySelector("#todoSubmitBtn"),
  todoPpcValue: document.querySelector("#todoPpcValue"),
  todoConstraintValue: document.querySelector("#todoConstraintValue"),
  todoWeekValue: document.querySelector("#todoWeekValue"),
  todoBacklogList: document.querySelector("#todoBacklogList"),
  todoReadyList: document.querySelector("#todoReadyList"),
  todoDoingList: document.querySelector("#todoDoingList"),
  todoDoneList: document.querySelector("#todoDoneList"),
  todoPlanningList: document.querySelector("#todoPlanningList"),
  technicianScheduleForm: document.querySelector("#technicianScheduleForm"),
  technicianScheduleOpenEditorBtn: document.querySelector("#technicianScheduleOpenEditorBtn"),
  exportTechnicianSchedulePdfBtn: document.querySelector("#exportTechnicianSchedulePdfBtn"),
  technicianScheduleHistoryBtn: document.querySelector("#technicianScheduleHistoryBtn"),
  technicianScheduleEditSelect: document.querySelector("#technicianScheduleEditSelect"),
  technicianScheduleTitleInput: document.querySelector("#technicianScheduleTitleInput"),
  technicianScheduleKindInput: document.querySelector("#technicianScheduleKindInput"),
  technicianScheduleProjectInput: document.querySelector("#technicianScheduleProjectInput"),
  technicianScheduleZoneInput: document.querySelector("#technicianScheduleZoneInput"),
  technicianScheduleZoneSuggestions: document.querySelector("#technicianScheduleZoneSuggestions"),
  technicianScheduleOrderStatusField: document.querySelector("#technicianScheduleOrderStatusField"),
  technicianScheduleOrderStatusInput: document.querySelector("#technicianScheduleOrderStatusInput"),
  technicianScheduleDateInput: document.querySelector("#technicianScheduleDateInput"),
  technicianScheduleReadyInput: document.querySelector("#technicianScheduleReadyInput"),
  technicianScheduleAssignees: document.querySelector("#technicianScheduleAssignees"),
  technicianScheduleNoteInput: document.querySelector("#technicianScheduleNoteInput"),
  technicianScheduleNewBtn: document.querySelector("#technicianScheduleNewBtn"),
  technicianScheduleDeleteBtn: document.querySelector("#technicianScheduleDeleteBtn"),
  technicianScheduleSubmitBtn: document.querySelector("#technicianScheduleSubmitBtn"),
  technicianScheduleList: document.querySelector("#technicianScheduleList"),
  addManualTechnicianBtn: document.querySelector("#addManualTechnicianBtn"),
  settingsGearBtn: document.querySelector("#settingsGearBtn"),
  settingsPanel: document.querySelector("#settingsPanel"),
  accessManagementPanel: document.querySelector("#accessManagementPanel"),
  accessManagementList: document.querySelector("#accessManagementList"),
  accessManagementMessage: document.querySelector("#accessManagementMessage"),
  darkModeToggle: document.querySelector("#darkModeToggle"),
  compactModeToggle: document.querySelector("#compactModeToggle"),
  confirmDeleteToggle: document.querySelector("#confirmDeleteToggle"),
  demoDataToggle: document.querySelector("#demoDataToggle")
};

document.querySelectorAll(".section-tab").forEach((button) => {
  button.addEventListener("click", () => {
    setActiveTab(button.dataset.tab);
  });
});

elements.projectSpaceBtn.addEventListener("click", () => setActiveSpace("chantiers"));
elements.authForm.addEventListener("submit", signInUser);
elements.authSignupBtn.addEventListener("click", signUpUser);
elements.logoutBtn.addEventListener("click", signOutUser);
elements.goNoGoSpaceBtn.addEventListener("click", () => setActiveSpace("gonogo"));
elements.todoSpaceBtn.addEventListener("click", () => setActiveSpace("todolist"));
elements.planningSpaceBtn.addEventListener("click", () => setActiveSpace("planning"));
elements.searchInput.addEventListener("input", renderProjectList);
elements.newProjectBtn.addEventListener("click", () => elements.projectDialog.showModal());
elements.techModeBtn.addEventListener("click", () => setTechnicianMode(true));
elements.managerModeBtn.addEventListener("click", () => setTechnicianMode(false));
elements.techProjectSelect.addEventListener("change", () => {
  selectedId = elements.techProjectSelect.value;
  renderProjectList();
  renderDetail();
  renderTechnicianView();
});
elements.techNameInput.addEventListener("change", renderTechPlanning);
elements.timeEntryForm.addEventListener("submit", submitTimeEntry);
elements.createProjectConfirm.addEventListener("click", createProject);
elements.addLotBtn.addEventListener("click", addLot);
elements.addPurchaseBtn.addEventListener("click", addPurchase);
elements.addFaeBtn.addEventListener("click", addFae);
elements.addHourBtn.addEventListener("click", addHourLine);
elements.addDeliveryForProjectBtn.addEventListener("click", openDeliveryCreationForSelectedProject);
elements.addProjectOrderBtn.addEventListener("click", openNewProjectOrderEditor);
elements.addOrderZoneBtn.addEventListener("click", addProjectOrderZone);
elements.exportProjectOrdersBtn.addEventListener("click", exportProjectOrdersExcel);
elements.projectOrdersViewBtn.addEventListener("click", () => setDeliveryView("orders"));
elements.projectDeliveriesViewBtn.addEventListener("click", () => setDeliveryView("deliveries"));
elements.projectOrderForm.addEventListener("submit", saveProjectOrder);
elements.projectOrderEditSelect.addEventListener("change", () => selectProjectOrder(elements.projectOrderEditSelect.value));
elements.projectOrderCancelBtn.addEventListener("click", closeProjectOrderEditor);
elements.projectOrderDeleteBtn.addEventListener("click", deleteSelectedProjectOrder);
elements.addActionBtn.addEventListener("click", openTodoTaskCreationForSelectedProject);
elements.addGngCaseBtn.addEventListener("click", addGoNoGoCase);
elements.exportBtn.addEventListener("click", exportData);
elements.resetBtn.addEventListener("click", resetDemo);
elements.deleteProjectBtn.addEventListener("click", deleteSelectedProject);
elements.gngCaseNameInput.addEventListener("change", () => updateSelectedGoNoGoCase("name", elements.gngCaseNameInput.value));
elements.gngCaseClientInput.addEventListener("change", () => updateSelectedGoNoGoCase("client", elements.gngCaseClientInput.value));
elements.gngCaseAmountInput.addEventListener("change", () => updateSelectedGoNoGoCase("amount", Number(elements.gngCaseAmountInput.value)));
elements.gngCaseDueInput.addEventListener("change", () => updateSelectedGoNoGoCase("due", elements.gngCaseDueInput.value));
elements.gngStatusSelect.addEventListener("change", () => updateSelectedGoNoGoCase("status", elements.gngStatusSelect.value));
elements.gngDownloadDateInput.addEventListener("change", () => updateSelectedGoNoGoCase("downloadDate", elements.gngDownloadDateInput.value));
elements.gngSearchInput.addEventListener("input", renderGoNoGoCaseList);
elements.gngStatusFilterSelect.addEventListener("change", renderGoNoGoCaseList);
elements.gngDateSortSelect.addEventListener("change", renderGoNoGoCaseList);
elements.applyAgencyPresetBtn.addEventListener("click", applySelectedAgencyPreset);
elements.saveAgencyPresetBtn.addEventListener("click", saveAgencyPresetFromCurrentGoNoGo);
elements.deleteAgencyPresetBtn.addEventListener("click", deleteSelectedAgencyPreset);
elements.gngActionMenu.addEventListener("change", handleGoNoGoActionMenu);
elements.exportGngExcelBtn.addEventListener("click", exportGoNoGoExcel);
elements.gngActionInput.addEventListener("change", () => updateSelectedGoNoGoCase("action", elements.gngActionInput.value));
elements.gngFollowupInput.addEventListener("change", () => updateSelectedGoNoGoCase("followup", elements.gngFollowupInput.value));
elements.todoTasksViewBtn.addEventListener("click", () => setTodoView("tasks"));
elements.todoPlanningViewBtn.addEventListener("click", () => setTodoView("planning"));
elements.todoTaskForm.addEventListener("submit", addTodoTask);
elements.todoOwnerFilterSelect.addEventListener("change", renderTodoList);
elements.todoProjectFilterSelect.addEventListener("change", renderTodoList);
elements.todoClearFiltersBtn.addEventListener("click", clearTodoFilters);
elements.todoClearDoneBtn.addEventListener("click", clearCompletedTodoTasks);
elements.todoEditSelect.addEventListener("change", () => selectTodoTaskForEdit(elements.todoEditSelect.value));
elements.todoOpenEditorBtn.addEventListener("click", openNewTodoEditor);
elements.todoNewTaskBtn.addEventListener("click", closeTodoEditor);
elements.todoDeleteSelectedBtn.addEventListener("click", deleteSelectedTodoFromEditor);
elements.technicianScheduleForm.addEventListener("submit", saveTechnicianScheduleItem);
elements.technicianScheduleOpenEditorBtn.addEventListener("click", openNewTechnicianScheduleEditor);
elements.exportTechnicianSchedulePdfBtn.addEventListener("click", exportTechnicianSchedulePdf);
elements.technicianScheduleHistoryBtn.addEventListener("click", toggleTechnicianScheduleHistory);
elements.techPlanningHistoryBtn.addEventListener("click", toggleTechnicianScheduleHistory);
elements.technicianScheduleEditSelect.addEventListener("change", () => selectTechnicianScheduleItem(elements.technicianScheduleEditSelect.value));
elements.technicianScheduleKindInput.addEventListener("change", updateTechnicianScheduleKindFields);
elements.technicianScheduleProjectInput.addEventListener("change", renderTechnicianScheduleZoneOptions);
elements.technicianScheduleNewBtn.addEventListener("click", closeTechnicianScheduleEditor);
elements.technicianScheduleDeleteBtn.addEventListener("click", deleteSelectedTechnicianScheduleItem);
elements.addManualTechnicianBtn.addEventListener("click", addManualTechnician);
elements.settingsGearBtn.addEventListener("click", toggleSettingsPanel);
elements.darkModeToggle.addEventListener("change", () => updateSetting("darkMode", elements.darkModeToggle.checked));
elements.compactModeToggle.addEventListener("change", () => updateSetting("compactMode", elements.compactModeToggle.checked));
elements.confirmDeleteToggle.addEventListener("change", () => updateSetting("confirmDelete", elements.confirmDeleteToggle.checked));
elements.demoDataToggle.addEventListener("change", () => updateSetting("showDemoData", elements.demoDataToggle.checked));
elements.accessManagementList.addEventListener("change", (event) => {
  if (event.target.matches("[data-profile-role]")) updateUserRole(event.target.dataset.profileRole, event.target.value);
});

[
  ["status", elements.statusSelect],
  ["progress", elements.progressRange],
  ["client", elements.clientInput],
  ["manager", elements.managerInput],
  ["city", elements.cityInput],
  ["nextDate", elements.nextDateInput],
  ["notes", elements.notesInput]
].forEach(([field, input]) => {
  const eventName = field === "progress" ? "input" : "change";
  input.addEventListener(eventName, () => updateProject(field, field === "progress" ? Number(input.value) : input.value));
});

loadBundledGoNoGoTemplate();
applySettings();
elements.techDateInput.value = todayString();
elements.todoDueInput.value = todayString();
elements.technicianScheduleDateInput.value = todayString();
initAuth();

function loadProjects() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return structuredClone(seedProjects);

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length ? parsed : structuredClone(seedProjects);
  } catch {
    return structuredClone(seedProjects);
  }
}

function loadSettings() {
  const defaults = {
    darkMode: false,
    compactMode: false,
    confirmDelete: true,
    showDemoData: true
  };
  const raw = localStorage.getItem(settingsKey);
  if (!raw) return defaults;

  try {
    return { ...defaults, ...JSON.parse(raw) };
  } catch {
    return defaults;
  }
}

function loadGoNoGoCases() {
  const raw = localStorage.getItem(goNoGoStorageKey);
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) && parsed.length ? parsed.map(normalizeGoNoGoCase) : [createDefaultGoNoGoCase()];
    } catch {
      return [createDefaultGoNoGoCase()];
    }
  }

  const cases = [createDefaultGoNoGoCase()];
  localStorage.setItem(goNoGoStorageKey, JSON.stringify(cases));
  return cases;
}

function loadTodoTasks() {
  const raw = localStorage.getItem(todoStorageKey);
  if (!raw) return structuredClone(seedTodoTasks);

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length ? parsed.map(normalizeTodoTask) : structuredClone(seedTodoTasks);
  } catch {
    return structuredClone(seedTodoTasks);
  }
}

function loadTechnicianSchedule() {
  const raw = localStorage.getItem(technicianScheduleStorageKey);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.map(normalizeTechnicianScheduleItem) : [];
  } catch {
    return [];
  }
}

function loadManualTechnicians() {
  const raw = localStorage.getItem(technicianDirectoryStorageKey);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.map((name) => String(name).trim()).filter(Boolean) : [];
  } catch {
    return [];
  }
}

function loadAgencyPresets() {
  const raw = localStorage.getItem(agencyPresetStorageKey);
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.map(normalizeAgencyPreset) : [];
  } catch {
    return [];
  }
}

function normalizeAgencyPreset(preset) {
  const fields = {};
  agencyFieldKeys.forEach((key) => {
    fields[key] = preset.fields?.[key] || "";
  });

  return {
    id: preset.id || crypto.randomUUID(),
    name: preset.name || "Agence sans nom",
    fields
  };
}

function repairStoredText(value) {
  if (typeof value === "string") return repairMojibakeText(value);
  if (Array.isArray(value)) return value.map((item) => repairStoredText(item));
  if (value && typeof value === "object") {
    Object.keys(value).forEach((key) => {
      value[key] = repairStoredText(value[key]);
    });
  }
  return value;
}

function repairMojibakeText(value) {
  if (!/[\u00c3\u00c2\ufffd]|\u00e2[\u201a\u20ac]|\u00c5\u201c/.test(value)) return value;
  try {
    const bytes = Uint8Array.from([...value].map(windows1252ByteFromCharacter));
    const repaired = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
    repairedStoredText = repairedStoredText || repaired !== value;
    return repaired;
  } catch {
    return value;
  }
}

function windows1252ByteFromCharacter(character) {
  const code = character.charCodeAt(0);
  const extended = {
    0x20ac: 0x80,
    0x201a: 0x82,
    0x0192: 0x83,
    0x201e: 0x84,
    0x2026: 0x85,
    0x2020: 0x86,
    0x2021: 0x87,
    0x02c6: 0x88,
    0x2030: 0x89,
    0x0160: 0x8a,
    0x2039: 0x8b,
    0x0152: 0x8c,
    0x017d: 0x8e,
    0x2018: 0x91,
    0x2019: 0x92,
    0x201c: 0x93,
    0x201d: 0x94,
    0x2022: 0x95,
    0x2013: 0x96,
    0x2014: 0x97,
    0x02dc: 0x98,
    0x2122: 0x99,
    0x0161: 0x9a,
    0x203a: 0x9b,
    0x0153: 0x9c,
    0x017e: 0x9e,
    0x0178: 0x9f
  };
  return extended[code] ?? code;
}

function normalizeTodoTask(task) {
  return {
    id: task.id || crypto.randomUUID(),
    title: task.title || "Nouvelle tâche",
    owner: task.owner || "À affecter",
    projectId: task.projectId || "",
    zone: task.zone || "",
    milestone: task.milestone || "",
    due: task.due || todayString(),
    status: task.status || "backlog",
    constraint: task.constraint || ""
  };
}

function normalizeTechnicianScheduleItem(item) {
  return {
    id: item.id || crypto.randomUUID(),
    title: item.title || "Nouvelle intervention",
    kind: item.kind === "delivery" ? "delivery" : "task",
    projectId: item.projectId || "",
    zone: item.zone || "",
    orderStatus: ["a_faire", "en_cours", "faite"].includes(item.orderStatus) ? item.orderStatus : "a_faire",
    date: item.date || todayString(),
    ready: Boolean(item.ready),
    technicians: Array.isArray(item.technicians) ? item.technicians.filter(Boolean) : [],
    note: item.note || ""
  };
}

function normalizeProjects(projectList) {
  projectList.forEach((project) => {
    project.purchases ||= [];
    project.faes ||= [];
    project.hours ||= [];
    project.orders ||= [];
    project.orderZones ||= [];
    project.timeEntries ||= [];
    const defaultTheme = project.lots?.[0]?.name || "Général";
    project.purchases.forEach((purchase) => {
      purchase.theme ||= defaultTheme;
      purchase.orderRef ||= "";
    });
    project.hours.forEach((hourLine) => {
      hourLine.theme ||= defaultTheme;
    });
  });
}

function saveProjects() {
  saveAppState(storageKey, projects);
}

function saveGoNoGoCases() {
  saveAppState(goNoGoStorageKey, goNoGoCases);
}

function saveTodoTasks() {
  saveAppState(todoStorageKey, todoTasks);
}

function saveTechnicianSchedule() {
  saveAppState(technicianScheduleStorageKey, technicianSchedule);
}

function saveManualTechnicians() {
  saveAppState(technicianDirectoryStorageKey, manualTechnicians);
}

function saveAgencyPresets() {
  saveAppState(agencyPresetStorageKey, agencyPresets);
}

function saveSettings() {
  saveAppState(settingsKey, settings);
}

function createRemoteStore() {
  const config = window.supabaseConfig || {};
  const hasConfig = Boolean(
    window.supabase?.createClient &&
    config.url &&
    config.anonKey &&
    !config.url.includes("TON-PROJET") &&
    !config.anonKey.includes("TA_CLE")
  );

  if (!hasConfig) {
    return { enabled: false, client: null };
  }

  return {
    enabled: true,
    client: window.supabase.createClient(config.url, config.anonKey)
  };
}

async function initAuth() {
  if (!remoteStore.enabled) {
    elements.authMessage.textContent = "Supabase n'est pas configuré. Vérifie supabase-config.js.";
    elements.authView.classList.remove("is-hidden");
    elements.appShell.classList.add("is-hidden");
    return;
  }

  const { data: { session } = {} } = await remoteStore.client.auth.getSession();
  currentUser = session?.user || null;
  await loadCurrentProfile();
  authReady = true;
  applyAuthState();

  remoteStore.client.auth.onAuthStateChange(async (_event, session) => {
    currentUser = session?.user || null;
    await loadCurrentProfile();
    applyAuthState();
    if (currentUser) syncFromRemote();
  });

  if (currentUser) syncFromRemote();
}

async function signInUser(event) {
  event.preventDefault();
  setAuthMessage("Connexion en cours...");
  const { error } = await remoteStore.client.auth.signInWithPassword({
    email: elements.authEmailInput.value.trim(),
    password: elements.authPasswordInput.value
  });
  if (error) {
    setAuthMessage("Connexion impossible : vérifie l'email et le mot de passe.", true);
    return;
  }
  elements.authPasswordInput.value = "";
  setAuthMessage("");
}

async function signUpUser() {
  setAuthMessage("Création du compte...");
  const email = elements.authEmailInput.value.trim();
  const password = elements.authPasswordInput.value;
  if (!email || password.length < 6) {
    setAuthMessage("Indique un email et un mot de passe de 6 caractères minimum.", true);
    return;
  }

  const { error } = await remoteStore.client.auth.signUp({
    email,
    password
  });
  if (error) {
    setAuthMessage(`Création impossible : ${error.message}`, true);
    return;
  }
  setAuthMessage("Compte créé. Si Supabase demande une confirmation email, valide le mail avant connexion.");
}

async function signOutUser() {
  if (!remoteStore.enabled) return;
  await remoteStore.client.auth.signOut({ scope: "local" });
  currentUser = null;
  currentProfile = null;
  userProfiles = [];
  todoOwnerFilterInitialized = false;
  applyAuthState();
}

function applyAuthState() {
  const signedIn = Boolean(currentUser);
  elements.authView.classList.toggle("is-hidden", signedIn);
  elements.appShell.classList.toggle("is-hidden", !signedIn);

  if (!signedIn) {
    setAuthMessage(authReady ? "Connecte-toi pour accéder au site." : "");
    return;
  }

  const role = getCurrentUserRole();
  const canManage = canManageProjects();
  elements.userBadge.innerHTML = `
    <strong>${escapeHtml(roleLabel(role))}</strong>
    <span>${escapeHtml(currentUser.email || "Compte connecté")}</span>
  `;
  document.body.classList.toggle("non-manager-mode", !canManage);
  if (!canManage) setTechnicianMode(true);
  render();
}

function isCurrentUserAdmin() {
  return getCurrentUserRole() === "admin";
}

function canManageProjects() {
  return ["admin", "manager"].includes(getCurrentUserRole());
}

function getCurrentUserRole() {
  if (currentProfile?.role) return currentProfile.role;
  const email = currentUser?.email?.toLowerCase();
  const adminEmails = (window.supabaseConfig?.adminEmails || []).map((item) => String(item).toLowerCase());
  return email && adminEmails.includes(email) ? "admin" : "technician";
}

function roleLabel(role) {
  return { admin: "Administrateur", manager: "Gestionnaire de projets", technician: "Technicien" }[role] || "Technicien";
}

function requireProjectManagerAction() {
  if (canManageProjects()) return true;
  alert("Action réservée aux gestionnaires de projets.");
  return false;
}

function requireAdminAction() {
  if (isCurrentUserAdmin()) return true;
  alert("Action réservée au compte administrateur.");
  return false;
}

async function loadCurrentProfile() {
  currentProfile = null;
  userProfiles = [];
  if (!remoteStore.enabled || !currentUser) return;

  const { data, error } = await remoteStore.client
    .from("profiles")
    .select("id, email, role")
    .eq("id", currentUser.id)
    .maybeSingle();

  if (error) {
    console.warn("Profil Supabase indisponible. Applique le script supabase-schema.sql.", error.message);
    return;
  }
  currentProfile = data;
  if (canManageProjects()) await loadUserProfiles();
}

async function loadUserProfiles() {
  if (!remoteStore.enabled || !canManageProjects()) return;
  const { data, error } = await remoteStore.client
    .from("profiles")
    .select("id, email, role, created_at")
    .order("email");

  if (error) {
    console.warn("Liste des utilisateurs indisponible.", error.message);
    return;
  }
  userProfiles = data || [];
}

async function updateUserRole(profileId, role) {
  if (!requireAdminAction() || profileId === currentUser?.id) return;
  const { error } = await remoteStore.client
    .from("profiles")
    .update({ role, updated_at: new Date().toISOString() })
    .eq("id", profileId);

  if (error) {
    setAccessManagementMessage("Impossible de modifier ce rôle. Vérifie le script Supabase.", true);
    return;
  }

  await loadUserProfiles();
  setAccessManagementMessage("Accès mis à jour.");
  renderAccessManagement();
}

function setAuthMessage(message, isError = false) {
  elements.authMessage.textContent = message;
  elements.authMessage.classList.toggle("is-error", isError);
}

function saveAppState(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  if (!remoteStore.enabled || !currentUser) return;

  remoteStore.client
    .from("app_state")
    .upsert({
      id: key,
      data: value,
      updated_at: new Date().toISOString()
    })
    .then(({ error }) => {
      if (error) console.error("Erreur sauvegarde Supabase", key, error);
    });
}

async function syncFromRemote() {
  if (!remoteStore.enabled) return;

  try {
    const [remoteProjects, remoteSettings, remoteGoNoGoCases, remoteTodoTasks, remoteTechnicianSchedule, remoteManualTechnicians, remoteAgencyPresets] = await Promise.all([
      loadRemoteState(remoteStateKeys.projects),
      loadRemoteState(remoteStateKeys.settings),
      loadRemoteState(remoteStateKeys.goNoGoCases),
      loadRemoteState(remoteStateKeys.todoTasks),
      loadRemoteState(remoteStateKeys.technicianSchedule),
      loadRemoteState(remoteStateKeys.technicianDirectory),
      loadRemoteState(remoteStateKeys.agencyPresets)
    ]);

    if (Array.isArray(remoteProjects) && remoteProjects.length) {
      projects = remoteProjects;
      normalizeProjects(projects);
      selectedId = projects.find((project) => project.id === selectedId)?.id || projects[0]?.id;
      localStorage.setItem(storageKey, JSON.stringify(projects));
    } else {
      saveProjects();
    }

    if (remoteSettings && typeof remoteSettings === "object") {
      settings = { ...settings, ...remoteSettings };
      localStorage.setItem(settingsKey, JSON.stringify(settings));
    } else {
      saveSettings();
    }

    if (Array.isArray(remoteGoNoGoCases) && remoteGoNoGoCases.length) {
      goNoGoCases = remoteGoNoGoCases.map(normalizeGoNoGoCase);
      selectedGoNoGoId = goNoGoCases.find((item) => item.id === selectedGoNoGoId)?.id || goNoGoCases[0]?.id;
      localStorage.setItem(goNoGoStorageKey, JSON.stringify(goNoGoCases));
    } else {
      saveGoNoGoCases();
    }

    if (Array.isArray(remoteTodoTasks) && remoteTodoTasks.length) {
      todoTasks = remoteTodoTasks.map(normalizeTodoTask);
      localStorage.setItem(todoStorageKey, JSON.stringify(todoTasks));
    } else {
      saveTodoTasks();
    }

    if (Array.isArray(remoteTechnicianSchedule)) {
      technicianSchedule = remoteTechnicianSchedule.map(normalizeTechnicianScheduleItem);
      localStorage.setItem(technicianScheduleStorageKey, JSON.stringify(technicianSchedule));
    } else {
      saveTechnicianSchedule();
    }

    if (Array.isArray(remoteManualTechnicians)) {
      manualTechnicians = remoteManualTechnicians.map((name) => String(name).trim()).filter(Boolean);
      localStorage.setItem(technicianDirectoryStorageKey, JSON.stringify(manualTechnicians));
    } else {
      saveManualTechnicians();
    }

    if (Array.isArray(remoteAgencyPresets)) {
      agencyPresets = remoteAgencyPresets.map(normalizeAgencyPreset);
      localStorage.setItem(agencyPresetStorageKey, JSON.stringify(agencyPresets));
    } else {
      saveAgencyPresets();
    }

    render();
    applySettings();
  } catch (error) {
    console.error("Synchronisation Supabase impossible", error);
  }
}

async function loadRemoteState(key) {
  const { data, error } = await remoteStore.client
    .from("app_state")
    .select("data")
    .eq("id", key)
    .maybeSingle();

  if (error) {
    console.error("Erreur lecture Supabase", key, error);
    return null;
  }

  return data?.data ?? null;
}

function createDefaultGoNoGoCase() {
  const goNoGo = {
    id: crypto.randomUUID(),
    name: "Consultation renovation CVC",
    client: "Prospect a qualifier",
    amount: 0,
    status: "interesse",
    downloadDate: "",
    due: todayString(),
    fields: {},
    questions: {},
    action: "",
    followup: ""
  };
  syncGoNoGoSummaryFields(goNoGo);
  return goNoGo;
}

function normalizeGoNoGoCase(goNoGo) {
  const normalized = {
    id: goNoGo.id || crypto.randomUUID(),
    name: goNoGo.name || "Nouveau dossier Go / No-Go",
    client: goNoGo.client || "",
    amount: Number(goNoGo.amount || 0),
    status: goNoGo.status || normalizeLegacyGoNoGoStatus(goNoGo.decision) || "interesse",
    downloadDate: goNoGo.downloadDate || "",
    due: goNoGo.due || todayString(),
    fields: { ...(goNoGo.fields || {}) },
    questions: { ...(goNoGo.questions || {}) },
    action: goNoGo.action || goNoGo.notes || "",
    followup: goNoGo.followup || ""
  };
  syncGoNoGoSummaryFields(normalized);
  return normalized;
}

function normalizeLegacyGoNoGoStatus(value) {
  return {
    go: "go",
    no_go: "nogo",
    reserve: "interesse",
    a_statuer: "interesse"
  }[value];
}

function syncGoNoGoSummaryFields(goNoGo) {
  goNoGo.fields ||= {};
  goNoGo.fields.info_C23 = goNoGo.name || "";
  goNoGo.fields.info_C8 = goNoGo.client || "";
  goNoGo.fields.info_C29 = goNoGo.amount || "";
  goNoGo.fields.info_C38 = goNoGo.due || "";
}

function getSelectedGoNoGoCase() {
  return goNoGoCases.find((item) => item.id === selectedGoNoGoId) || goNoGoCases[0];
}

function getSelectedProject() {
  return projects.find((project) => project.id === selectedId) || projects[0];
}

function render() {
  renderProjectList();
  renderDetail();
  renderTechnicianView();
  renderTodoList();
  renderTechnicianSchedule();
  applyActiveTab();
}

function renderProjectList() {
  const query = elements.searchInput.value.trim().toLowerCase();
  const visibleProjects = projects.filter((project) => {
    const haystack = `${project.name} ${project.client} ${project.city} ${project.lots.map((lot) => lot.name).join(" ")} ${project.purchases.map((purchase) => `${purchase.supplier} ${purchase.item}`).join(" ")}`.toLowerCase();
    return haystack.includes(query);
  });

  elements.projectList.innerHTML = "";
  visibleProjects.forEach((project) => {
    const totals = getTotals(project);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `project-card${project.id === selectedId ? " is-active" : ""}`;
    button.innerHTML = `
      <strong>${escapeHtml(project.name)}</strong>
      <div class="project-meta">
        <span>${escapeHtml(project.client)}</span>
        <span>${formatMoney(totals.margin)}</span>
      </div>
      <div class="progress-track" aria-hidden="true"><span style="width:${project.progress}%"></span></div>
    `;
    button.addEventListener("click", () => {
      selectedId = project.id;
      render();
    });
    elements.projectList.append(button);
  });

  if (!visibleProjects.length) {
    elements.projectList.innerHTML = `<p class="muted">Aucune affaire ne correspond au filtre.</p>`;
  }
}

function renderDetail() {
  const project = getSelectedProject();
  if (!project) {
    renderEmptyProjectState();
    return;
  }

  const totals = getTotals(project);
  const openActions = project.actions.filter((action) => !action.done);
  const nextMilestone = [...project.milestones].sort((a, b) => a.date.localeCompare(b.date))[0];

  elements.projectTitle.textContent = project.name;
  elements.projectSubtitle.textContent = `${project.client} · ${project.city} · ${labelStatus(project.status)}`;
  elements.statusSelect.value = project.status;
  elements.progressRange.value = project.progress;
  elements.progressValue.textContent = `${project.progress}%`;
  elements.progressBar.style.width = `${project.progress}%`;
  elements.clientInput.value = project.client;
  elements.managerInput.value = project.manager;
  elements.cityInput.value = project.city;
  elements.nextDateInput.value = project.nextDate;
  elements.notesInput.value = project.notes;

  elements.kpiRevenue.textContent = formatMoney(project.revenue);
  elements.kpiProgress.textContent = `${project.progress}% avancement`;
  elements.kpiMargin.textContent = formatMoney(totals.margin);
  elements.kpiMarginRate.textContent = `${formatNumber(totals.marginRate)}% de marge prévue`;
  elements.kpiCommitted.textContent = formatMoney(totals.committed);
  elements.kpiRemaining.textContent = `Reste ${formatMoney(Math.max(project.revenue - totals.committed, 0))}`;
  elements.kpiOpenActions.textContent = openActions.length;
  elements.kpiNextMilestone.textContent = nextMilestone ? `${nextMilestone.label} · ${formatDate(nextMilestone.date)}` : "Aucun jalon";
  elements.opsPurchases.textContent = formatMoney(totals.purchases);
  elements.opsPurchaseAlerts.textContent = totals.purchaseAlertCount;
  elements.opsFae.textContent = formatMoney(totals.faePending);
  elements.opsHoursPlanned.textContent = `${formatNumber(totals.hoursPlanned)} h`;
  elements.opsHoursUsed.textContent = `${formatNumber(totals.hoursUsed)} h`;
  elements.opsHours.textContent = `${formatNumber(totals.hoursRemaining)} h`;
  elements.engagementValue.textContent = formatMoney(totals.engagement);
  elements.billedValue.textContent = formatMoney(totals.faeBilled);
  renderBillingChart(totals);

  renderBudget(project);
  renderPurchases(project);
  renderFaes(project);
  renderHours(project);
  renderProjectDeliveries(project);
  renderSettings();
  renderAccessManagement();
  renderActions(project);
  renderMilestones(project);
  renderGoNoGo();
  applyActiveTab();
}

function renderEmptyProjectState() {
  elements.projectTitle.textContent = "Aucun chantier";
  elements.projectSubtitle.textContent = "Crée une nouvelle affaire pour commencer.";
  [
    elements.budgetRows,
    elements.purchaseRows,
    elements.faeRows,
    elements.hourRows,
    elements.actionList,
    elements.milestoneList,
    elements.techEntryList,
    elements.purchaseThemes,
    elements.hourThemes,
    elements.projectDeliveryList
  ].forEach((element) => {
    if (element) element.innerHTML = "";
  });
  renderGoNoGo();
}

function setActiveTab(tab) {
  activeSpace = "chantiers";
  activeTab = tab;
  if (tab === "technicien") {
    setTechnicianMode(true);
    return;
  }

  setTechnicianMode(false);
  applyActiveTab();
}

function setActiveSpace(space) {
  activeSpace = space;
  if (["gonogo", "todolist", "planning"].includes(space)) {
    activeTab = space;
    setTechnicianMode(false);
    if (space === "gonogo") renderGoNoGo();
    if (space === "todolist") renderTodoList();
    if (space === "planning") renderTechnicianSchedule();
    applyActiveTab();
    return;
  }

  if (["gonogo", "todolist", "planning"].includes(activeTab)) activeTab = "livraisons";
  setTechnicianMode(false);
  renderDetail();
  applyActiveTab();
}

function applyActiveTab() {
  document.body.dataset.activeSpace = activeSpace;
  document.body.dataset.activeTab = activeTab;
  elements.projectSpaceBtn.classList.toggle("is-active", activeSpace === "chantiers");
  elements.goNoGoSpaceBtn.classList.toggle("is-active", activeSpace === "gonogo");
  elements.todoSpaceBtn.classList.toggle("is-active", activeSpace === "todolist");
  elements.planningSpaceBtn.classList.toggle("is-active", activeSpace === "planning");
  document.querySelectorAll(".section-tab").forEach((button) => {
    button.classList.toggle("is-active", activeSpace === "chantiers" && button.dataset.tab === activeTab);
  });

  if (["gonogo", "todolist", "planning"].includes(activeSpace)) {
    document.body.classList.remove("tech-mode");
    elements.technicianView.classList.add("is-hidden");
    elements.managementView.classList.remove("is-hidden");
    document.querySelectorAll("[data-panel]").forEach((panel) => {
      panel.classList.toggle("is-hidden", panel.dataset.panel !== activeSpace);
    });
    elements.projectTitle.textContent = activeSpace === "gonogo" ? "Go / No-Go" : activeSpace === "planning" ? "Planning techniciens" : "Todo List";
    elements.projectSubtitle.textContent = activeSpace === "gonogo"
      ? "Dossiers de décision indépendants des chantiers."
      : activeSpace === "planning"
        ? "Affectations terrain par technicien, date et chantier."
        : "Engagements Lean Construction, responsables et jalons.";
    return;
  }

  if (activeTab === "technicien") return;

  document.querySelectorAll("[data-panel]").forEach((panel) => {
    panel.classList.toggle("is-hidden", panel.dataset.panel !== activeTab);
  });
}

function setTechnicianMode(enabled) {
  if (!enabled && currentUser && !canManageProjects()) {
    alert("Le mode gestion est réservé aux gestionnaires de projets.");
    return;
  }
  document.body.classList.toggle("tech-mode", enabled);
  elements.technicianView.classList.toggle("is-hidden", !enabled);
  elements.managementView.classList.toggle("is-hidden", enabled);
  if (enabled) {
    activeSpace = "chantiers";
    activeTab = "technicien";
    applyActiveTab();
    elements.projectTitle.textContent = "Espace technicien";
    elements.projectSubtitle.textContent = "Saisie simplifiée des heures chantier";
    renderTechnicianView();
  } else {
    if (activeTab === "technicien") activeTab = "synthese";
    renderDetail();
    applyActiveTab();
  }
}

function renderTechnicianView() {
  const project = getSelectedProject();
  if (!project) return;

  elements.techProjectSelect.innerHTML = projects
    .map((item) => `<option value="${item.id}"${item.id === project.id ? " selected" : ""}>${escapeHtml(item.name)} · ${escapeHtml(item.city)}</option>`)
    .join("");
  elements.techThemeSelect.innerHTML = themeOptions(project, elements.techThemeSelect.value || project.lots[0]?.name);
  if (!elements.techThemeSelect.value && project.lots[0]) elements.techThemeSelect.value = project.lots[0].name;
  if (!elements.techNameInput.value) elements.techNameInput.value = getCurrentUserTaskOwner();
  renderTechEntryList(project);
  renderTechPlanning();
}

function renderTechEntryList(project) {
  elements.techEntryList.innerHTML = "";
  const entries = [...project.timeEntries].sort((a, b) => `${b.date}`.localeCompare(`${a.date}`)).slice(0, 8);

  if (!entries.length) {
    elements.techEntryList.innerHTML = `<p class="muted">Aucune saisie d'heures pour ce chantier.</p>`;
    return;
  }

  entries.forEach((entry) => {
    const item = document.createElement("article");
    item.className = "tech-entry-item";
    item.innerHTML = `
      <div>
        <strong>${escapeHtml(entry.technician)} · ${formatNumber(entry.hours)} h</strong>
        <span>${formatDate(entry.date)} · ${escapeHtml(entry.theme)}</span>
      </div>
      <p>${escapeHtml(entry.task)}</p>
      ${entry.note ? `<small>${escapeHtml(entry.note)}</small>` : ""}
    `;
    elements.techEntryList.append(item);
  });
}

function renderTechPlanning() {
  elements.techPlanningList.innerHTML = "";
  const technician = elements.techNameInput.value.trim() || getCurrentUserTaskOwner();
  const tasks = technicianSchedule
    .filter((item) => item.kind !== "delivery")
    .filter((item) => item.technicians.includes(technician))
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  if (!tasks.length) {
    updateTechnicianScheduleHistoryButton(elements.techPlanningHistoryBtn, 0);
    elements.techPlanningList.innerHTML = `<p class="muted">Aucune intervention affectée à ${escapeHtml(technician)}.</p>`;
    return;
  }

  const { weeks, historicalCount } = getTechnicianScheduleWeeks(tasks);
  updateTechnicianScheduleHistoryButton(elements.techPlanningHistoryBtn, historicalCount);
  if (!weeks.length) {
    elements.techPlanningList.innerHTML = `<p class="muted">Aucune intervention à partir de la semaine S-1. Consulte l'historique pour voir les semaines précédentes.</p>`;
    return;
  }
  weeks.forEach(({ weekStart, weekEnd, tasks: weekTasks }) => {
    const section = document.createElement("section");
    section.className = "planning-week tech-planning-week";
    section.innerHTML = `
      <header class="planning-week-head">
        <div>
          <span>Semaine ${getIsoWeekNumber(weekStart)}</span>
          <strong>${formatShortDate(weekStart)} - ${formatShortDate(weekEnd)}</strong>
        </div>
        <div class="planning-week-stats">
          <span>${weekTasks.length} intervention${weekTasks.length > 1 ? "s" : ""}</span>
          <span>${escapeHtml(technician)}</span>
        </div>
      </header>
      <div class="planning-week-grid"></div>
    `;

    const grid = section.querySelector(".planning-week-grid");
    getWeekDays(weekStart).forEach((day) => {
      const dayTasks = weekTasks.filter((task) => isSameDay(parseTodoDate(task.date), day));
      const column = document.createElement("div");
      column.className = `planning-day${isSameDay(day, new Date()) ? " is-today" : ""}`;
      column.innerHTML = `
        <div class="planning-day-head">
          <strong>${formatWeekday(day)}</strong>
          <span>${formatShortDate(day)}</span>
        </div>
        <div class="planning-day-tasks"></div>
      `;

      const taskList = column.querySelector(".planning-day-tasks");
      if (!dayTasks.length) {
        taskList.innerHTML = `<p class="muted">Libre</p>`;
      } else {
        dayTasks.forEach((task) => taskList.append(createTechPlanningTaskCard(task)));
      }
      grid.append(column);
    });

    elements.techPlanningList.append(section);
  });
}

function createTechPlanningTaskCard(task) {
  const item = document.createElement("article");
  const project = projects.find((item) => item.id === task.projectId);
  const location = project ? `${project.name} · ${project.city}` : "Hors chantier";
  item.className = "planning-item technician-planning-item";
  item.tabIndex = 0;
  item.setAttribute("role", "button");
  item.innerHTML = `
    <strong><button class="schedule-readiness-dot schedule-readiness-toggle${task.ready ? " is-ready" : " is-missing"}" type="button" title="${task.ready ? "Éléments disponibles : cliquer pour signaler un manque" : "Éléments manquants : cliquer quand tout est disponible"}" aria-label="Modifier l'état de préparation"></button>${escapeHtml(task.title)}</strong>
    <small>${escapeHtml(location)}</small>
    <small>${escapeHtml(task.zone || "Zone à préciser")}</small>
    ${task.note ? `<em>${escapeHtml(task.note)}</em>` : ""}
  `;
  item.addEventListener("click", () => {
    if (task.projectId && projects.some((project) => project.id === task.projectId)) {
      selectedId = task.projectId;
      renderTechnicianView();
    }
    elements.techDateInput.value = task.date || todayString();
    elements.techTaskInput.value = task.title;
    elements.techTaskInput.focus();
  });
  attachScheduleReadinessToggle(item, task.id);
  return item;
}

function submitTimeEntry(event) {
  event.preventDefault();
  const project = getSelectedProject();
  const entry = {
    technician: elements.techNameInput.value.trim(),
    date: elements.techDateInput.value,
    theme: elements.techThemeSelect.value,
    task: elements.techTaskInput.value.trim(),
    hours: Number(elements.techHoursInput.value),
    note: elements.techNoteInput.value.trim()
  };

  if (!entry.technician || !entry.date || !entry.theme || !entry.task || entry.hours <= 0) return;

  project.timeEntries.unshift(entry);
  addTimeToHourTracking(project, entry);
  saveProjects();

  elements.techTaskInput.value = "";
  elements.techHoursInput.value = "";
  elements.techNoteInput.value = "";
  renderDetail();
  renderTechnicianView();
}

function addTimeToHourTracking(project, entry) {
  const normalizedTask = entry.task.toLowerCase();
  let line = project.hours.find((hourLine) => hourLine.theme === entry.theme && hourLine.task.toLowerCase() === normalizedTask);
  if (!line) {
    line = { theme: entry.theme, task: entry.task, planned: 0, used: 0 };
    project.hours.unshift(line);
  }
  line.used = Number(line.used || 0) + entry.hours;
}

function renderBudget(project) {
  elements.budgetRows.innerHTML = "";

  project.lots.forEach((lot, index) => {
    const drift = lot.planned - lot.committed;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><input value="${escapeAttribute(lot.name)}" aria-label="Nom du lot" data-field="name" data-index="${index}"></td>
      <td><input value="${lot.planned}" type="number" min="0" step="500" aria-label="Budget prévu" data-field="planned" data-index="${index}"></td>
      <td><input value="${lot.committed}" type="number" min="0" step="500" aria-label="Budget engagé" data-field="committed" data-index="${index}"></td>
      <td>${formatMoney(Math.max(drift, 0))}</td>
      <td class="${drift >= 0 ? "drift-good" : "drift-bad"}">${drift >= 0 ? "+" : ""}${formatMoney(drift)}</td>
    `;
    row.querySelectorAll("input").forEach((input) => {
      input.addEventListener("change", () => {
        const field = input.dataset.field;
        const value = field === "name" ? input.value : Number(input.value);
        project.lots[Number(input.dataset.index)][field] = value;
        saveProjects();
        renderProjectList();
        renderDetail();
      });
    });
    elements.budgetRows.append(row);
  });
}

function renderPurchases(project) {
  elements.purchaseRows.innerHTML = "";
  renderThemeSummary(elements.purchaseThemes, getThemeSummaries(project, "purchases"), "amount", "€");
  project.purchases.forEach((purchase, index) => {
    const theme = getThemeBudget(project, purchase.theme);
    const themeAmount = sumByTheme(project.purchases, purchase.theme, "amount");
    const validation = themeAmount <= theme.planned;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>
        <select aria-label="Thème achat" data-collection="purchases" data-field="theme" data-index="${index}">
          ${themeOptions(project, purchase.theme)}
        </select>
      </td>
      <td><input value="${escapeAttribute(purchase.supplier)}" aria-label="Fournisseur" data-collection="purchases" data-field="supplier" data-index="${index}"></td>
      <td>
        <input value="${escapeAttribute(purchase.item)}" aria-label="Objet de l'achat" data-collection="purchases" data-field="item" data-index="${index}">
        <input value="${escapeAttribute(purchase.orderRef)}" class="inline-subinput" aria-label="Référence commande" placeholder="Réf. commande" data-collection="purchases" data-field="orderRef" data-index="${index}">
      </td>
      <td><input value="${purchase.amount}" type="number" min="0" step="100" aria-label="Montant achat" data-collection="purchases" data-field="amount" data-index="${index}"></td>
      <td>
        <select aria-label="Statut achat" data-collection="purchases" data-field="status" data-index="${index}">
          ${purchaseStatusOptions(purchase.status)}
        </select>
      </td>
      <td>
        <span class="status-chip ${validation ? "done" : "warning"}">${validation ? "Budget OK" : "Dépassement"}</span>
        <small>${formatMoney(themeAmount)} / ${formatMoney(theme.planned)}</small>
      </td>
    `;
    bindOperationalInputs(row, project);
    elements.purchaseRows.append(row);
  });
}

function renderFaes(project) {
  elements.faeRows.innerHTML = "";
  project.faes.forEach((fae, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><input value="${escapeAttribute(fae.label)}" aria-label="Libellé FAE" data-collection="faes" data-field="label" data-index="${index}"></td>
      <td><input value="${fae.amount}" type="number" min="0" step="100" aria-label="Montant FAE" data-collection="faes" data-field="amount" data-index="${index}"></td>
      <td><input value="${fae.due}" type="date" aria-label="Échéance FAE" data-collection="faes" data-field="due" data-index="${index}"></td>
      <td>
        <select aria-label="Statut FAE" data-collection="faes" data-field="status" data-index="${index}">
          ${faeStatusOptions(fae.status)}
        </select>
      </td>
    `;
    bindOperationalInputs(row, project);
    elements.faeRows.append(row);
  });
}

function renderHours(project) {
  elements.hourRows.innerHTML = "";
  renderThemeSummary(elements.hourThemes, getThemeSummaries(project, "hours"), "used", "h");
  project.hours.forEach((hourLine, index) => {
    const variance = Number(hourLine.planned || 0) - Number(hourLine.used || 0);
    const themeHours = sumByTheme(project.hours, hourLine.theme, "used");
    const themeBudget = sumByTheme(project.hours, hourLine.theme, "planned");
    const validation = themeHours <= themeBudget;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>
        <select aria-label="Thème heures" data-collection="hours" data-field="theme" data-index="${index}">
          ${themeOptions(project, hourLine.theme)}
        </select>
      </td>
      <td><input value="${escapeAttribute(hourLine.task)}" aria-label="Équipe ou tâche" data-collection="hours" data-field="task" data-index="${index}"></td>
      <td><input value="${hourLine.planned}" type="number" min="0" step="1" aria-label="Heures prévues" data-collection="hours" data-field="planned" data-index="${index}"></td>
      <td><input value="${hourLine.used}" type="number" min="0" step="1" aria-label="Heures passées" data-collection="hours" data-field="used" data-index="${index}"></td>
      <td class="${variance >= 0 ? "drift-good" : "drift-bad"}">${variance >= 0 ? "+" : ""}${formatNumber(variance)} h</td>
      <td>
        <span class="status-chip ${validation ? "done" : "warning"}">${validation ? "Heures OK" : "À corriger"}</span>
        <small>${formatNumber(themeHours)} h / ${formatNumber(themeBudget)} h</small>
      </td>
    `;
    bindOperationalInputs(row, project);
    elements.hourRows.append(row);
  });
}

function renderProjectDeliveries(project) {
  renderProjectOrders(project);
  applyDeliveryView();
  const deliveries = technicianSchedule
    .filter((item) => item.kind === "delivery" && item.projectId === project.id)
    .slice()
    .sort((left, right) => new Date(left.date) - new Date(right.date));

  if (!deliveries.length) {
    elements.projectDeliveryList.innerHTML = `<p class="muted">Aucune commande ou livraison enregistrée pour ce chantier.</p>`;
    return;
  }

  elements.projectDeliveryList.innerHTML = "";
  deliveries.forEach((delivery) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "project-delivery-item";
    item.innerHTML = `
      <span class="schedule-readiness-dot${delivery.ready ? " is-ready" : " is-missing"}" title="${delivery.ready ? "Éléments disponibles" : "Éléments manquants"}"></span>
      <div>
        <strong>${escapeHtml(delivery.title)}</strong>
        <span>${formatDate(delivery.date)}${delivery.zone ? ` · ${escapeHtml(delivery.zone)}` : ""}</span>
        <small class="order-status ${delivery.orderStatus}">${orderStatusLabel(delivery.orderStatus)}</small>
        ${delivery.note ? `<small>${escapeHtml(delivery.note)}</small>` : ""}
      </div>
    `;
    item.addEventListener("click", () => {
      setActiveSpace("planning");
      selectTechnicianScheduleItem(delivery.id);
    });
    elements.projectDeliveryList.append(item);
  });
}

function setDeliveryView(view) {
  activeDeliveryView = view;
  applyDeliveryView();
}

function applyDeliveryView() {
  const showOrders = activeDeliveryView === "orders";
  elements.projectOrdersView.classList.toggle("is-hidden", !showOrders);
  elements.projectDeliveriesView.classList.toggle("is-hidden", showOrders);
  elements.projectOrdersViewBtn.classList.toggle("is-active", showOrders);
  elements.projectDeliveriesViewBtn.classList.toggle("is-active", !showOrders);
  elements.addProjectOrderBtn.classList.toggle("is-hidden", !showOrders);
}

function renderProjectOrders(project) {
  const orders = project.orders || [];
  project.orderZones ||= [];
  renderProjectOrderEditOptions(orders);
  renderProjectOrderZoneSuggestions(project);
  if (!orders.length && !project.orderZones.length) {
    elements.projectOrdersByZone.innerHTML = `<p class="muted">Aucune zone ou commande enregistrée. Crée une zone, puis ajoute les matériels à commander.</p>`;
    return;
  }

  const byZone = new Map();
  project.orderZones.forEach((zone) => byZone.set(zone, []));
  orders.forEach((order) => {
    const zone = order.zone || "Zone à préciser";
    if (!byZone.has(zone)) byZone.set(zone, []);
    byZone.get(zone).push(order);
  });
  elements.projectOrdersByZone.innerHTML = "";
  renderProjectOrderTotals(orders);
  [...byZone.entries()].sort(([left], [right]) => left.localeCompare(right, "fr")).forEach(([zone, zoneOrders]) => {
    const section = document.createElement("section");
    section.className = "project-order-zone";
    section.innerHTML = `
      <header><div><h3>${escapeHtml(zone)}</h3><span>${zoneOrders.length} commande${zoneOrders.length > 1 ? "s" : ""}</span></div><div class="project-zone-actions"><button class="icon-button small" type="button" title="Ajouter un élément dans cette zone" aria-label="Ajouter un élément dans cette zone"><span aria-hidden="true">+</span></button><button class="secondary-button danger-button project-zone-delete" type="button">Supprimer</button></div></header>
      <div class="table-wrap"><table class="ops-table project-orders-table"><thead><tr><th>Désignation</th><th>Qté</th><th>Fournisseur</th><th>Référence</th><th>Échéance</th><th>Statut</th><th></th></tr></thead><tbody></tbody></table></div>
    `;
    section.querySelector(".icon-button").addEventListener("click", () => openNewProjectOrderEditor(zone));
    section.querySelector(".project-zone-delete").addEventListener("click", () => deleteProjectOrderZone(zone));
    const body = section.querySelector("tbody");
    zoneOrders.sort((left, right) => new Date(left.date) - new Date(right.date)).forEach((order) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td><strong>${escapeHtml(order.item)}</strong>${order.note ? `<small>${escapeHtml(order.note)}</small>` : ""}</td><td>${formatNumber(order.quantity)} ${escapeHtml(order.unit)}</td><td>${escapeHtml(order.supplier || "À consulter")}</td><td>${escapeHtml(order.reference || "-")}</td><td>${formatDate(order.date)}</td><td><span class="order-status ${order.status}">${orderStatusLabel(order.status)}</span></td><td><div class="project-order-actions"><button class="icon-button small" type="button" title="Modifier la commande" aria-label="Modifier la commande"><span aria-hidden="true">✎</span></button><button class="secondary-button project-order-duplicate" type="button">Dupliquer</button></div></td>`;
      row.querySelector(".icon-button").addEventListener("click", () => selectProjectOrder(order.id));
      row.querySelector(".project-order-duplicate").addEventListener("click", () => duplicateProjectOrder(order.id));
      body.append(row);
    });
    elements.projectOrdersByZone.append(section);
  });
}

function renderProjectOrderTotals(orders) {
  if (!orders.length) return;
  const totals = new Map();
  orders.forEach((order) => {
    const item = String(order.item || "Élément à préciser").trim();
    const unit = String(order.unit || "u").trim();
    const key = `${item.toLocaleLowerCase("fr")}::${unit.toLocaleLowerCase("fr")}`;
    if (!totals.has(key)) totals.set(key, { item, unit, quantity: 0, zones: new Set() });
    const total = totals.get(key);
    total.quantity += Number(order.quantity) || 0;
    total.zones.add(order.zone || "Zone à préciser");
  });

  const section = document.createElement("section");
  section.className = "project-order-totals";
  section.innerHTML = `
    <header><div><p class="eyebrow">Synthèse toutes zones</p><h3>Total par item identique</h3></div><span>${totals.size} article${totals.size > 1 ? "s" : ""}</span></header>
    <div class="table-wrap"><table class="ops-table"><thead><tr><th>Désignation</th><th>Total</th><th>Zones concernées</th></tr></thead><tbody></tbody></table></div>
  `;
  const body = section.querySelector("tbody");
  [...totals.values()].sort((left, right) => left.item.localeCompare(right.item, "fr")).forEach((total) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td><strong>${escapeHtml(total.item)}</strong></td><td class="project-order-total-quantity">${formatNumber(total.quantity)} ${escapeHtml(total.unit)}</td><td>${escapeHtml([...total.zones].sort((left, right) => left.localeCompare(right, "fr")).join(", "))}</td>`;
    body.append(row);
  });
  elements.projectOrdersByZone.append(section);
}

function renderProjectOrderZoneSuggestions(project) {
  const zones = [...new Set([...(project.orderZones || []), ...(project.orders || []).map((order) => order.zone)].filter(Boolean))]
    .sort((left, right) => left.localeCompare(right, "fr"));
  elements.projectOrderZoneSuggestions.innerHTML = zones
    .map((zone) => `<option value="${escapeAttribute(zone)}"></option>`)
    .join("");
}

function renderProjectOrderEditOptions(orders = getSelectedProject()?.orders || []) {
  elements.projectOrderEditSelect.innerHTML = `<option value="">Nouvelle commande</option>${orders.map((order) => `<option value="${escapeAttribute(order.id)}">${escapeHtml(order.zone)} - ${escapeHtml(order.item)}</option>`).join("")}`;
  elements.projectOrderEditSelect.value = orders.some((order) => order.id === selectedProjectOrderId) ? selectedProjectOrderId : "";
  elements.projectOrderDeleteBtn.disabled = !elements.projectOrderEditSelect.value;
}

function openNewProjectOrderEditor(zone = "") {
  if (!requireProjectManagerAction()) return;
  selectedProjectOrderId = "";
  elements.projectOrderForm.reset();
  elements.projectOrderQuantityInput.value = "1";
  elements.projectOrderUnitInput.value = "u";
  elements.projectOrderDateInput.value = todayString();
  elements.projectOrderStatusInput.value = "a_faire";
  elements.projectOrderZoneInput.value = zone;
  renderProjectOrderEditOptions();
  elements.projectOrderSubmitBtn.textContent = "Enregistrer";
  elements.projectOrderForm.classList.remove("is-hidden");
  elements.projectOrderZoneInput.focus();
}

function addProjectOrderZone() {
  if (!requireProjectManagerAction()) return;
  const project = getSelectedProject();
  const zone = (prompt("Nom de la zone à créer") || "").trim().replace(/\s+/g, " ");
  if (!zone) return;
  project.orderZones ||= [];
  if (project.orderZones.some((item) => item.toLocaleLowerCase("fr") === zone.toLocaleLowerCase("fr"))) {
    alert("Cette zone existe déjà.");
    return;
  }
  project.orderZones.push(zone);
  saveProjects();
  renderDetail();
  openNewProjectOrderEditor(zone);
}

function deleteProjectOrderZone(zone) {
  if (!requireProjectManagerAction()) return;
  const project = getSelectedProject();
  const count = (project.orders || []).filter((order) => order.zone === zone).length;
  const message = count
    ? `Supprimer la zone "${zone}" et ses ${count} commande${count > 1 ? "s" : ""} ?`
    : `Supprimer la zone "${zone}" ?`;
  if (!confirm(message)) return;
  project.orderZones = (project.orderZones || []).filter((item) => item !== zone);
  project.orders = (project.orders || []).filter((order) => order.zone !== zone);
  if (selectedProjectOrderId && !project.orders.some((order) => order.id === selectedProjectOrderId)) closeProjectOrderEditor();
  saveProjects();
  renderDetail();
}

function closeProjectOrderEditor() {
  selectedProjectOrderId = "";
  elements.projectOrderForm.classList.add("is-hidden");
}

function selectProjectOrder(id) {
  const order = (getSelectedProject()?.orders || []).find((entry) => entry.id === id);
  if (!order) return closeProjectOrderEditor();
  selectedProjectOrderId = order.id;
  elements.projectOrderZoneInput.value = order.zone;
  elements.projectOrderItemInput.value = order.item;
  elements.projectOrderQuantityInput.value = order.quantity;
  elements.projectOrderUnitInput.value = order.unit;
  elements.projectOrderSupplierInput.value = order.supplier;
  elements.projectOrderReferenceInput.value = order.reference;
  elements.projectOrderDateInput.value = order.date;
  elements.projectOrderStatusInput.value = order.status;
  elements.projectOrderNoteInput.value = order.note;
  renderProjectOrderEditOptions();
  elements.projectOrderSubmitBtn.textContent = "Modifier";
  elements.projectOrderForm.classList.remove("is-hidden");
}

function saveProjectOrder(event) {
  event.preventDefault();
  if (!requireProjectManagerAction() || !elements.projectOrderForm.reportValidity()) return;
  const project = getSelectedProject();
  const values = { zone: elements.projectOrderZoneInput.value.trim(), item: elements.projectOrderItemInput.value.trim(), quantity: Number(elements.projectOrderQuantityInput.value), unit: elements.projectOrderUnitInput.value.trim(), supplier: elements.projectOrderSupplierInput.value.trim(), reference: elements.projectOrderReferenceInput.value.trim(), date: elements.projectOrderDateInput.value, status: elements.projectOrderStatusInput.value, note: elements.projectOrderNoteInput.value.trim() };
  project.orders ||= [];
  const existing = project.orders.find((order) => order.id === selectedProjectOrderId);
  if (existing) Object.assign(existing, values);
  else project.orders.push({ id: crypto.randomUUID(), ...values });
  if (!project.orderZones.some((zone) => zone.toLocaleLowerCase("fr") === values.zone.toLocaleLowerCase("fr"))) project.orderZones.push(values.zone);
  saveProjects();
  closeProjectOrderEditor();
  renderDetail();
}

function deleteSelectedProjectOrder() {
  if (!requireProjectManagerAction() || !selectedProjectOrderId) return;
  const project = getSelectedProject();
  const order = project.orders?.find((entry) => entry.id === selectedProjectOrderId);
  if (!order || !confirm(`Supprimer la commande "${order.item}" ?`)) return;
  project.orders = project.orders.filter((entry) => entry.id !== order.id);
  saveProjects();
  closeProjectOrderEditor();
  renderDetail();
}

function duplicateProjectOrder(id) {
  if (!requireProjectManagerAction()) return;
  const project = getSelectedProject();
  const order = project.orders?.find((entry) => entry.id === id);
  if (!order) return;
  const availableZones = [...new Set([...(project.orderZones || []), ...(project.orders || []).map((entry) => entry.zone)].filter(Boolean))];
  const suggestion = availableZones.length ? `\nZones existantes : ${availableZones.join(", ")}` : "";
  const targetZone = (prompt(`Dupliquer « ${order.item} » dans quelle zone ?${suggestion}`, order.zone) || "").trim().replace(/\s+/g, " ");
  if (!targetZone) return;
  project.orders.push({ ...order, id: crypto.randomUUID(), zone: targetZone });
  project.orderZones ||= [];
  if (!project.orderZones.some((zone) => zone.toLocaleLowerCase("fr") === targetZone.toLocaleLowerCase("fr"))) project.orderZones.push(targetZone);
  saveProjects();
  renderDetail();
}

function openDeliveryCreationForSelectedProject() {
  if (!requireProjectManagerAction()) return;
  const project = getSelectedProject();
  if (!project) return;
  setActiveSpace("planning");
  openNewTechnicianScheduleEditor();
  elements.technicianScheduleKindInput.value = "delivery";
  elements.technicianScheduleProjectInput.value = project.id;
  updateTechnicianScheduleKindFields();
  elements.technicianScheduleTitleInput.focus();
}

function orderStatusLabel(status) {
  return ({ a_faire: "À faire", en_cours: "En cours", faite: "Faite / livrée" })[status] || "À faire";
}

function renderGoNoGo() {
  const goNoGo = getSelectedGoNoGoCase();
  if (!goNoGo) return;

  syncGoNoGoSummaryFields(goNoGo);
  renderGoNoGoCaseList();
  renderAgencyPresetOptions();
  elements.gngStatusSelect.value = goNoGo.status || "interesse";
  elements.gngDownloadDateInput.value = goNoGo.downloadDate || "";
  elements.gngActionMenu.value = "";
  elements.gngCaseNameInput.value = goNoGo.name;
  elements.gngCaseClientInput.value = goNoGo.client;
  elements.gngCaseAmountInput.value = goNoGo.amount;
  elements.gngCaseDueInput.value = goNoGo.due;
  elements.gngActionInput.value = goNoGo.action || "";
  elements.gngFollowupInput.value = goNoGo.followup || "";

  elements.gngInfoFields.innerHTML = "";
  excelFieldGroups.forEach((group) => {
    const section = document.createElement("section");
    section.className = "excel-section";
    const fields = group.fields
      .map(([key, label, sheet, cell, type]) => {
        const value = goNoGo.fields[key] ?? "";
        return `
          <label>
            <span>${escapeHtml(label)}</span>
            <input
              value="${escapeAttribute(value)}"
              type="${type === "number" ? "number" : type === "email" ? "email" : type === "date" ? "date" : "text"}"
              ${type === "number" ? 'min="0" step="1000"' : ""}
              data-excel-key="${escapeAttribute(key)}"
              aria-label="${escapeAttribute(`${label} - ${sheet} ${cell}`)}"
            >
            <small>${escapeHtml(sheet)} · ${escapeHtml(cell)}</small>
          </label>
        `;
      })
      .join("");
    section.innerHTML = `
      <div class="excel-section-title">
        <h3>${escapeHtml(group.title)}</h3>
      </div>
      <div class="excel-field-grid">${fields}</div>
    `;
    section.querySelectorAll("input").forEach((input) => {
      input.addEventListener("change", () => updateGoNoGoField(input.dataset.excelKey, input.value));
    });
    elements.gngInfoFields.append(section);
  });

  elements.gngQuestionRows.innerHTML = "";
  goNoGoQuestions.forEach(([key, question, cell]) => {
    const row = document.createElement("div");
    row.className = "question-row";
    row.innerHTML = `
      <div>
        <strong>${escapeHtml(question)}</strong>
        <small>GoNoGo · ${escapeHtml(cell)}</small>
      </div>
      <select data-question-key="${escapeAttribute(key)}" aria-label="${escapeAttribute(question)}">
        <option value=""${!goNoGo.questions[key] ? " selected" : ""}>À statuer</option>
        <option value="yes"${goNoGo.questions[key] === "yes" ? " selected" : ""}>Oui</option>
        <option value="no"${goNoGo.questions[key] === "no" ? " selected" : ""}>Non</option>
      </select>
    `;
    row.querySelector("select").addEventListener("change", (event) => {
      goNoGo.questions[key] = event.target.value;
      saveGoNoGoCases();
      renderGoNoGoCaseList();
    });
    elements.gngQuestionRows.append(row);
  });
}

function renderGoNoGoCaseList() {
  elements.gngCaseList.innerHTML = "";
  const query = elements.gngSearchInput.value.trim().toLowerCase();
  const statusFilter = elements.gngStatusFilterSelect.value;
  const sortDirection = elements.gngDateSortSelect.value;
  const filteredCases = goNoGoCases
    .filter((item) => !query || item.name.toLowerCase().includes(query))
    .filter((item) => statusFilter === "all" || item.status === statusFilter)
    .sort((a, b) => {
      const first = getGoNoGoSortDate(a);
      const second = getGoNoGoSortDate(b);
      return sortDirection === "oldest" ? first - second : second - first;
    });

  filteredCases.forEach((item) => {
    const score = calculateGoNoGoQuestionScore(item);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `gng-case-card${item.id === selectedGoNoGoId ? " is-active" : ""}`;
    button.innerHTML = `
      <strong>${escapeHtml(item.name)}</strong>
      <span>${escapeHtml(item.client || "Client à renseigner")}</span>
      <small>${labelGoNoGoStatus(item.status)} · ${formatMoney(Number(item.amount || 0))}</small>
      <small>Téléchargé ${item.downloadDate ? formatDate(item.downloadDate) : "non"} · Remise ${item.due ? formatDate(item.due) : "à fixer"} · ${formatNumber(score)}% Oui</small>
    `;
    button.addEventListener("click", () => {
      selectedGoNoGoId = item.id;
      renderGoNoGo();
    });
    elements.gngCaseList.append(button);
  });

  if (!filteredCases.length) {
    elements.gngCaseList.innerHTML = `<p class="muted">Aucun Go / No-Go ne correspond à la recherche.</p>`;
  }
}

function getGoNoGoSortDate(goNoGo) {
  const value = goNoGo.downloadDate || goNoGo.due || "1900-01-01";
  return new Date(value).getTime() || 0;
}

function renderAgencyPresetOptions() {
  elements.gngAgencyPresetSelect.innerHTML = agencyPresets.length
    ? agencyPresets
        .map((preset) => `<option value="${escapeAttribute(preset.id)}">${escapeHtml(preset.name)}</option>`)
        .join("")
    : `<option value="">Aucune agence enregistrée</option>`;

  elements.applyAgencyPresetBtn.disabled = !agencyPresets.length;
  elements.deleteAgencyPresetBtn.disabled = !agencyPresets.length;
}

function getSelectedAgencyPreset() {
  return agencyPresets.find((preset) => preset.id === elements.gngAgencyPresetSelect.value);
}

function calculateGoNoGoQuestionScore(goNoGo) {
  const answeredYes = goNoGoQuestions.filter(([key]) => goNoGo.questions?.[key] === "yes").length;
  return (answeredYes / goNoGoQuestions.length) * 100;
}

function renderTodoList() {
  renderTodoProjectOptions();
  renderTodoOwnerOptions();
  const allTasks = getTodoWorkItems();
  renderTodoFilters(allTasks);
  const visibleTasks = filterTodoTasks(allTasks);
  renderTodoEditOptions(visibleTasks);
  const totalPromises = visibleTasks.length || 1;
  const doneCount = visibleTasks.filter((task) => task.status === "done").length;
  const blockedCount = visibleTasks.filter((task) => task.status === "blocked" || task.constraint).length;
  const weekLimit = addDays(new Date(), 7);
  const dueThisWeek = visibleTasks.filter((task) => {
    const dueDate = new Date(task.due);
    return dueDate >= startOfDay(new Date()) && dueDate <= weekLimit;
  }).length;

  elements.todoPpcValue.textContent = `${formatNumber((doneCount / totalPromises) * 100)}%`;
  elements.todoConstraintValue.textContent = blockedCount;
  elements.todoWeekValue.textContent = dueThisWeek;

  const columns = {
    backlog: elements.todoBacklogList,
    ready: elements.todoReadyList,
    doing: elements.todoDoingList,
    done: elements.todoDoneList
  };
  Object.values(columns).forEach((column) => {
    column.innerHTML = "";
  });

  visibleTasks
    .slice()
    .sort((a, b) => new Date(a.due) - new Date(b.due))
    .forEach((task) => {
      const target = columns[task.status === "blocked" ? "backlog" : task.status] || columns.backlog;
      target.append(createTodoTaskCard(task));
    });

  Object.values(columns).forEach((column) => {
    if (!column.children.length) column.innerHTML = `<p class="muted">Aucune tâche.</p>`;
  });

  renderTodoPlanning(visibleTasks);
  applyTodoView();
}

function setTodoView(view) {
  activeTodoView = view;
  applyTodoView();
}

function applyTodoView() {
  const isPlanning = activeTodoView === "planning";
  elements.todoTasksViewBtn.classList.toggle("is-active", !isPlanning);
  elements.todoPlanningViewBtn.classList.toggle("is-active", isPlanning);
  elements.todoTasksView.classList.toggle("is-hidden", isPlanning);
  elements.todoPlanningView.classList.toggle("is-hidden", !isPlanning);
}

function createTodoTaskCard(task) {
  const card = document.createElement("article");
  const projectName = getProjectName(task.projectId);
  card.className = `todo-card todo-${task.status}${task.source === "project-action" ? " todo-linked-action" : ""}${task.id === selectedTodoTaskId ? " is-selected" : ""}`;
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Modifier ${task.title}`);
  card.innerHTML = `
    <div class="todo-card-head">
      <strong>${escapeHtml(task.title)}</strong>
      <select class="todo-card-status" aria-label="Changer le statut de ${escapeAttribute(task.title)}">
        ${task.source === "project-action" ? projectActionStatusOptions(task.status) : todoStatusOptions(task.status)}
      </select>
    </div>
    <span class="todo-owner">Pour ${escapeHtml(task.owner)}</span>
    <small>${projectName ? `Chantier : ${escapeHtml(projectName)}` : "Hors chantier"}</small>
    <small>${formatDate(task.due)}${task.zone ? ` - ${escapeHtml(task.zone)}` : ""}</small>
    ${task.constraint ? `<p class="constraint-note">${escapeHtml(task.constraint)}</p>` : ""}
  `;
  const statusSelect = card.querySelector(".todo-card-status");
  statusSelect.addEventListener("click", (event) => event.stopPropagation());
  statusSelect.addEventListener("keydown", (event) => event.stopPropagation());
  statusSelect.addEventListener("change", (event) => {
    event.stopPropagation();
    updateTodoTaskStatus(task.id, event.target.value);
  });
  card.addEventListener("click", () => selectTodoTaskForEdit(task.id));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectTodoTaskForEdit(task.id);
    }
  });
  return card;
}

function renderTodoEditOptions(tasks = getTodoWorkItems()) {
  const currentValue = selectedTodoTaskId;
  elements.todoEditSelect.innerHTML = `
    <option value="">Nouvelle tâche</option>
    ${tasks
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title, "fr"))
      .map((task) => `<option value="${escapeAttribute(task.id)}">${escapeHtml(task.title)} - ${escapeHtml(task.owner)}</option>`)
      .join("")}
  `;
  elements.todoEditSelect.value = tasks.some((task) => task.id === currentValue) ? currentValue : "";
  elements.todoDeleteSelectedBtn.disabled = !elements.todoEditSelect.value;
}

function renderTodoFilters(tasks = getTodoWorkItems()) {
  const selectedOwner = elements.todoOwnerFilterSelect.value;
  const selectedProject = elements.todoProjectFilterSelect.value;
  const owners = [...new Set(tasks.map((task) => task.owner).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, "fr"));

  elements.todoOwnerFilterSelect.innerHTML = `
    <option value="__me__">Mes tâches</option>
    <option value="">Toutes les personnes</option>
    ${owners.map((owner) => `<option value="${escapeAttribute(owner)}">${escapeHtml(owner)}</option>`).join("")}
  `;
  const ownerValues = ["", "__me__", ...owners];
  const defaultOwner = todoOwnerFilterInitialized ? "" : "__me__";
  elements.todoOwnerFilterSelect.value = ownerValues.includes(selectedOwner) ? selectedOwner : defaultOwner;
  todoOwnerFilterInitialized = true;

  elements.todoProjectFilterSelect.innerHTML = `
    <option value="">Tous les chantiers</option>
    <option value="__none__">Hors chantier</option>
    ${projects.map((project) => `<option value="${escapeAttribute(project.id)}">${escapeHtml(project.name)}</option>`).join("")}
  `;
  const projectValues = ["", "__none__", ...projects.map((project) => project.id)];
  elements.todoProjectFilterSelect.value = projectValues.includes(selectedProject) ? selectedProject : "";
}

function filterTodoTasks(tasks = getTodoWorkItems()) {
  const owner = elements.todoOwnerFilterSelect.value;
  const projectId = elements.todoProjectFilterSelect.value;
  return tasks
    .filter((task) => !owner || (owner === "__me__" ? task.owner === getCurrentUserTaskOwner() : task.owner === owner))
    .filter((task) => {
      if (!projectId) return true;
      if (projectId === "__none__") return !task.projectId;
      return task.projectId === projectId;
    });
}

function clearTodoFilters() {
  elements.todoOwnerFilterSelect.value = "";
  elements.todoProjectFilterSelect.value = "";
  renderTodoList();
}

function clearCompletedTodoTasks() {
  if (!requireProjectManagerAction()) return;

  const completedTasks = todoTasks.filter((task) => task.status === "done");
  const completedActions = projects.reduce((count, project) => {
    return count + (project.actions || []).filter((action) => action.done).length;
  }, 0);
  const total = completedTasks.length + completedActions;

  if (!total) {
    alert("Aucune tâche faite à vider.");
    return;
  }

  const details = [
    completedTasks.length ? `${completedTasks.length} tâche${completedTasks.length > 1 ? "s" : ""} Todo` : "",
    completedActions ? `${completedActions} action${completedActions > 1 ? "s" : ""} chantier` : ""
  ].filter(Boolean).join(" et ");

  if (!confirm(`Supprimer ${details} terminée${total > 1 ? "s" : ""} ? Cette action est définitive.`)) return;

  todoTasks = todoTasks.filter((task) => task.status !== "done");
  projects.forEach((project) => {
    project.actions = (project.actions || []).filter((action) => !action.done);
  });
  selectedTodoTaskId = "";
  saveTodoTasks();
  saveProjects();
  clearTodoEditor();
  renderDetail();
}

function getTodoWorkItemById(taskId) {
  return getTodoWorkItems().find((task) => task.id === taskId);
}

function selectTodoTaskForEdit(taskId) {
  const task = getTodoWorkItemById(taskId);
  if (!task) {
    clearTodoEditor();
    return;
  }

  selectedTodoTaskId = task.id;
  elements.todoEditSelect.value = task.id;
  elements.todoTitleInput.value = task.title;
  elements.todoOwnerInput.value = task.owner;
  elements.todoZoneInput.value = task.zone || "";
  elements.todoProjectSelect.value = task.projectId || "";
  elements.todoDueInput.value = task.due || todayString();
  elements.todoStatusInput.innerHTML = task.source === "project-action" ? projectActionStatusOptions(task.status) : todoStatusOptions(task.status);
  elements.todoStatusInput.value = task.status || "backlog";
  elements.todoConstraintInput.value = task.constraint || "";
  elements.todoProjectSelect.disabled = task.source === "project-action";
  elements.todoZoneInput.disabled = task.source === "project-action";
  elements.todoConstraintInput.disabled = task.source === "project-action";
  elements.todoDeleteSelectedBtn.disabled = false;
  elements.todoSubmitBtn.textContent = "Modifier";
  renderTodoList();
  elements.todoTaskForm.classList.remove("is-hidden");
}

function openNewTodoEditor() {
  clearTodoEditor();
  elements.todoTaskForm.classList.remove("is-hidden");
  elements.todoTitleInput.focus();
}

function closeTodoEditor() {
  clearTodoEditor();
  elements.todoTaskForm.classList.add("is-hidden");
}

function clearTodoEditor() {
  selectedTodoTaskId = "";
  elements.todoTaskForm.reset();
  elements.todoEditSelect.value = "";
  elements.todoStatusInput.innerHTML = todoStatusOptions("backlog");
  elements.todoStatusInput.value = "backlog";
  elements.todoDueInput.value = todayString();
  elements.todoProjectSelect.disabled = false;
  elements.todoOwnerInput.value = getCurrentUserTaskOwner();
  elements.todoZoneInput.disabled = false;
  elements.todoConstraintInput.disabled = false;
  elements.todoDeleteSelectedBtn.disabled = true;
  elements.todoSubmitBtn.textContent = "Enregistrer";
  renderTodoList();
}

function renderTodoPlanning(tasks = getTodoWorkItems()) {
  elements.todoPlanningList.innerHTML = "";
  const sortedTasks = tasks
    .slice()
    .sort((a, b) => new Date(a.due) - new Date(b.due));

  if (!sortedTasks.length) {
    elements.todoPlanningList.innerHTML = `<p class="muted">Aucune tâche dans le planning filtré.</p>`;
    return;
  }

  const weeks = groupTodoTasksByWeek(sortedTasks);
  weeks.forEach(({ weekStart, weekEnd, tasks: weekTasks }) => {
    const section = document.createElement("section");
    const doneCount = weekTasks.filter((task) => task.status === "done").length;
    const constraintCount = weekTasks.filter((task) => task.status === "blocked" || task.constraint).length;
    section.className = "planning-week";
    section.innerHTML = `
      <header class="planning-week-head">
        <div>
          <span>Semaine ${getIsoWeekNumber(weekStart)}</span>
          <strong>${formatShortDate(weekStart)} - ${formatShortDate(weekEnd)}</strong>
        </div>
        <div class="planning-week-stats">
          <span>${weekTasks.length} tâches</span>
          <span>${doneCount} faites</span>
          <span>${constraintCount} contraintes</span>
        </div>
      </header>
      <div class="planning-week-grid"></div>
    `;

    const grid = section.querySelector(".planning-week-grid");
    getWeekDays(weekStart).forEach((day) => {
      const dayTasks = weekTasks.filter((task) => isSameDay(parseTodoDate(task.due), day));
      const column = document.createElement("div");
      column.className = `planning-day${isSameDay(day, new Date()) ? " is-today" : ""}`;
      column.innerHTML = `
        <div class="planning-day-head">
          <strong>${formatWeekday(day)}</strong>
          <span>${formatShortDate(day)}</span>
        </div>
        <div class="planning-day-tasks"></div>
      `;

      const taskList = column.querySelector(".planning-day-tasks");
      if (!dayTasks.length) {
        taskList.innerHTML = `<p class="muted">Libre</p>`;
      } else {
        dayTasks.forEach((task) => taskList.append(createPlanningTaskCard(task)));
      }
      grid.append(column);
    });

    elements.todoPlanningList.append(section);
  });
}

function createPlanningTaskCard(task) {
  const item = document.createElement("button");
  const projectName = getProjectName(task.projectId) || "Hors chantier";
  const dueKind = getTodoDueKind(task);
  item.type = "button";
  item.className = `planning-item todo-${task.status} due-${dueKind.key}`;
  item.innerHTML = `
    <span class="planning-chip">${escapeHtml(dueKind.label)}</span>
    <strong>${escapeHtml(task.title)}</strong>
    <small>${escapeHtml(task.owner)} · ${escapeHtml(projectName)}</small>
    <small>${escapeHtml(task.zone || "Zone à préciser")}</small>
    ${task.constraint ? `<em>${escapeHtml(task.constraint)}</em>` : ""}
  `;
  item.addEventListener("click", () => {
    setTodoView("tasks");
    selectTodoTaskForEdit(task.id);
  });
  return item;
}

function getTodoDueKind(task) {
  const due = startOfDay(new Date(task.due));
  const today = startOfDay(new Date());
  const weekLimit = addDays(today, 7);
  if (task.status !== "done" && due < today) return { key: "late", label: "En retard" };
  if (due.getTime() === today.getTime()) return { key: "today", label: "Aujourd'hui" };
  if (due <= weekLimit) return { key: "week", label: "Semaine" };
  return { key: "next", label: "À venir" };
}

function groupTodoTasksByWeek(tasks) {
  const groups = new Map();
  tasks.forEach((task) => {
    const weekStart = getWeekStart(parseTodoDate(task.date || task.due));
    const key = toDateKey(weekStart);
    if (!groups.has(key)) {
      groups.set(key, {
        weekStart,
        weekEnd: addDays(weekStart, 6),
        tasks: []
      });
    }
    groups.get(key).tasks.push(task);
  });
  return [...groups.values()].sort((a, b) => a.weekStart - b.weekStart);
}

function getWeekDays(weekStart) {
  return Array.from({ length: 7 }, (_, index) => addDays(weekStart, index));
}

function getWeekStart(date) {
  const copy = startOfDay(date);
  const day = copy.getDay() || 7;
  copy.setDate(copy.getDate() - day + 1);
  return copy;
}

function getIsoWeekNumber(date) {
  const copy = startOfDay(date);
  copy.setDate(copy.getDate() + 4 - (copy.getDay() || 7));
  const yearStart = new Date(copy.getFullYear(), 0, 1);
  return Math.ceil((((copy - yearStart) / 86400000) + 1) / 7);
}

function parseTodoDate(value) {
  const [year, month, day] = String(value).split("-").map(Number);
  if (year && month && day) return new Date(year, month - 1, day);
  return new Date(value);
}

function isSameDay(first, second) {
  return toDateKey(first) === toDateKey(second);
}

function toDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatShortDate(date) {
  return new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "short" }).format(date);
}

function formatWeekday(date) {
  return new Intl.DateTimeFormat("fr-FR", { weekday: "short" }).format(date);
}

function getTodoWorkItems() {
  const projectActions = projects.flatMap((project) => {
    return (project.actions || []).map((action, index) => ({
      id: `project-action:${project.id}:${index}`,
      title: action.label,
      owner: action.owner || project.manager || "Responsable chantier",
      projectId: project.id,
      zone: project.city || "",
      milestone: "Action chantier",
      due: action.due || project.nextDate || todayString(),
      status: action.done ? "done" : "ready",
      constraint: "",
      source: "project-action",
      actionIndex: index
    }));
  });

  return [
    ...todoTasks.map((task) => ({ ...task, source: "todo" })),
    ...projectActions
  ];
}

function renderTodoProjectOptions() {
  const selected = elements.todoProjectSelect.value;
  elements.todoProjectSelect.innerHTML = todoProjectOptions(selected);
  elements.todoProjectSelect.value = projects.some((project) => project.id === selected) ? selected : "";
}

function renderTodoOwnerOptions() {
  const selected = elements.todoOwnerInput.value;
  const profileOptions = getAssignableProfiles().map((profile) => ({
    value: getTaskOwnerName(profile.email),
    label: `${getTaskOwnerName(profile.email)} - ${roleLabel(profile.role)}`
  }));
  const historicOwners = getTodoWorkItems().map((task) => task.owner).filter(Boolean)
    .filter((owner) => !profileOptions.some((option) => option.value === owner))
    .map((owner) => ({ value: owner, label: `${owner} - ancien responsable` }));
  const options = [...profileOptions, ...historicOwners];
  const target = options.some((option) => option.value === selected) ? selected : getCurrentUserTaskOwner();

  elements.todoOwnerInput.innerHTML = options.length
    ? options.map((option) => `<option value="${escapeAttribute(option.value)}">${escapeHtml(option.label)}</option>`).join("")
    : `<option value="${escapeAttribute(getCurrentUserTaskOwner())}">${escapeHtml(getCurrentUserTaskOwner())}</option>`;
  elements.todoOwnerInput.value = target;
}

function getAssignableProfiles() {
  const profiles = [...userProfiles];
  if (currentProfile && !profiles.some((profile) => profile.id === currentProfile.id)) profiles.push(currentProfile);
  return profiles.sort((left, right) => getTaskOwnerName(left.email).localeCompare(getTaskOwnerName(right.email), "fr"));
}

function getCurrentUserTaskOwner() {
  return getTaskOwnerName(currentProfile?.email || currentUser?.email || "Moi");
}

function getTaskOwnerName(email) {
  const localPart = String(email || "").split("@")[0].trim();
  if (!localPart) return "Responsable";
  return localPart.split(".").filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

function renderTechnicianSchedule() {
  renderTechnicianScheduleProjectOptions();
  renderTechnicianScheduleAssignees();
  renderTechnicianScheduleEditOptions();
  elements.technicianScheduleList.innerHTML = "";

  if (!technicianSchedule.length) {
    updateTechnicianScheduleHistoryButton(elements.technicianScheduleHistoryBtn, 0);
    elements.technicianScheduleList.innerHTML = `<p class="muted">Aucune intervention planifiée.</p>`;
    return;
  }

  const { weeks, historicalCount } = getTechnicianScheduleWeeks(technicianSchedule);
  updateTechnicianScheduleHistoryButton(elements.technicianScheduleHistoryBtn, historicalCount);
  if (!weeks.length) {
    elements.technicianScheduleList.innerHTML = `<p class="muted">Aucune intervention à partir de la semaine S-1. Consulte l'historique pour voir les semaines précédentes.</p>`;
    return;
  }
  weeks.forEach(({ weekStart, weekEnd, tasks }) => {
    const section = document.createElement("section");
    const taskCount = tasks.filter((item) => item.kind !== "delivery").length;
    const deliveryCount = tasks.filter((item) => item.kind === "delivery").length;
    section.className = "planning-week geo-planning-week";
    section.innerHTML = `
      <header class="planning-week-head">
        <div>
          <span>Semaine ${getIsoWeekNumber(weekStart)}</span>
          <strong>${formatShortDate(weekStart)} - ${formatShortDate(weekEnd)}</strong>
        </div>
        <div class="planning-week-stats"><span>${taskCount} tâche${taskCount > 1 ? "s" : ""}</span><span>${deliveryCount} livraison${deliveryCount > 1 ? "s" : ""}</span></div>
      </header>
      <div class="geo-planning-grid"></div>
    `;
    const grid = section.querySelector(".geo-planning-grid");
    renderGeoPlanningWeek(grid, weekStart, tasks);
    elements.technicianScheduleList.append(section);
  });
}

function getTechnicianScheduleWeeks(items) {
  const allWeeks = groupTodoTasksByWeek(items);
  const cutoff = getWeekStart(new Date());
  cutoff.setDate(cutoff.getDate() - 7);
  const historicalWeeks = allWeeks.filter((week) => week.weekStart < cutoff);
  return {
    weeks: showTechnicianScheduleHistory ? allWeeks : allWeeks.filter((week) => week.weekStart >= cutoff),
    historicalCount: historicalWeeks.length
  };
}

function updateTechnicianScheduleHistoryButton(button, historicalCount) {
  if (!historicalCount) {
    button.textContent = showTechnicianScheduleHistory ? "Masquer l'historique" : "Historique";
    return;
  }
  button.textContent = showTechnicianScheduleHistory
    ? "Masquer l'historique"
    : `Historique (${historicalCount})`;
}

function toggleTechnicianScheduleHistory() {
  showTechnicianScheduleHistory = !showTechnicianScheduleHistory;
  renderTechnicianSchedule();
  renderTechPlanning();
}

function exportTechnicianSchedulePdf() {
  const source = document.querySelector(".technician-schedule-panel");
  const printWindow = window.open("", "_blank", "width=1400,height=900");
  if (!printWindow) {
    alert("La fenêtre d'impression a été bloquée par le navigateur.");
    return;
  }

  const planning = source.cloneNode(true);
  planning.querySelector(".todo-form")?.remove();
  planning.querySelector(".panel-heading-actions")?.remove();
  planning.querySelectorAll("button").forEach((button) => button.remove());
  const stylesheetText = getLoadedStylesheetText();
  printWindow.document.write(`<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>Planning techniciens</title><style>${stylesheetText}\n@page { size: landscape; margin: 10mm; } body { margin: 0; padding: 0; background: #ffffff; } .technician-schedule-panel { width: 100%; max-width: none; border: 0; box-shadow: none; } .geo-planning-week, .geo-planning-grid { break-inside: avoid; } * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }</style></head><body>${planning.outerHTML}</body></html>`);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

function getLoadedStylesheetText() {
  return [...document.styleSheets].map((sheet) => {
    try {
      return [...sheet.cssRules].map((rule) => rule.cssText).join("\n");
    } catch (error) {
      console.warn("Feuille de styles non disponible pour l'impression", error);
      return "";
    }
  }).join("\n");
}

function renderGeoPlanningWeek(grid, weekStart, items) {
  const days = getWeekDays(weekStart);
  const taskRows = new Map();
  items.filter((item) => item.kind !== "delivery").forEach((item) => {
    const key = getScheduleLocationKey(item);
    if (!taskRows.has(key)) taskRows.set(key, { label: getScheduleLocationLabel(item), items: [] });
    taskRows.get(key).items.push(item);
  });

  grid.append(createGeoHeaderCell("Chantier / localisation"));
  days.forEach((day) => grid.append(createGeoHeaderCell(`${formatWeekday(day)} ${formatShortDate(day)}`, isSameDay(day, new Date()))));

  [...taskRows.values()].sort((left, right) => left.label.localeCompare(right.label, "fr")).forEach((row) => {
    grid.append(createGeoRowLabel(row.label));
    days.forEach((day) => grid.append(createGeoDayCell(row.items.filter((item) => isSameDay(parseTodoDate(item.date), day)))));
  });

  grid.append(createGeoRowLabel("Livraisons prévues", true));
  days.forEach((day) => grid.append(createGeoDayCell(items.filter((item) => item.kind === "delivery" && isSameDay(parseTodoDate(item.date), day)), true)));
}

function getScheduleLocationKey(item) {
  return `${item.projectId || "outside"}::${item.zone || "default"}`;
}

function getScheduleLocationLabel(item) {
  const project = projects.find((project) => project.id === item.projectId);
  const chantier = project ? `${project.name} - ${project.city}` : "Hors chantier";
  return item.zone ? `${chantier} · ${item.zone}` : chantier;
}

function createGeoHeaderCell(label, isToday = false) {
  const cell = document.createElement("div");
  cell.className = `geo-planning-head${isToday ? " is-today" : ""}`;
  cell.textContent = label;
  return cell;
}

function createGeoRowLabel(label, isDelivery = false) {
  const cell = document.createElement("div");
  cell.className = `geo-planning-row-label${isDelivery ? " is-delivery" : ""}`;
  cell.textContent = label;
  return cell;
}

function createGeoDayCell(items, isDelivery = false) {
  const cell = document.createElement("div");
  cell.className = `geo-planning-cell${isDelivery ? " is-delivery" : ""}`;
  if (!items.length) return cell;
  items.forEach((item) => cell.append(createTechnicianScheduleCard(item)));
  return cell;
}

function createTechnicianScheduleCard(item) {
  const project = projects.find((project) => project.id === item.projectId);
  const card = document.createElement("article");
  card.className = `geo-planning-item${item.kind === "delivery" ? " is-delivery" : ""}`;
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.innerHTML = `
    <strong><button class="schedule-readiness-dot schedule-readiness-toggle${item.ready ? " is-ready" : " is-missing"}" type="button" title="${item.ready ? "Éléments disponibles : cliquer pour signaler un manque" : "Éléments manquants : cliquer quand tout est disponible"}" aria-label="Modifier l'état de préparation"></button>${escapeHtml(item.title)}</strong>
    ${item.kind === "delivery" ? `<small>${escapeHtml(project ? `${project.name} · ${project.city}` : "Hors chantier")}</small>` : `<small>${escapeHtml(item.technicians.join(", ") || "À affecter")}</small>`}
    ${item.note ? `<em>Commentaire : ${escapeHtml(item.note)}</em>` : ""}
  `;
  card.addEventListener("click", () => selectTechnicianScheduleItem(item.id));
  attachScheduleReadinessToggle(card, item.id);
  return card;
}

function attachScheduleReadinessToggle(card, itemId) {
  const toggle = card.querySelector(".schedule-readiness-toggle");
  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleTechnicianScheduleReadiness(itemId);
  });
}

function toggleTechnicianScheduleReadiness(itemId) {
  const item = technicianSchedule.find((entry) => entry.id === itemId);
  if (!item) return;
  const assignedToCurrentTechnician = item.technicians.includes(getCurrentUserTaskOwner());
  if (!canManageProjects() && !assignedToCurrentTechnician) {
    alert("Cette tâche n'est pas affectée à ton compte.");
    return;
  }
  item.ready = !item.ready;
  saveTechnicianSchedule();
  renderTechnicianSchedule();
  renderTechPlanning();
}

function renderTechnicianScheduleProjectOptions() {
  const selected = elements.technicianScheduleProjectInput.value;
  elements.technicianScheduleProjectInput.innerHTML = todoProjectOptions(selected);
  elements.technicianScheduleProjectInput.value = projects.some((project) => project.id === selected) ? selected : "";
  renderTechnicianScheduleZoneOptions();
}

function renderTechnicianScheduleZoneOptions() {
  const projectId = elements.technicianScheduleProjectInput.value;
  const zones = [...new Set(technicianSchedule
    .filter((item) => item.projectId === projectId && item.zone)
    .map((item) => item.zone.trim())
    .filter(Boolean))]
    .sort((left, right) => left.localeCompare(right, "fr"));
  elements.technicianScheduleZoneSuggestions.innerHTML = zones
    .map((zone) => `<option value="${escapeAttribute(zone)}"></option>`)
    .join("");
}

function updateTechnicianScheduleKindFields() {
  const isOrder = elements.technicianScheduleKindInput.value === "delivery";
  elements.technicianScheduleOrderStatusField.classList.toggle("is-hidden", !isOrder);
}

function renderTechnicianScheduleAssignees(selected = getSelectedTechnicianScheduleAssignees()) {
  const technicians = getAvailableTechnicianNames();
  if (!technicians.length) {
    elements.technicianScheduleAssignees.innerHTML = `<p class="muted">Aucun technicien disponible. Attribue d'abord le rôle Technicien aux comptes concernés.</p>`;
    return;
  }
  elements.technicianScheduleAssignees.innerHTML = technicians.map((name) => {
    return `<label class="technician-assignee-option"><input type="checkbox" value="${escapeAttribute(name)}"${selected.includes(name) ? " checked" : ""} /><span>${escapeHtml(name)}</span></label>`;
  }).join("");
}

function getAvailableTechnicianNames() {
  const accountTechnicians = getAssignableProfiles()
    .filter((profile) => profile.role === "technician")
    .map((profile) => getTaskOwnerName(profile.email));
  return [...new Set([...accountTechnicians, ...manualTechnicians])].sort((left, right) => left.localeCompare(right, "fr"));
}

function addManualTechnician() {
  if (!requireProjectManagerAction()) return;
  const name = (prompt("Nom du technicien à ajouter") || "").trim().replace(/\s+/g, " ");
  if (!name) return;
  if (getAvailableTechnicianNames().some((item) => item.toLowerCase() === name.toLowerCase())) {
    alert("Ce technicien est déjà disponible dans le planning.");
    return;
  }
  manualTechnicians.push(name);
  saveManualTechnicians();
  renderTechnicianSchedule();
}

function getSelectedTechnicianScheduleAssignees() {
  return [...elements.technicianScheduleAssignees.querySelectorAll("input:checked")].map((input) => input.value);
}

function renderTechnicianScheduleEditOptions() {
  elements.technicianScheduleEditSelect.innerHTML = `
    <option value="">Nouvelle intervention</option>
    ${technicianSchedule.slice().sort((left, right) => new Date(left.date) - new Date(right.date)).map((item) => `<option value="${escapeAttribute(item.id)}">${escapeHtml(item.date)} - ${escapeHtml(item.title)}</option>`).join("")}
  `;
  elements.technicianScheduleEditSelect.value = technicianSchedule.some((item) => item.id === selectedTechnicianScheduleId) ? selectedTechnicianScheduleId : "";
  elements.technicianScheduleDeleteBtn.disabled = !elements.technicianScheduleEditSelect.value;
}

function selectTechnicianScheduleItem(id) {
  const item = technicianSchedule.find((entry) => entry.id === id);
  if (!item) {
    clearTechnicianScheduleEditor();
    return;
  }
  selectedTechnicianScheduleId = item.id;
  elements.technicianScheduleTitleInput.value = item.title;
  elements.technicianScheduleKindInput.value = item.kind;
  elements.technicianScheduleProjectInput.value = item.projectId;
  renderTechnicianScheduleZoneOptions();
  elements.technicianScheduleZoneInput.value = item.zone;
  elements.technicianScheduleOrderStatusInput.value = item.orderStatus || "a_faire";
  elements.technicianScheduleDateInput.value = item.date;
  elements.technicianScheduleReadyInput.checked = item.ready;
  elements.technicianScheduleNoteInput.value = item.note;
  renderTechnicianScheduleAssignees(item.technicians);
  renderTechnicianScheduleEditOptions();
  elements.technicianScheduleSubmitBtn.textContent = "Modifier";
  updateTechnicianScheduleKindFields();
  elements.technicianScheduleForm.classList.remove("is-hidden");
}

function openNewTechnicianScheduleEditor() {
  clearTechnicianScheduleEditor();
  elements.technicianScheduleForm.classList.remove("is-hidden");
  elements.technicianScheduleTitleInput.focus();
}

function closeTechnicianScheduleEditor() {
  clearTechnicianScheduleEditor();
  elements.technicianScheduleForm.classList.add("is-hidden");
}

function clearTechnicianScheduleEditor() {
  selectedTechnicianScheduleId = "";
  elements.technicianScheduleForm.reset();
  elements.technicianScheduleDateInput.value = todayString();
  elements.technicianScheduleReadyInput.checked = false;
  elements.technicianScheduleKindInput.value = "task";
  elements.technicianScheduleOrderStatusInput.value = "a_faire";
  updateTechnicianScheduleKindFields();
  renderTechnicianScheduleProjectOptions();
  renderTechnicianScheduleAssignees([]);
  renderTechnicianScheduleEditOptions();
  elements.technicianScheduleSubmitBtn.textContent = "Enregistrer";
}

function saveTechnicianScheduleItem(event) {
  event.preventDefault();
  if (!requireProjectManagerAction()) return;
  if (!elements.technicianScheduleForm.reportValidity()) return;

  const values = {
    title: elements.technicianScheduleTitleInput.value.trim(),
    kind: elements.technicianScheduleKindInput.value,
    projectId: elements.technicianScheduleProjectInput.value,
    zone: elements.technicianScheduleZoneInput.value.trim(),
    orderStatus: elements.technicianScheduleOrderStatusInput.value,
    date: elements.technicianScheduleDateInput.value,
    ready: elements.technicianScheduleReadyInput.checked,
    technicians: getSelectedTechnicianScheduleAssignees(),
    note: elements.technicianScheduleNoteInput.value.trim()
  };
  if (values.kind !== "delivery" && !values.technicians.length) {
    alert("Affecte au moins un technicien à cette intervention.");
    return;
  }

  if (selectedTechnicianScheduleId) {
    const item = technicianSchedule.find((entry) => entry.id === selectedTechnicianScheduleId);
    if (!item) return;
    Object.assign(item, values);
  } else {
    const item = normalizeTechnicianScheduleItem({ id: crypto.randomUUID(), ...values });
    technicianSchedule.push(item);
    selectedTechnicianScheduleId = item.id;
  }
  saveTechnicianSchedule();
  renderTechnicianSchedule();
  closeTechnicianScheduleEditor();
  renderTechPlanning();
}

function deleteSelectedTechnicianScheduleItem() {
  if (!requireProjectManagerAction() || !selectedTechnicianScheduleId) return;
  const item = technicianSchedule.find((entry) => entry.id === selectedTechnicianScheduleId);
  if (!item || !confirm(`Supprimer l'intervention "${item.title}" ?`)) return;
  technicianSchedule = technicianSchedule.filter((entry) => entry.id !== item.id);
  saveTechnicianSchedule();
  closeTechnicianScheduleEditor();
  renderTechnicianSchedule();
  renderTechPlanning();
}

function todoProjectOptions(selected) {
  return [
    `<option value=""${!selected ? " selected" : ""}>Hors chantier</option>`,
    ...projects.map((project) => `<option value="${escapeAttribute(project.id)}"${project.id === selected ? " selected" : ""}>${escapeHtml(project.name)}</option>`)
  ].join("");
}

function getProjectName(projectId) {
  return projects.find((project) => project.id === projectId)?.name || "";
}

function parseProjectActionId(taskId) {
  const match = String(taskId).match(/^project-action:(.+):(\d+)$/);
  if (!match) return null;
  return {
    projectId: match[1],
    actionIndex: Number(match[2])
  };
}

function bindOperationalInputs(row, project) {
  row.querySelectorAll("input, select").forEach((input) => {
    input.addEventListener("change", () => {
      if (!requireProjectManagerAction()) return;
      const collection = input.dataset.collection;
      const field = input.dataset.field;
      const index = Number(input.dataset.index);
      const numericFields = ["amount", "planned", "used"];
      project[collection][index][field] = numericFields.includes(field) ? Number(input.value) : input.value;
      saveProjects();
      renderProjectList();
      renderDetail();
    });
  });
}

function renderBillingChart(totals) {
  const max = Math.max(totals.engagement, totals.faeBilled, totals.faePending, 1);
  elements.engagementBar.style.width = `${Math.min((totals.engagement / max) * 100, 100)}%`;
  elements.billedBar.style.width = `${Math.min((totals.faeBilled / max) * 100, 100)}%`;
  elements.pendingFaeBar.style.width = `${Math.min((totals.faePending / max) * 100, 100)}%`;
}

function renderThemeSummary(container, summaries, valueKey, unit) {
  container.innerHTML = "";
  summaries.forEach((summary) => {
    const ratio = summary.budget ? Math.min((summary[valueKey] / summary.budget) * 100, 140) : 0;
    const card = document.createElement("div");
    card.className = "theme-card";
    card.innerHTML = `
      <div>
        <strong>${escapeHtml(summary.theme)}</strong>
        <span>${formatThemeValue(summary[valueKey], unit)} / ${formatThemeValue(summary.budget, unit)}</span>
      </div>
      <div class="theme-meter" aria-hidden="true"><span style="width:${Math.min(ratio, 100)}%"></span></div>
      <span class="status-chip ${summary[valueKey] <= summary.budget ? "done" : "warning"}">${summary[valueKey] <= summary.budget ? "Validé" : "À revoir"}</span>
    `;
    container.append(card);
  });
}

function getThemeSummaries(project, collection) {
  return project.lots.map((lot) => {
    if (collection === "purchases") {
      return {
        theme: lot.name,
        budget: Number(lot.planned || 0),
        amount: sumByTheme(project.purchases, lot.name, "amount")
      };
    }

    return {
      theme: lot.name,
      budget: sumByTheme(project.hours, lot.name, "planned"),
      used: sumByTheme(project.hours, lot.name, "used")
    };
  });
}

function getThemeBudget(project, themeName) {
  return project.lots.find((lot) => lot.name === themeName) || { name: themeName, planned: 0, committed: 0 };
}

function sumByTheme(rows, themeName, field) {
  return rows
    .filter((row) => row.theme === themeName)
    .reduce((sum, row) => sum + Number(row[field] || 0), 0);
}

function renderActions(project) {
  elements.actionList.innerHTML = "";
  project.actions.forEach((action, index) => {
    const item = document.createElement("label");
    item.className = `action-item${action.done ? " done" : ""}`;
    item.innerHTML = `
      <input type="checkbox" ${action.done ? "checked" : ""} aria-label="Action terminée">
      <span>
        <strong>${escapeHtml(action.label)}</strong>
        <span>${escapeHtml(action.owner)} · ${formatDate(action.due)}</span>
      </span>
    `;
    item.querySelector("input").addEventListener("change", (event) => {
      project.actions[index].done = event.target.checked;
      saveProjects();
      renderDetail();
      renderTodoList();
    });
    elements.actionList.append(item);
  });
}

function renderMilestones(project) {
  elements.milestoneList.innerHTML = "";
  [...project.milestones].sort((a, b) => a.date.localeCompare(b.date)).forEach((milestone) => {
    const item = document.createElement("div");
    item.className = "milestone-item";
    item.innerHTML = `
      <span class="milestone-dot" aria-hidden="true"></span>
      <span>
        <strong>${escapeHtml(milestone.label)}</strong>
        <span>${formatDate(milestone.date)}</span>
      </span>
    `;
    elements.milestoneList.append(item);
  });
}

function updateProject(field, value) {
  if (!requireProjectManagerAction()) return;
  const project = getSelectedProject();
  project[field] = value;
  saveProjects();
  renderProjectList();
  renderDetail();
}

function createProject(event) {
  if (!requireProjectManagerAction()) return;
  const form = elements.projectDialog.querySelector("form");
  if (!form.reportValidity()) {
    event.preventDefault();
    return;
  }

  const revenue = Number(elements.newRevenue.value);
  const project = {
    id: crypto.randomUUID(),
    name: elements.newName.value,
    client: elements.newClient.value,
    city: elements.newCity.value,
    manager: "Axel Fournier",
    status: "etude",
    revenue,
    progress: 0,
    nextDate: new Date().toISOString().slice(0, 10),
    notes: "",
    lots: [
      { name: "Études", planned: Math.round(revenue * 0.08), committed: 0 },
      { name: "Matériel CVC", planned: Math.round(revenue * 0.42), committed: 0 },
      { name: "Main d'oeuvre", planned: Math.round(revenue * 0.28), committed: 0 }
    ],
    purchases: [{ theme: "Matériel CVC", supplier: "À consulter", item: "Matériel CVC", orderRef: "", amount: 0, status: "devis" }],
    orders: [],
    orderZones: [],
    faes: [{ label: "Situation initiale", amount: 0, due: new Date().toISOString().slice(0, 10), status: "a_etablir" }],
    hours: [{ theme: "Main d'oeuvre", task: "Préparation chantier", planned: 0, used: 0 }],
    timeEntries: [],
    actions: [{ label: "Préparer lancement affaire", owner: "Axel", due: new Date().toISOString().slice(0, 10), done: false }],
    milestones: [{ label: "Revue de lancement", date: new Date().toISOString().slice(0, 10) }]
  };

  projects.unshift(project);
  selectedId = project.id;
  saveProjects();
  form.reset();
  render();
}

function addLot() {
  if (!requireProjectManagerAction()) return;
  const project = getSelectedProject();
  project.lots.push({ name: "Nouveau lot", planned: 0, committed: 0 });
  saveProjects();
  renderDetail();
}

function addPurchase() {
  if (!requireProjectManagerAction()) return;
  const project = getSelectedProject();
  project.purchases.unshift({ theme: project.lots[0]?.name || "Général", supplier: "Nouveau fournisseur", item: "Achat à préciser", orderRef: "", amount: 0, status: "devis" });
  saveProjects();
  renderDetail();
}

function addFae() {
  if (!requireProjectManagerAction()) return;
  const project = getSelectedProject();
  project.faes.unshift({ label: "Nouvelle FAE", amount: 0, due: project.nextDate || new Date().toISOString().slice(0, 10), status: "a_etablir" });
  saveProjects();
  renderDetail();
}

function addHourLine() {
  if (!requireProjectManagerAction()) return;
  const project = getSelectedProject();
  project.hours.unshift({ theme: project.lots[0]?.name || "Général", task: "Nouvelle tâche", planned: 0, used: 0 });
  saveProjects();
  renderDetail();
}

function updateSelectedGoNoGoCase(field, value) {
  if (!requireProjectManagerAction()) return;
  const goNoGo = getSelectedGoNoGoCase();
  goNoGo[field] = value;
  syncGoNoGoSummaryFields(goNoGo);
  saveGoNoGoCases();
  renderGoNoGo();
}

function handleGoNoGoActionMenu() {
  if (elements.gngActionMenu.value === "delete") deleteSelectedGoNoGoCase();
  elements.gngActionMenu.value = "";
}

function deleteSelectedGoNoGoCase() {
  if (!requireProjectManagerAction()) return;
  const goNoGo = getSelectedGoNoGoCase();
  if (!goNoGo) return;

  const confirmed = confirm(`Supprimer le Go / No-Go "${goNoGo.name}" ?`);
  if (!confirmed) return;

  goNoGoCases = goNoGoCases.filter((item) => item.id !== goNoGo.id);
  if (!goNoGoCases.length) goNoGoCases = [createDefaultGoNoGoCase()];
  selectedGoNoGoId = goNoGoCases[0].id;
  saveGoNoGoCases();
  renderGoNoGo();
}

function applySelectedAgencyPreset() {
  if (!requireProjectManagerAction()) return;
  const preset = getSelectedAgencyPreset();
  const goNoGo = getSelectedGoNoGoCase();
  if (!preset || !goNoGo) return;

  agencyFieldKeys.forEach((key) => {
    goNoGo.fields[key] = preset.fields[key] || "";
  });

  saveGoNoGoCases();
  renderGoNoGo();
}

function saveAgencyPresetFromCurrentGoNoGo() {
  if (!requireProjectManagerAction()) return;
  const goNoGo = getSelectedGoNoGoCase();
  if (!goNoGo) return;

  const name = prompt("Nom de la version agence à enregistrer", goNoGo.fields.info_F7 || "Nouvelle agence");
  if (!name) return;

  const fields = {};
  agencyFieldKeys.forEach((key) => {
    fields[key] = goNoGo.fields[key] || "";
  });

  const existing = agencyPresets.find((preset) => preset.name.toLowerCase() === name.trim().toLowerCase());
  if (existing) {
    existing.fields = fields;
  } else {
    agencyPresets.push({ id: crypto.randomUUID(), name: name.trim(), fields });
  }

  saveAgencyPresets();
  renderAgencyPresetOptions();
  elements.gngAgencyPresetSelect.value = existing?.id || agencyPresets.at(-1).id;
}

function deleteSelectedAgencyPreset() {
  if (!requireProjectManagerAction()) return;
  const preset = getSelectedAgencyPreset();
  if (!preset) return;

  const confirmed = confirm(`Supprimer la version agence "${preset.name}" ?`);
  if (!confirmed) return;

  agencyPresets = agencyPresets.filter((item) => item.id !== preset.id);
  saveAgencyPresets();
  renderAgencyPresetOptions();
}

function updateGoNoGoField(key, value) {
  if (!requireProjectManagerAction()) return;
  const goNoGo = getSelectedGoNoGoCase();
  goNoGo.fields[key] = value;
  if (key === "info_C23") goNoGo.name = value;
  if (key === "info_C8") goNoGo.client = value;
  if (key === "info_C29") goNoGo.amount = Number(value || 0);
  if (key === "info_C38") goNoGo.due = value;
  saveGoNoGoCases();
  renderGoNoGo();
}

function addGoNoGoCase() {
  if (!requireProjectManagerAction()) return;
  const newCase = createDefaultGoNoGoCase();
  goNoGoCases.unshift(newCase);
  selectedGoNoGoId = newCase.id;
  saveGoNoGoCases();
  renderGoNoGo();
}

function addTodoTask(event) {
  event.preventDefault();
  if (!requireProjectManagerAction()) return;
  if (selectedTodoTaskId) {
    updateTodoTaskFromEditor(selectedTodoTaskId);
    return;
  }

  const task = {
    id: crypto.randomUUID(),
    title: elements.todoTitleInput.value.trim(),
    owner: elements.todoOwnerInput.value.trim(),
    projectId: elements.todoProjectSelect.value,
    zone: elements.todoZoneInput.value.trim(),
    milestone: "",
    due: elements.todoDueInput.value,
    status: elements.todoStatusInput.value,
    constraint: elements.todoConstraintInput.value.trim()
  };

  todoTasks.push(normalizeTodoTask(task));
  saveTodoTasks();
  closeTodoEditor();
}

function updateTodoTaskFromEditor(taskId) {
  if (!requireProjectManagerAction()) return;
  const title = elements.todoTitleInput.value.trim();
  const owner = elements.todoOwnerInput.value.trim();
  if (!title || !owner) return;

  const projectAction = parseProjectActionId(taskId);
  if (projectAction) {
    const project = projects.find((item) => item.id === projectAction.projectId);
    const action = project?.actions?.[projectAction.actionIndex];
    if (!action) return;

    action.label = title;
    action.owner = owner;
    action.due = elements.todoDueInput.value;
    action.done = elements.todoStatusInput.value === "done";

    saveProjects();
    renderDetail();
    closeTodoEditor();
    return;
  }

  const task = todoTasks.find((item) => item.id === taskId);
  if (!task) return;

  task.title = title;
  task.owner = owner;
  task.projectId = elements.todoProjectSelect.value;
  task.zone = elements.todoZoneInput.value.trim();
  task.milestone = "";
  task.due = elements.todoDueInput.value;
  task.status = elements.todoStatusInput.value;
  task.constraint = elements.todoConstraintInput.value.trim();

  saveTodoTasks();
  closeTodoEditor();
}

function deleteSelectedTodoFromEditor() {
  if (!selectedTodoTaskId) return;
  const taskId = selectedTodoTaskId;
  deleteTodoTask(taskId);
  if (!getTodoWorkItemById(taskId)) closeTodoEditor();
}

function updateTodoTaskStatus(taskId, status) {
  if (!requireProjectManagerAction()) return;
  const projectAction = parseProjectActionId(taskId);
  if (projectAction) {
    const project = projects.find((item) => item.id === projectAction.projectId);
    if (!project?.actions?.[projectAction.actionIndex]) return;
    project.actions[projectAction.actionIndex].done = status === "done";
    saveProjects();
    renderDetail();
    renderTodoList();
    return;
  }

  const task = todoTasks.find((item) => item.id === taskId);
  if (!task) return;
  task.status = status;
  saveTodoTasks();
  renderTodoList();
}

function updateTodoTaskField(taskId, field, value) {
  if (!requireProjectManagerAction()) return;
  const projectAction = parseProjectActionId(taskId);
  if (projectAction) {
    const project = projects.find((item) => item.id === projectAction.projectId);
    const action = project?.actions?.[projectAction.actionIndex];
    if (!action) return;

    if (field === "title") action.label = value;
    if (field === "owner") action.owner = value;
    if (field === "due") action.due = value;
    if (field === "status") action.done = value === "done";

    saveProjects();
    renderDetail();
    renderTodoList();
    return;
  }

  const task = todoTasks.find((item) => item.id === taskId);
  if (!task) return;

  task[field] = value;
  if (field === "status" && value === "done") task.constraint = task.constraint || "";
  saveTodoTasks();
  renderTodoList();
}

function deleteTodoTask(taskId) {
  if (!requireProjectManagerAction()) return;
  const projectAction = parseProjectActionId(taskId);
  if (projectAction) {
    const project = projects.find((item) => item.id === projectAction.projectId);
    if (!project?.actions?.[projectAction.actionIndex]) return;
    const action = project.actions[projectAction.actionIndex];
    const confirmed = confirm(`Supprimer l'action chantier "${action.label}" ?`);
    if (!confirmed) return;
    project.actions.splice(projectAction.actionIndex, 1);
    saveProjects();
    renderDetail();
    renderTodoList();
    return;
  }

  const task = todoTasks.find((item) => item.id === taskId);
  if (!task) return;
  const confirmed = confirm(`Supprimer la tâche "${task.title}" ?`);
  if (!confirmed) return;
  todoTasks = todoTasks.filter((item) => item.id !== taskId);
  saveTodoTasks();
  renderTodoList();
}

function openTodoTaskCreationForSelectedProject() {
  if (!requireProjectManagerAction()) return;
  const project = getSelectedProject();
  if (!project) return;

  clearTodoEditor();
  setActiveSpace("todolist");
  elements.todoProjectSelect.value = project.id;
  elements.todoOwnerInput.value = getCurrentUserTaskOwner();
  elements.todoDueInput.value = project.nextDate || todayString();
  elements.todoTitleInput.focus();
}

function deleteSelectedProject() {
  if (!requireProjectManagerAction()) return;
  const project = getSelectedProject();
  if (!project) return;

  if (settings.confirmDelete) {
    const confirmed = confirm(`Supprimer définitivement le chantier "${project.name}" ?`);
    if (!confirmed) return;
  }

  projects = projects.filter((item) => item.id !== project.id);
  selectedId = projects[0]?.id;
  saveProjects();
  render();
}

function loadBundledGoNoGoTemplate() {
  if (!window.goNoGoTemplateBase64) return;

  try {
    const binary = atob(window.goNoGoTemplateBase64);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }

    goNoGoTemplate = {
      name: window.goNoGoTemplateName || "Revue_Travaux_Niveau 1.xlsx",
      buffer: bytes.buffer
    };
    elements.gngTemplateName.textContent = `${goNoGoTemplate.name} chargé automatiquement`;
    elements.gngTemplateName.classList.add("is-loaded");
  } catch (error) {
    console.error(error);
    elements.gngTemplateName.textContent = "Modèle intégré non chargé";
  }
}

async function exportGoNoGoExcel() {
  const goNoGo = getSelectedGoNoGoCase();
  if (!goNoGo) return;

  if (!goNoGoTemplate) {
    alert("Le modèle Excel intégré n'est pas chargé. Recharge la page puis réessaie.");
    return;
  }

  try {
    goNoGo.downloadDate = todayString();
    syncGoNoGoSummaryFields(goNoGo);
    saveGoNoGoCases();
    const files = await unzipXlsx(goNoGoTemplate.buffer);
    const sheetPaths = getWorkbookSheetPaths(files);
    const updates = getGoNoGoExcelUpdates(goNoGo);

    Object.entries(updates).forEach(([sheetName, cellUpdates]) => {
      const path = sheetPaths[sheetName];
      if (!path || !files[path]) {
        throw new Error(`Feuille introuvable dans le classeur : ${sheetName}`);
      }
      files[path].data = encodeText(setSheetCells(decodeText(files[path].data), cellUpdates));
    });

    const exported = zipStore(files);
    downloadBlob(
      new Blob([exported], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }),
      `Revue_Travaux_${safeFileName(goNoGo.name || "GoNoGo")}.xlsx`
    );
    renderGoNoGo();
  } catch (error) {
    console.error(error);
    alert(`Export Excel impossible : ${error.message}`);
  }
}

function getGoNoGoExcelUpdates(goNoGo) {
  const updates = { Informations: [], GoNoGo: [] };

  excelFieldGroups.forEach((group) => {
    group.fields.forEach(([key, , sheet, cell, type]) => {
      updates[sheet].push({ cell, value: goNoGo.fields[key] ?? "", type });
    });
  });

  goNoGoQuestions.forEach(([key, , cell]) => {
    updates.GoNoGo.push({ cell, value: goNoGo.questions[key] === "yes" ? "X" : "", type: "text" });
  });

  [
    ["F10", "info_C8", "text"],
    ["F11", "info_C23", "text"],
    ["F12", "info_C39", "date"],
    ["E9", "info_C28", "text"],
    ["J9", "info_C27", "text"],
    ["F24", "info_C38", "date"],
    ["F25", "info_C40", "date"],
    ["J25", "info_F40", "text"],
    ["D26", "info_C41", "text"],
    ["D27", "info_C37", "text"],
    ["J27", "info_C36", "text"],
    ["D28", "info_C29", "number"]
  ].forEach(([cell, sourceKey, type]) => {
    updates.GoNoGo.push({ cell, value: goNoGo.fields[sourceKey] ?? "", type });
  });

  updates.GoNoGo.push({ cell: "B29", value: goNoGo.action || "", type: "text" });
  updates.GoNoGo.push({ cell: "B35", value: goNoGo.followup || "", type: "text" });
  return updates;
}

function getWorkbookSheetPaths(files) {
  const workbook = parseXml(decodeText(files["xl/workbook.xml"].data));
  const rels = parseXml(decodeText(files["xl/_rels/workbook.xml.rels"].data));
  const relationships = {};

  Array.from(rels.getElementsByTagName("Relationship")).forEach((rel) => {
    const target = rel.getAttribute("Target") || "";
    const normalized = target.replace(/^\/+/, "").startsWith("xl/")
      ? target.replace(/^\/+/, "")
      : `xl/${target.replace(/^\/+/, "")}`;
    relationships[rel.getAttribute("Id")] = normalized;
  });

  const sheetPaths = {};
  Array.from(workbook.getElementsByTagName("sheet")).forEach((sheet) => {
    const id = sheet.getAttribute("r:id") || sheet.getAttributeNS("http://schemas.openxmlformats.org/officeDocument/2006/relationships", "id");
    sheetPaths[sheet.getAttribute("name")] = relationships[id];
  });
  return sheetPaths;
}

function setSheetCells(xml, updates) {
  const doc = parseXml(xml);
  const namespace = doc.documentElement.namespaceURI;
  const sheetData = getFirstElement(doc, "sheetData");

  updates.forEach(({ cell, value, type }) => {
    setCellValue(doc, sheetData, namespace, cell, value, type);
  });

  return new XMLSerializer().serializeToString(doc);
}

function setCellValue(doc, sheetData, namespace, cellRef, value, type) {
  const rowNumber = Number(cellRef.match(/\d+/)?.[0]);
  const column = cellRef.match(/[A-Z]+/)?.[0];
  const row = getOrCreateRow(doc, sheetData, namespace, rowNumber);
  const cell = getOrCreateCell(doc, row, namespace, cellRef, column);

  while (cell.firstChild) cell.removeChild(cell.firstChild);
  cell.removeAttribute("t");

  if (value === "" || value === null || value === undefined) return;

  if (type === "number" && !Number.isNaN(Number(value))) {
    const numericValue = doc.createElementNS(namespace, "v");
    numericValue.textContent = String(Number(value));
    cell.append(numericValue);
    return;
  }

  cell.setAttribute("t", "inlineStr");
  const inlineString = doc.createElementNS(namespace, "is");
  const text = doc.createElementNS(namespace, "t");
  const stringValue = String(value);
  if (/^\s|\s$/.test(stringValue)) text.setAttribute("xml:space", "preserve");
  text.textContent = stringValue;
  inlineString.append(text);
  cell.append(inlineString);
}

function getOrCreateRow(doc, sheetData, namespace, rowNumber) {
  const rows = Array.from(sheetData.children).filter((element) => element.localName === "row");
  const existing = rows.find((row) => Number(row.getAttribute("r")) === rowNumber);
  if (existing) return existing;

  const row = doc.createElementNS(namespace, "row");
  row.setAttribute("r", String(rowNumber));
  const nextRow = rows.find((candidate) => Number(candidate.getAttribute("r")) > rowNumber);
  sheetData.insertBefore(row, nextRow || null);
  return row;
}

function getOrCreateCell(doc, row, namespace, cellRef, column) {
  const cells = Array.from(row.children).filter((element) => element.localName === "c");
  const existing = cells.find((cell) => cell.getAttribute("r") === cellRef);
  if (existing) return existing;

  const cell = doc.createElementNS(namespace, "c");
  cell.setAttribute("r", cellRef);
  const nextCell = cells.find((candidate) => columnIndex(candidate.getAttribute("r").match(/[A-Z]+/)?.[0]) > columnIndex(column));
  row.insertBefore(cell, nextCell || null);
  return cell;
}

function getFirstElement(doc, localName) {
  return Array.from(doc.getElementsByTagName("*")).find((element) => element.localName === localName);
}

function parseXml(xml) {
  const doc = new DOMParser().parseFromString(xml, "application/xml");
  const error = doc.querySelector("parsererror");
  if (error) throw new Error("Lecture du fichier Excel impossible.");
  return doc;
}

async function unzipXlsx(buffer) {
  const source = new Uint8Array(buffer);
  const view = new DataView(source.buffer, source.byteOffset, source.byteLength);
  let eocdOffset = -1;
  for (let index = source.length - 22; index >= 0; index -= 1) {
    if (view.getUint32(index, true) === 0x06054b50) {
      eocdOffset = index;
      break;
    }
  }
  if (eocdOffset < 0) throw new Error("Archive Excel invalide.");

  const entryCount = view.getUint16(eocdOffset + 10, true);
  let centralOffset = view.getUint32(eocdOffset + 16, true);
  const files = {};

  for (let entryIndex = 0; entryIndex < entryCount; entryIndex += 1) {
    if (view.getUint32(centralOffset, true) !== 0x02014b50) throw new Error("Archive Excel illisible.");
    const method = view.getUint16(centralOffset + 10, true);
    const compressedSize = view.getUint32(centralOffset + 20, true);
    const nameLength = view.getUint16(centralOffset + 28, true);
    const extraLength = view.getUint16(centralOffset + 30, true);
    const commentLength = view.getUint16(centralOffset + 32, true);
    const localOffset = view.getUint32(centralOffset + 42, true);
    const name = decodeText(source.slice(centralOffset + 46, centralOffset + 46 + nameLength));

    const localNameLength = view.getUint16(localOffset + 26, true);
    const localExtraLength = view.getUint16(localOffset + 28, true);
    const dataStart = localOffset + 30 + localNameLength + localExtraLength;
    const compressedData = source.slice(dataStart, dataStart + compressedSize);
    const data = method === 0 ? compressedData : await inflateRaw(compressedData);

    files[name] = { name, data };
    centralOffset += 46 + nameLength + extraLength + commentLength;
  }

  return files;
}

async function inflateRaw(bytes) {
  if (!("DecompressionStream" in window)) {
    throw new Error("Le navigateur ne peut pas décompresser ce fichier Excel.");
  }
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

function zipStore(files) {
  const parts = [];
  const centralParts = [];
  let offset = 0;

  Object.values(files).forEach((file) => {
    const nameBytes = encodeText(file.name);
    const data = file.data instanceof Uint8Array ? file.data : new Uint8Array(file.data);
    const crc = crc32(data);
    const localHeader = new Uint8Array(30 + nameBytes.length);
    const localView = new DataView(localHeader.buffer);
    localView.setUint32(0, 0x04034b50, true);
    localView.setUint16(4, 20, true);
    localView.setUint16(8, 0, true);
    localView.setUint32(14, crc, true);
    localView.setUint32(18, data.length, true);
    localView.setUint32(22, data.length, true);
    localView.setUint16(26, nameBytes.length, true);
    localHeader.set(nameBytes, 30);
    parts.push(localHeader, data);

    const centralHeader = new Uint8Array(46 + nameBytes.length);
    const centralView = new DataView(centralHeader.buffer);
    centralView.setUint32(0, 0x02014b50, true);
    centralView.setUint16(4, 20, true);
    centralView.setUint16(6, 20, true);
    centralView.setUint16(10, 0, true);
    centralView.setUint32(16, crc, true);
    centralView.setUint32(20, data.length, true);
    centralView.setUint32(24, data.length, true);
    centralView.setUint16(28, nameBytes.length, true);
    centralView.setUint32(42, offset, true);
    centralHeader.set(nameBytes, 46);
    centralParts.push(centralHeader);

    offset += localHeader.length + data.length;
  });

  const centralOffset = offset;
  const centralSize = centralParts.reduce((sum, part) => sum + part.length, 0);
  const end = new Uint8Array(22);
  const endView = new DataView(end.buffer);
  endView.setUint32(0, 0x06054b50, true);
  endView.setUint16(8, centralParts.length, true);
  endView.setUint16(10, centralParts.length, true);
  endView.setUint32(12, centralSize, true);
  endView.setUint32(16, centralOffset, true);

  return concatUint8Arrays([...parts, ...centralParts, end]);
}

function crc32(bytes) {
  const table = crc32.table ||= Array.from({ length: 256 }, (_, index) => {
    let value = index;
    for (let bit = 0; bit < 8; bit += 1) value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
    return value >>> 0;
  });
  let crc = 0xffffffff;
  bytes.forEach((byte) => {
    crc = table[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  });
  return (crc ^ 0xffffffff) >>> 0;
}

function concatUint8Arrays(arrays) {
  const length = arrays.reduce((sum, array) => sum + array.length, 0);
  const result = new Uint8Array(length);
  let offset = 0;
  arrays.forEach((array) => {
    result.set(array, offset);
    offset += array.length;
  });
  return result;
}

function columnIndex(column) {
  return String(column || "")
    .split("")
    .reduce((sum, letter) => sum * 26 + letter.charCodeAt(0) - 64, 0);
}

function encodeText(value) {
  return new TextEncoder().encode(value);
}

function decodeText(value) {
  return new TextDecoder().decode(value);
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function safeFileName(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9_-]+/gi, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 80) || "GoNoGo";
}

function exportData() {
  const blob = new Blob([JSON.stringify(projects, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "affaires-cvc.json";
  link.click();
  URL.revokeObjectURL(url);
}

function exportProjectOrdersExcel() {
  const project = getSelectedProject();
  if (!project) return;
  const orders = (project.orders || []).slice().sort((left, right) => {
    const byZone = String(left.zone).localeCompare(String(right.zone), "fr");
    return byZone || new Date(left.date) - new Date(right.date);
  });
  const rows = [
    ["Commandes chantier", project.name],
    ["Client", project.client],
    ["Ville", project.city],
    [],
    ["Zone", "Désignation", "Quantité", "Unité", "Fournisseur", "Référence", "Date prévue", "Statut", "Détail / commentaire"],
    ...orders.map((order) => [order.zone, order.item, order.quantity, order.unit, order.supplier || "", order.reference || "", order.date, orderStatusLabel(order.status), order.note || ""])
  ];
  const sheetRows = rows.map((row, index) => {
    const cells = row.map((value, cellIndex) => createExcelCell(cellIndex + 1, index + 1, value)).join("");
    return `<row r="${index + 1}">${cells}</row>`;
  }).join("");
  const files = {
    "[Content_Types].xml": { name: "[Content_Types].xml", data: encodeText(`<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/></Types>`) },
    "_rels/.rels": { name: "_rels/.rels", data: encodeText(`<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`) },
    "xl/workbook.xml": { name: "xl/workbook.xml", data: encodeText(`<?xml version="1.0" encoding="UTF-8"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Commandes" sheetId="1" r:id="rId1"/></sheets></workbook>`) },
    "xl/_rels/workbook.xml.rels": { name: "xl/_rels/workbook.xml.rels", data: encodeText(`<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/></Relationships>`) },
    "xl/worksheets/sheet1.xml": { name: "xl/worksheets/sheet1.xml", data: encodeText(`<?xml version="1.0" encoding="UTF-8"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>${sheetRows}</sheetData></worksheet>`) }
  };
  downloadBlob(new Blob([zipStore(files)], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }), `Commandes_${safeFileName(project.name)}.xlsx`);
}

function createExcelCell(column, row, value) {
  const ref = `${excelColumnLetter(column)}${row}`;
  if (typeof value === "number" && Number.isFinite(value)) return `<c r="${ref}"><v>${value}</v></c>`;
  return `<c r="${ref}" t="inlineStr"><is><t>${escapeXml(value ?? "")}</t></is></c>`;
}

function excelColumnLetter(index) {
  let value = index;
  let result = "";
  while (value > 0) {
    const remainder = (value - 1) % 26;
    result = String.fromCharCode(65 + remainder) + result;
    value = Math.floor((value - 1) / 26);
  }
  return result;
}

function escapeXml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[character]);
}

function renderSettings() {
  elements.darkModeToggle.checked = settings.darkMode;
  elements.compactModeToggle.checked = settings.compactMode;
  elements.confirmDeleteToggle.checked = settings.confirmDelete;
  elements.demoDataToggle.checked = settings.showDemoData;
}

function renderAccessManagement() {
  const isAdmin = isCurrentUserAdmin();
  elements.accessManagementPanel.classList.toggle("is-hidden", !isAdmin);
  if (!isAdmin) return;

  if (!userProfiles.length) {
    elements.accessManagementList.innerHTML = `<p class="muted">Aucun compte trouvé. Applique le script Supabase puis reconnecte-toi.</p>`;
    return;
  }

  elements.accessManagementList.innerHTML = userProfiles.map((profile) => {
    const isSelf = profile.id === currentUser?.id;
    return `
      <label class="access-user-row">
        <span>
          <strong>${escapeHtml(profile.email)}</strong>
          <small>${isSelf ? "Compte administrateur actuel" : roleLabel(profile.role)}</small>
        </span>
        <select data-profile-role="${escapeAttribute(profile.id)}"${isSelf ? " disabled" : ""}>
          <option value="admin"${profile.role === "admin" ? " selected" : ""}>Administrateur</option>
          <option value="manager"${profile.role === "manager" ? " selected" : ""}>Gestionnaire projets</option>
          <option value="technician"${profile.role === "technician" ? " selected" : ""}>Technicien</option>
        </select>
      </label>
    `;
  }).join("");
}

function setAccessManagementMessage(message, isError = false) {
  elements.accessManagementMessage.textContent = message;
  elements.accessManagementMessage.classList.toggle("is-error", isError);
}

function toggleSettingsPanel() {
  elements.settingsPanel.classList.toggle("is-hidden");
}

function updateSetting(key, value) {
  settings[key] = value;
  saveSettings();
  applySettings();
  renderSettings();
}

function applySettings() {
  document.body.classList.toggle("dark-mode", settings.darkMode);
  document.body.classList.toggle("compact-mode", settings.compactMode);
}

function resetDemo() {
  if (!requireAdminAction()) return;
  if (!confirm("Réinitialiser les données de démonstration ?")) return;
  projects = structuredClone(seedProjects);
  normalizeProjects(projects);
  selectedId = projects[0].id;
  saveProjects();
  render();
}

function getTotals(project) {
  const planned = project.lots.reduce((sum, lot) => sum + Number(lot.planned || 0), 0);
  const committed = project.lots.reduce((sum, lot) => sum + Number(lot.committed || 0), 0);
  const purchases = project.purchases.reduce((sum, purchase) => sum + Number(purchase.amount || 0), 0);
  const engagement = Math.max(committed, purchases);
  const purchaseAlertCount = getThemeSummaries(project, "purchases").filter((summary) => summary.amount > summary.budget).length;
  const faeBilled = project.faes
    .filter((fae) => fae.status === "emise" || fae.status === "payee")
    .reduce((sum, fae) => sum + Number(fae.amount || 0), 0);
  const faePending = project.faes
    .filter((fae) => fae.status !== "emise" && fae.status !== "payee")
    .reduce((sum, fae) => sum + Number(fae.amount || 0), 0);
  const hoursPlanned = project.hours.reduce((sum, hourLine) => sum + Number(hourLine.planned || 0), 0);
  const hoursUsed = project.hours.reduce((sum, hourLine) => sum + Number(hourLine.used || 0), 0);
  const hoursRemaining = hoursPlanned - hoursUsed;
  const margin = project.revenue - planned;
  const marginRate = project.revenue ? (margin / project.revenue) * 100 : 0;
  return { planned, committed, purchases, engagement, purchaseAlertCount, faeBilled, faePending, hoursPlanned, hoursUsed, hoursRemaining, margin, marginRate };
}

function labelStatus(status) {
  return {
    etude: "Étude",
    travaux: "Travaux",
    reception: "Réception"
  }[status] || status;
}

function purchaseStatusOptions(selected) {
  return statusOptions(
    [
      ["devis", "Devis"],
      ["commande", "Commandé"],
      ["livre", "Livré"],
      ["facture", "Facturé"]
    ],
    selected
  );
}

function faeStatusOptions(selected) {
  return statusOptions(
    [
      ["a_etablir", "À établir"],
      ["a_valider", "À valider"],
      ["emise", "Émise"],
      ["payee", "Payée"]
    ],
    selected
  );
}

function themeOptions(project, selected) {
  return project.lots
    .map((lot) => `<option value="${escapeAttribute(lot.name)}"${lot.name === selected ? " selected" : ""}>${escapeHtml(lot.name)}</option>`)
    .join("");
}

function labelGoNoGoDecision(value) {
  return {
    a_statuer: "À statuer",
    go: "Go",
    no_go: "No-Go",
    reserve: "Go avec réserves"
  }[value] || value;
}

function labelGoNoGoStatus(value) {
  return {
    interesse: "Intéressé",
    go: "GO",
    nogo: "NOGO"
  }[value] || "Intéressé";
}

function labelTodoStatus(value) {
  return {
    backlog: "\u00c0 pr\u00e9parer",
    ready: "Pr\u00eat / engag\u00e9",
    doing: "En cours",
    done: "Fait",
    blocked: "Contrainte"
  }[value] || "\u00c0 pr\u00e9parer";
}

function todoStatusOptions(selected) {
  return statusOptions(
    [
      ["backlog", "\u00c0 pr\u00e9parer"],
      ["ready", "Pr\u00eat / engag\u00e9"],
      ["doing", "En cours"],
      ["done", "Fait"],
      ["blocked", "Contrainte"]
    ],
    selected
  );
}

function projectActionStatusOptions(selected) {
  return statusOptions(
    [
      ["ready", "\u00c0 faire"],
      ["done", "Fait"]
    ],
    selected === "done" ? "done" : "ready"
  );
}

function statusOptions(options, selected) {
  return options
    .map(([value, label]) => `<option value="${value}"${value === selected ? " selected" : ""}>${label}</option>`)
    .join("");
}

function formatMoney(value) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
}

function formatThemeValue(value, unit) {
  return unit === "€" ? formatMoney(value) : `${formatNumber(value)} h`;
}

function formatNumber(value) {
  return new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 1 }).format(value);
}

function formatDate(value) {
  return new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(value));
}

function todayString() {
  return new Date().toISOString().slice(0, 10);
}

function startOfDay(date) {
  const copy = new Date(date);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function addDays(date, days) {
  const copy = startOfDay(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

