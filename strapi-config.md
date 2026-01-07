# Konfiguracja Strapi dla Pilateka

Aby strona działała poprawnie, należy skonfigurować następujące typy treści w Strapi.

## 1. Single Types (Typy Pojedyncze)

### Hero Section (`hero-section`)
- **title**: Text (Short)
- **subtitle**: Text (Short)
- **description**: Text (Long)
- **backgroundImage**: Media (Single image)

### Philosophy (`philosophy`)
- **label**: Text (Short) - Np. "Jak pracuję?"
- **title**: Text (Short)
- **description1**: Text (Long)
- **description2**: Text (Long)
- **image**: Media (Single image)

### Quote (`quote`)
- **text**: Text (Long)
- **author**: Text (Short)

### Contact (`contact`)
- **studioName**: Text (Short)
- **ownerName**: Text (Short)
- **address**: Text (Long)
- **email**: Text (Short)
- **instagramUrl**: Text (Short) - URL
- **facebookUrl**: Text (Short) - URL

### Studio Hero (`studio-hero`)
- **title**: Text (Short)
- **description**: Text (Long)
- **image**: Media (Single image)

### Studio Intro (`studio-intro`)
- **title**: Text (Short)
- **description**: Text (Long)
- **rulebookLink**: Text (Short) - URL
- **images**: Media (Multiple images)

### About Hero (`about-hero`)
- **name**: Text (Short)
- **title**: Text (Short)

### About Bio (`about-bio`)
- **storyTitle**: Text (Short)
- **storyContent**: Text (Long)
- **quote**: Text (Long)
- **image**: Media (Single image)

### Pricing Hero (`pricing-hero`)
- **title**: Text (Short)
- **description**: Text (Long)

### Contact Hero (`contact-hero`)
- **title**: Text (Short)
- **description**: Text (Long)

## 2. Collection Types (Typy Kolekcji)

### Gallery Items (`gallery-items`)
- **label**: Text (Short)
- **description**: Text (Long)
- **image**: Media (Single image)

### Offers (`offers`)
- **title**: Text (Short)
- **description**: Text (Long)
- **icon**: Text (Short) - Material Icon name
- **linkText**: Text (Short)
- **link**: Text (Short)

### Studio Methods (`studio-methods`)
- **title**: Text (Short)
- **description**: Text (Long)
- **icon**: Text (Short) - Material Icon name
- **featured**: Boolean

### Studio Gallery Items (`studio-gallery-items`)
- **image**: Media (Single image)

### About Experience Items (`about-experience-items`)
- **year**: Text (Short)
- **title**: Text (Short)
- **subtitle**: Text (Short)

### Pricing Categories (`pricing-categories`)
- **title**: Text (Short)
- **subtitle**: Text (Short)
- **description**: Text (Long)
- **icon**: Text (Short) - Material Icon name
- **items**: Component (Repeatable) - `pricing-item`
  - **name**: Text (Short)
  - **price**: Text (Short)
  - **originalPrice**: Text (Short) - Optional
  - **description**: Text (Long)
  - **popular**: Boolean

### Events (`events`)
- **title**: Text (Short)
- **type**: Enumeration (WARSZTAT, WYJAZD, INNE)
- **date**: Text (Short) - Np. "29 WRZ 2024"
- **location**: Text (Short)
- **shortDescription**: Text (Long)
- **fullDescription**: Text (Rich Text / Blocks)
- **price**: Text (Short)
- **status**: Text (Short) - Np. "ZAPISZ SIĘ", "LISTA OCZEKUJĄCYCH"
- **image**: Media (Single image)
- **features**: Component (Repeatable) - `feature-item` (tylko dla wyjazdów)
  - **text**: Text (Short)
- **schedule**: Component (Repeatable) - `schedule-day` (tylko dla wyjazdów)
  - **day**: Text (Short)
  - **items**: Text (Long) - Lista oddzielona nowymi liniami

## 3. Zmienne Środowiskowe (.env)

Stwórz plik `.env` w głównym katalogu Astro:

```env
STRAPI_URL=http://your-strapi-url.com
STRAPI_TOKEN=your_secure_api_token
```

## 4. Uprawnienia (Permissions)

W panelu admina Strapi:
1. Przejdź do **Settings** > **Roles** > **Public**.
2. Nadaj uprawnienia `find` (i `findOne` dla Single Types) dla wszystkich powyższych typów treści.
