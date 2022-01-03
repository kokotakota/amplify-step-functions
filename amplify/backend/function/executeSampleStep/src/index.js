const AWS = require('aws-sdk')
AWS.config.update({
  region: process.env['REGION']
})

exports.handler = async (event) => {
  const stateMachineArn = process.env['STEPFUNCTION_SAMPLESTEP_ARN']
  const params = {
    stateMachineArn,
    input: JSON.stringify({param1: '1', param2: '2'})
  }
  const stepFunctions = new AWS.StepFunctions()
  try {
    await stepFunctions.startExecution(params).promise()
  } catch (error) {
    console.log(`Step Functions: "${stateMachineArn}" の実行に失敗しました。`)
    throw error
  }
}