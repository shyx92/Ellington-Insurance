import { NextResponse } from 'next/server';

// This will be replaced with actual insurer API credentials
const INSURER_API_KEY = process.env.INSURER_API_KEY;
const INSURER_API_URL = process.env.INSURER_API_URL;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Example structure for quote request
    const { 
      coverage_type,
      coverage_amount,
      term_length,
      applicant: {
        first_name,
        last_name,
        date_of_birth,
        gender,
        smoking_status,
        health_class
      }
    } = body;

    // This will be replaced with actual API call to insurer
    const insurerResponse = await fetch(`${INSURER_API_URL}/quotes`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${INSURER_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        coverage_type,
        coverage_amount,
        term_length,
        applicant: {
          first_name,
          last_name,
          date_of_birth,
          gender,
          smoking_status,
          health_class
        }
      })
    });

    const quoteData = await insurerResponse.json();
    
    return NextResponse.json(quoteData);
  } catch (error) {
    console.error('Error fetching insurance quote:', error);
    return NextResponse.json(
      { error: 'Failed to fetch insurance quote' },
      { status: 500 }
    );
  }
} 