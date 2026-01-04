# Environment Variables Setup

## Backend Server (.env in root directory)

Create a `.env` file in the root directory with the following SMTP configuration:

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Email Settings
FROM_NAME=AVERIX Contact Form
TO_EMAIL=hello@averix.technology.com

# Server Port (optional, defaults to 3001)
PORT=3001
```

## Frontend (.env in root directory)

For production, you may also need to set the API URL:

```env
# Frontend API URL (optional, defaults to http://localhost:3001)
VITE_API_URL=http://localhost:3001
```

In production, set this to your deployed API URL.

## SMTP Provider Examples

### Gmail
- SMTP_HOST: smtp.gmail.com
- SMTP_PORT: 587
- SMTP_SECURE: false
- SMTP_USER: your-email@gmail.com
- SMTP_PASS: Use an App Password (not your regular password)

### Outlook/Hotmail
- SMTP_HOST: smtp-mail.outlook.com
- SMTP_PORT: 587
- SMTP_SECURE: false

### Custom SMTP
- Use your provider's SMTP settings
- For SSL: SMTP_SECURE: true, SMTP_PORT: 465
- For TLS: SMTP_SECURE: false, SMTP_PORT: 587

## Running the Server

1. Install dependencies: `npm install`
2. Create `.env` file with your SMTP credentials
3. Run the server: `npm run dev:server`
4. Run the frontend: `npm run dev` (in another terminal)
5. Or run both together: `npm run dev:all`

The API will be available at `http://localhost:3001`

