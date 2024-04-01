var blessings = [
    "elay - joy",
    "elay - hope",
    "elay - kindness",
    "elay - beauty",
    "elay - vision",
    "elay - grace",
    "elay - spirituality",
    "elay - honor",
    "hunti - courage",
    "hunti - strength",
    "hunti - steadfastness",
    "hunti - loyalty",
    "hunti - certainty",
    "hunti - resolve",
    "hunti - determination",
    "hunti - power",
    "sweela - innovation",
    "sweela - love",
    "sweela - imagination ",
    "sweela - clarity",
    "sweela - intelligence",
    "sweela - charm",
    "sweela - talent",
    "sweela - creativity",
    "coru - change",
    "coru - travel",
    "coru - flexibility",
    "coru - swiftness",
    "coru - resilience",
    "coru - luck",
    "coru - persistence",
    "coru - surprise",
    "torz - honesty",
    "torz - health",
    "torz - fertility",
    "torz - contentment",
    "torz - endurance",
    "torz - wealth",
    "torz - patience",
    "extraordinary - synthesis",
    "extraordinary - triumph",
    "extraordinary - time",
]

function newBlessing() {
    var ranNum = Math.floor(Math.random() * (blessings.length));
    document.getElementById('blessingDisplay').innerHTML = blessings[ranNum];
}

function reset() {
    location.reload();
}