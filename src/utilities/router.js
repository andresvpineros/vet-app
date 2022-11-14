const Router = {
  // app routes
  settings: '/settings',
  error: '/error',

  // api routes
  listDocumentsApi: '/config/document/:payerTaxId/:countryCode',
  listOverrideApi: '/config/product/:countryCode/:payerTaxId',
  saveOverrideApi: '/config/product/',
  saveDocumentsApi: '/config/document',
  listNotificationsApi: '/config/notification/:payerTaxId/:countryCode',
  listEmailsApi: '/config/notification/emails/:payerTaxId/:countryCode',
  saveEmailsApi: '/config/notification/'
}

export default Router
