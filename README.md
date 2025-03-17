# React QR Code Generator

This React component generates QR codes from user-provided text or URLs.

## Features

-   Generates QR codes using the `qrcode.react` library.
-   Allows users to input text or URLs.
-   Dynamically updates the QR code as the user types.
-   Provides a clean and simple user interface.

## Installation

1.  **Clone the repository (or copy the component file into your React project):**

    ```bash
    git clone <repository_url>
    ```

2.  **Install dependencies:**

    ```bash
    npm install qrcode.react
    ```

    or

    ```bash
    yarn add qrcode.react
    ```

## Usage

1.  **Import the component:**

    ```jsx
    import QRCodeGenerator from "./QRCodeGenerator"; // Adjust the path as needed
    ```

2.  **Use the component in your React application:**

    ```jsx
    function App() {
      return (
        <div>
          <QRCodeGenerator />
        </div>
      );
    }

    export default App;
    ```

3.  **Create a CSS file (QRCodeGenerator.css):**

    Create a `QRCodeGenerator.css` file in the same directory (or adjust the import path) with the following content (or your own custom styles):

    ```css
    .qr-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      font-family: sans-serif;
    }

    .qr-title {
      margin-bottom: 20px;
    }

    .qr-input {
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 4px;
      width: 300px;
      box-sizing: border-box;
    }

    .qr-box {
      margin-top: 20px;
      border: 1px solid #ddd;
      padding: 10px;
      border-radius: 8px;
      background-color: #f9f9f9;
    }
    ```

## Component Structure

-   **State Variables:**
    -   `text`: Stores the user input text or URL.

-   **Event Handlers:**
    -   `onChange`: Updates the `text` state when the user types in the input field.

-   **Rendering:**
    -   Displays an input field for the user to enter text or a URL.
    -   Conditionally renders the `QRCodeCanvas` component from `qrcode.react` when the `text` state is not empty.
    -   Applies styles using the `QRCodeGenerator.css` file.

## Customization

-   You can customize the appearance of the QR code by modifying the `size` and other properties of the `QRCodeCanvas` component. Refer to the `qrcode.react` documentation for more details.
-   You can customize the styling of the component by modifying the `QRCodeGenerator.css` file.

## Example

1.  **Run the application:**

    ```bash
    npm start
    ```

2.  **Open the application in your browser.**

3.  **Enter text or a URL in the input field.**

4.  **The QR code will be generated and displayed below the input field.**

## Dependencies

-   `qrcode.react`: Used for generating QR codes.
