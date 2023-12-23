const data = {
    'value': 0,
    get() {
        return this.value
    },
    set(value) {
        this.value = value
    }
}
let value = new data()

module.exports = value 