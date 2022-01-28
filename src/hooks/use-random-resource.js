const getRarity = (number, chances) => {
    const common = 0 + chances.common;
    const rare = common + chances.rare;
    const epic = rare + chances.epic;
    const mythic = epic + chances.mythic;
    const legendary = mythic + chances.legendary;

    if (number < common) {
        return 1;
    } else if (number < rare) {
        return 2;
    } else if (number < epic) {
        return 3;
    } else if (number < mythic) {
        return 4;
    } else if (number < legendary){
        return 5;
    } else {
        return 1;
    }
}

const useRandomResource = () => {

    const getItems = (chances, resources, n) => {
        const tmpRes = [];

        for (let i = 0; i < n; i++) {
            let locked = false;
            const rand = Math.floor(Math.random() * (100-1));
            const rarity = getRarity(rand, chances);
            const tierChamps = resources.filter(val => val.tier === rarity);
            const randIt = Math.floor(Math.random() * (tierChamps.length));
            tmpRes.forEach(item => {
                if (item.id === tierChamps[randIt].id){
                    locked = true;
                    return i--;
                }
            })
            if (!locked) {
                tmpRes.push(tierChamps[randIt]);
            }
        }
        
        return tmpRes;
    }
    
    return getItems;
}

export default useRandomResource;