function getDay(value) {
    switch (value) {
        case 1:
            value = 'Minggu'
            break;
        case 2:
            value = 'Senin'
            break;
        case 3:
            value = 'Selasa'
            break;     
        default:
            break;
    }
    console.log(value);
}
getDay(4)