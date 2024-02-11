<template>
  <VueModal
    :isVisible="isVisible"
    :modalClass="['modal-content-filter-border', 'padding-gap-32']"
    width="410px"
  >
    <p>Сортировка</p>
    <div class="sorting">
      <div class="sorting-part">
        <div class="part-label">Варианты отображения</div>
        <div class="part-options">
          <div class="sort-option">
            <input
              type="radio"
              id="alphabet"
              value="name"
              name="option"
              v-model="filters.ordering"
            />
            <label for="alphabet">По алфавиту</label>
          </div>
          <div class="sort-option">
            <input
              type="radio"
              id="rating"
              value="report_count"
              name="option"
              v-model="filters.ordering"
            />
            <label for="rating">По рейтингу</label>
          </div>
          <div class="sort-option">
            <input
              type="radio"
              id="popular"
              value="sum_rating"
              name="option"
              v-model="filters.ordering"
            />
            <label for="popular">По популярности</label>
          </div>
        </div>
      </div>
      <div class="sorting-part">
        <div class="part-label">Порядок отображения</div>
        <div class="part-options">
          <div class="sort-option">
            <input
              type="radio"
              id="ascending"
              value=""
              name="method"
              v-model="filters.method"
            />
            <label for="ascending">По возрастанию</label>
          </div>
          <div class="sort-option">
            <input
              type="radio"
              id="descending"
              value="-"
              name="method"
              v-model="filters.method"
            />
            <label for="descending">По убыванию</label>
          </div>
        </div>
      </div>
    </div>
    <button class="single-button setting-button" @click="getReadyFilter()">
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
  ordering: "name",
  method: ""
})

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits({ closeModal: null });

const { isVisible } = toRefs(props);

function getReadyFilter() {
  emit("getNewFilterValueModal", filters.value);
}
</script>
