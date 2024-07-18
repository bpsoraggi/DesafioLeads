<a id="readme-top"></a>

![.Net](https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MicrosoftSQLServer](https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

# Full Stack .NET Challenge
This repository contains a Full Stack .NET application developed as a challenge to create a lead management user interface for a fictional company. The application is structured as a Single Page Application (SPA) using React for the frontend, and .NET Core 6 for the backend with a SQL Server database.

## Features

### Invited Tab
Displays all leads in the 'new' status. Each lead is represented as a card, shown in the screenshot below (right), along with a screenshot of the provided example in the challenge's instructions (left).

| Provided example | Developed UI |
|:---:|:---:|
| ![Example](https://github.com/bpsoraggi/DesafioLeads/blob/master/imgs/InvitedTabEXAMPLE.png) | ![Developed](https://github.com/bpsoraggi/DesafioLeads/blob/master/imgs/InvitedTab.png) |

Along with the lead's information, each card also contains the following buttons:
- **Accept:** Updates the lead status to 'accepted' and applies a 10% discount if the price is over $500. Sends a notification email (simulated by a .txt file).
- **Decline:** Updates the lead status to 'declined'.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Accepted Tab
Displays all leads in the 'accepted' status. Each lead is represented as a card with additional contact information.

| Provided example | Developed UI |
|:---:|:---:|
| ![Example](https://github.com/bpsoraggi/DesafioLeads/blob/master/imgs/AcceptedTabEXAMPLE.png) | ![Developed](https://github.com/bpsoraggi/DesafioLeads/blob/master/imgs/AcceptedTab.png) |

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Getting Started

### Prerequisites
- [.NET 6 SDK](https://dotnet.microsoft.com/pt-br/download/dotnet/6.0)
- [Node.js](https://nodejs.org/pt) (for React app)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

### Installation
1. Clone the repository: \
    ``git clone https://github.com/bpsoraggi/DesafioLeads.git``

2. Set up the database:
    - Create a SQL Server database
    - Populate the database
    - Update the connection string in ``LeadsFullStack.API/appsettings.json``

3. Run the API:
    ```Shell
    dotnet restore
    dotnet run
    ```

4. Run the React app:
    ```Shell
    cd ../LeadsFullStack.Client
    npm install
    npm start
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
