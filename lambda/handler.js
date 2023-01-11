const {runCLI} = require('jest')

const jestConfig = require('./jest.config')

module.exports.runTest = async event => {
    try {
        const {testMatch} = event.body
        if (typeof testMatch === underfined) {
            return {
                statusCode : 400,
                body : JSON.stringify('No found \'test_match\'.')
            }
        }

        const {results} = await runCLI({
            ...jestConfig,
            testMatch: [testMatch]
        }, [''])

        return {
            statusCode : 200,
            body : JSON.stringify(results)
        }
    } catch (error) {
        console.log({ error });
        return {
            statusCode : 500,
            body : JSON.stringify(error),
        }
    }
}