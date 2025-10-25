import 'dotenv/config';
import * as fs from 'fs';
import * as path from 'path';

const TEMPLATE_PATH = path.resolve(__dirname, 'templates/firebase-messaging-sw.template.js');
const OUTPUT_PATH = path.resolve(__dirname, '../../public/firebase-messaging-sw.js');
const VERSION_PATH = path.resolve(__dirname, '../../public/version.json');

const env = {
  REACT_APP_FIREBASE_API_KEY: process.env.REACT_APP_FIREBASE_API_KEY || '',
  REACT_APP_FIREBASE_AUTH_DOMAIN: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || '',
  REACT_APP_FIREBASE_PROJECT_ID: process.env.REACT_APP_FIREBASE_PROJECT_ID || '',
  REACT_APP_FIREBASE_STORAGE_BUCKET: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || '',
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || '',
  REACT_APP_FIREBASE_APP_ID: process.env.REACT_APP_FIREBASE_APP_ID || '',
  REACT_APP_URL: process.env.REACT_APP_URL || '',
};

function replacePlaceholders(template: string, vars: Record<string, string>): string {
  let result = template;
  for (const [key, value] of Object.entries(vars)) {
    const regex = new RegExp(`{{${key}}}`, 'g');
    result = result.replace(regex, value);
  }
  return result;
}

async function generateServiceWorker() {
  try {
    const template = await fs.promises.readFile(TEMPLATE_PATH, 'utf-8');

    const outputContent = replacePlaceholders(template, env);

    await fs.promises.writeFile(OUTPUT_PATH, outputContent, 'utf-8');

    console.log(`Generated firebase-messaging-sw.js at ${OUTPUT_PATH}`);
  } catch (error) {
    console.error('Error generating firebase-messaging-sw.js:', error);
    process.exit(1);
  }
}

async function generateVersionFile() {
  try {
    const versionData = { version: Date.now().toString() };
    await fs.promises.writeFile(VERSION_PATH, JSON.stringify(versionData), 'utf-8');
    console.log(`✅ Generated version.json at ${VERSION_PATH} with version ${versionData.version}`);
  } catch (error) {
    console.error('❌ Error generating version.json:', error);
    process.exit(1);
  }
}

async function run() {
  await generateServiceWorker();
  await generateVersionFile();
}

run();
