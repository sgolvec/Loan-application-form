# dashcreate


### Running the app

Pretty straight forward stuff,

- Run `yarn` to install all dependencies
- Run `yarn dev` to start the server which is accessible at `http://localhost:3000`

&nbsp;

### Pushing to Production
Pushing the project live is pretty easy, its currently hosted on [vercel](https://www.vercel.com). Once any code is pushed to master, it builds and launches automatically to vercel and available at [the dashcreate website](https://www.dashcreate.design).

To push to main,
- Push your branch online and make a PR to the `main` branch. 
- Once the PR has been approved, you can merge to main and the website will be deployed

&nbsp;

### NOTE!!!
- Run `yarn build` locally before pushing any change in any branch, to make sure the code builds successfully locally. If it dosen't build locally, it won't build when pushed online either.
