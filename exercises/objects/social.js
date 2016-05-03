var powerRanger = {
    name: "Jason",
    age: 17,
    colors: ["Red"],
    beasts: ["T-Rex", "Ape"],
    villainsDefeated: ["Rita", "Zed", "Goldar"],
    rangersHookedUpWith: [
        {
            name: "Kim",
            age: 16,
            colors: ["Pink"],
            beasts: ["Pterodactyl", "Crane"],
            villainsDefeated: ["Finster", "Scorpina"],
            otherRangersHookedUpWith: [

                {
                    name: "Zack",
                    age: 17,
                    colors: ["Black"],
                    beasts: ["Mastodon", "Frog"],
                    villainsDefated: [{}]
                },
                {
                    name: "Tommy",
                    age: 17,
                    colors: ["Green", "White"],
                    beasts: ["Dragon", "White Tiger"],
                    villainsDefeated: ["Squatt", "Baboo", "Master Vile", "Lokar"]
                },
                {
                    name: "Trini",
                    age: 16,
                    colors: ["Yellow"],
                    beasts: ["Sabertooth Tiger", "Bear"],
                    villainsDefeated: ["Hydro Hog"]
                },

            ]
        }
    ]
}


console.log(powerRanger.rangersHookedUpWith[0].otherRangersHookedUpWith.length);