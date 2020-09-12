<template>  
    <a :href="href" :class="[`dr_link--${type}`,'dr_link',`dr_link_disabled--${type}`,{'is--underline':underline, 'is--disabled':disabled}, disabled ? `is--disabled--${type}`: '']">
        <dr-icon :icon="icon" v-if="icon"></dr-icon>
        <span>
          <slot></slot>
        </span>
    </a>
</template>

<script>
export default {
  name:'DrLink',
  props:{
      icon:{
          type:String,
          default:''
      },
      type:{
          type:String,
          default:'default'
      },
      disabled:{
          type:Boolean,
          default:false
      },
      underline:{
          type:Boolean,
          default:false
      },
      href:{
          type:String,
          default:''
      }
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style lang='scss' scoped>
.dr_link{
    font-family: inherit;
    font-size: 14px;
    text-decoration: none;
    

    &--default{
      color: #606266;
      &:hover,
      &:focus{
          color: #409eff;
          text-decoration: underline;
      }
    }

    &--primary{
        color: #409eff;
        &:hover,
        &:focus{
          color: #66b1ff;
          text-decoration: underline;
      }
    }

    &--success{
        color: #67c23a;
        &:hover,
        &:focus{
          color: #85ce61;
          text-decoration: underline;
      }
    }

     &--warning{
        color: #e6a23c;
        &:hover,
        &:focus{
          color: #ebb563;
          text-decoration: underline;
      }
    }

     &--danger{
        color: #f56c6c;
        &:hover,
        &:focus{
          color: #f78989;
          text-decoration: underline;
      }
    }

     &--info{
        color: #909399;
        &:hover,
        &:focus{
          color: #a6a9ab;
          text-decoration: underline;
      }
    }

    &.is--underline{
        text-decoration: none;
    }
    &.is--disabled{
      cursor: not-allowed;
    }

    &.is--disabled--default{
      color: #c0c4cc;
    }
    &.is--disabled--primary{
      color: #a0cfff;
    }
    &.is--disabled--success{
      color: #b3e19d;
    }
    &.is--disabled--warning{
      color: #f3d19e;
    }
    &.is--disabled--danger{
      color: #fab6b6;
    }
    &.is--disabled--info{
      color: #c8c9cc;
    }
}
</style>