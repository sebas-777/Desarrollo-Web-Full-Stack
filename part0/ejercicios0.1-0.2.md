sequenceDiagram
    participant browser
    participant server 

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser:HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server 

    browser->>server: GEThttps://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the Javascript file
    deactivate server 

    browser->>server: GEThttps://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser:  [
  {
    "content": "",
    "date": "2023-12-19T03:34:45.695Z"
  },
  {
    "content": "",
    "date": "2023-12-19T03:34:46.249Z"
  },
  {
    "content": "",
    "date": "2023-12-19T03:34:55.218Z"
  },
  {
    "content": "",
    "date": "2023-12-19T03:34:55.765Z"
  },
  {
    "content": "new note",
    "date": "2023-12-19T03:41:30.752Z"
  },
  {
    "content": "zz",
    "date": "2023-12-19T03:42:54.436Z"
  },
  {
    "content": "kdfkdldk fj",
    "date": "2023-12-19T03:54:51.037Z"
  },
  {
    "content": "shshs",
    "date": "2023-12-19T03:55:06.102Z"
  },
  {
    "content": "KIJSHD",
    "date": "2023-12-19T04:09:19.820Z"
  },
  {
    "content": "yoyo",
    "date": "2023-12-19T04:44:46.474Z"
  },
  {
    "content": "hola",
    "date": "2023-12-19T04:46:14.414Z"
  },
  {
    "content": "aa",
    "date": "2023-12-19T04:46:55.655Z"
  },
  {
    "content": "hola",
    "date": "2023-12-19T04:47:25.583Z"
  },
  {
    "content": "kdjidlfj",
    "date": "2023-12-19T04:45:59.607Z"
  },
  {
    "content": "amsulekdjf",
    "date": "2023-12-19T04:46:16.184Z"
  },
  {
    "content": "PRUEBA",
    "date": "2023-12-19T04:53:30.206Z"
  },
  {
    "content": "jklaidjf",
    "date": "2023-12-19T04:53:07.057Z"
  },
  {
    "content": "fkdjdjs",
    "date": "2023-12-19T04:53:25.143Z"
  },
  {
    "content": "nsjdjkd",
    "date": "2023-12-19T04:53:41.939Z"
  },
  {
    "content": "PRUEBA",
    "date": "2023-12-19T04:57:00.860Z"
  },
  {
    "content": "PRUEBA",
    "date": "2023-12-19T04:57:29.088Z"
  },
  {
    "content": "jjsjd",
    "date": "2023-12-19T04:55:17.114Z"
  },
  {
    "content": "lk",
    "date": "2023-12-19T05:00:13.697Z"
  },
  {
    "content": "new",
    "date": "2023-12-19T05:07:21.879Z"
  },
  {
    "content": "hola",
    "date": "2023-12-19T05:13:37.756Z"
  },
  {
    "content": "dsadsa",
    "date": "2023-12-19T05:19:17.002Z"
  },
  {
    "content": "dsadsa",
    "date": "2023-12-19T05:21:03.872Z"
  },
  {
    "content": "PRUEBA",
    "date": "2023-12-19T05:22:08.232Z"
  },
  {
    "content": "hola",
    "date": "2023-12-19T05:22:36.504Z"
  },
  {
    "content": "sup",
    "date": "2023-12-19T05:35:53.045Z"
  },
  {
    "content": "que es esto ",
    "date": "2023-12-19T05:45:58.093Z"
  },
  {
    "content": "Hello Hell...o?",
    "date": "2023-12-19T05:48:43.834Z"
  },
  {
    "content": "test",
    "date": "2023-12-19T05:49:31.310Z"
  },
  {
    "content": "MAD",
    "date": "2023-12-19T06:13:27.128Z"
  },
  {
    "content": "A",
    "date": "2023-12-19T06:21:51.452Z"
  },
  {
    "content": "",
    "date": "2023-12-19T06:21:58.936Z"
  },
  {
    "content": "Hallo",
    "date": "2023-12-19T06:31:51.493Z"
  },
  {
    "content": "new note",
    "date": "2023-12-19T06:39:37.024Z"
  },
  {
    "content": "[21, 52, 63, \"elbicho\", \"siuuu\"]",
    "date": "2023-12-19T06:40:53.726Z"
  },
  {
    "content": "Selamat pagi dari Kalajoki, apa kabar",
    "date": "2023-12-19T06:43:58.275Z"
  },
  {
    "content": "aaasssaaa",
    "date": "2023-12-19T06:45:01.094Z"
  },
  {
    "content": "hi",
    "date": "2023-12-19T07:00:53.699Z"
  },
  {
    "content": "hiii",
    "date": "2023-12-19T07:01:23.274Z"
  },
  {
    "content": "",
    "date": "2023-12-19T07:09:28.675Z"
  },
  {
    "content": "",
    "date": "2023-12-19T07:09:30.266Z"
  },
  {
    "content": "hello",
    "date": "2023-12-19T07:10:22.650Z"
  },
  {
    "content": "newnotesfortesting bllahhhhh",
    "date": "2023-12-19T07:17:41.902Z"
  },
  {
    "content": "Anime",
    "date": "2023-12-19T07:48:26.352Z"
  },
  {
    "content": "que passa",
    "date": "2023-12-19T07:50:19.165Z"
  },
  {
    "content": "",
    "date": "2023-12-19T08:41:24.998Z"
  },
  {
    "content": "hello there",
    "date": "2023-12-19T08:50:28.814Z"
  },
  {
    "content": "",
    "date": "2023-12-19T09:00:26.262Z"
  },
  {
    "content": "",
    "date": "2023-12-19T09:03:49.667Z"
  },
  {
    "content": "123",
    "date": "2023-12-19T09:03:53.939Z"
  },
  {
    "content": "456",
    "date": "2023-12-19T09:04:06.603Z"
  },
  {
    "content": "j",
    "date": "2023-12-19T09:06:59.959Z"
  },
  {
    "content": "hello hello",
    "date": "2023-12-19T09:09:32.218Z"
  },
  {
    "content": "nueva entrada",
    "date": "2023-12-19T09:23:25.139Z"
  },
  {
    "content": "hi",
    "date": "2023-12-19T09:30:00.492Z"
  },
  {
    "content": "gg",
    "date": "2023-12-19T09:38:42.240Z"
  },
  {
    "content": "sdfsdfsdf",
    "date": "2023-12-19T09:39:00.660Z"
  },
  {
    "content": "dffdfdfdfd",
    "date": "2023-12-19T09:50:12.978Z"
  },
  {
    "content": "Ada terlalu banyak salju di sini",
    "date": "2023-12-19T09:54:02.404Z"
  },
  {
    "content": "testi",
    "date": "2023-12-19T10:01:48.653Z"
  },
  {
    "content": "testi",
    "date": "2023-12-19T10:07:03.667Z"
  },
  {
    "content": "Nepe",
    "date": "2023-12-19T10:10:01.444Z"
  },
  {
    "content": "2 nepe",
    "date": "2023-12-19T10:11:34.187Z"
  },
  {
    "content": "",
    "date": "2023-12-19T10:13:18.110Z"
  },
  {
    "content": "",
    "date": "2023-12-19T10:13:22.214Z"
  },
  {
    "content": "testi",
    "date": "2023-12-19T10:18:57.046Z"
  },
  {
    "content": "bruh",
    "date": "2023-12-19T10:19:44.745Z"
  },
  {
    "content": "ok",
    "date": "2023-12-19T10:20:18.733Z"
  },
  {
    "content": "toinen",
    "date": "2023-12-19T10:20:39.578Z"
  },
  {
    "content": "ESAT",
    "date": "2023-12-19T10:23:08.577Z"
  },
  {
    "content": "mk,",
    "date": "2023-12-19T10:24:41.175Z"
  },
  {
    "content": "hehe",
    "date": "2023-12-19T10:24:45.460Z"
  },
  {
    "content": ",m,.",
    "date": "2023-12-19T10:25:07.142Z"
  },
  {
    "content": "asas",
    "date": "2023-12-19T10:26:59.119Z"
  },
  {
    "content": "TEJA ",
    "date": "2023-12-19T10:29:16.879Z"
  },
  {
    "content": "Teja (Started 19 -12- 2023)",
    "date": "2023-12-19T10:30:39.299Z"
  },
  {
    "content": "kjbj,m",
    "date": "2023-12-19T10:31:39.595Z"
  },
  {
    "content": "",
    "date": "2023-12-19T10:43:32.303Z"
  },
  {
    "content": "",
    "date": "2023-12-19T10:43:59.257Z"
  },
  {
    "content": "",
    "date": "2023-12-19T10:44:15.297Z"
  },
  {
    "content": "",
    "date": "2023-12-19T10:44:42.431Z"
  },
  {
    "content": "",
    "date": "2023-12-19T10:47:20.954Z"
  },
  {
    "content": "Teja",
    "date": "2023-12-19T10:54:42.041Z"
  },
  {
    "content": "Teja (Started 19 -12- 2023)",
    "date": "2023-12-19T11:11:18.217Z"
  },
  {
    "content": "knl",
    "date": "2023-12-19T11:37:24.444Z"
  },
  {
    "content": "klmm",
    "date": "2023-12-19T11:37:50.479Z"
  },
  {
    "content": "test-1",
    "date": "2023-12-19T11:38:45.041Z"
  },
  {
    "content": "",
    "date": "2023-12-19T11:40:09.940Z"
  },
  {
    "content": "",
    "date": "2023-12-19T11:40:23.463Z"
  },
  {
    "content": "",
    "date": "2023-12-19T11:44:54.443Z"
  },
  {
    "content": "test1",
    "date": "2023-12-19T11:49:36.182Z"
  },
  {
    "content": "karthi",
    "date": "2023-12-19T12:01:28.212Z"
  },
  {
    "content": "BITCH",
    "date": "2023-12-19T12:12:25.118Z"
  },
  {
    "content": "hello asshole",
    "date": "2023-12-19T12:14:34.198Z"
  },
  {
    "content": "pussy",
    "date": "2023-12-19T12:15:42.598Z"
  },
  {
    "content": "852",
    "date": "2023-12-19T12:17:35.725Z"
  }
]
    deactivate server 
     
      Note right of browser: The browser executes the callback function that renders the notes

