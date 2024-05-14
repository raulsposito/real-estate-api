import request from 'supertest';
import express from 'express';
import app from '../app';
import { Listing } from '../../src/models/Listing';

describe('Real Estate API', () => {
  const testListing: Listing = {
    id: 'test1',
    title: 'Test House',
    price: 100000,
    description: 'A test house listing'
  };

  // Test POST /listings
  it('should create a new listing', async () => {
    const response = await request(app).post('/listings').send(testListing);
    expect(response.status).toBe(201);
    expect(response.body).toEqual(testListing);
  });

  // Test GET /listings
  it('should retrieve all listings', async () => {
    const response = await request(app).get('/listings');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([testListing]); // Expecting array with the test listing
  });

  // Test DELETE /listings/:id
  it('should delete a listing', async () => {
    const response = await request(app).delete(`/listings/${testListing.id}`);
    expect(response.status).toBe(204);
  });
});

