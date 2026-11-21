# Wiggles & Walks – Beagle Boarding & Dog Walking

This repo contains the marketing site for **Wiggles & Walks**, a friendly beagle‑specialist dog walking and home‑boarding service based in **Warrington, UK** (covering roughly a 40‑mile radius from Warrington, including Liverpool, Manchester, Wigan, Chester, Preston and surrounding areas).

The site is a **single‑page React app** with smooth animations, a branded areas‑covered map, and optional booking / contact flows backed by Firebase and EmailJS.

## Tech Stack

- **React (Create React App)**
- **Tailwind CSS** with a custom Wiggles & Walks design system
- **Framer Motion** for animations
- **Firebase Firestore** for storing bookings (optional)
- **EmailJS** for contact form delivery (optional)

## Key Features

- **Beagle‑focused marketing site**
  - Hero section with friendly branding and call‑to‑action
  - Service highlights: expert walking, cosy home boarding, first‑aid certified care
  - Photo gallery, testimonials, FAQs and pricing
- **Areas covered**
  - Custom illustrated map centred on Warrington
  - Visual 40‑mile radius map, with nearby towns labelled
- **Booking system (optional)**
  - Calendar picker with per‑day capacity limits
  - Service selection, dog details and owner information
  - Admin dashboard for viewing and updating booking statuses
- **Contact form (optional)**
  - Validated form (Formik + Yup)
  - Sends enquiries via EmailJS when configured

> **Note:** In this repo the booking and contact flows can be toggled off for “informational only” use. Check `booking.js` and `contact.js` for any `OOS` flags or commented‑out Firebase/EmailJS code if you want to re‑enable them.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Environment variables (optional, for bookings/contact)

Create a `.env` file in the project root:

```env
# Firebase Configuration (for bookings / admin)
REACT_APP_FIREBASE_API_KEY=your_api_key_here
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

# EmailJS Configuration (for contact form)
REACT_APP_EMAIL_SERVICE_KEY=your_email_service_key
REACT_APP_EMAIL_TEMPLATE_KEY=your_email_template_key
REACT_APP_EMAIL_KEY=your_email_key
```

If you just want a static marketing site, you can skip these and leave the booking/contact logic disabled.

### 3. (Optional) Firestore security rules

In Firebase Console → Firestore Database → **Rules**:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /bookings/{booking} {
      allow read, write: if true; // Demo only – lock this down for production
    }
  }
}
```

### 4. Run the app locally

```bash
npm start
```

This starts the dev server on `http://localhost:3000`.

## Project Structure (high level)

- `src/App.js` – assembles all page sections
- `src/pages/*` – hero, about, services, gallery, areas, pricing, booking, FAQs, contact, admin
- `src/components/*` – navbar, mobile menu, social links, CTA button, feature icon strip
- `public/assets/images/*` – beagle photos and the Warrington 40‑mile radius map (SVG)

## Deployment

The app is configured for **Firebase Hosting**, but you can deploy any static host.

### Firebase Hosting

```bash
# one‑time
npm install -g firebase-tools
firebase login
firebase init hosting

# each deploy
npm run build
firebase deploy
```

## Customisation Tips

- **Branding & copy** – update text and imagery in the `src/pages` components.
- **Services & pricing** – edit `pricing.js` (and booking‑related config if you enable online booking).
- **Areas covered map** – replace `public/assets/images/warrington-radius-map.svg` with your own map, keeping the same filename to avoid code changes.

---

Built for beagles, dog lovers, and their humans.
