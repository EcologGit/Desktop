<template>
  <VueModal
    :modalClass="['modal-content-filter-border', 'padding-gap-32']"
    width="410px"
    :isVisible="isVisible"
  >
    <div style="display: flex; justify-content: space-between">
      <p>Фильтры</p>
      <button
        style="
          width: 84px;
          height: 13px;
          border-radius: 25px;
          gap: 16px;
          background-color: transparent;
          border-color: transparent;
        "
        @click="resetFilter"
      >
        <p
          style="
            font-size: 14px;
            font-weight: 600;
            line-height: 11px;
            letter-spacing: 1px;
            text-align: left;
            width: 84px;
            height: 11px;
          "
        >
          СБРОСИТЬ
        </p>
      </button>
    </div>
    <div class="modal-parameter">
      <div class="label-parameter">Населенный пункт</div>
      <input
        class="search-parameter"
        type="text"
        placeholder="Поиск населенного пункта"
        v-model="filters.admarea_name"
      />
    </div>
    <div class="modal-parameter">
      <div class="label-parameter">Количество отчетов</div>
      <div class="part-options">
        <div class="sort-reportCount">
          <input
            type="radio"
            id="no_matter"
            value="no_matter"
            name="reportCount"
            v-model="filters.report_count"
          />
          <label for="no_matter">Неважно</label>
        </div>
        <div class="sort-reportCount">
          <input
            type="radio"
            id="zero"
            value="zero"
            name="reportCount"
            v-model="filters.report_count"
          />
          <label for="zero">Без отчетов</label>
        </div>
        <div class="sort-reportCount">
          <input
            type="radio"
            id="no_more_than_20"
            value="no_more_than_20"
            name="reportCount"
            v-model="filters.report_count"
          />
          <label for="no_more_than_20">Не более 20 отчетов</label>
        </div>
        <div class="sort-reportCount">
          <input
            type="radio"
            id="20_to_99"
            value="20_to_99"
            name="reportCount"
            v-model="filters.report_count"
          />
          <label for="20_to_99">От 20 до 100 отчетов</label>
        </div>
        <div class="sort-reportCount">
          <input
            type="radio"
            id="100AndMore"
            value="100AndMore"
            name="reportCount"
            v-model="filters.report_count"
          />
          <label for="more_than_100">Более 100 отчетов</label>
        </div>
      </div>
    </div>
    <button class="single-button setting-button" @click="getReadyFilter">
      <img
        class="icon-btn"
        width="18"
        height="18"
        src="@/assets/imgs/ready.png"
        alt="Ready"
      />
      Готово
    </button>
  </VueModal>
</template>

<script setup>
import VueModal from "@/components/ui/modal/VueModal.vue";
import { toRefs, defineEmits, ref } from "vue";
const filters = ref({
  report_count: "no_matter",
  admarea_name: "",
});

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
});

const resetFilter = () => {
  filters.value = {
    report_count: "no_matter",
    admarea_name: "",
  };
};

const { isVisible } = toRefs(props);
const emit = defineEmits({ closeModal: null });

function getReadyFilter() {
  emit("getNewFilterValueModal", filters.value);
}
</script>
