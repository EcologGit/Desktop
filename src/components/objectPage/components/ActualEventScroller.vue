<template>
  <div class="object-events" v-if="actualEvents.length > 0">
    <p>Мероприятия</p>
    <div style="display: flex; flex-direction: row; gap: 20px; cursor: default;">
      <div
        class="small-list events custom-slider-small-list small-list-container"
        ref="eventSlider"
        @mousedown="mouseDownHandler"
        @mouseup="mouseUpHandler"
      >
        <div
          class="event-small-card"
          v-for="actualEvent in actualEvents"
          v-bind:key="actualEvent.id"
        >
        <router-link :to="`/review/events/${actualEvent.id}`">
          <img
            class="small-card-img"
            v-bind:src="getMediaSrc(actualEvent.photo)"
            alt=""
          /></router-link>
          <div class="small-card-name">
            <p class="small-card-p">{{ actualEvent.name }}</p>
          </div>
          <div class="parameters-object">
            <div class="parameter-object date">
              <img
                class="icon-margin"
                width="18"
                height="16"
                src="../../../assets/imgs/calendar.png"
                alt=""
              />
              {{ actualEvent.date }}
            </div>
            <div class="parameter-object time">
              <img
                class="icon-margin"
                width="18"
                height="18"
                src="../../../assets/imgs/clock.png  "
                alt=""
              />
              {{ actualEvent.time }}
            </div>
          </div>
          <div :class="['param-object', 'status', `${getStatusClass(actualEvent.status_id)}`]">
            {{ getStatusName(actualEvent.status_id) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./styles.css">
</style>

<script>
import { url } from "@/main.js";
import moment from "moment";
import { eventStatuses } from "..//..//..//consts//eventStatus//eventStatus"
import "..//..//..//consts//eventStatus//styles.css"
export default {
  props: {
    objectId: Number,
  },
  data() {
    return {
      actualEvents: [],
      eventStatusesDict: [],
      urlNextActualEvent: `${url}/review/actual_events/nature_object/${this.objectId}`,
      isClick: false,
      startScrollCoordinateX: null,
    };
  },
  created() {
    return {
      actualEvents: this.fetchActualEvents(this.urlNextActualEvent),
      eventStatusesDict: this.fetchEventsStatusDict(
        `${url}/review/statuses-event-dict/`
      ),
    };
  },
  methods: {
    handleMouseOver(event) {
      if (this.isClick && this.startScrollCoordinateX) {
        this.$refs.eventSlider.scrollLeft +=
          (this.startScrollCoordinateX - event.clientX) * 2;
        this.startScrollCoordinateX = event.clientX;
      }
    },
    mouseDownHandler(event) {
      event.preventDefault();
      this.isClick = true;
      this.startScrollCoordinateX = event.clientX;
      const once = {
        once: true,
      };
      window.addEventListener(
        "mouseup",
        () => {
          this.isClick = false;
          this.startScrollCoordinateX = null;
          window.removeEventListener("mouseover", this.handleMouseOver);
        },
        once
      );
      window.addEventListener("mouseover", this.handleMouseOver);
    },
    getMediaSrc(eventUrl) {
      return `${url}${eventUrl}/`;
    },
    getStatusName(statusId) {
      return this.eventStatusesDict
        ? this.eventStatusesDict.find((key) => key.status_id === statusId)?.name
        : "";
    },
    getStatusClass(status_id) {
      let statusName = this.getStatusName(status_id);
      if (statusName) {
        return Object.entries(eventStatuses).find((el) => el[1] === statusName)[0]
      }
      return ''
    },
    rightScrollEvent() {
      const slider = this.$refs.eventSlider;
      slider.scrollLeft += 150;
    },
    leftScrollEvent() {
      const slider = this.$refs.eventSlider;
      slider.scrollLeft -= 150;
    },
    async fetchEventsStatusDict(urlEventStatuses) {
      await fetch(urlEventStatuses)
        .then((response) => response.json())
        .then((response) => {
          this.eventStatusesDict = response.results;
        });
    },
    async fetchActualEvents(url) {
      await fetch(url)
        .then((response) => response.json())
        .then((response) => {
          this.actualEvents = response.results.map((key) => {
            return {
              id: key.pk,
              date: moment(key.time_start).format("DD.MM.YYYY"),
              time: moment(key.time_start).format("hh:mm"),
              ...key,
            };
          });
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        });
    },
  },
};
</script>
