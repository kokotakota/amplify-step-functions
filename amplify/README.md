## StepFunctionsで使用するLambdaを追加
```
amplify add function
```

## StepFunctionsをAmplifyに追加
### backend-config.json
- StepFunction内で使用するfunctionのArnを受け取るようにする
### amplify/backend/stepFunction/<リソース名>/<リソース名>-cloudformation-template.yaml
- StepFunctions、Lambdaの実行権限を設定する

## StepFunctonを実行するためのLambdaを追加
### backend-config.json
- StepFunctionのArnを受け取るようにする
### amplify/backend/function/<リソース名>/<リソース名>-cloudformation-template.yaml
- StepFunctionの実行権限を設定する