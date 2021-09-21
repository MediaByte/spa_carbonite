const api = require("./api")
// @ponicode
describe("api.apiCall", () => {
    test("0", () => {
        let callFunction = () => {
            api.apiCall("https://croplands.org/app/a/reset?token=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            api.apiCall("https://twitter.com/path?abc")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            api.apiCall("https://api.telegram.org/bot")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            api.apiCall("http://www.croplands.org/account/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            api.apiCall("http://www.example.com/route/123?foo=bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            api.apiCall(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
