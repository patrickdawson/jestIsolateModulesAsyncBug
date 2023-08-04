let cjsState = 0;

function incState() {
    cjsState += 1;
}

function getState() {
    return cjsState;
}

module.exports = {
    incState,
    getState,
}
