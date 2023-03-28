import React, { createContext, useEffect, useState } from "react";
import Navigator from "./stack/homeStack";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeContext = createContext();

const App = () => {
  const [reisen, setReisen] = useState();
  const [tasks, setTasks] = useState();
  const [backgroundImageNumber, setBackgroundImageNumber] = useState(1);
  const [profile, setProfile] = useState({});

  const [fontsLoaded] = useFonts({
    Bold: require("./assets/fonts/SF-Pro-Rounded-Bold.otf"),
    Medium: require("./assets/fonts/SF-Pro-Rounded-Medium.otf"),
    Light: require("./assets/fonts/SF-Pro-Rounded-Light.otf"),
    Regular: require("./assets/fonts/SF-Pro-Rounded-Regular.otf"),
  });

  useEffect(() => {
    async function getDataFromStorage() {
      let tempReisen = await AsyncStorage.getItem("reisen");
      let tempTasks = await AsyncStorage.getItem("tasks");
      let tempBackgroundImageNumber = await AsyncStorage.getItem("backgroundImageNumber");
      let tempProfile = await AsyncStorage.getItem("profile");

      // await AsyncStorage.clear();

      const defaultReisen = [
        {
          startDate: "2023-03-26T17:09:20.187Z",
          thumbnail: "file:///data/user/0/host.exp.exponent/cache/ImagePicker/d9b48172-518f-44ab-82db-62a8bec0b422.jpeg",
          endDate: "2023-03-31T17:09:20.187Z",
          reiseTitel: "Barcelona",
          reiseLand: { string: "Barcelona, Spain", countryId: "8774" },
          reiseBeschreibung: "Ende der Sommerferien reisten wir nach Barcelona. Das war unser zweiter Urlaub gemeinsam in Spanien und war voller neuer Überraschungen!",
          reiseId: "Iyxnkg6cLQ",
          reiseTage: [
            {
              reiseTagId: "mKVZUHJTSH",
              reiseTagDate: "2023-03-26T17:09:20.187Z",
              reiseEntries: [
                {
                  tagebuchEintragId: "44HoHtzUlV",
                  tagebuchEintragTime: "2023-03-26T17:13:09.962Z",
                  tagebuchEintragZiel: "",
                  tagebuchEintragImages: [
                    "file:///data/user/0/host.exp.exponent/cache/ImagePicker/e8c3b874-c104-43b7-8655-55d6633e8d31.jpeg",
                    "file:///data/user/0/host.exp.exponent/cache/ImagePicker/7f2028e3-f239-4fe5-a8dc-bd31c8435369.jpeg",
                    "file:///data/user/0/host.exp.exponent/cache/ImagePicker/d91e8a1d-3dcf-4649-b107-46178b1390c8.jpeg",
                  ],
                  tagebucheintragTitle: "Anreise",
                  tagebucheintragBody:
                    "Heute sind wir endlich in Barcelona angekommen! Unser Flug hat um 21:25 am Aeroport de Barcelona-El Prat gelandet und wir haben uns danach sofort auf die Suche nach einem Öffi-Ticket gemacht. Es war gar nicht so einfach, aber wir haben es schlussendlich geschafft. Unser Airbnb-Zimmer ist ziemlich klein, aber wir haben uns trotzdem kurzzeitig niedergelassen und sind dann direkt losgezogen, um die Stadt zu erkunden. Zuallererst haben wir eine Schüssel Ramen gegessen und uns gestärkt, bevor wir uns auf den Weg zum Strand gemacht haben. Wir sind eine Weile am Wasser entlang spaziert und haben dabei drei nette Schweizer kennengelernt. Schließlich sind wir zurück zum Apartment gegangen, um uns auszuruhen und den Tag Revue passieren zu lassen. Ich bin schon gespannt, was uns morgen alles erwartet!",
                  rating: 5,
                },
                {
                  tagebuchEintragId: "duC9h4bveJ",
                  tagebuchEintragTime: "2023-03-26T17:16:29.241Z",
                  tagebuchEintragZiel: "",
                  tagebucheintragTitle: "Shopping",
                  tagebuchEintragImages: ["file:///data/user/0/host.exp.exponent/cache/ImagePicker/3445d76c-666c-4e22-bd44-bb7c440269c3.jpeg"],
                  tagebucheintragBody:
                    "Heute haben wir eine Shopping-Tour auf der La Rambla gemacht und uns den Mercat de la Boqueria angesehen. Es war wirklich interessant, aber auch ein wenig seltsam, da es dort Lebensmittel wie Schafsköpfe gab. Wir haben uns stattdessen für frisches Obst, Gemüse, Smoothies und exotische Gewürze entschieden. Auf dem Markt haben wir auch ein paar nette Leute kennengelernt. Anschließend sind wir noch in einige Kleidungs-Stores gegangen und ich habe mir ein Kleid gekauft. Gegen 19 Uhr sind wir zurück ins Apartment gegangen, um uns auszuruhen. Später haben wir beschlossen, in einen Club zu gehen. Leider wurde Verenas Handy gestohlen, was wirklich ärgerlich war. Trotzdem haben wir auch in diesem Club noch einige nette Leute kennengelernt. Um 8 Uhr morgens waren wir dann endlich zurück im Zimmer und haben uns schlafen gelegt. Was für ein ereignisreicher Tag!",
                  rating: 3,
                },
                {
                  tagebuchEintragId: "bLQxePLuK2",
                  tagebuchEintragTime: "2023-03-26T17:17:30.313Z",
                  tagebuchEintragZiel: "",
                  tagebucheintragTitle: "City Walk",
                  tagebucheintragBody:
                    "Am dritten Tag sind wir sehr spät aufgestanden, da wir die Nacht zuvor so lange unterwegs waren. Wir haben uns sofort auf die Suche nach einem Mittagessen gemacht und sind schließlich um 15 Uhr in einem Strandrestaurant fündig geworden. Der Salat und das Dessert waren wirklich köstlich! Danach haben wir versucht, Verenas gestohlenes Handy zu orten und sind dafür zu Fuß durch die Stadt gelaufen. Das war sehr anstrengend, da es draußen sehr heiß war. Zur Sonnenuntergangszeit haben wir dann die Schweizer vom ersten Tag am Strand getroffen und den Sonnenuntergang gemeinsam genossen.Nach einem kleinen Abendessen sind wir zurück ins Zimmer gegangen, um uns auszuruhen. Später haben wir beschlossen, in einen Club zu gehen, wo großartige Musik gespielt wurde. Wir haben bis 5 Uhr morgens getanzt, bevor wir wieder ins Zimmer zurückgekehrt sind. ",
                  tagebuchEintragImages: ["file:///data/user/0/host.exp.exponent/cache/ImagePicker/3b5d0da3-03cd-469b-b773-8e55abdd8589.jpeg"],
                  rating: 4,
                },
              ],
            },
            { reiseTagId: "zSwKCBsZNy", reiseTagDate: "2023-03-27T17:09:20.187Z", reiseEntries: [] },
            { reiseTagId: "UkH7vq8mEW", reiseTagDate: "2023-03-28T17:09:20.187Z", reiseEntries: [] },
            { reiseTagId: "erPSV9wNwZ", reiseTagDate: "2023-03-29T17:09:20.187Z", reiseEntries: [] },
            { reiseTagId: "TmOnaxvTor", reiseTagDate: "2023-03-30T17:09:20.187Z", reiseEntries: [] },
            { reiseTagId: "pUCwhoNMWN", reiseTagDate: "2023-03-31T17:09:20.187Z", reiseEntries: [] },
          ],
        },
      ];

      if (tempReisen !== null) {
        setReisen(JSON.parse(tempReisen));
      } else {
        setReisen(defaultReisen);
        await AsyncStorage.setItem("reisen", JSON.stringify(defaultReisen));
      }

      if (tempTasks !== null) {
        setTasks(JSON.parse(tempTasks));
      } else {
        setTasks([]);
      }

      if (tempBackgroundImageNumber !== null) {
        setBackgroundImageNumber(JSON.parse(tempBackgroundImageNumber));
      } else {
        setBackgroundImageNumber(1);
      }

      if (tempProfile !== null) {
        setProfile(JSON.parse(tempProfile));
      } else {
        setProfile({});
      }
    }

    getDataFromStorage();
  }, []);

  if (!fontsLoaded) return null;

  return (
    <storeContext.Provider value={{ reisenContext: [reisen, setReisen], tasksContext: [tasks, setTasks], backgroundContext: [backgroundImageNumber, setBackgroundImageNumber], profileContext: [profile, setProfile] }}>
      <Navigator />
    </storeContext.Provider>
  );
};

export default App;
