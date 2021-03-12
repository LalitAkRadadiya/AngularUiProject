import { Configuration } from 'msal';
import { MsalAngularConfiguration } from '@azure/msal-angular';

export const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;


export const b2cPolicies = {
    names: {
        signUpSignIn: 'b2c_1_susi',
        resetPassword: 'b2c_1_reset',
        editProfile: 'b2c_1_edit_profile'
    },
    authorities: {
        signUpSignIn: {
            authority: 'https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/b2c_1_susi'
        },
        resetPassword: {
            authority: 'https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/b2c_1_reset'
        },
        editProfile: {
            authority: 'https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/b2c_1_edit_profile'
        }
    }
};
export const apiConfig: {b2cScopes: string[]; webApi: string} = {
    b2cScopes: ['https://fabrikamb2c.onmicrosoft.com/helloapi/demo.read'],
    webApi: 'https://fabrikamb2chello.azurewebsites.net/hello'
};
export const msalConfig: Configuration = {
    auth: {
        clientId: 'e760cab2-b9a1-4c0d-86fb-ff7084abd902',
        authority: b2cPolicies.authorities.signUpSignIn.authority,
        redirectUri: 'http://localhost:6420/',
        postLogoutRedirectUri: 'http://localhost:6420/',
        navigateToLoginRequestUrl: true,
        validateAuthority: false,
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