interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '6PIu45PgCl4h6o2YAYP2jHucZkt8XGGn',
  domain: 'marknauf.auth0.com',
  callbackURL: 'https://marknauf.github.io/sif/callback'
};
