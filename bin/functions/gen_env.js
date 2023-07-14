import * as fs from 'node:fs';

export function generate_env() {
  if (fs.existsSync('./bin/anc')) {
    console.log('Environment already exists');
    return;
  } else {
    console.log('Generating environment...');
    fs.mkdirSync('./bin/anc');
    fs.opendirSync('./bin/anc');
    fs.writeFileSync('./bin/anc/inputs.anc', '');
    console.log('Successfully created environment');
  }
}
