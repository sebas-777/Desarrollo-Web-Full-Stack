sequenceDiagram
    participant browser
    participant server 

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser:HTML document
    deactivate server

   
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    {
    "content": "963",
    "date": "2023-12-19T12:22:58.030Z"
    }
    deactivate server 
     
      Note right of browser: The browser executes the callback function that renders the notes

