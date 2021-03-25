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
            lecturer: ["Sanne", "Vasilis"]
        };
        return data;
    } else if (param === 'WAFS') {
        data = {
            lecturer: ["Joost", "Suus"]
        };
        return data;
    } else if (param === 'Real-time-web') {
        data = {
            lecturer: ["Joost", "Koop"]
        };
        return data;
    } else if (param === 'HCD') {
        data = {
            lecturer: ["Vasilis", "Joost"]
        };
        return data;
    } else if (param === 'Meesterproef') {
        data = {
            lecturer: ["Koop", "Joost"]
        };
        return data;
    }
}