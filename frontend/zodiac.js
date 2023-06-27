async function astrology() {
    const m = document.getElementById('mounth')
    const d = document.getElementById('day')
    let month = Number(m.value)
    let day = Number(d.value)
    let zodiacSign = {}

    const response = await fetch(`http://localhost:3000?query.month=${month}&day=${day}`);
    const jsonData = await response.json();

    zodiacSign.name = jsonData.name
    zodiacSign.description = jsonData.description
    zodiacSign.image = jsonData.image

    hideShow(zodiacSign)
}
function hideShow(a) {
    document.getElementById('description1').style.display = 'none';
    document.getElementById('description2').style.display = 'none';
    document.getElementById('description3').style.display = 'none';
    document.getElementById('hiden-description').style.display = 'flex';
    document.getElementById('hiden-paragraph').innerText = a.description;
    document.getElementById('hiden-paragraph').style.display = 'flex';
    document.getElementById('hidden-image').src = a.image;
    document.getElementById('hidden-image').style.display = 'flex'
}

