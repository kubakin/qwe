<template>
  <div id="app">
    <transition name="fade">
      <div v-if="$store.getters.isShow">
        <div class="blocker"></div>
        <window
          @hide="hideWindow"
          :valute="getValute"
          @save="save"
          :indexOforiginal="getIndexOfPattern"
          :head="getHeaders"
          :copy="{ ...getPattern }"
          :labelData="isNew"
        />
      </div>
    </transition>
    <div class="table">
      <div class="head">
        <div class="cell" v-for="(i, index) in getHeaders" :key="index">
          {{ i.name }}
        </div>
        <div class="cell">
          <div class="buttonGroup">
            <a
              href="/"
              @click.prevent="
                showWindow({ clearRow: getClearPattern, status: true })
              "
            >
              &#9997; Создать</a
            >
          </div>
        </div>
      </div>
      <row
        @edit="showWindow"
        @remove="remove"
        v-for="(i, index) in getRecords"
        :key="i.id"
        :index="index"
        :row="i"
      />
    </div>
    <p v-if="getRecords.length == 0" style="text-align: center">
      У вас сейчас нет данных в таблице
    </p>
  </div>
</template>

<script>
import row from "./components/row.vue";
import window from "./components/window.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    row,
    window,
  },

  computed: {
    ...mapGetters([
      "getRecords",
      "getHeaders",
      "getPattern",
      "getIndexOfPattern",
      "isShow",
      "getClearPattern",
      "isNew",
      "getValute",
    ]),
  },

  methods: {
    ...mapMutations(["showWindow", "save", "remove", "hideWindow"]),
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
body,
html,
#app,
.blocker {
  width: 100%;
  height: 100%;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
}
.blocker {
  position: fixed;
  z-index: 1;
  background: rgb(0, 0, 0, 0.5);
}
p {
  margin: 0 0 0 0;
}
.buttonGroup {
  display: flex;
  justify-content: space-around;
  padding: 5px 0 5px 0;
}
.row a,
.cell a {
  border: 1px gray solid;
  padding: 5px 10px 5px 10px;
  text-decoration: none;
  border-radius: 5px;
  color: black;
  background: white;
}

.cell {
  display: table-cell;
  border: 1px solid black;
  text-align: center;
}
.cell:nth-child(1) {
  display: none;
}
.head {
  display: table-header-group;
}

.table {
  overflow: scroll;
  margin: auto;
  display: table;
  border-collapse: collapse;
  width: 100%;
  max-width: 1000px;
}
</style>
