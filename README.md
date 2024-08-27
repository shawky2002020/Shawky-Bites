![Shawky Bites Screenshot](https://github.com/user-attachments/assets/aaf38691-4e5d-4bce-a8ea-710cdbe5ba4b)

**Shawky Bites** is a powerful MEAN stack food store application designed to simplify the management of food orders for businesses of any size. This application provides a seamless experience for both administrators and customers, offering intuitive interfaces for CRUD operations, secure route management, interactive maps for location selection, and integrated payment options.

## Key Features

- **Robust CRUD Operations:** Manage food items effortlessly with full Create, Read, Update, and Delete functionality.
- **Secure Routing with Guards:** Protect sensitive routes with user authentication and role-based access control.
- **Interactive Maps Integration:** Allow customers to select their delivery location using an intuitive map interface.
- **Seamless Payment Integration:** Support multiple payment methods, including Credit Card and PayPal, ensuring secure and reliable transactions.
- **Responsive Design:** The application is fully responsive, providing an optimal user experience on both desktop and mobile devices.
- **Modular Architecture:** Clean and maintainable code structure with separate modules for frontend and backend operations.
- **Scalable Backend:** Built with Node.js and Express, the backend is designed to scale with your growing business needs.

## Getting Started

Follow these instructions to get a copy of Shawky Bites running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js:** Download and install the latest version from [nodejs.org](https://nodejs.org/).
- **npm:** npm comes bundled with Node.js, so you should have it after installing Node.js.

### Installation

1. **Clone the Repository**

    Clone the repository to your local machine using the following command:

    ```bash
    git clone <your-repository-url>
    cd shawky-bites
    ```

2. **Install Dependencies**

    Navigate to the project directory and install the required dependencies for both the frontend and backend:

    ```bash
    # Install backend dependencies
    cd backend
    npm install
    
    # Install frontend dependencies
    cd ../frontend
    npm install
    ```

3. **Running the Application**

    You can now run the application in development mode or start the production server:

    ```bash
    # Development mode: Runs both frontend and backend development servers concurrently
    npm run dev
    ```

    ```bash
    # Start the production server: Serves the backend from the built directory
    npm run start
    ```

4. **Building the Application**

    If you need to build the application for production, use the following commands:

    ```bash
    # Pre-build step: Installs backend dependencies and builds the backend before building the frontend
    npm run prebuild
    ```

    ```bash
    # Build step: Installs frontend dependencies and builds the frontend project
    npm run build
    ```

## Screenshots

Here are some screenshots of Shawky Bites in action:

<div style="display: flex; overflow-x: auto; width: 100%; padding: 10px 0;">
    <img src="https://github.com/user-attachments/assets/32257f61-765a-4a7d-913e-7524b7a3a3a5" alt="Home Page" style="width: 300px; margin-right: 10px;" />
    <img src="https://github.com/user-attachments/assets/9db14f90-b90d-44f5-9dd2-7df4ae973120" alt="Food Page" style="width: 300px; margin-right: 10px;" />
    <img src="https://github.com/user-attachments/assets/b5cd820c-9b53-4975-bb93-55ed1eacee8b" alt="Login Page" style="width: 300px; margin-right: 10px;" />
    <img src="https://github.com/user-attachments/assets/dbcf5c3e-28a8-4310-a2f1-fb6d02e2a6f6" alt="Cart Page" style="width: 300px; margin-right: 10px;" />
    <img src="https://github.com/user-attachments/assets/f5cc8c88-58d6-4806-bc4e-8e3cd4d073b0" alt="Checkout Page" style="width: 300px;" />
    <img src="https://github.com/user-attachments/assets/5776f23d-ff4c-4ae8-98dd-32d6f74105cf" alt="Payment Page" style="width: 300px; margin-right: 10px;" />
    <img src="https://github.com/user-attachments/assets/93230f4b-b27d-4912-8263-9b8a43100617" alt="Track Page" style="width: 300px; margin-right: 10px;" />
</div>

## Contributing

We welcome contributions from the community! If you'd like to contribute, please follow these steps:

1. **Fork the repository** on GitHub.
2. **Create a new branch** (`git checkout -b feature-branch`).
3. **Commit your changes** (`git commit -m 'Add new feature'`).
4. **Push to the branch** (`git push origin feature-branch`).
5. **Submit a pull request**.

Please ensure your code follows the existing style conventions and passes all linting checks.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, issues, or suggestions, feel free to contact Shawky Elsayed at Shawkyelsayyed2002@gmail.com
