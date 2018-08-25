---
title: "Chrome Blink LazyLoad"
date: 2018-08-25 14:55:00 -0400
---

<h3>크롬의 Blink LazyLoad</h3>

크롬브라우저가 제공하는 'Blink LazyLoad'는 사용자의 Viewport에 표시될 컨텐츠의 렌더링 속도 향상과 효율적인 네트워크 데이터 메모리 사용을 위해 만들어 졌습니다.

이미지와 iFrame을 분석해 중요성을 평가한 후, 현재 Viewport에 필수적이지 않은 요소는 지연시키거나 아예 로드하지 않습니다.

지연되어 있던 요소는 사용자가 그 요소의 근처로 스크롤 했을 때에 로드되어 웹 페이지가 더 효율적으로 작동하게 됩니다.

<h3>사용방법</h3>

image나 iFrame 태그 내부에 lazyload라는 속성을 사용하면 됩니다.

- lazyload="on" : LazyLoad 속성을 적용해서 해당 내용으로 사용자가 이동할 때까지 로드가 지연됩니다.
- lazyload="off" : 페이지 로딩 시에 즉시 로드합니다. 웹 페이지의 필수 자원일 경우 사용합니다.
- lazyload="auto" : 로드 여부를 브라우저가 결정합니다.(lazyload속성을 사용하지 않을 경우와 같은 효과를 가져옵니다.)

<h3>주의점</h3>

필수적인 iFrame나 이미지를 LazyLoad 할 경우 문제가 발생할 수 있습니다.

사용자가 스크롤 하지 않는 경우 전혀 로드되지 않을 수 있기 때문에 신중하게 사용해야 합니다.

현재 시점에서 LazyLoad는 크롬카나리아에서만 사용할 수 있으며 두 가지 필수 플래그를 필요로 합니다.

* chrome://flags/#enable-lazy-image-loading
* chrome://flags/#enable-lazy-frame-loading
