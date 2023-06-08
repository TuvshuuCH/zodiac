function astrology() {
    const mounth = document.getElementById('mounth');
    const day = document.getElementById('day')
    let allday = (mounth.value * 30) + day.value
    if (allday >= 20 && allday <= 49) {
        console.log('Aries')
    } if (allday >= 50 && allday <= 79) {
        console.log('Taurus')
    } if (allday >= 80 && allday <= 109) {
        console.log('Gemini')
    } if (allday >= 110 && allday <= 139) {
        console.log('Cancer')
    } if (allday >= 140 && allday <= 169) {
        console.log('Leo')
    } if (allday >= 170 && allday <= 199) {
        console.log('Virgo')
    } if (allday >= 200 && allday <= 229) {
        console.log('Libra')
    } if (allday >= 230 && allday <= 259) {
        console.log('Scorpio')
    } if (allday >= 260 && allday <= 289) {
        console.log('Sagittarius')
    } if (allday >= 290 && allday <= 319) {
        console.log('Capicorn')
    } if (allday >= 320 && allday <= 349) {
        console.log('Aquarius')
    } if (allday >= 350 && allday <= 19) {
        console.log('Pisces')
    }
}