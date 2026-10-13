# Astaan HR Portal · Supabase + Vercel

> **Muhiim:** `index.html` waa inuu ku jiraa **xididka (root)** repo-ga GitHub, ee ma aha gudaha gal kale. Faylashan waxaad ku riixaysaa si toos ah repo-ga: `index.html`, `config.js`, `vercel.json`, `supabase/`.

Faylasha:

| Fayl | Waxa uu yahay |
|---|---|
| `index.html` | Portalka oo dhan (fasaxyada, amaahda, shaqaalaha, users-ka, warbixinnada) |
| `config.js` | Halka lagu geliyo xiriirka Supabase |
| `vercel.json` | Habaynta Vercel |
| `supabase/01_schema.sql` | Database-ka, xeerarka ammaanka (RLS) iyo doorarka |
| `supabase/02_seed.sql` | Xogtii hore: 20 shaqaale iyo 122 fasax |

---

## 1. Samee mashruuc Supabase

1. Gal **supabase.com** → **New project**.
   - Magac: `astaan-hr`
   - Region: kan kuugu dhow (tusaale *Frankfurt*)
   - Kaydi password-ka database-ka meel ammaan ah.
2. Fur **SQL Editor** → **New query**.
3. Ku dheji dhammaan `supabase/01_schema.sql` → **Run**.
4. Query cusub: ku dheji `supabase/02_seed.sql` → **Run**.

## 2. Habee login-ka

1. **Authentication → Sign In / Providers → Email**: hubi inuu shidan yahay.
2. **"Confirm email"**:
   - *Dami* haddii aad rabto in users-ka HR sameeyo ay isla markiiba galaan.
   - *Daar* haddii aad rabto in qof kasta marka hore xaqiijiyo iimaylkiisa.
3. **Authentication → URL Configuration**:
   - *Site URL*: ciwaanka Vercel (tusaale `https://astaan-hr.vercel.app` ama `https://hr.astaan.com`).
   - Ku dar isla ciwaankaas **Redirect URLs** (waxaa loo baahan yahay "password-ka ilaabay").

## 3. Geli furayaasha

**Project Settings → API**, koobi:
- **Project URL** → `SUPABASE_URL`
- **anon public** key → `SUPABASE_ANON_KEY`

Ku geli `config.js`.

> ⚠️ Waligaa ha gelin furaha **service_role** `config.js` ama meel kale oo browser-ka la arki karo.

## 4. Ku rar Vercel

**Habka A – GitHub (lagu talinayo):**
1. Samee repo cusub GitHub (tusaale `astaan-hr`), kuna rar dhammaan faylasha.
2. **vercel.com → Add New → Project** → dooro repo-ga.
3. *Framework Preset*: **Other**. Build Command madhan. Output Directory madhan.
4. **Deploy**.

**Habka B – Vercel CLI:**
```bash
npm i -g vercel
cd astaan-hr-vercel
vercel --prod
```

**Domain gaar ah (ikhtiyaari):** Vercel → Project → **Settings → Domains** → ku dar `hr.astaan.com`, kadib DNS-ka ku dar CNAME-ka Vercel ku siiyo.

## 5. Gelitaanka koowaad

1. Fur ciwaanka Vercel.
2. **Qofka ugu horreeya ee is-diiwaangeliya wuxuu noqonayaa Super Admin.** Maadaama aan wali user jirin, marka hore ka samee akoonkaaga Supabase:
   **Authentication → Users → Add user → Create new user** (iimaylkaaga + password, calaamadee *Auto Confirm User*).
3. Ku gal portalka iimaylkaas iyo password-kaas.
4. **Users → Add user**: u samee maamulayaasha waaxaha iyo shaqaalaha, adigoo siinaya doorkooda.
5. **Shaqaalaha**: u geli shaqaale kasta waaxda iyo taariikhda shaqo-galka (haraaga fasaxa ayaa ku xiran).

## Sida ammaanku u shaqeeyo

Xeerarka waxaa lagu fuliyaa database-ka laftiisa (Row Level Security), ma aha browser-ka oo kaliya:

| Doorka | Wuxuu arkaa | Wuxuu beddeli karaa |
|---|---|---|
| Super Admin | Wax walba | Wax walba, xeerka fasaxa |
| HR | Wax walba | Shaqaalaha, users-ka, doorarka, ansixinta fasaxa |
| Agaasimaha Guud | Wax walba | Ansixinta fasaxa maamulayaasha iyo amaahda |
| Maaliyadda | Amaahda oo dhan | Ansixinta iyo jarista amaahda |
| Maamulaha waaxda | Waaxdiisa | Xogta shaqaalaha waaxdiisa, heerka waaxda ee amaahda |
| Shaqaale | Xogtiisa oo kaliya | Codsiyadiisa iyo profile-kiisa |
| Akoon aan door lahayn | Waxba | Waxba |

- **Password-yada** waxaa maamula Supabase Auth. Qofna kuma arki karo database-ka.
- **Password ilaawid:** shaashadda login-ka → "Ma ilowday password-ka?", ama HR ha u diro iimayl dib-u-dejin ah (Users → Wax ka beddel).
- **"Ka saar gelitaanka"** wuxuu tirtiraa doorka qofka, sidaa darteed waxba ma arki karo. Si akoonka gebi ahaanba loo tirtiro, Supabase → Authentication → Users.
