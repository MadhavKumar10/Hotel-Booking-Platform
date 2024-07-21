# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- Setup Instructions
Clone the repository:
git clone https://github.com/MadhavKumar10/airbnb-clone.git
cd airbnb-clone

Install dependencies:
For the backend:
cd backend
npm install

For the frontend:
cd frontend
npm install

Set up environment variables:
Create a .env file in the backend directory and add the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Run the application:
In the backend directory:
npm start
In the frontend directory:
npm start

Visit the application:
Open your browser and go to http://localhost:3000

Usage
Sign up or log in to your account.
Search for properties by entering the location, check-in, and check-out dates.
View property details and book a property.
List your own properties by providing necessary details.



