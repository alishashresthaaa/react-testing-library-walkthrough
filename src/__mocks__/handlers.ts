import { rest } from "msw";

export const handlers = [
  rest.get("https://randomuser.me/api", (req, res, ctx) => {
    // Use context to set status, headers, json you want to send with response
    return res(
      ctx.status(200),
      // Match esact response we get back from server
      ctx.json({
        results: [
          {
            gender: "male",
            name: {
              title: "Mr",
              first: "آدرین",
              last: "نكو نظر",
            },
            location: {
              street: {
                number: 3037,
                name: "شهید استاد حسن بنا",
              },
              city: "تهران",
              state: "ایلام",
              country: "Iran",
              postcode: 51577,
              coordinates: {
                latitude: "20.5391",
                longitude: "-150.0267",
              },
              timezone: {
                offset: "+10:00",
                description: "Eastern Australia, Guam, Vladivostok",
              },
            },
            email: "adryn.nkwnzr@example.com",
            login: {
              uuid: "0bf46527-2ab4-4fe2-9bcd-ccaedba49983",
              username: "silversnake820",
              password: "rasputin",
              salt: "jOUt05kL",
              md5: "b52a9c82261b7e407f5700f0757d520c",
              sha1: "2197f95176e914b3b962fa0519571f407cad65c0",
              sha256:
                "43c3c4015c8b9ae9a3daa94817c6fa45eefc1944da77042aacf4a7f2d97a9efb",
            },
            dob: {
              date: "1990-02-19T19:12:27.579Z",
              age: 32,
            },
            registered: {
              date: "2015-09-17T22:45:43.976Z",
              age: 6,
            },
            phone: "086-62555252",
            cell: "0915-580-4860",
            id: {
              name: "",
              value: null,
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/88.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/88.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/88.jpg",
            },
            nat: "IR",
          },
          {
            gender: "female",
            name: {
              title: "Miss",
              first: "Lorena",
              last: "Diez",
            },
            location: {
              street: {
                number: 8280,
                name: "Calle de Atocha",
              },
              city: "Talavera de la Reina",
              state: "Cataluña",
              country: "Spain",
              postcode: 49547,
              coordinates: {
                latitude: "5.8848",
                longitude: "-97.2566",
              },
              timezone: {
                offset: "+9:30",
                description: "Adelaide, Darwin",
              },
            },
            email: "lorena.diez@example.com",
            login: {
              uuid: "188d07da-14d8-432e-96d5-72f337aff63c",
              username: "brownsnake292",
              password: "havefun",
              salt: "j9nmCP08",
              md5: "8a64b17294dca8ae9576acb8a4265492",
              sha1: "3d4a4d3b7b421b307a60849bbcee3cd0548a50f2",
              sha256:
                "13dacad7c9ab9ecee939895ddb2f75c8283e01282f1d6e770003b83edde6800a",
            },
            dob: {
              date: "1979-04-22T17:35:13.458Z",
              age: 43,
            },
            registered: {
              date: "2008-02-22T23:41:53.381Z",
              age: 14,
            },
            phone: "902-135-972",
            cell: "637-870-247",
            id: {
              name: "DNI",
              value: "78322278-V",
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/65.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/65.jpg",
              thumbnail:
                "https://randomuser.me/api/portraits/thumb/women/65.jpg",
            },
            nat: "ES",
          },
          {
            gender: "female",
            name: {
              title: "Ms",
              first: "Sneha",
              last: "Kaur",
            },
            location: {
              street: {
                number: 4141,
                name: "Dwaraka Nagar",
              },
              city: "Dindigul",
              state: "Chhattisgarh",
              country: "India",
              postcode: 22303,
              coordinates: {
                latitude: "-51.5958",
                longitude: "39.8184",
              },
              timezone: {
                offset: "-5:00",
                description: "Eastern Time (US & Canada), Bogota, Lima",
              },
            },
            email: "sneha.kaur@example.com",
            login: {
              uuid: "4a03159f-b44c-4dc1-87cb-d6343ccd8dd6",
              username: "redmouse155",
              password: "robot",
              salt: "NLmOgD9O",
              md5: "c2e90d4ae65ea2800d99290104f46873",
              sha1: "2712b900e0a8dbb88624c36991cd6a9dc4ca4114",
              sha256:
                "ae8c49f27d1dbe7d46a0d021b88d8d0a552b33d60a9c3f07c9a7c32c1b613a77",
            },
            dob: {
              date: "1945-04-18T21:16:13.448Z",
              age: 77,
            },
            registered: {
              date: "2003-03-09T18:38:42.952Z",
              age: 19,
            },
            phone: "8579698713",
            cell: "7005667850",
            id: {
              name: "UIDAI",
              value: "280473026014",
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/1.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/1.jpg",
              thumbnail:
                "https://randomuser.me/api/portraits/thumb/women/1.jpg",
            },
            nat: "IN",
          },
          {
            gender: "male",
            name: {
              title: "Mr",
              first: "Martín",
              last: "Ibáñez",
            },
            location: {
              street: {
                number: 3009,
                name: "Calle Covadonga",
              },
              city: "Móstoles",
              state: "Comunidad de Madrid",
              country: "Spain",
              postcode: 28722,
              coordinates: {
                latitude: "65.0574",
                longitude: "-89.6734",
              },
              timezone: {
                offset: "-2:00",
                description: "Mid-Atlantic",
              },
            },
            email: "martin.ibanez@example.com",
            login: {
              uuid: "64422a93-a17f-4aca-a000-098cfafeb253",
              username: "tinygoose651",
              password: "coventry",
              salt: "1MrPyo0O",
              md5: "7689309c7a0bf1720e53bd7a1ad5036f",
              sha1: "e2129f9718288766ad4bca2723d85a67f2e6e52a",
              sha256:
                "339a1b8ddc981079666ef3c129bf12b1f41b5e1c3de9f1e35bbc1e944bc111bf",
            },
            dob: {
              date: "1988-01-17T06:26:25.339Z",
              age: 34,
            },
            registered: {
              date: "2020-06-06T15:07:43.073Z",
              age: 2,
            },
            phone: "952-176-296",
            cell: "661-070-948",
            id: {
              name: "DNI",
              value: "58172467-Z",
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/69.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/69.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/69.jpg",
            },
            nat: "ES",
          },
          {
            gender: "male",
            name: {
              title: "Mr",
              first: "Nathaniel",
              last: "Lee",
            },
            location: {
              street: {
                number: 7608,
                name: "Broadway",
              },
              city: "Hamilton",
              state: "Auckland",
              country: "New Zealand",
              postcode: 50637,
              coordinates: {
                latitude: "-72.2878",
                longitude: "-159.7239",
              },
              timezone: {
                offset: "-1:00",
                description: "Azores, Cape Verde Islands",
              },
            },
            email: "nathaniel.lee@example.com",
            login: {
              uuid: "899bd903-d07c-4504-a037-40c7643973d9",
              username: "whitewolf981",
              password: "beetle",
              salt: "IVRs07iO",
              md5: "99303e8f4107f9c074288a38b28775ad",
              sha1: "574d6b45b7dc57bbfc684ec08e106609d3bd2de6",
              sha256:
                "5102b690f55e08f63edd67613d94763c371cf82db10100a6833fd0ed736a055c",
            },
            dob: {
              date: "1947-01-27T23:20:15.553Z",
              age: 75,
            },
            registered: {
              date: "2014-03-04T20:52:39.463Z",
              age: 8,
            },
            phone: "(251)-996-0169",
            cell: "(564)-387-0506",
            id: {
              name: "",
              value: null,
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/79.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/79.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/79.jpg",
            },
            nat: "NZ",
          },
        ],
        info: {
          seed: "80562a30bf87b50b",
          results: 5,
          page: 1,
          version: "1.4",
        },
      })
    );
  }),
];
