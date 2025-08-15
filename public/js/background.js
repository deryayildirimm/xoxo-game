export function createBackground() {
    const hour = new Date().getHours();
    const isNight = hour >= 18 || hour < 6;

    document.body.classList.add(isNight ? 'night' : 'day');

    // STARS
    const numStars = 80;
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;

        document.body.appendChild(star);
    }

    // CLOUDS
    if (!isNight) {
        const numClouds = 6;
        for (let i = 0; i < numClouds; i++) {
            const cloud = document.createElement("div");
            cloud.classList.add("cloud");

            cloud.style.top = `${Math.random() * 80}%`;
            cloud.style.left = `${Math.random() * 100}%`;
            cloud.style.width = `${150 + Math.random() * 150}px`;
            cloud.style.height = `${40 + Math.random() * 20}px`;
            cloud.style.position = "absolute";
            cloud.style.animation = `cloudDrift ${100 + Math.random() * 40}s linear infinite`;

            document.body.appendChild(cloud);
        }
    }
}
