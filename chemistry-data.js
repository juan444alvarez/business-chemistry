/* ============ ARCHETYPE BASE DATA ============ */
const ARCHETYPES = {
  driver:     { code: 'dr', name: 'Driver',     tagline: 'Quantitative, logical',     adj: 'driven',         skillNoun: 'Drive' },
  guardian:   { code: 'gu', name: 'Guardian',   tagline: 'Methodical, reserved',      adj: 'methodical',     skillNoun: 'Rigor' },
  pioneer:    { code: 'pi', name: 'Pioneer',    tagline: 'Imaginative, spontaneous',  adj: 'imaginative',    skillNoun: 'Vision' },
  integrator: { code: 'in', name: 'Integrator', tagline: 'Empathic, diplomatic',      adj: 'empathic',       skillNoun: 'Connection' }
};

const KEYS = ['driver','guardian','pioneer','integrator'];

/* Bar-chart score profile per archetype (out of 100). Primary is highest. */
const BASE_SCORES = {
  driver:     { driver: 70, pioneer: 52, integrator: 42, guardian: 35 },
  guardian:   { guardian: 67, integrator: 54, driver: 46, pioneer: 33 },
  pioneer:    { pioneer: 71, driver: 52, integrator: 48, guardian: 31 },
  integrator: { integrator: 66, guardian: 55, pioneer: 49, driver: 40 }
};

/* ============ TEAM ROSTER ============ */
const TEAM = [
  { id: 'alex',   first: 'Alex',   name: 'Alex M.',   initials: 'AM', archetype: 'driver',     varSeed: 1 },
  { id: 'sam',    first: 'Sam',    name: 'Sam K.',    initials: 'SK', archetype: 'guardian',   varSeed: 2 },
  { id: 'jordan', first: 'Jordan', name: 'Jordan L.', initials: 'JL', archetype: 'pioneer',    varSeed: 3 },
  { id: 'taylor', first: 'Taylor', name: 'Taylor R.', initials: 'TR', archetype: 'integrator', varSeed: 4 },
  { id: 'morgan', first: 'Morgan', name: 'Morgan P.', initials: 'MP', archetype: 'driver',     varSeed: 5 },
  { id: 'casey',  first: 'Casey',  name: 'Casey W.',  initials: 'CW', archetype: 'guardian',   varSeed: 6 },
  { id: 'riley',  first: 'Riley',  name: 'Riley N.',  initials: 'RN', archetype: 'pioneer',    varSeed: 7 },
  { id: 'avery',  first: 'Avery',  name: 'Avery B.',  initials: 'AB', archetype: 'integrator', varSeed: 8 },
  { id: 'drew',   first: 'Drew',   name: 'Drew H.',   initials: 'DH', archetype: 'guardian',   varSeed: 9 },
  { id: 'quinn',  first: 'Quinn',  name: 'Quinn F.',  initials: 'QF', archetype: 'pioneer',    varSeed: 10 }
];

/* ============ VOICE SECTIONS (THEM speaking) ============
   Each "them" archetype has 4 first-person sections.
   Section 4 ("How I work with you") is keyed by YOU archetype.
*/
const VOICE = {
  driver: {
    sections: [
      {
        title: "Lorem ipsum dolor ",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam"
      },
      {
        title: "Lorem ipsum dolor sit amet",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit"
      },
      {
        title: "Lorem ipsum dolor sit amet, conse",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia"
      }
    ],
    pairTitle: "Lorem ipsum dolo",
    pairBody: {
      driver:     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ",
      guardian:   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e",
      pioneer:    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad m",
      integrator: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim v"
    }
  },
  guardian: {
    sections: [
      {
        title: "Lorem ipsum dolor ",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lab"
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetu",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la"
      },
      {
        title: "Lorem ipsum dolor si",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
      }
    ],
    pairTitle: "Lorem ipsum dolo",
    pairBody: {
      driver:     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat",
      guardian:   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr",
      pioneer:    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia",
      integrator: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve"
    }
  },
  pioneer: {
    sections: [
      {
        title: "Lorem ipsum dolor ",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita"
      },
      {
        title: "Lorem ipsum dolor sit amet, con",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit"
      },
      {
        title: "Lorem ipsum dolor sit amet, con",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci"
      }
    ],
    pairTitle: "Lorem ipsum dolo",
    pairBody: {
      driver:     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita",
      guardian:   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis no",
      pioneer:    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ",
      integrator: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven"
    }
  },
  integrator: {
    sections: [
      {
        title: "Lorem ipsum dolor ",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
      },
      {
        title: "Lorem ipsum dolor sit amet,",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis "
      },
      {
        title: "Lorem ipsum dolo",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita"
      }
    ],
    pairTitle: "Lorem ipsum dolo",
    pairBody: {
      driver:     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      guardian:   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc",
      pioneer:    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut en",
      integrator: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "
    }
  }
};

/* ============ ENGAGE / LOSE (advice TO you, ABOUT them) ============
   Indexed [you][them] — what YOU do to engage/lose THEM.
*/
const ENGAGE = {
  driver: {
    driver: [
      { title: "Lorem ipsum dolor sit amet, conse", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
      { title: "Lorem ipsum dolor sit amet, ", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali" },
      { title: "Lorem ipsum dolor sit amet, con", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim" }
    ],
    guardian: [
      { title: "Lorem ipsum dolor sit amet, consectetur adi", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni" },
      { title: "Lorem ipsum dolor s", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al" },
      { title: "Lorem ipsum dolor sit ame", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma" }
    ],
    pioneer: [
      { title: "Lorem ipsum dolor sit ame", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve" },
      { title: "Lorem ipsum dolor sit amet,", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni" },
      { title: "Lorem ipsum dolor sit amet, co", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad " }
    ],
    integrator: [
      { title: "Lorem ipsum dolor sit amet, consect", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu" },
      { title: "Lorem ipsum dolor sit ", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" },
      { title: "Lorem ipsum dolor sit amet, con", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna" }
    ]
  },
  guardian: {
    driver: [
      { title: "Lorem ipsum dolor sit am", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do" },
      { title: "Lorem ipsum dolor sit amet, consect", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor" },
      { title: "Lorem ipsum dolor sit amet, consec", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq" }
    ],
    guardian: [
      { title: "Lorem ipsum dolor sit amet,", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" },
      { title: "Lorem ipsum dolor sit amet, consectetu", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab" },
      { title: "Lorem ipsum dolor sit amet,", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu" }
    ],
    pioneer: [
      { title: "Lorem ipsum dolor sit amet, consectet", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a" },
      { title: "Lorem ipsum dolor sit amet, consect", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag" },
      { title: "Lorem ipsum dolor sit amet, consectetu", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu" }
    ],
    integrator: [
      { title: "Lorem ipsum dolor sit amet, consectetu", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al" },
      { title: "Lorem ipsum dolor sit amet, consectetur ad", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" },
      { title: "Lorem ipsum dolor sit amet", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" }
    ]
  },
  pioneer: {
    driver: [
      { title: "Lorem ipsum dolor sit amet", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut " },
      { title: "Lorem ipsum dolor sit amet, cons", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" },
      { title: "Lorem ipsum dolor sit amet, consectetur ad", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor" }
    ],
    guardian: [
      { title: "Lorem ipsum dolor sit amet, consec", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al" },
      { title: "Lorem ipsum dolor", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore" },
      { title: "Lorem ipsum dolor sit amet, co", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq" }
    ],
    pioneer: [
      { title: "Lorem ipsum dolor sit amet, consectetur", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do" },
      { title: "Lorem ipsum dolor sit amet", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" },
      { title: "Lorem ipsum dolor sit amet, consectetur adipi", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et d" }
    ],
    integrator: [
      { title: "Lorem ipsum dolor sit amet, ", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq" },
      { title: "Lorem ipsum dolor sit amet, ", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et d" },
      { title: "Lorem ipsum dolor sit amet, consectetur adi", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna" }
    ]
  },
  integrator: {
    driver: [
      { title: "Lorem ipsum dolor", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e" },
      { title: "Lorem ipsum dolor sit amet", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo" },
      { title: "Lorem ipsum dolor sit amet, conse", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore " }
    ],
    guardian: [
      { title: "Lorem ipsum dolor sit ", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni" },
      { title: "Lorem ipsum dolor si", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" },
      { title: "Lorem ipsum dolor sit am", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" }
    ],
    pioneer: [
      { title: "Lorem ipsum dolor sit amet, consect", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. U" },
      { title: "Lorem ipsum dolor sit a", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag" },
      { title: "Lorem ipsum dolor sit amet, consec", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag" }
    ],
    integrator: [
      { title: "Lorem ipsum dolor sit am", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
      { title: "Lorem ipsum dolor sit amet, consectetur a", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo" },
      { title: "Lorem ipsum dolor sit amet, con", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" }
    ]
  }
};

const LOSE = {
  driver: {
    driver: [
      { title: "Lorem ", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a" },
      { title: "Lorem ipsum dolor sit amet, c", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" },
      { title: "Lorem ipsum dolor ", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore m" }
    ],
    guardian: [
      { title: "Lorem ipsum dolor sit amet, co", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" },
      { title: "Lorem ipsum dolor sit ame", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor" },
      { title: "Lorem ipsum dolor sit amet, c", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut en" }
    ],
    pioneer: [
      { title: "Lorem ipsum dolor sit ame", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu" },
      { title: "Lorem ipsum dolor sit amet, ", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor" },
      { title: "Lorem ipsum dolor sit amet", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma" }
    ],
    integrator: [
      { title: "Lorem ipsum dolor", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
      { title: "Lorem ipsum dolor sit", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " },
      { title: "Lorem ipsum dolor sit", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim " }
    ]
  },
  guardian: {
    driver: [
      { title: "Lorem ipsum dolor ", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al" },
      { title: "Lorem ipsum dolor sit amet, consect", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu" },
      { title: "Lorem ipsum dolor sit amet, co", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore " }
    ],
    guardian: [
      { title: "Lorem ipsum dolor sit am", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor" },
      { title: "Lorem ipsum dolor sit amet, cons", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " },
      { title: "Lorem ipsum dolor sit", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq" }
    ],
    pioneer: [
      { title: "Lorem ipsum dolor sit amet, conse", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do" },
      { title: "Lorem ipsum dolor sit a", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq" },
      { title: "Lorem ipsum dolor sit ame", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," }
    ],
    integrator: [
      { title: "Lorem ipsum dolor ", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi" },
      { title: "Lorem ipsum dolor si", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min" },
      { title: "Lorem ipsum dolor sit amet, con", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu" }
    ]
  },
  pioneer: {
    driver: [
      { title: "Lorem ipsum dolor sit amet, con", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma" },
      { title: "Lorem ipsum dolor sit amet, consec", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab" },
      { title: "Lorem ipsum dolor sit amet,", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a" }
    ],
    guardian: [
      { title: "Lorem ipsum dolor sit a", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq" },
      { title: "Lorem ipsum dolor sit ame", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " },
      { title: "Lorem ipsum dolor sit amet, co", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut " }
    ],
    pioneer: [
      { title: "Lorem ipsum dolor sit amet, ", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore m" },
      { title: "Lorem ipsum dolor sit amet, ", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et d" },
      { title: "Lorem ipsum dolor sit amet, con", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo" }
    ],
    integrator: [
      { title: "Lorem ipsum dolor sit amet, co", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut" },
      { title: "Lorem ipsum dolor sit amet, consectet", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e" },
      { title: "Lorem ipsum dolor sit amet,", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn" }
    ]
  },
  integrator: {
    driver: [
      { title: "Lorem ipsum dolor s", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp" },
      { title: "Lorem ipsum dolor sit amet", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al" },
      { title: "Lorem ipsum dolor sit amet, consec", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq" }
    ],
    guardian: [
      { title: "Lorem ipsum dolor sit amet, consect", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo" },
      { title: "Lorem ipsum dolor sit", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo" },
      { title: "Lorem ipsum dolor sit", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut en" }
    ],
    pioneer: [
      { title: "Lorem ipsum dolor sit a", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
      { title: "Lorem ipsum dolor sit amet,", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut" },
      { title: "Lorem ipsum dolor", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor" }
    ],
    integrator: [
      { title: "Lorem ipsum dolor sit amet, consect", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " },
      { title: "Lorem ipsum dolor sit amet, conse", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab" },
      { title: "Lorem ipsum dolor sit amet", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim a" }
    ]
  }
};

/* ============ BUILD (skill development band) ============
   Build [their] skills as a [you] — two of YOUR traits combine into a behavior tuned to THEM.
*/
const BUILD = {
  driver: {
    driver: {
      yourStrength: { title: "Lorem ipsu", body: "Lorem ipsum dolor sit amet, consectetur adipis" },
      theirStrength: { title: "Lorem", body: "Lorem ipsum dolor sit amet, consectetur ad" },
      result: { title: "Lorem ipsum dolor sit amet, consectetur adi", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni" }
    },
    guardian: {
      yourStrength: { title: "Lorem ipsum ", body: "Lorem ipsum dolor sit amet, consectetu" },
      theirStrength: { title: "Lorem", body: "Lorem ipsum dolor sit amet, consectetur ad" },
      result: { title: "Lorem ipsum dolor sit amet, consectetur adipis", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi" }
    },
    pioneer: {
      yourStrength: { title: "Lorem", body: "Lorem ipsum dolor sit amet, consectetur adipi" },
      theirStrength: { title: "Lorem ipsu", body: "Lorem ipsum dolor sit amet, consectetur " },
      result: { title: "Lorem ipsum dolor sit amet, consectetur", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis no" }
    },
    integrator: {
      yourStrength: { title: "Lorem i", body: "Lorem ipsum dolor sit amet, consectetur" },
      theirStrength: { title: "Lorem ipsu", body: "Lorem ipsum dolor sit amet, consectetur" },
      result: { title: "Lorem ipsum dolor sit amet, cons", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc" }
    }
  },
  guardian: {
    driver: {
      yourStrength: { title: "Lorem", body: "Lorem ipsum dolor sit amet, consectet" },
      theirStrength: { title: "Lorem ips", body: "Lorem ipsum dolor sit amet, conse" },
      result: { title: "Lorem ipsum dolor sit amet, consectetur adip", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim a" }
    },
    guardian: {
      yourStrength: { title: "Lorem ipsum ", body: "Lorem ipsum dolor sit amet, consecte" },
      theirStrength: { title: "Lorem ipsum", body: "Lorem ipsum dolor sit amet, con" },
      result: { title: "Lorem ipsum dolor sit amet, consectetur adipiscing", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" }
    },
    pioneer: {
      yourStrength: { title: "Lorem ipsum dolor s", body: "Lorem ipsum dolor sit amet, consectetu" },
      theirStrength: { title: "Lorem ipsum", body: "Lorem ipsum dolor sit amet, cons" },
      result: { title: "Lorem ipsum dolor sit amet, consectetur adipisc", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" }
    },
    integrator: {
      yourStrength: { title: "Lorem", body: "Lorem ipsum dolor sit amet, consecte" },
      theirStrength: { title: "Lore", body: "Lorem ipsum dolor sit amet, consectetur adi" },
      result: { title: "Lorem ipsum dolor sit amet, consectet", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven" }
    }
  },
  pioneer: {
    driver: {
      yourStrength: { title: "Lorem ", body: "Lorem ipsum dolor sit amet, consecte" },
      theirStrength: { title: "Lorem ", body: "Lorem ipsum dolor sit amet, conse" },
      result: { title: "Lorem ipsum dolor sit amet, consectetur", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e" }
    },
    guardian: {
      yourStrength: { title: "Lorem ips", body: "Lorem ipsum dolor sit amet, consectetur adi" },
      theirStrength: { title: "Lorem", body: "Lorem ipsum dolor sit amet, consectetur adi" },
      result: { title: "Lorem ipsum dolor sit amet, consec", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ex" }
    },
    pioneer: {
      yourStrength: { title: "Lorem ipsum ", body: "Lorem ipsum dolor sit amet, consectetur adipi" },
      theirStrength: { title: "Lorem ip", body: "Lorem ipsum dolor sit amet, consectet" },
      result: { title: "Lorem ipsum dolor sit amet, consectetur adipis", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," }
    },
    integrator: {
      yourStrength: { title: "Lorem ip", body: "Lorem ipsum dolor sit amet, consect" },
      theirStrength: { title: "Lorem ", body: "Lorem ipsum dolor sit amet, co" },
      result: { title: "Lorem ipsum dolor sit amet, consectetur ", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven" }
    }
  },
  integrator: {
    driver: {
      yourStrength: { title: "Lore", body: "Lorem ipsum dolor sit amet, consectet" },
      theirStrength: { title: "Lorem ips", body: "Lorem ipsum dolor sit amet, consectetur adi" },
      result: { title: "Lorem ipsum dolor sit amet, consec", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc" }
    },
    guardian: {
      yourStrength: { title: "Lorem i", body: "Lorem ipsum dolor sit amet, consectetu" },
      theirStrength: { title: "Lorem ip", body: "Lorem ipsum dolor sit amet, consectetur adip" },
      result: { title: "Lorem ipsum dolor sit amet, consectetur", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve" }
    },
    pioneer: {
      yourStrength: { title: "Lorem ips", body: "Lorem ipsum dolor sit amet, consecte" },
      theirStrength: { title: "Lorem ips", body: "Lorem ipsum dolor sit amet, consectetur" },
      result: { title: "Lorem ipsum dolor sit amet, consectetur ", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u" }
    },
    integrator: {
      yourStrength: { title: "Lore", body: "Lorem ipsum dolor sit amet, consectetur adip" },
      theirStrength: { title: "Lorem", body: "Lorem ipsum dolor sit amet, consectetur" },
      result: { title: "Lorem ipsum dolor sit amet, consectet", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ex" }
    }
  }
};
