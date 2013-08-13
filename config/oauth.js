var oauth = {}

oauth.google = {};

oauth.google.clientId = process.env.GOOGLE_CLIENT_ID || 'ClientID';
oauth.google.clientSecret =  process.env.GOOGLE_CLIENT_SECRET || 'Client Secret';
oauth.google.callback = process.env.GOOGLE_CALLBACK || 'http://yourdomain.com/oauth2callback';

module.exports = oauth;
