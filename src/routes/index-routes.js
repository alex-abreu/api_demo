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
    data : [
      {
        consentId: 1,
        
      },
      {
        consentId: 2,
        
      },
      {
        consentId: 4,
       
      },
    ]
 
  });
}), 50)
});
router.get('/consents/:id', (req, res, next) => {
  setTimeout((() => {
  res.status(200).send({
    dat:[
      {
        "data":{
          "consentId": "1",
          "creationDateTime": "2021-07-22T12:44:02.",
          "expirationDateTime": "2021-09-22T12:44:02.",
          "statusUpdateDateTime": "2021-07-22T12:44:02.",
          "status": "AWAITING_AUTHORISATION",
        },
        "payment": {
          "type": "PIX",
          "date": "2021-07-22",
          "currency": "R$",
          "amount": "1000"
      },
      "creditor": {
        "personType": "PESSOA_NATURAL",
        "cpfCnpj": "12312312355",
        "name": "Magazine Luiza"
      },
      "debtorAccount": {
        "ispb": "stringst",
        "issuer": "stri",
        "number": "654654654",
        "accountType": "CACC"
      }
    },
      {
        "data":{
          "consentId": "2",
          "creationDateTime": "2021-07-22T12:44:02.",
          "expirationDateTime": "2021-07-22T12:44:02.",
          "statusUpdateDateTime": "2021-07-22T12:48:02.",
          "status": "consumed",
        },
        "payment": {
          "type": "PIX",
          "date": "2021-07-22",
          "currency": "R$",
          "amount": "800"
      },
      "creditor": {
        "personType": "PESSOA_NATURAL",
        "cpfCnpj": "12312312355",
        "name": "Amazon"
      },
      "debtorAccount": {
        "ispb": "stringst",
        "issuer": "stri",
        "number": "654654654",
        "accountType": "CACC"
      }
      },
      {
        "data":{
          "consentId": "4",
          "creationDateTime": "2021-07-22T12:44:02.",
          "expirationDateTime": "2021-07-22T12:44:02.",
          "statusUpdateDateTime": "2021-07-22T12:49:02.",
          "status": "rejected",
        }, "payment": {
          "type": "PIX",
          "date": "2021-07-22",
          "currency": "R$",
          "amount": "350"
      },"creditor": {
        "personType": "PESSOA_NATURAL",
        "cpfCnpj": "12312312355",
        "name": "Americanas"
      },
      "debtorAccount": {
        "ispb": "stringst",
        "issuer": "stri",
        "number": "654654654",
        "accountType": "CACC"
      }
      ,
      }
    ]
 
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
