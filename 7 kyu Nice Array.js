const isNice = arr => {
    if (arr.length <= 0) {
        return false;
    }

    const result = arr.every(item => {
        return arr.some(current => {
            return item === current + 1 || item === current - 1;
        });
    });

    console.log("Result:", result);
    return result;
};

isNice([6, 8]);