<template>
  <div class="row">
    <div class="cell" v-for="(i, index) in row" :class="index" :key="index">
      {{ i | toFix(index)}}
    </div>
    <div class="cell">
      <div class="buttonGroup">
        <a
          href="/"
          @click.prevent="$emit('edit', { index: index, status: false })"
          >&#9997; Редактировать</a
        ><a href="/" @click.prevent="$emit('remove', row.id)">
          &#128465; Удалить</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "row",
  props: ["row", "index"],
  filters: {
    toFix(value, index) {
      if (index == 'price' )
      return Number(value).toFixed(2)
      return value
    }
  }
};
</script>

<style scoped>
.price::before {
  content: "$";
}
.row {
  display: table-row;
}
.row:nth-child(2n) {
  background: #d8d8d8;
}
</style>
