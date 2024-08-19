# CTMFB Mobile Application

This project is a mobile application developed for Consistent Trust Microfinance Bank (CTMFB) using React Native. The application includes a functional login page and a home page with essential banking features.

## Project Overview

The CTMFB mobile application allows users to log in securely and access their account details. Key features include:

- **Login Page**: Secure login with form validation and error handling.
- **Home Page**: Displays the user's account balance, with options to hide/show the balance and copy the account number.
- **Bottom Navigation**: Seamless navigation between different sections of the app.
- **Responsive Design**: The app is designed to work on both iOS and Android devices.

## Features

### 1. **Login Page**

- **Form Validation**: The login form requires a password before accessing the home page.
- **Error Handling**: Displays error messages for invalid inputs.

### 2. **Home Page**

- **Account Balance Display**: Shows the user's account balance, with an option to hide or show the balance.
- **Copy Account Number**: Allows the user to copy their account number to the clipboard.
- **Bottom Navigation**: Provides easy access to different sections of the app.

## Installation

To get started with the CTMFB mobile application, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/ctmfb-mobile-app.git
   cd ctmfb-mobile-app
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the Application**:

   ```bash
   npm start
   ```

4. **Run on a Device**:
   - For iOS:
     ```bash
     npm run ios
     ```
   - For Android:
     ```bash
     npm run android
     ```

## Code Structure

- **/components**: Reusable components used across the application.
- **/screens**: Contains the main screens of the application (Login and Home).
- **/assets**: Images and other static assets.
- **/navigation**: Configuration for the bottom navigation and routing.

## Form Validation & Error Handling

- The login form includes validation to ensure that the password field is filled before submission.
- Error messages are displayed beneath the relevant input fields when validation fails.

## Bottom Navigation

The bottom navigation provides a seamless transition between different pages of the app, ensuring an intuitive user experience.

## Performance

The application is optimized for speed and responsiveness, ensuring a smooth experience for users on both iOS and Android devices.

## Documentation

The codebase is well-documented with clear comments and explanations where necessary. Developers can easily understand the flow of the application and the purpose of each component.

## Contributing

If you wish to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a pull request.

## Contact

For any questions or clarifications, please contact:

- **Hannah Ugheoke**: [Hannah.ugheoke@prunny.com](mailto:Hannah.ugheoke@prunny.com)
- **Prunny Careers**: [careers@prunny.com](mailto:careers@prunny.com)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
