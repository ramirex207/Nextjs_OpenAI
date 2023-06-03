// @ts-nocheck
// @ts-ignore
process.env.experiments = JSON.stringify({ topLevelAwait: true });

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function GET(request) {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "tell me a joke",
      temperature: 0,
      max_tokens: 70,
    });
    const responseData = {
      text: response.data.choices[0].text,
      requestID: response.headers["x-request-id"],
    };

    console.log(responseData.text);

    return new Response(JSON.stringify(responseData), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Error al realizar la solicitud a OpenAI', { status: 500 });
  }
}

export { GET };
