exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Metode ikke tillatt" })
    };
  }

  const riktigPassord = process.env.KUNNSKAPSHUB_PASSORD;
  if (!riktigPassord) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Ingen passord er konfigurert på serveren." })
    };
  }

  try {
    const { passord } = JSON.parse(event.body);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ok: passord === riktigPassord })
    };
  } catch (feil) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Serverfeil: " + feil.message })
    };
  }
};
