<template>
  <el-card>
    <template #header>
      <div class="clearfix">
        <span>Commandant {{ commander.name }}</span>
      </div>
    </template>
    <div>Crédit: {{ commander.credit }}</div>
    <div>Emprunt: {{ commander.loan }}</div>
    <div v-if="commander.squadron">
      Squadron: {{ commander.squadron.name }} (rang:
      {{ commander.squadron.rank }})
    </div>
    <div>
      <el-badge type="info" :value="commander.reputation.empire" class="item">
        <el-tag effect="dark" type="info">Empire</el-tag>
      </el-badge>
      <el-badge
        type="info"
        :value="commander.reputation.federation"
        class="item"
      >
        <el-tag effect="dark" type="info">Federation</el-tag>
      </el-badge>
    </div>
    <div>
      <el-badge
        type="info"
        v-for="engineer in commander.engineers"
        :key="engineer.id"
        :value="engineer.progress"
        class="item"
      >
        <el-tag effect="dark" type="info">{{ engineer.name }}</el-tag>
      </el-badge>
    </div>
  </el-card>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import commanderStore from "@/store/commander";

export default defineComponent({
  name: "Commander",
  setup() {
    const commander = computed(() => commanderStore.state);
    return {
      commander
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
