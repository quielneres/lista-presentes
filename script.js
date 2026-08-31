const presentes = [
    {
        id: 1,
        descricao: "Tanque De Combustível Plástico 55l - Compatível com Chevrolet Opala 1979",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_983592-MLB79920533600_102024-F-tanque-de-combustivel-plastico-55l-chevrolet-opala-ate-1991.webp",
        link: "https://www.mercadolivre.com.br/up/MLBU2934693895?matt_tool=38524122&pdp_filters=item_id%3AMLB5247583730&ua=D_7XK8ObhRre7lcyN7t8BCMStD1Xf-X4KvXCnCyPPwQO0Cw4#origin=share&sid=share&wid=MLB5247583730&action=copy"
    },

    {
        id: 2,
        descricao: "Tanque De Combustível Plástico 55l + Boia - Compatível com Chevrolet Opala 1979",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_682943-MLB53179893577_012023-F-tanque-de-combustivel-plastico-55l-opala-ate-1991--boia.webp",
        link: "https://www.mercadolivre.com.br/up/MLBU1429004668?matt_tool=38524122&pdp_filters=item_id%3AMLB2751386503&ua=sYHx3zqluHl3F8xOwYkx0xikYBky_qovCj4w1rZfT_mvohsn#origin=share&sid=share&wid=MLB2751386503&action=copy"
    },

    {
        id: 3,
        descricao: "Bomba Elétrica Carburado - Compatível com Chevrolet Opala 1979",
        imagem: "https://http2.mlstatic.com/D_Q_NP_858689-MLB79684601969_102024-R-bomba-eletrica-carro-carburado-opala-gol-f100-maverick-fusca.webp",
        link: "https://www.mercadolivre.com.br/up/MLBU747899769?matt_tool=38524122&pdp_filters=item_id%3AMLB2166712733&ua=uhZ6B3GdTRkbmOBjKpDgBG47-_FBLqJnSMSJuAZnfkM_FEf4#origin=share&sid=share&wid=MLB2166712733&action=copy"
    },

    {
        id: 4,
        descricao: "Par Farol Bloco Óptico Sealed Beam Ambos Lados - Compatível com Chevrolet Opala 1979",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_611002-MLB82605839554_032025-F-par-farol-bloco-optico-sealed-beam-kombi-fusca-opala-chevett.webp",
        link: "https://www.mercadolivre.com.br/up/MLBU3057771840?matt_tool=38524122&pdp_filters=item_id%3AMLB3995745391&ua=7EmtHsarT7oQKvd5fhu1kmEIleE3eXP7sy3_3H_udyiiBGkZ#origin=share&sid=share&wid=MLB3995745391&action=copy"
    }
];


// Local onde os cards serão exibidos
const lista = document.getElementById("lista-presentes");


// Cria os cards
presentes.forEach(presente => {

    const card = document.createElement("article");

    card.classList.add("card");

    card.innerHTML = `
        <img 
            class="card-image"
            src="${presente.imagem}"
            alt="${presente.descricao}"
        >

        <div class="card-content">

            <h3>
                ${presente.descricao}
            </h3>

            <a
                class="button"
                href="${presente.link}"
                target="_blank"
                rel="noopener noreferrer"
            >
                Ver presente
            </a>

        </div>
    `;

    lista.appendChild(card);
});