const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
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
});

module.exports = router;
