const loveLetter = `
Snu meowie,😸

Crush box gd neg goe um bdgiin bn gedahguyu hhe. Gxde bi cin crush daa bish meow dee zahia bicij bn shude hhe. Eniig yuruusuu meow box bolgoh ystoi gedahguyu ahh.

Gxde yamar azaar ene huntei ucirsn um bolo. Hariltsaa ehleed udaagu bhd helehed sonin c gsn yagaad c um ene huny hajuud bhda l aygu taivn, amgalan, neg az jarglaar bylhaad bga um shg sngddg bolcijee. 21 hurtsn barg l tom hun boltsn hernee ciny l hajuud jooxn huuhd shg bolchih umaa hhe.🥰

Yg turuun yvuulsn reel shg "yasn mangar huuhd ve gej bodon bodsoor durlaj bilee ❤️" gdg ug l yg bodit bodit baidal buulgsn zuraglal ni umuda hha. 

Cmtai hmt bgd, cmdaa erhleed, cmtai chatlaad ireh tusam neg l zuilees aidg bolcijee hhah. Ene huniig gomdoocih vii,ene huniig aldcih vii gsn aids🥺. Gsn c gsn aidsaasaa bolood yu c hiihgu bh bishde aii ugaasaa l meowie daa meow um cin <3. 

Odoohndoo hamtdaa buteesn olon dursamj bhgu c gsn ireeduid olon olon dursamjiig hamtdaa buteenee huuhde. Ter dursamjuud az jargaltai, saixn bur esregeeree gunigtai dursamjuud c bh bh. Gxde ter buhniig hmtdaa tuulaal garna. 

❤️Meow u meowie<3❤️

🤍2025.02.09 23:52🤍
`;

const letterElement = document.getElementById("loveLetter");
const container = document.querySelector(".container");

let index = 0;
let fontSize = 1.8; // Initial font size in rem

function typeLetter() {
    if (index < loveLetter.length) {
        letterElement.innerHTML += loveLetter[index];
        index++;

        // Gradually shrink the font size as the content grows
        if (index > loveLetter.length * 0.3) {
            fontSize -= 0.002;
            letterElement.style.fontSize = `${Math.max(fontSize, 1)}rem`;
        }

        setTimeout(typeLetter, 50);
    } else {
        showImage(); // Call function to add image when typing is done
    }
}

typeLetter();

// Function to add an image after letter typing completes
function showImage() {
    const img = document.createElement("img");
    img.src = "./images/Today's silliness___.jpg"; // Replace with your image file path
    img.alt = "A meaningful image";
    img.classList.add("letter-image");
    container.appendChild(img);
}

// Generate Stars
const canvas = document.querySelector('.stars');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawStars() {
    const numStars = 200; // Number of stars
    for (let i = 0; i < numStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2;
        const brightness = Math.random() * 0.8 + 0.2;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
        ctx.fill();
    }
}

drawStars();

// Twinkling Effect
function twinkleStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStars();
}

setInterval(twinkleStars, 1000); // Stars "twinkle" every second

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawStars();
});