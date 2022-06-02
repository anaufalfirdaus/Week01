    const antrian1 = () => {
    console.log("Antrian 1 : Beli KFC paket A");
    }
    const antrian2 = () => {
    setTimeout(() => {
    console.log("Antrian 2 : Beli Sup Ayam");
    }, 2000);
    }
    const antrian3 = () => {
    console.log("Antrian 3 : Beli KFC paket C");
    }
    const antrian4 = () => {
    setTimeout(() => {
    console.log("Antrian 4 : Beli Burger");
    }, 1000);
    }
    //call functions
    antrian1();
    antrian2();
    antrian3();
    antrian4();
    