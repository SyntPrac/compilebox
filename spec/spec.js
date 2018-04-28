const api = require('../API/app');
const endpoint = `http://localhost:${api.port}/${api.endpoint}`;
const server = api.server;
const lang_tests = require('../API/langs').tests

const request = require('request')

const languages = {
    "Python": 0,
    "Ruby": 1,
    "Clojure": 2,
    "PHP": 3,
    "Plain JavaScript": 4,
    "Scala": 5,
    "Go": 6,
    "C/C++": 7,
    "Java": 8,
    "VB.NET": 9,
    "C#": 10,
    "Bash": 11,
    "Objective-C": 12,
    "MySQL": 13,
    "Perl": 14,
    "Rust": 15,
}

describe("python", () => {
    it("should return 200, with compilation results", (done) => {
        let pass = false
        console.log(`querying ${endpoint}`)
        server.listen(api.port, "localhost", (error) => {
            if (!error) {
                const code = lang_tests.Python
                const body = {
                    language: '0',
                    code: 'print \'Hello!\'',
                    stdin: '        hello\n    '
                }
                request.post({url:endpoint,form:body}, (error, response, body) => {
                    pass = !error && response.statusCode == 200
                    console.log(response.body)
                    server.close()
                    expect(pass).toBe(true)
                    done()
                })
            }
        })
    },30*1000)
})
