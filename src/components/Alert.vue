<template>
  <el-card>
    <template #header>
      <div class="clearfix">
        <span>
          {{ alert.title }}
        </span>
      </div>
    </template>
    <div>{{ alert.message }}</div>
  </el-card>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import alertStore from "@/store/alert";
import { ElMessage as Message } from "element-plus";
import { h } from "vue";

export default defineComponent({
  name: "Commander",
  setup() {
    const alert = computed(() => alertStore.state);

    const open1 = () => {
      Message({
        message: "Ceci est un rappel",
        type: "success"
      });
    }
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
