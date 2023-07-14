import * as fs from 'node:fs';

export function ver_path(path_to_config) {
    if (typeof path_to_config === 'string' && fs.existsSync(path_to_config)) {
        return 1;
    }
    else{
        console.log(`ERROR: Cannot find "${path_to_config}" in "${process.cwd()}"`)
        return 0;
    }
}
