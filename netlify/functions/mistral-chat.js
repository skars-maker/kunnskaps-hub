exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Metode ikke tillatt" })
    };
  }

  const apiNokkel = process.env.MISTRAL_API_KEY;
  if (!apiNokkel) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Ingen API-nøkkel er konfigurert på serveren." })
    };
  }

  try {
    const { systemPrompt, sporsmal } = JSON.parse(event.body);

    const respons = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiNokkel
      },
      body: JSON.stringify({
        model: "mistral-small-latest",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: sporsmal }
        ]
      })
    });

    const data = await respons.json();

    return {
      statusCode: respons.status,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
  } catch (feil) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Serverfeil: " + feil.message })
    };
  }
};
