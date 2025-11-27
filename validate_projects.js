const fs = require('fs');
const path = require('path');

const projectsFile = path.join(__dirname, 'assets/js/projects.js');
const content = fs.readFileSync(projectsFile, 'utf8');

// Extract the projects array
const match = content.match(/const projects = (\[[\s\S]*?\]);/);
if (!match) {
    console.error("Could not find projects array");
    process.exit(1);
}

const projectsCode = match[1];
const projects = eval(projectsCode);

console.log(`Found ${projects.length} projects.`);

projects.forEach((p, i) => {
    if (!p.category) {
        console.error(`Project at index ${i} (${p.id}) missing category`);
    } else {
        try {
            p.category.toLowerCase();
        } catch (e) {
            console.error(`Project at index ${i} (${p.id}) category.toLowerCase() failed: ${e.message}`);
        }
    }

    if (!p.links) {
        console.error(`Project at index ${i} (${p.id}) missing links`);
    } else if (!Array.isArray(p.links)) {
        console.error(`Project at index ${i} (${p.id}) links is not an array`);
    } else {
        try {
            p.links.some(l => l.url.includes('github.com'));
        } catch (e) {
            console.error(`Project at index ${i} (${p.id}) links check failed: ${e.message}`);
        }
    }
});

console.log("Validation complete.");
