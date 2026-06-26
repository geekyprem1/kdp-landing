const fs = require('fs');
const path = require('path');

const walk = (dir, done) => {
  let results = [];
  fs.readdir(dir, (err, list) => {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(file => {
      file = path.resolve(dir, file);
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          walk(file, (err, res) => {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          if (file.endsWith('.tsx')) {
            results.push(file);
          }
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

const regex = /className="max-w-(3xl|4xl|5xl|6xl) mx-auto px-4/g;

walk(path.join(__dirname, 'src'), (err, files) => {
  if (err) throw err;
  
  let changedFiles = 0;
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    if (regex.test(content)) {
      const newContent = content.replace(regex, 'className="max-w-7xl mx-auto px-4');
      fs.writeFileSync(file, newContent, 'utf8');
      console.log(`Updated ${path.basename(file)}`);
      changedFiles++;
    }
  });
  
  console.log(`Total files updated: ${changedFiles}`);
});
