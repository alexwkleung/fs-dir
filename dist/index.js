import fs from 'fs';
import path from 'path';
/**
 * readDirectory function
 *
 * Read contents of a directory
 *
 * @param dirStr The directory to read from
 * @returns An array containing files from the directory
 */
export function readDirectory(dirStr) {
    try {
        //read posts directory
        const readDir = fs.readdirSync(dirStr, 'utf-8');
        //return directory content
        return readDir;
        //catch exception thrown from fs
    }
    catch (error) {
        //throw exception message
        throw console.error(error);
    }
}
/**
 * removeExtension function
 *
 * Remove extension from files
 *
 * @param dirArr An array containing files from a directory
 * @returns An array that contains only the file names of the directory
 */
export function removeExtension(dirArr) {
    //assign reference of dir to readDir
    const readDir = dirArr;
    const pathName = [];
    //iterate over readDir
    for (let i = 0; i < readDir.length; i++) {
        //push names of path to end of array (no extension)
        pathName.push(path.parse(readDir[i]).name);
    }
    //return pathName
    return pathName;
}
/**
 * filterByExtension function
 *
 * Filter directory files by extension
 *
 * @param dirArr An array containing content from a directory
 * @param extension The extension type to filter (i.e., `.txt`)
 * @returns An array containing the filtered directory files based on `extension`
 */
export function filterByExtension(dirArr, extension) {
    const readDir = dirArr;
    const dirFilter = readDir.filter((mdFilter) => {
        return [extension].some((end) => {
            return mdFilter.endsWith(end);
        });
    });
    //return array containing filtered files based on extension
    return dirFilter;
}
/**
 * parseFile function
 *
 * Read a file from a directory
 *
 * @param path The file to read from
 * @returns The contents of the read file
 */
export function parseFile(path) {
    try {
        const readFile = fs.readFileSync(path, 'utf-8');
        //return content of read file
        return readFile;
    }
    catch (error) {
        throw console.error(error);
    }
}
/**
 * writeToFile function
 *
 * Write content into a file
 *
 * @param path The file to write to (file will be created if it does not exist)
 * @param data The content to write into the file
 */
export function writeToFile(path, data) {
    const write = fs.writeFile(path, data, (error) => {
        if (error) {
            console.error(error);
        }
    });
}
