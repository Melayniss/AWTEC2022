<template>
    <div id="board">
      <p class="board-title text-center">{{ title }}</p>
    </div>
</template>
<script>
export default {
    name: 'CommitteeBoard',
    data(){
        return{
          title: 'Board or Other Committees'
        }
    }
}
</script>
<style scoped>
#board {
  box-sizing: border-box;
  transition: all ease 0.6s;
}

#board .board-title {
  font-size: 30px;
  color: #134857;
  font-weight: bold;
}
</style>

