const sdk = require("api")("@scalapaydocs/v1.0#acyzgu9mkppavlmh");

sdk
  .post(
    "/v2/orders",
    {
      billing: {
        countryCode: "IT",
        name: "Milano",
        phoneNumber: "+393519337527",
        postcode: "20125",
        suburb: "Milano",
        line1: "via test"
      },
      consumer: {
        email: "mimmo.falco@gmail.com",
        givenNames: "Domenico",
        phoneNumber: "+393519337527",
        surname: "Falco"
      },
      items: [
        {
          price: { amount: "750", currency: "EUR" },
          brand: "apple",
          category: "elettronic device",
          name: "iphone",
          quantity: 1,
          sku: "0123456"
        }
      ],
      merchant: {
        redirectCancelUrl: "https://www.google.it",
        redirectConfirmUrl: "https://www.google.it"
      },
      shipping: {
        countryCode: "IT",
        line1: "via test",
        name: "Milano",
        postcode: "20125"
      },
      totalAmount: { amount: "750", currency: "EUR" }
    },
    {
      Authorization: "Bearer qhtfs87hjnc12kkos"
    }
  )
  .then(res => console.log(res))
  .catch(err => console.error(err));
