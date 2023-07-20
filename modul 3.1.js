use spotify

db.songs.insertMany(
    [{
        "_id": {
          "$oid": "64b5e7bf16bf0c0f767696be"
        },
        "title": "Shape of You",
        "artist": "Ed Sheeran",
        "album": "÷ (Divide)"
      },
      {
        "_id": {
          "$oid": "64b5e7bf16bf0c0f767696bf"
        },
        "title": "Believer",
        "artist": "Imagine Dragons",
        "album": "Evolve"
      },
      {
        "_id": {
          "$oid": "64b5e7bf16bf0c0f767696c0"
        },
        "title": "Uptown Funk",
        "artist": "Mark Ronson ft. Bruno Mars",
        "album": "Uptown Special"
      },
      {
        "_id": {
          "$oid": "64b5e7bf16bf0c0f767696c1"
        },
        "title": "Hello",
        "artist": "Adele",
        "album": "25"
      },
      {
        "_id": {
          "$oid": "64b5e7bf16bf0c0f767696c2"
        },
        "title": "Despacito",
        "artist": "Luis Fonsi ft. Daddy Yankee",
        "album": "Vida"
      },
      {
        "_id": {
          "$oid": "64b5e81a16bf0c0f767696c3"
        },
        "title": "Shape of You",
        "artist": "Ed Sheeran",
        "album": "÷ (Divide)"
      },
      {
        "_id": {
          "$oid": "64b5e81a16bf0c0f767696c4"
        },
        "title": "Believer",
        "artist": "Imagine Dragons",
        "album": "Evolve"
      },
      {
        "_id": {
          "$oid": "64b5e81a16bf0c0f767696c5"
        },
        "title": "Uptown Funk",
        "artist": "Mark Ronson ft. Bruno Mars",
        "album": "Uptown Special"
      },
      {
        "_id": {
          "$oid": "64b5e81a16bf0c0f767696c6"
        },
        "title": "Hello",
        "artist": "Adele",
        "album": "25"
      },
      {
        "_id": {
          "$oid": "64b5e81a16bf0c0f767696c7"
        },
        "title": "Despacito",
        "artist": "Luis Fonsi ft. Daddy Yankee",
        "album": "Vida"
      },
      {
        "_id": {
          "$oid": "64b5e81a16bf0c0f767696c8"
        },
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "album": "After Hours"
      },
      {
        "_id": {
          "$oid": "64b5e81a16bf0c0f767696c9"
        },
        "title": "Don't Start Now",
        "artist": "Dua Lipa",
        "album": "Future Nostalgia"
      },
      {
        "_id": {
          "$oid": "64b5e81a16bf0c0f767696ca"
        },
        "title": "Bad Guy",
        "artist": "Billie Eilish",
        "album": "When We All Fall Asleep, Where Do We Go?"
      },
      {
        "_id": {
          "$oid": "64b5e81a16bf0c0f767696cb"
        },
        "title": "Old Town Road",
        "artist": "Lil Nas X ft. Billy Ray Cyrus",
        "album": "7"
      },
      {
        "_id": {
          "$oid": "64b5e81a16bf0c0f767696cc"
        },
        "title": "Someone Like You",
        "artist": "Adele",
        "album": "21"
      }]
)

db.songs.find()

db.artists.insertMany(
    [{
        "_id": {
          "$oid": "64b5ea4116bf0c0f767696d7"
        },
        "name": "Ed Sheeran",
        "date_of_birth": "17 February 1991",
        "genres": [
          "Pop",
          "Folk",
          "R&B"
        ]
      },
      {
        "_id": {
          "$oid": "64b5ea4116bf0c0f767696d8"
        },
        "name": "Imagine Dragons",
        "date_of_birth": "14 September 1987",
        "genres": [
          "Pop rock",
          "Alternative rock"
        ]
      },
      {
        "_id": {
          "$oid": "64b5ea4116bf0c0f767696d9"
        },
        "name": "Mark Ronson",
        "date_of_birth": "4 September 1975",
        "genres": [
          "Pop",
          "R&B",
          "Funk"
        ]
      },
      {
        "_id": {
          "$oid": "64b5ea4116bf0c0f767696da"
        },
        "name": "Adele",
        "date_of_birth": "5 May 1988",
        "genres": [
          "Pop",
          "Soul"
        ]
      },
      {
        "_id": {
          "$oid": "64b5ea4116bf0c0f767696db"
        },
        "name": "Luis Fonsi",
        "date_of_birth": "15 April 1978",
        "genres": [
          "Latin",
          "Pop"
        ]
      },
      {
        "_id": {
          "$oid": "64b5ea4116bf0c0f767696dc"
        },
        "name": "The Weeknd",
        "date_of_birth": "16 February 1990",
        "genres": [
          "R&B",
          "Pop",
          "Synth-pop"
        ]
      },
      {
        "_id": {
          "$oid": "64b5ea4116bf0c0f767696dd"
        },
        "name": "Dua Lipa",
        "date_of_birth": "22 August 1995",
        "genres": [
          "Pop",
          "Dance",
          "Electropop"
        ]
      },
      {
        "_id": {
          "$oid": "64b5ea4116bf0c0f767696de"
        },
        "name": "Billie Eilish",
        "date_of_birth": "18 December 2001",
        "genres": [
          "Pop",
          "Electropop",
          "Alternative"
        ]
      },
      {
        "_id": {
          "$oid": "64b5ea4116bf0c0f767696df"
        },
        "name": "Lil Nas X",
        "date_of_birth": "9 April 1999",
        "genres": [
          "Hip hop",
          "Country rap",
          "Pop"
        ]
      },
      {
        "_id": {
          "$oid": "64b5ea4116bf0c0f767696e0"
        },
        "name": "Taylor Swift",
        "date_of_birth": "13 December 1989",
        "genres": [
          "Pop",
          "Country",
          "Synth-pop"
        ]
      }]
)

db.artists.find()

db.popular_song.insertMany(
    [{
        "_id": {
          "$oid": "64b5eae216bf0c0f767696e1"
        },
        "title": "Shape of You",
        "plays": 1000000,
        "period": "Last 30 days"
      },
      {
        "_id": {
          "$oid": "64b5eae216bf0c0f767696e2"
        },
        "title": "Believer",
        "plays": 800000,
        "period": "Last 30 days"
      },
      {
        "_id": {
          "$oid": "64b5eae216bf0c0f767696e3"
        },
        "title": "Uptown Funk",
        "plays": 750000,
        "period": "Last 30 days"
      },
      {
        "_id": {
          "$oid": "64b5eae216bf0c0f767696e4"
        },
        "title": "Hello",
        "plays": 700000,
        "period": "Last 30 days"
      },
      {
        "_id": {
          "$oid": "64b5eae216bf0c0f767696e5"
        },
        "title": "Despacito",
        "plays": 650000,
        "period": "Last 30 days"
      },
      {
        "_id": {
          "$oid": "64b5eae216bf0c0f767696e6"
        },
        "title": "Blinding Lights",
        "plays": 600000,
        "period": "Last 30 days"
      },
      {
        "_id": {
          "$oid": "64b5eae216bf0c0f767696e7"
        },
        "title": "Don't Start Now",
        "plays": 550000,
        "period": "Last 30 days"
      },
      {
        "_id": {
          "$oid": "64b5eae216bf0c0f767696e8"
        },
        "title": "Bad Guy",
        "plays": 500000,
        "period": "Last 30 days"
      },
      {
        "_id": {
          "$oid": "64b5eae216bf0c0f767696e9"
        },
        "title": "Old Town Road",
        "plays": 450000,
        "period": "Last 30 days"
      },
      {
        "_id": {
          "$oid": "64b5eae216bf0c0f767696ea"
        },
        "title": "Someone Like You",
        "plays": 400000,
        "period": "Last 30 days"
      }]
)

db.popular_song.find()