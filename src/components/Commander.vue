<template>
  <el-card>
    <template #header>
      <div class="clearfix">
        <span>
          {{ t("components.commander.commander") }}: {{ commander.name }}
        </span>
      </div>
    </template>
    <div>{{ t("components.commander.credit") }}: {{ commander.credit }}</div>
    <div>{{ t("components.commander.loan") }}: {{ commander.loan }}</div>
    <div v-if="commander.squadron">
      {{ t("components.commander.squadron") }}:
      {{ commander.squadron.name }} ({{ t("components.commander.rank") }}:
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
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "Commander",
  setup() {
    const commander = computed(() => commanderStore.state);
    const { t } = useI18n();

    return {
      commander,
      t
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
