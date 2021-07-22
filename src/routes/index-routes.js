const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {

  setTimeout((() => {
    res.status(200).send({
      data: {
          "sub": "0000001",
          "jti": "0123456789qwer",
          "iss": " Instituição Financeira",
          "iat": "2021-05-12T19:41:12.637Z",
          "name": "Nome Cliente",
          "account_id": "92792126019929279212650822221989319252576",
          "accounts": [{
                          "account_id": "92792126019929279212650822221989319252576",
                          "account_number": "123456",
                          "account_agency": "123456",
                          "mfa": true,
                          "account_type": "CACC"
                      },
                      {
                          "account_id": "22222222222222222222222222222222222222222",
                          "account_number": "123456",
                          "account_agency": "123456",
                          "mfa": true,
                          "account_type": "SVGS"
                      },
                      {
                          "account_id": "11111111111111111111111111111111111111111",
                          "account_number": "654321",
                          "account_agency": "654321",
                          "mfa": true,
                          "account_type": "CACC"
                      },
                      
                      ],
          "financial_id": "123456",
          "request": "eyJhbGciOiJub25lIn0.eyJhdWQiOiJodHRwczovL2F1dGgxLnB1Yi1kZW1vMS5kZXYu"
  } 
    });
  }), 5000)
  
 
});

router.get('/pix/payments/:id', (req, res, next) => {
 
  res.status(200).send({
    
      data: {
        "paymentId": "string",
        "endToEndId": "stringstringstringstringstringst",
        "consentId": "string",
        "creationDateTime": "2021-07-21T17:11:12.589Z",
        "statusUpdateDateTime": "2021-07-21T17:11:12.589Z",
        "proxy": "string",
        "status": "PDNG",
        "rejectionReason": "ABORTED_SETTLEMENT_TIMEOUT",
        "payment": {
          "amount": "string",
          "currency": "str"
        },
        "remittanceInformation": "string",
        "creditorAccount": {
          "ispb": "stringst",
          "issuer": "stri",
          "number": "string",
          "accountType": "CACC"
        }
      },
      "links": {
        "self": "string"
      },
      "meta": {
        "totalRecords": 0,
        "totalPages": 0,
        "requestDateTime": "2021-07-21T17:11:12."
      }
    
  });
});


router.post('/auth/:token', (req, res, next) => {
 
  res.status(200).send({
    
      data: {
        "value":"value",
        "status":200
      }
    
  });
});

router.get('/pix/payments', (req, res, next) => {
  res.status(200).send({
    
      data: {
        "paymentId": "string",
        "endToEndId": "stringstringstringstringstringst",
        "consentId": "string",
        "creationDateTime": "2021-07-21T16:48:26.465Z",
        "statusUpdateDateTime": "2021-07-21T16:48:26.465Z",
        "proxy": "string",
        "status": "PDNG",
        "rejectionReason": "ABORTED_SETTLEMENT_TIMEOUT",
        "payment": {
          "amount": "string",
          "currency": "str"
        },
        "remittanceInformation": "string",
        "creditorAccount": {
          "ispb": "stringst",
          "issuer": "stri",
          "number": "string",
          "accountType": "CACC"
        }
      },
      "links": {
        "self": "string"
      },
      "meta": {
        "totalRecords": 0,
        "totalPages": 0,
        "requestDateTime": "2021-07-21T16:48:26."
      }
    
  });
});

router.get('/consents/construct', (req, res, next) => {
  setTimeout((() => {
  res.status(200).send({
    data :[
      {
          "id": "pix-76164b61-c82c-420d-bd83-86afb69f8501",
          "consentType": "brcb-pix-payment-consents",
          "requestHeaders": {
              "host": "rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "self_uri": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "x-cert-dn": "CN=HQuZPIt3ipkh33Uxytox1E,OU=0015800001041RHAAY,O=OpenBanking,C=GB",
              "x-cert-fingerprint": "fd4be9855160fa386727c343908a088b18a830fb",
              "connection": "close",
              "content-length": "307",
              "content-type": "application/json",
              "x-fapi-financial-id": "TECBAN",
              "x-fapi-customer-ip-address": "10.1.1.10",
              "x-fapi-interaction-id": "3a6743c4-22eb-460b-81f4-c2aa57961155",
              "authorization": "Bearer 12cbf523-ddc5-45c1-90b9-b0209642a845",
              "user-agent": "PostmanRuntime/7.28.0",
              "accept": "*/*",
              "cache-control": "no-cache",
              "postman-token": "18c16a56-4c50-416b-8b98-2c02d67ff7e6",
              "accept-encoding": "gzip, deflate, br"
          },
          "request": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  }
              }
          },
          "requestUrl": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents",
          "consentBody": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  },
                  "consentId": "pix-76164b61-c82c-420d-bd83-86afb69f8501",
                  "status": "Awaiting_Authorisation",
                  "creationDateTime": "2021-06-29T14:53:49.708Z",
                  "statusUpdateDateTime": "2021-06-29T14:53:49.708Z"
              },
              "links": {
                  "self": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents/pix-76164b61-c82c-420d-bd83-86afb69f8501"
              },
              "meta": {},
              "Data": {
                  "Status": "Authorised"
              }
          },
          "provider": {
              "id": "TECBAN"
          },
          "tpp": {
              "clientId": "c62eba7b-fe2d-4e3f-abb9-04e758cf67c9",
              "orgId": "0015800001041RHAAY",
              "softwareStatementId": "HQuZPIt3ipkh33Uxytox1E",
              "tppName": "Ozone Financial Technology Limited",
              "directoryRecord": {}
          },
          "accountIds": [
              "001004000000000000000002"
          ],
          "psuIdentifiers": {
              "userId": "001001000000000000000002"
          },
          "updatedAt": 1624978951374
      },
      {
          "id": "pix-d95e2996-af74-4755-9e02-3efd3d4a332b",
          "consentType": "brcb-pix-payment-consents",
          "requestHeaders": {
              "host": "rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "self_uri": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "x-cert-dn": "CN=HQuZPIt3ipkh33Uxytox1E,OU=0015800001041RHAAY,O=OpenBanking,C=GB",
              "x-cert-fingerprint": "fd4be9855160fa386727c343908a088b18a830fb",
              "connection": "close",
              "content-length": "307",
              "content-type": "application/json",
              "x-fapi-financial-id": "TECBAN",
              "x-fapi-customer-ip-address": "10.1.1.10",
              "x-fapi-interaction-id": "f4817002-38b1-49fc-8189-4db96bf491d4",
              "authorization": "Bearer 7c165f64-ce3b-4f9d-af0e-839512e061fb",
              "user-agent": "PostmanRuntime/7.28.0",
              "accept": "*/*",
              "cache-control": "no-cache",
              "postman-token": "f3729d4e-a4be-4bb2-9d33-a49a273a1118",
              "accept-encoding": "gzip, deflate, br"
          },
          "request": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  }
              }
          },
          "requestUrl": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents",
          "consentBody": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  },
                  "consentId": "pix-d95e2996-af74-4755-9e02-3efd3d4a332b",
                  "status": "Authorised",
                  "creationDateTime": "2021-06-29T15:31:14.507Z",
                  "statusUpdateDateTime": "2021-06-29T15:31:14.507Z"
              },
              "links": {
                  "self": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents/pix-d95e2996-af74-4755-9e02-3efd3d4a332b"
              },
              "meta": {},
              "Data": {
                  "Status": "Authorised"
              }
          },
          "provider": {
              "id": "TECBAN"
          },
          "tpp": {
              "clientId": "c62eba7b-fe2d-4e3f-abb9-04e758cf67c9",
              "orgId": "0015800001041RHAAY",
              "softwareStatementId": "HQuZPIt3ipkh33Uxytox1E",
              "tppName": "Ozone Financial Technology Limited",
              "directoryRecord": {}
          },
          "accountIds": [
              "001004000000000000000002"
          ],
          "psuIdentifiers": {
              "userId": "001001000000000000000002"
          },
          "updatedAt": 1624980819786
      },
      {
          "id": "pix-49dabb9a-ed0f-4515-bb04-7389ae0a150c",
          "consentType": "brcb-pix-payment-consents",
          "requestHeaders": {
              "host": "rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "self_uri": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "x-cert-dn": "CN=HQuZPIt3ipkh33Uxytox1E,OU=0015800001041RHAAY,O=OpenBanking,C=GB",
              "x-cert-fingerprint": "fd4be9855160fa386727c343908a088b18a830fb",
              "connection": "close",
              "content-length": "481",
              "content-type": "application/json",
              "x-fapi-financial-id": "TECBAN",
              "x-fapi-customer-ip-address": "10.1.1.10",
              "x-fapi-interaction-id": "74221940-9bff-463d-be90-ead26b3987f9",
              "authorization": "Bearer dea826cf-2791-4149-a252-cfa5aa4bb67a",
              "user-agent": "PostmanRuntime/7.28.0",
              "accept": "*/*",
              "cache-control": "no-cache",
              "postman-token": "e7f874f8-5e27-4a66-bcdc-291c9b92be4d",
              "accept-encoding": "gzip, deflate, br"
          },
          "request": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  },
                  "debtorAccount": {
                      "ispb": "12345678",
                      "branchCode": "1774",
                      "number": "1234567890",
                      "checkDigit": "4",
                      "accountType": "CACC"
                  }
              }
          },
          "requestUrl": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents",
          "consentBody": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  },
                  "debtorAccount": {
                      "ispb": "12345678",
                      "branchCode": "1774",
                      "number": "1234567890",
                      "checkDigit": "4",
                      "accountType": "CACC"
                  },
                  "consentId": "pix-49dabb9a-ed0f-4515-bb04-7389ae0a150c",
                  "status": "Authorised",
                  "creationDateTime": "2021-06-29T15:26:22.335Z",
                  "statusUpdateDateTime": "2021-06-29T15:26:22.335Z"
              },
              "links": {
                  "self": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents/pix-49dabb9a-ed0f-4515-bb04-7389ae0a150c"
              },
              "meta": {},
              "Data": {
                  "Status": "Authorised"
              }
          },
          "provider": {
              "id": "TECBAN"
          },
          "tpp": {
              "clientId": "c62eba7b-fe2d-4e3f-abb9-04e758cf67c9",
              "orgId": "0015800001041RHAAY",
              "softwareStatementId": "HQuZPIt3ipkh33Uxytox1E",
              "tppName": "Ozone Financial Technology Limited",
              "directoryRecord": {}
          },
          "accountIds": [
              "001004000000000000000002"
          ],
          "psuIdentifiers": {
              "userId": "001001000000000000000002"
          },
          "updatedAt": 1624980510289
      },
      {
          "id": "pix-9cb07459-73e3-4c87-b0c8-df34b368970c",
          "consentType": "brcb-pix-payment-consents",
          "requestHeaders": {
              "host": "rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "self_uri": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "x-cert-dn": "CN=HQuZPIt3ipkh33Uxytox1E,OU=0015800001041RHAAY,O=OpenBanking,C=GB",
              "x-cert-fingerprint": "fd4be9855160fa386727c343908a088b18a830fb",
              "connection": "close",
              "content-length": "307",
              "content-type": "application/json",
              "x-fapi-financial-id": "TECBAN",
              "x-fapi-customer-ip-address": "10.1.1.10",
              "x-fapi-interaction-id": "3de59a5e-2970-4893-ad23-d10b9e40af82",
              "authorization": "Bearer bcc8a1c5-1791-4407-b5a2-53e1f1b72a26",
              "user-agent": "PostmanRuntime/7.28.0",
              "accept": "*/*",
              "cache-control": "no-cache",
              "postman-token": "b4267702-1939-4bc8-9465-cbdf0f870e25",
              "accept-encoding": "gzip, deflate, br"
          },
          "request": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  }
              }
          },
          "requestUrl": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents",
          "consentBody": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  },
                  "consentId": "pix-9cb07459-73e3-4c87-b0c8-df34b368970c",
                  "status": "Authorised",
                  "creationDateTime": "2021-06-29T15:35:43.989Z",
                  "statusUpdateDateTime": "2021-06-29T15:35:43.989Z"
              },
              "links": {
                  "self": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents/pix-9cb07459-73e3-4c87-b0c8-df34b368970c"
              },
              "meta": {},
              "Data": {
                  "Status": "Authorised"
              }
          },
          "provider": {
              "id": "TECBAN"
          },
          "tpp": {
              "clientId": "c62eba7b-fe2d-4e3f-abb9-04e758cf67c9",
              "orgId": "0015800001041RHAAY",
              "softwareStatementId": "HQuZPIt3ipkh33Uxytox1E",
              "tppName": "Ozone Financial Technology Limited",
              "directoryRecord": {}
          },
          "accountIds": [
              "001004000000000000000002"
          ],
          "psuIdentifiers": {
              "userId": "001001000000000000000002"
          },
          "updatedAt": 1624981102953,
          "locked": true
      },
      {
          "id": "pix-334c45e2-b9cf-4e7c-bfd7-7014b2de3fdf",
          "consentType": "brcb-pix-payment-consents",
          "requestHeaders": {
              "host": "rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "self_uri": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "x-cert-dn": "CN=HQuZPIt3ipkh33Uxytox1E,OU=0015800001041RHAAY,O=OpenBanking,C=GB",
              "x-cert-fingerprint": "fd4be9855160fa386727c343908a088b18a830fb",
              "connection": "close",
              "content-length": "307",
              "content-type": "application/json",
              "x-fapi-financial-id": "TECBAN",
              "x-fapi-customer-ip-address": "10.1.1.10",
              "x-fapi-interaction-id": "ab8968ad-bec7-416a-bb7f-d5ebef3bd032",
              "authorization": "Bearer 2e6ae4a3-5bcd-4d67-a991-f6ad670e8e80",
              "user-agent": "PostmanRuntime/7.28.1",
              "accept": "*/*",
              "postman-token": "8d3a5fd6-5681-451d-b8de-92f6fb2ede1a",
              "accept-encoding": "gzip, deflate, br"
          },
          "request": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  }
              }
          },
          "requestUrl": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents",
          "consentBody": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  },
                  "consentId": "pix-334c45e2-b9cf-4e7c-bfd7-7014b2de3fdf",
                  "status": "Authorised",
                  "creationDateTime": "2021-06-29T17:17:58.896Z",
                  "statusUpdateDateTime": "2021-06-29T17:17:58.896Z"
              },
              "links": {
                  "self": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents/pix-334c45e2-b9cf-4e7c-bfd7-7014b2de3fdf"
              },
              "meta": {},
              "Data": {
                  "Status": "Authorised"
              }
          },
          "provider": {
              "id": "TECBAN"
          },
          "tpp": {
              "clientId": "c62eba7b-fe2d-4e3f-abb9-04e758cf67c9",
              "orgId": "0015800001041RHAAY",
              "softwareStatementId": "HQuZPIt3ipkh33Uxytox1E",
              "tppName": "Ozone Financial Technology Limited",
              "directoryRecord": {}
          },
          "accountIds": [
              "001004000000000000000002"
          ],
          "psuIdentifiers": {
              "userId": "001001000000000000000002"
          },
          "updatedAt": 1624987354150
      },
      {
          "id": "pix-b5623e38-e21c-41a6-b358-2cbc3f226fc4",
          "consentType": "brcb-pix-payment-consents",
          "requestHeaders": {
              "host": "rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "self_uri": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "x-cert-dn": "CN=HQuZPIt3ipkh33Uxytox1E,OU=0015800001041RHAAY,O=OpenBanking,C=GB",
              "x-cert-fingerprint": "fd4be9855160fa386727c343908a088b18a830fb",
              "connection": "close",
              "content-length": "307",
              "content-type": "application/json",
              "x-fapi-financial-id": "TECBAN",
              "x-fapi-customer-ip-address": "10.1.1.10",
              "x-fapi-interaction-id": "af02ea11-738a-4679-a7dd-389a7e29699e",
              "authorization": "Bearer 6abc002b-8657-43c4-8974-7d6861b01eb2",
              "user-agent": "PostmanRuntime/7.28.0",
              "accept": "*/*",
              "cache-control": "no-cache",
              "postman-token": "60c7202a-c074-45e3-a229-69e33b4eb24c",
              "accept-encoding": "gzip, deflate, br"
          },
          "request": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  }
              }
          },
          "requestUrl": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents",
          "consentBody": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  },
                  "consentId": "pix-b5623e38-e21c-41a6-b358-2cbc3f226fc4",
                  "status": "Authorised",
                  "creationDateTime": "2021-06-30T14:05:49.867Z",
                  "statusUpdateDateTime": "2021-06-30T14:05:49.867Z"
              },
              "links": {
                  "self": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents/pix-b5623e38-e21c-41a6-b358-2cbc3f226fc4"
              },
              "meta": {},
              "Data": {
                  "Status": "Authorised"
              }
          },
          "provider": {
              "id": "TECBAN"
          },
          "tpp": {
              "clientId": "c62eba7b-fe2d-4e3f-abb9-04e758cf67c9",
              "orgId": "0015800001041RHAAY",
              "softwareStatementId": "HQuZPIt3ipkh33Uxytox1E",
              "tppName": "Ozone Financial Technology Limited",
              "directoryRecord": {}
          },
          "accountIds": [
              "001004000000000000000002"
          ],
          "psuIdentifiers": {
              "userId": "001001000000000000000002"
          },
          "updatedAt": 1625062001991
      },
      {
          "id": "pix-8e82d714-f128-40e4-a529-0ed2a715e58a",
          "consentType": "brcb-pix-payment-consents",
          "requestHeaders": {
              "host": "rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "self_uri": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "x-cert-dn": "CN=HQuZPIt3ipkh33Uxytox1E,OU=0015800001041RHAAY,O=OpenBanking,C=GB",
              "x-cert-fingerprint": "fd4be9855160fa386727c343908a088b18a830fb",
              "connection": "close",
              "content-length": "307",
              "content-type": "application/json",
              "x-fapi-financial-id": "TECBAN",
              "x-fapi-customer-ip-address": "10.1.1.10",
              "x-fapi-interaction-id": "a03f702d-4e38-4da0-9c8f-a59ccf2ab88b",
              "authorization": "Bearer cd1eab8f-4332-4296-b658-cdf7c62d9f4b",
              "user-agent": "PostmanRuntime/7.28.0",
              "accept": "*/*",
              "cache-control": "no-cache",
              "postman-token": "21ead8a4-ac0c-4dd6-8a65-1f90fd40db15",
              "accept-encoding": "gzip, deflate, br"
          },
          "request": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  }
              }
          },
          "requestUrl": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents",
          "consentBody": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  },
                  "consentId": "pix-8e82d714-f128-40e4-a529-0ed2a715e58a",
                  "status": "Authorised",
                  "creationDateTime": "2021-06-30T14:07:21.022Z",
                  "statusUpdateDateTime": "2021-06-30T14:07:21.022Z"
              },
              "links": {
                  "self": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents/pix-8e82d714-f128-40e4-a529-0ed2a715e58a"
              },
              "meta": {},
              "Data": {
                  "Status": "Authorised"
              }
          },
          "provider": {
              "id": "TECBAN"
          },
          "tpp": {
              "clientId": "c62eba7b-fe2d-4e3f-abb9-04e758cf67c9",
              "orgId": "0015800001041RHAAY",
              "softwareStatementId": "HQuZPIt3ipkh33Uxytox1E",
              "tppName": "Ozone Financial Technology Limited",
              "directoryRecord": {}
          },
          "accountIds": [
              "001004000000000000000002"
          ],
          "psuIdentifiers": {
              "userId": "001001000000000000000002"
          },
          "updatedAt": 1625062103070
      },
      {
          "id": "pix-57c69243-143e-401f-bf30-de81bdc1c64e",
          "consentType": "brcb-pix-payment-consents",
          "requestHeaders": {
              "host": "rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "self_uri": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "x-cert-dn": "CN=HQuZPIt3ipkh33Uxytox1E,OU=0015800001041RHAAY,O=OpenBanking,C=GB",
              "x-cert-fingerprint": "fd4be9855160fa386727c343908a088b18a830fb",
              "connection": "close",
              "content-length": "307",
              "content-type": "application/json",
              "x-fapi-financial-id": "TECBAN",
              "x-fapi-customer-ip-address": "10.1.1.10",
              "x-fapi-interaction-id": "799cfa3e-0de3-4518-b62f-086764181581",
              "authorization": "Bearer 28adb9a1-238b-4916-b639-b20cd3ed1d67",
              "user-agent": "PostmanRuntime/7.28.1",
              "accept": "*/*",
              "postman-token": "ecf1a208-35c1-4a9b-8f42-3b3b107b806d",
              "accept-encoding": "gzip, deflate, br"
          },
          "request": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  }
              }
          },
          "requestUrl": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents",
          "consentBody": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  },
                  "consentId": "pix-57c69243-143e-401f-bf30-de81bdc1c64e",
                  "status": "Authorised",
                  "creationDateTime": "2021-06-30T14:11:45.327Z",
                  "statusUpdateDateTime": "2021-06-30T14:11:45.327Z"
              },
              "links": {
                  "self": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents/pix-57c69243-143e-401f-bf30-de81bdc1c64e"
              },
              "meta": {},
              "Data": {
                  "Status": "Authorised"
              }
          },
          "provider": {
              "id": "TECBAN"
          },
          "tpp": {
              "clientId": "c62eba7b-fe2d-4e3f-abb9-04e758cf67c9",
              "orgId": "0015800001041RHAAY",
              "softwareStatementId": "HQuZPIt3ipkh33Uxytox1E",
              "tppName": "Ozone Financial Technology Limited",
              "directoryRecord": {}
          },
          "accountIds": [
              "001004000000000000000002"
          ],
          "psuIdentifiers": {
              "userId": "001001000000000000000002"
          },
          "updatedAt": 1626464406201,
          "locked": true
      },
      {
          "id": "pix-7bc89339-7e22-4567-831b-3ef33ff9122c",
          "consentType": "brcb-pix-payment-consents",
          "requestHeaders": {
              "host": "rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "self_uri": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "x-cert-dn": "CN=HQuZPIt3ipkh33Uxytox1E,OU=0015800001041RHAAY,O=OpenBanking,C=GB",
              "x-cert-fingerprint": "fd4be9855160fa386727c343908a088b18a830fb",
              "connection": "close",
              "content-length": "307",
              "content-type": "application/json",
              "x-fapi-financial-id": "TECBAN",
              "x-fapi-customer-ip-address": "10.1.1.10",
              "x-fapi-interaction-id": "f42e0735-5129-4988-a784-40dfebd084ad",
              "authorization": "Bearer f7059eee-88d5-4345-a9e6-639a50fda2fc",
              "user-agent": "PostmanRuntime/7.28.1",
              "accept": "*/*",
              "postman-token": "903ceb35-8856-4e68-a720-aca7080abb0b",
              "accept-encoding": "gzip, deflate, br"
          },
          "request": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  }
              }
          },
          "requestUrl": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents",
          "consentBody": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  },
                  "consentId": "pix-7bc89339-7e22-4567-831b-3ef33ff9122c",
                  "status": "Authorised",
                  "creationDateTime": "2021-06-30T14:21:52.144Z",
                  "statusUpdateDateTime": "2021-06-30T14:21:52.144Z"
              },
              "links": {
                  "self": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents/pix-7bc89339-7e22-4567-831b-3ef33ff9122c"
              },
              "meta": {}
          },
          "provider": {
              "id": "TECBAN"
          },
          "tpp": {
              "clientId": "c62eba7b-fe2d-4e3f-abb9-04e758cf67c9",
              "orgId": "0015800001041RHAAY",
              "softwareStatementId": "HQuZPIt3ipkh33Uxytox1E",
              "tppName": "Ozone Financial Technology Limited",
              "directoryRecord": {}
          },
          "accountIds": [
              "001004000000000000000002"
          ],
          "psuIdentifiers": {
              "userId": "001001000000000000000002"
          },
          "updatedAt": 1625062938041
      },
      {
          "id": "pix-e29f0aa4-f466-4e92-83ea-f2f052fb5a6f",
          "consentType": "brcb-pix-payment-consents",
          "requestHeaders": {
              "host": "rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "self_uri": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "x-cert-dn": "CN=HQuZPIt3ipkh33Uxytox1E,OU=0015800001041RHAAY,O=OpenBanking,C=GB",
              "x-cert-fingerprint": "fd4be9855160fa386727c343908a088b18a830fb",
              "connection": "close",
              "content-length": "307",
              "content-type": "application/json",
              "x-fapi-financial-id": "TECBAN",
              "x-fapi-customer-ip-address": "10.1.1.10",
              "x-fapi-interaction-id": "0444e991-d7d1-4f9b-86e1-1fe6710edae8",
              "authorization": "Bearer 02253cf8-51f6-4fd1-ae4a-59e62ee8e9ba",
              "user-agent": "PostmanRuntime/7.28.1",
              "accept": "*/*",
              "postman-token": "b1777608-9fda-460f-ad16-92acd8f0080d",
              "accept-encoding": "gzip, deflate, br"
          },
          "request": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  }
              }
          },
          "requestUrl": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents",
          "consentBody": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  },
                  "consentId": "pix-e29f0aa4-f466-4e92-83ea-f2f052fb5a6f",
                  "status": "Authorised",
                  "creationDateTime": "2021-07-13T12:32:22.729Z",
                  "statusUpdateDateTime": "2021-07-13T12:32:22.729Z"
              },
              "links": {
                  "self": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents/pix-e29f0aa4-f466-4e92-83ea-f2f052fb5a6f"
              },
              "meta": {}
          },
          "provider": {
              "id": "TECBAN"
          },
          "tpp": {
              "clientId": "c62eba7b-fe2d-4e3f-abb9-04e758cf67c9",
              "orgId": "0015800001041RHAAY",
              "softwareStatementId": "HQuZPIt3ipkh33Uxytox1E",
              "tppName": "Ozone Financial Technology Limited",
              "directoryRecord": {}
          },
          "accountIds": [
              "001004000000000000000002"
          ],
          "psuIdentifiers": {
              "userId": "001001000000000000000002"
          },
          "updatedAt": 1626179614520
      },
      {
          "id": "pix-cdaf6129-02aa-47ff-b0e7-97d94d0e652a",
          "consentType": "brcb-pix-payment-consents",
          "requestHeaders": {
              "host": "rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "self_uri": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "x-cert-dn": "CN=HQuZPIt3ipkh33Uxytox1E,OU=0015800001041RHAAY,O=OpenBanking,C=GB",
              "x-cert-fingerprint": "fd4be9855160fa386727c343908a088b18a830fb",
              "connection": "close",
              "content-length": "307",
              "content-type": "application/json",
              "x-fapi-financial-id": "TECBAN",
              "x-fapi-customer-ip-address": "10.1.1.10",
              "x-fapi-interaction-id": "9619b10e-3cb9-46f0-985b-13835a817971",
              "authorization": "Bearer 490ccce6-d458-409e-bb6b-26199099710c",
              "user-agent": "PostmanRuntime/7.28.1",
              "accept": "*/*",
              "postman-token": "71c8d720-937a-4554-a2d7-a0f7f8637439",
              "accept-encoding": "gzip, deflate, br"
          },
          "request": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  }
              }
          },
          "requestUrl": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents",
          "consentBody": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  },
                  "consentId": "pix-cdaf6129-02aa-47ff-b0e7-97d94d0e652a",
                  "status": "Authorised",
                  "creationDateTime": "2021-07-14T16:20:20.012Z",
                  "statusUpdateDateTime": "2021-07-14T16:20:20.012Z"
              },
              "links": {
                  "self": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents/pix-cdaf6129-02aa-47ff-b0e7-97d94d0e652a"
              },
              "meta": {}
          },
          "provider": {
              "id": "TECBAN"
          },
          "tpp": {
              "clientId": "c62eba7b-fe2d-4e3f-abb9-04e758cf67c9",
              "orgId": "0015800001041RHAAY",
              "softwareStatementId": "HQuZPIt3ipkh33Uxytox1E",
              "tppName": "Ozone Financial Technology Limited",
              "directoryRecord": {}
          },
          "accountIds": [
              "001004000000000000000002"
          ],
          "psuIdentifiers": {
              "userId": "001001000000000000000002"
          },
          "updatedAt": 1626279830558,
          "locked": true
      },
      {
          "id": "pix-b614ef54-2f65-4f35-838e-365cc8cdfa65",
          "consentType": "brcb-pix-payment-consents",
          "requestHeaders": {
              "host": "rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "self_uri": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "x-cert-dn": "CN=HQuZPIt3ipkh33Uxytox1E,OU=0015800001041RHAAY,O=OpenBanking,C=GB",
              "x-cert-fingerprint": "fd4be9855160fa386727c343908a088b18a830fb",
              "connection": "close",
              "content-length": "307",
              "content-type": "application/json",
              "x-fapi-financial-id": "TECBAN",
              "x-fapi-customer-ip-address": "10.1.1.10",
              "x-fapi-interaction-id": "9f19877c-ce7b-402a-bde6-9be28f385c90",
              "authorization": "Bearer 53e74524-f139-47e2-afd6-41112ee2ef44",
              "user-agent": "PostmanRuntime/7.28.1",
              "accept": "*/*",
              "postman-token": "ebe42dad-3ec5-457b-b533-9257cfdc976b",
              "accept-encoding": "gzip, deflate, br"
          },
          "request": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  }
              }
          },
          "requestUrl": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents",
          "consentBody": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  },
                  "consentId": "pix-b614ef54-2f65-4f35-838e-365cc8cdfa65",
                  "status": "Rejected",
                  "creationDateTime": "2021-07-16T16:36:15.694Z",
                  "statusUpdateDateTime": "2021-07-16T16:36:15.694Z"
              },
              "links": {
                  "self": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents/pix-b614ef54-2f65-4f35-838e-365cc8cdfa65"
              },
              "meta": {}
          },
          "provider": {
              "id": "TECBAN"
          },
          "tpp": {
              "clientId": "c62eba7b-fe2d-4e3f-abb9-04e758cf67c9",
              "orgId": "0015800001041RHAAY",
              "softwareStatementId": "HQuZPIt3ipkh33Uxytox1E",
              "tppName": "Ozone Financial Technology Limited",
              "directoryRecord": {}
          },
          "accountIds": [
              "001004000000000000000002"
          ],
          "psuIdentifiers": {
              "userId": "001001000000000000000002"
          },
          "updatedAt": 1626453403742
      },
      {
          "id": "pix-766ebba3-efd2-4fd2-af1c-2484a91559f0",
          "consentType": "brcb-pix-payment-consents",
          "requestHeaders": {
              "host": "rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "self_uri": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "x-cert-dn": "CN=HQuZPIt3ipkh33Uxytox1E,OU=0015800001041RHAAY,O=OpenBanking,C=GB",
              "x-cert-fingerprint": "fd4be9855160fa386727c343908a088b18a830fb",
              "connection": "close",
              "content-length": "307",
              "content-type": "application/json",
              "x-fapi-financial-id": "TECBAN",
              "x-fapi-customer-ip-address": "10.1.1.10",
              "x-fapi-interaction-id": "d5ffda05-a392-41db-b894-b30bcf96da7a",
              "authorization": "Bearer 7cffb152-2635-4ad3-b9f7-fa0349ef3d7a",
              "user-agent": "PostmanRuntime/7.28.1",
              "accept": "*/*",
              "accept-encoding": "gzip, deflate, br"
          },
          "request": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  }
              }
          },
          "requestUrl": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents",
          "consentBody": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  },
                  "consentId": "pix-766ebba3-efd2-4fd2-af1c-2484a91559f0",
                  "status": "Awaiting_Authorisation",
                  "creationDateTime": "2021-07-17T23:32:26.469Z",
                  "statusUpdateDateTime": "2021-07-17T23:32:26.469Z"
              },
              "links": {
                  "self": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents/pix-766ebba3-efd2-4fd2-af1c-2484a91559f0"
              },
              "meta": {},
              "Data": {
                  "Status": "Authorised"
              }
          },
          "provider": {
              "id": "TECBAN"
          },
          "tpp": {
              "clientId": "c62eba7b-fe2d-4e3f-abb9-04e758cf67c9",
              "orgId": "0015800001041RHAAY",
              "softwareStatementId": "HQuZPIt3ipkh33Uxytox1E",
              "tppName": "Ozone Financial Technology Limited",
              "directoryRecord": {}
          },
          "accountIds": [
              "001004000000000000000002"
          ],
          "psuIdentifiers": {
              "userId": "001001000000000000000002"
          },
          "updatedAt": 1626644251112
      },
      {
          "id": "aac-3f4dd08c-8843-4baf-8533-7418c555d6d3",
          "consentType": "account-access-consents",
          "requestHeaders": {
              "host": "rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "self_uri": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "x-cert-dn": "CN=HQuZPIt3ipkh33Uxytox1E,OU=0015800001041RHAAY,O=OpenBanking,C=GB",
              "x-cert-fingerprint": "fd4be9855160fa386727c343908a088b18a830fb",
              "connection": "close",
              "content-length": "1691",
              "content-type": "application/json",
              "x-fapi-financial-id": "TECBAN",
              "x-fapi-interaction-id": "cd376295-1008-4356-be8e-b3850d47e38a",
              "authorization": "Bearer 168c3015-8928-4637-ba59-c8c47158694d",
              "user-agent": "PostmanRuntime/7.28.1",
              "accept": "*/*",
              "accept-encoding": "gzip, deflate, br"
          },
          "request": {
              "data": {
                  "brandID": "29698749425984912674",
                  "loggedUser": {
                      "document": {
                          "identification": "12345678901",
                          "rel": "CPF"
                      }
                  },
                  "permissions": [
                      "ACCOUNTS_READ",
                      "ACCOUNTS_BALANCES_READ",
                      "ACCOUNTS_TRANSACTIONS_READ",
                      "ACCOUNTS_OVERDFRAFT_LIMITS_READ",
                      "CREDIT_CARDS_ACCOUNTS_READ",
                      "CREDIT_CARDS_ACCOUNTS_BILLS_READ",
                      "CREDIT_CARDS_ACCOUNTS_BILLS_TRANSACTIONS_READ",
                      "CREDIT_CARDS_ACCOUNTS_LIMITS_READ",
                      "CREDIT_CARDS_ACCOUNTS_TRANSACTIONS_READ",
                      "CUSTOMERS_PERSONAL_IDENTIFICATIONS_READ",
                      "CUSTOMERS_PERSONAL_ADITTIONALINFO_READ",
                      "CUSTOMERS_BUSINESS_IDENTIFICATIONS_READ",
                      "CUSTOMERS_BUSINESS_ADITTIONALINFO_READ",
                      "INVOICE_FINANCINGS_READ",
                      "INVOICE_FINANCINGS_INSTALMENTS_READ",
                      "INVOICE_FINANCINGS_PAYMENTS_READ",
                      "INVOICE_FINANCINGS_WARRANTIES_READ",
                      "INVOICE_FINANCINGS_SCHEDULED_INSTALMENTS_READ",
                      "FINANCINGS_READ",
                      "FINANCINGS_INSTALMENTS_READ",
                      "FINANCINGS_PAYMENTS_READ",
                      "FINANCINGS_WARRANTIES_READ",
                      "LOANS_READ",
                      "LOANS_INSTALMENTS_READ",
                      "LOANS_PAYMENTS_READ",
                      "LOANS_WARRANTIES_READ",
                      "LOANS_SCHEDULED_INSTALMENTS_READ"
                  ],
                  "expirationDateTime": "2025-05-21T08:30:00Z",
                  "transactionFromDateTime": "2016-01-01T10:40:00Z",
                  "transactionToDateTime": "2025-12-31T10:40:00Z"
              }
          },
          "requestUrl": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/consents/v1/consents",
          "consentBody": {
              "data": {
                  "brandID": "29698749425984912674",
                  "loggedUser": {
                      "document": {
                          "identification": "12345678901",
                          "rel": "CPF"
                      }
                  },
                  "permissions": [
                      "ACCOUNTS_READ",
                      "ACCOUNTS_BALANCES_READ",
                      "ACCOUNTS_TRANSACTIONS_READ",
                      "ACCOUNTS_OVERDFRAFT_LIMITS_READ",
                      "CREDIT_CARDS_ACCOUNTS_READ",
                      "CREDIT_CARDS_ACCOUNTS_BILLS_READ",
                      "CREDIT_CARDS_ACCOUNTS_BILLS_TRANSACTIONS_READ",
                      "CREDIT_CARDS_ACCOUNTS_LIMITS_READ",
                      "CREDIT_CARDS_ACCOUNTS_TRANSACTIONS_READ",
                      "CUSTOMERS_PERSONAL_IDENTIFICATIONS_READ",
                      "CUSTOMERS_PERSONAL_ADITTIONALINFO_READ",
                      "CUSTOMERS_BUSINESS_IDENTIFICATIONS_READ",
                      "CUSTOMERS_BUSINESS_ADITTIONALINFO_READ",
                      "INVOICE_FINANCINGS_READ",
                      "INVOICE_FINANCINGS_INSTALMENTS_READ",
                      "INVOICE_FINANCINGS_PAYMENTS_READ",
                      "INVOICE_FINANCINGS_WARRANTIES_READ",
                      "INVOICE_FINANCINGS_SCHEDULED_INSTALMENTS_READ",
                      "FINANCINGS_READ",
                      "FINANCINGS_INSTALMENTS_READ",
                      "FINANCINGS_PAYMENTS_READ",
                      "FINANCINGS_WARRANTIES_READ",
                      "LOANS_READ",
                      "LOANS_INSTALMENTS_READ",
                      "LOANS_PAYMENTS_READ",
                      "LOANS_WARRANTIES_READ",
                      "LOANS_SCHEDULED_INSTALMENTS_READ"
                  ],
                  "expirationDateTime": "2025-05-21T08:30:00Z",
                  "transactionFromDateTime": "2016-01-01T10:40:00Z",
                  "transactionToDateTime": "2025-12-31T10:40:00Z",
                  "consentId": "aac-3f4dd08c-8843-4baf-8533-7418c555d6d3",
                  "status": "AwaitingAuthorisation",
                  "creationDateTime": "2021-07-17T22:42:26.260Z",
                  "statusUpdateDateTime": "2021-07-17T22:42:26.260Z"
              },
              "links": {
                  "self": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/consents/v1/consents/aac-3f4dd08c-8843-4baf-8533-7418c555d6d3"
              },
              "meta": {},
              "Data": {
                  "Status": "Authorised"
              }
          },
          "provider": {
              "id": "TECBAN"
          },
          "tpp": {
              "clientId": "c62eba7b-fe2d-4e3f-abb9-04e758cf67c9",
              "orgId": "0015800001041RHAAY",
              "softwareStatementId": "HQuZPIt3ipkh33Uxytox1E",
              "tppName": "Ozone Financial Technology Limited",
              "directoryRecord": {}
          },
          "accountIds": [
              "001004000000000000000002",
              "001004000000000000000003",
              "001004000000000000000005",
              "001004100000000000000002",
              "001004100000000000000003",
              "001004100000000000000005"
          ],
          "psuIdentifiers": {
              "userId": "001001000000000000000002"
          },
          "updatedAt": 1626563064988
      },
      {
          "id": "aac-ae1d596e-e118-4e72-87cc-14a6577d6cc5",
          "consentType": "account-access-consents",
          "requestHeaders": {
              "host": "rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "self_uri": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "x-cert-dn": "CN=HQuZPIt3ipkh33Uxytox1E,OU=0015800001041RHAAY,O=OpenBanking,C=GB",
              "x-cert-fingerprint": "fd4be9855160fa386727c343908a088b18a830fb",
              "connection": "close",
              "content-length": "1691",
              "content-type": "application/json",
              "x-fapi-financial-id": "TECBAN",
              "x-fapi-interaction-id": "ef9c1fea-2dc9-4270-ac40-3e548bc94b29",
              "authorization": "Bearer 9c041e00-9efe-4c84-9e90-4d7e1720d2c7",
              "user-agent": "PostmanRuntime/7.28.1",
              "accept": "*/*",
              "accept-encoding": "gzip, deflate, br"
          },
          "request": {
              "data": {
                  "brandID": "29698749425984912674",
                  "loggedUser": {
                      "document": {
                          "identification": "12345678901",
                          "rel": "CPF"
                      }
                  },
                  "permissions": [
                      "ACCOUNTS_READ",
                      "ACCOUNTS_BALANCES_READ",
                      "ACCOUNTS_TRANSACTIONS_READ",
                      "ACCOUNTS_OVERDFRAFT_LIMITS_READ",
                      "CREDIT_CARDS_ACCOUNTS_READ",
                      "CREDIT_CARDS_ACCOUNTS_BILLS_READ",
                      "CREDIT_CARDS_ACCOUNTS_BILLS_TRANSACTIONS_READ",
                      "CREDIT_CARDS_ACCOUNTS_LIMITS_READ",
                      "CREDIT_CARDS_ACCOUNTS_TRANSACTIONS_READ",
                      "CUSTOMERS_PERSONAL_IDENTIFICATIONS_READ",
                      "CUSTOMERS_PERSONAL_ADITTIONALINFO_READ",
                      "CUSTOMERS_BUSINESS_IDENTIFICATIONS_READ",
                      "CUSTOMERS_BUSINESS_ADITTIONALINFO_READ",
                      "INVOICE_FINANCINGS_READ",
                      "INVOICE_FINANCINGS_INSTALMENTS_READ",
                      "INVOICE_FINANCINGS_PAYMENTS_READ",
                      "INVOICE_FINANCINGS_WARRANTIES_READ",
                      "INVOICE_FINANCINGS_SCHEDULED_INSTALMENTS_READ",
                      "FINANCINGS_READ",
                      "FINANCINGS_INSTALMENTS_READ",
                      "FINANCINGS_PAYMENTS_READ",
                      "FINANCINGS_WARRANTIES_READ",
                      "LOANS_READ",
                      "LOANS_INSTALMENTS_READ",
                      "LOANS_PAYMENTS_READ",
                      "LOANS_WARRANTIES_READ",
                      "LOANS_SCHEDULED_INSTALMENTS_READ"
                  ],
                  "expirationDateTime": "2025-05-21T08:30:00Z",
                  "transactionFromDateTime": "2016-01-01T10:40:00Z",
                  "transactionToDateTime": "2025-12-31T10:40:00Z"
              }
          },
          "requestUrl": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/consents/v1/consents",
          "consentBody": {
              "data": {
                  "brandID": "29698749425984912674",
                  "loggedUser": {
                      "document": {
                          "identification": "12345678901",
                          "rel": "CPF"
                      }
                  },
                  "permissions": [
                      "ACCOUNTS_READ",
                      "ACCOUNTS_BALANCES_READ",
                      "ACCOUNTS_TRANSACTIONS_READ",
                      "ACCOUNTS_OVERDFRAFT_LIMITS_READ",
                      "CREDIT_CARDS_ACCOUNTS_READ",
                      "CREDIT_CARDS_ACCOUNTS_BILLS_READ",
                      "CREDIT_CARDS_ACCOUNTS_BILLS_TRANSACTIONS_READ",
                      "CREDIT_CARDS_ACCOUNTS_LIMITS_READ",
                      "CREDIT_CARDS_ACCOUNTS_TRANSACTIONS_READ",
                      "CUSTOMERS_PERSONAL_IDENTIFICATIONS_READ",
                      "CUSTOMERS_PERSONAL_ADITTIONALINFO_READ",
                      "CUSTOMERS_BUSINESS_IDENTIFICATIONS_READ",
                      "CUSTOMERS_BUSINESS_ADITTIONALINFO_READ",
                      "INVOICE_FINANCINGS_READ",
                      "INVOICE_FINANCINGS_INSTALMENTS_READ",
                      "INVOICE_FINANCINGS_PAYMENTS_READ",
                      "INVOICE_FINANCINGS_WARRANTIES_READ",
                      "INVOICE_FINANCINGS_SCHEDULED_INSTALMENTS_READ",
                      "FINANCINGS_READ",
                      "FINANCINGS_INSTALMENTS_READ",
                      "FINANCINGS_PAYMENTS_READ",
                      "FINANCINGS_WARRANTIES_READ",
                      "LOANS_READ",
                      "LOANS_INSTALMENTS_READ",
                      "LOANS_PAYMENTS_READ",
                      "LOANS_WARRANTIES_READ",
                      "LOANS_SCHEDULED_INSTALMENTS_READ"
                  ],
                  "expirationDateTime": "2025-05-21T08:30:00Z",
                  "transactionFromDateTime": "2016-01-01T10:40:00Z",
                  "transactionToDateTime": "2025-12-31T10:40:00Z",
                  "consentId": "aac-ae1d596e-e118-4e72-87cc-14a6577d6cc5",
                  "status": "AwaitingAuthorisation",
                  "creationDateTime": "2021-07-17T23:04:37.888Z",
                  "statusUpdateDateTime": "2021-07-17T23:04:37.888Z"
              },
              "links": {
                  "self": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/consents/v1/consents/aac-ae1d596e-e118-4e72-87cc-14a6577d6cc5"
              },
              "meta": {},
              "Data": {
                  "Status": "Authorised"
              }
          },
          "provider": {
              "id": "TECBAN"
          },
          "tpp": {
              "clientId": "c62eba7b-fe2d-4e3f-abb9-04e758cf67c9",
              "orgId": "0015800001041RHAAY",
              "softwareStatementId": "HQuZPIt3ipkh33Uxytox1E",
              "tppName": "Ozone Financial Technology Limited",
              "directoryRecord": {}
          },
          "accountIds": [
              "001004000000000000000002",
              "001004000000000000000003",
              "001004000000000000000005",
              "001004100000000000000002",
              "001004100000000000000003",
              "001004100000000000000005"
          ],
          "psuIdentifiers": {
              "userId": "001001000000000000000002"
          },
          "updatedAt": 1626563103231
      },
      {
          "id": "pix-53ec0d11-c034-4bcb-ac30-9e7b1e150cb4",
          "consentType": "brcb-pix-payment-consents",
          "requestHeaders": {
              "host": "rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "self_uri": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "x-cert-dn": "CN=HQuZPIt3ipkh33Uxytox1E,OU=0015800001041RHAAY,O=OpenBanking,C=GB",
              "x-cert-fingerprint": "fd4be9855160fa386727c343908a088b18a830fb",
              "connection": "close",
              "content-length": "481",
              "content-type": "application/json",
              "x-fapi-financial-id": "TECBAN",
              "x-fapi-customer-ip-address": "10.1.1.10",
              "x-fapi-interaction-id": "266f0d7c-f8cf-4a94-b9e6-af37ae919648",
              "authorization": "Bearer e1450769-6466-4727-a873-98ddb6ae0edb",
              "user-agent": "PostmanRuntime/7.28.1",
              "accept": "*/*",
              "postman-token": "b4910d23-37a2-4e2b-a999-9a8bc2a6d285",
              "accept-encoding": "gzip, deflate, br"
          },
          "request": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  },
                  "debtorAccount": {
                      "ispb": "12345678",
                      "branchCode": "1774",
                      "number": "1234567890",
                      "checkDigit": "4",
                      "accountType": "CACC"
                  }
              }
          },
          "requestUrl": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents",
          "consentBody": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  },
                  "debtorAccount": {
                      "ispb": "12345678",
                      "branchCode": "1774",
                      "number": "1234567890",
                      "checkDigit": "4",
                      "accountType": "CACC"
                  },
                  "consentId": "pix-53ec0d11-c034-4bcb-ac30-9e7b1e150cb4",
                  "status": "Authorised",
                  "creationDateTime": "2021-07-19T18:06:12.254Z",
                  "statusUpdateDateTime": "2021-07-19T18:06:12.254Z"
              },
              "links": {
                  "self": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents/pix-53ec0d11-c034-4bcb-ac30-9e7b1e150cb4"
              },
              "meta": {}
          },
          "provider": {
              "id": "TECBAN"
          },
          "tpp": {
              "clientId": "c62eba7b-fe2d-4e3f-abb9-04e758cf67c9",
              "orgId": "0015800001041RHAAY",
              "softwareStatementId": "HQuZPIt3ipkh33Uxytox1E",
              "tppName": "Ozone Financial Technology Limited",
              "directoryRecord": {}
          },
          "accountIds": [
              "001004000000000000000002"
          ],
          "psuIdentifiers": {
              "userId": "001001000000000000000002"
          },
          "updatedAt": 1626718012322
      },
      {
          "id": "aac-2babd6a1-05f1-4d61-b71d-60471cf529df",
          "consentType": "account-access-consents",
          "requestHeaders": {
              "host": "rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "self_uri": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "x-cert-dn": "CN=HQuZPIt3ipkh33Uxytox1E,OU=0015800001041RHAAY,O=OpenBanking,C=GB",
              "x-cert-fingerprint": "fd4be9855160fa386727c343908a088b18a830fb",
              "connection": "close",
              "content-length": "1691",
              "content-type": "application/json",
              "x-fapi-financial-id": "TECBAN",
              "x-fapi-interaction-id": "10cd665e-2725-4bf5-a043-751761990606",
              "authorization": "Bearer f5e44ca5-b9f5-40e2-b3fb-0a2a3f2b6ce9",
              "user-agent": "PostmanRuntime/7.28.1",
              "accept": "*/*",
              "accept-encoding": "gzip, deflate, br"
          },
          "request": {
              "data": {
                  "brandID": "29698749425984912674",
                  "loggedUser": {
                      "document": {
                          "identification": "12345678901",
                          "rel": "CPF"
                      }
                  },
                  "permissions": [
                      "ACCOUNTS_READ",
                      "ACCOUNTS_BALANCES_READ",
                      "ACCOUNTS_TRANSACTIONS_READ",
                      "ACCOUNTS_OVERDFRAFT_LIMITS_READ",
                      "CREDIT_CARDS_ACCOUNTS_READ",
                      "CREDIT_CARDS_ACCOUNTS_BILLS_READ",
                      "CREDIT_CARDS_ACCOUNTS_BILLS_TRANSACTIONS_READ",
                      "CREDIT_CARDS_ACCOUNTS_LIMITS_READ",
                      "CREDIT_CARDS_ACCOUNTS_TRANSACTIONS_READ",
                      "CUSTOMERS_PERSONAL_IDENTIFICATIONS_READ",
                      "CUSTOMERS_PERSONAL_ADITTIONALINFO_READ",
                      "CUSTOMERS_BUSINESS_IDENTIFICATIONS_READ",
                      "CUSTOMERS_BUSINESS_ADITTIONALINFO_READ",
                      "INVOICE_FINANCINGS_READ",
                      "INVOICE_FINANCINGS_INSTALMENTS_READ",
                      "INVOICE_FINANCINGS_PAYMENTS_READ",
                      "INVOICE_FINANCINGS_WARRANTIES_READ",
                      "INVOICE_FINANCINGS_SCHEDULED_INSTALMENTS_READ",
                      "FINANCINGS_READ",
                      "FINANCINGS_INSTALMENTS_READ",
                      "FINANCINGS_PAYMENTS_READ",
                      "FINANCINGS_WARRANTIES_READ",
                      "LOANS_READ",
                      "LOANS_INSTALMENTS_READ",
                      "LOANS_PAYMENTS_READ",
                      "LOANS_WARRANTIES_READ",
                      "LOANS_SCHEDULED_INSTALMENTS_READ"
                  ],
                  "expirationDateTime": "2025-05-21T08:30:00Z",
                  "transactionFromDateTime": "2016-01-01T10:40:00Z",
                  "transactionToDateTime": "2025-12-31T10:40:00Z"
              }
          },
          "requestUrl": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/consents/v1/consents",
          "consentBody": {
              "data": {
                  "brandID": "29698749425984912674",
                  "loggedUser": {
                      "document": {
                          "identification": "12345678901",
                          "rel": "CPF"
                      }
                  },
                  "permissions": [
                      "ACCOUNTS_READ",
                      "ACCOUNTS_BALANCES_READ",
                      "ACCOUNTS_TRANSACTIONS_READ",
                      "ACCOUNTS_OVERDFRAFT_LIMITS_READ",
                      "CREDIT_CARDS_ACCOUNTS_READ",
                      "CREDIT_CARDS_ACCOUNTS_BILLS_READ",
                      "CREDIT_CARDS_ACCOUNTS_BILLS_TRANSACTIONS_READ",
                      "CREDIT_CARDS_ACCOUNTS_LIMITS_READ",
                      "CREDIT_CARDS_ACCOUNTS_TRANSACTIONS_READ",
                      "CUSTOMERS_PERSONAL_IDENTIFICATIONS_READ",
                      "CUSTOMERS_PERSONAL_ADITTIONALINFO_READ",
                      "CUSTOMERS_BUSINESS_IDENTIFICATIONS_READ",
                      "CUSTOMERS_BUSINESS_ADITTIONALINFO_READ",
                      "INVOICE_FINANCINGS_READ",
                      "INVOICE_FINANCINGS_INSTALMENTS_READ",
                      "INVOICE_FINANCINGS_PAYMENTS_READ",
                      "INVOICE_FINANCINGS_WARRANTIES_READ",
                      "INVOICE_FINANCINGS_SCHEDULED_INSTALMENTS_READ",
                      "FINANCINGS_READ",
                      "FINANCINGS_INSTALMENTS_READ",
                      "FINANCINGS_PAYMENTS_READ",
                      "FINANCINGS_WARRANTIES_READ",
                      "LOANS_READ",
                      "LOANS_INSTALMENTS_READ",
                      "LOANS_PAYMENTS_READ",
                      "LOANS_WARRANTIES_READ",
                      "LOANS_SCHEDULED_INSTALMENTS_READ"
                  ],
                  "expirationDateTime": "2025-05-21T08:30:00Z",
                  "transactionFromDateTime": "2016-01-01T10:40:00Z",
                  "transactionToDateTime": "2025-12-31T10:40:00Z",
                  "consentId": "aac-2babd6a1-05f1-4d61-b71d-60471cf529df",
                  "status": "AwaitingAuthorisation",
                  "creationDateTime": "2021-07-20T18:14:34.877Z",
                  "statusUpdateDateTime": "2021-07-20T18:14:34.877Z"
              },
              "links": {
                  "self": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/consents/v1/consents/aac-2babd6a1-05f1-4d61-b71d-60471cf529df"
              },
              "meta": {},
              "Data": {
                  "Status": "Authorised"
              }
          },
          "provider": {
              "id": "TECBAN"
          },
          "tpp": {
              "clientId": "c62eba7b-fe2d-4e3f-abb9-04e758cf67c9",
              "orgId": "0015800001041RHAAY",
              "softwareStatementId": "HQuZPIt3ipkh33Uxytox1E",
              "tppName": "Ozone Financial Technology Limited",
              "directoryRecord": {}
          },
          "accountIds": [
              "001004000000000000000002",
              "001004000000000000000003",
              "001004000000000000000005",
              "001004100000000000000002",
              "001004100000000000000003",
              "001004100000000000000005"
          ],
          "psuIdentifiers": {
              "userId": "001001000000000000000002"
          },
          "updatedAt": 1626896522284
      },
      {
          "id": "aac-dc4a0d25-05c5-4c46-aa0d-4a36ba7e1abc",
          "consentType": "account-access-consents",
          "requestHeaders": {
              "host": "rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "self_uri": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "x-cert-dn": "CN=HQuZPIt3ipkh33Uxytox1E,OU=0015800001041RHAAY,O=OpenBanking,C=GB",
              "x-cert-fingerprint": "fd4be9855160fa386727c343908a088b18a830fb",
              "connection": "close",
              "content-length": "1691",
              "content-type": "application/json",
              "x-fapi-financial-id": "TECBAN",
              "x-fapi-interaction-id": "26f81e68-db0b-4bc9-b059-326bd7960f22",
              "authorization": "Bearer c15db85e-21bf-43a6-8fc7-5880c7c50761",
              "user-agent": "PostmanRuntime/7.28.1",
              "accept": "*/*",
              "accept-encoding": "gzip, deflate, br"
          },
          "request": {
              "data": {
                  "brandID": "29698749425984912674",
                  "loggedUser": {
                      "document": {
                          "identification": "12345678901",
                          "rel": "CPF"
                      }
                  },
                  "permissions": [
                      "ACCOUNTS_READ",
                      "ACCOUNTS_BALANCES_READ",
                      "ACCOUNTS_TRANSACTIONS_READ",
                      "ACCOUNTS_OVERDFRAFT_LIMITS_READ",
                      "CREDIT_CARDS_ACCOUNTS_READ",
                      "CREDIT_CARDS_ACCOUNTS_BILLS_READ",
                      "CREDIT_CARDS_ACCOUNTS_BILLS_TRANSACTIONS_READ",
                      "CREDIT_CARDS_ACCOUNTS_LIMITS_READ",
                      "CREDIT_CARDS_ACCOUNTS_TRANSACTIONS_READ",
                      "CUSTOMERS_PERSONAL_IDENTIFICATIONS_READ",
                      "CUSTOMERS_PERSONAL_ADITTIONALINFO_READ",
                      "CUSTOMERS_BUSINESS_IDENTIFICATIONS_READ",
                      "CUSTOMERS_BUSINESS_ADITTIONALINFO_READ",
                      "INVOICE_FINANCINGS_READ",
                      "INVOICE_FINANCINGS_INSTALMENTS_READ",
                      "INVOICE_FINANCINGS_PAYMENTS_READ",
                      "INVOICE_FINANCINGS_WARRANTIES_READ",
                      "INVOICE_FINANCINGS_SCHEDULED_INSTALMENTS_READ",
                      "FINANCINGS_READ",
                      "FINANCINGS_INSTALMENTS_READ",
                      "FINANCINGS_PAYMENTS_READ",
                      "FINANCINGS_WARRANTIES_READ",
                      "LOANS_READ",
                      "LOANS_INSTALMENTS_READ",
                      "LOANS_PAYMENTS_READ",
                      "LOANS_WARRANTIES_READ",
                      "LOANS_SCHEDULED_INSTALMENTS_READ"
                  ],
                  "expirationDateTime": "2025-05-21T08:30:00Z",
                  "transactionFromDateTime": "2016-01-01T10:40:00Z",
                  "transactionToDateTime": "2025-12-31T10:40:00Z"
              }
          },
          "requestUrl": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/consents/v1/consents",
          "consentBody": {
              "data": {
                  "brandID": "29698749425984912674",
                  "loggedUser": {
                      "document": {
                          "identification": "12345678901",
                          "rel": "CPF"
                      }
                  },
                  "permissions": [
                      "ACCOUNTS_READ",
                      "ACCOUNTS_BALANCES_READ",
                      "ACCOUNTS_TRANSACTIONS_READ",
                      "ACCOUNTS_OVERDFRAFT_LIMITS_READ",
                      "CREDIT_CARDS_ACCOUNTS_READ",
                      "CREDIT_CARDS_ACCOUNTS_BILLS_READ",
                      "CREDIT_CARDS_ACCOUNTS_BILLS_TRANSACTIONS_READ",
                      "CREDIT_CARDS_ACCOUNTS_LIMITS_READ",
                      "CREDIT_CARDS_ACCOUNTS_TRANSACTIONS_READ",
                      "CUSTOMERS_PERSONAL_IDENTIFICATIONS_READ",
                      "CUSTOMERS_PERSONAL_ADITTIONALINFO_READ",
                      "CUSTOMERS_BUSINESS_IDENTIFICATIONS_READ",
                      "CUSTOMERS_BUSINESS_ADITTIONALINFO_READ",
                      "INVOICE_FINANCINGS_READ",
                      "INVOICE_FINANCINGS_INSTALMENTS_READ",
                      "INVOICE_FINANCINGS_PAYMENTS_READ",
                      "INVOICE_FINANCINGS_WARRANTIES_READ",
                      "INVOICE_FINANCINGS_SCHEDULED_INSTALMENTS_READ",
                      "FINANCINGS_READ",
                      "FINANCINGS_INSTALMENTS_READ",
                      "FINANCINGS_PAYMENTS_READ",
                      "FINANCINGS_WARRANTIES_READ",
                      "LOANS_READ",
                      "LOANS_INSTALMENTS_READ",
                      "LOANS_PAYMENTS_READ",
                      "LOANS_WARRANTIES_READ",
                      "LOANS_SCHEDULED_INSTALMENTS_READ"
                  ],
                  "expirationDateTime": "2025-05-21T08:30:00Z",
                  "transactionFromDateTime": "2016-01-01T10:40:00Z",
                  "transactionToDateTime": "2025-12-31T10:40:00Z",
                  "consentId": "aac-dc4a0d25-05c5-4c46-aa0d-4a36ba7e1abc",
                  "status": "AwaitingAuthorisation",
                  "creationDateTime": "2021-07-21T19:43:22.011Z",
                  "statusUpdateDateTime": "2021-07-21T19:43:22.011Z"
              },
              "links": {
                  "self": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/consents/v1/consents/aac-dc4a0d25-05c5-4c46-aa0d-4a36ba7e1abc"
              },
              "meta": {},
              "Data": {
                  "Status": "Authorised"
              }
          },
          "provider": {
              "id": "TECBAN"
          },
          "tpp": {
              "clientId": "c62eba7b-fe2d-4e3f-abb9-04e758cf67c9",
              "orgId": "0015800001041RHAAY",
              "softwareStatementId": "HQuZPIt3ipkh33Uxytox1E",
              "tppName": "Ozone Financial Technology Limited",
              "directoryRecord": {}
          },
          "accountIds": [
              "001004000000000000000002",
              "001004000000000000000003",
              "001004000000000000000005",
              "001004100000000000000002",
              "001004100000000000000003",
              "001004100000000000000005"
          ],
          "psuIdentifiers": {
              "userId": "001001000000000000000002"
          },
          "updatedAt": 1626896715888
      },
      {
          "id": "aac-07a7eada-6d47-452b-a291-adb56cb510d5",
          "consentType": "account-access-consents",
          "requestHeaders": {
              "host": "rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "self_uri": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "x-cert-dn": "CN=HQuZPIt3ipkh33Uxytox1E,OU=0015800001041RHAAY,O=OpenBanking,C=GB",
              "x-cert-fingerprint": "fd4be9855160fa386727c343908a088b18a830fb",
              "connection": "close",
              "content-length": "1691",
              "content-type": "application/json",
              "x-fapi-financial-id": "TECBAN",
              "x-fapi-interaction-id": "c444fd47-ee28-426c-9442-7ce76f47e706",
              "authorization": "Bearer 84df49d8-5dfe-4282-8920-a0529c4267b0",
              "user-agent": "PostmanRuntime/7.28.1",
              "accept": "*/*",
              "accept-encoding": "gzip, deflate, br"
          },
          "request": {
              "data": {
                  "brandID": "29698749425984912674",
                  "loggedUser": {
                      "document": {
                          "identification": "12345678901",
                          "rel": "CPF"
                      }
                  },
                  "permissions": [
                      "ACCOUNTS_READ",
                      "ACCOUNTS_BALANCES_READ",
                      "ACCOUNTS_TRANSACTIONS_READ",
                      "ACCOUNTS_OVERDFRAFT_LIMITS_READ",
                      "CREDIT_CARDS_ACCOUNTS_READ",
                      "CREDIT_CARDS_ACCOUNTS_BILLS_READ",
                      "CREDIT_CARDS_ACCOUNTS_BILLS_TRANSACTIONS_READ",
                      "CREDIT_CARDS_ACCOUNTS_LIMITS_READ",
                      "CREDIT_CARDS_ACCOUNTS_TRANSACTIONS_READ",
                      "CUSTOMERS_PERSONAL_IDENTIFICATIONS_READ",
                      "CUSTOMERS_PERSONAL_ADITTIONALINFO_READ",
                      "CUSTOMERS_BUSINESS_IDENTIFICATIONS_READ",
                      "CUSTOMERS_BUSINESS_ADITTIONALINFO_READ",
                      "INVOICE_FINANCINGS_READ",
                      "INVOICE_FINANCINGS_INSTALMENTS_READ",
                      "INVOICE_FINANCINGS_PAYMENTS_READ",
                      "INVOICE_FINANCINGS_WARRANTIES_READ",
                      "INVOICE_FINANCINGS_SCHEDULED_INSTALMENTS_READ",
                      "FINANCINGS_READ",
                      "FINANCINGS_INSTALMENTS_READ",
                      "FINANCINGS_PAYMENTS_READ",
                      "FINANCINGS_WARRANTIES_READ",
                      "LOANS_READ",
                      "LOANS_INSTALMENTS_READ",
                      "LOANS_PAYMENTS_READ",
                      "LOANS_WARRANTIES_READ",
                      "LOANS_SCHEDULED_INSTALMENTS_READ"
                  ],
                  "expirationDateTime": "2025-05-21T08:30:00Z",
                  "transactionFromDateTime": "2016-01-01T10:40:00Z",
                  "transactionToDateTime": "2025-12-31T10:40:00Z"
              }
          },
          "requestUrl": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/consents/v1/consents",
          "consentBody": {
              "data": {
                  "brandID": "29698749425984912674",
                  "loggedUser": {
                      "document": {
                          "identification": "12345678901",
                          "rel": "CPF"
                      }
                  },
                  "permissions": [
                      "ACCOUNTS_READ",
                      "ACCOUNTS_BALANCES_READ",
                      "ACCOUNTS_TRANSACTIONS_READ",
                      "ACCOUNTS_OVERDFRAFT_LIMITS_READ",
                      "CREDIT_CARDS_ACCOUNTS_READ",
                      "CREDIT_CARDS_ACCOUNTS_BILLS_READ",
                      "CREDIT_CARDS_ACCOUNTS_BILLS_TRANSACTIONS_READ",
                      "CREDIT_CARDS_ACCOUNTS_LIMITS_READ",
                      "CREDIT_CARDS_ACCOUNTS_TRANSACTIONS_READ",
                      "CUSTOMERS_PERSONAL_IDENTIFICATIONS_READ",
                      "CUSTOMERS_PERSONAL_ADITTIONALINFO_READ",
                      "CUSTOMERS_BUSINESS_IDENTIFICATIONS_READ",
                      "CUSTOMERS_BUSINESS_ADITTIONALINFO_READ",
                      "INVOICE_FINANCINGS_READ",
                      "INVOICE_FINANCINGS_INSTALMENTS_READ",
                      "INVOICE_FINANCINGS_PAYMENTS_READ",
                      "INVOICE_FINANCINGS_WARRANTIES_READ",
                      "INVOICE_FINANCINGS_SCHEDULED_INSTALMENTS_READ",
                      "FINANCINGS_READ",
                      "FINANCINGS_INSTALMENTS_READ",
                      "FINANCINGS_PAYMENTS_READ",
                      "FINANCINGS_WARRANTIES_READ",
                      "LOANS_READ",
                      "LOANS_INSTALMENTS_READ",
                      "LOANS_PAYMENTS_READ",
                      "LOANS_WARRANTIES_READ",
                      "LOANS_SCHEDULED_INSTALMENTS_READ"
                  ],
                  "expirationDateTime": "2025-05-21T08:30:00Z",
                  "transactionFromDateTime": "2016-01-01T10:40:00Z",
                  "transactionToDateTime": "2025-12-31T10:40:00Z",
                  "consentId": "aac-07a7eada-6d47-452b-a291-adb56cb510d5",
                  "status": "AwaitingAuthorisation",
                  "creationDateTime": "2021-07-22T14:03:36.258Z",
                  "statusUpdateDateTime": "2021-07-22T14:03:36.258Z"
              },
              "links": {
                  "self": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/consents/v1/consents/aac-07a7eada-6d47-452b-a291-adb56cb510d5"
              },
              "meta": {},
              "Data": {
                  "Status": "Authorised"
              }
          },
          "provider": {
              "id": "TECBAN"
          },
          "tpp": {
              "clientId": "c62eba7b-fe2d-4e3f-abb9-04e758cf67c9",
              "orgId": "0015800001041RHAAY",
              "softwareStatementId": "HQuZPIt3ipkh33Uxytox1E",
              "tppName": "Ozone Financial Technology Limited",
              "directoryRecord": {}
          },
          "accountIds": [
              "001004000000000000000002",
              "001004000000000000000003",
              "001004000000000000000005",
              "001004100000000000000002",
              "001004100000000000000003",
              "001004100000000000000005"
          ],
          "psuIdentifiers": {
              "userId": "001001000000000000000002"
          },
          "updatedAt": 1626962891631
      },
      {
          "id": "pix-fc58dccb-0355-4fd4-b2fc-6a36bd066511",
          "consentType": "brcb-pix-payment-consents",
          "requestHeaders": {
              "host": "rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "self_uri": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "x-cert-dn": "CN=HQuZPIt3ipkh33Uxytox1E,OU=0015800001041RHAAY,O=OpenBanking,C=GB",
              "x-cert-fingerprint": "fd4be9855160fa386727c343908a088b18a830fb",
              "connection": "close",
              "content-length": "307",
              "content-type": "application/json",
              "x-fapi-financial-id": "TECBAN",
              "x-fapi-customer-ip-address": "10.1.1.10",
              "x-fapi-interaction-id": "833858d8-965e-4bbb-bc7b-794ecb0ba282",
              "authorization": "Bearer 5510b7f7-5bd7-4e9a-b2ee-28253f10b700",
              "user-agent": "PostmanRuntime/7.28.2",
              "accept": "*/*",
              "cache-control": "no-cache",
              "postman-token": "d4c5b25d-a6dc-4bdc-9381-29d230e379e0",
              "accept-encoding": "gzip, deflate, br"
          },
          "request": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  }
              }
          },
          "requestUrl": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents",
          "consentBody": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  },
                  "consentId": "pix-fc58dccb-0355-4fd4-b2fc-6a36bd066511",
                  "status": "Awaiting_Authorisation",
                  "creationDateTime": "2021-07-22T14:56:01.318Z",
                  "statusUpdateDateTime": "2021-07-22T14:56:01.318Z"
              },
              "links": {
                  "self": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents/pix-fc58dccb-0355-4fd4-b2fc-6a36bd066511"
              },
              "meta": {},
              "Data": {
                  "Status": "Authorised"
              }
          },
          "provider": {
              "id": "TECBAN"
          },
          "tpp": {
              "clientId": "c62eba7b-fe2d-4e3f-abb9-04e758cf67c9",
              "orgId": "0015800001041RHAAY",
              "softwareStatementId": "HQuZPIt3ipkh33Uxytox1E",
              "tppName": "Ozone Financial Technology Limited",
              "directoryRecord": {}
          },
          "accountIds": [
              "001004000000000000000002"
          ],
          "psuIdentifiers": {
              "userId": "001001000000000000000002"
          },
          "updatedAt": 1626966827319
      },
      {
          "id": "pix-61ca087b-99a3-456e-bf7d-957e55199b0f",
          "consentType": "brcb-pix-payment-consents",
          "requestHeaders": {
              "host": "rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "self_uri": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "x-cert-dn": "CN=HQuZPIt3ipkh33Uxytox1E,OU=0015800001041RHAAY,O=OpenBanking,C=GB",
              "x-cert-fingerprint": "fd4be9855160fa386727c343908a088b18a830fb",
              "connection": "close",
              "content-length": "307",
              "content-type": "application/json",
              "x-fapi-financial-id": "TECBAN",
              "x-fapi-customer-ip-address": "10.1.1.10",
              "x-fapi-interaction-id": "f56c1094-ca6c-491f-b1ec-62d022291fd9",
              "authorization": "Bearer f1001dd1-a164-4c7f-90b3-4882c4b26902",
              "user-agent": "PostmanRuntime/7.28.2",
              "accept": "*/*",
              "cache-control": "no-cache",
              "postman-token": "112dd616-a361-45f2-a529-4673b68e0938",
              "accept-encoding": "gzip, deflate, br"
          },
          "request": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  }
              }
          },
          "requestUrl": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents",
          "consentBody": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  },
                  "consentId": "pix-61ca087b-99a3-456e-bf7d-957e55199b0f",
                  "status": "Awaiting_Authorisation",
                  "creationDateTime": "2021-07-22T14:23:07.173Z",
                  "statusUpdateDateTime": "2021-07-22T14:23:07.173Z"
              },
              "links": {
                  "self": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents/pix-61ca087b-99a3-456e-bf7d-957e55199b0f"
              },
              "meta": {},
              "Data": {
                  "Status": "Authorised"
              }
          },
          "provider": {
              "id": "TECBAN"
          },
          "tpp": {
              "clientId": "c62eba7b-fe2d-4e3f-abb9-04e758cf67c9",
              "orgId": "0015800001041RHAAY",
              "softwareStatementId": "HQuZPIt3ipkh33Uxytox1E",
              "tppName": "Ozone Financial Technology Limited",
              "directoryRecord": {}
          },
          "accountIds": [
              "001004000000000000000002"
          ],
          "psuIdentifiers": {
              "userId": "001001000000000000000002"
          },
          "updatedAt": 1626966492576
      },
      {
          "id": "pix-0a07e624-6553-4e25-8d68-f66554b9711a",
          "consentType": "brcb-pix-payment-consents",
          "requestHeaders": {
              "host": "rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "self_uri": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "x-cert-dn": "CN=HQuZPIt3ipkh33Uxytox1E,OU=0015800001041RHAAY,O=OpenBanking,C=GB",
              "x-cert-fingerprint": "fd4be9855160fa386727c343908a088b18a830fb",
              "connection": "close",
              "content-length": "307",
              "content-type": "application/json",
              "x-fapi-financial-id": "TECBAN",
              "x-fapi-customer-ip-address": "10.1.1.10",
              "x-fapi-interaction-id": "4e57f710-f24a-48b0-8ec3-7f4ba3bb2549",
              "authorization": "Bearer 5b15a1c4-aee2-43fc-a142-1619090de174",
              "user-agent": "PostmanRuntime/7.28.1",
              "accept": "*/*",
              "accept-encoding": "gzip, deflate, br"
          },
          "request": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  }
              }
          },
          "requestUrl": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents",
          "consentBody": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  },
                  "consentId": "pix-0a07e624-6553-4e25-8d68-f66554b9711a",
                  "status": "Awaiting_Authorisation",
                  "creationDateTime": "2021-07-22T14:21:33.746Z",
                  "statusUpdateDateTime": "2021-07-22T14:21:33.746Z"
              },
              "links": {
                  "self": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents/pix-0a07e624-6553-4e25-8d68-f66554b9711a"
              },
              "meta": {},
              "Data": {
                  "Status": "Authorised"
              }
          },
          "provider": {
              "id": "TECBAN"
          },
          "tpp": {
              "clientId": "c62eba7b-fe2d-4e3f-abb9-04e758cf67c9",
              "orgId": "0015800001041RHAAY",
              "softwareStatementId": "HQuZPIt3ipkh33Uxytox1E",
              "tppName": "Ozone Financial Technology Limited",
              "directoryRecord": {}
          },
          "accountIds": [
              "001004000000000000000002"
          ],
          "psuIdentifiers": {
              "userId": "001001000000000000000002"
          },
          "updatedAt": 1626966808045
      },
      {
          "id": "pix-224f0b05-9164-42eb-b43d-da38180fe91d",
          "consentType": "brcb-pix-payment-consents",
          "requestHeaders": {
              "host": "rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "self_uri": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "x-cert-dn": "CN=HQuZPIt3ipkh33Uxytox1E,OU=0015800001041RHAAY,O=OpenBanking,C=GB",
              "x-cert-fingerprint": "fd4be9855160fa386727c343908a088b18a830fb",
              "connection": "close",
              "content-length": "481",
              "content-type": "application/json",
              "x-fapi-financial-id": "TECBAN",
              "x-fapi-customer-ip-address": "10.1.1.10",
              "x-fapi-interaction-id": "cdf2e67f-6e84-4b80-8e3e-5ab8f3d1fb7d",
              "authorization": "Bearer 06fae2c8-65de-4d65-bf34-d7ff35264af8",
              "user-agent": "PostmanRuntime/7.28.2",
              "accept": "*/*",
              "cache-control": "no-cache",
              "postman-token": "9e4bcd8b-5ee2-4a8d-9515-50b138ff30da",
              "accept-encoding": "gzip, deflate, br"
          },
          "request": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  },
                  "debtorAccount": {
                      "ispb": "12345678",
                      "branchCode": "1774",
                      "number": "1234567890",
                      "checkDigit": "4",
                      "accountType": "CACC"
                  }
              }
          },
          "requestUrl": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents",
          "consentBody": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  },
                  "debtorAccount": {
                      "ispb": "12345678",
                      "branchCode": "1774",
                      "number": "1234567890",
                      "checkDigit": "4",
                      "accountType": "CACC"
                  },
                  "consentId": "pix-224f0b05-9164-42eb-b43d-da38180fe91d",
                  "status": "Awaiting_Authorisation",
                  "creationDateTime": "2021-07-22T15:14:14.432Z",
                  "statusUpdateDateTime": "2021-07-22T15:14:14.432Z"
              },
              "links": {
                  "self": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents/pix-224f0b05-9164-42eb-b43d-da38180fe91d"
              },
              "meta": {},
              "Data": {
                  "Status": "Authorised"
              }
          },
          "provider": {
              "id": "TECBAN"
          },
          "tpp": {
              "clientId": "c62eba7b-fe2d-4e3f-abb9-04e758cf67c9",
              "orgId": "0015800001041RHAAY",
              "softwareStatementId": "HQuZPIt3ipkh33Uxytox1E",
              "tppName": "Ozone Financial Technology Limited",
              "directoryRecord": {}
          },
          "accountIds": [
              "001004000000000000000002"
          ],
          "psuIdentifiers": {
              "userId": "001001000000000000000002"
          },
          "updatedAt": 1626966871748
      },
      {
          "id": "pix-fba61a80-2b70-4126-add7-641c9d8e749a",
          "consentType": "brcb-pix-payment-consents",
          "requestHeaders": {
              "host": "rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "self_uri": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "x-cert-dn": "CN=HQuZPIt3ipkh33Uxytox1E,OU=0015800001041RHAAY,O=OpenBanking,C=GB",
              "x-cert-fingerprint": "fd4be9855160fa386727c343908a088b18a830fb",
              "connection": "close",
              "content-length": "481",
              "content-type": "application/json",
              "x-fapi-financial-id": "TECBAN",
              "x-fapi-customer-ip-address": "10.1.1.10",
              "x-fapi-interaction-id": "3a1a206e-b826-4501-8b36-bccb88dee03f",
              "authorization": "Bearer b347e4e4-9721-4454-9352-cf7cbcec6058",
              "user-agent": "PostmanRuntime/7.28.1",
              "accept": "*/*",
              "accept-encoding": "gzip, deflate, br"
          },
          "request": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  },
                  "debtorAccount": {
                      "ispb": "12345678",
                      "branchCode": "1774",
                      "number": "1234567890",
                      "checkDigit": "4",
                      "accountType": "CACC"
                  }
              }
          },
          "requestUrl": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents",
          "consentBody": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  },
                  "debtorAccount": {
                      "ispb": "12345678",
                      "branchCode": "1774",
                      "number": "1234567890",
                      "checkDigit": "4",
                      "accountType": "CACC"
                  },
                  "consentId": "pix-fba61a80-2b70-4126-add7-641c9d8e749a",
                  "status": "Awaiting_Authorisation",
                  "creationDateTime": "2021-07-22T15:17:22.721Z",
                  "statusUpdateDateTime": "2021-07-22T15:17:22.721Z"
              },
              "links": {
                  "self": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents/pix-fba61a80-2b70-4126-add7-641c9d8e749a"
              },
              "meta": {},
              "Data": {
                  "Status": "Authorised"
              }
          },
          "provider": {
              "id": "TECBAN"
          },
          "tpp": {
              "clientId": "c62eba7b-fe2d-4e3f-abb9-04e758cf67c9",
              "orgId": "0015800001041RHAAY",
              "softwareStatementId": "HQuZPIt3ipkh33Uxytox1E",
              "tppName": "Ozone Financial Technology Limited",
              "directoryRecord": {}
          },
          "accountIds": [
              "001004000000000000000002"
          ],
          "psuIdentifiers": {
              "userId": "001001000000000000000002"
          },
          "updatedAt": 1626967064833
      },
      {
          "id": "pix-2c392587-3442-4ca6-83e8-a4d2cf8ff935",
          "consentType": "brcb-pix-payment-consents",
          "requestHeaders": {
              "host": "rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "self_uri": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
              "x-cert-dn": "CN=HQuZPIt3ipkh33Uxytox1E,OU=0015800001041RHAAY,O=OpenBanking,C=GB",
              "x-cert-fingerprint": "fd4be9855160fa386727c343908a088b18a830fb",
              "connection": "close",
              "content-length": "481",
              "content-type": "application/json",
              "x-fapi-financial-id": "TECBAN",
              "x-fapi-customer-ip-address": "10.1.1.10",
              "x-fapi-interaction-id": "76a755b7-6c8b-431a-bed1-ee8cd4d055fa",
              "authorization": "Bearer c1e5becd-95bb-4b1d-b8c7-ec679591221e",
              "user-agent": "PostmanRuntime/7.28.2",
              "accept": "*/*",
              "cache-control": "no-cache",
              "postman-token": "794607cc-d393-42d4-9701-24332cd3ee3d",
              "accept-encoding": "gzip, deflate, br"
          },
          "request": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  },
                  "debtorAccount": {
                      "ispb": "12345678",
                      "branchCode": "1774",
                      "number": "1234567890",
                      "checkDigit": "4",
                      "accountType": "CACC"
                  }
              }
          },
          "requestUrl": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents",
          "consentBody": {
              "data": {
                  "creditor": {
                      "personType": "PESSOA_NATURAL",
                      "cpfCnpj": "58764789000137",
                      "name": "Marco Antonio de Brito"
                  },
                  "payment": {
                      "type": "PIX",
                      "dateTime": "2021-01-01T00:00:00Z",
                      "currency": "BRL",
                      "amount": 100000.12
                  },
                  "debtorAccount": {
                      "ispb": "12345678",
                      "branchCode": "1774",
                      "number": "1234567890",
                      "checkDigit": "4",
                      "accountType": "CACC"
                  },
                  "consentId": "pix-2c392587-3442-4ca6-83e8-a4d2cf8ff935",
                  "status": "Awaiting_Authorisation",
                  "creationDateTime": "2021-07-22T15:15:28.668Z",
                  "statusUpdateDateTime": "2021-07-22T15:15:28.668Z"
              },
              "links": {
                  "self": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents/pix-2c392587-3442-4ca6-83e8-a4d2cf8ff935"
              },
              "meta": {},
              "Data": {
                  "Status": "Authorised"
              }
          },
          "provider": {
              "id": "TECBAN"
          },
          "tpp": {
              "clientId": "c62eba7b-fe2d-4e3f-abb9-04e758cf67c9",
              "orgId": "0015800001041RHAAY",
              "softwareStatementId": "HQuZPIt3ipkh33Uxytox1E",
              "tppName": "Ozone Financial Technology Limited",
              "directoryRecord": {}
          },
          "accountIds": [
              "001004000000000000000002",
              "001004000000000000000003",
              "001004000000000000000005",
              "001004100000000000000002",
              "001004100000000000000003",
              "001004100000000000000005"
          ],
          "psuIdentifiers": {
              "userId": "001001000000000000000002"
          },
          "updatedAt": 1626967828936
      }
  ]
  });
}), 50)
});
router.get('/consents/:id', (req, res, next) => {
  setTimeout((() => {
  res.status(200).send({
    data: {
      "id": "pix-a1469298-905b-412d-980b-a089b9f07292",
      "consentType": "brcb-pix-payment-consents",
      "requestHeaders": {
          "host": "rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
          "self_uri": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br",
          "x-cert-dn": "CN=HQuZPIt3ipkh33Uxytox1E,OU=0015800001041RHAAY,O=OpenBanking,C=GB",
          "x-cert-fingerprint": "fd4be9855160fa386727c343908a088b18a830fb",
          "connection": "close",
          "content-length": "481",
          "content-type": "application/json",
          "x-fapi-financial-id": "TECBAN",
          "x-fapi-customer-ip-address": "10.1.1.10",
          "x-fapi-interaction-id": "069beb92-82a9-4578-a232-122fa2e20e20",
          "authorization": "Bearer aeeed608-0142-4586-8413-251db11ba377",
          "user-agent": "PostmanRuntime/7.28.1",
          "accept": "*/*",
          "accept-encoding": "gzip, deflate, br"
      },
      "request": {
          "data": {
              "creditor": {
                  "personType": "PESSOA_NATURAL",
                  "cpfCnpj": "58764789000137",
                  "name": "Marco Antonio de Brito"
              },
              "payment": {
                  "type": "PIX",
                  "dateTime": "2021-01-01T00:00:00Z",
                  "currency": "BRL",
                  "amount": 100000.12
              },
              "debtorAccount": {
                  "ispb": "12345678",
                  "branchCode": "1774",
                  "number": "1234567890",
                  "checkDigit": "4",
                  "accountType": "CACC"
              }
          }
      },
      "requestUrl": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents",
      "consentBody": {
          "data": {
              "creditor": {
                  "personType": "PESSOA_NATURAL",
                  "cpfCnpj": "58764789000137",
                  "name": "Marco Antonio de Brito"
              },
              "payment": {
                  "type": "PIX",
                  "dateTime": "2021-01-01T00:00:00Z",
                  "currency": "BRL",
                  "amount": 100000.12
              },
              "debtorAccount": {
                  "ispb": "12345678",
                  "branchCode": "1774",
                  "number": "1234567890",
                  "checkDigit": "4",
                  "accountType": "CACC"
              },
              "consentId": "pix-a1469298-905b-412d-980b-a089b9f07292",
              "status": "Awaiting_Authorisation",
              "creationDateTime": "2021-07-22T17:35:02.432Z",
              "statusUpdateDateTime": "2021-07-22T17:35:02.432Z"
          },
          "links": {
              "self": "https://rs1.pub-mct-dev.dev.sandbox-tecban.com.br/payments/v1/consents/pix-a1469298-905b-412d-980b-a089b9f07292"
          },
          "meta": {}
      },
      "provider": {
          "id": "TECBAN"
      },
      "tpp": {
          "clientId": "c62eba7b-fe2d-4e3f-abb9-04e758cf67c9",
          "orgId": "0015800001041RHAAY",
          "softwareStatementId": "HQuZPIt3ipkh33Uxytox1E",
          "tppName": "Ozone Financial Technology Limited",
          "directoryRecord": {}
      }
  },
  "meta": {}

  });
}), 50)
});

router.get('/consents', (req, res, next) => {
  setTimeout((() => {
  res.status(200).send({
    
 data : [
  {
    itemId: 1,
    detailView: "DetailConsent",
    cardStatus: "waiting",
    infoMessage: "Aqui são exibidos os consentimentos que ainda não foram aprovados e estão no prazo de validade. Para aprová-lo, você deve seguir com a solicitação na Iniciadora de Pagamentos.",
    cardStatusTitle: "Aguardando aprovação",
    cardStatusDescription: "Limite para aprovação: 13/05/2021 - 15:32",
    payerCpf: "123.456.789-00",
    payerName: "Marco Antonio Brito",
    payerCc: "12345-5",
    beneficiaryCnpj: "123.456.78/0001-40",
    beneficiaryname: "Magazine Luiza",
    paymentIniciationData: "19/05/2021",
    value: "R$ 1.000,00",
    formOfPayment: "Pix"
  },
  {
    itemId: 2,
    detailView: "DetailConsent",
    cardStatus: "consumed",
    infoMessage: "Aqui são exibidos os consentimentos que você aprovou para pagamentos. Para verificar se o pagamento foi relizado, é necessário consultar sua movimentação bancária.",
    cardStatusTitle: "Consumido",
    cardStatusDescription: "Aprovação: 13/05/2021 - 15:32",
    payerCpf: "123.456.789-00",
    payerName: "Marco Antonio Brito",
    payerCc: "12345-5",
    beneficiaryCnpj: "123.456.78/0001-40",
    beneficiaryname: "Magazine Luiza",
    paymentIniciationData: "19/05/2021",
    value: "R$ 1.000,00",
    formOfPayment: "Pix"
  },
  {
    itemId: 4,
    detailView: "DetailConsent",
    cardStatus: "rejected",
    infoMessage: "Aqui são exibidos os consentimentos que você não aprovou.",
    cardStatusTitle: "Rejeitado",
    cardStatusDescription: "Rejeição: 13/05/2021 - 15:32",
    payerCpf: "123.456.789-00",
    payerName: "Marco Antonio Brito",
    payerCc: "12345-5",
    beneficiaryCnpj: "123.456.78/0001-40",
    beneficiaryname: "Magazine Luiza",
    paymentIniciationData: "19/05/2021",
    value: "R$ 1.000,00",
    formOfPayment: "Pix"
  },
]
 
  });
}), 5000)
});

module.exports = router;
