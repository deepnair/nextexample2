## About
---

This is a basic Next.js application that shows characters from the Rick and Morty Api, along with links that takes them to their own page. The pages are dynamically  created using Next.js's pagination system.

The characters on the top under "Statically generated characters" are static pages that are created at build time.

The images on the bottom under "Server Side generated characters" are server side pages that are served at load time.

This is based on the tutorial [Learn Next.js With TypeScript in 30 Minutes](https://www.youtube.com/watch?v=OTuHnVvxTDs) by [TomDoesTech](https://www.youtube.com/c/TomDoesTech) on Youtube.

---
## Steps

### File creation and index.tsx

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
1. The margin and padding is zeroed and box-sizing is border-box in the globals.css to avoid unexpected behavior.
1. The parent container in the Home.module.css uses display: flex with the flex-direction being column. The width is 80%, and margin is auto so it is centered. The title has a top and bottom margin of 10px and uses text-align: center.
1. In the ImageContainer.module.css, display: grid is used since the images will be of uniform size. grid-template-columns: repeat(3, 1fr) is used to ensure this. They are set to justify-content: space-between with text-align: center so that the three appear equi-distant while taking up the 80% width, with a little margin yet on either side.  
1. In package.json add "&& next export" after "next build". Then on running the 'yarn build' command in terminal, an 'out' folder will be created where the files will be created that can be hosted on your server.
1. Test them with the command 'npx serve out -p 5000' and then look at the site at 'http://localhost:5000' to ensure everything is working as expected.

### Static and Server Side rendered character pages

1. Create a folder called character/static/[id] in the pages directory and create an index.tsx in the directory.
1. Using 'rafce' create a function for the page.
1. Use getStaticPaths and create paths for the three images on the home page.
1. Note in the return of getStaticPaths it is expecting paths to be an array with objects of the format {params:{id:[string]}}. Make sure the value that you put in for [string] is converted toString if it is a number.
1. Use getStaticProps to get the props for the page.
1. Note if Typescript creates a problem for the context that is passed into the getStaticProps. Assert that the id in params in context is not null as follows:
    ```
    const id = context!.params!.id!
    ```
    This will get typescript to not create a problem.
1. Create a css module in the styles folder and use that in the className attribute of the parent div in the index.tsx to style the page.
1. Create a dynamic/[id]/index.tsx in the character folder in the pages directory.
1. This one won't require getStaticPaths, rather just getServerSideProps which acts almost identical to getStaticProps except that instead of context.params.id it would use context.query.id.
1. Since there is Server Side rendering in this, you won't be able to next export, so in the build function in package json, remove '&& next export' to make it just 'next build'.
1. To see if it works run 'yarn build' and then 'yarn start'. Nextjs will build your project and then run it using a Node environment. 
