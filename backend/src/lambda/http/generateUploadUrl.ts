import 'source-map-support/register'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { generateUploadUrl } from '../../businessLogic/Todo'



export const handler =
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const todoId = event.pathParameters.todoId
    // TODO: Return a presigned URL to upload a file for a TODO item with the provided id
     
    const URL = await generateUploadUrl(todoId)


    return {
      statusCode: 202,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        uploadUrl: URL
      })
    }
  }