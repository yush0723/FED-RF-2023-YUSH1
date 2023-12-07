// 뷰라우터 인스턴스 설정파일 - glist-router.js



// 라우터 템플릿 만들기
let Glist1 = {
    template: `
        <section>
            <!-- 필터옵션 체크박스구역 -->
            <div id="optbx">
                <label for="men">관광지</label>
                <input type="checkbox" id="men"
                v-model="$store.state.chkarr[0]"
                @change="$store.commit('resCheck')">

                <label for="women">음식점</label>
                <input type="checkbox" id="women"
                v-model="$store.state.chkarr[1]"
                @change="$store.commit('resCheck')">

                <label for="style">카페</label>
                <input type="checkbox" id="style"
                v-model="$store.state.chkarr[2]"
                @change="$store.commit('resCheck')">

            </div>

            <!-- 상품리스트박스 -->
            <div class="grid">
                <div 
                    v-for="
                        (v,i) in $store.state.gdata
                    "
                    v-if="
                        v.cat==$store.state.selnm[0] ||
                        v.cat==$store.state.selnm[1] ||
                        v.cat==$store.state.selnm[2]                 
                    "
                    @click="$store.commit('setBtn')"
                
                >

                
                <!-- 파라미터가 있는 뷰라우터는 이름으로 호출! -->
                <router-link 
                    v-bind:to="{
                        name:'det',
                        params:{id : v.idx, list : $route.path}
                    }">
                [{{v.idx}}]
                    <img 
                        v-bind:src="
                        './images/goods/'+
                        v.cat +
                        '/'+v.ginfo[0]+'.png'  
                        " alt="dress" />
                    <aside>
                        <h2>{{v.ginfo[1]}}</h2>
                        <h3>{{v.ginfo[3]}}</h3>
                    </aside>


                </router-link>

                    
                </div>
            </div>
        </section>
    `,
};


// 라우터 템플릿 만들기
let Glist2 = {
    template: `
        <section>
            <!-- 필터옵션 체크박스구역 -->
            <div id="optbx">
                <label for="men">a</label>
                <input type="checkbox" id="men"
                v-model="$store.state.chkarr[0]"
                @change="$store.commit('resCheck')">

                <label for="women">b</label>
                <input type="checkbox" id="women"
                v-model="$store.state.chkarr[1]"
                @change="$store.commit('resCheck')">

                <label for="style">c</label>
                <input type="checkbox" id="style"
                v-model="$store.state.chkarr[2]"
                @change="$store.commit('resCheck')">

            </div>

            <!-- 상품리스트박스 -->
            <div class="grid">
                <div 
                    v-for="
                        (v,i) in $store.state.gdata
                    "
                    v-if="
                        v.cat==$store.state.selnm[0] ||
                        v.cat==$store.state.selnm[1] ||
                        v.cat==$store.state.selnm[2]                 
                    "
                    @click="$store.commit('setBtn')"
                
                >

                
                <!-- 파라미터가 있는 뷰라우터는 이름으로 호출! -->
                <router-link 
                    v-bind:to="{
                        name:'det',
                        params:{id : v.idx, list : $route.path}
                    }">
                [{{v.idx}}]
                    <img 
                        v-bind:src="
                        './images/goods/'+
                        v.cat +
                        '/'+v.ginfo[0]+'.png'  
                        " alt="dress" />
                    <aside>
                        <h2>{{v.ginfo[1]}}</h2>
                        <h3>{{v.ginfo[3]}}</h3>
                    </aside>


                </router-link>

                    
                </div>
            </div>
        </section>
    `,
};

// 라우터 템플릿 만들기
let Glist3 = {
    template: `
        <section>
            <!-- 필터옵션 체크박스구역 -->
            <div id="optbx">
                <label for="men">관광지</label>
                <input type="checkbox" id="men"
                v-model="$store.state.chkarr[0]"
                @change="$store.commit('resCheck')">

                <label for="women">음식점</label>
                <input type="checkbox" id="women"
                v-model="$store.state.chkarr[1]"
                @change="$store.commit('resCheck')">

                <label for="style">카페</label>
                <input type="checkbox" id="style"
                v-model="$store.state.chkarr[2]"
                @change="$store.commit('resCheck')">

            </div>

            <!-- 상품리스트박스 -->
            <div class="grid">
                <div 
                    v-for="
                        (v,i) in $store.state.gdata
                    "
                    v-if="
                        v.cat==$store.state.selnm[0] ||
                        v.cat==$store.state.selnm[1] ||
                        v.cat==$store.state.selnm[2]                 
                    "
                    @click="$store.commit('setBtn')"
                
                >

                
                <!-- 파라미터가 있는 뷰라우터는 이름으로 호출! -->
                <router-link 
                    v-bind:to="{
                        name:'det',
                        params:{id : v.idx, list : $route.path}
                    }">
                [{{v.idx}}]
                    <img 
                        v-bind:src="
                        './images/goods/'+
                        v.cat +
                        '/'+v.ginfo[0]+'.png'  
                        " alt="dress" />
                    <aside>
                        <h2>{{v.ginfo[1]}}</h2>
                        <h3>{{v.ginfo[3]}}</h3>
                    </aside>


                </router-link>

                    
                </div>
            </div>
        </section>
    `,
};

// 상세보기 구성 템플릿
const Detail = {
    template: `
            
    <!-- 큰이미지 배경박스 -->
    <div id="bgbx">
        <!-- 닫기버튼 -->
        <a href="#" class="cbtn" 
        @click="$router.push($route.params.list)">
            <span class="ir">닫기버튼</span>
        </a>
        
        <!-- 큰이미지 박스 -->
        <div id="imbx">
            <div class="inx">
                
                <!-- 큰 이미지 -->
                <section class="gimg">
                <img class="magnify" 
                
                v-bind:src="
                'images/goods/'+
                
                <!-- 카테고리명(men/women/style) -->
                $store.state.gdata[$route.params.id-1].cat+
                
                '/'+
                
                <!-- 이미지명(클래스명) -->
                $store.state.gdata[$route.params.id-1].ginfo[0]+
                
                '.png'
                " alt="큰 이미지">
                
                <div class="small">
                <a href="#">
                
                <img v-for="v in 6" 
                
                v-bind:src="
                
                'images/goods/'+
                
                <!-- 카테고리명(men/women/style) -->
                $store.state.gdata[$route.params.id-1].cat+
                
                '/m'+v+'.png'
                
                " alt="작은 이미지"></a>
                </div>
                </section>
                <!-- 이미지 설명 -->
                <section class="gdesc scbar">
                
                <!--상품 정보 영역-->
                <h1>HOME &gt; WOMEN &gt; DRESS</h1>
                <div>
                <ol>
                <li>
                    <img src="images/hot_icon.png" alt="hot버튼" style="width: 50px;">
                </li>
                            
                            <li id="gtit"> {{$store.state.gdata[$route.params.id-1].ginfo[1]}} </li>
                            <li>
                                <span>최저가</span>
                                <span id="gprice"> {{$store.state.gdata[$route.params.id-1].ginfo[3]}} </span>
                            </li>
                            <li>
                                <span>지역</span>
                                <span id="gprice"> {{$store.state.gdata[$route.params.id-1].ginfo[3]}} </span>
                            </li>
                            <li>
                                <span>분류</span>
                                <span id="gprice"> {{$store.state.gdata[$route.params.id-1].ginfo[3]}} </span>
                            </li>
                            <li>
                                <span>평점</span>
                                <span id="gprice"> {{$store.state.gdata[$route.params.id-1].ginfo[4]}} </span>
                            </li>

                            <li>
                                <span>방문수</span>
                                <span id="gprice"> {{$store.state.gdata[$route.params.id-1].ginfo[5]}} </span>
                            </li>
                            
                            <li>
                                <span>비고</span>
                                <span id="gprice"> {{$store.state.gdata[$route.params.id-1].ginfo[5]}} </span>
                            </li>
                            <li>
                                <span>구매수량</span>
                                <span>
                                    <input type="text" id="sum" value="1">
                                    <!--
                                    readonly 속성은 직접입력을 막음
                                    disable 속성은 입력창의 비활성화
                                    -->
                                    <b class="chg_num">
                                        <img src="images/cnt_up.png" alt="증가">
                                        <img src="images/cnt_down.png" alt="감소">
                                    </b>
                                </span>
                            </li>
                          
                            <li class="tot">
                                <span>총합계</span>
                                <span id="total">
                                {{$store.state.gdata[$route.params.id-1].ginfo[3]}}
                                </span>
                            </li>
                        </ol>

                    </div>
                    <div>
                        <!--버튼영역-->
                        <button class="btn scbtn"
                        @click="$store.commit('setData',$route.params.id-1)"
                        >일정 추가하기</button>
                        <button class="btn"
                        @click="$store.commit('clearData')"
                        >일정 초기화</button>

                    </div>
                </section>
            </div>
        </div>
    </div>
`,
};


// 뷰라우터 인스턴스 생성하기
const router = new VueRouter({
    routes: [
        // 1. 필터 리스트
        {
            path: "/glist",
            component: Glist,
        },
        {
            path: "/glist",
            component: Glist,
        },
        {
            path: "/glist",
            component: Glist,
        },
        // 4. 상세보기 : 파라미터 필요! - 상품구분 idx로사용
        {
            // 파라미터를 쓰려면 뷰라우터 이름이 필수
            name : "det",
            path:"/detail",
            component: Detail,
        },
    ], /// routes 끝

    
    // 라우터 호출시 스크롤위치 최상단 자동이동코드!!!
    // 새로 라우팅을 할때마다 이 스크롤 메서드가 호출되어 실행됨!
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }

});

// 내보내기
export default router;