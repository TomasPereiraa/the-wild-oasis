# The Wild Oasis - React Project Setup Guide

This guide walks you through setting up **The Wild Oasis** project, including integrating **Supabase** as the backend.

## 🚀 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (latest LTS version recommended)
- **Git** (for cloning the repository)
- **Supabase** account (for backend services)
- **Code Editor** (e.g., VS Code)

## 📦 Project Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/wild-oasis.git
   cd wild-oasis
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Create an ****`.env`**** file** in the root of the project:

   ```sh
   touch .env
   ```

   Then, add the following environment variables (update with your Supabase credentials):

   ```sh
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

## 🔧 Setting Up Supabase

1. **Go to ****[Supabase](https://supabase.com)**** and sign in.**
2. **Create a new project** and note down the **API URL** and **Anon Key**.
3. **Go to the "Authentication" tab** and enable `email + password` authentication.
4. **Set up the database schema:**
   - Navigate to the **SQL Editor** in Supabase.
   - Run the following SQL to create the necessary tables:
     ```sql
     create table bookings (
         id uuid primary key default gen_random_uuid(),
         user_id uuid references auth.users not null,
         created_at timestamp default now()
     );

     create table cabins (
         id uuid primary key default gen_random_uuid(),
         name text not null,
         max_capacity int not null,
         price_per_night numeric not null
     );
     ```
5. **Enable Row Level Security (RLS)** and add policies to allow users to access their own data.
6. **Deploy your database schema.**

## 🏃 Running the Project

1. **Start the development server:**
   ```sh
   npm run dev
   ![image](https://github.com/user-attachments/assets/4a383733-baf9-40e6-873f-7391da2d1711)

   ```
2. Open your browser and navigate to `http://localhost:5173/`.

## 🚀 Deployment

To deploy your project, you can use **Vercel, Netlify, or Firebase**. Ensure your environment variables are configured on the hosting platform.

## 🛠 Troubleshooting

- If you encounter issues with Supabase, check the [Supabase documentation](https://supabase.com/docs).
- If the frontend doesn't connect to Supabase, verify the API keys in the `.env` file.
- For dependency issues, try:
  ```sh
  rm -rf node_modules package-lock.json
  npm install
  ```

