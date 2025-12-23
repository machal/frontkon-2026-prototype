# FrontKon Prototype

Prototyp webu pro FrontKon konferenci 2026. Statické MPA postavené na Astro s React komponentami pro interaktivní části.

## 🚀 Lokální vývoj

```sh
npm install
npm run dev
```

Aplikace poběží na `http://localhost:4321/`

## 📦 Build

```sh
npm run build
```

Statické soubory se vygenerují do složky `dist/`.

## 🌐 Nasazení na GitHub Pages

### Automatické nasazení (doporučeno)

1. **Vytvoř GitHub repozitář** (pokud ještě nemáš)
   ```sh
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/TVUJ_USERNAME/TVUJ_REPO.git
   git branch -M main
   git push -u origin main
   ```

2. **Nastav GitHub Pages v repozitáři:**
   - Jdi do Settings → Pages
   - Source: vyber "GitHub Actions"

3. **Pokud nasazuješ do podsložky** (např. `/frontkon-prototype/`):
   - Uprav `.github/workflows/deploy.yml` a odkomentuj řádek:
     ```yaml
     base-path: /frontkon-prototype/
     ```
   - Nebo nastav environment variable `BASE_PATH` v GitHub Actions

4. **Push do main branchu** - workflow se automaticky spustí a nasadí stránky

### Manuální nasazení

1. **Build projektu:**
   ```sh
   npm run build
   ```

2. **Pokud nasazuješ do podsložky**, nastav BASE_PATH:
   ```sh
   BASE_PATH=/nazev-slozky/ npm run build
   ```

3. **Pushni obsah složky `dist/`** do branch `gh-pages`:
   ```sh
   git subtree push --prefix dist origin gh-pages
   ```
   Nebo použij GitHub CLI:
   ```sh
   gh-pages -d dist
   ```

## 📁 Struktura projektu

```
/
├── public/          # Statické soubory (favicon, atd.)
├── src/
│   ├── data/        # Data pro konferenci (frontkon-data.ts)
│   ├── i18n/        # Lokalizace (CS/EN)
│   ├── layouts/     # Layout komponenty
│   ├── pages/       # Stránky (CS/EN mutace)
│   ├── react/       # React komponenty (filtry)
│   ├── styles/      # CSS styly
│   └── utils/       # Pomocné funkce
└── .github/
    └── workflows/   # GitHub Actions workflow
```

## 🔧 Konfigurace

### Base path

Pro nasazení do podsložky na GitHub Pages uprav `BASE_PATH` v:
- `astro.config.mjs` - pro lokální build
- `.github/workflows/deploy.yml` - pro automatické nasazení

### Jazyky

Projekt podporuje češtinu (CS) a angličtinu (EN). URL struktura:
- `/cs/...` - česká verze
- `/en/...` - anglická verze

## 📝 Poznámky

- Projekt je plně statický (MPA)
- React komponenty se používají pouze pro interaktivní filtry v archivu
- Všechna data jsou v `src/data/frontkon-data.ts`
- Styl je wireframe (šedá, bílá, tmavě modrá)

## 🛠️ Technologie

- [Astro](https://astro.build) - Framework pro statické stránky
- [React](https://react.dev) - Pro interaktivní komponenty
- [Lucide Icons](https://lucide.dev) - Ikony
