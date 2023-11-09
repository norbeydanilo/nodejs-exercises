var tutor = require('./tutorial.js');
exports.NodeTutorial = function () {
    console.log("Node Tutorial -- 2");
    this.pTutor = function () {
        var PTutor = tutor;
        PTutor.tutorial();
    }
}
