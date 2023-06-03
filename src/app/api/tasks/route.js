
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function GET(request) {
    try {
        const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "eres un comediante con años de experiencia especializado en chistes informaticos dame un",
        temperature: 0.6,
        max_tokens: 150,
        });

        /*const responseData = {
        text: response.data.choices[0].text,
        requestID: response.headers["x-request-id"],
        };*/
        const chiste = response.data.choices[0].text
        console.log(response.data.choices[0].text);

        return new Response(JSON.stringify(chiste), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response('Error al realizar la solicitud a OpenAI', { status: 500 });
    }
}

export { GET };
