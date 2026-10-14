/* =========================================================
   Ultimate Banner Studio — 12 designs, per-banner editing
   ========================================================= */

/* ============ ALL DEFAULT DATA ============ */
const DEFAULTS = {

  /* ---------- shared party fields ---------- */
  name1:"THE", name2:"Midnight", name3:"ICON",
  label:"Live In Concert",
  date:"Dec 31", time:"9:00 PM",
  venue:"The Grand Hall", city:"Lagos",
  rsvp:"RSVP · 12 · 31 · 2025",
  tagline:"One Night. One Icon.",

  /* ---------- banner 1 — Luxury Gold ---------- */
  b1_photo:"", b1_t1:"", b1_t2:"", b1_logo:"",
  b1_a1n:"DJ Nova",    b1_a1r:"Opening Set",
  b1_a2n:"Luna Ray",   b1_a2r:"Live Band",
  b1_a3n:"MC Blaze",   b1_a3r:"Host",
  b1_a4n:"Kofi Beats", b1_a4r:"After Party",

  /* ---------- banner 2 — Neon Pop ---------- */
  b2_photo:"", b2_a1img:"", b2_a2img:"", b2_a3img:"", b2_logo:"",
  b2_a1n:"DJ Nova", b2_a2n:"Luna Ray", b2_a3n:"MC Blaze",
  b2_a4n:"Kofi Beats", b2_a5n:"Zara V", b2_a6n:"Sonic P",

  /* ---------- banner 3 — Editorial Minimal ---------- */
  b3_photo:"", b3_t1:"", b3_t2:"", b3_logo:"",
  b3_a1n:"DJ Nova",    b3_a1r:"Opening Set",
  b3_a2n:"Luna Ray",   b3_a2r:"Live Band",
  b3_a3n:"MC Blaze",   b3_a3r:"Host",
  b3_a4n:"Kofi Beats", b3_a4r:"After Party",
  b3_a5n:"Zara V",     b3_a5r:"Special Guest",

  /* ---------- banner 4 — Retro Festival ---------- */
  b4_photo:"", b4_t1:"", b4_t2:"", b4_logo:"",
  b4_a1n:"DJ Nova", b4_a2n:"Luna Ray", b4_a3n:"MC Blaze",
  b4_a4n:"Kofi Beats", b4_a5n:"Zara V", b4_a6n:"Sonic P",

  /* ---------- banner 5 — Film Conference ---------- */
  f1_photo:"", f1_t1:"", f1_t2:"", f1_logo:"",
  f1_eyebrow:"Official Selection",
  f1_title:"CINEMA",
  f1_sub:"The Future of Film",
  f1_edition:"Vol. XII",
  f1_date:"March 14–17",
  f1_venue:"Palais Lumière",
  f1_city:"Paris",
  f1_footer:"Four Days · One Language",

  /* ---------- banner 6 — Book Launch ---------- */
  f2_photo:"", f2_cover:"", f2_logo:"",
  f2_author:"AMARA OKAFOR",
  f2_title:"THE HOUR OF",
  f2_title2:"BECOMING",
  f2_foreword:"A memoir on light, loss, and returning",
  f2_date:"April 22",
  f2_time:"7:00 PM",
  f2_venue:"The Lumière Library",
  f2_city:"Lagos",
  f2_footer:"Signed copies · Limited seating",

  /* ---------- banner 7 — Live Performance ---------- */
  f3_photo:"", f3_g1img:"", f3_g2img:"", f3_g3img:"", f3_logo:"",
  f3_artist:"ASE",
  f3_artist2:"THE BAND",
  f3_eyebrow:"One Night Only",
  f3_edition:"LIVE",
  f3_date:"May 09",
  f3_time:"8:00 PM",
  f3_venue:"Eko Convention Centre",
  f3_city:"Lagos",
  f3_g1:"Tems",
  f3_g2:"Burna Boy",
  f3_g3:"Wizkid",
  f3_footer:"Doors 7:00 PM · No re-entry",

  /* ---------- banner 8 — Arena Festival ---------- */
  f4_photo:"", f4_t1:"", f4_t2:"", f4_logo:"",
  f4_mega:"AFRO",
  f4_mega2:"NATION",
  f4_sub:"The Sound of a Continent",
  f4_edition:"03",
  f4_date:"Aug 21–24",
  f4_venue:"National Stadium",
  f4_city:"Abuja",
  f4_l1:"Davido", f4_l2:"Wizkid", f4_l3:"Burna Boy", f4_l4:"Tems",
  f4_footer:"4 Days · 60 Artists · 2 Stages",

  /* ---------- banner 9 — Newspaper ---------- */
  n1_photo:"",
  n1_masthead:"The Evening Herald",
  n1_edition:"Vol. MMXXV · No. 12",
  n1_price:"Two Shillings",
  n1_date:"Tuesday, December 31",
  n1_city:"Lagos Edition",
  n1_kicker:"★ Exclusive · Tonight Only ★",
  n1_headline:"THE MIDNIGHT ICON TAKES THE STAGE",
  n1_subhead:"A once-in-a-generation performance arrives at The Grand Hall — and the city is ready.",
  n1_caption:"Above: The artist arrives. Photo: Studio Archive",
  n1_a1t:"What to Expect on the Night",
  n1_a1b:"An evening of sound, light, and reunion. Doors open at nine. Guests are advised to arrive early.",
  n1_a2t:"Special Guests Announced",
  n1_a2b:"The full lineup has been revealed — a rare gathering of four names on one stage for one night.",
  n1_a3t:"A Note from the Editor",
  n1_a3b:"Some nights arrive quietly. This is not one of them. Reserve your seat, and dress accordingly.",
  n1_section:"A", n1_row:"12", n1_seat:"07", n1_gate:"03",
  n1_code:"#MIC-2025-1231",
  n1_ticket_footer:"Keep this portion",
  n1_footer_left:"The Grand Hall · 9:00 PM",
  n1_footer_right:"Continued on Page 12",

  /* ---------- banner 10 — Vinyl Sleeve ---------- */
  v1_label:"", v1_photo:"",
  v1_artist:"THE MIDNIGHT ICON",
  v1_album:"Live at The Grand Hall",
  v1_cat:"CAT. NO. MGT-001 · STEREO",
  v1_t1:"Overture",          v1_t1time:"3:12",
  v1_t2:"Neon Nights",       v1_t2time:"4:48",
  v1_t3:"Golden Hour",       v1_t3time:"5:21",
  v1_t4:"Midnight Theme",    v1_t4time:"6:02",
  v1_t5:"After the Last Song", v1_t5time:"4:15",
  v1_date:"Dec 31",
  v1_venue:"The Grand Hall",
  v1_city:"Lagos",

  /* ---------- banner 11 — Theatre Playbill ---------- */
  t1_photo:"",
  t1_presenting:"The Grand Theatre presents",
  t1_title1:"The Midnight",
  t1_title2:"Icon",
  t1_byline:"A live performance in three acts",
  t1_starring:"THE MIDNIGHT ICON",
  t1_c1n:"DJ Nova",    t1_c1r:"as The Opener",
  t1_c2n:"Luna Ray",   t1_c2r:"as The Voice",
  t1_c3n:"MC Blaze",   t1_c3r:"as The Host",
  t1_c4n:"Kofi Beats", t1_c4r:"as The Closer",
  t1_dir:"The City Itself",
  t1_date:"Dec 31",
  t1_time:"9:00 PM",
  t1_venue:"The Grand Hall",
  t1_footer:"One Night · One Icon · Tickets at the Door",

  /* ---------- banner 12 — Boarding Pass ---------- */
  p1_airline:"✦ SKYLINE EVENTS",
  p1_class:"VIP · FIRST CLASS",
  p1_from_code:"LOS",
  p1_from:"Lagos",
  p1_to_code:"GRH",
  p1_to:"The Grand Hall",
  p1_passenger:"MR. MIDNIGHT ICON",
  p1_flight:"MGT 001",
  p1_date:"31 DEC 2025",
  p1_boarding:"8:30 PM",
  p1_gate:"A12",
  p1_seat:"1A",
  p1_footer:"Doors open 8:30 PM · Event starts 9:00 PM · No re-entry after 10:00 PM",
  p1_code:"#MGT001-ICON"
};

/* ============ FIELD SCHEMA FOR EACH BANNER ============ */
/* Each banner defines which fields the edit panel should show, grouped. */
const SCHEMA = {
  b1: {
    title:"01 · Luxury Gold",
    groups:[
      {label:"Images", files:["b1_photo","b1_t1","b1_t2","b1_logo"]},
      {label:"Shared Text", texts:["name1","name2","name3","label","date","time","venue","city","rsvp","tagline"]},
      {label:"Associate Artists", texts:["b1_a1n","b1_a1r","b1_a2n","b1_a2r","b1_a3n","b1_a3r","b1_a4n","b1_a4r"]}
    ]
  },
  b2: {
    title:"02 · Neon Pop",
    groups:[
      {label:"Images", files:["b2_photo","b2_a1img","b2_a2img","b2_a3img","b2_logo"]},
      {label:"Shared Text", texts:["name1","name2","name3","label","date","time","venue","city","rsvp","tagline"]},
      {label:"Associate Artists", texts:["b2_a1n","b2_a2n","b2_a3n","b2_a4n","b2_a5n","b2_a6n"]}
    ]
  },
  b3: {
    title:"03 · Editorial Minimal",
    groups:[
      {label:"Images", files:["b3_photo","b3_t1","b3_t2","b3_logo"]},
      {label:"Shared Text", texts:["name1","name2","name3","label","date","time","venue","city","rsvp","tagline"]},
      {label:"Associate Artists", texts:["b3_a1n","b3_a1r","b3_a2n","b3_a2r","b3_a3n","b3_a3r","b3_a4n","b3_a4r","b3_a5n","b3_a5r"]}
    ]
  },
  b4: {
    title:"04 · Retro Festival",
    groups:[
      {label:"Images", files:["b4_photo","b4_t1","b4_t2","b4_logo"]},
      {label:"Shared Text", texts:["name1","name2","name3","label","date","time","venue","city","rsvp","tagline"]},
      {label:"Associate Artists", texts:["b4_a1n","b4_a2n","b4_a3n","b4_a4n","b4_a5n","b4_a6n"]}
    ]
  },
  f1: {
    title:"05 · Film Conference",
    groups:[
      {label:"Images", files:["f1_photo","f1_t1","f1_t2","f1_logo"]},
      {label:"Content", texts:["f1_eyebrow","f1_title","f1_sub","f1_edition","f1_date","f1_venue","f1_city","f1_footer"]}
    ]
  },
  f2: {
    title:"06 · Book Launch",
    groups:[
      {label:"Images", files:["f2_photo","f2_cover","f2_logo"]},
      {label:"Content", texts:["f2_author","f2_title","f2_title2","f2_foreword","f2_date","f2_time","f2_venue","f2_city","f2_footer"]}
    ]
  },
  f3: {
    title:"07 · Live Performance",
    groups:[
      {label:"Images", files:["f3_photo","f3_g1img","f3_g2img","f3_g3img","f3_logo"]},
      {label:"Content", texts:["f3_artist","f3_artist2","f3_eyebrow","f3_edition","f3_date","f3_time","f3_venue","f3_city","f3_footer"]},
      {label:"Guest Artists", texts:["f3_g1","f3_g2","f3_g3"]}
    ]
  },
  f4: {
    title:"08 · Arena Festival",
    groups:[
      {label:"Images", files:["f4_photo","f4_t1","f4_t2","f4_logo"]},
      {label:"Content", texts:["f4_mega","f4_mega2","f4_sub","f4_edition","f4_date","f4_venue","f4_city","f4_footer"]},
      {label:"Lineup", texts:["f4_l1","f4_l2","f4_l3","f4_l4"]}
    ]
  },
  n1: {
    title:"09 · Newspaper Front Page",
    groups:[
      {label:"Images", files:["n1_photo"]},
      {label:"Masthead", texts:["n1_masthead","n1_edition","n1_price","n1_date","n1_city"]},
      {label:"Headline", texts:["n1_kicker","n1_headline","n1_subhead","n1_caption"]},
      {label:"Article 1", texts:["n1_a1t","n1_a1b"]},
      {label:"Article 2", texts:["n1_a2t","n1_a2b"]},
      {label:"Article 3", texts:["n1_a3t","n1_a3b"]},
      {label:"Ticket Stub", texts:["n1_section","n1_row","n1_seat","n1_gate","n1_code","n1_ticket_footer"]},
      {label:"Footer", texts:["n1_footer_left","n1_footer_right"]}
    ]
  },
  v1: {
    title:"10 · Vinyl Record Sleeve",
    groups:[
      {label:"Images", files:["v1_label","v1_photo"]},
      {label:"Album Info", texts:["v1_artist","v1_album","v1_cat"]},
      {label:"Tracklist", texts:["v1_t1","v1_t1time","v1_t2","v1_t2time","v1_t3","v1_t3time","v1_t4","v1_t4time","v1_t5","v1_t5time"]},
      {label:"Event Info", texts:["v1_date","v1_venue","v1_city"]}
    ]
  },
  t1: {
    title:"11 · Theatre Playbill",
    groups:[
      {label:"Images", files:["t1_photo"]},
      {label:"Billing", texts:["t1_presenting","t1_title1","t1_title2","t1_byline","t1_starring"]},
      {label:"Cast", texts:["t1_c1n","t1_c1r","t1_c2n","t1_c2r","t1_c3n","t1_c3r","t1_c4n","t1_c4r"]},
      {label:"Event", texts:["t1_dir","t1_date","t1_time","t1_venue","t1_footer"]}
    ]
  },
  p1: {
    title:"12 · Boarding Pass",
    groups:[
      {label:"Airline", texts:["p1_airline","p1_class"]},
      {label:"Route", texts:["p1_from_code","p1_from","p1_to_code","p1_to"]},
      {label:"Passenger", texts:["p1_passenger","p1_flight","p1_date","p1_boarding","p1_gate","p1_seat"]},
      {label:"Footer", texts:["p1_footer","p1_code"]}
    ]
  }
};

/* ============ STORAGE ============ */
const STORAGE_KEY = "ultimateBannerStudioV1";

function loadData(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? {...DEFAULTS, ...JSON.parse(raw)} : {...DEFAULTS};
  }catch(e){ return {...DEFAULTS}; }
}
function persist(d){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(d)); }
  catch(e){ alert("Storage is full. Try smaller images."); }
}

/* ============ RENDER ============ */
function renderAll(){
  const d = loadData();

  /* every element with data-s / data-f / data-n / data-v / data-t / data-p → text */
  document.querySelectorAll("[data-s],[data-f],[data-n],[data-v],[data-t],[data-p]").forEach(el=>{
    const key = el.dataset.s || el.dataset.f || el.dataset.n ||
                el.dataset.v || el.dataset.t || el.dataset.p;
    if(key && d[key] !== undefined){
      el.textContent = d[key];
    }
  });

  /* every element with data-img → background image */
  document.querySelectorAll("[data-img]").forEach(el=>{
    const key = el.dataset.img;
    const url = d[key];
    if(url && url.length > 0){
      el.style.backgroundImage = `url('${url}')`;
      el.style.backgroundSize = "cover";
      el.style.backgroundPosition = "center";
      el.textContent = "";
    }else{
      el.style.backgroundImage = "";
    }
  });
}

/* ============ FILE UPLOAD ============ */
function loadFile(event, key){
  const file = event.target.files[0];
  if(!file) return;

  const reader = new FileReader();
  reader.onload = e => {
    const d = loadData();
    d[key] = e.target.result;
    persist(d);
    renderAll();

    /* update the filename label inside the panel */
    const fn = document.getElementById("fn_"+key);
    if(fn) fn.textContent = file.name;
  };
  reader.readAsDataURL(file);
}

/* ============ PANEL OPEN / CLOSE ============ */
let currentBanner = null;

function openEditor(bannerKey){
  currentBanner = bannerKey;
  const schema = SCHEMA[bannerKey];
  if(!schema){ alert("No editor defined for "+bannerKey); return; }

  /* title */
  document.getElementById("panelTitle").textContent = schema.title;

  /* build body */
  const body = document.getElementById("panelBody");
  body.innerHTML = "";

  const d = loadData();

  schema.groups.forEach(group=>{
    const wrap = document.createElement("div");
    wrap.className = "field-group";
    wrap.innerHTML = `<h4>${group.label}</h4>`;

    const grid = document.createElement("div");
    grid.className = "grid";

    /* file inputs */
    (group.files || []).forEach(key=>{
      const label = document.createElement("label");
      label.className = "file-field";
      const pretty = key.replace(/_/g," ");
      label.innerHTML = `
        ${pretty}
        <input type="file" accept="image/*" data-file-key="${key}">
        <span class="filename" id="fn_${key}">${d[key] ? "Uploaded ✓" : "No file"}</span>
      `;
      grid.appendChild(label);

      /* wire the input */
      const inp = label.querySelector("input");
      inp.addEventListener("change", ev => loadFile(ev, key));
    });

    /* text inputs */
    (group.texts || []).forEach(key=>{
      const label = document.createElement("label");
      const pretty = key.replace(/_/g," ");
      label.innerHTML = `
        ${pretty}
        <input type="text" data-text-key="${key}" value="${(d[key]||"").replace(/"/g,'&quot;')}">
      `;
      grid.appendChild(label);
    });

    wrap.appendChild(grid);
    body.appendChild(wrap);
  });

  /* open */
  document.getElementById("panel").classList.add("open");
  document.getElementById("backdrop").classList.add("open");
}

function closePanel(){
  document.getElementById("panel").classList.remove("open");
  document.getElementById("backdrop").classList.remove("open");
  currentBanner = null;
}

/* ============ APPLY CURRENT BANNER ============ */
function applyCurrent(){
  if(!currentBanner){ closePanel(); return; }

  const d = loadData();
  const schema = SCHEMA[currentBanner];

  schema.groups.forEach(group=>{
    (group.texts || []).forEach(key=>{
      const el = document.querySelector(`[data-text-key="${key}"]`);
      if(el) d[key] = el.value;
    });
  });

  persist(d);
  renderAll();

  /* tiny visual confirmation on the panel footer button */
  const btn = document.querySelector(".panel-footer .btn-apply");
  const original = btn.textContent;
  btn.textContent = "✓ Saved";
  setTimeout(()=>{ btn.textContent = original; }, 900);
}

/* ============ DOWNLOAD PNG ============ */
function download(id, filename){
  const el = document.getElementById(id);
  if(!el){ alert("Banner not found."); return; }

  html2canvas(el, {
    scale:2,
    backgroundColor:null,
    useCORS:true,
    allowTaint:true,
    logging:false
  }).then(canvas=>{
    const a = document.createElement("a");
    a.download = filename + ".png";
    a.href = canvas.toDataURL("image/png");
    a.click();
  }).catch(err=>{
    alert("Export failed. Try uploading images from your device instead of using remote URLs.");
    console.error(err);
  });
}

/* ============ SAVE PAGE ============ */
function savePage(){
  const d = loadData();
  fetch("index.html")
    .then(r => r.text())
    .then(html => {
      /* inject current data as a boot script before </body> */
      const boot = `<script>localStorage.setItem(${JSON.stringify(STORAGE_KEY)}, ${JSON.stringify(JSON.stringify(d))});<\/script>`;
      const out = html.replace("</body>", boot + "</body>");

      const blob = new Blob([out], {type:"text/html"});
      const a = document.createElement("a");
      a.download = "ultimate-banner-studio-edited.html";
      a.href = URL.createObjectURL(blob);
      a.click();
    })
    .catch(()=>{
      alert("Save Page needs Live Server or hosting (not file://). Use ⬇ PNG per banner instead.");
    });
}

/* ============ RESET ============ */
function resetAll(){
  if(!confirm("Reset everything? All uploaded images and edits will be lost.")) return;
  localStorage.removeItem(STORAGE_KEY);
  renderAll();
  closePanel();
}

/* ============ INIT ============ */
document.addEventListener("DOMContentLoaded", renderAll);