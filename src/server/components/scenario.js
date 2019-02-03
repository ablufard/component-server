
export default class Scenario {
    constructor(param) {
        this.params = param;
    }
    run() {
        console.log('params: ', this.params)
    }
}