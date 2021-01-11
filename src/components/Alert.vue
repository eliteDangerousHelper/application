<template>
  <div class="window alert">
    <div>{{ alert.message }}</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import alertStore from "@/store/alert";
import { ElMessage as Message } from "element-plus";

export default defineComponent({
  name: "Alert",
  setup() {
    const alert = computed(() => alertStore.state);

    const open1 = () => {
      Message({
        message: "Ceci est un rappel",
        type: "success"
      });
    };
    open1();

    return {
      alert
    };
  }
});
</script>

<style lang="scss" scoped>
.item {
  margin-right: 40px;
  margin-top: 15px;
}
</style>
