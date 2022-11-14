export const fromAuthToJsonAdapter = (data) => {
  return {
    clientTaxId: data.taxpayerId,
    countryCode: data.countryCode
  }
}
