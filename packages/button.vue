<template>
  <button
    :class="['dr-button',type,{'is-round':round,'is-circle':circle},size]"
    @click="monitor"
  >
    <dr-icon :icon="icon" :style="show? '' : 'margin-right:5px'" v-if="icon"></dr-icon>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "DrButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: 'default'
    }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    monitor(e) {
      this.$emit("click", e);
    }
  },
  created() {
    if (this.$slots.default == undefined) {
      this.show = true;
    }
  }
};
</script>

<style lang='scss' scoped>
.dr-button {
  line-height: 1;
  white-space: nowrap;
  transition: 0.1s;
  box-sizing: border-box;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  outline: none;
  background: #fff;
  text-align: center;
  border: 1px solid #dcdfe6;
  font-family: inherit;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }

  &.primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover,
    &:focus {
      background: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
  }

  &.success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:focus,
    &:hover {
      background: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }
  }

  &.info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    &:focus,
    &:hover {
      background: #a6a9ad;
      border-color: #a6a9ad;
      color: #fff;
    }
  }

  &.warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:focus,
    &:hover {
      background: #ebb563;
      border-color: #ebb563;
      color: #fff;
    }
  }

  &.danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:focus,
    &:hover {
      background: #f78989;
      border-color: #f78989;
      color: #fff;
    }
  }

  &.is-round {
    border-radius: 20px;
  }
  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }

  &.medium {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  &.small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
  }
  &.mini {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px;
  }

  &.is-disabled{

  }
}
</style>