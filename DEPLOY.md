# 🚀 Nasazení na GitHub Pages

## Rychlý start

### 1. Vytvoř GitHub repozitář

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TVUJ_USERNAME/TVUJ_REPO.git
git branch -M main
git push -u origin main
```

### 2. Nastav GitHub Pages

1. Jdi do **Settings** → **Pages** v tvém repozitáři
2. Pod **Source** vyber **"GitHub Actions"**
3. Workflow se automaticky spustí při pushnutí do `main` branchu

### 3. Nasazení do podsložky (volitelné)

Pokud chceš nasadit do podsložky (např. `/frontkon-prototype/`):

1. Uprav `.github/workflows/deploy.yml`:
   ```yaml
   env:
     BASE_PATH: /frontkon-prototype/
   ```

2. Nebo nastav environment variable v GitHub:
   - Settings → Secrets and variables → Actions → New repository variable
   - Name: `BASE_PATH`
   - Value: `/frontkon-prototype/`

### 4. Zkontroluj nasazení

Po úspěšném buildu najdeš URL na:
- **Settings** → **Pages** → **Visit site**
- Nebo v **Actions** tabu u posledního workflow runu

## 🔍 Troubleshooting

### Build selže
- Zkontroluj, že všechny závislosti jsou v `package.json`
- Zkontroluj logy v **Actions** tabu

### Odkazy nefungují
- Pokud nasazuješ do podsložky, ujisti se, že `BASE_PATH` je správně nastavený
- Zkontroluj, že všechny odkazy používají `import.meta.env.BASE_URL`

### Workflow se nespustí
- Zkontroluj, že máš správná oprávnění v repozitáři
- Ujisti se, že Pages je nastavené na "GitHub Actions" (ne "Deploy from a branch")

## 📝 Poznámky

- Workflow se spustí automaticky při každém pushnutí do `main` branchu
- Můžeš ho také spustit manuálně v **Actions** tabu → **Deploy to GitHub Pages** → **Run workflow**
- Build trvá obvykle 1-3 minuty

