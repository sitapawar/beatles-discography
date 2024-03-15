# React Studio

Use this stencil code to get started!

Make sure you're signed into your GitHub account (either real or anonymous is fine for this).

If you do not follow these three steps, your react app WILL NOT DEPLOY CORRECTLY!

1) Start to copy the stencil by clicking the green **"Use this template"** button above.

2) In the configuration menu, set the name to `react-studio` and **make it Public**

3) Lastly, you MUST **check "Include all branches"**

Then, click "create repository from template" to create the repo in your github account. You can now clone the repository onto your local computer and open it in your editor of choice.

## Getting started

First, make sure you install all dependencies by running `npm install` in the project directory.

Then, in the project directory, you can run `npm start` to run the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

You may also see any lint errors in the console.

## Deploying

### Creating a Vercel Account
1. Navigate to https://vercel.com/ 
2. Sign up with your Github account: 
    - Click Signup in upper right hand corner
    - Select “Hobby” for plan type
    - Enter name and press continue
    - Select “Continue with GitHub” 
        - Log in to Github via the prompt
        - Click “Authorize Vercel” and follow any verification instructions
3. Once you have successfully registered, you should see the option to either Install or Import Project via git provider
    - If it says install Github, go through the installation instructions
    - You may choose to install all repositories or only the one you wish to deploy


### React and HTML/CSS Deployment with Vercel
1. Navigate to https://vercel.com/
2. Login or create a Vercel account as detailed above 
3. Select the github repo you wish to deploy and choose “Import”.
    - You will be greeted with a Configure Project page. You do not need to change the Build and Output Settings or Environment Variables. Simply name your project and select “Deploy”.
    - You will see a loading icon while the deployment is processing. When the deployment is complete, you will see a success message.
    - Click “Continue to Dashboard” in order to view your website url, which will look something like xxx.vercel.app under the Domains heading (not to be confused with the Deployment url).
