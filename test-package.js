// Test script to verify the package build
const fs = require('fs');
const path = require('path');

console.log('🔍 Testing Sevago SSO Frontend Package...\n');

// Check if dist folder exists
const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  console.error('❌ dist folder not found!');
  process.exit(1);
}

// Check main files
const requiredFiles = [
  'index.esm.js',
  'index.cjs.js',
  'sevago-sso-fe.css'
];

console.log('📁 Checking required files:');
requiredFiles.forEach(file => {
  const filePath = path.join(distPath, file);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    console.log(`✅ ${file} (${(stats.size / 1024).toFixed(2)} KB)`);
  } else {
    console.log(`❌ ${file} - Missing!`);
  }
});

// Check package.json
console.log('\n📦 Checking package.json:');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

const requiredFields = ['name', 'version', 'main', 'module', 'types'];
requiredFields.forEach(field => {
  if (packageJson[field]) {
    console.log(`✅ ${field}: ${packageJson[field]}`);
  } else {
    console.log(`❌ ${field} - Missing!`);
  }
});

// Check peer dependencies
console.log('\n🔗 Checking peer dependencies:');
if (packageJson.peerDependencies) {
  Object.entries(packageJson.peerDependencies).forEach(([dep, version]) => {
    console.log(`✅ ${dep}: ${version}`);
  });
} else {
  console.log('❌ No peer dependencies defined!');
}

// Check .npmignore
console.log('\n📝 Checking .npmignore:');
if (fs.existsSync('.npmignore')) {
  console.log('✅ .npmignore exists');
} else {
  console.log('❌ .npmignore missing!');
}

// Check README
console.log('\n📖 Checking README:');
if (fs.existsSync('README.md')) {
  const readmeContent = fs.readFileSync('README.md', 'utf8');
  console.log(`✅ README.md exists (${readmeContent.length} characters)`);
} else {
  console.log('❌ README.md missing!');
}

console.log('\n🎉 Package verification complete!');
console.log('\n📋 Next steps:');
console.log('1. Test the package locally: npm pack');
console.log('2. Install in another project: npm install ./sevago-sso-fe-1.0.0.tgz');
console.log('3. Publish to npm: npm publish');
