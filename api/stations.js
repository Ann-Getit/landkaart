export default async function handler(req, res) {
  // CORS headers zodat je frontend vanaf een ander domein mag fetchen
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");

  // OPTIONS request (preflight) afhandelen
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const response = await fetch(
      "https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/stations",
      {
        headers: {
          "Ocp-Apim-Subscription-Key": process.env.NS_API_KEY
        }
      }
    );

    const data = await response.json();

    // Stuur payload terug
    res.status(200).json(data.payload);

  } catch (error) {
    res.status(500).json({ error: "NS API failed", details: error.toString() });
  }
}






































/*export default async function handler(req, res) {
  const response = await fetch(
    "https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/stations",
    { headers: { "Ocp-Apim-Subscription-Key": process.env.NS_API_KEY } }//haalt de NS stations op via fetch met veilige key uit .env
  );

  const data = await response.json();//parseer de JSON naar ja obejct (data.payload)

  res.status(200).json(data.payload);//<---
}*/
