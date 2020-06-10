<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in carouselList" :key="item.id">
        <img :src="item.imgUrl" />
      </div>
      
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>



<script type="text/ecmascript-6">
    import Swiper from 'swiper'

    export default {
        name :'Carousel',
        props:{
            carouselList:Array,
            autoplay:Boolean
     },
        watch:{
            carouselList(value){
                this.$nextTick(() =>{
                this.initSwiper()
                })
            }
        },


        mounted() {
           
         },

        methods: {
            initSwiper(){
                new Swiper (this.$refs.swiper,{
                loop: true, 
                autoplay : this.autoplay,

                pagination: {
                    el: '.swiper-pagination',
                },

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            })    
        }
     } 
}
</script>

<style scoped>

</style>