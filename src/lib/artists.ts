import { colors } from "./colors";


export interface Artists {
    id: string;
    name: string;
    description: string;
    color: (typeof colors)[keyof typeof colors];
    cover: string;
}

export const artists: Artists[] = [
    {
        id: "1",
        name: "Redpestbeats",
        description: "Redpestbeats is a music producer from the UK who creates a variety of music from Hip Hop to Lo-Fi. He has been producing music for over 10 years and has a passion for creating music that is unique and different.",
        color: colors.indigo,
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/85/03/e1/8503e15c-49af-4ea0-1c6f-0df0b7b7219b/artwork.jpg/1200x1200bb.jpg",
    },
    {
        id: "2",
        name: "Justice",
        description: "Justice is a French electronic music duo consisting of Gaspard Augé and Xavier de Rosnay. The duo's label is Ed Banger Records, managed by Pedro Winter. Justice is known for incorporating a strong rock and indie influence into its music and image.",
        color: colors.blue,
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/62/e4/01/62e40187-e672-17e5-f31f-9aee262703a3/mzi.bifzeufu.jpg/486x486bb.png",
    },
    {
        id: "3",
        name: "Dorian Electra",
        description: "Dorian Electra is an American singer, songwriter, video and performance artist. Their music has been described as an intense take on pop music, and has been associated with genres such as bubblegum pop, EDM, and nightcore.",
        color: colors.emerald,
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/4a/0b/01/4a0b0115-d598-43c4-24d2-d3b31fa6d396/00196922655685_Cover.jpg/1200x1200bb.jpg",
    },
    {
        id: "4",
        name: "Lil Boom",
        description: "Lil Boom is an American rapper, singer, songwriter, and record producer. He is best known for his song 'Already Dead', which has over 100 million streams on Spotify and 50 million views on YouTube.",
        color: colors.orange,
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/c9/0f/82/c90f82e4-220b-ed9d-bb68-0681bdbfc658/859734440930_cover.jpg/486x486bb.png",
    },
    {
        id: "5",
        name: "Mol$",
        description: "Mol$ is a rapper from the UK who has been making music for over 10 years. He has released 3 albums and 2 EPs, and has collaborated with artists such as Lil Yachty, Lil Uzi Vert, and Lil Pump.",
        color: colors.red,
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f4/b4/32/f4b4323f-2075-0839-533c-a6bb923a1de3/193436337342_vaporgodcopy.jpg/486x486bb.png",
    },
    {
        id: "6",
        name: "Yung Gravy",
        description: "Yung Gravy is an American rapper, singer, songwriter, and record producer. He is best known for his song 'Mr. Clean', which has over 100 million streams on Spotify and 50 million views on YouTube.",
        color: colors.rose,
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/ba/aa/7d/baaa7dd0-c708-a7f3-0903-18ad2dedf43b/20UMGIM83854.rgb.jpg/486x486bb.png",
    },
    {
        id: "7",
        name: "Wonder",
        description: "Wonder is a music producer from the UK who creates a variety of music from Hip Hop to Lo-Fi. He has been producing music for over 10 years and has a passion for creating music that is unique and different.",
        color: colors.teal,
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/23/24/f2/2324f2b4-e38a-bde3-424f-1587f84e7a2a/artwork.jpg/1200x1200bb.jpg",
    },
    {
        id: "8",
        name: "Daft Punk",
        description: "Daft Punk are a French electronic music duo formed in Paris in 1993 by Guy-Manuel de Homem-Christo and Thomas Bangalter. They achieved popularity in the late 1990s as part of the French house movement; they also had success in the years following, combining elements of house music with funk, techno, disco, rock and synthpop.",
        color: colors.yellow,
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/ed/f9/01/edf90194-32cf-fe39-1b7e-bb42d0c4dea5/mza_4894750657028739591.png/486x486bb.png",
    },
    {
        id: "9",
        name: "Paulie Leparik",
        description: "Paulie Leparik is a music producer from the UK who creates a variety of music from Hip Hop to Lo-Fi. He has been producing music for over 10 years and has a passion for creating music that is unique and different.",
        color: colors.gray,
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/7a/71/35/7a71355c-5941-2692-f8a1-bf4fe41d1397/artwork.jpg/600x600bf-60.jpg",
    },
    {
        id: "10",
        name: "Bandingo YGNE",
        description: "Bandingo YGNE is a rapper from the UK who has been making music for over 10 years. He has released 3 albums and 2 EPs, and has collaborated with artists such as Lil Yachty, Lil Uzi Vert, and Lil Pump.",
        color: colors.blue,
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/8f/8b/f8/8f8bf8a3-0c46-4fc6-9cf0-a2fb2a888aab/artwork.jpg/1200x1200bb.jpg",
    },
    {
        id: "11",
        name: "KevGee",
        description: "KevGee is a music producer from the UK who creates a variety of music from Hip Hop to Lo-Fi. He has been producing music for over 10 years and has a passion for creating music that is unique and different.",
        color: colors.teal,
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/df/10/53/df105354-3f51-4fa4-fa26-26b56f7f1687/artwork.jpg/1200x1200bb.jpg",
    },
];
export default artists;