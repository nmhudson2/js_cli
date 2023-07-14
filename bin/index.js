#!/usr/bin/env node
import { ver_path } from './functions/ver_path.js';
import { generate_env } from './functions/gen_env.js';
import { Command } from 'commander';

const program = new Command();

//Global Program
program
    .version('1.0')
    .name('CLI Example')

program
  .command('compile <path_to_file>')
  .description('Compiles the file specified')
  .action((path_to_file) => {
    if (ver_path(path_to_file) == 1) {
        // success
      console.log(`Path Exists: ${path_to_file}`);
    } else {
      return
    }
  });

program
  .command('init')
  .description('initalize the environment')
  .action(() => {
    generate_env()
  });

program.parse(process.argv);
