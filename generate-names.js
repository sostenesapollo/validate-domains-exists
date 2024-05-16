const fs = require('fs');
const path = require('path');

function generateDomainName() {
    const prefixes = ['admin', 'user', 'sys', 'manage', 'ctrl', 'hub', 'net', 'io', 'tech', 'sol', 'wise', 'pro', 'gen', 'wiz', 'smart', 'exp', 'master', 'go', 'top'];
    const tlds = ['.com', '.net', '.org', '.io', '.tech'];

    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomSuffix = Math.random().toString(36).substring(2, 6); // Random alphanumeric string of length 4
    const randomTld = tlds[Math.floor(Math.random() * tlds.length)];

    return randomPrefix + randomSuffix + randomTld;
}

const numNames = 10000;
const outputFilePath = path.join(__dirname, 'domain_names.txt');

fs.writeFileSync(outputFilePath, ''); // Clear the file if it exists

for (let i = 0; i < numNames; i++) {
    const domainName = generateDomainName();
    fs.appendFileSync(outputFilePath, domainName + '\n');
}
