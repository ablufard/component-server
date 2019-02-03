import fs from 'fs';
export default function readSVC(filepath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, (err, res) => {
            if(err) reject(err);
            try {
                res = JSON.parse(res)
                resolve(res);
            } catch(e) {
                reject(e);
            }
        })
    });
}