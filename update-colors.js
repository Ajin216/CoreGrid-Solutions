const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('core-blue') || content.includes('core-orange')) {
    content = content.replace(/core-blue/g, 'core-primary').replace(/core-orange/g, 'core-accent');
    fs.writeFileSync(file, content);
    console.log('Updated: ' + file);
  }
});
