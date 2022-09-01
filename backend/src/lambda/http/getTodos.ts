import 'source-map-support/register'


import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'




// TODO: Get all TODO items for a current user

export const handler = (
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    // Write your code here
    console.log("Processing event: ", event)
    const authorization = event.headers.Authorization;
    const split = authorization.split(" ")
    const jwtToken = split[1]

    const todos = await getAllTodo(jwtToken);


    return {
      statusCode: 200,
      headers: {
        "Äccess-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        "items": todos
      })
    }
  }
)


