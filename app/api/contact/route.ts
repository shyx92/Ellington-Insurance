import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;
    
    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // In a production environment, you would use a service like SendGrid, AWS SES, or Nodemailer
    // For now, we'll just log the data and return a success response
    console.log('Form submission received:');
    console.log({
      to: 'support@ellingtoninsurance.co.uk',
      from: email,
      subject: `New contact form submission from ${name}`,
      name,
      email,
      message,
    });
    
    // Example implementation with SendGrid would be:
    // 
    // const sendGridApiKey = process.env.SENDGRID_API_KEY;
    // if (!sendGridApiKey) {
    //   console.error('SendGrid API key is not defined');
    //   return NextResponse.json(
    //     { error: 'Server misconfiguration' },
    //     { status: 500 }
    //   );
    // }
    // 
    // await fetch('https://api.sendgrid.com/v3/mail/send', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${sendGridApiKey}`,
    //   },
    //   body: JSON.stringify({
    //     personalizations: [
    //       {
    //         to: [{ email: 'support@ellingtoninsurance.co.uk' }],
    //         subject: `New enquiry from ${name}`,
    //       },
    //     ],
    //     from: { email: 'no-reply@ellingtoninsurance.co.uk', name: 'Ellington Insurance' },
    //     reply_to: { email, name },
    //     content: [
    //       {
    //         type: 'text/plain',
    //         value: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    //       },
    //     ],
    //   }),
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 