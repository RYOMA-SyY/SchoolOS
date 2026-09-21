export type OfferId = "O1" | "O2" | "O3" | "O4" | "O5";

export type Offer = {
  id: OfferId;
  nom: string;
  tagline: string;
  setup: number;
  mensuelParEleve?: number;
  mensuelFixe?: number;
  exempleEleves: number;
  surDevis?: boolean;
  features: string[];
  tile: "light" | "parchment" | "dark-1";
  cta: string;
  cible: string;
  delai: string;
};

export const OFFERS: Offer[] = [
  {
    id: "O1",
    nom: "Site Web Scolaire",
    tagline: "Présence web professionnelle.",
    setup: 6000,
    mensuelFixe: 400,
    exempleEleves: 0,
    features: [
      "Page d'accueil, à propos, programmes, équipe",
      "Actualités et annonces",
      "Blog + galerie photos",
      "Formulaire de contact",
      "Bilingue Arabe / Français",
      "Responsive mobile / tablette / desktop",
    ],
    tile: "light",
    cta: "Demander O1",
    cible: "Directeurs voulant moderniser l'image",
    delai: "1 semaine",
  },
  {
    id: "O2",
    nom: "Cœur Administratif",
    tagline: "Fini Excel et registres papier.",
    setup: 12000,
    mensuelParEleve: 20,
    exempleEleves: 200,
    features: [
      "Site web public inclus",
      "Gestion élèves (profils, inscriptions, documents)",
      "Gestion enseignants (contrats, disponibilités)",
      "Classes et niveaux",
      "Paiements (échéanciers, reçus, dettes)",
      "Emplois du temps sans conflits",
      "Tableau de bord et rapports",
    ],
    tile: "parchment",
    cta: "Demander O2",
    cible: "Écoles 100–300 élèves, admin débordée",
    delai: "2 semaines",
  },
  {
    id: "O3",
    nom: "Admin + Enseignants",
    tagline: "La collaboration quotidienne.",
    setup: 18000,
    mensuelParEleve: 35,
    exempleEleves: 200,
    features: [
      "Tout O2 inclus",
      "Site web public inclus",
      "Portail enseignant (EDT, listes)",
      "Appel numérique + saisie notes",
      "Devoirs et ressources",
      "Messagerie enseignant ↔ admin",
      "Gestion des remplacements",
    ],
    tile: "dark-1",
    cta: "Demander O3",
    cible: "Écoles avec 10+ enseignants",
    delai: "3 semaines",
  },
  {
    id: "O4",
    nom: "Plateforme Complète",
    tagline: "L'écosystème tout-en-un.",
    setup: 30000,
    mensuelParEleve: 55,
    exempleEleves: 500,
    features: [
      "Tout O3 inclus",
      "Site web public inclus",
      "Portails parents + élèves",
      "Paiement en ligne CMI / PayZone",
      "SMS / Email / Push",
      "IA ajustements EDT",
      "Analytics avancés + apps mobiles (Phase 2)",
    ],
    tile: "light",
    cta: "Demander O4",
    cible: "Grandes écoles / groupes 500+ élèves",
    delai: "4 à 6 semaines",
  },
  {
    id: "O5",
    nom: "Offre Personnalisée",
    tagline: "Sur mesure, avec KenCo.",
    setup: 0,
    exempleEleves: 0,
    surDevis: true,
    features: [
      "Audit de vos besoins avec KenCo",
      "Site web public inclus",
      "Modules à la carte (choisis parmi O1–O4)",
      "Intégrations spécifiques (Massar, CMI, SMS local)",
      "Design aux couleurs de votre école",
      "Applications mobiles iOS / Android",
      "SLA et support dédié",
    ],
    tile: "parchment",
    cta: "Contacter KenCo",
    cible: "Besoins spécifiques, groupes scolaires",
    delai: "À définir ensemble",
  },
];

export const COMPARISON: { label: string; O1: boolean; O2: boolean; O3: boolean; O4: boolean }[] = [
  { label: "Site web public", O1: true, O2: true, O3: true, O4: true },
  { label: "Gestion élèves", O1: false, O2: true, O3: true, O4: true },
  { label: "Gestion paiements", O1: false, O2: true, O3: true, O4: true },
  { label: "Emplois du temps", O1: false, O2: true, O3: true, O4: true },
  { label: "Portail enseignant", O1: false, O2: false, O3: true, O4: true },
  { label: "Présence / Notes", O1: false, O2: false, O3: true, O4: true },
  { label: "Portail parents", O1: false, O2: false, O3: false, O4: true },
  { label: "Portail élèves", O1: false, O2: false, O3: false, O4: true },
  { label: "Paiement en ligne", O1: false, O2: false, O3: false, O4: true },
  { label: "Notifications SMS", O1: false, O2: false, O3: false, O4: true },
  { label: "IA emploi du temps", O1: false, O2: false, O3: false, O4: true },
];

export const OPTIONS = [
  { id: "sms", label: "SMS notifications", prix: "0,50 MAD / SMS" },
  { id: "email", label: "Email notifications", prix: "0,10 MAD / email" },
  { id: "cmi", label: "Intégration CMI", prix: "5 000 MAD + 1% / transaction" },
  { id: "app", label: "App mobile iOS/Android", prix: "25 000 MAD" },
  { id: "formation", label: "Formation supplémentaire", prix: "1 500 MAD / session" },
  { id: "maintenance", label: "Maintenance prioritaire 24h", prix: "1 000 MAD / mois" },
  { id: "migration", label: "Migration données", prix: "3 000 MAD" },
  { id: "custom", label: "Personnalisation avancée", prix: "5 000 MAD" },
];

export const DEVIS_EXEMPLE = {
  offre: "O3" as OfferId,
  eleves: 200,
  an1: 18000 + 35 * 200 * 12, // 102000
};

export function mensuelPour(offer: Offer, eleves: number): number {
  if (offer.surDevis) return 0;
  if (offer.mensuelFixe != null) return offer.mensuelFixe;
  return (offer.mensuelParEleve ?? 0) * eleves;
}

export function an1Pour(offer: Offer, eleves: number): number {
  if (offer.surDevis) return 0;
  return offer.setup + mensuelPour(offer, eleves) * 12;
}

export const fmtMAD = (n: number) => `${n.toLocaleString("fr-MA")} MAD`;
