# **Azure AD Authentication in NestJS**

![Compile and build](https://github.com/SwagataChaudhuri/NestJS-AzureAD-Authentication/actions/workflows/build.yml/badge.svg)
[![codecov](https://codecov.io/github/SwagataChaudhuri/NestJS-AzureAD-Authentication/branch/main/graph/badge.svg?token=B0TFMBOQM2)](https://codecov.io/github/SwagataChaudhuri/NestJS-AzureAD-Authentication)
![Prettier](https://img.shields.io/badge/Code%20style-prettier-informational?logo=prettier&logoColor=white)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![HitCount](https://hits.dwyl.com/swagatachaudhuri/NestJS-AzureAD-Authentication.svg?style=flat-square)](http://hits.dwyl.com/swagatachaudhuri/NestJS-AzureAD-Authentication)

Sample implementation to demonstrate how to implement Azure Active Directory authentication in NestJS using custom strategies.

---

## **Description**

This repository contains a sample implementation of `Azure AD` authentication in `NestJS` using custom strategies. The sample implementation is based on the [NestJS official documentation](https://docs.nestjs.com/techniques/authentication#implementing-passport-strategies) wuth customization to interact and authenticate with Azure Active Directory.

---

## **Installation**

```bash
$ npm install
```
---

## **Configuration**

This application has a .env.example file. Please create a .env file and update the values as per the Azure AD application registration. The below table describes the environment variables used in the application:

| Environment Variable | Description                     |
| -------------------- | ------------------------------- |
| `AZURE_AD_TENANTID`  | Azure AD Tenant ID              |
| `AZURE_AD_CLIENTID`  | Azure AD Application Client ID  |
| `AZURE_AD_AUDIENCE`  | Azure AD Token Audience         |

---

## **Running the application**

The application can be run in two modes, `development` and `production`. The `development` mode supports hot reloading which is beneficial during development. The `production` mode is optimized for performance.

The root directory also comtains a `Dockerfile` which can be used to build a docker image of the application for containerization.

### **Development Mode**

Execute the below command to run the application in development mode:

```bash
$ npm run start:dev
```

### **Production Mode**

Execute the below command to run the application in production mode:

```
$ npm run start:prod
```

## **Testing**

The application has tests configured using `Jest`. The tests are located in the `test` directory. The tests are also configured to generate coverage reports. The coverage reports are generated in the `coverage` directory.

### **Unit Tests**

Execute the below command to run the unit tests:

```bash
$ npm run test
```
### **Coverage Reports**

Execute the below command to run the tests and generate the coverage reports:

```bash
$ npm run test:cov
```
---

## **License**

The application and all associated source code are distributed under the [MIT License](LICENSE).

---

## **Author**

[Swagata Chaudhuri]()

---

## **Support**

In case you find the project helpful, please consider supporting by ⭐ the project.

---

## **Contributing**

Contributions are welcome! Please feel free to submit a Pull Request in case you find any issues with the code.

---

## **Acknowledgements**

- [NestJS](https://nestjs.com/)
- [Jest](https://jestjs.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Azure Active Directory](https://azure.microsoft.com/en-us/services/active-directory/)
- [Passport](http://www.passportjs.org/)