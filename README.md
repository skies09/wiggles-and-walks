# Wiggles & Walks - Dog Walking Website

A beautiful, responsive dog walking website with integrated booking system.

## Features

- 🐕 **Personalized Contact Form** - Dog-focused contact form with breed, age, and service selection
- 📅 **Booking System** - Interactive calendar with real-time availability checking
- 🎨 **Modern Design** - Beautiful UI with animations and responsive design
- 📱 **Mobile Friendly** - Works perfectly on all devices
- 🔥 **Firebase Integration** - Free, scalable backend for bookings
- 👨‍💼 **Admin Dashboard** - Manage bookings, view statistics, and update statuses

## Booking System Features

- **Real-time Availability** - Greyed out dates show booking capacity
- **Time Slot Management** - Prevents double bookings
- **Service Selection** - Multiple service types with pricing
- **Dog Information** - Collect breed, age, and special requirements
- **Admin Management** - View, confirm, and manage all bookings
- **Status Tracking** - Pending, confirmed, completed, cancelled

## Setup Instructions

### 1. Firebase Setup (Free)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Firestore Database
4. Go to Project Settings > General
5. Add a web app to your project
6. Copy the Firebase config

### 2. Environment Variables

Create a `.env` file in the root directory:

```env
# Firebase Configuration
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

### 3. Firestore Security Rules

In Firebase Console > Firestore Database > Rules, set these rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /bookings/{booking} {
      allow read, write: if true; // For demo - add authentication later
    }
  }
}
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Run the Application

```bash
npm start
```

## Usage

### For Customers
1. Navigate to the contact section
2. Fill out the personalized form with dog details
3. Or use the booking system for direct scheduling

### For Admin
1. Access `/admin` route (you can add this to your navigation)
2. View all bookings with filtering options
3. Confirm, complete, or cancel bookings
4. View booking statistics

## Deployment

### Firebase Hosting (Recommended)

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login and initialize:
```bash
firebase login
firebase init hosting
```

3. Build and deploy:
```bash
npm run build
firebase deploy
```

## Customization

### Services & Pricing
Edit the services array in `src/pages/booking.js`:

```javascript
const services = [
  { id: "walk_30", name: "Dog Walking (30 mins)", price: "£12", emoji: "🐕" },
  { id: "walk_60", name: "Dog Walking (1 hour)", price: "£18", emoji: "🐕" },
  // Add more services here
];
```

### Time Slots
Modify the timeSlots array in `src/pages/booking.js`:

```javascript
const timeSlots = [
  "07:00", "08:00", "09:00", "10:00", "11:00", 
  "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
];
```

### Booking Limits
Change the maximum bookings per day in `src/pages/booking.js`:

```javascript
return dayBookings.length < 6; // Change 6 to your preferred limit
```

## Cost Breakdown

- **Firebase Firestore**: Free tier includes 1GB storage and 50,000 reads/day
- **Firebase Hosting**: Free tier includes 10GB storage and 360MB/day transfer
- **EmailJS**: Free tier includes 200 emails/month

For a small dog walking business, the free tiers should be more than sufficient!

## Support

If you need help setting up Firebase or customizing the booking system, feel free to reach out!

---

Built with ❤️ for dog lovers everywhere! 🐾
