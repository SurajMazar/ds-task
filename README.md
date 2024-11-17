# Review Screen page

This is a user interface for reviewing and confirming extracted data for which the document the user has uploaded. The
required images and data dumps are attached in
this [gDrive](https://drive.google.com/file/d/1vVayeGVpiTakSljgAH2xKcCS_s3L32Io/view?usp=sharing). The data dumps have
more api dumps but focus only on the mentioned data below.
For completing this assessment you can focus on the page itself and ignore the header functionalities. The header can
simply be with title alone

### Further details of the task can be found [here](https://docs.google.com/document/d/1Pn6U214pQohOOCt8bJsDQRLAnGtAi-PpbZa7YJnXEZU)

## TECHNOLOGY STACK

| Title                 | Details                                                                                                                                     |
|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| Programming Languages | Typescript, HTML , Scss                                                                                                                     |
| Runtime Environment   | [Node 20](https://nodejs.org/en/blog/release/v20.9.0)                                                                                       |
| Framework             | [Next JS](https://nextjs.org),[Tailwindcss](https://tailwindcss.com/docs/installation), [Antd -  UI library for react](https://ant.design/) |
| Other Packages Used   | Axios, React query, Lodash, Prettier , Eslint, Lint Staged, React redux, Redux toolkit                                                      |
| Version Control       | Github, [Husky](https://typicode.github.io/husky/get-started.html) (For pre-commit hooks)                                                   |

# Project setup

**Step 1:** Clone the repository.
```
git clone ${repo url}
```

**Step 2:** Install dependencies

```
yarn install
```

**Step 3:** Start the project

```
yarn dev
```

**Step 4:** The project is up and running on [link](http://localhost:3000)

### Project Structure
```plaintext
src
├── @types               # TypeScript type definitions
│   ├── container        # Type definitions for containers
│   ├── model            # Type definitions for models
│   └── store            # Type definitions for store
├── app                  # Application entry point and global styles
│   ├── api              # API configurations and services
│   ├── fonts            # Font files
│   ├── favicon.ico      # Favicon for the app
│   ├── globals.scss     # Global SCSS styles
│   ├── layout.tsx       # Layout component
│   └── page.tsx         # Main page component
├── components           # Reusable UI components
│   ├── documentViewer   # Document viewer component
│   ├── sidebar          # Sidebar component
│   └── zoomChanger      # Zoom changer component
├── containers           # High-order components, contexts, and layouts
│   ├── context          # Context providers
│   │   └── DocumentViewerContext
│   ├── hoc              # Higher-order components
│   │   ├── AntdRegistry
│   │   ├── ReactQueryContainer
│   │   └── Redux
│   └── layouts          # Layout components
│       └── appLayout
├── core                 # Core utilities, services, and store configurations
│   ├── hooks            # Custom hooks
│   │   ├── useArrayObj.ts
│   │   ├── useDocumentViewerContext.ts
│   │   └── useTheme.ts
│   ├── service          # Service layer for API calls and data handling
│   │   └── data.service.ts
│   └── store            # Redux store configuration
│       ├── slice
│       │   └── appConfig.slice.ts
│       └── store.ts
├── settings             # Project configuration files and constants
│   ├── config           # Configurations (e.g., React Query)
│   │   └── react-query.config.ts
│   ├── constant         # Constant values used throughout the project
│   │   ├── colors.constant.ts
│   │   └── defaultSections.constant.tsx
│   └── mock             # Mock data for api
└── utils                # Utility functions
    └── color.utils.ts
```

## Function requirements included
- Optionally include a toggle at the header for dark and light modes (to assess theme experience).
- Using codebase with typescript support is appreciable.
- Run Google Lighthouse locally or with a deployed version and attach a screenshot of the insights in the Readme.

## Lighthouse Insights
![image](https://github.com/user-attachments/assets/92de4247-d495-4d14-8175-92442fae0d40)


## Deployment
The application is currently hosted at.
[https://ds-task.vercel.app/](https://ds-task.vercel.app/)
