## About
---

This is a basic Next.js application that shows characters from the Rick and Morty Api, along with links that takes them to their own page. The pages are dynamically created using Next.js's pagination system.

The characters on the top under "Statically generated characters" are static pages that are created at build time.

The images on the bottom under "Server Side generated characters" are server side pages that are served at load time.

This is based on the tutorial [Learn Next.js With TypeScript in 30 Minutes](https://www.youtube.com/watch?v=OTuHnVvxTDs) by [TomDoesTech](https://www.youtube.com/c/TomDoesTech) on Youtube.

---
## Steps

### <u>File creation and index.tsx</u>

1. Create the file with: 
    ```
    yarn create next-app nextexample2 --typescript
    ```
    where 'nextexample2' is the name of the project.
1. In the index.tsx file create the getStaticProps function which is going to be of typescript type GetStaticProps imported from next.
1. console.log the result that you get from the res.json() of the fetch request in the getStaticProps function, you will see the result in your terminal, not chrome.
1. Copy the first element of it and put it in app.quicktype.io. Then chose typescript, chose 'interfaces only' in the menu. Copy the resulting interfaces.
1. Create a new file in the root of your project called types.ts. Paste the resulting interfaces from quicktype.io and rename the interfaces to something that makes sense. 
1. In the Home function you can add the generic <{characters: Character[]}> after NextPage. The 'Character' in Character[] is imported from the types.ts you just made. Remember to still put {characters} as an argument in the function despite the generic typing of NextPage.
1. Create the JSX elements of the page. Create a ImageContainer component use that to hold the images in index.tsx.
1. The image container portion uses four attributes, the characters, id that the character.id must be greaterthan, the id that character.id must be less than and the link type (whether it should be static pages or dynamically generated pages).
1. Be sure to create an imageLoader.ts which has the imageLoader to be used by the Image component from next/image. Also in the next.config.js, add
    ```typescript
    image:{
        domains: ['http://rickandmortyapi.com'],
        loader: 'custom',
        path: '/'
    }
    ```
1. Create an ImageContainer.module.css in the styles directory and add the css for the imageContainer in it. Also add the css for the index.tsx in Home.module.css. 
1. In package.json add "&& next export" after "next build". Then on running the 'yarn build' command in terminal, an 'out' folder will be created where the files will be created that can be hosted on your server.
1. Test them with the command 'npx serve out -p 5000' and then look at the site at 'http://localhost:5000' to ensure everything is working as expected.
