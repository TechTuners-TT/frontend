<template>
  <svg
    viewBox="0 0 70 70"
    fill="none"
    :width="widthAttr"
    :height="heightAttr"
    overflow="visible"
  >
    <path
      d="M18.2051 70H51.794C61.8334 70 70 61.6743 70 51.4407L69.9994 18.5578C69.9994 8.32534 61.8323 0 51.7934 0H18.206C8.16657 0 0 8.32564 0 18.5578V51.4407C0 61.6749 8.16627 70 18.2051 70ZM5.72063 18.5578C5.72063 11.5409 11.3201 5.83286 18.2051 5.83286H51.794C58.6785 5.83286 64.2779 11.5409 64.2779 18.5578V51.4407C64.2779 58.4576 58.6785 64.1668 51.7934 64.1668H18.206C11.3215 64.1668 5.72211 58.4576 5.72211 51.4407L5.72063 18.5578Z"
      :fill="colorAttr"
    />
    <path
      d="M21.3675 58.8177C26.8411 58.8177 31.2922 55.0294 31.2922 50.3727V25.6014L50.963 19.9534V38.3757C49.6825 37.8618 48.2676 37.5519 46.7605 37.5519C41.2869 37.5519 36.8358 41.3414 36.8358 45.9987C36.8358 50.6556 41.2869 54.4437 46.7605 54.4437C52.2341 54.4437 56.6852 50.6554 56.6852 45.9987V19.2992C56.6852 17.6129 55.9279 16.0618 54.6093 15.044C53.2931 14.0256 51.625 13.6981 50.0268 14.1609L29.3859 20.0882C27.1393 20.7344 25.5687 22.8464 25.5687 25.2266V42.7503C24.2888 42.2364 22.874 41.9265 21.3669 41.9265C15.8933 41.9265 11.4422 45.7161 11.4422 50.3734C11.4422 55.0302 15.8938 58.8177 21.3675 58.8177ZM46.7599 48.6093C44.3542 48.6093 42.5575 47.2305 42.5575 45.9975C42.5575 44.7639 44.3542 43.384 46.7599 43.384C49.1657 43.384 50.9624 44.764 50.9624 45.9975C50.9624 47.2311 49.1657 48.6093 46.7599 48.6093ZM21.3675 47.7591C23.7732 47.7591 25.5699 49.1391 25.5699 50.3726C25.5699 51.6062 23.7732 52.9845 21.3675 52.9845C18.9617 52.9845 17.165 51.6057 17.165 50.3726C17.165 49.1391 18.9617 47.7591 21.3675 47.7591Z"
      :fill="colorAttr"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

interface Props {
  width?: string;
  height?: string;
  size?: string;
  color?: string;
}

export default defineComponent({
  name: "IconSVG",
  props: {
    width: String,
    height: String,
    size: String,
    color: {
      type: String,
      default: "currentColor",
    },
  },
  setup(props: Props) {
    const widthAttr = computed(() => {
      if (props.height) return undefined;
      if (props.size) return props.size;
      return props.width || "70px";
    });

    const heightAttr = computed(() => {
      if (props.width) return undefined;
      if (props.size) return props.size;
      return props.height || "70px";
    });

    const colorAttr = computed(() => props.color || "currentColor");

    return {
      widthAttr,
      heightAttr,
      colorAttr,
    };
  },
});
</script>
