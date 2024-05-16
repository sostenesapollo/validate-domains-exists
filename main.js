const fs = require('fs');
const path = require('path');
const whois = require('whois-json');

async function checkDomain(domain) {
    try {
        const info = await whois(domain);
        if(!info.registryDomainId) {
            console.log(domain);
        }
    } catch (error) {
        throw new Error(`Error checking domain ${domain}: ${error.message}`);
    }
}

async function processDomainsFromFile(filePath) {
    try {
        const domains = fs.readFileSync(filePath, 'utf-8').split('\n').filter(Boolean); // Read file and split by line breaks

        for (const domain of domains) {
            try {
                await checkDomain(domain);
                // console.log(result); // Log the result
            } catch (error) {
                console.error(error.message);
            }
        }
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

const filePath = 'domains.txt'; // Path to your text file containing domain names
processDomainsFromFile(filePath);
