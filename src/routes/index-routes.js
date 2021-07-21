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

router.get('/consents/:id', (req, res, next) => {
  res.status(200).send({
    data: {
      "consentId": "string",
      "creationDateTime": "2021-07-21T17:09:57.",
      "expirationDateTime": "2021-07-21T17:09:57.",
      "statusUpdateDateTime": "2021-07-21T17:09:57.",
      "status": "AWAITING_AUTHORISATION",
      "loggedUser": {
        "document": {
          "identification": "string",
          "rel": "str"
        }
      },
      "businessEntity": {
        "document": {
          "identification": "string",
          "rel": "stri"
        }
      },
      "creditor": {
        "personType": "PESSOA_NATURAL",
        "cpfCnpj": "stringstrin",
        "name": "string"
      },
      "payment": {
        "type": "PIX",
        "date": "2021-07-21",
        "currency": "str",
        "amount": "string"
      },
      "debtorAccount": {
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
      "requestDateTime": "2021-07-21T17:09:57."
    }
 
  });
});


module.exports = router;
