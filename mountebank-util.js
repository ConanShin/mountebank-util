var mbHelper = require("mountebank-helper");

class Stub {
    constructor(port = 9000) {
        this.imposter = new mbHelper.Imposter({'imposterPort': port, 'mountebankPort':2525});
        const option = {
            'uri': '*',
            'verb': 'OPTIONS',
            'res': {
                'statusCode': 200,
                'responseHeaders': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*', 'Access-Control-Allow-Methods': '*'},
                'responseBody': ''
            }
        }
        this.imposter.addRoute(option)
    }
    addResponse(uri, method, content, statusCode) {
        const contentResponse = {
            'uri': uri,
            'verb': method,
            'res': {
                'statusCode': statusCode || 200,
                'responseHeaders': {'Access-Control-Allow-Origin': '*'},
                'responseBody': JSON.stringify(content)
            }
        }
        this.imposter.addRoute(contentResponse)
    }
    updateResponse(uri, method, newResponseBody) {
        const pathToUpdate = {
            "uri": uri,
            "verb": method
        }
        const newBody = JSON.stringify(newResponseBody)
        this.imposter.updateResponseBody(newBody, pathToUpdate)
    }
    async createImposter () {
        await this.imposter.postToMountebank()
        console.log('Imposter Posted!')
    }
    async deleteImposter () {
        await this.imposter._deleteOldImposter()
        console.log('Imposter Deleted!')
    }
}

module.exports = Stub
