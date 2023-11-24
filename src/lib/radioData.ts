import { colors } from "./colors";


export interface FMRadio {
    radioId: string;
    radioFreq: string;
    radioTitle: string;
    radioColor: (typeof colors)[keyof typeof colors];
    radioCover: string;
  }
  
  export const fmRadios: FMRadio[] = [
    {
      radioId: '1',
      radioFreq: "98.3",
      radioTitle: "Radio Michi",
      radioColor: colors.yellow,
      radioCover: "https://seeded-session-images.scdn.co/v1/img/artist/7fToR8ShDX8PQQ554br2vx/de"
    },
    {
      radioId: '2',
      radioFreq: "103.3",
      radioTitle: "Antenne Bayern",
      radioColor: colors.green,
      radioCover: "https://seeded-session-images.scdn.co/v1/img/artist/7fToR8ShDX8PQQ554br2vx/de"
    },
    {
      radioId: '3',
      radioFreq: "103.3",
      radioTitle: "Bayern 3",
      radioColor: colors.rose,
      radioCover: "https://seeded-session-images.scdn.co/v1/img/artist/7fToR8ShDX8PQQ554br2vx/de"
    },
    {
      radioId: '4',
      radioFreq: "103.3",
      radioTitle: "Rock Antenne",
      radioColor: colors.blue,
      radioCover: "https://seeded-session-images.scdn.co/v1/img/artist/7fToR8ShDX8PQQ554br2vx/de"
    },
  ];
  