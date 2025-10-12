# ==============================
# IntelliAgent Landing Makefile
# ==============================

# 🧩 Standardport
PORT ?= 3000

# 🧹 Killt Prozesse, die Port 3000 blockieren
kill:
	@echo "🧹 Schließe Prozesse auf Port $(PORT)..."
	@lsof -ti:$(PORT) | xargs kill -9 2>/dev/null || echo "✅ Kein Prozess auf Port $(PORT)"

# 🧱 Baue Next.js Projekt neu auf
build:
	@echo "🏗️  Baue Next.js Projekt..."
	@npm run build

# 🚀 Starte den Server (Production)
start:
	@echo "🚀 Starte Next.js auf Port $(PORT)..."
	@npm start -- -p $(PORT)

# 🧩 Für lokale Entwicklung (Hot Reload)
dev:
	@echo "⚙️  Starte Entwicklungsserver (Hot Reload)..."
	@npm run dev -- -p $(PORT)

# ♻️ Kombiniert: kill + build + start
restart: kill build start

# 🔄 Schnellbefehl: kill + dev
redeploy: kill dev
