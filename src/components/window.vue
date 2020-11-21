<template>
  <div class="window">
    <div class="head">
      <p>{{ UpdOrCreate }}</p>
      <a href="" @click.prevent="$emit('hide')">✖</a>
    </div>
    <div class="data">
      <div class="inp">
        <div class="alertdata" v-for="(obj, index, key) in copy" :key="key">
          <p>{{ head[key].name }}</p>
          <div class="inputBlock">
            <div :class="index">
              {{ index | addValute }}
            </div>
            <input
              :step="[head[key].type == 'number' ? '0.1' : '']"
              :type="head[key].type"
              :disabled="index | isId"
              v-model="copy[index]"
            />
          </div>
          
        </div>
      </div>
    </div>
    <p v-if="error" style="align-self: center; color: red">
      Заполните все поля
    </p>

    <div class="foot">
      <button v-if="true" @click="notEmty()">&#10003; {{ UpdOrCreate }}</button>

      <button @click.prevent="$emit('hide')">&#10006; Отмена</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "window",
  props: ["copy", "head", "indexOforiginal", "labelData", "valute"],
  data() {
    return {
      error: false,
    };
  },
  watch: {
    copy(val){
      alert(val)
    }
  },
  methods: {
    notEmty() {
      this.error = false;
      for (let i in this.copy) {
        if (this.copy[i] === '' && i != "discontin" &&  i!='id') {
          this.error = true;
        }
      }
      if (this.error == false) {
        this.$emit("save", { index: this.indexOforiginal, newData: this.copy });
      }
    },
  },
  computed: {
    UpdOrCreate() {
      if (this.labelData == false) return "Редактировать";
      return "Создать";
    },
    getPrice() {
      return this.copy.price
    }
  },

  filters: {
    isId(index) {
      if (index == "id") {
        return true;
      }
    },
    addValute(index) {
      if (index == "price") {
        return "$";
      }
    },
  },
};
</script>
<style scoped>
.window {
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0px;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  max-width: 400px;
  min-width: 200px;
  position: absolute;
  background: white;
  border: 1px solid gray;
  justify-content: space-around;
  transition: height 10s ease-out 0.5s;
}
.alertdata p {
  text-align: right;
  margin-right: 30px;
  flex: 1;
  align-self: center;
}
.data {
  height: 80%;
}
.alertdata {
  margin: 5px 0 5px 0;
}
.price,
input {
  font-size: 15px;
  height: 15px;
}
.price {
  position: relative;
  width: 0px;
  padding: 11px 0px 10px 0px;
  left: 10px;
}
input {
  border-radius: 3px;
  float: left;
  text-align: left;
  border: 0px;
  padding: 10px 10px 10px 10px;
  font-size: 15px;
  height: 15px;
  outline: none;
  width: 100%;
  flex: 1;
  border: 1px solid gray;
}

.inputBlock {
  border: 0;
}
.price + input {
  padding-left: 18px;
}
.inputBlock {
  display: flex;
  width: 50%;
}
.alertdata {
  display: flex;
  padding: 0 50px 0 50px;
}
.foot {
  background: #e1e1e1;
  display: flex;
  height: 10%;
  border-bottom: 1px solid gray;
  justify-content: flex-end;
  border: 1px solid gray;
  padding: 5px 0 5px 0;
}
.foot button {
  margin-right: 5px;
}
.head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  border-bottom: 1px solid gray;
  background: #e1e1e1;
}
.head a {
  margin-right: 10px;
  color: black;
  text-decoration: none;
}
.head p {
  margin-left: 10px;
}
</style>
