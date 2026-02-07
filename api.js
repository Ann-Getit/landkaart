export default async function handler(req, res) {
  const response = await fetch(
    "https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/stations",
    { headers: { "Ocp-Apim-Subscription-Key": process.env.NS_API_KEY } }//haalt de NS stations op via fetch met veilige key uit .env
  );

  const data = await response.json();//parseer de JSON naar ja obejct (data.payload)

  res.status(200).json(data.payload);//<---
}
