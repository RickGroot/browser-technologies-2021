module.exports = function getData(param) {
    let data;
    if (param === 'PWA') {
        data = {
            lecturer: ["Joost", "Declan"]
        };
        return data;
    } else if (param === 'Browser-Technologies') {
        data = {
            lecturer: ["PPK", "Koop"]
        };
        return data;
    } else if (param === 'CSS-to-the-rescue') {
        data = {
            lecturer: ["Docent_1", "Docent_2"]
        };
        return data;
    } else if (param === 'WAFS') {
        data = {
            lecturer: ["Docent_1", "Docent_2", "Docent_3"]
        };
        return data;
    } else if (param === 'Real-time-web') {
        data = {
            lecturer: ["Docent_1", "Docent_2"]
        };
        return data;
    } else if (param === 'HCD') {
        data = {
            lecturer: ["Docent_1", "Docent_2"]
        };
        return data;
    } else if (param === 'Meesterproef') {
        data = {
            lecturer: ["Docent_1", "Docent_2"]
        };
        return data;
    }
}