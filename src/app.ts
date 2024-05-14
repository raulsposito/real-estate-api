import express from 'express';
import { Listing } from './models/Listing';

const app = express();
app.use(express.json());

// Define an in-memory store for the listings (Array)
const listings: Listing[] = [];

// Placeholder for API endpoints

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Add a New Listing

app.post('/listings', (req, res) => {
    const newListing: Listing = req.body;
    listings.push(newListing);
    res.status(201).send(newListing);
});

// Retrieve All Listings

app.get('/listings', (req, res) => {
    res.status(200).send(listings);
});
  
// Delete a Listing

app.delete('/listings/:id', (req, res) => {
    const { id } = req.params;
    const index = listings.findIndex(listing => listing.id === id);
    if (index !== -1) {
      listings.splice(index, 1);
      res.status(204).send();
    } else {
      res.status(404).send({ message: 'Listing not found' });
    }
});
  