function year123() {
    const mounth = document.getElementById('mounth');
    const day = document.getElementById('day')
    let allday = (mounth.value * 30) + day.value
    if (allday >= 50 && allday <= 79) {
        console.log('Aries')
    }
}