// calc.js
const calc = {
    calcularDistancia(lat1, lon1, lat2, lon2) {
        const rad = function(x) {
            return x * Math.PI / 180;
        };

        const R = 6378.137; // 지구 반지름 (킬로미터 단위, WGS84)
        const dLat = rad(lat2 - lat1);
        const dLong = rad(lon2 - lon1);

        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(rad(lat1)) * Math.cos(rad(lat2)) *
                  Math.sin(dLong / 2) * Math.sin(dLong / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c;

        return d.toFixed(3); // 소수점 3자리까지 반환
    },

    sortDistances(baseLat, baseLon, bannerData) {
        return bannerData.map(item => {
            const distance = parseFloat(this.calcularDistancia(baseLat, baseLon, item.lat, item.lon));
            return {
                ...item,
                distance
            };
        }).sort((a, b) => a.distance - b.distance);
    }
};

export default calc;
