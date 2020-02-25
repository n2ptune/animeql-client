# AnimeQL-Client

GraphQL Apollo Client와 Kitsu Open API 그리고 Vue.js를 활용한 풀스택 프로젝트입니다.  
This service is a full stack project using GraphQL Apollo Client, Kitsu Open API and Vue.

- [Kitsu Open API](https://kitsu.docs.apiary.io/)
- [Vue-Apollo Client](https://vue-apollo.netlify.com/)
- [GraphQL-Yoga](https://github.com/prisma-labs/graphql-yoga)
- [Vue 2.6.11](https://vuejs.org/)

프론트엔드(클라이언트)와 백엔드(서버)가 두개의 저장소로 나뉘어져 있습니다. 이 저장소는 프론트엔드(클라이언트) 저장소 이며 GraphQL Yoga로 구성된 서버 저장소는 아래의 링크를 참고하시면 됩니다.  
Separated the front-end and back-end repositories. this repository is front-end. here [Back-End Repository (With GraphQL Yoga)](https://github.com/n2ptune/animeql-server)

## Development

개발 목적이라면 클라이언트와 서버가 필요합니다.  
Developing this service requires a server and a client.

`git clone` 명령어로 아래 두개의 저장소(클라이언트와 서버)를 다운로드 받으세요.  
Download the repository from the two repositories using the `git clone` command.

- [https://github.com/n2ptune/animeql-client](https://github.com/n2ptune/animeql-client)
- [https://github.com/n2ptune/animeql-server](https://github.com/n2ptune/animeql-server)

서버에는 nodemon으로 동작하는 기본 명령어가 존재합니다. (기본적으로 4000포트)  
Server has one command to start server that 4000 port on nodemon by default `yarn dev`

## Demo

홈페이지와 디테일 페이지에 대한 2개의 사진을 확인해보세요.  
There are two pictures for the detail page and the home page.

![home](./assets/home.png)

![detail](./assets/detail.png)

자세한 내용은 직접 페이지를 방문해서 확인해보세요.  
See the page for [details.](https://anime.unending.xyz/)

## Info

재밌게 보셨다면 **Star**를 눌러주세요!! 해당 프로젝트에 대한 질문은 **Issue**를 등록해주세요. 언제든지 환영입니다.  
If you look funny this, please press the **star**. If you have question for this project, enroll **issue**
