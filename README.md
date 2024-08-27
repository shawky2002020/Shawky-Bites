# Shawky Bites

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

For any inquiries, issues, or suggestions, feel free to contact [Your Name] at [Your Email].

