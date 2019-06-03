

## Next.js로 리액트 프로젝트 만들기

이 글에서는 Next.js로 리액트 프로젝트를 만드는 방법에 대해서 작성해보겠습니다.  



#### Next.js란 ?

Next.js는 ZEIT팀에서 만든 리액트 프레임워크입니다. 

프레임워크라는 타이틀을 내세운 만큼, 현대의 리액트 프로젝트에서 요구하는 많은 것들이 이미 구현되어 있어 편리하게 프로젝트를 생성 및 배포할 수 있게 만들어줍니다.

Next.js의 주요 장점들을 나열해 보면 다음과 같습니다.



- **매우 쉬운 시작** : 단지 next 모듈을 설치하고 스크립트와 폴더를 만들어 주는 것 만으로 next의 기능들을 사용할 수 있습니다. 

- **효율적인 SSR 지원** : 기본적으로 SSR을 지원하며, SSR이 불가능한 환경에서는 CSR을 통해 렌더링됩니다. 이는 SEO에 유리한 웹페이지를 만들 수 있게 만들어줍니다.
- **구조화 된 프로젝트** : 이미 여러 가지 규칙들에 의해 구조화 되어 있어, 프로젝트 구조가 명확하고 사용하기 쉽게 되어있습니다.  예를 들면 여러분이 라우트하고자 하는 페이지의 이름대로 pages폴더 안에 js / jsx 파일을 만들어주면 자동으로 라우팅됩니다.
- **커스터마이징** : 프레임워크로 제작되었음에도, 웹팩 / 바벨 / 서버 등 대부분의 기능을 내가 원하는 대로 커스터마이징해서 사용할 수 있습니다. 

- **빠른 업데이트** : Next.js는 벌써 8버전까지 릴리즈되었을 정도로 급속도로 성장하고 있습니다. 그만큼 인기가 있다는 것을 반증하는 것이라고 생각합니다. 버전이 올라갈 때 마다 속도면에서 개선되고 있으며, 최근에는 severless 형태로도 배포가 가능하게 만들어 져 앞으로도 기대가 되는 프레임워크입니다.



#### Next.js 프로젝트 생성하기

우선 프로젝트 생성 전에 필요한 프로그램들이 있습니다.

- **Nodejs ( npm )**
- **Code editor ( Webstorm, atom, VSC … )**





모두 준비되었다면 터미널 명령어에서 다음을 실행합니다.

```javascript
$ mkdir next-example
$ cd next-example
$ npm init -y
$ npm install next react react-dom --save
```



프로젝트 폴더 안의 package.json의 script를 수정해 줍니다.

```javascript
{
  ...,
	"scripts": {
    "dev": "next",
    "build" : "next build",
    "start" : "next start"  
  }
}
```



이제 프로젝트 안에 pages 폴더를 만들고 그 안에 index.js 파일을 생성해 줍니다

```
<폴더구조>
next-example
		├─ node_modules
		├─ pages
    │		└─ index.js
    └─ package.json
```



Index.js 에 내용을 추가해주면 우리의 next.js 프로젝트의 첫 페이지가 완성됩니다.



**Functional Component**

```javascript
const Index = () => {
  return (
 		<div>
    	<p>It is index page</p>
    </div>
  )
}

export default Index;
```





**Class Component**

```javascript
export default class Index extends React.Component {
  render() {
    return (
    	<div>
      	<p>It is index page</p>
      </div>
    )
  }
}
```



Functional, Class 두 가지 방법 모두 react를 사용하는 방법입니다. 

기존에는 Functional Component는 stateless component 즉 state값이 없을 때 주로 사용하던 방법이었지만 최근 react에서 react hooks를 공식 릴리즈하면서 state 사용, 다양한 라이프사이클 구현도 가능해 졌습니다. 

Next.js는 아직 Functional Component를 지원하지 않는 부분이 있기 때문에 Class Component로 작성해서 진행하겠습니다.

**참고 : [react hooks](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html)**



#### 프로젝트 실행

이제 첫번째 페이지가 만들어졌습니다

로컬 서버를 실행해서 테스트를. 하기 위해 아까 script에 입력한 명령어를 실행시켜봅시다

```javascript
$ npm run dev
```



기본 포트는 3000으로 설정되어 있습니다.

로컬 주소로 들어가서 확인해 보겠습니다. http://localhost:3000

내용이 잘 출력되셨나요 ?

만약 포트를 바꿔서 실행시키고 싶으시다면 script를 수정해주시면 됩니다

```javascript
"dev" : "next -p 3001"
```

