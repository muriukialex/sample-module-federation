// set-env.ts
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

// write to the shared http library environment
const targetPath = './libs/shared/sil-http-services/src/environments/environment.ts';

const envConfigFile = `export const environment = {
    publicApiUrl: '${process.env.NX_PUBLIC_API_URL}',
};
`;

fs.writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.error(err);
  }
});
