import 'source-map-support/register'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { getAllTodoForUser } from '../../businessLogic/Todo'


// TODO: Get all TODO items for a current user
export const handler = 
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    // Write your code here
    console.log("Processing event", event)
    const authorization = event.headers.Authorization
    const jwtToken = authorization.split(" ")[1]
    const todos = await getAllTodoForUser(jwtToken)

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        items: todos
      })
    }
  }