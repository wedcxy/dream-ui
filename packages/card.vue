<template>
  <div :class="['dr_card',{'show':show}]" :style="{backgroundColor:backgroundColor, color:entiretyColor,borderColor:borderColor,boxShadow:`${borderColor} 0px 1px 4px`}">
    <div :class="['dr_card_header',{'headerTextCenter':titleCenter}]" :style="{color:titleColor}" v-if="headerShow">
      <slot name="header" >
        <strong></strong>
      </slot>
    </div>
    <div class="dr_card_body">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:"DrCard",
  data() {
    return {};
  },
  props:{
    backgroundColor:{
      type:String,
      default:'#fff'
    },
    entiretyColor:{
      type:String,
      default:'#303133'
    },
    show:{
      type:Boolean,
      default:true
    },
    cardBorder:{
      type:String,
      default:'#fff'
    },
    titleCenter:{
      type:String,
      default:false
    },
    titleColor:{
      type:String,
      default:'#303133'
    },
    borderColor:{
      type:String,
      default:'#dadada'
    }
  },
  computed:{
    headerShow(){
      if(this.$slots.header){
        return true
      }else{
        return false
      }
    }
  },
 
};
</script>

<style lang='scss' scoped>
.dr_card{
  font-family: 宋体;
  width:85%;
  margin: 0 auto;
  min-height: 30px;
  font-size: 16px;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  border: 1px solid #dadada;
  .dr_card_header{
    height: 30px;
    border-bottom: 1px solid #d7dbdd;
    font-size: 20px;
    margin-bottom: 10px;
    &.headerTextCenter{
      text-align: center;
    }
  }
}
.show{
    box-shadow:#dadada 0px 1px 4px;
  }
</style>