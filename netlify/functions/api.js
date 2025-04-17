// This is a placeholder for serverless functions
// You can implement your Express API handlers here if needed
// For a static site deployment, this file may not be necessary

export async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from iCopilot API" }),
  };
}