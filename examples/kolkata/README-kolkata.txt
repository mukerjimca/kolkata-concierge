Kolkata Concierge replacement files

Copy index.html, site.js, styles.css to C:\NeuroSan\kolkata-concierge\examples\kolkata\ (overwrite after backup).
Keep existing runtime/, chat-follow.js, fonts/, agent-manifest.json and kolkata_concierge.network.json.
Do NOT load script.js or restaurant-actions.js. They are unused by this replacement.
Confirm agent-manifest.json no longer references restaurant-actions.js or any pizza actions.
Run from repository root: python -m http.server 8080 --directory .\examples\kolkata
Open http://127.0.0.1:8080/ and hard refresh (Ctrl+Shift+R).
