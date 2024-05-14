# Real Estate Listings API

## Overview
This project is a simple RESTful API built with Node.js and TypeScript to manage real estate listings. It allows users to add new listings, retrieve all listings, and delete listings from an in-memory store.

## Technology Stack
- Node.js
- TypeScript
- Express.js

## Installation
To set up this project locally, follow the instructions below:
1. Clone the repository: 
git clone <repository-url>
cd real-estate-api

2. Install dependencies: 
npm install

3. Compile TypeScript to JavaScript: 
npm run build

4. Start the server: 
npm start

Alternatively, for development, you can run the server using: 
npm run dev

## API Endpoints
### Add a New Listing
- **POST** `/listings`
- **Body**: 
```json
{ 
  "id": "string", 
  "title": "string", 
  "price": number, 
  "description": "string" 
}
```

## API Endpoints
### Retrieve All Listings
- **GET** `/listings`

### Delete a Listing
- **DELETE** `/listings/:id`
  - URL Parameters: 
    - id (string) - The ID of the listing to delete.

## Testing
To run the automated test suite: 
```bash
npm test
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or create an issue for any bugs found or improvements you think of.

## License

### MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.