// Je Supabase-gegevens (Project Settings → API) en de betaallink voor donaties.
window.RATE_OXANA_CONFIG = {
  SUPABASE_URL: "https://wauhkakencuvmbjlnxdt.supabase.co",
  SUPABASE_KEY: "sb_publishable_P9ckr7ngBEhepGkgULNJtQ_I_qzQdwB",

  // Betaallink voor de donatieknoppen. Zolang hier PLAK-HIER staat, blijft het donatieblok verborgen.
  // Zet {bedrag} in de link als de betaaldienst een bedrag in de link ondersteunt, bijvoorbeeld:
  //   "https://bunq.me/oxana/{bedrag}"      of      "https://paypal.me/oxana/{bedrag}EUR"
  // Een Tikkie-link plak je gewoon zonder {bedrag}.
  DONATE_URL: "PLAK-HIER-JE-BETAALLINK"
};
