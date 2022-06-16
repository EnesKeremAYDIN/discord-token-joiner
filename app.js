const axios = require("axios").default
const serverInvite = "";
const tokenList = ["Token1",
"Token2",
"Token3"
];

for(const joiner of tokens) {
  axios({
      method: 'POST',
      url: serverInvite,
      headers: {'Authorization': `${tokenList}` }
  })
}
