# Docker 배포 프로젝트
> 해당 프로젝트는 배포 자동화 솔루션인 Travis CI를 이용하여 클라우드인 AWS에 도커환경을 구축한 프로젝트입니다.

<p align="center">
  <br>
  
![image](https://github.com/minju7346/docker/assets/58619427/2b700d60-41b4-45ac-a43a-8f6cbcb732b0)

  <br>
</p>

## 목차
  
- [ 1. 프로젝트 개요 ](#1)
  
- [ 2. 기술 스택 ](#2)
  
- [ 3. 프로젝트 목적 ](#3)
  
- [ 4. 프로젝트 내용 ](#4)
  
- [ 5. 배운 점 & 보완할 점](#5)
  
  <br/><br/><br/><br/><br/>
  
  
  
<a name="1"></a>
## 1. 프로젝트 개요
<br/>

해당 프로젝트는 풀스택으로 개발된 웹 애플리케이션을 도커 이미지로 빌드하여 한번에 배포할 수 있도록 만든 프로젝트로, 자동화 배포 기능을 사용하였으며 클라우드 환경 위에 구현하였다. 
이를 통해 도커 배포에 익숙해지고 AWS의 배포 관련 서비스들을 익히기 위해 진행하였다.

<br/><br/><br/><br/>

<a name="2"></a>
## 2.기술 스택
<br/>

| Docker | Travis CI |  AWS  |  Node   |  React  | 
| :--------: | :--------: | :------: | :-----: |  :-----: |
|   ![docker_official_logo_icon_169250](https://github.com/minju7346/docker/assets/58619427/1c32b7f7-5220-4c77-aeb2-ca1447558f11) | ![283376](https://github.com/minju7346/docker/assets/58619427/4e6e6aac-c353-4102-a414-349dd0012c71) | ![aws](https://github.com/minju7346/docker/assets/58619427/efc892f3-cf2e-4e0f-954d-c3a92bd740b8) | ![img (1)](https://github.com/minju7346/docker/assets/58619427/de781084-6409-43b4-adb7-db0b308830ea) | ![img](https://github.com/minju7346/docker/assets/58619427/0934a4d4-226b-4136-98d8-9d39634ced55) |
 
<br/><br/><br/><br/><br/>


<a name="3"></a>
## 2. 프로젝트 목적
<br/>

1. 도커 환경 생성 및 구축
2. 도커 이미지 생성 및 Compose 기능을 통해 연동
3. 도커 허브로 이미지 빌드 및 Pull 기능 구현
4. Travis CI를 통한 자동화 배포 기능 구현
5. AWS Elastic Beanstack, RDS, S3 등 배포 환경을 위한 AWS 기능 활용


<br><br><br><br><br>

<a name="4"></a>
## 4. 프로젝트 내용

### 프로젝트 설계

<img width="445" alt="스크린샷 2023-07-29 오후 8 53 56 (1)" src="https://github.com/minju7346/docker/assets/58619427/3f7a0ea5-168f-459f-b814-9a432303726c">

<br>

Nginx의 프록시 기능을 이용하여 URL에 따라 프론트엔드로 보낼 요청과 백엔드로 보낼 요청을 구분하여 보냈다.
<br>
또한 프론트엔드 안에 있는 Nginx는 정적파일인 JS, HTML, CSS등의 파일들을 serving해주는 기능을 수행한다.
<br><br>
-> 이 방법으로 구현할 시, request를 보낼때 host이름이나 포트가 바뀌어도 변경안해도 된다.
<br><br><br><br>

### 프로젝트 진행 과정

1. 전체 소스 코드 작성 (NodeJS, React)
2. Dockerfile 작성
   - 개발환경은 Dockerfile.dev로 운영환경은 Dockerfile로 구분하였다.
   - Frontend, Backend, Nginx, Mysql에 대한 도커 이미지로 생성할 서비스들에 대해 작성하였다.
3. Docker-compose를 작성하여 컨테이너들을 연동한다.
4. Github에 Push
5. Travis CI
   - 테스트 코드 실행 후 성공시 각각의 Dockerfile을 이용하여 도커 이미지를 빌드하고 Docker Hub로 전달한다.
6. Docker Hub
   - Travis CI에서 빌드된 이미지를 보관한다.
   - AWS의 Elastic Beanstalk에서 요청할떄 이미지를 전달한다.
7. AWS Elastic Beanstalk에서 Travis로부터 빌드된 이미지를 이용해서 도커환경을 클라우드에 배포한다.
   - 도커허브에서 빌드된 이미지를 가져오기때문에  EB에서는 빌드과정 없이 진행된다.

<br><br><br><br><br><br><br>
<a name="5"></a>

## 5. 배운 점 & 아쉬운 점

<p align="justify">
  
  ### 배운점
  도커 환경을 통해 웹 애플리케이션 개발의 모든 부분을 Compose를 통해 한번에 배포할 수 있게 되었고, 자동화 배포 기능을 통해 번거로운 배포 과정을 단축시킬 수 있었다. 또한 AWS를 통해 배포를 위한 다양한 서비스들을 익힐 수 있었다.
<br/>

  ### 아쉬운 점
  무중단 배포 서비스가 될 수 있도록 자동 Fail-over기능을 추가하면 좋을 것 같다. 
  이외에도 다양한 도커 이미지들을 빌드해보고 더 복잡한 애플리케이션을 배포할 수 있도록 숙련도를 높여야 할 것 같다.
</p>

<br>

