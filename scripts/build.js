import { readFileSync, writeFileSync } from 'node:fs'
import { globSync } from 'tinyglobby'

rollupDts();

function getFiles(){
    const files = globSync('**/*.d.ts', {
        ignore: ['node_modules', 'test', 'dist'],
        onlyFiles: true,
        expandDirectories: false,
    })
    return files;
}

function rollupDts(){
    const codes = [];
    const files = getFiles();
    for(const filepath of files){
        let originalContent = readFileSync(filepath, 'utf-8')
        if(filepath === 'index.d.ts'){
            originalContent = originalContent
              .replace(/\/\/\/\s+<[^>]+?>/g, '')
              .replace(/(\n[\s\t]*\r*\n)/g, '\n')
              .replace(/^[\n\r\n\t]*|[\n\r\n\t]*$/g, '')
            codes.push(originalContent);
        }else{
            codes.push(`// ${filepath}\n` + originalContent)
        }
    }

    writeFileSync('./dist/layui.d.ts', codes.join('\n'), 'utf-8')
}

// function extractDeclaration(code) {
//     const moduleDeclaration = code.match(/declare\s+namespace\s+Layui\s*\{(.*)\}/s)?.[1];
//     return moduleDeclaration || '';
// }
