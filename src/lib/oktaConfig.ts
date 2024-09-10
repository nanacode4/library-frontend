export const oktaConfig = {
    clientId: '0oah40xkg0PyYRHTQ5d7',
    issuer: 'https://dev-88699211.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}