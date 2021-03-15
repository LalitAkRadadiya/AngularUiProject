import { Configuration } from 'msal';
import { MsalAngularConfiguration } from '@azure/msal-angular';

export const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;


export const b2cPolicies = {
    names: {
        signUpSignIn: 'B2C_1_lalit',
        resetPassword: 'B2C_1_lalit_reset',
        editProfile: 'B2C_1_lalit_edit'
    },
    authorities: {
        signUpSignIn: {
            authority: 'https://lalitakradadiya.b2clogin.com/lalitakradadiya.onmicrosoft.com/B2C_1_lalit'
        },
        resetPassword: {
            authority: 'https://lalitakradadiya.b2clogin.com/lalitakradadiya.onmicrosoft.com/B2C_1_lalit_reset'
        },
        editProfile: {
            authority: 'https://lalitakradadiya.b2clogin.com/lalitakradadiya.onmicrosoft.com/B2C_1_lalit_edit'
        }
    }
};
export const apiConfig: {b2cScopes: string[]; webApi: string} = {
    b2cScopes: ['openid', 'profile'],
    webApi: ''
};
export const msalConfig: Configuration = {
    
    auth: {
        clientId: 'a2efe93c-519e-4a8c-8132-a778a4e2b3fa',
        authority: b2cPolicies.authorities.signUpSignIn.authority,
        redirectUri: 'http://localhost:4200/',
        postLogoutRedirectUri: 'http://localhost:4200/',
        navigateToLoginRequestUrl: true,
        validateAuthority: false
      },
    cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: isIE, // Set this to 'true' to save cache in cookies to address trusted zones limitations in IE
    },
};

export const loginRequest: {scopes: string[]} = {
    scopes: ['openid', 'profile'],
};

export const tokenRequest: {scopes: string[]} = {
    scopes: apiConfig.b2cScopes // i.e. [https://fabrikamb2c.onmicrosoft.com/helloapi/demo.read]
};


export const protectedResourceMap: [string, string[]][] = [
    [apiConfig.webApi, apiConfig.b2cScopes]
    // i.e. [https://fabrikamb2chello.azurewebsites.net/hello, ['https://fabrikamb2c.onmicrosoft.com/helloapi/demo.read']]
];


export const msalAngularConfig: MsalAngularConfiguration = {
    popUp: !isIE,
    consentScopes: [
        ...loginRequest.scopes,
        ...tokenRequest.scopes,
    ],
    unprotectedResources: [], // API calls to these coordinates will NOT activate MSALGuard
    protectedResourceMap,     // API calls to these coordinates will activate MSALGuard
    extraQueryParameters: {}
};