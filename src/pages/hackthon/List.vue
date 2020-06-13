<template>
  <div class="pro-list" :style="{'padding-bottom': '20px'}">
    <div v-if="!showDetail">
      <h4 class="h flex align-center justify-center">
        <span class="icon left"></span>
        <span class="text-title text-yellow">项目名称</span>
        <span class="icon right"></span>
      </h4>
      <div class="card-list">
        <div class="card-item flex" v-for="(item, index) in programs" :key="index">
          <div class="content flex flex-direction align-center justify-center">
            <span class="bage">{{item.id}}</span>
            <div class="title text-trunct">
              {{item.title | cut}}
            </div>
            <div class="auth">提出人: {{item.product.name}}</div>
          </div>
          <div class="actions flex justify-center align-center">
            <span class="text-yellow vertical-lr" @click="commit(item)">{{ item.rating }}</span>
          </div>
        </div>
      </div>
      <button class="btn bg-yellow block" @click="submit" ></button>
    </div>
    <score v-else @showDetail="toggleShowDetail" :selected="selected" :sum="programs.length" :current="currentIndex"></score>
  </div>
</template>

<script>
import { getProgramList } from '@/api/api'
import Score from './Score'
export default {
  name: 'list',
  components: {
    Score
  },
  data () {
    return {
      programs: [],
      showDetail: false,
      selected: {},
      currentIndex: 1
    }
  },
  filters: {
    cut (val) {
      if (val.length > 10) {
        return val.substring(0, 10) + '...'
      } else {
        return val
      }
    }
  },
  methods: {
    update () {
    },
    submit () {
      console.log(12213123)
    },
    init () {
      getProgramList(1).then((res) => {
        console.log(res)
        this.programs = res.data
      })
    },
    commit (item) {
      console.log(item)
      this.showDetail = true
      this.selected = item
      this.currentIndex = this.programs.indexOf(item) + 1
      // this.$router.push({name: 'program', 'id': id})
    },
    toggleShowDetail (val) {
      this.showDetail = val
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style>
  /*-----common---------*/
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    margin: 0;
    padding: 0;
  }
  #app {
    font-family:'PingFang-SC-Medium', Helvetica, 'Avenir', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: auto;
    width: 10rem;
    max-width: 750px;
  }
  .bg{
    background-image: url(../../assets/images/background1@2x.png);
    background-size: cover;
    background-repeat: repeat;
    /*height: 100vh;*/
  }
  .flex {
    display: flex;
  }

  .basis-xs {
    flex-basis: 20%;
  }

  .basis-sm {
    flex-basis: 40%;
  }

  .basis-df {
    flex-basis: 50%;
  }

  .basis-lg {
    flex-basis: 60%;
  }

  .basis-xl {
    flex-basis: 80%;
  }

  .flex-sub {
    flex: 1;
  }

  .flex-twice {
    flex: 2;
  }

  .flex-treble {
    flex: 3;
  }

  .flex-direction {
    flex-direction: column;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .align-start {
    align-items: flex-start;
  }

  .align-end {
    align-items: flex-end;
  }

  .align-center {
    align-items: center;
  }

  .align-stretch {
    align-items: stretch;
  }

  .self-start {
    align-self: flex-start;
  }

  .self-center {
    align-self: flex-center;
  }

  .self-end {
    align-self: flex-end;
  }

  .self-stretch {
    align-self: stretch;
  }

  .align-stretch {
    align-items: stretch;
  }

  .justify-start {
    justify-content: flex-start;
  }

  .justify-end {
    justify-content: flex-end;
  }

  .justify-center {
    justify-content: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .justify-around {
    justify-content: space-around;
  }
  .text-trunct{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .text-center{
    text-align: center;
  }
  .text-yellow{
    color: rgba(255,255,0,1)
  }
  .text-gray{
    color: rgba(134,131,117,1)
  }
  .nav{
    line-height: 2;

  }
  .nav-item{
    white-space: nowrap;
    margin: 0 0.1rem;
    color: skyblue;
    text-decoration: none;
    font-size: 0.45rem;
  }
  /*-----common---------*/
  img {
    width: 100%;
    height: 100%;
  }

  .pro-list {
    padding: 0 0.64rem;
  }

  .pro-list .h {
    padding: 0.8533rem 0;
    font-size: 500;
  }

  .pro-list .h .icon {
    width: 1.6rem;
    height: 0.4267rem;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .pro-list .h .icon.left {
    margin-right: 0.4266rem;
    background-image: url(../../assets/images/list/left@2x.png);
  }

  .pro-list .h .icon.right {
    margin-left: 0.4266rem;
    background-image: url(../../assets/images/list/right@2x.png);
  }

  .card-item {
    position: relative;
    margin-bottom: 0.513rem;
    height: 3.8rem;
    border-radius: 6px;
    border: 2px solid #fff;
    color: #fff;
    overflow: hidden;
  }

  .card-item .bage {
    position: absolute;
    left: 0;
    top: 0;
    width: 0.933rem;
    height: 0.8rem;
    font-size: 0.64rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: #111;
    background: url(../../assets/images/list/label@2x.png) no-repeat;
    background-size: contain;
  }

  .card-item .title {
    margin-bottom: 0.46rem;
    font-size: 0.5867rem;
  }

  .card-item .content {
    flex: 1;
    border-right: 2px solid #fff;
  }

  .card-item .content .auth {
    font-size: 0.32rem;
  }

  .card-item .actions {
    width: 2.133rem;
    flex: 0 0 2.133rem;
    font-size: 0.4266rem;
  }

  .card-item .actions .splite {
    height: 1px;
    width: 1.85rem;
    margin: 0.32rem 0;
    background: #666;
  }

  .pro-list .btn {
    height: 1.74666rem;
    width: 100%;
    display: block;
    border: none;
    background: url(../../assets/images/list/submit@2x.png);
    background-size: contain;
    background-repeat: no-repeat;
  }

  .vertical-lr {
    white-mode: vertical-lr;
    flex: 0 0 0.1rem;
  }

  .block {
    width: 100%;
    display: block;
  }
</style>
