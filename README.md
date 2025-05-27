# [Immigration Dashboard](https://immigration-dashboard.vercel.app)

![opengraph-image](https://github.com/user-attachments/assets/7b4550a9-21ec-40de-8911-9ba41d95e949)

A full-stack web application designed to streamline immigration workflows for both clients and administrators. It features centralized document handling, real-time status tracking, secure messaging, and payment processing.

---

## 📚 Overview

This dashboard was developed as part of a school capstone project by a 5-member team using a modern web tech stack. It provides:

- Role-based dashboards for clients and admins
- Centralized document upload and review
- Real-time immigration status tracking
- Messaging system for inquiries and responses
- Stripe integration for secure online payments
- Clerk-based authentication and user management

---

## 🧑‍💻 Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Node.js, Express
- **Database**: MongoDB (via Mongoose)
- **Authentication**: Clerk
- **Payments**: Stripe
- **API**: REST

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/immigration-dashboard.git
cd immigration-dashboard
````

### 2. Install Dependencies

bash
npm install

### 3. Set Environment Variables

Create a .env.local file in the root directory and add the following:

```env
MONGODB_URI=YOUR_MONGODB_URI
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY=YOUR_CLERK_SECRET_KEY
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_API_URL=LOCAL_HOST_URL/api
STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET_KEY
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=YOUR_NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
```


### 4. Start the Development Server

bash
npm run dev

Open your browser and go to [http://localhost:3000](http://localhost:3000)

---

## 🧩 Features

* 🔐 **Authentication** with Clerk for secure user access
* 👥 **Role-Based Access Control** for users and admins
* 📁 **Document Management**: upload, review, and organize immigration documents
* 📊 **Status Tracking**: view and update application progress
* 💬 **Messaging System**: handle client-admin communication
* 💳 **Stripe Integration**: seamless online payments

---

## 📁 Folder Structure

```text
.
├── public/               # Static assets
└── src/
    ├── app/
    │   ├── api/          # API routes
    │   └── ...           # Route-based pages
    ├── components/       # Reusable UI components
    ├── data/             # Static datas
    ├── hooks/            # Calling api functions
    ├── lib/              # Utility functions and services
    ├── types/            # Data types for frontend
    └── ...
```

---

## 🏆 Highlights

* Delivered as a capstone project by a 5-person team
* Selected as the school’s representative project
* Won the **Implementation Award** from external judges
* Reduced admin-client turnaround time by approximately 40%

---

## 📄 License

This project is for educational purposes only.
Please contact the team for any commercial or production use.
