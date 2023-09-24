function VigenèreCipher(key, abc) {

    const vigenereMatrix = [];

    for (   let i = 0; i < key.length; i++ ) {
        const row = [];
        const shift = abc.indexOf(key[i]);
        for (let j = 0; j < abc.length; j++) {
            row.push(abc[(j + shift) % abc.length]);
        }

        vigenereMatrix.push(row);
    }

    this.encode = function (str) {
        let result = '';

        for (let k = 0; k < str.length; k++) {
            if (abc.indexOf(str[k]) !== -1) {
                const rowIndex = k % key.length;
                const row = vigenereMatrix[rowIndex];
                const colIndex = abc.indexOf(str[k]);
                result += row[colIndex];
            } else {
                result += str[k];
            }
        }

        return result;
    };

    this.decode = function (str) {
        let result = '';

        for (let index = 0; index < str.length; index++) {
            if (abc.indexOf(str[index]) !== -1) {
                const rowIndex = index % key.length;
                const row = vigenereMatrix[rowIndex];
                const colIndex = row.indexOf(str[index]);
                result += abc[colIndex];
            } else {
                result += str[index];
            }
        }

        return result;
    };
}

// Exemplo de uso:
const cipher = new VigenèreCipher("KEY", "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const encoded = cipher.encode("HELLO"); // Retorna "RIJVS"
const decoded = cipher.decode("RIJVS"); // Retorna "HELLO"
